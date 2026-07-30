/**
 * Interactive SVG World Map & Capital Pinpoint Visualizer
 */

class WorldMapVisualizer {
  constructor(containerId, countriesData, onSelectCountry) {
    this.container = document.getElementById(containerId);
    this.countries = countriesData;
    this.onSelectCountry = onSelectCountry;
    this.init();
  }

  init() {
    if (!this.container) return;
    this.renderMap();
  }

  renderMap() {
    // Generate SVG world map container with capital pins based on lat/lng coordinates
    const mapHtml = `
      <div class="map-wrapper" id="worldMapWrapper">
        <div class="map-tooltip" id="mapTooltip"></div>
        <svg class="world-map-svg" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
          <defs>
            <radialGradient id="oceanGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stop-color="#1E293B" />
              <stop offset="100%" stop-color="#0F172A" />
            </radialGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <!-- World Background Grid -->
          <rect width="1000" height="500" fill="url(#oceanGrad)" rx="16" />
          <path d="M 0 250 L 1000 250 M 500 0 L 500 500" stroke="rgba(255,255,255,0.05)" stroke-width="1" stroke-dasharray="4,4" />

          <!-- Continent Silhouettes (Stylized World Regions) -->
          <g class="continents" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" stroke-width="1">
            <!-- North America -->
            <path d="M 120,80 L 280,70 L 320,160 L 250,220 L 180,210 L 140,150 Z" />
            <!-- South America -->
            <path d="M 280,240 L 360,260 L 330,420 L 260,370 L 260,280 Z" />
            <!-- Europe -->
            <path d="M 450,70 L 580,60 L 590,140 L 480,160 L 440,110 Z" />
            <!-- Africa -->
            <path d="M 440,175 L 590,180 L 610,320 L 530,430 L 460,320 Z" />
            <!-- Asia -->
            <path d="M 590,60 L 920,50 L 890,220 L 760,260 L 600,160 Z" />
            <!-- Oceania -->
            <path d="M 780,310 L 910,300 L 920,400 L 800,410 Z" />
          </g>

          <!-- Capital Pins plotted using lat/lng conversion -->
          <g class="capital-pins">
            ${this.countries.map(c => this.createPinSvg(c)).join('')}
          </g>
        </svg>
      </div>
    `;

    this.container.innerHTML = mapHtml;
    this.attachEvents();
  }

  // Convert Latitude / Longitude to SVG (x, y) coordinates on 1000x500 canvas
  latLngToSvg(lat, lng) {
    const x = (lng + 180) * (1000 / 360);
    const y = (90 - lat) * (500 / 180);
    return { x, y };
  }

  createPinSvg(country) {
    const coords = country.facts.coordinates;
    const { x, y } = this.latLngToSvg(coords.lat, coords.lng);

    return `
      <g class="map-pin" data-id="${country.id}" transform="translate(${x.toFixed(1)}, ${y.toFixed(1)})">
        <circle r="12" fill="rgba(245, 158, 11, 0.25)" class="pin-pulse">
          <animate attributeName="r" values="6;16;6" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.8;0.1;0.8" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle r="6" fill="#F59E0B" stroke="#FFFFFF" stroke-width="2" filter="url(#glow)" />
      </g>
    `;
  }

  attachEvents() {
    const pins = this.container.querySelectorAll('.map-pin');
    const tooltip = document.getElementById('mapTooltip');

    pins.forEach(pin => {
      const countryId = pin.getAttribute('data-id');
      const country = this.countries.find(c => c.id === countryId);
      if (!country) return;

      pin.addEventListener('mouseenter', (e) => {
        if (tooltip) {
          tooltip.style.display = 'block';
          tooltip.innerHTML = `
            <div style="font-weight: 700; font-size: 1rem;">${country.flagEmoji} ${country.name}</div>
            <div style="color: #F59E0B; font-weight: 600;">Capital: ${country.capital.name}</div>
            <div style="font-size: 0.75rem; color: #9CA3AF;">Established: ${country.capital.establishedYear > 0 ? country.capital.establishedYear + ' AD' : Math.abs(country.capital.establishedYear) + ' BC'}</div>
            <div style="font-size: 0.75rem; color: #10B981; margin-top: 4px;">Click to explore full history</div>
          `;
        }
      });

      pin.addEventListener('mousemove', (e) => {
        if (tooltip) {
          const wrapperRect = this.container.querySelector('.map-wrapper').getBoundingClientRect();
          const left = e.clientX - wrapperRect.left + 15;
          const top = e.clientY - wrapperRect.top + 15;
          tooltip.style.left = `${left}px`;
          tooltip.style.top = `${top}px`;
        }
      });

      pin.addEventListener('mouseleave', () => {
        if (tooltip) tooltip.style.display = 'none';
      });

      pin.addEventListener('click', () => {
        if (tooltip) tooltip.style.display = 'none';
        this.onSelectCountry(country.id);
      });
    });
  }
}
