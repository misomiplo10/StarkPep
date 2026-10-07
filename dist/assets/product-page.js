(function () {
  function initialize() {
    const translations = window.STARK_PRODUCT_TRANSLATIONS;
    if (!translations) return;
    window.STARK_LOCALIZE_PRODUCTS(translations);
    const switcher = document.querySelector('.language-switch');
    for (const [code, label] of [['sv', 'Svenska'], ['no', 'Norsk'], ['de', 'Deutsch']]) {
      const button = document.createElement('button');
      button.type = 'button'; button.dataset.lang = code; button.textContent = code.toUpperCase(); button.setAttribute('aria-label', label); switcher.appendChild(button);
    }
    let currentLanguage = localStorage.getItem('stark-language');
    if (!translations[currentLanguage]) currentLanguage = 'da';
    const metaDescription = document.querySelector('meta[name="description"]');
    function applyLanguage(language) {
      const t = translations[language]; if (!t) return;
      currentLanguage = language; document.documentElement.lang = language; document.title = t.pageTitle;
      if (metaDescription) metaDescription.setAttribute('content', t.pageDescription);
      document.querySelectorAll('[data-i18n]').forEach(element => { const value = t[element.dataset.i18n]; if (typeof value === 'string') element.textContent = value; });
      for (const [attribute, dataKey] of [['aria-label', 'i18nAria'], ['alt', 'i18nAlt']]) {
        document.querySelectorAll(`[data-${dataKey.replace(/[A-Z]/g, c => '-' + c.toLowerCase())}]`).forEach(element => { const value = t[element.dataset[dataKey]]; if (value) element.setAttribute(attribute, value); });
      }
      document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
      localStorage.setItem('stark-language', language);
      window.dispatchEvent(new CustomEvent('stark-language-change', { detail: language }));
    }
    window.STARK_SET_LANGUAGE = applyLanguage;
    document.querySelectorAll('[data-lang]').forEach(button => button.addEventListener('click', () => applyLanguage(button.dataset.lang)));
    const year = document.querySelector('#year'); if (year) year.textContent = new Date().getFullYear();
    applyLanguage(currentLanguage);
    const navigation = document.createElement('script'); navigation.src = '/assets/site-navigation.js'; document.body.appendChild(navigation);
    const ageGate = document.createElement('script'); ageGate.src = '/assets/age-gate.js'; document.body.appendChild(ageGate);
  }
  if (window.STARK_LOCALES) initialize();
  else { const locales = document.createElement('script'); locales.src = '/assets/locales.js'; locales.onload = initialize; document.head.appendChild(locales); }
})();
