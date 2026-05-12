// Module 1 - Interactive lessons (bilingual)

const LANG = () => (window.HydraulikI18n && window.HydraulikI18n.getLang && window.HydraulikI18n.getLang()) || 'da';
const T = {
  da: {
    questionPrefix: 'Spørgsmål',
    correctMark: '✓ Korrekt!',
    incorrectMark: '✗ Ikke helt.',
    passed: (c, t) => `🎉 Bestået! ${c}/${t} rigtige`,
    nearlyPassed: (c, t) => `Du er næsten i mål — ${c}/${t} rigtige`,
    passedText: 'Du har styr på grundlæggende hydraulik. Klar til at gå videre til hydraulikvæsker!',
    failedText: 'Læs lektionerne igen og prøv quizzen en gang til. Du har brug for mindst 7 rigtige.',
    locale: 'da-DK',
  },
  en: {
    questionPrefix: 'Question',
    correctMark: '✓ Correct!',
    incorrectMark: '✗ Not quite.',
    passed: (c, t) => `🎉 Passed! ${c}/${t} correct`,
    nearlyPassed: (c, t) => `Almost there — ${c}/${t} correct`,
    passedText: "You've got the fundamentals down. Ready to move on to hydraulic fluids!",
    failedText: 'Review the lessons and try the quiz again. You need at least 7 correct.',
    locale: 'en-US',
  }
};

// ----- Pascal demo -----
// Re-query each call so language switch (which re-renders innerHTML)
// doesn't leave us holding stale references.
function pascalEls() {
  return {
    forceSlider: document.getElementById('forceSlider'),
    forceValue: document.getElementById('forceValue'),
    f1display: document.getElementById('f1display'),
    f2display: document.getElementById('f2display'),
    pressureDisplay: document.getElementById('pressureDisplay'),
    smallPiston: document.getElementById('smallPiston'),
    largePiston: document.getElementById('largePiston'),
    resForce: document.getElementById('resForce'),
    resLifted: document.getElementById('resLifted'),
  };
}

const A1 = 10; // cm²
const A2 = 1000; // cm²

function updatePascalDemo() {
  const e = pascalEls();
  if (!e.forceSlider) return;
  const F1 = parseInt(e.forceSlider.value);
  const p_bar = F1 / A1;
  const F2 = p_bar * A2;
  const locale = T[LANG()].locale;

  if (e.forceValue) e.forceValue.textContent = F1;
  if (e.f1display) e.f1display.textContent = F1;
  if (e.f2display) e.f2display.textContent = F2.toLocaleString(locale);
  if (e.pressureDisplay) e.pressureDisplay.textContent = p_bar.toFixed(1);
  if (e.resForce) e.resForce.textContent = F1;
  if (e.resLifted) e.resLifted.textContent = F2.toLocaleString(locale);

  const smallDown = (F1 / 200) * 30;
  const largeUp = (F1 / 200) * 3;
  if (e.smallPiston) e.smallPiston.setAttribute('transform', `translate(0, ${smallDown})`);
  if (e.largePiston) e.largePiston.setAttribute('transform', `translate(0, ${-largeUp})`);
}

// Attach slider listener using event delegation so it survives DOM swaps
document.addEventListener('input', (ev) => {
  if (ev.target && ev.target.id === 'forceSlider') updatePascalDemo();
});
updatePascalDemo();

// ----- Force calculator -----
function calculateForce() {
  const a1 = parseFloat(document.getElementById('calcA1').value);
  const a2 = parseFloat(document.getElementById('calcA2').value);
  const F1 = parseFloat(document.getElementById('calcF1').value);
  const s1 = parseFloat(document.getElementById('calcS1').value);

  if (!a1 || !a2 || !F1 || !s1) return;

  const p = F1 / a1; // N/cm²
  const p_bar = p / 10; // exact: 1 bar = 10 N/cm²
  const F2 = p * a2;
  const s2 = (s1 * a1) / a2;
  const mult = a2 / a1;
  const locale = T[LANG()].locale;

  document.getElementById('resP').textContent = p_bar.toFixed(1);
  document.getElementById('resF2').textContent = F2.toLocaleString(locale, { maximumFractionDigits: 0 });
  document.getElementById('resS2').textContent = s2.toFixed(2);
  document.getElementById('resMult').textContent = mult.toFixed(0);
}
window.calculateForce = calculateForce;

// ----- Quiz data (bilingual) -----
const quizQuestions = [
  {
    q: { da: "Hvad betyder Pascals lov?", en: "What does Pascal's law state?" },
    options: {
      da: ["Trykket er størst i toppen af en væskesøjle","Trykket i en statisk væske er ens i alle retninger og udøver samme kraft på lige store arealer","Trykket er lig med kraft delt med volumen","Trykket falder med temperaturen"],
      en: ["Pressure is greatest at the top of a fluid column","Pressure in a static fluid is equal in all directions and exerts the same force on equal areas","Pressure equals force divided by volume","Pressure decreases with temperature"]
    },
    correct: 1,
    explanation: { da: "Pascals lov: trykket forplanter sig ligeligt i alle retninger i en statisk væske. Det er grundlaget for al hydraulik.", en: "Pascal's law: pressure propagates equally in all directions in a static fluid. It's the foundation of all hydraulics." }
  },
  {
    q: { da: "Hvorfor kan hydraulik forøge kraft?", en: "Why can hydraulics amplify force?" },
    options: {
      da: ["Fordi olien er tungere end vand","Fordi trykket er det samme overalt, så større areal → større kraft","Fordi olien udvides ved tryk","Fordi pumpen tilfører ekstra energi"],
      en: ["Because oil is heavier than water","Because pressure is the same everywhere, so a larger area gives larger force","Because oil expands under pressure","Because the pump adds extra energy"]
    },
    correct: 1,
    explanation: { da: "Hvis F=p·A og trykket er konstant, kan et stort areal omsætte samme tryk til mange gange større kraft. Men hastigheden reduceres tilsvarende.", en: "If F=p·A and pressure is constant, a large area can convert the same pressure to many times more force. But velocity is reduced correspondingly." }
  },
  {
    q: { da: "I 1906 byggede Janney det første...", en: "In 1906, Janney built the first..." },
    options: {
      da: ["Hydrauliske bremsesystem","Oliehydrauliske system (hydrostatisk transmission)","Vandhydrauliske presser","Pneumatiske kontrolsystem"],
      en: ["Hydraulic brake system","Oil hydraulic system (hydrostatic transmission)","Water hydraulic press","Pneumatic control system"]
    },
    correct: 1,
    explanation: { da: "Janneys 1906-system var den første oliehydrauliske transmission og lagde grunden til moderne hydraulik.", en: "Janney's 1906 system was the first oil hydraulic transmission and laid the foundation for modern hydraulics." }
  },
  {
    q: { da: "Hvad er den vigtigste egenskab ved hydraulikolie der gør kraftoverførsel muligt?", en: "What's the most important property of hydraulic oil that makes power transmission possible?" },
    options: {
      da: ["Den er klar og gennemsigtig","Den er næsten ikke-komprimerbar","Den er let at pumpe","Den fordamper ikke"],
      en: ["It's clear and transparent","It's nearly incompressible","It's easy to pump","It doesn't evaporate"]
    },
    correct: 1,
    explanation: { da: "Selv ved 1000 bar reduceres oliens volumen kun med 1-2%. Det er nøglen til at overføre kraft uden tab.", en: "Even at 1000 bar, oil volume reduces only 1-2%. That's the key to transmitting power without loss." }
  },
  {
    q: { da: "Hvilken strømningsform tilstræbes i hydrauliske systemer?", en: "Which flow type is preferred in hydraulic systems?" },
    options: {
      da: ["Turbulent — den er hurtigere","Laminar — den har mindst tab","En blanding af begge","Det er ligegyldigt"],
      en: ["Turbulent — it's faster","Laminar — it has the least loss","A mix of both","It doesn't matter"]
    },
    correct: 1,
    explanation: { da: "Laminar strømning har molekyler i parallelle lag, hvilket giver mindre modstand og mindre energitab.", en: "Laminar flow has molecules in parallel layers, giving less resistance and less energy loss." }
  },
  {
    q: { da: "Hvad er maksimal anbefalet oliehastighed i et sugerør?", en: "What's the maximum recommended oil velocity in a suction line?" },
    options: { da: ["0,6 - 1,5 m/s","2 - 6 m/s","6 - 9 m/s","Over 10 m/s"], en: ["0.6 - 1.5 m/s","2 - 6 m/s","6 - 9 m/s","Over 10 m/s"] },
    correct: 0,
    explanation: { da: "Sugerør har strenge hastighedskrav (0,6-1,5 m/s) for at undgå kavitation i pumpen.", en: "Suction lines have strict velocity limits (0.6-1.5 m/s) to avoid pump cavitation." }
  },
  {
    q: { da: "Hvis du har et lille stempel med areal 10 cm² og et stort stempel med areal 200 cm², hvor mange gange større bliver kraften?", en: "If you have a small piston of area 10 cm² and a large piston of area 200 cm², how many times larger is the force?" },
    options: { da: ["10 gange","20 gange","200 gange","Den bliver mindre"], en: ["10 times","20 times","200 times","It gets smaller"] },
    correct: 1,
    explanation: { da: "Forholdet er A₂/A₁ = 200/10 = 20. Kraften multipliceres med 20, men det store stempel bevæger sig 20× langsommere.", en: "Ratio is A₂/A₁ = 200/10 = 20. Force multiplied by 20, but the large piston moves 20× slower." }
  },
  {
    q: { da: "Hvad sker der med tryktabet i en turbulent strømning?", en: "What happens to pressure loss in turbulent flow?" },
    options: { da: ["Det forsvinder","Det bliver mindre","Det bliver større pga. øget modstand","Det er det samme som ved laminar strømning"], en: ["It disappears","It decreases","It increases due to greater resistance","Same as laminar flow"] },
    correct: 2,
    explanation: { da: "Turbulent strømning har hvirvlende molekylebaner som tilbagelægger længere strækninger — det giver større modstand og dermed større tryktab.", en: "Turbulent flow has swirling molecular paths that travel longer distances, giving more resistance and pressure loss." }
  },
  {
    q: { da: "Hvilken danskudviklet teknologi blev lanceret i 1994?", en: "Which Danish-developed technology was launched in 1994?" },
    options: { da: ["Den første proportionalventil","Vandhydraulik med almindeligt vandhanevand som drivmiddel","Den første CAN-bus til hydraulik","Et nyt syntetisk olietype"], en: ["The first proportional valve","Water hydraulics using ordinary tap water as the working fluid","The first CAN-bus for hydraulics","A new synthetic oil type"] },
    correct: 1,
    explanation: { da: "I 1994 lancerede et dansk selskab (Danfoss) vandhydrauliske systemer egnet til fødevareindustrien, hvor miljøkrav er høje.", en: "In 1994 a Danish company (Danfoss) launched water hydraulics suited for the food industry, where environmental standards are high." }
  },
  {
    q: { da: "Hvad er forholdet mellem vægt og effekt for en hydraulisk motor sammenlignet med en el-motor?", en: "How does a hydraulic motor compare to an electric motor in weight per power?" },
    options: { da: ["Hydraulisk motor er tungere","De vejer det samme","Hydraulisk motor er ca. 8× lettere ved samme effekt","Forskellen er ubetydelig"], en: ["Hydraulic motor is heavier","They weigh the same","Hydraulic motor is ~8× lighter at the same power","The difference is negligible"] },
    correct: 2,
    explanation: { da: "Et 15 kW el-motor vejer ca. 100 kg, men en tilsvarende hydraulisk motor kun 12 kg.", en: "A 15 kW electric motor weighs ~100 kg, while an equivalent hydraulic motor only 12 kg." }
  }
];

// ----- Build quiz -----
const quizContainer = document.getElementById('quizContainer');
let userAnswers = new Array(quizQuestions.length).fill(null);

function buildQuiz() {
  if (!quizContainer) return;
  const lang = LANG();
  const t = T[lang];
  quizContainer.innerHTML = '';
  quizQuestions.forEach((q, i) => {
    const div = document.createElement('div');
    div.className = 'quiz-question';
    div.dataset.q = i;
    div.innerHTML = `
      <h4>${t.questionPrefix} ${i + 1}: ${q.q[lang]}</h4>
      <div class="quiz-options">
        ${q.options[lang].map((opt, j) => `
          <label class="quiz-option">
            <input type="radio" name="q${i}" value="${j}">
            ${opt}
          </label>
        `).join('')}
      </div>
      <div class="quiz-feedback"></div>
    `;
    quizContainer.appendChild(div);

    div.querySelectorAll('input[type=radio]').forEach(radio => {
      radio.addEventListener('change', (e) => {
        userAnswers[i] = parseInt(e.target.value);
        div.querySelectorAll('.quiz-option').forEach(opt => {
          opt.classList.remove('selected', 'correct', 'incorrect');
        });
        const selectedLabel = e.target.closest('.quiz-option');
        const isCorrect = userAnswers[i] === q.correct;
        selectedLabel.classList.add(isCorrect ? 'correct' : 'incorrect');

        if (!isCorrect) {
          div.querySelectorAll('.quiz-option')[q.correct].classList.add('correct');
        }

        const fb = div.querySelector('.quiz-feedback');
        fb.className = `quiz-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
        fb.innerHTML = `${isCorrect ? T[LANG()].correctMark : T[LANG()].incorrectMark} <strong>${q.explanation[LANG()]}</strong>`;

        div.classList.remove('correct', 'incorrect');
        div.classList.add(isCorrect ? 'correct' : 'incorrect');

        checkComplete();
      });
    });
  });
}

function checkComplete() {
  if (userAnswers.every(a => a !== null)) {
    const correct = userAnswers.filter((a, i) => a === quizQuestions[i].correct).length;
    const total = quizQuestions.length;
    const passed = correct >= 7;
    const t = T[LANG()];

    const resultBox = document.getElementById('quizResult');
    resultBox.style.display = 'block';
    document.getElementById('quizResultTitle').textContent =
      passed ? t.passed(correct, total) : t.nearlyPassed(correct, total);
    document.getElementById('quizResultText').textContent =
      passed ? t.passedText : t.failedText;

    if (window.HydraulikCourse && passed) {
      window.HydraulikCourse.markModuleCompleted('01');
      window.HydraulikCourse.saveQuizScore('01', correct);
    }

    resultBox.scrollIntoView({ behavior: 'smooth' });
  }
}

function resetQuiz() {
  userAnswers = new Array(quizQuestions.length).fill(null);
  const rb = document.getElementById('quizResult');
  if (rb) rb.style.display = 'none';
  buildQuiz();
  const qc = document.getElementById('quizContainer');
  if (qc) qc.scrollIntoView({ behavior: 'smooth' });
}
window.resetQuiz = resetQuiz;

buildQuiz();

// Re-render on language change via i18n API
function onLangChange() {
  const saved = userAnswers.slice();
  buildQuiz();
  saved.forEach((ans, i) => {
    if (ans !== null) {
      const radios = document.querySelectorAll(`input[name="q${i}"]`);
      if (radios[ans]) {
        radios[ans].checked = true;
        radios[ans].dispatchEvent(new Event('change'));
      }
    }
  });
  userAnswers = saved;
  updatePascalDemo();
}

if (window.HydraulikI18n && window.HydraulikI18n.onChange) {
  window.HydraulikI18n.onChange(onLangChange);
} else {
  // Fallback: poll for it
  const polled = setInterval(() => {
    if (window.HydraulikI18n && window.HydraulikI18n.onChange) {
      window.HydraulikI18n.onChange(onLangChange);
      clearInterval(polled);
    }
  }, 100);
  setTimeout(() => clearInterval(polled), 5000);
}

// ----- Progress bar based on scroll -----
window.addEventListener('scroll', () => {
  const article = document.querySelector('article');
  if (!article) return;
  const articleTop = article.offsetTop;
  const articleHeight = article.offsetHeight - window.innerHeight;
  const scrollY = window.scrollY - articleTop;
  const progress = Math.max(0, Math.min(100, (scrollY / articleHeight) * 100));
  const fill = document.getElementById('progressFill');
  if (fill) fill.style.width = progress + '%';
});

// ----- Highlight TOC -----
const tocLinks = document.querySelectorAll('.module-toc a');
const sections = document.querySelectorAll('.lesson');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 150;
    if (window.scrollY >= top) current = sec.id;
  });
  tocLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});
