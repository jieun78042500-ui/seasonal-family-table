document.querySelectorAll('.card-art').forEach(el=>{const icon=el.textContent.trim();el.innerHTML=`<span class="cute-icon" aria-hidden="true">${icon}</span>`});
document.querySelectorAll('.list article > div[style]').forEach(el=>{el.removeAttribute('style');el.classList.add('mini-icon')});
document.querySelectorAll('.mobile-nav b').forEach((el,i)=>{el.textContent=['🏡','🍄','💧','🌤️','💌'][i]||el.textContent});
if(location.pathname.startsWith('/letter')){document.querySelector('.feature p')?.classList.add('letter-copy');document.querySelectorAll('.list article p').forEach(el=>el.classList.add('letter-item'))}
const quote=document.querySelector('.quote blockquote');if(quote){quote.innerHTML='“계절은 소리 없이 바뀌지만,<br>마음은 그 변화를 알아봅니다.”';document.querySelector('.quote small').textContent='💌 하루 좋은 글'}
const breakAfterComma=el=>{if(!el)return;el.innerHTML=el.innerHTML.replace(/,\s*/g,',<br>')};
if(location.pathname.startsWith('/letter')){breakAfterComma(document.querySelector('.letter-copy'));document.querySelectorAll('.letter-item').forEach(breakAfterComma)}
if(location.pathname.startsWith('/season')){
  const feature=document.querySelector('.feature-grid');
  feature?.insertAdjacentHTML('afterend','<section class="terms-overview"><div class="terms-overview-head"><div><h2>한눈에 보는 24절기</h2><p>봄부터 겨울까지, 계절의 흐름을 순서대로 살펴보세요.</p></div><span class="tag">오늘 · 백로</span></div><img src="/24-seasons.svg" alt="봄, 여름, 가을, 겨울로 나누어 정리한 24절기표. 2026년 9월 8일 백로가 강조되어 있다."></section>');
}
if(location.pathname==='/'){
  document.querySelector('.hero-img')?.insertAdjacentHTML('beforeend','<a class="season-float" href="/season/" aria-label="24절기 전체 보기"><small>💧 오늘은 백로</small><strong>한눈에 보는 24절기</strong><span class="season-float-row"><span class="season-dots"><i></i><i></i><i></i><i></i></span><span>전체 보기 →</span></span></a>');
}
