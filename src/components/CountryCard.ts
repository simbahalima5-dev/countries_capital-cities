import { Country, ViewMode } from '../types';

export class CountryCard {
  public static render(
    country: Country,
    viewMode: ViewMode,
    isBookmarked: boolean,
    onSelect: (countryId: string) => void,
    onBookmarkToggle: (countryId: string, e: MouseEvent) => void
  ): HTMLElement {
    const card = document.createElement('div');
    card.className = `country-card ${viewMode === 'list' ? 'list-card' : ''}`;
    card.setAttribute('data-id', country.id);

    const yearDisplay = country.capital.establishedYear > 0 
      ? `${country.capital.establishedYear} AD` 
      : `${Math.abs(country.capital.establishedYear)} BC`;

    if (viewMode === 'list') {
      card.innerHTML = `
        <div class="list-card-left">
          <span class="country-flag">${country.flagEmoji}</span>
          <div>
            <h3 class="country-name">${country.name}</h3>
            <div class="capital-subtitle">Capital: ${country.capital.name} (${country.capital.nativeName})</div>
          </div>
        </div>
        <div class="list-card-middle">
          <span class="chip-badge">${country.continent}</span>
          <span class="capital-type-badge">${country.capital.type}</span>
        </div>
        <div class="list-card-right">
          <div style="font-weight: 600; font-size: 0.875rem;">👥 ${(country.facts.population / 1000000).toFixed(1)}M</div>
          <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" title="Bookmark Country">
            ${isBookmarked ? '⭐' : '☆'}
          </button>
        </div>
      `;
    } else {
      card.innerHTML = `
        <div class="card-header">
          <span class="country-flag">${country.flagEmoji}</span>
          <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}" title="Bookmark Country">
            ${isBookmarked ? '⭐' : '☆'}
          </button>
        </div>
        <div class="card-body">
          <div class="card-badges">
            <span class="chip-badge">${country.continent}</span>
            <span class="capital-type-badge">${country.capital.type}</span>
          </div>
          <h3 class="country-name">${country.name}</h3>
          <div class="official-name">${country.officialName}</div>

          <div class="capital-block">
            <div class="capital-label">CURRENT CAPITAL</div>
            <div class="capital-name">${country.capital.name}</div>
            <div class="capital-subtitle">${country.capital.nativeName} • Est. ${yearDisplay}</div>
          </div>

          <div class="card-meta-grid">
            <div class="meta-item">
              <span class="meta-label">Population</span>
              <span class="meta-value">${(country.facts.population / 1000000).toFixed(1)}M</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Capital Pop.</span>
              <span class="meta-value">${(country.facts.capitalPopulation / 1000000).toFixed(2)}M</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Past Capitals</span>
              <span class="meta-value">${country.history.formerCapitals.length}</span>
            </div>
            <div class="meta-item">
              <span class="meta-label">Elevation</span>
              <span class="meta-value">${country.facts.elevation}m</span>
            </div>
          </div>

          <p class="history-preview">${country.history.origin.slice(0, 115)}...</p>
        </div>
        <div class="card-footer">
          <button class="btn-details">
            <span>🏛️</span> Explore Full History
          </button>
        </div>
      `;
    }

    const bookmarkBtn = card.querySelector('.bookmark-btn');
    if (bookmarkBtn) {
      bookmarkBtn.addEventListener('click', (e: Event) => {
        e.stopPropagation();
        onBookmarkToggle(country.id, e as MouseEvent);
      });
    }

    card.addEventListener('click', () => {
      onSelect(country.id);
    });

    return card;
  }
}
