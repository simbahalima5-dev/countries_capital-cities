import { TabType, ThemeType } from '../types';
import { StorageService } from '../services/storage';

export class Header {
  private onTabChange: (tab: TabType) => void;
  private onThemeChange: (theme: ThemeType) => void;

  constructor(onTabChange: (tab: TabType) => void, onThemeChange: (theme: ThemeType) => void) {
    this.onTabChange = onTabChange;
    this.onThemeChange = onThemeChange;
    this.bindEvents();
  }

  private bindEvents(): void {
    const navBtns = document.querySelectorAll<HTMLButtonElement>('.nav-btn');
    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab') as TabType;
        if (tab) {
          this.setActiveTab(tab);
          this.onTabChange(tab);
        }
      });
    });

    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.addEventListener('click', () => {
        const currentTheme = StorageService.getTheme();
        let nextTheme: ThemeType = 'dark';
        if (currentTheme === 'dark') nextTheme = 'light';
        else if (currentTheme === 'light') nextTheme = 'sepia';

        this.setThemeUI(nextTheme);
        this.onThemeChange(nextTheme);
      });
    }
  }

  public setActiveTab(tab: TabType): void {
    document.querySelectorAll<HTMLButtonElement>('.nav-btn').forEach(btn => {
      if (btn.getAttribute('data-tab') === tab) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  public setThemeUI(theme: ThemeType): void {
    document.documentElement.setAttribute('data-theme', theme);
    StorageService.setTheme(theme);
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : (theme === 'light' ? '📜' : '🌙');
    }
  }
}
