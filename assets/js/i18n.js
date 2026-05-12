// Hydraulik Course - i18n
// Lightweight bilingual support (DA/EN).
//
// Usage:
//   <span data-da="Hej" data-en="Hello">Hej</span>
//   <input data-da-placeholder="Søg" data-en-placeholder="Search">
//   window.HydraulikI18n.getLang() → 'da' or 'en'
//   window.HydraulikI18n.setLang('en')
//   window.HydraulikI18n.onChange(fn) → call fn(lang) on every language change

(function() {
  'use strict';

  const STORAGE_KEY = 'hydraulik-lang';
  const DEFAULT_LANG = 'da';
  const SUPPORTED = ['da', 'en'];
  const listeners = [];

  function getLang() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.includes(stored)) return stored;
    } catch (e) { /* localStorage may be disabled */ }
    const browserLang = ((navigator.language || 'da').toLowerCase().split('-')[0]);
    return SUPPORTED.includes(browserLang) ? browserLang : DEFAULT_LANG;
  }

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    applyLang(lang);
    updateSwitcher(lang);
    document.documentElement.lang = lang;
    // Notify listeners
    listeners.forEach(fn => { try { fn(lang); } catch (e) { console.error(e); } });
  }

  function applyLang(lang) {
    // Update text content for elements with both data-da and data-en
    // Note: this replaces innerHTML, so child IDs are recreated. JS that
    // listens to clicks via event delegation is fine; JS holding direct
    // references should re-query (or use onChange).
    document.querySelectorAll('[data-da][data-en]').forEach(el => {
      const text = el.getAttribute('data-' + lang);
      if (text !== null && text !== undefined) {
        el.innerHTML = text;
      }
    });
    // Placeholders
    document.querySelectorAll('[data-da-placeholder][data-en-placeholder]').forEach(el => {
      const p = el.getAttribute('data-' + lang + '-placeholder');
      if (p !== null) el.placeholder = p;
    });
    // Titles
    document.querySelectorAll('[data-da-title][data-en-title]').forEach(el => {
      const t = el.getAttribute('data-' + lang + '-title');
      if (t !== null) el.title = t;
    });
    // Aria-labels
    document.querySelectorAll('[data-da-aria][data-en-aria]').forEach(el => {
      const a = el.getAttribute('data-' + lang + '-aria');
      if (a !== null) el.setAttribute('aria-label', a);
    });
  }

  function updateSwitcher(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function injectSwitcher() {
    const nav = document.querySelector('.nav-links');
    if (!nav || document.querySelector('.lang-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.innerHTML = `
      <button class="lang-btn" data-lang="da" title="Dansk" type="button">DA</button>
      <button class="lang-btn" data-lang="en" title="English" type="button">EN</button>
    `;
    nav.appendChild(switcher);

    switcher.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => setLang(btn.dataset.lang));
    });
  }

  function onChange(fn) {
    if (typeof fn === 'function') listeners.push(fn);
  }

  function init() {
    injectSwitcher();
    const lang = getLang();
    applyLang(lang);
    updateSwitcher(lang);
    document.documentElement.lang = lang;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.HydraulikI18n = { getLang, setLang, onChange };
})();
