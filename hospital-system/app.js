
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const IC=(n,c='')=>`<svg class="i ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const ld=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch{return d}};
const sv=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch{}};
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const iso=d=>new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10);
const today=()=>iso(new Date());const addDays=n=>{const d=new Date();d.setDate(d.getDate()+n);return iso(d)};
const num=n=>(+n).toLocaleString('ar-SA');const money=n=>(+n).toLocaleString('ar-SA',{maximumFractionDigits:2})+' ر.س';
const qs=new URLSearchParams(location.search);
function toast(m){const t=$('#toast');t.textContent=m;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),2200)}
// ---------- data ----------
const WARDS=[['er','الطوارئ',8],['int','الباطنة',10],['sur','الجراحة',8],['ped','الأطفال',8],['icu','العناية المركزة',6]];
function seed(){if(ld('hms_v',0)===2)return;
 const P=[['أحمد السالم',45,'ذكر','O+','in','ضغط مرتفع'],['منى العتيبي',32,'أنثى','A+','out','متابعة حمل'],['خالد الحربي',58,'ذكر','B+','in','سكري'],['سارة القحطاني',27,'أنثى','O-','out','فحص دوري'],['فهد الدوسري',63,'ذكر','AB+','in','عملية قلب مفتوح'],['نورة الشمري',8,'أنثى','A+','in','التهاب رئوي'],['عبدالله المطيري',39,'ذكر','O+','out','آلام ظهر'],['ريم الغامدي',51,'أنثى','B-','dis','عملية مرارة'],['يوسف الزهراني',12,'ذكر','A-','out','حساسية'],['هند البقمي',44,'أنثى','O+','in','كسر في الساق'],['ماجد العنزي',70,'ذكر','AB-','in','فشل كلوي'],['لمى السبيعي',3,'أنثى','B+','out','تطعيمات'],['سلطان القرني',36,'ذكر','A+','dis','التهاب الزائدة'],['جود الحمدان',29,'أنثى','O+','out','صداع نصفي']]
 .map((p,i)=>({id:'P-'+(1001+i),n:p[0],age:p[1],g:p[2],ph:'05'+String(50000000+i*1234567).slice(0,8),bl:p[3],st:p[4],dx:p[5],last:addDays(-(i%9))}));
 const DR=[['د. سلمان الخالدي','الباطنة','عيادة 101'],['د. هدى الشمري','الجلدية','عيادة 102'],['د. طارق المنصور','العيون','عيادة 103'],['د. نوف الدوسري','الأطفال','عيادة 104'],['د. ماجد الحربي','القلب','عيادة 105'],['د. لمى القحطاني','النساء والولادة','عيادة 106'],['د. فيصل الزهراني','الجراحة','عيادة 107'],['د. ريم العتيبي','العظام','عيادة 108']]
 .map((d,i)=>({id:'D-'+(201+i),n:d[0],sp:d[1],room:d[2],av:i!==6,ph:'0112'+(300000+i*1111)}));
 const times=['08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00'],sts=['conf','new','done','conf','new','cancel','conf'];
 const A=[];for(let i=0;i<16;i++)A.push({id:'A-'+(3001+i),pid:P[i%P.length].id,did:DR[(i*3)%DR.length].id,d:addDays((i%7)-3),t:times[i%times.length],st:sts[i%sts.length],note:''});
 // today appointments guaranteed
 A.slice(0,5).forEach((a,i)=>{a.d=today();a.st=['conf','new','conf','done','new'][i]});
 const B=[];WARDS.forEach(([k,n,c])=>{for(let i=1;i<=c;i++)B.push({id:k.toUpperCase()+'-'+i,w:k,st:'free',pid:null})});
 const inP=P.filter(p=>p.st==='in'),slots=['INT-1','ER-2','SUR-1','PED-1','INT-3','SUR-4','ICU-2'];
 inP.forEach((p,i)=>{const b=B.find(x=>x.id===slots[i]);if(b){b.st='occ';b.pid=p.id}});
 B.find(x=>x.id==='ER-5').st='clean';B.find(x=>x.id==='ICU-5').st='clean';
 const PH=[['باراسيتامول 500 مجم','مسكنات',240,60,6],['أموكسيسيلين 500 مجم','مضادات حيوية',45,50,18],['إنسولين سريع المفعول','سكري',28,30,62],['أوميبرازول 20 مجم','معدة',180,40,12],['ميتفورمين 850 مجم','سكري',120,50,15],['أملوديبين 5 مجم','ضغط',90,40,14],['سيتريزين 10 مجم','حساسية',20,30,9],['محلول ملحي 0.9%','محاليل',300,100,5],['كمامات جراحية (علبة)','مستلزمات',60,30,25],['قفازات طبية (علبة)','مستلزمات',15,40,30],['أتورفاستاتين 20 مجم','كوليسترول',75,30,22],['فيتامين د 50000','فيتامينات',110,30,20]]
 .map((r,i)=>({id:'M-'+(401+i),n:r[0],cat:r[1],qty:r[2],min:r[3],price:r[4],exp:addDays(i===1?60:200+i*20)}));
 const mk=(id,pid,d,items,st)=>({id:'INV-'+id,pid,d:addDays(d),items,st});
 const INV=[mk(2001,P[0].id,-6,[{n:'إقامة (3 أيام)',q:3,p:650},{n:'فحوصات مخبرية',q:1,p:420}],'paid'),mk(2002,P[1].id,-5,[{n:'كشف عيادة',q:1,p:200},{n:'تصوير بالموجات',q:1,p:300}],'paid'),
  mk(2003,P[2].id,-4,[{n:'إقامة (5 أيام)',q:5,p:650},{n:'أدوية',q:1,p:380}],'due'),mk(2004,P[4].id,-3,[{n:'عملية جراحية',q:1,p:14500},{n:'عناية مركزة (2 يوم)',q:2,p:1800}],'due'),
  mk(2005,P[6].id,-2,[{n:'كشف عيادة',q:1,p:200},{n:'أشعة',q:1,p:350}],'paid'),mk(2006,P[8].id,-1,[{n:'كشف عيادة',q:1,p:200}],'paid'),mk(2007,P[5].id,0,[{n:'إقامة أطفال (2 يوم)',q:2,p:520},{n:'علاج تنفسي',q:3,p:150}],'due')];
 sv('hms_p',P);sv('hms_d',DR);sv('hms_a',A);sv('hms_b',B);sv('hms_m',PH);sv('hms_i',INV);sv('hms_v',2)}
seed();
const get=k=>ld('hms_'+k,[]);const put=(k,v)=>sv('hms_'+k,v);
const nm=(arr,id)=>(arr.find(x=>x.id===id)||{}).n||'—';
const ST={out:['عيادة خارجية','mu'],in:['مُنوَّم','in'],dis:['خرج','ok']};const AS={new:['جديد','warn'],conf:['مؤكد','in'],done:['منتهي','ok'],cancel:['ملغي','bad']};
const total=inv=>{const s=inv.items.reduce((t,i)=>t+i.q*i.p,0);return{sub:s,vat:s*.15,tot:s*1.15}};
// ---------- shell ----------
const NAV=[['dashboard','layout','لوحة التحكم'],['patients','users','المرضى'],['appointments','calendar','المواعيد'],['doctors','user','الأطباء'],['beds','bed','الأسرّة والأقسام'],['pharmacy','pill','الصيدلية'],['billing','receipt','الفواتير']];
const page=document.body.dataset.page;
$('#side').innerHTML=`<div class="brand">${IC('plus','lg')}<div>مستشفى الأمل<span>نظام إدارة المستشفى</span></div></div>`+NAV.map(n=>`<a class="nav${n[0]===page?' on':''}" href="${n[0]}.html">${IC(n[1])} ${n[2]}</a>`).join('')+`<div class="sfoot">نسخةة، البيانات تُحفظ في متصفحك.<br><button id="rst">إعادة ضبط البيانات</button><br><br><a href="tel:+966581131827" dir="ltr">0581131827</a></div>`;
const low=()=>get('m').filter(m=>m.qty<=m.min);
$('#top').innerHTML=`<button class="ib menu-btn" id="mb" aria-label="القائمة">${IC('layout')}</button><h2>${NAV.find(n=>n[0]===page)[2]}</h2><span class="sp"></span><span class="date">${new Date().toLocaleDateString('ar-SA',{weekday:'long',day:'numeric',month:'long',year:'numeric'})}</span>
<a class="ib" href="pharmacy.html?low=1" title="تنبيهات المخزون" aria-label="تنبيهات">${IC('bell')}${low().length?`<b>${low().length}</b>`:''}</a><div class="user"><i>م</i><span>مدير النظام</span></div><a class="ib" href="index.html" title="خروج" aria-label="خروج">${IC('logout')}</a>`;
$('#mb').onclick=()=>$('#side').classList.toggle('open');
$('#rst').onclick=()=>{if(confirm('إعادة ضبط كل البيانات إلى الوضع الأصلي؟')){sv('hms_v',0);location.reload()}};
// ---------- modal ----------
function modal(title,body,onSave,opt={}){const m=$('#modal');$('#box').innerHTML=`<div class="mh"><h3>${title}</h3><button id="mx" aria-label="إغلاق">✕</button></div><div class="mb">${body}<div class="err" id="err"></div></div><div class="mf">${onSave?`<button class="btn" id="msv">${opt.save||'حفظ'}</button>`:''}<button class="btn o" id="mcl">${onSave?'إلغاء':'إغلاق'}</button>${opt.extra||''}</div>`;m.hidden=false;
 const close=()=>m.hidden=true;$('#mx').onclick=$('#mcl').onclick=close;m.onclick=e=>{if(e.target===m)close()};
 if(onSave)$('#msv').onclick=()=>{const r=onSave();if(r===false)return;if(typeof r==='string'){$('#err').textContent=r;return}close()};return close}
document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#modal').hidden=true});
const opts=(arr,sel,f=x=>x.n)=>arr.map(x=>`<option value="${x.id}"${x.id===sel?' selected':''}>${esc(f(x))}</option>`).join('');
// ---------- pages ----------
const P={};
P.dashboard=()=>{const p=get('p'),a=get('a'),b=get('b'),inv=get('i'),t=today();
 const occ=b.filter(x=>x.st==='occ').length,rev=inv.filter(i=>i.st==='paid').reduce((s,i)=>s+total(i).tot,0);
 $('#kpis').innerHTML=[['users','#0e7490',num(p.length),'إجمالي المرضى'],['calendar','#7c3aed',num(a.filter(x=>x.d===t).length),'مواعيد اليوم'],['bed','#dc2626',Math.round(occ/b.length*100)+'%','إشغال الأسرّة'],['wallet','#16a34a',money(rev),'الإيرادات المحصّلة']]
  .map(k=>`<div class="kpi"><div class="ic" style="background:${k[1]}">${IC(k[0])}</div><div><b>${k[2]}</b><span>${k[3]}</span></div></div>`).join('');
 const days=Array.from({length:7},(_,i)=>addDays(i-3)),cnt=days.map(d=>a.filter(x=>x.d===d&&x.st!=='cancel').length),mx=Math.max(...cnt,1);
 $('#wk').innerHTML=days.map((d,i)=>`<div class="${d===t?'today':''}"><b>${cnt[i]}</b><i style="height:${cnt[i]/mx*100}%"></i><small>${new Date(d+'T00:00').toLocaleDateString('ar-SA',{weekday:'short'})}</small></div>`).join('');
 $('#occ').innerHTML=WARDS.map(([k,n])=>{const bs=b.filter(x=>x.w===k),o=bs.filter(x=>x.st==='occ').length,pc=Math.round(o/bs.length*100);return `<div class="occ"><div class="l"><span>${n}</span><b>${o}/${bs.length}</b></div><div class="pb"><i style="width:${pc}%;background:${pc>=80?'#dc2626':pc>=50?'#d97706':'#0e7490'}"></i></div></div>`}).join('');
 const dr=get('d'),ta=a.filter(x=>x.d===t).sort((x,y)=>x.t.localeCompare(y.t));
 $('#today').innerHTML=`<thead><tr><th>الوقت</th><th>المريض</th><th>الطبيب</th><th>الحالة</th></tr></thead><tbody>${ta.map(x=>`<tr><td>${x.t}</td><td>${esc(nm(p,x.pid))}</td><td>${esc(nm(dr,x.did))}</td><td><span class="bd ${AS[x.st][1]}">${AS[x.st][0]}</span></td></tr>`).join('')||'<tr><td colspan="4" class="empty">لا مواعيد اليوم</td></tr>'}</tbody>`;
 $('#alerts').innerHTML=low().map(m=>`<div class="al">${IC('pill')}<div><b>${esc(m.n)}</b><small>المتوفر ${num(m.qty)} (الحد الأدنى ${num(m.min)})</small></div><span class="bd bad">منخفض</span></div>`).join('')||'<p class="mut">لا تنبيهات، المخزون كافٍ.</p>'};
P.patients=()=>{const form=(p={})=>`<div class="r2"><label>الاسم الكامل<input id="fn" value="${esc(p.n)}"></label><label>العمر<input id="fa" type="number" min="0" max="120" value="${p.age??''}"></label></div>
 <div class="r2"><label>الجنس<select id="fg"><option${p.g==='ذكر'?' selected':''}>ذكر</option><option${p.g==='أنثى'?' selected':''}>أنثى</option></select></label><label>فصيلة الدم<select id="fb">${['A+','A-','B+','B-','AB+','AB-','O+','O-'].map(x=>`<option${p.bl===x?' selected':''}>${x}</option>`).join('')}</select></label></div>
 <div class="r2"><label>الجوال<input id="fp" placeholder="05xxxxxxxx" value="${esc(p.ph)}"></label><label>الحالة<select id="fs2">${Object.entries(ST).map(([k,v])=>`<option value="${k}"${p.st===k?' selected':''}>${v[0]}</option>`).join('')}</select></label></div><label>التشخيص / الملاحظات<input id="fd" value="${esc(p.dx)}"></label>`;
 const read=()=>{const n=$('#fn').value.trim(),a=+$('#fa').value,ph=$('#fp').value.trim();if(!n)return'أدخل اسم المريض.';if(!(a>=0&&$('#fa').value!==''))return'أدخل عمرًا صحيحًا.';if(ph&&!/^05\d{8}$/.test(ph))return'رقم الجوال يجب أن يكون بصيغة 05xxxxxxxx.';return{n,age:a,g:$('#fg').value,bl:$('#fb').value,ph,st:$('#fs2').value,dx:$('#fd').value.trim()}};
 const draw=()=>{const q=$('#q').value.trim(),s=$('#fs').value,L=get('p').filter(p=>(!s||p.st===s)&&(p.n+p.id+p.ph).includes(q));
  $('#tbl').innerHTML=`<thead><tr><th>الرقم</th><th>الاسم</th><th>العمر</th><th>الجنس</th><th>الجوال</th><th>الدم</th><th>الحالة</th><th>التشخيص</th><th></th></tr></thead><tbody>${L.map(p=>`<tr><td>${p.id}</td><td><b>${esc(p.n)}</b></td><td>${p.age}</td><td>${p.g}</td><td dir="ltr" style="text-align:right">${esc(p.ph)||'—'}</td><td>${p.bl}</td><td><span class="bd ${ST[p.st][1]}">${ST[p.st][0]}</span></td><td>${esc(p.dx)||'—'}</td><td class="act"><button class="btn o s" data-e="${p.id}">تعديل</button><button class="btn d s" data-x="${p.id}" aria-label="حذف">${IC('trash')}</button></td></tr>`).join('')||'<tr><td colspan="9" class="empty">لا توجد نتائج</td></tr>'}</tbody>`};
 const openNew=()=>modal('مريض جديد',form(),()=>{const r=read();if(typeof r==='string')return r;const L=get('p'),id='P-'+(Math.max(1000,...L.map(x=>+x.id.slice(2)))+1);L.unshift({id,...r,last:today()});put('p',L);draw();toast('تمت إضافة المريض '+id)});
 $('#q').oninput=$('#fs').oninput=draw;$('#add').onclick=openNew;
 $('#tbl').onclick=e=>{const ed=e.target.closest('[data-e]'),dx=e.target.closest('[data-x]');
  if(ed){const p=get('p').find(x=>x.id===ed.dataset.e);modal('تعديل '+p.id,form(p),()=>{const r=read();if(typeof r==='string')return r;const L=get('p');Object.assign(L.find(x=>x.id===p.id),r);put('p',L);draw();toast('تم الحفظ')})}
  if(dx&&confirm('حذف هذا المريض؟')){put('p',get('p').filter(x=>x.id!==dx.dataset.x));draw();toast('تم الحذف')}};
 draw();if(qs.get('new'))openNew()};
P.appointments=()=>{const p=get('p'),dr=get('d');
 const draw=()=>{const d=$('#fd').value,s=$('#fs').value,L=get('a').filter(a=>(!d||a.d===d)&&(!s||a.st===s)).sort((x,y)=>(x.d+x.t).localeCompare(y.d+y.t));
  $('#tbl').innerHTML=`<thead><tr><th>الرقم</th><th>التاريخ</th><th>الوقت</th><th>المريض</th><th>الطبيب</th><th>الحالة</th><th></th></tr></thead><tbody>${L.map(a=>`<tr><td>${a.id}</td><td>${a.d}</td><td>${a.t}</td><td>${esc(nm(p,a.pid))}</td><td>${esc(nm(dr,a.did))}</td><td><span class="bd ${AS[a.st][1]}">${AS[a.st][0]}</span></td><td class="act">${a.st==='new'?`<button class="btn s" data-s="conf:${a.id}">تأكيد</button>`:''}${a.st==='conf'?`<button class="btn g s" data-s="done:${a.id}">إنهاء</button>`:''}${a.st==='new'||a.st==='conf'?`<button class="btn o s" data-s="cancel:${a.id}">إلغاء</button>`:''}<button class="btn d s" data-x="${a.id}" aria-label="حذف">${IC('trash')}</button></td></tr>`).join('')||'<tr><td colspan="7" class="empty">لا توجد مواعيد</td></tr>'}</tbody>`};
 $('#fd').value=qs.get('new')?'':today();$('#fd').oninput=$('#fs').oninput=draw;$('#all').onclick=()=>{$('#fd').value='';draw()};
 const openNew=()=>modal('موعد جديد',`<label>المريض<select id="mp">${opts(get('p'))}</select></label><label>الطبيب<select id="md">${opts(get('d').filter(x=>x.av),qs.get('did'),x=>x.n+' — '+x.sp)}</select></label><div class="r2"><label>التاريخ<input type="date" id="mdt" min="${today()}" value="${today()}"></label><label>الوقت<input type="time" id="mt" value="09:00"></label></div><label>ملاحظة<input id="mn"></label>`,()=>{
  const d=$('#mdt').value,t=$('#mt').value,did=$('#md').value;if(!d||!t)return'اختر التاريخ والوقت.';if(get('a').some(a=>a.did===did&&a.d===d&&a.t===t&&a.st!=='cancel'))return'هذا الوقت محجوز لدى الطبيب، اختر وقتًا آخر.';
  const L=get('a');L.push({id:'A-'+(Math.max(3000,...L.map(x=>+x.id.slice(2)))+1),pid:$('#mp').value,did,d,t,st:'new',note:$('#mn').value});put('a',L);draw();toast('تم حجز الموعد')});
 $('#add').onclick=openNew;
 $('#tbl').onclick=e=>{const s=e.target.closest('[data-s]'),x=e.target.closest('[data-x]');
  if(s){const[st,id]=s.dataset.s.split(':'),L=get('a');L.find(a=>a.id===id).st=st;put('a',L);draw();toast('تم تحديث الحالة')}
  if(x&&confirm('حذف الموعد؟')){put('a',get('a').filter(a=>a.id!==x.dataset.x));draw()}};
 draw();if(qs.get('new'))openNew()};
P.doctors=()=>{const sps=['الكل',...new Set(get('d').map(d=>d.sp))];let c='الكل';
 $('#tabs').innerHTML=sps.map(s=>`<button class="tab${s===c?' on':''}">${s}</button>`).join('');
 const draw=()=>{const a=get('a'),t=today();$('#list').innerHTML=get('d').filter(d=>c==='الكل'||d.sp===c).map(d=>`<div class="card dc"><div class="av">${IC('user')}</div><h3>${esc(d.n)}</h3><small>${d.sp}</small><div class="m">${d.room} · ${a.filter(x=>x.did===d.id&&x.d===t&&x.st!=='cancel').length} مواعيد اليوم<br><span dir="ltr">${d.ph}</span></div><div class="row"><span class="bd ${d.av?'ok':'bad'}">${d.av?'متاح':'غير متاح'}</span><button class="btn o s" data-t="${d.id}">${d.av?'إيقاف':'تفعيل'}</button>${d.av?`<a class="btn s" href="appointments.html?new=1&did=${d.id}">موعد</a>`:''}</div></div>`).join('')};
 $('#tabs').onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.tab',$('#tabs')).forEach(x=>x.classList.remove('on'));b.classList.add('on');c=b.textContent;draw()};
 $('#list').onclick=e=>{const t=e.target.closest('[data-t]');if(!t)return;const L=get('d');const d=L.find(x=>x.id===t.dataset.t);d.av=!d.av;put('d',L);draw();toast(d.av?'أصبح الطبيب متاحًا':'أُوقف الطبيب مؤقتًا')};draw()};
P.beds=()=>{const draw=()=>{const b=get('b'),p=get('p');
  $('#sum').textContent=`شاغر ${num(b.filter(x=>x.st==='free').length)} · مشغول ${num(b.filter(x=>x.st==='occ').length)} · تنظيف ${num(b.filter(x=>x.st==='clean').length)}`;
  $('#wards').innerHTML=WARDS.map(([k,n])=>`<div class="card ward"><h3>${n}</h3><div class="beds">${b.filter(x=>x.w===k).map(x=>`<button class="bed ${x.st}" data-b="${x.id}">${IC('bed')}${x.id}<small>${x.st==='occ'?esc(nm(p,x.pid)):x.st==='free'?'شاغر':'قيد التنظيف'}</small></button>`).join('')}</div></div>`).join('')};
 $('#wards').onclick=e=>{const el=e.target.closest('[data-b]');if(!el)return;const b=get('b'),bed=b.find(x=>x.id===el.dataset.b),p=get('p');
  const save=f=>{const B=get('b');f(B.find(x=>x.id===bed.id));put('b',B);draw()};
  if(bed.st==='free'){const cand=p.filter(x=>x.st!=='dis'&&!b.some(y=>y.pid===x.id));
   if(!cand.length){modal('سرير '+bed.id,'<p class="mut">لا يوجد مرضى بانتظار التنويم.</p>');return}
   modal('تنويم مريض في '+bed.id,`<label>المريض<select id="bp">${opts(cand,'',x=>x.n+' — '+x.id)}</select></label>`,()=>{const id=$('#bp').value;save(B=>{B.st='occ';B.pid=id});const P2=get('p');P2.find(x=>x.id===id).st='in';put('p',P2);draw();toast('تم التنويم')},{save:'تنويم'})}
  else if(bed.st==='occ'){modal('سرير '+bed.id,`<p>المريض: <b>${esc(nm(p,bed.pid))}</b></p><p class="mut">عند الخروج يتحول السرير إلى حالة التنظيف.</p>`,()=>{const id=bed.pid;save(B=>{B.st='clean';B.pid=null});const P2=get('p');const pt=P2.find(x=>x.id===id);if(pt)pt.st='dis';put('p',P2);draw();toast('تم تسجيل الخروج')},{save:'تسجيل خروج'})}
  else{modal('سرير '+bed.id,'<p>هل تم تنظيف السرير وتجهيزه؟</p>',()=>{save(B=>B.st='free');toast('السرير جاهز')},{save:'تم التنظيف'})}};draw()};
P.pharmacy=()=>{const draw=()=>{const m=get('m'),q=$('#q').value.trim(),lo=$('#low').checked,t=today(),soon=addDays(90);
  $('#kpis').innerHTML=[['pill','#0e7490',num(m.length),'عدد الأصناف'],['bell','#dc2626',num(m.filter(x=>x.qty<=x.min).length),'أصناف منخفضة'],['calendar','#d97706',num(m.filter(x=>x.exp<=soon).length),'قاربت الانتهاء (90 يومًا)'],['wallet','#16a34a',money(m.reduce((s,x)=>s+x.qty*x.price,0)),'قيمة المخزون']].map(k=>`<div class="kpi"><div class="ic" style="background:${k[1]}">${IC(k[0])}</div><div><b>${k[2]}</b><span>${k[3]}</span></div></div>`).join('');
  const L=m.filter(x=>(!lo||x.qty<=x.min)&&(x.n+x.cat).includes(q));
  $('#tbl').innerHTML=`<thead><tr><th>الصنف</th><th>الفئة</th><th>الكمية</th><th>الحد الأدنى</th><th>السعر</th><th>الانتهاء</th><th>الحالة</th><th></th></tr></thead><tbody>${L.map(x=>`<tr><td><b>${esc(x.n)}</b></td><td>${esc(x.cat)}</td><td><span class="qty"><button data-q="-1:${x.id}" aria-label="إنقاص">−</button><b>${num(x.qty)}</b><button data-q="1:${x.id}" aria-label="زيادة">+</button></span></td><td>${num(x.min)}</td><td>${money(x.price)}</td><td>${x.exp}</td><td>${x.qty<=x.min?'<span class="bd bad">منخفض</span>':x.exp<=soon?'<span class="bd warn">ينتهي قريبًا</span>':'<span class="bd ok">جيد</span>'}</td><td><button class="btn d s" data-x="${x.id}" aria-label="حذف">${IC('trash')}</button></td></tr>`).join('')||'<tr><td colspan="8" class="empty">لا توجد أصناف</td></tr>'}</tbody>`};
 $('#q').oninput=$('#low').onchange=draw;if(qs.get('low'))$('#low').checked=true;
 $('#add').onclick=()=>modal('صنف جديد',`<label>اسم الصنف<input id="mn"></label><div class="r2"><label>الفئة<input id="mc" value="أدوية"></label><label>السعر (ر.س)<input id="mpr" type="number" min="0" step="0.5"></label></div><div class="r2"><label>الكمية<input id="mq" type="number" min="0"></label><label>الحد الأدنى<input id="mm" type="number" min="0" value="20"></label></div><label>تاريخ الانتهاء<input id="me" type="date" value="${addDays(365)}"></label>`,()=>{
  const n=$('#mn').value.trim();if(!n)return'أدخل اسم الصنف.';if($('#mq').value===''||$('#mpr').value==='')return'أدخل الكمية والسعر.';const L=get('m');L.unshift({id:'M-'+(Math.max(400,...L.map(x=>+x.id.slice(2)))+1),n,cat:$('#mc').value,qty:+$('#mq').value,min:+$('#mm').value,price:+$('#mpr').value,exp:$('#me').value});put('m',L);draw();toast('تمت إضافة الصنف')});
 $('#tbl').onclick=e=>{const q=e.target.closest('[data-q]'),x=e.target.closest('[data-x]');
  if(q){const[d,id]=q.dataset.q.split(':'),L=get('m'),it=L.find(y=>y.id===id);it.qty=Math.max(0,it.qty+ +d*10);put('m',L);draw()}
  if(x&&confirm('حذف الصنف؟')){put('m',get('m').filter(y=>y.id!==x.dataset.x));draw()}};draw()};
P.billing=()=>{const draw=()=>{const I=get('i'),p=get('p'),s=$('#fs').value;const paid=I.filter(i=>i.st==='paid').reduce((t,i)=>t+total(i).tot,0),due=I.filter(i=>i.st==='due').reduce((t,i)=>t+total(i).tot,0);
  $('#kpis').innerHTML=[['receipt','#0e7490',num(I.length),'عدد الفواتير'],['wallet','#16a34a',money(paid),'المحصّل'],['clock','#d97706',money(due),'المستحق'],['chart','#7c3aed',money(paid+due),'الإجمالي']].map(k=>`<div class="kpi"><div class="ic" style="background:${k[1]}">${IC(k[0])}</div><div><b>${k[2]}</b><span>${k[3]}</span></div></div>`).join('');
  $('#tbl').innerHTML=`<thead><tr><th>الفاتورة</th><th>المريض</th><th>التاريخ</th><th>الإجمالي (شامل الضريبة)</th><th>الحالة</th><th></th></tr></thead><tbody>${I.filter(i=>!s||i.st===s).sort((a,b)=>b.d.localeCompare(a.d)).map(i=>`<tr><td><b>${i.id}</b></td><td>${esc(nm(p,i.pid))}</td><td>${i.d}</td><td>${money(total(i).tot)}</td><td><span class="bd ${i.st==='paid'?'ok':'warn'}">${i.st==='paid'?'مدفوعة':'غير مدفوعة'}</span></td><td class="act"><button class="btn o s" data-v="${i.id}">عرض</button>${i.st==='due'?`<button class="btn g s" data-pay="${i.id}">تحصيل</button>`:''}<button class="btn d s" data-x="${i.id}" aria-label="حذف">${IC('trash')}</button></td></tr>`).join('')||'<tr><td colspan="6" class="empty">لا توجد فواتير</td></tr>'}</tbody>`};
 $('#fs').oninput=draw;
 const view=id=>{const i=get('i').find(x=>x.id===id),t=total(i);modal('فاتورة '+i.id,`<p><b>المريض:</b> ${esc(nm(get('p'),i.pid))} &nbsp; <b>التاريخ:</b> ${i.d}</p><table class="t"><thead><tr><th>البند</th><th>الكمية</th><th>السعر</th><th>المجموع</th></tr></thead><tbody>${i.items.map(x=>`<tr><td>${esc(x.n)}</td><td>${x.q}</td><td>${money(x.p)}</td><td>${money(x.q*x.p)}</td></tr>`).join('')}</tbody></table><div class="tot"><div><span>المجموع</span><span>${money(t.sub)}</span></div><div><span>ضريبة القيمة المضافة 15%</span><span>${money(t.vat)}</span></div><div class="gt"><span>الإجمالي</span><span>${money(t.tot)}</span></div></div>`,null,{extra:'<button class="btn" onclick="window.print()">طباعة</button>'})};
 const openNew=()=>{const lines=()=>$$('.ln').map(l=>({n:$('.ln-n',l).value.trim(),q:+$('.ln-q',l).value,p:+$('.ln-p',l).value})).filter(x=>x.n&&x.q>0&&x.p>=0);
  const calc=()=>{const s=lines().reduce((t,i)=>t+i.q*i.p,0);$('#tt').innerHTML=`<div><span>المجموع</span><span>${money(s)}</span></div><div><span>الضريبة 15%</span><span>${money(s*.15)}</span></div><div class="gt"><span>الإجمالي</span><span>${money(s*1.15)}</span></div>`};
  const row=()=>{const d=document.createElement('div');d.className='ln';d.innerHTML='<input class="ln-n" placeholder="البند"><input class="ln-q" type="number" min="1" value="1"><input class="ln-p" type="number" min="0" placeholder="السعر"><button class="btn d s" type="button" aria-label="حذف البند">✕</button>';$('.ln-n',d).oninput=$('.ln-q',d).oninput=$('.ln-p',d).oninput=calc;$('button',d).onclick=()=>{d.remove();calc()};$('#ls').appendChild(d)};
  modal('فاتورة جديدة',`<label>المريض<select id="ip">${opts(get('p'),'',x=>x.n+' — '+x.id)}</select></label><div><b>البنود</b><div class="lines" id="ls"></div><button class="btn o s" type="button" id="ar">+ بند</button></div><div class="tot" id="tt"></div>`,()=>{
   const L=lines();if(!L.length)return'أضف بندًا واحدًا على الأقل بسعر وكمية صحيحين.';const A=get('i');A.unshift({id:'INV-'+(Math.max(2000,...A.map(x=>+x.id.slice(4)))+1),pid:$('#ip').value,d:today(),items:L,st:'due'});put('i',A);draw();toast('تم إنشاء الفاتورة')});
  row();$('#ar').onclick=row;calc()};
 $('#add').onclick=openNew;
 $('#tbl').onclick=e=>{const v=e.target.closest('[data-v]'),pay=e.target.closest('[data-pay]'),x=e.target.closest('[data-x]');
  if(v)view(v.dataset.v);if(pay){const L=get('i');L.find(i=>i.id===pay.dataset.pay).st='paid';put('i',L);draw();toast('تم تحصيل الفاتورة')}
  if(x&&confirm('حذف الفاتورة؟')){put('i',get('i').filter(i=>i.id!==x.dataset.x));draw()}};
 draw();if(qs.get('new'))openNew()};
P[page]();
