import { Country, SortOption, ViewMode } from '../types';
import { CountryCard } from './CountryCard';

export class Explorer {
  private countries: Country[];
  private bookmarks: Set<string>;
  private onSelectCountry: (countryId: string) => void;
  private onBookmarkToggle: (countryId: string, e: MouseEvent) => void;

  private searchQuery: string = '';
  private continentFilter: string = 'All';
  private typeFilter: string = 'All';
  private sortBy: SortOption = 'name';
  private viewMode: ViewMode = 'grid';

  constructor(
    countries: Country[],
    bookmarks: Set<string>,
    onSelectCountry: (countryId: string) => void,
    onBookmarkToggle: (countryId: string, e: MouseEvent) => void
  ) {
    this.countries = countries;
    this.bookmarks = bookmarks;
    this.onSelectCountry = onSelectCountry;
    this.onBookmarkToggle = onBookmarkToggle;
    this.bindEvents();
    this.renderHeroStats();
    this.render();
  }

  public updateBookmarks(bookmarks: Set<string>): void {
    this.bookmarks = bookmarks;
    this.render();
  }

  private bindEvents(): void {
    const searchInput = document.getElementById('searchInput') as HTMLInputElement;
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.searchQuery = (e.target as HTMLInputElement).value.toLowerCase().trim();
        this.render();
      });
    }

    const sortSelect = document.getElementById('sortSelect') as HTMLSelectElement;
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        this.sortBy = (e.target as HTMLSelectElement).value as SortOption;
        this.render();
      });
    }

    const viewBtns = document.querySelectorAll<HTMLButtonElement>('.view-btn');
    viewBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        viewBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.viewMode = (btn.getAttribute('data-view') || 'grid') as ViewMode;
        this.render();
      });
    });

    const continentChips = document.querySelectorAll<HTMLButtonElement>('#continentFilters .chip-btn');
    continentChips.forEach(chip => {
      chip.addEventListener('click', () => {
        continentChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.continentFilter = chip.getAttribute('data-continent') || 'All';
        this.render();
      });
    });

    const typeChips = document.querySelectorAll<HTMLButtonElement>('#typeFilters .chip-btn');
    typeChips.forEach(chip => {
      chip.addEventListener('click', () => {
        typeChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        this.typeFilter = chip.getAttribute('data-type') || 'All';
        this.render();
      });
    });
  }

  public renderHeroStats(): void {
    const heroStatsGrid = document.getElementById('heroStatsGrid');
    if (!heroStatsGrid) return;

    const totalCountries = this.countries.length;
    let totalCapitals = totalCountries;
    let totalFormerCapitals = 0;
    let plannedCapitalsCount = 0;

    this.countries.forEach(c => {
      totalFormerCapitals += c.history.formerCapitals.length;
      if (c.capital.type === 'Planned City') plannedCapitalsCount++;
    });

    heroStatsGrid.innerHTML = `
      <div class="stat-card">
        <div class="stat-number">${totalCountries}</div>
        <div class="stat-label">Sovereign Nations</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${totalCapitals}</div>
        <div class="stat-label">World Capital Cities</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${totalFormerCapitals}</div>
        <div class="stat-label">Historical Former Capitals</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${plannedCapitalsCount}</div>
        <div class="stat-label">Modern Planned Capitals</div>
      </div>
    `;
  }

  private filterAndSort(): Country[] {
    return this.countries
      .filter(c => {
        // Search Filter
        if (this.searchQuery) {
          const matchName = c.name.toLowerCase().includes(this.searchQuery);
          const matchCapital = c.capital.name.toLowerCase().includes(this.searchQuery);
          const matchFormer = c.history.formerCapitals.some(fc => fc.city.toLowerCase().includes(this.searchQuery));
          if (!matchName && !matchCapital && !matchFormer) return false;
        }

        // Continent Filter
        if (this.continentFilter !== 'All' && c.continent !== this.continentFilter) {
          return false;
        }

        // Capital Type Filter
        if (this.typeFilter !== 'All' && c.capital.type !== this.typeFilter) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        if (this.sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (this.sortBy === 'capital') {
          return a.capital.name.localeCompare(b.capital.name);
        } else if (this.sortBy === 'pop-high') {
          return b.facts.population - a.facts.population;
        } else if (this.sortBy === 'pop-low') {
          return a.facts.population - b.facts.population;
        } else if (this.sortBy === 'year') {
          return a.capital.establishedYear - b.capital.establishedYear;
        }
        return 0;
      });
  }

  public render(): void {
    const explorerGrid = document.getElementById('explorerGrid');
    if (!explorerGrid) return;

    const filtered = this.filterAndSort();

    if (filtered.length === 0) {
      explorerGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No Nations Found</h3>
          <p style="color: var(--text-muted);">Try adjusting your search keywords or continent/type filters.</p>
        </div>
      `;
      return;
    }

    explorerGrid.className = `country-grid ${this.viewMode === 'list' ? 'list-view' : ''}`;
    explorerGrid.innerHTML = '';

    filtered.forEach(country => {
      const isBookmarked = this.bookmarks.has(country.id);
      const cardEl = CountryCard.render(
        country,
        this.viewMode,
        isBookmarked,
        this.onSelectCountry,
        this.onBookmarkToggle
      );
      explorerGrid.appendChild(cardEl);
    });
  }
}
