import { Country } from '../types';
import { AudioService } from '../services/audio';

export class CountryModal {
  private modalOverlay: HTMLElement | null = null;
  private modalTitle: HTMLElement | null = null;
  private modalBodyContent: HTMLElement | null = null;
  private modalCloseBtn: HTMLElement | null = null;

  constructor() {
    this.modalOverlay = document.getElementById('modalOverlay');
    this.modalTitle = document.getElementById('modalTitle');
    this.modalBodyContent = document.getElementById('modalBodyContent');
    this.modalCloseBtn = document.getElementById('modalCloseBtn');
    this.bindEvents();
  }

  private bindEvents(): void {
    if (this.modalCloseBtn) {
      this.modalCloseBtn.addEventListener('click', () => this.close());
    }
    if (this.modalOverlay) {
      this.modalOverlay.addEventListener('click', (e) => {
        if (e.target === this.modalOverlay) this.close();
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen()) {
        this.close();
      }
    });
  }

  public isOpen(): boolean {
    return this.modalOverlay?.classList.contains('active') || false;
  }

  public open(country: Country): void {
    if (!this.modalOverlay || !this.modalTitle || !this.modalBodyContent) return;

    this.modalTitle.innerHTML = `
      <div style="display: flex; align-items: center; gap: 0.75rem;">
        <span style="font-size: 2.2rem;">${country.flagEmoji}</span>
        <div>
          <div style="font-size: 1.6rem; font-weight: 800; line-height: 1.2;">${country.name}</div>
          <div style="font-size: 0.9rem; color: var(--text-muted); font-weight: 500;">${country.officialName}</div>
        </div>
      </div>
    `;

    const establishedYear = country.capital.establishedYear > 0 
      ? `${country.capital.establishedYear} AD` 
      : `${Math.abs(country.capital.establishedYear)} BC`;

    const formerCapitalsHtml = country.history.formerCapitals.length > 0 ? `
      <div class="modal-section">
        <h3 class="modal-section-title">🏛️ Historical Former Capitals</h3>
        <table class="former-capitals-table">
          <thead>
            <tr>
              <th>City</th>
              <th>Era</th>
              <th>Reason for Relocation</th>
            </tr>
          </thead>
          <tbody>
            ${country.history.formerCapitals.map(fc => `
              <tr>
                <td><strong>${fc.city}</strong></td>
                <td><span class="chip-badge">${fc.era}</span></td>
                <td>${fc.reason}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    ` : '';

    const milestonesHtml = country.history.keyMilestones.length > 0 ? `
      <div class="modal-section">
        <h3 class="modal-section-title">⏳ Key Capital Milestones</h3>
        <div class="milestones-timeline">
          ${country.history.keyMilestones.map(m => `
            <div class="milestone-item">
              <div class="milestone-year">${m.year}</div>
              <div class="milestone-content">
                <div class="milestone-title">${m.title}</div>
                <div class="milestone-desc">${m.description}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const triviaHtml = country.trivia.length > 0 ? `
      <div class="modal-section">
        <h3 class="modal-section-title">💡 Country Trivia & Quiz Preview</h3>
        <div class="trivia-cards-grid">
          ${country.trivia.map((t, idx) => `
            <div class="modal-trivia-card" data-index="${idx}">
              <div class="trivia-q">❓ ${t.question}</div>
              <div class="trivia-opts">
                ${t.options.map((opt, optIdx) => `
                  <button class="trivia-opt-btn" data-opt="${optIdx}" data-correct="${t.correct}">${opt}</button>
                `).join('')}
              </div>
              <div class="trivia-exp" style="display: none; margin-top: 0.75rem; font-size: 0.85rem; color: var(--accent-gold);">
                <strong>Explanation:</strong> ${t.explanation}
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    this.modalBodyContent.innerHTML = `
      <div class="modal-grid-layout">
        <!-- Main History Column -->
        <div class="modal-main-col">
          <div class="capital-banner">
            <div>
              <span class="capital-type-badge">${country.capital.type}</span>
              <h3 style="font-size: 1.5rem; color: var(--accent-gold); margin-top: 0.25rem;">
                Current Capital: ${country.capital.name}
              </h3>
              <div style="color: var(--text-muted); font-size: 0.9rem;">
                Native: <strong>${country.capital.nativeName}</strong> • Established ${establishedYear} • Pronounced "/${country.capital.pronunciation}/"
              </div>
            </div>
          </div>

          <div class="modal-section">
            <h3 class="modal-section-title">📜 Historical Origins</h3>
            <p style="margin-bottom: 1rem; color: var(--text-main); font-size: 0.975rem;">${country.history.origin}</p>

            <h3 class="modal-section-title" style="margin-top: 1.25rem;">⚖️ Why ${country.capital.name} Became Capital</h3>
            <p style="color: var(--text-main); font-size: 0.975rem;">${country.history.whyCapital}</p>
          </div>

          ${formerCapitalsHtml}
          ${milestonesHtml}
          ${triviaHtml}
        </div>

        <!-- Sidebar Facts Column -->
        <div class="modal-side-col">
          <div class="facts-card">
            <h3 class="facts-title">📊 Key Demographics & Facts</h3>
            <div class="fact-row">
              <span class="fact-label">Continent:</span>
              <span class="fact-val">${country.continent} (${country.subregion})</span>
            </div>
            <div class="fact-row">
              <span class="fact-label">Country Population:</span>
              <span class="fact-val">${(country.facts.population / 1000000).toFixed(1)} Million</span>
            </div>
            <div class="fact-row">
              <span class="fact-label">Capital Population:</span>
              <span class="fact-val">${(country.facts.capitalPopulation / 1000000).toFixed(2)} Million</span>
            </div>
            <div class="fact-row">
              <span class="fact-label">Metro Population:</span>
              <span class="fact-val">${(country.facts.metroPopulation / 1000000).toFixed(1)} Million</span>
            </div>
            <div class="fact-row">
              <span class="fact-label">Land Area:</span>
              <span class="fact-val">${country.facts.landArea.toLocaleString()} km²</span>
            </div>
            <div class="fact-row">
              <span class="fact-label">Average Elevation:</span>
              <span class="fact-val">${country.facts.elevation} meters</span>
            </div>
            <div class="fact-row">
              <span class="fact-label">Coordinates:</span>
              <span class="fact-val">${country.facts.coordinates.lat}° N, ${country.facts.coordinates.lng}° E</span>
            </div>
            <div class="fact-row">
              <span class="fact-label">Currency:</span>
              <span class="fact-val">${country.facts.currency}</span>
            </div>
            <div class="fact-row">
              <span class="fact-label">Official Languages:</span>
              <span class="fact-val">${country.facts.officialLanguages.join(', ')}</span>
            </div>
          </div>

          <div class="facts-card" style="margin-top: 1rem;">
            <h3 class="facts-title">🏰 Iconic Landmarks</h3>
            <div class="landmarks-list">
              ${country.facts.landmarks.map(l => `
                <div class="landmark-item">
                  <span>📍</span> ${l}
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;

    this.attachTriviaEvents();
    this.modalOverlay.classList.add('active');
    this.modalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  private attachTriviaEvents(): void {
    if (!this.modalBodyContent) return;
    const audio = AudioService.getInstance();
    const triviaCards = this.modalBodyContent.querySelectorAll('.modal-trivia-card');
    triviaCards.forEach(card => {
      const optBtns = card.querySelectorAll<HTMLButtonElement>('.trivia-opt-btn');
      const expEl = card.querySelector<HTMLElement>('.trivia-exp');
      optBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          optBtns.forEach(b => b.disabled = true);
          const selected = parseInt(btn.getAttribute('data-opt') || '0', 10);
          const correct = parseInt(btn.getAttribute('data-correct') || '0', 10);
          if (selected === correct) {
            btn.classList.add('correct');
            audio.playCorrectSound();
          } else {
            btn.classList.add('wrong');
            optBtns[correct]?.classList.add('correct');
            audio.playWrongSound();
          }
          if (expEl) expEl.style.display = 'block';
        });
      });
    });
  }

  public close(): void {
    if (!this.modalOverlay) return;
    this.modalOverlay.classList.remove('active');
    this.modalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}
