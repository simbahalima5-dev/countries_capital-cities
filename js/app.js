/**
 * Global Discovery - Main Application Controller
 * Pure Vanilla JS State & UI Handler
 */

class App {
  constructor() {
    this.countries = COUNTRIES_DATA;
    this.timelineEvents = CAPITAL_TIMELINE_EVENTS;
    
    // State
    this.currentTab = 'explorer';
    this.searchQuery = '';
    this.continentFilter = 'All';
    this.typeFilter = 'All';
    this.sortBy = 'name';
    this.viewMode = 'grid'; // 'grid' or 'list'
    this.bookmarks = new Set(JSON.parse(localStorage.getItem('country_bookmarks') || '[]'));
    this.theme = localStorage.getItem('site_theme') || 'dark';

    // Sub-components
    this.mapVisualizer = null;
    this.timelineView = null;
    this.quizEngine = null;
    this.compareView = null;

    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.bindDOM();
    this.renderHeroStats();
    this.renderExplorer();
    this.initSubComponents();
  }

  applyTheme(newTheme) {
    this.theme = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('site_theme', newTheme);
    const btn = document.getElementById('themeToggleBtn');
    if (btn) {
      btn.innerHTML = newTheme === 'dark' ? '☀️' : (newTheme === 'light' ? '📜' : '🌙');
    }
  }

  toggleTheme() {
    if (this.theme === 'dark') this.applyTheme('light');
    else if (this.theme === 'light') this.applyTheme('sepia');
    else this.applyTheme('dark');
  }

  bindDOM() {
    // Theme toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Navigation Tabs
    const navBtns = document.querySelectorAll('.nav-btn');
    navBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const tab = btn.getAttribute('data-tab');
        this.switchTab(tab);
      });
    });

    // Search Input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = e.target.value.toLowerCase().trim();
        this.renderExplorer();
      });
    }

    // Sort Dropdown
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortBy = e.target.value;
        this.renderExplorer();
      });
    }

    // View Toggle
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.viewMode = btn.getAttribute('data-view');
        this.renderExplorer();
      });
    });

    // Continent Filter Chips
    const continentChips = document.querySelectorAll('#continentFilters .chip-btn');
    continentChips.forEach(chip => {
      chip.addEventListener('click', () => {
        continentChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.continentFilter = chip.getAttribute('data-continent');
        this.renderExplorer();
      });
    });

    // Capital Type Filter Chips
    const typeChips = document.querySelectorAll('#typeFilters .chip-btn');
    typeChips.forEach(chip => {
      chip.addEventListener('click', () => {
        typeChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.typeFilter = chip.getAttribute('data-type');
        this.renderExplorer();
      });
    });

    // Modal Close Button
    const modalClose = document.getElementById('modalCloseBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    if (modalClose) {
      modalClose.addEventListener('click', () => this.closeModal());
    }
    if (modalOverlay) {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) this.closeModal();
      });
    }
  }

  switchTab(tabName) {
    this.currentTab = tabName;

    // Update Nav UI
    document.querySelectorAll('.nav-btn').forEach(btn => {
      if (btn.getAttribute('data-tab') === tabName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Hide all view containers
    const views = ['explorerView', 'mapView', 'timelineView', 'quizView', 'compareView', 'bookmarksView'];
    views.forEach(v => {
      const el = document.getElementById(v);
      if (el) el.style.display = 'none';
    });

    // Show target container
    const targetEl = document.getElementById(`${tabName}View`);
    if (targetEl) targetEl.style.display = 'block';

    if (tabName === 'bookmarks') {
      this.renderBookmarksView();
    }
  }

  initSubComponents() {
    this.mapVisualizer = new WorldMapVisualizer('mapView', this.countries, (id) => this.openModal(id));
    this.timelineView = new CapitalTimelineView('timelineView', this.timelineEvents, (id) => this.openModal(id));
    this.quizEngine = new QuizEngine('quizView', this.countries);
    this.compareView = new CountryCompareView('compareView', this.countries);
  }

  renderHeroStats() {
    const statsContainer = document.getElementById('heroStatsGrid');
    if (!statsContainer) return;

    const totalNations = this.countries.length;
    const totalCapitals = this.countries.length;
    let formerCapitalsTotal = 0;
    this.countries.forEach(c => formerCapitalsTotal += c.history.formerCapitals.length);

    statsContainer.innerHTML = `
      <div class="stat-card">
        <div class="stat-number">${totalNations}+</div>
        <div class="stat-label">Sovereign Nations</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${totalCapitals}</div>
        <div class="stat-label">Capital Histories</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${formerCapitalsTotal}</div>
        <div class="stat-label">Former Capitals</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">3000+</div>
        <div class="stat-label">Years of Evolution</div>
      </div>
    `;
  }

  getFilteredCountries() {
    return this.countries.filter(c => {
      // Search
      const matchQuery = !this.searchQuery || 
        c.name.toLowerCase().includes(this.searchQuery) ||
        c.capital.name.toLowerCase().includes(this.searchQuery) ||
        c.history.origin.toLowerCase().includes(this.searchQuery) ||
        c.history.formerCapitals.some(fc => fc.city.toLowerCase().includes(this.searchQuery));

      // Continent Filter
      const matchContinent = this.continentFilter === 'All' || c.continent === this.continentFilter;

      // Type Filter
      const matchType = this.typeFilter === 'All' || c.capital.type === this.typeFilter;

      return matchQuery && matchContinent && matchType;
    }).sort((a, b) => {
      if (this.sortBy === 'name') return a.name.localeCompare(b.name);
      if (this.sortBy === 'capital') return a.capital.name.localeCompare(b.capital.name);
      if (this.sortBy === 'pop-high') return b.facts.population - a.facts.population;
      if (this.sortBy === 'pop-low') return a.facts.population - b.facts.population;
      if (this.sortBy === 'year') return a.capital.establishedYear - b.capital.establishedYear;
      return 0;
    });
  }

  renderExplorer() {
    const container = document.getElementById('explorerGrid');
    if (!container) return;

    const list = this.getFilteredCountries();

    if (list.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🗺️</div>
          <h3>No Nations Found</h3>
          <p>Try clearing your search query or adjusting your continent filters.</p>
        </div>
      `;
      return;
    }

    if (this.viewMode === 'list') {
      container.innerHTML = `
        <table class="country-list-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Capital City</th>
              <th>Capital Type</th>
              <th>Established</th>
              <th>Population</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${list.map(c => `
              <tr>
                <td><strong>${c.flagEmoji} ${c.name}</strong></td>
                <td style="color: var(--accent-gold); font-weight: 700;">${c.capital.name}</td>
                <td><span class="capital-type-badge">${c.capital.type}</span></td>
                <td>${c.capital.establishedYear > 0 ? c.capital.establishedYear + ' AD' : Math.abs(c.capital.establishedYear) + ' BC'}</td>
                <td>${(c.facts.population / 1000000).toFixed(1)}M</td>
                <td>
                  <button class="btn-details" onclick="app.openModal('${c.id}')">Explore History</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } else {
      container.innerHTML = list.map(c => this.createCardHtml(c)).join('');
    }

    this.attachCardEvents();
  }

  createCardHtml(c) {
    const isBookmarked = this.bookmarks.has(c.id);

    return `
      <div class="country-card">
        <div>
          <div class="card-header">
            <div class="country-flag-box">
              <span class="flag-emoji">${c.flagEmoji}</span>
              <div class="country-title-box">
                <h3>${c.name}</h3>
                <span class="country-official-name">${c.officialName}</span>
              </div>
            </div>
            <button class="bookmark-btn ${isBookmarked ? 'active' : ''}" data-id="${c.id}" title="Save to Bookmarks">
              ${isBookmarked ? '★' : '☆'}
            </button>
          </div>

          <div class="capital-highlight">
            <div class="capital-label">Capital City</div>
            <div class="capital-name">${c.capital.name}</div>
            <span class="capital-type-badge">${c.capital.type}</span>
          </div>

          <p class="card-history-preview">${c.history.origin}</p>
        </div>

        <div class="card-footer">
          <div class="former-capitals-tag">
            📜 ${c.history.formerCapitals.length} Former Capital${c.history.formerCapitals.length === 1 ? '' : 's'}
          </div>
          <button class="btn-details" data-id="${c.id}">View History ➔</button>
        </div>
      </div>
    `;
  }

  attachCardEvents() {
    const detailBtns = document.querySelectorAll('.card-footer .btn-details');
    detailBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        this.openModal(id);
      });
    });

    const bookmarkBtns = document.querySelectorAll('.bookmark-btn');
    bookmarkBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        this.toggleBookmark(id);
      });
    });
  }

  toggleBookmark(id) {
    if (this.bookmarks.has(id)) {
      this.bookmarks.delete(id);
    } else {
      this.bookmarks.add(id);
    }
    localStorage.setItem('country_bookmarks', JSON.stringify(Array.from(this.bookmarks)));
    this.renderExplorer();
    if (this.currentTab === 'bookmarks') this.renderBookmarksView();
  }

  renderBookmarksView() {
    const container = document.getElementById('bookmarksView');
    if (!container) return;

    const list = this.countries.filter(c => this.bookmarks.has(c.id));

    if (list.length === 0) {
      container.innerHTML = `
        <div class="section-header" style="padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">⭐</div>
          <h2>Your Bookmarked Capitals List is Empty</h2>
          <p class="section-subtitle">Click the star icon on any country card to save it for quick reference and study.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = `
      <div class="section-header">
        <h2 class="section-title">⭐ Bookmarked Nations & Capitals (${list.length})</h2>
        <p class="section-subtitle">Your saved research list of world capitals</p>
      </div>
      <div class="country-grid">
        ${list.map(c => this.createCardHtml(c)).join('')}
      </div>
    `;

    this.attachCardEvents();
  }

  openModal(countryId) {
    const country = this.countries.find(c => c.id === countryId);
    if (!country) return;

    const overlay = document.getElementById('modalOverlay');
    const body = document.getElementById('modalBodyContent');
    const title = document.getElementById('modalTitle');

    if (!overlay || !body) return;

    title.innerHTML = `${country.flagEmoji} ${country.name} (${country.capital.name})`;

    body.innerHTML = `
      <div class="modal-header-banner" style="margin-bottom: 2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2 style="font-size: 2rem; color: var(--text-bright);">${country.officialName}</h2>
            <div style="color: var(--accent-gold); font-size: 1.1rem; font-weight: 700; margin-top: 0.25rem;">
              Capital: ${country.capital.name} (${country.capital.nativeName})
              <button class="speak-btn" onclick="app.speakText('${country.capital.name}, capital of ${country.name}')">
                🔊 Pronounce
              </button>
            </div>
          </div>
          <span class="capital-type-badge" style="font-size: 0.9rem; padding: 0.3rem 0.8rem;">
            ${country.capital.type} • Est. ${country.capital.establishedYear > 0 ? country.capital.establishedYear + ' AD' : Math.abs(country.capital.establishedYear) + ' BC'}
          </span>
        </div>
      </div>

      <!-- Origins & Why Capital -->
      <div style="margin-bottom: 2.5rem;">
        <h3 class="modal-section-title">🏛️ Capital Origin & Founding History</h3>
        <p style="font-size: 1rem; color: var(--text-main); line-height: 1.7; margin-bottom: 1rem;">
          ${country.history.origin}
        </p>
        <div style="background: rgba(245, 158, 11, 0.1); border-left: 4px solid var(--accent-gold); padding: 1.25rem; border-radius: var(--radius-sm);">
          <strong style="color: var(--accent-gold); display: block; margin-bottom: 0.3rem;">Why It Became Capital:</strong>
          <span style="font-size: 0.95rem; color: var(--text-main);">${country.history.whyCapital}</span>
        </div>
      </div>

      <!-- Former Capitals Section -->
      ${country.history.formerCapitals.length > 0 ? `
        <div style="margin-bottom: 2.5rem;">
          <h3 class="modal-section-title">📜 Historical Capital Relocations & Former Capitals</h3>
          <ul class="history-timeline-list">
            ${country.history.formerCapitals.map(fc => `
              <li class="history-timeline-item">
                <div style="font-weight: 700; color: var(--text-bright); font-size: 1.05rem;">
                  ${fc.city} <span style="font-size: 0.8rem; color: var(--accent-gold); margin-left: 0.5rem;">(${fc.era})</span>
                </div>
                <div style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.2rem;">${fc.reason}</div>
              </li>
            `).join('')}
          </ul>
        </div>
      ` : ''}

      <!-- Key Milestones -->
      ${country.history.keyMilestones && country.history.keyMilestones.length > 0 ? `
        <div style="margin-bottom: 2.5rem;">
          <h3 class="modal-section-title">⏱️ Key Historical Milestones</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1rem;">
            ${country.history.keyMilestones.map(m => `
              <div style="background: var(--bg-secondary); border: 1px solid var(--border-color); padding: 1rem; border-radius: var(--radius-md);">
                <span class="timeline-year" style="font-size: 0.75rem;">${m.year}</span>
                <h4 style="font-size: 1rem; margin: 0.4rem 0;">${m.title}</h4>
                <p style="font-size: 0.85rem; color: var(--text-muted);">${m.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Key Facts Grid -->
      <div style="margin-bottom: 2rem;">
        <h3 class="modal-section-title">📊 Key National & Capital Statistics</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1rem;">
          <div class="stat-card">
            <div class="stat-label">Country Population</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--text-bright);">${(country.facts.population / 1000000).toFixed(1)} Million</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Capital Population</div>
            <div style="font-size: 1.25rem; font-weight: 700; color: var(--accent-gold);">${(country.facts.capitalPopulation / 1000000).toFixed(2)} Million</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Currency</div>
            <div style="font-size: 1rem; font-weight: 600; color: var(--text-bright);">${country.facts.currency}</div>
          </div>
          <div class="stat-card">
            <div class="stat-label">Official Languages</div>
            <div style="font-size: 1rem; font-weight: 600; color: var(--text-bright);">${country.facts.officialLanguages.join(', ')}</div>
          </div>
        </div>
      </div>

      <!-- Famous Landmarks -->
      <div>
        <h3 class="modal-section-title">🏰 Iconic Capital Landmarks</h3>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
          ${country.facts.landmarks.map(lm => `
            <span style="padding: 0.4rem 0.9rem; background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: var(--radius-full); font-size: 0.85rem; color: var(--text-main);">
              🏛️ ${lm}
            </span>
          `).join('')}
        </div>
      </div>
    `;

    overlay.classList.add('active');
  }

  closeModal() {
    const overlay = document.getElementById('modalOverlay');
    if (overlay) overlay.classList.remove('active');
  }

  speakText(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      window.speechSynthesis.speak(utterance);
    } else {
      alert(`Audio synthesis not supported on this browser. Capital: ${text}`);
    }
  }
}

// Global App Instance
let app;
document.addEventListener('DOMContentLoaded', () => {
  app = new App();
});
