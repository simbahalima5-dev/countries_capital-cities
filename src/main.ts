import './styles/main.css';
import { TabType, ThemeType } from './types';
import { COUNTRIES_DATA, CAPITAL_TIMELINE_EVENTS } from './data/countries';
import { StorageService } from './services/storage';
import { Header } from './components/Header';
import { Explorer } from './components/Explorer';
import { WorldMap } from './components/WorldMap';
import { HistoryTimeline } from './components/HistoryTimeline';
import { QuizArena } from './components/QuizArena';
import { CompareView } from './components/CompareView';
import { BookmarksView } from './components/BookmarksView';
import { CountryModal } from './components/CountryModal';

class Application {
  private countries = COUNTRIES_DATA;
  private timelineEvents = CAPITAL_TIMELINE_EVENTS;
  private bookmarks = StorageService.getBookmarks();
  private theme: ThemeType = StorageService.getTheme();
  private currentTab: TabType = 'explorer';

  public getCurrentTab(): TabType {
    return this.currentTab;
  }

  private header: Header;
  private explorer: Explorer;
  private worldMap: WorldMap | null = null;
  private historyTimeline: HistoryTimeline | null = null;
  private quizArena: QuizArena | null = null;
  private compareView: CompareView | null = null;
  private bookmarksView: BookmarksView | null = null;
  private countryModal: CountryModal;

  constructor() {
    this.countryModal = new CountryModal();

    this.header = new Header(
      (tab) => this.switchTab(tab),
      (theme) => this.setTheme(theme)
    );

    this.explorer = new Explorer(
      this.countries,
      this.bookmarks,
      (countryId) => this.openCountryDetail(countryId),
      (countryId, e) => this.toggleBookmark(countryId, e)
    );

    this.initTheme();
    this.initSubComponents();
  }

  private initTheme(): void {
    this.header.setThemeUI(this.theme);
  }

  private setTheme(newTheme: ThemeType): void {
    this.theme = newTheme;
    this.header.setThemeUI(newTheme);
  }

  private toggleBookmark(countryId: string, _e: MouseEvent): void {
    StorageService.toggleBookmark(countryId);
    this.bookmarks = StorageService.getBookmarks();

    this.explorer.updateBookmarks(this.bookmarks);
    if (this.bookmarksView) {
      this.bookmarksView.updateBookmarks(this.bookmarks);
    }
  }

  private openCountryDetail(countryId: string): void {
    const country = this.countries.find(c => c.id === countryId);
    if (country) {
      this.countryModal.open(country);
    }
  }

  private initSubComponents(): void {
    // Lazy initialize subviews when requested or on startup
  }

  private switchTab(tab: TabType): void {
    this.currentTab = tab;
    this.header.setActiveTab(tab);

    const views: Record<TabType, string> = {
      explorer: 'explorerView',
      map: 'mapView',
      timeline: 'timelineView',
      quiz: 'quizView',
      compare: 'compareView',
      bookmarks: 'bookmarksView'
    };

    // Hide all view containers
    Object.values(views).forEach(viewId => {
      const el = document.getElementById(viewId);
      if (el) el.style.display = 'none';
    });

    // Show selected view container
    const activeViewId = views[tab];
    const activeEl = document.getElementById(activeViewId);
    if (activeEl) {
      activeEl.style.display = 'block';
    }

    // Lazy instantiate / render specific views
    if (tab === 'map' && !this.worldMap) {
      this.worldMap = new WorldMap('mapView', this.countries, (id) => this.openCountryDetail(id));
    }

    if (tab === 'timeline' && !this.historyTimeline) {
      this.historyTimeline = new HistoryTimeline('timelineView', this.timelineEvents);
    }

    if (tab === 'quiz' && !this.quizArena) {
      this.quizArena = new QuizArena('quizView', this.countries);
    }

    if (tab === 'compare' && !this.compareView) {
      this.compareView = new CompareView('compareView', this.countries);
    }

    if (tab === 'bookmarks') {
      if (!this.bookmarksView) {
        this.bookmarksView = new BookmarksView(
          'bookmarksView',
          this.countries,
          this.bookmarks,
          (id) => this.openCountryDetail(id),
          (id, e) => this.toggleBookmark(id, e)
        );
      } else {
        this.bookmarksView.updateBookmarks(this.bookmarks);
      }
    }
  }
}

// Bootstrap Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  new Application();
});
