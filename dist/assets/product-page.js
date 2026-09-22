(function () {
  const translations = window.STARK_PRODUCT_TRANSLATIONS;
  if (!translations) return;

  let currentLanguage = localStorage.getItem('stark-language');
  if (!translations[currentLanguage]) currentLanguage = 'da';

  const metaDescription = document.querySelector('meta[name="description"]');

  function applyLanguage(language) {
    const t = translations[language];
    currentLanguage = language;
    document.documentElement.lang = language;
    document.title = t.pageTitle;
    if (metaDescription) metaDescription.setAttribute('content', t.pageDescription);

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = t[element.dataset.i18n];
      if (typeof value === 'string') element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria]').forEach((element) => {
      const value = t[element.dataset.i18nAria];
      if (value) element.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const value = t[element.dataset.i18nAlt];
      if (value) element.setAttribute('alt', value);
    });

    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === language));
    });

    localStorage.setItem('stark-language', language);
  }

  document.querySelectorAll('[data-lang]').forEach((button) => {
    button.addEventListener('click', () => applyLanguage(button.dataset.lang));
  });

  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();

  applyLanguage(currentLanguage);
})();
