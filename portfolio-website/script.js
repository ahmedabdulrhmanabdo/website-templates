
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
const IC=(n,c='')=>`<svg class="i ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;

const EMAIL='11ahemdalshalafi@gmail.com',SAAS='https://aqarsmart.com/saas-signup';

try{const t=localStorage.getItem('pf_theme');if(t)document.documentElement.dataset.theme=t}catch{}
const thb=$('#theme');if(thb)thb.onclick=()=>{const r=document.documentElement,n=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=n;try{localStorage.setItem('pf_theme',n)}catch{}};
const GH='https://github.com/ahmedabdulrhmanabdo/';
const PROJECTS=[
{id:1,t:'منصة فواتير ومبيعات (SaaS)',c:'saas',i:'receipt',col:'#c2381f',s:'منصة اشتراكات لفواتير ومبيعات الشركات الصغيرة بتسجيل ذاتي.',
 d:'منصة SaaS يسجّل فيها العميل بنفسه عبر ثلاث خطوات: اختيار الباقة، إدخال بياناته، ثم الدفع. تعرض باقات شهرية وسنوية مع تجربة مجانية، وتشرح للعميل متطلبات الفوترة الإلكترونية ومراحلها.',
 f:['تسجيل ذاتي بثلاث خطوات: الباقة ثم البيانات ثم الدفع','باقة فواتير ومبيعات للشركات الصغيرة (300 ريال شهريًا، مستخدمان مجانًا ومستخدمون إضافيون 100 ريال لكل مستخدم)','اشتراك شهري أو سنوي (وفّر 20%)، وتجربة مجانية 3 أيام','صفحات توعوية عن الفوترة الإلكترونية (مرحلة الإصدار ومرحلة الربط)','نظام متوافق مع متطلبات المرحلتين وفق ما تعرضه المنصة'],tech:['Frappe','ERPNext','SaaS','Python','JavaScript'],role:'مالك المنصة ومطوّرها',st:'منصة منشورة',link:SAAS,ltxt:'افتح المنصة'},
{id:2,t:'saas_billing — إدارة منصة الاشتراكات',c:'erp',i:'card',col:'#1f4e5f',s:'تطبيق Frappe يدير مواقع العملاء والاشتراكات والفواتير وتعليق المواقع.',
 d:'يتولى إنشاء مواقع العملاء وإدارة الاشتراكات والفواتير وتعليق المواقع من الموقع المركزي، مع لوحة تحكم مخصصة. يعمل مع تطبيق saas_client المثبّت على مواقع العملاء. مبني على ERPNext v15.',
 f:['لوحة تحكم ببطاقات (3 أعمدة) بدل الجدول الأفقي','تحديد متعدد وعمليات جماعية: تعليق / تفعيل / حذف / إرسال رسالة','ربط الفوترة الإلكترونية (ZATCA) وإشعارات','معالجة مشكلة أداء حرجة وتحسين السرعة'],tech:['Frappe','ERPNext v15','Python','JavaScript'],role:'تصميم وتطوير كامل',st:'مشروع خاص',link:'',ltxt:''},
{id:3,t:'saas_client — بوابة التعليق والواجهة',c:'erp',i:'shield',col:'#7a5c2e',s:'تطبيق Frappe خفيف على مواقع العملاء لتنفيذ التعليق وتخصيص الواجهة.',
 d:'مُكمّل لـ saas_billing. يقرر الموقع المركزي متى يُعلَّق الاشتراك، وهذا التطبيق ينفّذ ذلك فعليًا على موقع العميل مع بقاء وصول الإدارة سليمًا.',
 f:['تطبيق تعليق الاشتراك عند توقف السداد','لوحة تحكم مبسّطة (saas-home) وصفحة دخول عربية','إزالة العلامة التجارية الأصلية (White-Label) دون المساس بملفات frappe/erpnext','صفحة مراقبة لحالة فواتير ZATCA وإشعارات للعميل'],tech:['Frappe','Python','JavaScript','CSS RTL'],role:'تصميم وتطوير كامل',st:'مشروع خاص',link:'',ltxt:''},
{id:4,t:'accounting_shortcuts — لوحة اختصارات محاسبية',c:'erp',i:'chart',col:'#2f5d3a',s:'لوحة تحكم لعملاء ERPNext بواجهة ثنائية اللغة (RTL/LTR).',
 d:'تعرض اختصارات وإحصائيات محاسبية سريعة، وتفتح نماذج ERPNext الأصلية (فاتورة مبيعات، قيود يومية، سندات قبض وصرف) داخل نفس تصميم اللوحة بدل واجهة Frappe Desk الكاملة.',
 f:['واجهة عربية وإنجليزية مع دعم RTL وLTR','إحصائيات واختصارات محاسبية سريعة','استضافة نماذج ERPNext داخل إطار مضبوط بتنسيق مبسّط','صفحة رئيسية /saas-home'],tech:['Frappe','ERPNext','JavaScript','CSS'],role:'تصميم وتطوير كامل',st:'مفتوح المصدر',link:GH+'accounting_shortcuts',ltxt:'عرض الكود على GitHub'},
{id:5,t:'قوالب مواقع متعددة الصفحات',c:'web',i:'layout',col:'#3b4a78',s:'قوالب عربية: شركة وعيادة ومحاماة وعقارات ومطعم ومتجر ومعرض.',
 d:'قوالب جاهزة بـ HTML/CSS/JS بدون مكتبات، متجاوبة وتدعم RTL. كل قالب بعدة صفحات وتفاصيل وفلاتر ونماذج، ويمكن تخصيصه لعميلك.',
 f:['مواقع تعريفية وخدمية (شركة، عيادة، محاماة، عقارات)','مطعم بقائمة وحجز','متجر بسلة ودفع','معرض أعمال (هذا الموقع)'],tech:['HTML','CSS','JavaScript','GitHub Pages'],role:'تصميم وتطوير كامل',st:'مفتوح المصدر',link:'https://ahmedabdulrhmanabdo.github.io/website-templates/',ltxt:'شاهد القوالب'},
{id:7,t:'نظام إدارة المستشفى',c:'erp',i:'bed',col:'#0e7490',s:'موقع ويب لإدارة المرضى والمواعيد والأسرّة والصيدلية والفواتير.',
 d:'نظام ويب يعمل مباشرة في المتصفح لإدارة مستشفى: سجلات المرضى، حجز المواعيد مع منع تعارض وقت الطبيب، خريطة الأسرّة (تنويم وخروج وتنظيف)، مخزون الصيدلية مع تنبيهات، وفواتير بضريبة 15%.',
 f:['لوحة تحكم بمؤشرات ورسوم ومواعيد اليوم','مرضى: إضافة وتعديل وحذف وبحث','مواعيد بمنع التعارض وتغيير الحالة','أسرّة وأقسام وصيدلية وفواتير قابلة للطباعة'],tech:['JavaScript','LocalStorage','HTML','CSS RTL'],role:'تصميم وتطوير كامل',st:'يعمل مباشرة',link:'../hospital-system/',ltxt:'جرّب النظام'},
{id:8,t:'نظام نقاط البيع (سطح المكتب)',c:'erp',i:'cart',col:'#1d4ed8',s:'واجهة كاشير لمتاجر التجزئة: باركود، دفع، إيصال ضريبي، تقارير.',
 d:'نظام نقاط بيع لسطح المكتب: شاشة بيع سريعة بالباركود، خصومات، دفع نقدي وشبكة ومختلط، إيصال ضريبي مبسط، مخزون وتقارير يومية. يُعرض بلقطات من النظام.',
 f:['مسح الباركود وإضافة الأصناف','ضريبة 15% شاملة وإيصال حراري','تعليق الفاتورة واسترجاعها','مخزون وتقارير المبيعات بالساعة'],tech:['Desktop UI','JavaScript','Electron-ready'],role:'تصميم وتطوير كامل',st:'معروض بالصور',link:'../pos-desktop/',ltxt:'شاهد لقطات النظام'},
{id:6,t:'تطبيقات ويب وألعاب بسيطة',c:'app',i:'game',col:'#8a3b5a',s:'8 تطبيقات صغيرة و13 لعبة تعمل مباشرة في المتصفح.',
 d:'مجموعة تطبيقات (مهام، حاسبة، بومودورو، مصروفات، ملاحظات…) وألعاب (إكس أو، ثعبان، 2048، ألغام…) بدون أي مكتبات، وتحفظ بياناتها في المتصفح.',
 f:['8 تطبيقات مفيدة بحفظ تلقائي','13 لعبة منها ألعاب ضد كمبيوتر','تعمل على الجوال وسطح المكتب','ملف واحد لكل تطبيق'],tech:['JavaScript','Canvas','LocalStorage'],role:'تصميم وتطوير كامل',st:'مفتوح المصدر',link:'https://ahmedabdulrhmanabdo.github.io/website-templates/',ltxt:'افتح المشاريع'}];
const catN={saas:'منصة',erp:'نظام',web:'موقع',app:'تطبيق'};
const pCard=p=>`<a href="project.html?id=${p.id}" class="card proj"><div class="th" style="background:${p.col}">${IC(p.i)}</div><div class="body"><span class="stt">${catN[p.c]}</span><span class="stt">${p.st}</span><h3>${p.t}</h3><div class="meta">${p.s}</div></div></a>`;
if($('#home-projects'))$('#home-projects').innerHTML=PROJECTS.slice(1,4).map(pCard).join('');
if($('#plist')){const t=$('#ptabs'),draw=c=>$('#plist').innerHTML=PROJECTS.filter(p=>c==='all'||p.c===c).map(pCard).join('');draw('all');
 t.onclick=e=>{const b=e.target.closest('.tab');if(!b)return;$$('.tab',t).forEach(x=>x.classList.remove('on'));b.classList.add('on');draw(b.dataset.c)}}
if($('#pd')){const p=PROJECTS.find(x=>x.id==qs.get('id'))||PROJECTS[0];document.title=p.t+' | أحمد عبدالرحمن';$('#ptitle').textContent=p.t;$('#pcrumb').textContent=p.t.split(' — ')[0];
 $('#pd').innerHTML=`<div class="pd"><div><div class="th" style="background:${p.col}">${IC(p.i)}</div><h2>عن المشروع</h2><p>${p.d}</p><h2>أبرز ما فيه</h2><ul class="checks">${p.f.map(x=>`<li>${x}</li>`).join('')}</ul></div>
 <aside class="card"><h3>معلومات المشروع</h3><div class="facts"><div><b>التصنيف</b><span>${catN[p.c]}</span></div><div><b>دوري</b><span>${p.role}</span></div><div><b>الحالة</b><span>${p.st}</span></div></div>
 <p style="margin:14px 0 6px"><b>التقنيات</b></p>${p.tech.map(x=>`<span class="chip">${x}</span>`).join('')}
 ${p.link?`<p style="margin-top:16px"><a class="btn btn-block" href="${p.link}" target="_blank" rel="noopener">${IC('ext')} ${p.ltxt}</a></p>`:'<p class="mut" style="margin-top:14px">الكود غير منشور لأن المشروع خاص، ويمكنني عرضه لك عند التواصل.</p>'}
 <p style="margin-top:10px"><a class="btn btn-o btn-block" href="contact.html">اطلب مشروعًا مشابهًا</a></p></aside></div>`;
 $('#more').innerHTML=PROJECTS.filter(x=>x.id!==p.id).slice(0,3).map(pCard).join('')}
const SK=[['الأنظمة',['Frappe','ERPNext','Python','Bench','SaaS']],['الواجهات',['HTML5','CSS3','JavaScript','RTL','Responsive']],['الأدوات',['Git','GitHub','GitHub Pages','Linux']]];
if($('#skillgroups'))$('#skillgroups').innerHTML=SK.map(([t,L])=>`<div class="sg"><h4>${t}</h4>${L.map(x=>`<span class="chip">${x}</span>`).join('')}</div>`).join('');
if($('#stack'))$('#stack').innerHTML=SK.flatMap(x=>x[1]).map(x=>`<span class="chip">${x}</span>`).join('');
if($('#cf'))$('#cf').onsubmit=e=>{e.preventDefault();const m=$('#cfm');if(!$('#cn').value.trim()||!$('#cm').value.trim()){m.textContent='اكتب اسمك ورسالتك.';return}
 const body=`الاسم: ${$('#cn').value.trim()}\n${$('#cp').value.trim()?'الجوال: '+$('#cp').value.trim()+'\n':''}نوع الطلب: ${$('#cs').value}\n\n${$('#cm').value.trim()}`;
 location.href=`mailto:${EMAIL}?subject=${encodeURIComponent('طلب جديد: '+$('#cs').value)}&body=${encodeURIComponent(body)}`;m.textContent='يفتح الآن تطبيق البريد… إن لم يفتح فراسلني على '+EMAIL}
