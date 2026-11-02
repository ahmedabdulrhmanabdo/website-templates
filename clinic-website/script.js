
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
const IC=(n,c='')=>`<svg class="i ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;

const DEPT=[['dental','smile','الأسنان','فحص وتنظيف وحشوات وتقويم وتبييض.',['فحص شامل وتنظيف','حشوات وعلاج العصب','تقويم الأسنان','تبييض وتجميل']],
['derm','drop','الجلدية','تشخيص وعلاج مشاكل البشرة والشعر.',['حب الشباب والتصبغات','الأكزيما والحساسية','مشاكل الشعر','إجراءات تجميلية بسيطة']],
['eye','eye','العيون','فحص النظر وعلاج أمراض العين.',['قياس النظر والعدسات','فحص قاع العين','علاج الجفاف والالتهابات','متابعة الضغط']],
['peds','star','الأطفال','رعاية صحية متكاملة من الولادة وحتى المراهقة.',['متابعة النمو','التطعيمات','الأمراض الشائعة','استشارات التغذية']],
['int','activity','الباطنة','تشخيص ومتابعة الأمراض المزمنة والعامة.',['السكري والضغط','الجهاز الهضمي','فحوصات دورية','متابعة التحاليل']],
['women','heart','النساء والولادة','متابعة الحمل وصحة المرأة.',['متابعة الحمل','فحوصات دورية','استشارات ما قبل الزواج','صحة المرأة']]];
const DOCS=[
{id:1,n:'د. سلمان الخالدي',d:'dental',t:'استشاري طب الأسنان',x:14,l:'العربية، الإنجليزية'},
{id:2,n:'د. ريما العتيبي',d:'dental',t:'أخصائية تقويم',x:9,l:'العربية، الإنجليزية'},
{id:3,n:'د. هدى الشمري',d:'derm',t:'استشارية الأمراض الجلدية',x:12,l:'العربية، الإنجليزية'},
{id:4,n:'د. طارق المنصور',d:'eye',t:'استشاري طب العيون',x:16,l:'العربية'},
{id:5,n:'د. نوف الدوسري',d:'peds',t:'استشارية طب الأطفال',x:11,l:'العربية، الإنجليزية'},
{id:6,n:'د. ماجد الحربي',d:'int',t:'استشاري الباطنة',x:18,l:'العربية، الإنجليزية'},
{id:7,n:'د. لمى القحطاني',d:'women',t:'استشارية النساء والولادة',x:13,l:'العربية، الإنجليزية'},
{id:8,n:'د. فيصل الزهراني',d:'peds',t:'أخصائي أطفال',x:7,l:'العربية'}];
const dn=k=>DEPT.find(x=>x[0]===k);
const dCard=d=>`<div class="card doc"><div class="av">${IC('user')}</div><h3>${d.n}</h3><small>${d.t}</small><div class="meta">قسم ${dn(d.d)[2]} · خبرة ${d.x} سنة<br>اللغات: ${d.l}</div><a class="btn btn-sm" href="appointment.html?doc=${d.id}">احجز مع الطبيب</a></div>`;
if($('#deptgrid'))$('#deptgrid').innerHTML=DEPT.map(d=>`<div class="card dept"><div class="ib2">${IC(d[1])}</div><div><h3>${d[2]}</h3><p>${d[3]}</p><a class="more" href="departments.html#${d[0]}">التفاصيل ←</a></div></div>`).join('');
if($('#docgrid'))$('#docgrid').innerHTML=DOCS.slice(0,3).map(dCard).join('');
if($('#deplist'))$('#deplist').innerHTML=DEPT.map(d=>`<div class="dsec" id="${d[0]}"><div><div class="big"><div class="ib2">${IC(d[1])}</div><h2 class="h2">${d[2]}</h2></div><p class="mut" style="margin:10px 0 14px">${d[3]}</p><a class="btn btn-sm" href="appointment.html?dept=${d[0]}">احجز في هذا القسم</a></div><div class="card"><h3>أبرز الخدمات</h3><ul class="checks" style="margin-top:8px">${d[4].map(x=>`<li>${x}</li>`).join('')}</ul><p class="mut" style="margin-top:10px;font-size:.92rem">الأطباء: ${DOCS.filter(x=>x.d===d[0]).map(x=>x.n).join('، ')}</p></div></div>`).join('');
if($('#dlist')){const t=$('#dtabs');t.innerHTML=`<button class="tab on" data-c="all">الكل</button>`+DEPT.map(d=>`<button class="tab" data-c="${d[0]}">${d[2]}</button>`).join('');
 const draw=c=>$('#dlist').innerHTML=DOCS.filter(x=>c==='all'||x.d===c).map(dCard).join('');draw('all');
 t.onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.tab',t).forEach(x=>x.classList.remove('on'));b.classList.add('on');draw(b.dataset.c)}}
if($('#af')){const ad=$('#ad'),ac=$('#ac'),at=$('#at');at.min=new Date().toISOString().slice(0,10);at.value=at.min;let sel=null;
 ad.innerHTML=DEPT.map(d=>`<option value="${d[0]}">${d[2]}</option>`).join('');
 const fillDocs=()=>{ac.innerHTML=DOCS.filter(x=>x.d===ad.value).map(x=>`<option value="${x.id}">${x.n}</option>`).join('')};
 const pre=DOCS.find(x=>x.id==qs.get('doc'));if(pre)ad.value=pre.d;else if(qs.get('dept')&&dn(qs.get('dept')))ad.value=qs.get('dept');fillDocs();if(pre)ac.value=pre.id;
 const times=[];for(let h=8;h<=21;h++){times.push([h,0]);times.push([h,30])}
 const lab=([h,m])=>`${h>12?h-12:h}:${m?'30':'00'} ${h>=12?'م':'ص'}`;const seed=s=>[...s].reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,7);
 function slots(){const sd=seed(at.value+ac.value);$('#slots').innerHTML=times.map((t,i)=>`<button type="button" class="slot${sel===i?' on':''}" data-i="${i}" ${(sd+i*7)%4===0?'disabled':''}>${lab(t)}</button>`).join('');sum()}
 function sum(){const doc=DOCS.find(x=>x.id==ac.value),ds=at.value?new Date(at.value+'T00:00').toLocaleDateString('ar-SA',{weekday:'long',day:'numeric',month:'long'}):'—';
  $('#sum').innerHTML=`<p>${IC('user')} ${doc?doc.n:''}</p><p>${IC('activity')} قسم ${dn(ad.value)[2]}</p><p>${IC('calendar')} ${ds}</p><p>${IC('clock')} ${sel===null?'اختر الوقت':lab(times[sel])}</p>`}
 ad.onchange=()=>{fillDocs();sel=null;slots()};ac.onchange=()=>{sel=null;slots()};at.onchange=()=>{sel=null;slots()};
 $('#slots').onclick=e=>{const b=e.target.closest('.slot');if(!b||b.disabled)return;sel=+b.dataset.i;slots()};slots();
 $('#af').onsubmit=e=>{e.preventDefault();const m=$('#am');
  if(!$('#an').value.trim()||!/^05\d{8}$/.test($('#ap').value.trim())){m.textContent='أدخل اسم المريض ورقم جوال صحيحًا (05xxxxxxxx).';return}
  if(sel===null){m.textContent='اختر وقت الموعد.';return}
  m.innerHTML=`تم تأكيد موعدك يا ${$('#an').value.trim().replace(/</g,'')}.<br>الرقم المرجعي: <b>SH-${Math.random().toString(36).slice(2,7).toUpperCase()}</b> (نموذج تجريبي)`}}
