import { Country, QuizQuestionItem } from '../types';
import { AudioService } from '../services/audio';
import { StorageService } from '../services/storage';

export class QuizArena {
  private container: HTMLElement | null;
  private countries: Country[];
  private questions: QuizQuestionItem[] = [];
  private currentIndex: number = 0;
  private score: number = 0;
  private streak: number = 0;
  private highScore: number = 0;
  private audio: AudioService;

  constructor(containerId: string, countries: Country[]) {
    this.container = document.getElementById(containerId);
    this.countries = countries;
    this.audio = AudioService.getInstance();
    this.highScore = StorageService.getHighScore();
    this.init();
  }

  private init(): void {
    this.buildQuestionPool();
    if (!this.container) return;
    this.renderStartScreen();
  }

  private buildQuestionPool(): void {
    this.questions = [];
    this.countries.forEach(country => {
      if (country.trivia) {
        country.trivia.forEach(t => {
          this.questions.push({
            type: 'trivia',
            country: country.name,
            flag: country.flagEmoji,
            question: t.question,
            options: t.options,
            correct: t.correct,
            explanation: t.explanation
          });
        });
      }
    });
    // Shuffle question pool
    this.questions.sort(() => Math.random() - 0.5);
  }

  public renderStartScreen(): void {
    if (!this.container) return;
    this.highScore = StorageService.getHighScore();

    this.container.innerHTML = `
      <div class="quiz-section">
        <div class="quiz-header">
          <h2><span style="color: var(--accent-gold);">🏆</span> Capital History Trivia Challenge</h2>
          <div class="quiz-score-badge">High Score: ${this.highScore} pts</div>
        </div>
        <p style="color: var(--text-muted); margin-bottom: 2rem; max-width: 600px;">
          Test your global knowledge on world capitals, ancient imperial seats, architectural origins, and political relocations!
        </p>
        <button class="btn-details" id="startQuizBtn" style="font-size: 1.1rem; padding: 0.85rem 2.25rem;">
          🚀 Start Challenge (${this.questions.length} Questions)
        </button>
      </div>
    `;

    const startBtn = document.getElementById('startQuizBtn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        this.currentIndex = 0;
        this.score = 0;
        this.streak = 0;
        this.renderQuestion();
      });
    }
  }

  private renderQuestion(): void {
    if (!this.container) return;

    if (this.currentIndex >= this.questions.length) {
      this.renderResults();
      return;
    }

    const q = this.questions[this.currentIndex];

    this.container.innerHTML = `
      <div class="quiz-section">
        <div class="quiz-header">
          <div>Question ${this.currentIndex + 1} of ${this.questions.length}</div>
          <div class="quiz-score-badge">Score: ${this.score} | Streak: ${this.streak} 🔥</div>
        </div>

        <div class="question-box">
          <div class="question-text">${q.flag || '🌐'} ${q.question}</div>
          <div class="options-grid">
            ${q.options.map((opt, idx) => `
              <button class="option-btn" data-index="${idx}">${opt}</button>
            `).join('')}
          </div>
          <div class="quiz-explanation" id="quizExplanation" style="display: none;"></div>
        </div>

        <div style="text-align: right; display: none; margin-top: 1.5rem;" id="nextBtnBox">
          <button class="btn-details" id="nextQuestionBtn" style="padding: 0.75rem 1.75rem;">
            Next Question ➔
          </button>
        </div>
      </div>
    `;

    const optionBtns = this.container.querySelectorAll<HTMLButtonElement>('.option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index') || '0', 10);
        this.handleAnswer(idx, q);
      });
    });
  }

  private handleAnswer(selectedIndex: number, question: QuizQuestionItem): void {
    if (!this.container) return;

    const optionBtns = this.container.querySelectorAll<HTMLButtonElement>('.option-btn');
    const explanationEl = document.getElementById('quizExplanation');
    const nextBtnBox = document.getElementById('nextBtnBox');

    optionBtns.forEach(b => b.disabled = true);

    if (selectedIndex === question.correct) {
      optionBtns[selectedIndex].classList.add('correct');
      this.score += 100 + (this.streak * 20);
      this.streak += 1;
      this.audio.playCorrectSound();
    } else {
      optionBtns[selectedIndex].classList.add('wrong');
      optionBtns[question.correct].classList.add('correct');
      this.streak = 0;
      this.audio.playWrongSound();
    }

    if (this.score > this.highScore) {
      this.highScore = this.score;
      StorageService.saveHighScore(this.highScore);
    }

    if (explanationEl) {
      explanationEl.style.display = 'block';
      explanationEl.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
    }

    if (nextBtnBox) {
      nextBtnBox.style.display = 'block';
      const nextBtn = document.getElementById('nextQuestionBtn');
      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          this.currentIndex++;
          this.renderQuestion();
        });
      }
    }
  }

  private renderResults(): void {
    if (!this.container) return;

    this.container.innerHTML = `
      <div class="quiz-section" style="text-align: center;">
        <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">🎉 Challenge Completed!</h2>
        <p style="font-size: 1.25rem; color: var(--accent-gold); margin-bottom: 1.5rem; font-weight: 700;">
          Final Score: ${this.score} Points
        </p>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">
          ${this.score >= 500 ? '🌟 Phenomenal! You are a master of global capital history!' : 'Great attempt! Explore more country cards to boost your knowledge!'}
        </p>
        <button class="btn-details" id="restartQuizBtn" style="font-size: 1rem; padding: 0.75rem 2rem;">
          🔄 Play Again
        </button>
      </div>
    `;

    const restartBtn = document.getElementById('restartQuizBtn');
    if (restartBtn) {
      restartBtn.addEventListener('click', () => {
        this.buildQuestionPool();
        this.renderStartScreen();
      });
    }
  }
}
