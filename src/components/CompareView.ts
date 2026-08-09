import { Country } from '../types';

export class CompareView {
  private container: HTMLElement | null;
  private countries: Country[];
  private country1: string;
  private country2: string;

  constructor(containerId: string, countries: Country[]) {
    this.container = document.getElementById(containerId);
    this.countries = countries;
    this.country1 = countries[0]?.id || '';
    this.country2 = countries[1]?.id || '';
    this.init();
  }

  private init(): void {
    if (!this.container) return;
    this.render();
  }

  public render(): void {
    if (!this.container) return;

    const c1 = this.countries.find(c => c.id === this.country1) || this.countries[0];
    const c2 = this.countries.find(c => c.id === this.country2) || this.countries[1] || this.countries[0];

    const c1Year = c1.capital.establishedYear > 0 
      ? `${c1.capital.establishedYear} AD` 
      : `${Math.abs(c1.capital.establishedYear)} BC`;

    const c2Year = c2.capital.establishedYear > 0 
      ? `${c2.capital.establishedYear} AD` 
      : `${Math.abs(c2.capital.establishedYear)} BC`;

    const html = `
      <div class="compare-section">
        <div class="section-header">
          <h2 class="section-title">Side-by-Side Capital Comparison</h2>
          <p class="section-subtitle">Compare history, demographics, and former capitals between two nations</p>
        </div>

        <div class="compare-selectors">
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--text-muted);">Nation 1:</label>
            <select class="select-dropdown" id="compareSelect1" style="width: 100%;">
              ${this.countries.map(c => `<option value="${c.id}" ${c.id === c1.id ? 'selected' : ''}>${c.flagEmoji} ${c.name}</option>`).join('')}
            </select>
          </div>
          <div>
            <label style="display: block; margin-bottom: 0.5rem; font-weight: 600; color: var(--text-muted);">Nation 2:</label>
            <select class="select-dropdown" id="compareSelect2" style="width: 100%;">
              ${this.countries.map(c => `<option value="${c.id}" ${c.id === c2.id ? 'selected' : ''}>${c.flagEmoji} ${c.name}</option>`).join('')}
            </select>
          </div>
        </div>

        <table class="compare-table">
          <thead>
            <tr>
              <th>Feature / Metric</th>
              <th style="color: var(--accent-gold); font-size: 1.1rem;">${c1.flagEmoji} ${c1.name}</th>
              <th style="color: var(--accent-teal); font-size: 1.1rem;">${c2.flagEmoji} ${c2.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Current Capital</td>
              <td><strong>${c1.capital.name}</strong></td>
              <td><strong>${c2.capital.name}</strong></td>
            </tr>
            <tr>
              <td>Native Name</td>
              <td>${c1.capital.nativeName}</td>
              <td>${c2.capital.nativeName}</td>
            </tr>
            <tr>
              <td>Capital Type</td>
              <td><span class="capital-type-badge">${c1.capital.type}</span></td>
              <td><span class="capital-type-badge">${c2.capital.type}</span></td>
            </tr>
            <tr>
              <td>Established Year</td>
              <td>${c1Year}</td>
              <td>${c2Year}</td>
            </tr>
            <tr>
              <td>Country Population</td>
              <td>${(c1.facts.population / 1000000).toFixed(1)} Million</td>
              <td>${(c2.facts.population / 1000000).toFixed(1)} Million</td>
            </tr>
            <tr>
              <td>Capital Population</td>
              <td>${(c1.facts.capitalPopulation / 1000000).toFixed(2)} Million</td>
              <td>${(c2.facts.capitalPopulation / 1000000).toFixed(2)} Million</td>
            </tr>
            <tr>
              <td>Former Capitals Count</td>
              <td>${c1.history.formerCapitals.length} Past Capitals</td>
              <td>${c2.history.formerCapitals.length} Past Capitals</td>
            </tr>
            <tr>
              <td>Famous Landmarks</td>
              <td>${c1.facts.landmarks.slice(0, 3).join(', ')}</td>
              <td>${c2.facts.landmarks.slice(0, 3).join(', ')}</td>
            </tr>
          </tbody>
        </table>
      </div>
    `;

    this.container.innerHTML = html;
    this.attachEvents();
  }

  private attachEvents(): void {
    if (!this.container) return;
    const s1 = document.getElementById('compareSelect1') as HTMLSelectElement;
    const s2 = document.getElementById('compareSelect2') as HTMLSelectElement;

    if (s1) {
      s1.addEventListener('change', (e) => {
        this.country1 = (e.target as HTMLSelectElement).value;
        this.render();
      });
    }
    if (s2) {
      s2.addEventListener('change', (e) => {
        this.country2 = (e.target as HTMLSelectElement).value;
        this.render();
      });
    }
  }
}
