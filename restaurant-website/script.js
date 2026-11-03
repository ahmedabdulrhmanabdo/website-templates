
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

const DISHES=[
{n:'مندي لحم',d:'لحم غنم طري مع أرز بسمتي مدخّن بالفحم',p:68,c:'main',e:'🍖',cal:820,t:['best']},
{n:'كبسة دجاج',d:'دجاج مشوي مع أرز بالبهارات والبصل المحمّر',p:45,c:'main',e:'🍗',cal:710,t:['best']},
{n:'مظبي لحم',d:'قطع لحم مشوية على الحجر مع صلصة خاصة',p:74,c:'main',e:'🥩',cal:780,t:['spicy']},
{n:'سمك مشوي',d:'سمك هامور طازج بصلصة الليمون والأعشاب',p:72,c:'main',e:'🐟',cal:540,t:[]},
{n:'مشاوي مشكلة',d:'تشكيلة كباب وأوصال وريش مع خبز وسلطة',p:96,c:'main',e:'🍢',cal:950,t:['best']},
{n:'برياني خضار',d:'أرز بسمتي مع خضار موسمية وتوابل هندية',p:38,c:'main',e:'🍛',cal:560,t:['veg','spicy']},
{n:'حمص بالطحينة',d:'حمص كريمي بزيت الزيتون والبابريكا',p:16,c:'starter',e:'🥣',cal:240,t:['veg']},
{n:'متبّل باذنجان',d:'باذنجان مشوي بالطحينة والثوم',p:17,c:'starter',e:'🍆',cal:210,t:['veg']},
{n:'سمبوسة لحم',d:'مقرمشة بحشوة اللحم والبصل (6 حبات)',p:18,c:'starter',e:'🥟',cal:380,t:[]},
{n:'فتوش',d:'خضار طازجة مع خبز محمص ودبس الرمان',p:18,c:'starter',e:'🥗',cal:190,t:['veg']},
{n:'شوربة عدس',d:'شوربة دافئة بالكمّون والليمون',p:14,c:'starter',e:'🍲',cal:180,t:['veg']},
{n:'جريش',d:'قمح مجروش مطهو ببطء مع اللبن والسمن',p:34,c:'main',e:'🥘',cal:520,t:['new']},
{n:'كنافة نابلسية',d:'جبنة ساخنة وقطر خفيف وفستق',p:24,c:'dessert',e:'🍮',cal:480,t:['veg','best']},
{n:'أم علي',d:'حلوى دافئة بالمكسرات والزبيب',p:20,c:'dessert',e:'🥧',cal:430,t:['veg']},
{n:'بقلاوة',d:'طبقات رقيقة بالفستق والقطر (4 قطع)',p:22,c:'dessert',e:'🍯',cal:410,t:['veg']},
{n:'مهلبية',d:'مهلبية بماء الورد والفستق',p:15,c:'dessert',e:'🍨',cal:260,t:['veg','new']},
{n:'قهوة عربية',d:'محمصة مع الهيل والتمر',p:10,c:'drink',e:'☕',cal:15,t:['veg']},
{n:'شاي بالنعناع',d:'شاي أخضر بنعناع طازج',p:9,c:'drink',e:'🍵',cal:10,t:['veg']},
{n:'عصير ليمون بالنعناع',d:'منعش ومثلّج',p:15,c:'drink',e:'🍋',cal:90,t:['veg']},
{n:'لبن عيران',d:'مشروب لبن بارد منعش',p:8,c:'drink',e:'🥛',cal:110,t:['veg']}];
const CAT={all:'الكل',main:'الأطباق الرئيسية',starter:'المقبلات',dessert:'الحلويات',drink:'المشروبات'};
const TAG={veg:'🌱 نباتي',spicy:'🌶️ حار',best:'⭐ الأكثر طلبًا',new:'🆕 جديد'};
const dCard=x=>`<article class="dish"><div class="em">${x.e}</div><div><h3>${x.n}</h3><p>${x.d}</p>${x.t.map(t=>`<span class="tg">${TAG[t]}</span>`).join('')}<small>${x.cal} سعرة</small></div><span class="price">${x.p}<br><small>ر.س</small></span></article>`;
if($('#featured'))$('#featured').innerHTML=DISHES.filter(x=>x.t.includes('best')).slice(0,6).map(dCard).join('');
if($('#mgrid')){let cat='all';const draw=()=>{const q=$('#q').value.trim(),v=$('#fv').checked,s=$('#fs').checked,b=$('#fb').checked;
  const L=DISHES.filter(x=>(cat==='all'||x.c===cat)&&(x.n+x.d).includes(q)&&(!v||x.t.includes('veg'))&&(!s||x.t.includes('spicy'))&&(!b||x.t.includes('best')));
  $('#mgrid').innerHTML=L.map(dCard).join('')||'<p class="mut center">لا توجد أطباق مطابقة.</p>';$('#cnt').textContent=L.length+' طبق'};
 $('#cats').innerHTML=Object.entries(CAT).map(([k,v],i)=>`<button class="tab${i?'':' on'}" data-c="${k}">${v}</button>`).join('');
 $('#cats').onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.tab',$('#cats')).forEach(x=>x.classList.remove('on'));b.classList.add('on');cat=b.dataset.c;draw()};
 ['q','fv','fs','fb'].forEach(i=>$('#'+i).addEventListener('input',draw));draw()}
// offers
const OFFERS=[['🎁','عرض العائلة','وجبة لـ 5 أشخاص بسعر 199 ر.س','FAMILY','حتى نهاية الشهر','25%'],['🍰','حلوى مجانية','مع كل طلب فوق 120 ر.س','SWEET','الجمعة والسبت','مجانًا'],['🎓','خصم الطلاب','أبرز بطاقتك الجامعية','STUDENT','طوال الأسبوع','15%'],['🌅','غداء الأعمال','طبق + مشروب + شوربة بـ 39 ر.س','LUNCH39','من 12 إلى 4 عصرًا','39 ر.س'],['👨‍👩‍👧','الأطفال يأكلون مجانًا','طفل مجاني مع كل بالغ (الأحد)','KIDS','كل يوم أحد','مجانًا'],['🎂','عيد ميلادك علينا','حلوى وتزيين مجاني على طاولتك','BDAY','عند الحجز المسبق','مجانًا']];
if($('#olist'))$('#olist').innerHTML=OFFERS.map(o=>`<div class="card offer rv in"><span class="ico">${o[0]}</span><div class="pct">${o[5]}</div><h3>${o[1]}</h3><p>${o[2]}</p><small>⏳ ${o[4]}</small><div class="code"><code>${o[3]}</code><button class="btn btn-sm btn-o" data-copy="${o[3]}">نسخ</button></div></div>`).join('');
$$('[data-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast('تم نسخ الكود: '+b.dataset.copy)}catch{toast('الكود: '+b.dataset.copy)}});
// gallery
const G=[['🍖','مندي لحم','food','#c2410c,#7c2d12'],['🏡','الجلسة العائلية','place','#0f766e,#134e4a'],['👨‍🍳','فريق المطبخ','team','#7c3aed,#4c1d95'],['🍮','كنافة نابلسية','food','#d97706,#92400e'],['🌙','الجلسة الخارجية','place','#1d4ed8,#1e3a8a'],['🧑‍💼','فريق الصالة','team','#be185d,#831843'],['🍢','مشاوي مشكلة','food','#b91c1c,#7f1d1d'],['🛋️','القاعة الخاصة','place','#047857,#064e3b'],['☕','القهوة العربية','food','#78350f,#451a03']];
if($('#gal')){const draw=c=>$('#gal').innerHTML=G.filter(g=>c==='all'||g[2]===c).map((g,i)=>`<button class="gi" style="background:linear-gradient(135deg,${g[3]})" data-i="${G.indexOf(g)}">${g[0]}<span>${g[1]}</span></button>`).join('');draw('all');
 $('#gt').onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.tab',$('#gt')).forEach(x=>x.classList.remove('on'));b.classList.add('on');draw(b.dataset.c)};
 $('#gal').onclick=e=>{const b=e.target.closest('.gi');if(!b)return;const g=G[b.dataset.i];$('#lbc').style.background=`linear-gradient(135deg,${g[3]})`;$('#lbc').innerHTML=g[0]+`<span>${g[1]}</span>`;$('#lb').hidden=false};
 const cl=()=>$('#lb').hidden=true;$('#lbx').onclick=cl;$('#lb').onclick=e=>{if(e.target.id==='lb')cl()};document.addEventListener('keydown',e=>{if(e.key==='Escape')cl()})}
// reservation
if($('#rf')){const rd=$('#rd'),today=new Date();rd.min=today.toISOString().slice(0,10);rd.value=rd.min;
 $('#rg').innerHTML=Array.from({length:12},(_,i)=>`<option value="${i+1}">${i+1} ${i?'أشخاص':'شخص'}</option>`).join('')+'<option value="13">أكثر من 12</option>';$('#rg').value=2;
 let sel=null;const times=[];for(let h=12;h<=23;h++){times.push([h,0]);times.push([h,30])}
 const lab=([h,m])=>{const hh=h>12?h-12:h;return `${hh}:${m?'30':'00'} ${h>=12?'م':'ص'}`};
 const seed=s=>[...s].reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,7);
 function slots(){const sd=seed(rd.value);$('#slots').innerHTML=times.map((t,i)=>`<button type="button" class="slot${sel===i?' on':''}" data-i="${i}" ${(sd+i*13)%5===0?'disabled':''}>${lab(t)}</button>`).join('');summary()}
 function summary(){const ds=rd.value?new Date(rd.value+'T00:00').toLocaleDateString('ar-SA',{weekday:'long',day:'numeric',month:'long'}):'—';
  $('#sum').innerHTML=`<p>📅 ${ds}</p><p>🕐 ${sel===null?'اختر الوقت':lab(times[sel])}</p><p>👥 ${$('#rg').value>12?'أكثر من 12':$('#rg').value} أشخاص</p><p>🪑 ${$('#rz').value}</p>`}
 $('#slots').onclick=e=>{const b=e.target.closest('.slot');if(!b||b.disabled)return;sel=+b.dataset.i;slots()};
 rd.onchange=()=>{sel=null;slots()};['rg','rz','ro'].forEach(i=>$('#'+i).onchange=summary);slots();
 $('#rf').onsubmit=e=>{e.preventDefault();const m=$('#rm');
  if(!$('#rn').value.trim()||!/^05\d{8}$/.test($('#rp').value.trim())){m.textContent='أدخل الاسم ورقم جوال صحيحًا (05xxxxxxxx).';return}
  if(sel===null){m.textContent='اختر وقت الحجز.';return}
  const ref='MZ-'+Math.random().toString(36).slice(2,7).toUpperCase();
  m.innerHTML=`✅ تم تأكيد حجزك يا ${$('#rn').value.trim().replace(/</g,'')}!<br>الرقم المرجعي: <b>${ref}</b>`;
  try{localStorage.setItem('mz_last',ref)}catch{}}}
