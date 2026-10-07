(function(){
const labels = {da:['Beregner','Om os'],en:['Calculator','About us'],sv:['Kalkylator','Om oss'],no:['Kalkulator','Om oss'],de:['Rechner','Über uns']};
const nav=document.querySelector('.nav-links'); if(!nav)return;
for(const [i,href] of ['/peptide-calculator/','/om-os/'].entries()){if(nav.querySelector(`a[href="${href}"]`))continue;const a=document.createElement('a');a.href=href;a.className='extra-nav';a.dataset.extraNav=i;nav.insertBefore(a,nav.querySelector('.nav-cta'));}
function render(){const t=labels[document.documentElement.lang]||labels.da;nav.querySelectorAll('[data-extra-nav]').forEach(a=>a.textContent=t[Number(a.dataset.extraNav)]);}
window.addEventListener('stark-language-change',render);render();
})();
