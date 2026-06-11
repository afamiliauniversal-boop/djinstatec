/* ===== Header scroll ===== */
const header=document.getElementById('header');
window.addEventListener('scroll',()=>{header.classList.toggle('scrolled',window.scrollY>20)});

/* ===== Mobile menu ===== */
const navToggle=document.getElementById('navToggle'),navLinks=document.getElementById('navLinks');
navToggle.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

/* ===== Scroll reveal ===== */
const reveals=document.querySelectorAll('.reveal');
if('IntersectionObserver' in window){
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target);}});
  },{threshold:.15});
  reveals.forEach(el=>io.observe(el));
  /* rede de segurança: se o observer não disparar, mostra tudo */
  setTimeout(()=>reveals.forEach(el=>el.classList.add('show')),2500);
}else{
  reveals.forEach(el=>el.classList.add('show'));
}

/* ===== Animated counters ===== */
function animateCounter(el){
  const target=+el.dataset.target,suffix=el.dataset.suffix||'';
  const dur=1600,start=performance.now();
  function tick(now){
    const p=Math.min((now-start)/dur,1);
    const eased=1-Math.pow(1-p,3);
    el.textContent=Math.round(eased*target)+suffix;
    if(p<1)requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
const nums=document.querySelectorAll('.num[data-target]');
if('IntersectionObserver' in window){
  const counterIO=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{if(e.isIntersecting){animateCounter(e.target);counterIO.unobserve(e.target);}});
  },{threshold:.5});
  nums.forEach(el=>counterIO.observe(el));
  /* rede de segurança */
  setTimeout(()=>nums.forEach(el=>{if(el.textContent==='0')animateCounter(el);}),2600);
}else{
  nums.forEach(el=>el.textContent=el.dataset.target+(el.dataset.suffix||''));
}

/* ===== Portfolio filter ===== */
const filters=document.querySelectorAll('.filter'),pfItems=document.querySelectorAll('.pf-item');
filters.forEach(f=>f.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active'));f.classList.add('active');
  const cat=f.dataset.filter;
  pfItems.forEach(item=>{
    const show=cat==='all'||item.dataset.cat===cat;
    item.style.display=show?'':'none';
  });
}));

/* ===== WhatsApp form ===== */
const WA_NUMBER='5511992137770';
document.getElementById('waForm').addEventListener('submit',function(ev){
  ev.preventDefault();
  const nome=document.getElementById('nome').value.trim();
  const servico=document.getElementById('servico').value;
  const bairro=document.getElementById('bairro').value.trim();
  const msg=document.getElementById('msg').value.trim();
  let texto=`Olá, D&J INSTATEC! Vim pelo site.%0A%0A`;
  texto+=`*Nome:* ${nome}%0A`;
  texto+=`*Serviço:* ${servico}%0A`;
  if(bairro)texto+=`*Local:* ${bairro}%0A`;
  if(msg)texto+=`*Detalhes:* ${msg}%0A`;
  texto+=`%0AGostaria de um orçamento grátis. 🙏`;
  window.open(`https://wa.me/${WA_NUMBER}?text=${texto}`,'_blank');
});

/* ===== Carrossel do hero (fotos em ordem ALEATÓRIA, tempo regular) ===== */
(function(){
  const wrap=document.getElementById('heroCarousel');
  if(!wrap)return;
  const TOTAL=218, INTERVAL=650; /* ms por foto */
  const pad=n=>String(n).padStart(4,'0');
  const src=i=>`images/servicos/s_${pad(i)}.jpg`;
  const layers=wrap.querySelectorAll('.hc-img');
  /* embaralha UMA vez (Fisher-Yates) p/ não seguir a ordem da pasta; depois repete na mesma ordem */
  const order=Array.from({length:TOTAL},(_,k)=>k+1);
  for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const t=order[i];order[i]=order[j];order[j]=t;}
  let pos=0, front=0;
  layers[0].src=src(order[pos]); layers[0].classList.add('active'); pos++;
  function show(){
    if(pos>=order.length)pos=0;
    const ni=order[pos], back=1-front, img=layers[back], pre=new Image();
    pre.onload=()=>{img.src=pre.src;img.classList.add('active');layers[front].classList.remove('active');front=back;pos++;};
    pre.onerror=()=>{pos++;};
    pre.src=src(ni);
  }
  setInterval(show, INTERVAL);
})();