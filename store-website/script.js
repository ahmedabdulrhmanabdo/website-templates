const products = [
  {id:1,n:'سماعات لاسلكية',cat:'إلكترونيات',p:199,old:279,r:5,e:'🎧',c:'#dbeafe'},
  {id:2,n:'ساعة ذكية',cat:'إلكترونيات',p:349,r:4,e:'⌚',c:'#e0e7ff'},
  {id:3,n:'حقيبة ظهر',cat:'أزياء',p:129,old:159,r:4,e:'🎒',c:'#fef3c7'},
  {id:4,n:'حذاء رياضي',cat:'أزياء',p:259,r:5,e:'👟',c:'#fee2e2'},
  {id:5,n:'نظارة شمسية',cat:'أزياء',p:89,r:4,e:'🕶️',c:'#fce7f3'},
  {id:6,n:'مصباح مكتب',cat:'المنزل',p:75,old:99,r:4,e:'💡',c:'#fef9c3'},
  {id:7,n:'كوب حراري',cat:'المنزل',p:49,r:5,e:'☕',c:'#dcfce7'},
  {id:8,n:'نبتة زينة',cat:'المنزل',p:35,r:4,e:'🪴',c:'#d1fae5'},
];
const state = {cat:'الكل',q:'',sort:'',cart:{}};
const $ = id => document.getElementById(id);
const money = n => n.toLocaleString('ar-SA') + ' ر.س';

// تصنيفات
const cats = ['الكل', ...new Set(products.map(p=>p.cat))];
$('cats').innerHTML = cats.map(c=>`<button class="cat${c==='الكل'?' active':''}">${c}</button>`).join('');
$('cats').addEventListener('click',e=>{
  if(!e.target.classList.contains('cat')) return;
  document.querySelector('.cat.active').classList.remove('active');
  e.target.classList.add('active'); state.cat=e.target.textContent; renderGrid();
});
$('search').addEventListener('input',e=>{state.q=e.target.value.trim();renderGrid();});
$('sort').addEventListener('change',e=>{state.sort=e.target.value;renderGrid();});

function renderGrid(){
  let list = products.filter(p=>(state.cat==='الكل'||p.cat===state.cat)&&p.n.includes(state.q));
  if(state.sort) list = [...list].sort((a,b)=>state.sort==='asc'?a.p-b.p:b.p-a.p);
  $('empty').hidden = list.length>0;
  $('grid').innerHTML = list.map(p=>`
   <article class="card"><div class="img" style="background:${p.c}">${p.old?'<span class="sale">تخفيض</span>':''}${p.e}</div>
   <div class="info"><h3>${p.n}</h3><div class="stars">${'★'.repeat(p.r)}${'☆'.repeat(5-p.r)}</div>
   <div class="pr"><b>${money(p.p)}</b>${p.old?`<s>${money(p.old)}</s>`:''}</div>
   <button class="btn" data-add="${p.id}">أضف للسلة</button></div></article>`).join('');
}
$('grid').addEventListener('click',e=>{
  const id = e.target.dataset.add; if(!id) return;
  state.cart[id] = (state.cart[id]||0)+1; renderCart(); openCart();
});

function renderCart(){
  const ids = Object.keys(state.cart);
  let total=0, count=0;
  $('items').innerHTML = ids.length ? ids.map(id=>{
    const p = products.find(x=>x.id==id), q = state.cart[id]; total+=p.p*q; count+=q;
    return `<div class="line"><div class="em" style="background:${p.c}">${p.e}</div>
      <div class="t">${p.n}<small>${money(p.p)}</small></div>
      <div class="qty"><button data-d="-1" data-id="${id}" aria-label="إنقاص">−</button><span>${q}</span><button data-d="1" data-id="${id}" aria-label="زيادة">+</button></div></div>`;
  }).join('') : '<p class="none">السلة فارغة</p>';
  $('total').textContent = money(total); $('count').textContent = count;
}
$('items').addEventListener('click',e=>{
  const {id,d} = e.target.dataset; if(!id) return;
  state.cart[id] += +d; if(state.cart[id]<=0) delete state.cart[id]; renderCart();
});

const openCart = () => {$('drawer').classList.add('open');$('overlay').hidden=false;$('drawer').setAttribute('aria-hidden','false');};
const closeCart = () => {$('drawer').classList.remove('open');$('overlay').hidden=true;$('drawer').setAttribute('aria-hidden','true');};
$('cart-btn').addEventListener('click',openCart); $('close').addEventListener('click',closeCart); $('overlay').addEventListener('click',closeCart);
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCart();});
$('checkout').addEventListener('click',()=>{
  $('cmsg').textContent = Object.keys(state.cart).length ? 'شكرًا لطلبك! (نموذج تجريبي، لا يوجد دفع فعلي)' : 'أضف منتجات أولًا.';
  if(Object.keys(state.cart).length){ state.cart={}; renderCart(); }
});
renderGrid(); renderCart();
