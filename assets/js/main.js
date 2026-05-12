// Hydraulik Course - Main JS
// Progress tracking, navigation, animations

(function() {
  'use strict';

  // ----- Progress tracking via localStorage -----
  const STORAGE_KEY = 'hydraulik-progress';

  function getProgress() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch { return {}; }
  }

  function setProgress(moduleId, data) {
    const progress = getProgress();
    progress[moduleId] = { ...progress[moduleId], ...data, lastVisit: Date.now() };
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch {}
  }

  // Mark module cards with completion state
  function markCompleted() {
    const progress = getProgress();
    document.querySelectorAll('.module-card').forEach(card => {
      const href = card.getAttribute('href');
      const match = href && href.match(/(\d+)-/);
      if (!match) return;
      const id = match[1];
      if (progress[id]?.completed) {
        card.classList.add('module-completed');
        const num = card.querySelector('.module-num');
        if (num) num.innerHTML += ' ✓';
      }
    });
  }

  // ----- Smooth scroll for hash links -----
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ----- Reveal-on-scroll animations -----
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.module-card, .feature, .path-node').forEach(el => {
      observer.observe(el);
    });
  }

  // ----- Initialize -----
  document.addEventListener('DOMContentLoaded', () => {
    markCompleted();
  });

  // Expose API for module pages
  window.HydraulikCourse = {
    markModuleCompleted: (id) => setProgress(id, { completed: true }),
    saveQuizScore: (id, score) => setProgress(id, { quizScore: score }),
    getProgress
  };
})();
