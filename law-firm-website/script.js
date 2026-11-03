
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

const AREAS=[['comm','briefcase','القضايا التجارية','تمثيل الشركات في النزاعات التجارية والشركات والإفلاس.',['الدعاوى والنزاعات التجارية','عقود الشراكة وتأسيس الشركات','التحكيم والتسوية الودية','الإفلاس والتصفية']],
['fam','users','الأحوال الشخصية','قضايا الأسرة بحساسية ومهنية وخصوصية.',['الزواج والطلاق والحضانة','النفقة والزيارة','الوصايا والمواريث','إثبات النسب والوكالات']],
['contract','file','العقود والصياغة','صياغة ومراجعة العقود بما يحمي مصالحك.',['عقود العمل','عقود التوريد والخدمات','اتفاقيات السرية','مراجعة العقود قبل التوقيع']],
['realty','building','العقارات','النزاعات والعقود العقارية والتسجيل.',['البيع والشراء والإيجار','فحص الصكوك والملكية','النزاعات العقارية','التطوير والمقاولات']],
['labor','user','القضايا العمالية','تمثيل أصحاب العمل والعاملين في المنازعات.',['المطالبات العمالية','الفصل التعسفي','مستحقات نهاية الخدمة','سياسات الموارد البشرية']],
['comp','shield','الامتثال والاستشارات','مراجعة الامتثال للأنظمة وتقديم الرأي القانوني.',['الاستشارات القانونية للشركات','سياسات الخصوصية والامتثال','الرأي القانوني المكتوب','التدريب القانوني']]];
if($('#areas'))$('#areas').innerHTML=AREAS.map(a=>`<a href="practice.html#${a[0]}" class="card area">${IC(a[1])}<h3>${a[2]}</h3><p>${a[3]}</p></a>`).join('');
if($('#arealist'))$('#arealist').innerHTML=AREAS.map(a=>`<div class="asec" id="${a[0]}"><div><span class="ico">${IC(a[1])}</span><h2 class="h2">${a[2]}</h2><p class="mut" style="margin:8px 0 14px">${a[3]}</p><a class="btn btn-sm" href="consultation.html?area=${a[0]}">اطلب استشارة في هذا المجال</a></div><div class="card"><h3>أبرز خدماتنا</h3><ul class="checks" style="margin-top:8px">${a[4].map(x=>`<li>${x}</li>`).join('')}</ul></div></div>`).join('');
const TEAM=[['الأستاذ عبدالله الراجحي','شريك مؤسس','القضايا التجارية والتحكيم','خبرة 18 سنة'],['الأستاذة منى السبيعي','شريكة','الأحوال الشخصية','خبرة 14 سنة'],['الأستاذ سلطان القرني','محامٍ أول','العقود والامتثال','خبرة 10 سنوات'],['الأستاذة جود الغامدي','محامية','القضايا العمالية','خبرة 7 سنوات'],['الأستاذ نايف العنزي','محامٍ','العقارات','خبرة 8 سنوات'],['الأستاذة دانة الحمدان','مستشارة قانونية','الاستشارات للشركات','خبرة 9 سنوات']];
if($('#team'))$('#team').innerHTML=TEAM.map(t=>`<div class="card lawyer"><div class="av">${IC('user')}</div><h3>${t[0]}</h3><small>${t[1]}</small><div class="meta">${t[2]}<br>${t[3]}</div></div>`).join('');
if($('#cf')){$('#ca').innerHTML=AREAS.map(a=>`<option value="${a[0]}">${a[2]}</option>`).join('');if(AREAS.some(a=>a[0]===qs.get('area')))$('#ca').value=qs.get('area');
 $('#cf').onsubmit=e=>{e.preventDefault();const m=$('#cm');
  if(!$('#cn').value.trim()||!/^05\d{8}$/.test($('#cp').value.trim())||!$('#cd').value.trim()){m.textContent='أكمل الاسم ورقم جوال صحيح (05xxxxxxxx) ونبذة عن الموضوع.';return}
  if(!$('#cg').checked){m.textContent='يرجى الموافقة على الإقرار أولًا.';return}
  m.innerHTML=`تم استلام طلبك يا ${$('#cn').value.trim().replace(/</g,'')}.<br>الرقم المرجعي: <b>LW-${Math.random().toString(36).slice(2,7).toUpperCase()}</b> — سيتواصل معك المحامي المختص.`}}
