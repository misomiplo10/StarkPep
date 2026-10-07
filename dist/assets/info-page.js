(function(){
  let language = localStorage.getItem('stark-language');
  if(!window.STARK_INFO[language])language='da';
  const form=document.querySelector('#calculator');
  let calculated=false;
  let status='empty';
  function number(value){const text=value.trim().replace(',','.');return /^(?:\d+(?:\.\d*)?|\.\d+)$/.test(text)?Number(text):NaN;}
  function compute(mass,liquid,target,unit,capacity){
    if(![mass,liquid,target,capacity].every(n=>Number.isFinite(n)&&n>0))return {error:'invalid'};
    const amount=unit==='mg'?target:target/1000;
    const concentration=mass/liquid,volume=amount/concentration,units=volume*100,percent=volume/capacity*100;
    if(![concentration,volume,units,percent].every(n=>Number.isFinite(n)&&n>0))return {error:'invalid'};
    if(amount>mass)return {error:'tooMuch'};
    return {concentration,volume,units,percent,error:volume>capacity+1e-12?'tooLarge':null};
  }
  function renderCalculation(){
    if(!form)return;
    const capacity=Number(document.querySelector('#scale-size').value);
    const t=window.STARK_INFO[language];
    const format=n=>new Intl.NumberFormat(language==='no'?'nb':language,{maximumSignificantDigits:6}).format(n);
    document.querySelector('#scale-mid').textContent=format(capacity*50);
    document.querySelector('#scale-max').textContent=format(capacity*100)+' U-100';
    let result={};
    if(calculated)result=compute(number(document.querySelector('#peptide-mass').value),number(document.querySelector('#liquid-volume').value),number(document.querySelector('#target-amount').value),document.querySelector('#target-unit').value,capacity);
    status=calculated?(result.error||'success'):'empty';
    for(const [id,key,unit] of [['concentration','concentration',' mg/mL'],['volume','volume',' mL'],['units','units',''],['capacity','percent',' %']])document.querySelector('#result-'+id).textContent=result[key]===undefined?'—':format(result[key])+unit;
    document.querySelector('#calc-fill').style.width=result.percent===undefined?'0%':Math.min(result.percent,100)+'%';
    const message=document.querySelector('#calc-status');message.textContent=t[status];message.dataset.state=result.error?'error':status;
  }
  function applyLanguage(code){
    if(!window.STARK_INFO[code])return;
    language=code; const t=window.STARK_INFO[code];document.documentElement.lang=code;
    const about=document.body.dataset.infoPage==='om-os';
    document.title=(about?t.navAbout:t.navCalc)+' — Stark Peptides';
    document.querySelector('meta[name="description"]').content=about?t.aboutIntro:t.calcIntro;
    document.querySelectorAll('[data-i18n]').forEach(el=>{if(t[el.dataset.i18n])el.textContent=t[el.dataset.i18n];});
    document.querySelectorAll('[data-i18n-aria]').forEach(el=>{if(t[el.dataset.i18nAria])el.setAttribute('aria-label',t[el.dataset.i18nAria]);});
    document.querySelectorAll('[data-lang]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.lang===code)));
    localStorage.setItem('stark-language',code);renderCalculation();window.dispatchEvent(new CustomEvent('stark-language-change',{detail:code}));
  }
  window.STARK_SET_LANGUAGE=applyLanguage;
  document.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>applyLanguage(el.dataset.lang)));
  if(form){form.addEventListener('submit',e=>{e.preventDefault();calculated=true;renderCalculation();});form.addEventListener('input',()=>{calculated=false;renderCalculation();});form.addEventListener('change',()=>{calculated=false;renderCalculation();});}
  document.querySelector('#year').textContent=new Date().getFullYear();applyLanguage(language);
  const gate=document.createElement('script');gate.src='/assets/age-gate.js';document.body.appendChild(gate);
})();
