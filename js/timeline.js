/**
 * Capital Relocation & History Timeline Controller
 */

class CapitalTimelineView {
  constructor(containerId, timelineEvents, onSelectCountry) {
    this.container = document.getElementById(containerId);
    this.events = timelineEvents;
    this.onSelectCountry = onSelectCountry;
    this.currentFilter = 'All';
    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  setFilter(filterTag) {
    this.currentFilter = filterTag;
    this.render();
  }

  render() {
    const filtered = this.currentFilter === 'All'
      ? this.events
      : this.events.filter(e => e.tag === this.currentFilter);

    const html = `
      <div class="timeline-section">
        <div class="section-header">
          <h2 class="section-title">Capital Relocations Through History</h2>
          <p class="section-subtitle">Chronological milestones of why, when, and how nations changed their capital cities</p>
        </div>

        <div class="timeline-container">
          ${filtered.map((evt, idx) => `
            <div class="timeline-card ${idx % 2 === 0 ? 'left' : 'right'}">
              <div class="timeline-content">
                <span class="timeline-year">${evt.year}</span>
                <span class="capital-type-badge">${evt.tag}</span>
                <h3 class="timeline-event-title">${evt.country}: ${evt.title}</h3>
                <p class="timeline-desc">${evt.description}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    this.container.innerHTML = html;
  }
}
