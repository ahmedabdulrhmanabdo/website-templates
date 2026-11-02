const projects = [
  {t:'متجر إلكتروني',d:'متجر متكامل مع سلة ودفع',c:'web',e:'🛒',g:'#8b5cf6,#6366f1'},
  {t:'نظام محاسبة',d:'لوحة تحكم وفوترة إلكترونية',c:'app',e:'🧾',g:'#06b6d4,#3b82f6'},
  {t:'هوية مطعم',d:'شعار وقائمة وتغليف',c:'brand',e:'🍽️',g:'#f97316,#ef4444'},
  {t:'موقع شركة',d:'موقع تعريفي متجاوب',c:'web',e:'🏢',g:'#10b981,#14b8a6'},
  {t:'تطبيق حجوزات',d:'إدارة مواعيد وعملاء',c:'app',e:'📅',g:'#ec4899,#8b5cf6'},
  {t:'هوية تقنية',d:'علامة لشركة ناشئة',c:'brand',e:'🚀',g:'#eab308,#f97316'},
];
const wrap = document.getElementById('projects');
const names = {web:'موقع',app:'نظام',brand:'هوية'};
function show(c){
  wrap.innerHTML = projects.filter(p=>c==='all'||p.c===c).map(p=>
   `<article class="proj"><div class="thumb" style="background:linear-gradient(135deg,${p.g})">${p.e}</div>
    <div class="b"><h3>${p.t}</h3><p>${p.d}</p><span class="tag">#${names[p.c]}</span></div></article>`).join('');
}
document.querySelectorAll('.f').forEach(b=>b.addEventListener('click',()=>{
  document.querySelector('.f.active').classList.remove('active'); b.classList.add('active'); show(b.dataset.c);
}));
show('all');

const skills = [['HTML / CSS',95],['JavaScript',88],['Python',82],['Frappe / ERPNext',85],['تصميم الواجهات',80],['قواعد البيانات',75]];
const sl = document.getElementById('skills-list');
sl.innerHTML = skills.map(([n,v])=>`<div class="skill"><div class="top"><span>${n}</span><span>${v}%</span></div><div class="bar"><i data-w="${v}"></i></div></div>`).join('');
new IntersectionObserver((es,o)=>es.forEach(e=>{ if(e.isIntersecting){ e.target.querySelectorAll('i').forEach(i=>i.style.width=i.dataset.w+'%'); o.unobserve(e.target);} }),{threshold:.3}).observe(sl);

const root = document.documentElement;
try{ const s=localStorage.getItem('theme'); if(s) root.dataset.theme=s; }catch{}
document.getElementById('theme').addEventListener('click',()=>{
  const n = root.dataset.theme==='light'?'dark':'light'; root.dataset.theme=n;
  try{ localStorage.setItem('theme',n); }catch{}
});

document.getElementById('cf').addEventListener('submit',e=>{
  e.preventDefault(); const f=e.target, m=f.querySelector('.msg');
  if(!f.checkValidity()){ m.textContent='يرجى تعبئة الحقول بشكل صحيح.'; return; }
  m.textContent='شكرًا لك! (نموذج تجريبي لا يرسل بيانات)'; f.reset();
});
document.getElementById('year').textContent = new Date().getFullYear();
