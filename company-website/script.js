
document.documentElement.classList.add('js');
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const mb=$('.menu-btn'),mn=$('.menu');
if(mb)mb.onclick=()=>{const o=mn.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
const here=location.pathname.split('/').pop()||'index.html';
$$('.menu a').forEach(a=>{if(a.getAttribute('href')===here)a.classList.add('on')});
$$('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const rvio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');rvio.unobserve(e.target)}}),{threshold:.1});
$$('.rv').forEach(e=>rvio.observe(e));
const cio=new IntersectionObserver(es=>es.forEach(en=>{if(!en.isIntersecting)return;const el=en.target,end=+el.dataset.count;let n=0;const st=Math.max(1,Math.ceil(end/50));
 const t=setInterval(()=>{n=Math.min(end,n+st);el.textContent=n.toLocaleString('en')+(el.dataset.suffix||'+');if(n>=end)clearInterval(t)},30);cio.unobserve(el)}),{threshold:.5});
$$('[data-count]').forEach(e=>cio.observe(e));
function toast(m){let t=$('.toast');if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)}t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),2200)}
$$('form[data-form]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();const m=$('.form-msg',f);
 if(!f.checkValidity()){f.reportValidity&&f.reportValidity();if(m)m.textContent='يرجى تعبئة الحقول المطلوبة بشكل صحيح.';return}
 if(m)m.textContent=f.dataset.ok||'تم الإرسال.';f.reset()}));
$$('[data-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast('تم نسخ الكود: '+b.dataset.copy)}catch{toast('الكود: '+b.dataset.copy)}});
const qs=new URLSearchParams(location.search);

const PROJECTS=[
{t:'متجر أزياء نسائية',c:'store',e:'👗',cl:'مؤسسة لمسة',r:'+40% مبيعات في شهرين'},
{t:'نظام محاسبة وفوترة',c:'erp',e:'🧾',cl:'مجموعة النخبة',r:'إلغاء أخطاء الفوترة 100%'},
{t:'موقع شركة مقاولات',c:'web',e:'🏗️',cl:'بنيان للمقاولات',r:'+65% طلبات عروض أسعار'},
{t:'هوية مطعم',c:'brand',e:'🍽️',cl:'مطعم مذاق',r:'علامة تجارية جديدة بالكامل'},
{t:'لوحة تحكم مبيعات',c:'erp',e:'📊',cl:'الرواد للتجارة',r:'توفير 15 ساعة عمل أسبوعيًا'},
{t:'متجر إلكترونيات',c:'store',e:'🎧',cl:'تقنية الأفق',r:'سرعة التحميل أقل من ثانيتين'},
{t:'موقع عيادة أسنان',c:'web',e:'🦷',cl:'عيادات الابتسامة',r:'+120 حجز شهريًا'},
{t:'هوية شركة تقنية ناشئة',c:'brand',e:'🚀',cl:'ستارت لاب',r:'جولة تمويل ناجحة'},
{t:'نظام إدارة مخزون',c:'erp',e:'📦',cl:'سلاسل المتاجر',r:'دقة المخزون 99%'}];
const POSTS=[
{t:'5 أخطاء تقتل مبيعات متجرك',c:'biz',e:'📰',d:'12 مارس 2026',m:'6 دقائق'},
{t:'كيف تختار نظام ERP مناسب؟',c:'tech',e:'🧩',d:'5 مارس 2026',m:'8 دقائق'},
{t:'دليل الفوترة الإلكترونية للمبتدئين',c:'biz',e:'🧾',d:'27 فبراير 2026',m:'7 دقائق'},
{t:'أساسيات SEO لموقعك العربي',c:'mkt',e:'🔎',d:'20 فبراير 2026',m:'5 دقائق'},
{t:'لماذا سرعة الموقع تهم عملاءك؟',c:'tech',e:'⚡',d:'11 فبراير 2026',m:'4 دقائق'},
{t:'إعلانات سناب وإنستغرام: أيهما أفضل؟',c:'mkt',e:'📣',d:'2 فبراير 2026',m:'6 دقائق'}];
const TEAM=[['👨‍💼','محمد الحربي','المدير التنفيذي'],['👩‍🎨','ريم القحطاني','مديرة التصميم'],['👨‍💻','عمر السالم','قائد التطوير'],['👩‍💻','لجين الشهري','مطورة Full-Stack'],['👨‍🔧','فهد الغامدي','مهندس أنظمة ERP'],['👩‍💼','هند الزهراني','مديرة التسويق']];
const catN={web:'موقع',store:'متجر',erp:'نظام',brand:'هوية',tech:'تقنية',biz:'أعمال',mkt:'تسويق'};
const pCard=p=>`<article class="card proj"><div class="ph">${p.e}</div><div class="body"><span class="chip">${catN[p.c]}</span><h3>${p.t}</h3><div class="meta">العميل: ${p.cl}</div><div class="res">📈 ${p.r}</div></div></article>`;
const bCard=p=>`<a href="blog-post.html" class="card post"><div class="ph">${p.e}</div><span class="chip" style="margin-top:10px">${catN[p.c]}</span><h3>${p.t}</h3><div class="meta">${p.d} · ${p.m}</div></a>`;
function bind(tabs,list,data,card){const t=$(tabs);if(!t)return;const draw=c=>$(list).innerHTML=data.filter(x=>c==='all'||x.c===c).map(card).join('');
 t.onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.tab',t).forEach(x=>x.classList.remove('on'));b.classList.add('on');draw(b.dataset.c)};draw('all')}
bind('#ptabs','#plist',PROJECTS,pCard);bind('#btabs','#blist',POSTS,bCard);
if($('#home-projects'))$('#home-projects').innerHTML=PROJECTS.slice(0,3).map(pCard).join('');
if($('#home-posts'))$('#home-posts').innerHTML=POSTS.slice(0,3).map(bCard).join('');
if($('#team'))$('#team').innerHTML=TEAM.map(([a,n,r])=>`<div class="card member"><div class="av">${a}</div><h3>${n}</h3><small>${r}</small></div>`).join('');
$$('[data-bill]').forEach(b=>b.onclick=()=>{$$('[data-bill]').forEach(x=>x.classList.remove('on'));b.classList.add('on');const y=b.dataset.bill==='yr';
 $$('.price b').forEach(p=>p.textContent=(+p.dataset[y?'yr':'mo']).toLocaleString('en'));$$('.per').forEach(p=>p.textContent=y?'شهر (يُدفع سنويًا)':'شهر')});
