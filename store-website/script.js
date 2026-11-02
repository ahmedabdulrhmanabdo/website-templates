
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
 if(m)m.textContent=f.dataset.ok||'تم الإرسال (نموذج تجريبي، لا تُرسل بيانات لأي خادم).';f.reset()}));
$$('[data-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast('تم نسخ الكود: '+b.dataset.copy)}catch{toast('الكود: '+b.dataset.copy)}});
const qs=new URLSearchParams(location.search);

const P=[
{id:1,n:'سماعات لاسلكية Pro',cat:'إلكترونيات',b:'Sonic',p:199,old:279,r:4.8,rc:312,e:'🎧',c:'#dbeafe',st:25,d:'سماعات بلوتوث 5.3 مع عزل ضوضاء نشط وبطارية تصل إلى 30 ساعة وميكروفون واضح للمكالمات.',sp:[['الاتصال','Bluetooth 5.3'],['البطارية','30 ساعة'],['الوزن','250 غرام'],['الضمان','سنة']],col:[['أسود','#111827'],['أبيض','#f3f4f6'],['أزرق','#2563eb']]},
{id:2,n:'ساعة ذكية Fit',cat:'إلكترونيات',b:'Zenith',p:349,r:4.5,rc:208,e:'⌚',c:'#e0e7ff',st:12,d:'ساعة ذكية بشاشة AMOLED، تتبّع النوم والنبض والأكسجين، مقاومة للماء حتى 50 متر.',sp:[['الشاشة','1.4 إنش AMOLED'],['البطارية','7 أيام'],['مقاومة الماء','5ATM'],['الضمان','سنة']],col:[['أسود','#111827'],['فضي','#9ca3af']]},
{id:3,n:'مكبّر صوت محمول',cat:'إلكترونيات',b:'Sonic',p:149,old:199,r:4.3,rc:96,e:'🔊',c:'#cffafe',st:30,d:'مكبّر صوت مقاوم للماء بصوت محيطي 360 درجة وإضاءة RGB.',sp:[['القدرة','20 واط'],['البطارية','12 ساعة'],['مقاوم للماء','IPX7']],col:[['أسود','#111827'],['أحمر','#dc2626']]},
{id:4,n:'كاميرا مراقبة منزلية',cat:'إلكترونيات',b:'Aero',p:229,r:4.4,rc:77,e:'📷',c:'#e5e7eb',st:0,d:'كاميرا 2K ورؤية ليلية وكشف حركة مع إشعارات فورية على الجوال.',sp:[['الدقة','2K'],['الرؤية الليلية','10 أمتار'],['التخزين','سحابي / بطاقة']],col:[['أبيض','#f3f4f6']]},
{id:5,n:'حقيبة ظهر عملية',cat:'أزياء',b:'Urban',p:129,old:159,r:4.6,rc:184,e:'🎒',c:'#fef3c7',st:40,d:'حقيبة بمساحة 25 لترًا مع جيب للابتوب 15.6 إنش ومنفذ USB خارجي.',sp:[['السعة','25 لتر'],['المادة','قماش مقاوم للماء'],['الوزن','700 غرام']],col:[['رمادي','#6b7280'],['كحلي','#1e3a8a'],['أسود','#111827']]},
{id:6,n:'حذاء رياضي خفيف',cat:'أزياء',b:'Aero',p:259,r:4.7,rc:402,e:'👟',c:'#fee2e2',st:18,d:'حذاء جري خفيف بنعل ماص للصدمات وقماش يسمح بتهوية القدم.',sp:[['الوزن','240 غرام'],['النعل','EVA'],['الاستخدام','جري ومشي']],col:[['أبيض','#f3f4f6'],['أسود','#111827']],sz:['40','41','42','43','44']},
{id:7,n:'نظارة شمسية',cat:'أزياء',b:'Urban',p:89,r:4.2,rc:64,e:'🕶️',c:'#fce7f3',st:50,d:'نظارة بعدسات مستقطبة وحماية UV400 وإطار خفيف.',sp:[['الحماية','UV400'],['العدسات','مستقطبة']],col:[['أسود','#111827'],['بني','#78350f']]},
{id:8,n:'قميص قطني كاجوال',cat:'أزياء',b:'Urban',p:79,old:99,r:4.1,rc:120,e:'👕',c:'#ede9fe',st:60,d:'قميص من القطن 100% بقصّة مريحة، يناسب الاستخدام اليومي.',sp:[['المادة','قطن 100%'],['الغسيل','حتى 40°']],col:[['أبيض','#f3f4f6'],['أزرق','#2563eb'],['أخضر','#16a34a']],sz:['S','M','L','XL']},
{id:9,n:'مصباح مكتب LED',cat:'المنزل',b:'Casa',p:75,old:99,r:4.4,rc:150,e:'💡',c:'#fef9c3',st:35,d:'مصباح بثلاث درجات إضاءة وتحكم باللمس وشحن لاسلكي في القاعدة.',sp:[['الإضاءة','3 درجات'],['الشحن','لاسلكي 10 واط'],['الطاقة','LED']],col:[['أبيض','#f3f4f6'],['أسود','#111827']]},
{id:10,n:'كوب حراري 500 مل',cat:'المنزل',b:'Casa',p:49,r:4.8,rc:540,e:'☕',c:'#dcfce7',st:80,d:'كوب ستانلس ستيل يحفظ الحرارة 12 ساعة والبرودة 24 ساعة، غطاء محكم.',sp:[['السعة','500 مل'],['المادة','ستانلس 304'],['العزل','مزدوج']],col:[['أخضر','#16a34a'],['أسود','#111827'],['وردي','#ec4899']]},
{id:11,n:'نبتة زينة داخلية',cat:'المنزل',b:'Casa',p:35,r:4.0,rc:48,e:'🪴',c:'#d1fae5',st:22,d:'نبتة تحتاج عناية قليلة وتناسب المكاتب والصالات مع إصيص أنيق.',sp:[['الارتفاع','40 سم'],['الإضاءة','متوسطة']],col:[['أخضر','#16a34a']]},
{id:12,n:'طقم أواني طبخ 8 قطع',cat:'المنزل',b:'Casa',p:329,old:429,r:4.6,rc:233,e:'🍳',c:'#ffedd5',st:9,d:'طقم أواني غير لاصقة مناسبة لكل أنواع المواقد بما فيها الحث.',sp:[['القطع','8'],['الطلاء','غير لاصق'],['المواقد','كل الأنواع']],col:[['رمادي','#6b7280'],['أسود','#111827']]},
{id:13,n:'شاحن سريع 65 واط',cat:'إلكترونيات',b:'Nova',p:99,r:4.5,rc:310,e:'🔌',c:'#e0f2fe',st:70,d:'شاحن GaN صغير الحجم بثلاثة منافذ يشحن الجوال واللابتوب معًا.',sp:[['القدرة','65 واط'],['المنافذ','2 USB-C + USB-A'],['التقنية','GaN']],col:[['أبيض','#f3f4f6'],['أسود','#111827']]},
{id:14,n:'ماوس لاسلكي مريح',cat:'إلكترونيات',b:'Nova',p:69,old:89,r:4.3,rc:175,e:'🖱️',c:'#f1f5f9',st:45,d:'ماوس صامت بدقة قابلة للتعديل وبطارية تدوم 6 أشهر.',sp:[['الدقة','حتى 3200 DPI'],['البطارية','6 أشهر'],['الاتصال','2.4G + بلوتوث']],col:[['رمادي','#6b7280'],['أسود','#111827']]},
{id:15,n:'ساعة يد كلاسيك',cat:'أزياء',b:'Zenith',p:299,r:4.7,rc:90,e:'⌚',c:'#fef3c7',st:6,d:'ساعة أنيقة بحزام جلد طبيعي وزجاج سافير مقاوم للخدوش.',sp:[['الحركة','كوارتز'],['الحزام','جلد طبيعي'],['مقاومة الماء','3ATM']],col:[['بني','#78350f'],['أسود','#111827']]},
{id:16,n:'وسادة طبية للنوم',cat:'المنزل',b:'Casa',p:119,r:4.5,rc:260,e:'🛏️',c:'#e0e7ff',st:28,d:'وسادة ميموري فوم تدعم الرقبة وتقلل الشخير، غطاء قابل للغسل.',sp:[['الحشوة','ميموري فوم'],['الغطاء','قابل للغسل']],col:[['أبيض','#f3f4f6']]}];
const CATS=[['إلكترونيات','🔌','#2563eb,#1d4ed8'],['أزياء','👗','#db2777,#9d174d'],['المنزل','🏠','#059669,#065f46'],['الكل','🛒','#7c3aed,#5b21b6']];
const money=n=>n.toLocaleString('ar-SA')+' ر.س';
const ld=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch{return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
let cart=ld('st_cart',[]),wish=ld('st_wish',[]);
const byId=id=>P.find(p=>p.id==id);
const stars=r=>'★'.repeat(Math.round(r))+'☆'.repeat(5-Math.round(r));
const disc=p=>p.old?Math.round((1-p.p/p.old)*100):0;
function badges(){const c=cart.reduce((s,l)=>s+l.q,0);if($('#cc'))$('#cc').textContent=c;if($('#wc'))$('#wc').textContent=wish.length}
function addCart(id,col,q=1){const p=byId(id);if(p.st<=0){toast('المنتج غير متوفر حاليًا');return false}col=col||p.col[0][0];
 const l=cart.find(x=>x.id==id&&x.c===col);if(l)l.q+=q;else cart.push({id:+id,c:col,q});sv('st_cart',cart);badges();toast('✔ أُضيف إلى السلة: '+p.n);return true}
function toggleWish(id){id=+id;wish=wish.includes(id)?wish.filter(x=>x!==id):[...wish,id];sv('st_wish',wish);badges()}
const card=p=>`<article class="pc"><a href="product.html?id=${p.id}"><div class="im" style="background:${p.c}">${p.old?`<span class="sale">-${disc(p)}%</span>`:''}${p.e}</div></a>
<button class="hrt${wish.includes(p.id)?' on':''}" data-w="${p.id}" aria-label="المفضلة">${wish.includes(p.id)?'♥':'♡'}</button>
<div class="in"><span class="br">${p.b} · ${p.cat}</span><a href="product.html?id=${p.id}"><h3>${p.n}</h3></a><div class="rt"><span class="stars">${stars(p.r)}</span> (${p.rc})</div>
<div class="pr"><b>${money(p.p)}</b>${p.old?`<s>${money(p.old)}</s>`:''}</div>${p.st>0?`<button class="btn" data-add="${p.id}">أضف للسلة</button>`:'<div class="oos">غير متوفر</div>'}</div></article>`;
document.addEventListener('click',e=>{const a=e.target.closest('[data-add]');if(a){addCart(a.dataset.add)}
 const w=e.target.closest('[data-w]');if(w){toggleWish(w.dataset.w);w.classList.toggle('on');w.textContent=w.classList.contains('on')?'♥':'♡';if($('#wgrid'))drawWish()}});
function totals(express,cod){const sub=cart.reduce((s,l)=>s+byId(l.id).p*l.q,0),cp=ld('st_coupon',''),dp=cp==='SAVE10'?Math.round(sub*.1):0;
 let sh=sub===0?0:(sub>=300||cp==='FREESHIP')?0:25;if(express&&sub>0)sh+=20;if(cod&&sub>0)sh+=10;const tot=sub-dp+sh;return{sub,dp,sh,tot,vat:tot*15/115,cp}}
badges();

// ---------- home ----------
if($('#slides')){const S=[['🎧','عروض الإلكترونيات','خصم يصل إلى 30% على السماعات والساعات','shop.html?cat=إلكترونيات','#1e3a8a,#2563eb'],['👟','موسم الأزياء','تشكيلة جديدة بأسعار مناسبة','shop.html?cat=أزياء','#9d174d,#db2777'],['🏠','لمسات للمنزل','كل ما تحتاجه لبيت مرتب وأنيق','shop.html?cat=المنزل','#065f46,#059669']];let i=0;
 $('#slides').innerHTML=S.map(s=>`<div class="slide" style="background:linear-gradient(135deg,${s[4]})"><div><div class="big">${s[0]}</div><h2>${s[1]}</h2><p>${s[2]}</p><a href="${s[3]}" class="btn btn-w">تسوّق الآن</a></div></div>`).join('');
 $('#dots').innerHTML=S.map((_,k)=>`<i data-i="${k}"></i>`).join('');
 const go=n=>{i=(n+S.length)%S.length;$('#slides').style.transform=`translateX(-${i*100}%)`;$$('#dots i').forEach((d,k)=>d.classList.toggle('on',k===i))};go(0);
 let tm=setInterval(()=>go(i+1),5000);$('#dots').onclick=e=>{if(e.target.dataset.i){go(+e.target.dataset.i);clearInterval(tm)}};$('#slp').onclick=()=>go(i-1);$('#sln').onclick=()=>go(i+1);
 $('#cats').innerHTML=CATS.map(c=>`<a class="cat" href="shop.html${c[0]==='الكل'?'':'?cat='+encodeURIComponent(c[0])}" style="background:linear-gradient(135deg,${c[2]})"><span>${c[1]}</span>${c[0]==='الكل'?'كل المنتجات':c[0]}</a>`).join('');
 $('#sale').innerHTML=P.filter(p=>p.old).slice(0,4).map(card).join('');$('#top').innerHTML=[...P].sort((a,b)=>b.r-a.r||b.rc-a.rc).slice(0,4).map(card).join('');
 const tick=()=>{const n=new Date(),end=new Date(n);end.setHours(23,59,59,999);const s=Math.floor((end-n)/1000),f=x=>String(x).padStart(2,'0');$('#ch').textContent=f(Math.floor(s/3600));$('#cm').textContent=f(Math.floor(s%3600/60));$('#cs').textContent=f(s%60)};tick();setInterval(tick,1000)}

// ---------- shop ----------
if($('#grid')){const PER=9;let page=1;const F={cat:qs.get('cat')||'الكل',q:qs.get('q')||'',min:'',max:'',rate:0,sale:qs.get('sale')==='1',stock:false,sort:''};
 const cats=['الكل',...new Set(P.map(p=>p.cat))];
 const drawCats=()=>$('#fcat').innerHTML=cats.map(c=>`<label class="chk"><input type="radio" name="fc" value="${c}" ${F.cat===c?'checked':''}> ${c} <small class="mut">(${c==='الكل'?P.length:P.filter(p=>p.cat===c).length})</small></label>`).join('');
 const list=()=>{let L=P.filter(p=>(F.cat==='الكل'||p.cat===F.cat)&&(p.n+p.b+p.cat).includes(F.q)&&(!F.min||p.p>=+F.min)&&(!F.max||p.p<=+F.max)&&p.r>=F.rate&&(!F.sale||p.old)&&(!F.stock||p.st>0));
  if(F.sort==='asc')L.sort((a,b)=>a.p-b.p);if(F.sort==='desc')L.sort((a,b)=>b.p-a.p);if(F.sort==='rate')L.sort((a,b)=>b.r-a.r);if(F.sort==='disc')L.sort((a,b)=>disc(b)-disc(a));return L};
 const draw=()=>{const L=list(),pages=Math.max(1,Math.ceil(L.length/PER));if(page>pages)page=1;
  $('#count').textContent=`${L.length} منتج${F.q?` لـ "${F.q}"`:''}`;$('#grid').innerHTML=L.slice((page-1)*PER,page*PER).map(card).join('');$('#empty').hidden=L.length>0;
  $('#pager').innerHTML=pages>1?Array.from({length:pages},(_,k)=>`<button class="${k+1===page?'on':''}" data-p="${k+1}">${k+1}</button>`).join(''):''};
 drawCats();$('#fsale').checked=F.sale;draw();
 $('#fcat').onchange=e=>{F.cat=e.target.value;page=1;draw()};$('#pmin').oninput=e=>{F.min=e.target.value;page=1;draw()};$('#pmax').oninput=e=>{F.max=e.target.value;page=1;draw()};
 $('#frate').onchange=e=>{F.rate=+e.target.value;page=1;draw()};$('#fsale').onchange=e=>{F.sale=e.target.checked;page=1;draw()};$('#fstock').onchange=e=>{F.stock=e.target.checked;page=1;draw()};
 $('#sort').onchange=e=>{F.sort=e.target.value;draw()};$('#pager').onclick=e=>{if(e.target.dataset.p){page=+e.target.dataset.p;draw();scrollTo({top:0,behavior:'smooth'})}};
 $('#freset').onclick=()=>{Object.assign(F,{cat:'الكل',q:'',min:'',max:'',rate:0,sale:false,stock:false,sort:''});['pmin','pmax'].forEach(i=>$('#'+i).value='');$('#frate').value=0;$('#fsale').checked=$('#fstock').checked=false;$('#sort').value='';page=1;drawCats();draw()}}

// ---------- product ----------
if($('#pd')){const p=byId(qs.get('id'))||P[0];let col=p.col[0][0],sz=(p.sz||[])[0],q=1,tab='d';document.title=p.n+' | متجري';$('#ptitle').textContent=p.n;$('#pcrumb').textContent=p.n;
 const render=()=>{const cc=p.col.find(c=>c[0]===col);$('#pd').innerHTML=`<div class="gal"><div class="main" style="background:${p.c}">${p.e}</div><div class="th">${p.col.map(c=>`<button data-c="${c[0]}" class="${c[0]===col?'on':''}" style="background:${p.c}">${p.e}</button>`).join('')}</div></div>
 <div><span class="chip">${p.cat}</span><span class="chip">${p.b}</span><h2>${p.n}</h2><div class="rt"><span class="stars">${stars(p.r)}</span> ${p.r} (${p.rc} تقييم)</div>
 <div class="price">${money(p.p)} ${p.old?`<s>${money(p.old)}</s> <span class="badge" style="background:#ef4444">-${disc(p)}%</span>`:''}</div>
 <p class="${p.st>0?'sv':'oos'}">${p.st>0?(p.st<=10?`⚠ متبقي ${p.st} فقط`:'✔ متوفر في المخزون'):'✖ غير متوفر'}</p><p class="mut" style="margin:8px 0">${p.d}</p>
 <div class="opts"><b>اللون: ${col}</b>${p.col.map(c=>`<span class="sw${c[0]===col?' on':''}" data-c="${c[0]}" style="background:${c[1]}" title="${c[0]}"></span>`).join('')}</div>
 ${p.sz?`<div class="opts"><b>المقاس</b>${p.sz.map(s=>`<span class="sz${s===sz?' on':''}" data-s="${s}">${s}</span>`).join('')}</div>`:''}
 <div class="buy"><div class="qty"><button data-q="-1" aria-label="إنقاص">−</button><span>${q}</span><button data-q="1" aria-label="زيادة">+</button></div>
 <button class="btn" id="padd" ${p.st<=0?'disabled style="opacity:.5"':''}>🛒 أضف للسلة</button><button class="btn btn-o" id="pbuy" ${p.st<=0?'disabled style="opacity:.5"':''}>اشترِ الآن</button>
 <button class="btn btn-o" id="pw" aria-label="المفضلة">${wish.includes(p.id)?'♥ في المفضلة':'♡ للمفضلة'}</button></div>
 <div class="trustl"><span>🚚 شحن مجاني فوق 300 ر.س</span><span>↩ إرجاع مجاني خلال 14 يومًا</span><span>🛡️ ضمان رسمي</span></div></div>`;};
 const tabs=()=>{const bar=[5,4,3,2,1].map((s,k)=>[s,[62,24,9,3,2][k]]);
  $('#tabc').innerHTML=`<div class="pane">${tab==='d'?`<p>${p.d}</p><ul class="checks" style="margin-top:10px"><li>جودة تصنيع عالية</li><li>مناسب للاستخدام اليومي</li><li>ضمان ومرتجعات مرنة</li></ul>`:
  tab==='s'?`<table class="t"><tbody>${p.sp.map(s=>`<tr><th style="width:35%">${s[0]}</th><td>${s[1]}</td></tr>`).join('')}<tr><th>العلامة</th><td>${p.b}</td></tr></tbody></table>`:
  `<div class="grid2"><div><div style="font-size:2.6rem;font-weight:800">${p.r}</div><div class="stars">${stars(p.r)}</div><small class="mut">${p.rc} تقييم</small></div><div>${bar.map(([s,w])=>`<div class="rbar"><span>${s}★</span><i style="--w:${w}%"></i><span>${w}%</span></div>`).join('')}</div></div>
  <div style="margin-top:16px"><div class="rev"><b>فهد</b> <span class="stars">★★★★★</span><p>منتج ممتاز وسعره مناسب جدًا، وصل بسرعة.</p></div><div class="rev"><b>ريم</b> <span class="stars">★★★★☆</span><p>جودة جيدة، والتغليف محترم. أنصح به.</p></div><div class="rev"><b>ماجد</b> <span class="stars">★★★★★</span><p>أفضل من توقعاتي، تجربة شراء سلسة.</p></div></div>`}</div>`};
 render();tabs();$('#rel').innerHTML=P.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,4).map(card).join('');
 $('#pd').onclick=e=>{const t=e.target;if(t.dataset.c){col=t.dataset.c;render()}else if(t.dataset.s){sz=t.dataset.s;render()}else if(t.dataset.q){q=Math.max(1,Math.min(10,q+ +t.dataset.q));render()}
  else if(t.id==='padd')addCart(p.id,col,q);else if(t.id==='pbuy'){if(addCart(p.id,col,q))location.href='checkout.html'}else if(t.id==='pw'){toggleWish(p.id);render()}};
 document.querySelector('.ptabs .tabs').onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.ptabs .tab').forEach(x=>x.classList.remove('on'));b.classList.add('on');tab=b.dataset.t;tabs()}}

// ---------- cart ----------
function drawCart(){const T=totals();if(!cart.length){$('#cartbox').innerHTML='<div class="ok"><div class="big">🛒</div><h2>سلتك فارغة</h2><p class="mut">أضف بعض المنتجات لتبدأ التسوق.</p><p style="margin-top:14px"><a href="shop.html" class="btn">تصفّح المتجر</a></p></div>';return}
 const left=Math.max(0,300-T.sub);
 $('#cartbox').innerHTML=`<div class="cart"><div class="card">${cart.map((l,i)=>{const p=byId(l.id);return `<div class="cl"><div class="th" style="background:${p.c}">${p.e}</div><div><h4><a href="product.html?id=${p.id}">${p.n}</a></h4><small>${l.c} · ${money(p.p)}</small><br><button class="rm" data-rm="${i}">حذف</button></div>
 <div style="text-align:center"><div class="qty"><button data-d="${i}:-1">−</button><span>${l.q}</span><button data-d="${i}:1">+</button></div><div style="margin-top:4px;font-weight:800">${money(p.p*l.q)}</div></div></div>`}).join('')}
 <p style="margin-top:14px"><a href="shop.html" style="color:var(--a);font-weight:700">← متابعة التسوق</a> · <button class="rm" id="clr">تفريغ السلة</button></p></div>
 <aside class="card sumbox"><h3>ملخص الطلب</h3><div class="ship"><i style="width:${Math.min(100,T.sub/3)}%"></i></div><small class="mut">${left>0?`أضف ${money(left)} للحصول على شحن مجاني`:'🎉 حصلت على شحن مجاني'}</small>
 <div class="cp"><input id="cpi" placeholder="كود الخصم (SAVE10)" value="${T.cp}"><button class="btn btn-sm" id="cpb">تطبيق</button></div><p class="form-msg" id="cpm"></p>
 <div class="sline"><span>المجموع</span><span>${money(T.sub)}</span></div>${T.dp?`<div class="sline" style="color:#16a34a"><span>الخصم (10%)</span><span>-${money(T.dp)}</span></div>`:''}
 <div class="sline"><span>الشحن</span><span>${T.sh?money(T.sh):'مجاني'}</span></div><div class="sline tot"><span>الإجمالي</span><span>${money(T.tot)}</span></div><small class="mut">شامل ضريبة القيمة المضافة 15% (${money(Math.round(T.vat*100)/100)})</small>
 <a href="checkout.html" class="btn btn-block" style="margin-top:14px">إتمام الشراء</a></aside></div>`}
if($('#cartbox')){drawCart();$('#cartbox').onclick=e=>{const t=e.target;
 if(t.dataset.rm!==undefined){cart.splice(+t.dataset.rm,1)}else if(t.dataset.d){const[i,d]=t.dataset.d.split(':');cart[i].q=Math.max(1,Math.min(10,cart[i].q+ +d))}
 else if(t.id==='clr'){cart=[]}else if(t.id==='cpb'){const v=$('#cpi').value.trim().toUpperCase();if(v===''||v==='SAVE10'||v==='FREESHIP'){sv('st_coupon',v);drawCart();$('#cpm').textContent=v?'✔ تم تطبيق الكود':'';badges();return}else{$('#cpm').textContent='كود غير صالح';return}}else return;
 sv('st_cart',cart);badges();drawCart()}}

// ---------- wishlist ----------
function drawWish(){const L=P.filter(p=>wish.includes(p.id));$('#wgrid').innerHTML=L.map(card).join('');$('#wempty').hidden=L.length>0}
if($('#wgrid'))drawWish();

// ---------- checkout ----------
if($('#cobox')){const sum=()=>{const ex=document.querySelector('[name=ship]:checked').value==='exp',cod=document.querySelector('[name=pay]:checked').value==='cod',T=totals(ex,cod);
  $('#cosum').innerHTML=`<h3>طلبك (${cart.reduce((s,l)=>s+l.q,0)} منتجات)</h3>${cart.map(l=>{const p=byId(l.id);return `<div class="sline"><span>${p.e} ${p.n} × ${l.q}</span><span>${money(p.p*l.q)}</span></div>`}).join('')||'<p class="mut">السلة فارغة</p>'}
  <hr style="border:0;border-top:1px solid var(--line);margin:8px 0"><div class="sline"><span>المجموع</span><span>${money(T.sub)}</span></div>${T.dp?`<div class="sline" style="color:#16a34a"><span>الخصم</span><span>-${money(T.dp)}</span></div>`:''}
  <div class="sline"><span>الشحن</span><span>${T.sh?money(T.sh):'مجاني'}</span></div><div class="sline tot"><span>الإجمالي</span><span>${money(T.tot)}</span></div><small class="mut">شامل ضريبة 15%</small>`};
 sum();$('#cof').onchange=sum;
 $('#cof').onsubmit=e=>{e.preventDefault();const m=$('#com');
  if(!cart.length){m.textContent='السلة فارغة.';return}
  if(!$('#cn').value.trim()||!/^05\d{8}$/.test($('#cp').value.trim())||!$('#cd2').value.trim()||!$('#ca').value.trim()){m.textContent='أكمل بيانات الشحن ورقم جوال صحيح (05xxxxxxxx).';return}
  const T=totals(document.querySelector('[name=ship]:checked').value==='exp',document.querySelector('[name=pay]:checked').value==='cod'),no='ST-'+Math.random().toString(36).slice(2,8).toUpperCase();
  cart=[];sv('st_cart',cart);sv('st_coupon','');badges();
  $('#cobox').innerHTML=`<div class="ok card" style="grid-column:1/-1"><div class="big">✅</div><h2>شكرًا لطلبك يا ${$('#cn').value.trim().replace(/</g,'')}!</h2><p>رقم طلبك: <code>${no}</code></p><p class="mut" style="margin-top:6px">الإجمالي ${money(T.tot)} · التوصيل المتوقع خلال 2–4 أيام (طلب تجريبي)</p><p style="margin-top:16px"><a class="btn" href="support.html">تتبّع الطلب</a> <a class="btn btn-o" href="shop.html">متابعة التسوق</a></p></div>`}}

// ---------- support ----------
const FAQ={ship:[['كم تستغرق مدة التوصيل؟','من 2 إلى 4 أيام عمل داخل المدن الرئيسية، وحتى 7 أيام للمناطق الأخرى.'],['كم تكلفة الشحن؟','25 ر.س، ومجاني للطلبات فوق 300 ر.س أو بكود FREESHIP.'],['هل يوجد شحن سريع؟','نعم، شحن خلال 24 ساعة بإضافة 20 ر.س في المدن الكبرى.']],
 ret:[['كيف أرجع منتجًا؟','من صفحة الدعم أرسل رقم الطلب وسنرتب استلامه مجانًا خلال 14 يومًا.'],['متى أسترد المبلغ؟','خلال 3–5 أيام عمل من استلام المنتج وفحصه.'],['هل يمكن الاستبدال؟','نعم، الاستبدال بمقاس أو لون آخر مجاني حسب التوفر.']],
 pay:[['ما طرق الدفع المتاحة؟','مدى، فيزا، ماستركارد، Apple Pay، والدفع عند الاستلام برسوم 10 ر.س.'],['هل الدفع آمن؟','نعم، يتم عبر بوابات مشفّرة ولا نحفظ بيانات بطاقتك.'],['هل الأسعار شاملة الضريبة؟','نعم، شاملة ضريبة القيمة المضافة 15%.']]};
if($('#fq')){const d=g=>$('#fq').innerHTML=FAQ[g].map(([q,a])=>`<details class="faq"><summary>${q}</summary><p>${a}</p></details>`).join('');d('ship');
 $('#ft').onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.tab',$('#ft')).forEach(x=>x.classList.remove('on'));b.classList.add('on');d(b.dataset.g)}}
if($('#trf')){$('#trf').onsubmit=e=>{e.preventDefault();const v=$('#trn').value.trim().toUpperCase();
  if(!/^ST-[A-Z0-9]{4,8}$/.test(v)){$('#trres').innerHTML='<p class="form-msg" style="color:#ef4444">رقم الطلب غير صحيح. الصيغة: ST-XXXXXX</p>';return}
  const n=[...v].reduce((a,c)=>a+c.charCodeAt(0),0)%4,steps=['تم استلام الطلب','جاري التجهيز','تم الشحن','تم التسليم'];
  $('#trres').innerHTML=`<p style="margin-top:12px"><b>الطلب ${v}</b> — الحالة: <span class="badge">${steps[n]}</span></p><div class="tl2">${steps.map((s,i)=>`<div class="${i<=n?'d':''}">${s}</div>`).join('')}</div><small class="mut">حالة تجريبية للتوضيح فقط.</small>`}}
