const dishes = [
  {n:'مندي لحم',d:'لحم طري مع أرز بسمتي مدخّن',p:68,c:'main',e:'🍖'},
  {n:'كبسة دجاج',d:'دجاج مشوي مع أرز بالبهارات',p:45,c:'main',e:'🍗'},
  {n:'سمك مشوي',d:'سمك طازج بصلصة الليمون',p:72,c:'main',e:'🐟'},
  {n:'حمص بالطحينة',d:'حمص كريمي بزيت الزيتون',p:16,c:'starter',e:'🥣'},
  {n:'سمبوسة',d:'مقرمشة بحشوة اللحم والبصل',p:14,c:'starter',e:'🥟'},
  {n:'سلطة فتوش',d:'خضار طازجة مع خبز محمص',p:18,c:'starter',e:'🥗'},
  {n:'كنافة نابلسية',d:'جبنة ساخنة وقطر خفيف',p:24,c:'dessert',e:'🍮'},
  {n:'أم علي',d:'حلوى دافئة بالمكسرات',p:20,c:'dessert',e:'🥧'},
  {n:'قهوة عربية',d:'محمصة مع الهيل والتمر',p:10,c:'drink',e:'☕'},
  {n:'عصير ليمون بالنعناع',d:'منعش ومثلّج',p:15,c:'drink',e:'🍋'},
];
const grid = document.getElementById('menu-grid');
function render(cat){
  grid.innerHTML = dishes.filter(x=>cat==='all'||x.c===cat).map(x=>
    `<article class="dish"><div class="em">${x.e}</div><div><h3>${x.n}</h3><p>${x.d}</p></div><span class="price">${x.p} ر.س</span></article>`).join('');
}
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{
  document.querySelector('.tab.active').classList.remove('active');
  t.classList.add('active'); render(t.dataset.cat);
}));
render('all');

const f = document.getElementById('book-form');
f.date.min = new Date().toISOString().slice(0,10);
f.addEventListener('submit', e=>{
  e.preventDefault();
  const m = f.querySelector('.msg');
  if(!f.checkValidity()){ m.textContent='يرجى تعبئة الحقول بشكل صحيح.'; return; }
  m.textContent = `تم استلام حجزك يا ${f.name.value} (نموذج تجريبي).`; f.reset();
});
document.getElementById('year').textContent = new Date().getFullYear();
