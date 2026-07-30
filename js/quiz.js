/**
 * Interactive Capital Quiz & Trivia Arena
 * Includes Web Audio API Sound Synthesizer
 */

class QuizEngine {
  constructor(containerId, countriesData) {
    this.container = document.getElementById(containerId);
    this.countries = countriesData;
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.highScore = parseInt(localStorage.getItem('capital_quiz_highscore') || '0', 10);
    this.audioCtx = null;
    this.init();
  }

  init() {
    this.buildQuestionPool();
    if (!this.container) return;
    this.renderStartScreen();
  }

  // Web Audio API Sound Synthesizer for Retro Sound Effects
  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
  }

  playBeep(freq, type, duration) {
    try {
      this.initAudio();
      if (!this.audioCtx) return;
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
      gain.gain.setValueAtTime(0.1, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.audioCtx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.audioCtx.destination);
      osc.start();
      osc.stop(this.audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  playCorrectSound() {
    this.playBeep(523.25, 'sine', 0.15); // C5
    setTimeout(() => this.playBeep(659.25, 'sine', 0.2), 100); // E5
  }

  playWrongSound() {
    this.playBeep(220, 'sawtooth', 0.25); // A3
    setTimeout(() => this.playBeep(180, 'sawtooth', 0.3), 150);
  }

  buildQuestionPool() {
    this.questions = [];
    // Collect all trivia from countries dataset
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

    // Shuffle questions
    this.questions.sort(() => Math.random() - 0.5);
  }

  renderStartScreen() {
    this.container.innerHTML = `
      <div class="quiz-section">
        <div class="quiz-header">
          <h2><span style="color: var(--accent-gold);">🏆</span> Capital History Trivia Challenge</h2>
          <div class="quiz-score-badge">High Score: ${this.highScore} pts</div>
        </div>
        <p style="color: var(--text-muted); margin-bottom: 2rem;">
          Test your global knowledge on world capitals, ancient cities, architectural origins, and political relocations!
        </p>
        <button class="btn-details" id="startQuizBtn" style="font-size: 1.1rem; padding: 0.75rem 2rem;">
          🚀 Start Challenge (${this.questions.length} Questions)
        </button>
      </div>
    `;

    document.getElementById('startQuizBtn').addEventListener('click', () => {
      this.currentIndex = 0;
      this.score = 0;
      this.streak = 0;
      this.renderQuestion();
    });
  }

  renderQuestion() {
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
          <div class="quiz-explanation" id="quizExplanation"></div>
        </div>

        <div style="text-align: right; display: none;" id="nextBtnBox">
          <button class="btn-details" id="nextQuestionBtn">Next Question ➔</button>
        </div>
      </div>
    `;

    const optionBtns = this.container.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', (e) => this.handleAnswer(parseInt(btn.getAttribute('data-index'), 10), q));
    });
  }

  handleAnswer(selectedIndex, question) {
    const optionBtns = this.container.querySelectorAll('.option-btn');
    const explanationEl = document.getElementById('quizExplanation');
    const nextBtnBox = document.getElementById('nextBtnBox');

    optionBtns.forEach(b => b.disabled = true);

    if (selectedIndex === question.correct) {
      optionBtns[selectedIndex].classList.add('correct');
      this.score += 100 + (this.streak * 20);
      this.streak += 1;
      this.playCorrectSound();
    } else {
      optionBtns[selectedIndex].classList.add('wrong');
      optionBtns[question.correct].classList.add('correct');
      this.streak = 0;
      this.playWrongSound();
    }

    if (this.score > this.highScore) {
      this.highScore = this.score;
      localStorage.setItem('capital_quiz_highscore', this.highScore.toString());
    }

    if (explanationEl) {
      explanationEl.style.display = 'block';
      explanationEl.innerHTML = `<strong>Explanation:</strong> ${question.explanation}`;
    }

    if (nextBtnBox) {
      nextBtnBox.style.display = 'block';
      document.getElementById('nextQuestionBtn').addEventListener('click', () => {
        this.currentIndex++;
        this.renderQuestion();
      });
    }
  }

  renderResults() {
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

    document.getElementById('restartQuizBtn').addEventListener('click', () => {
      this.buildQuestionPool();
      this.renderStartScreen();
    });
  }
}
