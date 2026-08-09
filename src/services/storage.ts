import { ThemeType } from '../types';

const BOOKMARKS_KEY = 'country_bookmarks';
const THEME_KEY = 'site_theme';
const HIGH_SCORE_KEY = 'capital_quiz_highscore';

export class StorageService {
  public static getBookmarks(): Set<string> {
    try {
      const data = localStorage.getItem(BOOKMARKS_KEY);
      return new Set(data ? JSON.parse(data) : []);
    } catch {
      return new Set();
    }
  }

  public static saveBookmarks(bookmarks: Set<string>): void {
    try {
      localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(Array.from(bookmarks)));
    } catch {
      // Ignore storage error
    }
  }

  public static toggleBookmark(countryId: string): boolean {
    const bookmarks = this.getBookmarks();
    let isBookmarked = false;
    if (bookmarks.has(countryId)) {
      bookmarks.delete(countryId);
      isBookmarked = false;
    } else {
      bookmarks.add(countryId);
      isBookmarked = true;
    }
    this.saveBookmarks(bookmarks);
    return isBookmarked;
  }

  public static getTheme(): ThemeType {
    const theme = localStorage.getItem(THEME_KEY) as ThemeType;
    return theme === 'light' || theme === 'sepia' ? theme : 'dark';
  }

  public static setTheme(theme: ThemeType): void {
    localStorage.setItem(THEME_KEY, theme);
  }

  public static getHighScore(): number {
    const score = localStorage.getItem(HIGH_SCORE_KEY);
    return score ? parseInt(score, 10) || 0 : 0;
  }

  public static saveHighScore(score: number): void {
    const current = this.getHighScore();
    if (score > current) {
      localStorage.setItem(HIGH_SCORE_KEY, score.toString());
    }
  }
}
