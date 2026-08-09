import { TimelineEvent } from '../types';

export class HistoryTimeline {
  private container: HTMLElement | null;
  private events: TimelineEvent[];
  private currentFilter: string = 'All';

  constructor(containerId: string, events: TimelineEvent[]) {
    this.container = document.getElementById(containerId);
    this.events = events;
    this.init();
  }

  private init(): void {
    if (!this.container) return;
    this.render();
  }

  public setFilter(filterTag: string): void {
    this.currentFilter = filterTag;
    this.render();
  }

  public render(): void {
    if (!this.container) return;

    const filtered = this.currentFilter === 'All'
      ? this.events
      : this.events.filter(e => e.tag === this.currentFilter);

    const tags = Array.from(new Set(this.events.map(e => e.tag)));

    const html = `
      <div class="timeline-section">
        <div class="section-header">
          <h2 class="section-title">Capital Relocations Through History</h2>
          <p class="section-subtitle">Chronological milestones of why, when, and how nations changed their capital cities</p>
        </div>

        <div class="filter-chips" style="margin-bottom: 2rem; justify-content: center;">
          <button class="chip-btn ${this.currentFilter === 'All' ? 'active' : ''}" data-tag="All">All Eras</button>
          ${tags.map(tag => `
            <button class="chip-btn ${this.currentFilter === tag ? 'active' : ''}" data-tag="${tag}">${tag}</button>
          `).join('')}
        </div>

        <div class="timeline-container">
          ${filtered.map((evt, idx) => `
            <div class="timeline-card ${idx % 2 === 0 ? 'left' : 'right'}">
              <div class="timeline-content">
                <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.5rem;">
                  <span class="timeline-year">${evt.year}</span>
                  <span class="capital-type-badge">${evt.tag}</span>
                </div>
                <h3 class="timeline-event-title">${evt.country}: ${evt.title}</h3>
                <p class="timeline-desc">${evt.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.container.innerHTML = html;
    this.attachEvents();
  }

  private attachEvents(): void {
    if (!this.container) return;
    const chips = this.container.querySelectorAll<HTMLButtonElement>('.chip-btn');
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const tag = chip.getAttribute('data-tag') || 'All';
        this.setFilter(tag);
      });
    });
  }
}
