export type TabType = 'explorer' | 'map' | 'timeline' | 'quiz' | 'compare' | 'bookmarks';
export type ThemeType = 'dark' | 'light' | 'sepia';
export type SortOption = 'name' | 'capital' | 'pop-high' | 'pop-low' | 'year';
export type ViewMode = 'grid' | 'list';

export interface CapitalDetails {
  name: string;
  nativeName: string;
  establishedYear: number;
  type: string;
  pronunciation: string;
}

export interface FormerCapital {
  city: string;
  era: string;
  reason: string;
}

export interface KeyMilestone {
  year: string;
  title: string;
  description: string;
}

export interface CountryHistory {
  origin: string;
  whyCapital: string;
  formerCapitals: FormerCapital[];
  keyMilestones: KeyMilestone[];
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface CountryFacts {
  population: number;
  capitalPopulation: number;
  metroPopulation: number;
  landArea: number;
  elevation: number;
  coordinates: Coordinates;
  currency: string;
  officialLanguages: string[];
  landmarks: string[];
}

export interface TriviaQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Country {
  id: string;
  name: string;
  officialName: string;
  flagEmoji: string;
  continent: string;
  subregion: string;
  capital: CapitalDetails;
  history: CountryHistory;
  facts: CountryFacts;
  trivia: TriviaQuestion[];
}

export interface TimelineEvent {
  year: string;
  country: string;
  title: string;
  description: string;
  tag: string;
}

export interface QuizQuestionItem {
  type: 'trivia';
  country: string;
  flag: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}
