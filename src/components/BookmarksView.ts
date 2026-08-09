import { Country } from '../types';
import { CountryCard } from './CountryCard';

export class BookmarksView {
  private container: HTMLElement | null;
  private countries: Country[];
  private bookmarks: Set<string>;
  private onSelectCountry: (countryId: string) => void;
  private onBookmarkToggle: (countryId: string, e: MouseEvent) => void;

  constructor(
    containerId: string,
    countries: Country[],
    bookmarks: Set<string>,
    onSelectCountry: (countryId: string) => void,
    onBookmarkToggle: (countryId: string, e: MouseEvent) => void
  ) {
    this.container = document.getElementById(containerId);
    this.countries = countries;
    this.bookmarks = bookmarks;
    this.onSelectCountry = onSelectCountry;
    this.onBookmarkToggle = onBookmarkToggle;
    this.init();
  }

  private init(): void {
    if (!this.container) return;
    this.render();
  }

  public updateBookmarks(bookmarks: Set<string>): void {
    this.bookmarks = bookmarks;
    this.render();
  }

  public render(): void {
    if (!this.container) return;

    const bookmarkedCountries = this.countries.filter(c => this.bookmarks.has(c.id));

    if (bookmarkedCountries.length === 0) {
      this.container.innerHTML = `
        <div class="bookmarks-section">
          <div class="section-header">
            <h2 class="section-title">Saved Country Bookmarks</h2>
            <p class="section-subtitle">Your collection of bookmarked nations and capitals for quick reference</p>
          </div>
          <div style="text-align: center; padding: 4rem 1rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-color);">
            <div style="font-size: 3rem; margin-bottom: 1rem;">⭐</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No Bookmarks Yet</h3>
            <p style="color: var(--text-muted);">Click the star icon on any country card to save it to your personal bookmarks!</p>
          </div>
        </div>
      `;
      return;
    }

    this.container.innerHTML = `
      <div class="bookmarks-section">
        <div class="section-header">
          <h2 class="section-title">Saved Country Bookmarks (${bookmarkedCountries.length})</h2>
          <p class="section-subtitle">Your collection of bookmarked nations and capitals for quick reference</p>
        </div>
        <div class="country-grid" id="bookmarksGrid"></div>
      </div>
    `;

    const grid = this.container.querySelector('#bookmarksGrid');
    if (grid) {
      bookmarkedCountries.forEach(country => {
        const cardEl = CountryCard.render(
          country,
          'grid',
          true,
          this.onSelectCountry,
          this.onBookmarkToggle
        );
        grid.appendChild(cardEl);
      });
    }
  }
}
