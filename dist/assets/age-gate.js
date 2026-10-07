(function () {
  const sessionKey = 'stark-age-confirmed';
  let confirmed = false;
  try { confirmed = sessionStorage.getItem(sessionKey) === '18+'; } catch {}
  if (confirmed || document.getElementById('stark-age-gate')) return;
  const style = document.createElement('style');
  style.textContent = `
    #stark-age-gate { box-sizing: border-box; width: min(540px, calc(100% - 32px)); max-height: calc(100dvh - 32px); overflow: auto; margin: auto; padding: clamp(26px, 6vw, 46px); color: #0b1830; background: #fff; border: 1px solid #dce4ef; border-top: 4px solid #397fe8; border-radius: 24px; box-shadow: 0 24px 90px #0005; font-family: inherit; text-align: center; }
    #stark-age-gate::backdrop { background: rgba(7, 17, 34, .88); backdrop-filter: blur(6px); }
    #stark-age-gate .age-logo { display: block; width: 200px; max-width: 80%; margin: 0 auto 24px; }
    #stark-age-gate .age-languages { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 24px; }
    #stark-age-gate .age-languages button { padding: 7px 12px; background: #f7f9fc; color: #5b6c85; border: 1px solid #dce4ef; border-radius: 20px; font: inherit; font-size: 12px; cursor: pointer; }
    #stark-age-gate .age-languages button[aria-pressed=true] { background: #397fe8; border-color: #397fe8; color: #fff; }
    #stark-age-gate .age-icon { display: grid; place-items: center; width: 58px; height: 58px; margin: 0 auto 20px; color: #397fe8; background: #eaf3ff; border-radius: 50%; font-weight: 800; font-size: 20px; }
    #stark-age-gate h2 { margin: 0 0 16px; font-size: clamp(23px, 5vw, 29px); line-height: 1.2; letter-spacing: -.03em; }
    #stark-age-gate p { margin: 0 0 20px; color: #5b6c85; line-height: 1.65; font-size: 15px; }
    #stark-age-gate .age-requirement { color: #0b1830; font-weight: 750; }
    #stark-age-gate .age-actions { display: grid; gap: 10px; margin: 24px 0; }
    #stark-age-gate .age-actions button { min-height: 48px; padding: 13px 18px; border: 1px solid #dce4ef; border-radius: 12px; color: #0b1830; background: #f7f9fc; font: inherit; font-size: 14px; font-weight: 750; cursor: pointer; }
    #stark-age-gate .age-actions .age-accept { background: #397fe8; border-color: #397fe8; color: #fff; }
    #stark-age-gate button:focus-visible { outline: 3px solid #59a7ff; outline-offset: 3px; }
    #stark-age-gate .age-note { margin-bottom: 0; font-size: 12px; }
  `;
  document.head.appendChild(style);
  const dialog = document.createElement('dialog');
  dialog.id = 'stark-age-gate';
  dialog.setAttribute('aria-labelledby', 'age-title');
  dialog.setAttribute('aria-describedby', 'age-copy age-requirement');
  dialog.innerHTML = `
    <img class="age-logo" src="/assets/stark-peptides-logo-transparent.png" alt="Stark Peptides">
    <div class="age-languages" aria-label="Language"><button type="button" data-age-lang="da">DA</button><button type="button" data-age-lang="en">EN</button><button type="button" data-age-lang="sv" aria-label="Svenska">SV</button><button type="button" data-age-lang="no" aria-label="Norsk">NO</button><button type="button" data-age-lang="de" aria-label="Deutsch">DE</button></div>
    <div class="age-icon" aria-hidden="true">18+</div>
    <h2 id="age-title"></h2>
    <p id="age-copy"></p>
    <p class="age-requirement" id="age-requirement"></p>
    <div class="age-actions"><button type="button" class="age-accept" id="age-accept" autofocus></button><button type="button" id="age-reject"></button></div>
    <p class="age-note" id="age-note"></p>`;
  document.body.appendChild(dialog);
  const copy = {
    da: { title: 'Bekræft din alder', copy: 'Denne hjemmeside indeholder information om forskningsprodukter og er kun for voksne.', requirement: 'Du skal være 18 år eller ældre for at fortsætte.', accept: 'Jeg er 18 år eller ældre', reject: 'Jeg er under 18', note: 'Ved at fortsætte bekræfter du, at du er mindst 18 år. Produkterne er kun til laboratorieforskning. Indholdet er ikke medicinsk rådgivning.', deniedTitle: 'Adgang kræver, at du er 18+', deniedCopy: 'Du kan ikke fortsætte på hjemmesiden, hvis du er under 18 år.', back: 'Tilbage til aldersbekræftelse' },
    en: { title: 'Confirm your age', copy: 'This website contains information about research products and is intended for adults only.', requirement: 'You must be 18 or older to continue.', accept: 'I am 18 or older', reject: 'I am under 18', note: 'By continuing, you confirm that you are at least 18 years old. Products are for laboratory research only. This content is not medical advice.', deniedTitle: 'You must be 18+ to enter', deniedCopy: 'You cannot continue to this website if you are under 18.', back: 'Back to age confirmation' }
  };
  for (const [code, locale] of Object.entries(window.STARK_LOCALES || {})) copy[code] = locale.age;
  let language = copy[document.documentElement.lang] ? document.documentElement.lang : 'da';
  let denied = false;
  const accept = dialog.querySelector('#age-accept');
  const reject = dialog.querySelector('#age-reject');
  const previousOverflow = document.documentElement.style.overflow;
  function render() {
    const t = copy[language];
    dialog.lang = language;
    dialog.querySelector('.age-languages').setAttribute('aria-label', window.STARK_LOCALES?.[language]?.home.languageAria || (language === 'da' ? 'Vælg sprog' : 'Choose language'));
    dialog.querySelector('#age-title').textContent = denied ? t.deniedTitle : t.title;
    dialog.querySelector('#age-copy').textContent = denied ? t.deniedCopy : t.copy;
    dialog.querySelector('#age-requirement').textContent = t.requirement;
    dialog.querySelector('#age-note').textContent = t.note;
    accept.textContent = t.accept;
    accept.hidden = denied;
    reject.textContent = denied ? t.back : t.reject;
    dialog.querySelectorAll('[data-age-lang]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.ageLang === language)));
  }
  function open() {
    if (confirmed) return;
    denied = false;
    render();
    document.documentElement.style.overflow = 'hidden';
    if (!dialog.open) dialog.showModal();
    accept.focus();
  }
  dialog.addEventListener('cancel', e => e.preventDefault());
  accept.addEventListener('click', () => {
    confirmed = true;
    try { sessionStorage.setItem(sessionKey, '18+'); } catch {}
    dialog.close();
    document.documentElement.style.overflow = previousOverflow;
    const target = document.querySelector('main h1');
    if (target) { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); }
  });
  reject.addEventListener('click', () => {
    denied = !denied;
    render();
    (denied ? reject : accept).focus();
  });
  dialog.querySelectorAll('[data-age-lang]').forEach(b => b.addEventListener('click', () => { language = b.dataset.ageLang; window.STARK_SET_LANGUAGE?.(language); render(); }));
  window.addEventListener('stark-language-change', e => { if (copy[e.detail]) { language = e.detail; render(); } });
  window.addEventListener('pageshow', e => { if (e.persisted) open(); });
  open();
})();
