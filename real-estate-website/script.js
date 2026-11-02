
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
 if(m)m.textContent=f.dataset.ok||'تم الإرسال (نموذج، لا تُرسل بيانات لأي خادم).';f.reset()}));
$$('[data-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);toast('تم نسخ الكود: '+b.dataset.copy)}catch{toast('الكود: '+b.dataset.copy)}});
const qs=new URLSearchParams(location.search);
const IC=(n,c='')=>`<svg class="i ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;

const PR=[
{id:1,t:'شقة عائلية حديثة',ty:'شقة',pu:'بيع',ci:'الرياض',di:'حي الياسمين',p:850000,a:165,b:3,ba:3,ag:'جديد',col:'#1b5e3b',ic:'building',f:['مصعد','موقف خاص','تكييف مركزي','قريبة من المدارس'],d:'شقة بتشطيب حديث ومطبخ راكب، في حي هادئ وقريب من الخدمات والطرق الرئيسية.'},
{id:2,t:'فيلا دورين مع ملحق',ty:'فيلا',pu:'بيع',ci:'الرياض',di:'حي الملقا',p:2350000,a:400,b:5,ba:5,ag:'3 سنوات',col:'#2d4a39',ic:'home',f:['حديقة','مسبح','غرفة سائق','مجلس رجال ونساء'],d:'فيلا واسعة بتصميم عصري وملحق خارجي، مناسبة لعائلة كبيرة، وقريبة من الخدمات.'},
{id:3,t:'أرض سكنية على شارعين',ty:'أرض',pu:'بيع',ci:'جدة',di:'حي الشاطئ',p:1450000,a:625,b:0,ba:0,ag:'—',col:'#7a5c2e',ic:'ruler',f:['شارعان','صك إلكتروني','خدمات متوفرة'],d:'أرض بموقع مميز على شارعين، مناسبة للبناء السكني أو الاستثماري.'},
{id:4,t:'شقة للإيجار قرب الكورنيش',ty:'شقة',pu:'إيجار',ci:'جدة',di:'حي الشاطئ',p:48000,a:120,b:2,ba:2,ag:'سنتان',col:'#3b4a78',ic:'building',f:['إطلالة','موقف','أمن','مصعد'],d:'شقة مرتبة بإطلالة جميلة، قريبة من الكورنيش والمطاعم. الإيجار سنوي.'},
{id:5,t:'مكتب تجاري في برج',ty:'مكتب',pu:'إيجار',ci:'الرياض',di:'حي العليا',p:65000,a:90,b:0,ba:1,ag:'جديد',col:'#1f4e5f',ic:'briefcase',f:['استقبال','مواقف','إنترنت ألياف','تكييف'],d:'مكتب جاهز في برج أعمال بموقع حيوي، مناسب للشركات الناشئة.'},
{id:6,t:'فيلا مودرن مع مسبح',ty:'فيلا',pu:'بيع',ci:'الدمام',di:'حي الشاطئ الغربي',p:1980000,a:350,b:4,ba:4,ag:'سنة',col:'#26402f',ic:'home',f:['مسبح','حديقة','مصعد داخلي','تكييف مركزي'],d:'فيلا بتصميم مودرن وإضاءة طبيعية، مجهزة بالكامل ومناسبة للسكن الفوري.'},
{id:7,t:'محل تجاري على شارع رئيسي',ty:'محل',pu:'إيجار',ci:'الرياض',di:'حي النخيل',p:90000,a:60,b:0,ba:1,ag:'5 سنوات',col:'#8a3b5a',ic:'briefcase',f:['واجهة زجاجية','حركة مرور عالية','موقف أمامي'],d:'محل بموقع تجاري نشط وواجهة واسعة، مناسب لمعظم الأنشطة.'},
{id:8,t:'شقة استوديو مفروشة',ty:'شقة',pu:'إيجار',ci:'الرياض',di:'حي الصحافة',p:32000,a:48,b:1,ba:1,ag:'جديد',col:'#3b4a78',ic:'building',f:['مفروشة','إنترنت','مطبخ صغير','دخول ذاتي'],d:'استوديو مفروش بالكامل للأفراد، قريب من محطات الخدمات والمطاعم.'},
{id:9,t:'أرض تجارية بموقع استراتيجي',ty:'أرض',pu:'بيع',ci:'الدمام',di:'حي الفيصلية',p:3200000,a:900,b:0,ba:0,ag:'—',col:'#7a5c2e',ic:'ruler',f:['تجاري','شارع 40م','صك إلكتروني'],d:'أرض بمساحة كبيرة على شارع رئيسي، مناسبة لمشروع تجاري أو استثماري.'},
{id:10,t:'دوبلكس واسع',ty:'شقة',pu:'بيع',ci:'جدة',di:'حي الروضة',p:1150000,a:210,b:4,ba:4,ag:'سنتان',col:'#1b5e3b',ic:'building',f:['دورين','سطح خاص','موقفان','تكييف مركزي'],d:'دوبلكس بتشطيب فاخر وسطح خاص، قريب من الخدمات والمدارس.'},
{id:11,t:'فيلا للإيجار الراقي',ty:'فيلا',pu:'إيجار',ci:'الرياض',di:'حي الملقا',p:140000,a:420,b:5,ba:5,ag:'4 سنوات',col:'#2d4a39',ic:'home',f:['حديقة','غرفة سائق','مطبخ خارجي','مجلسان'],d:'فيلا مؤجرة بحالة ممتازة في حي راقٍ، مناسبة لعائلة تفضّل المساحات الكبيرة.'},
{id:12,t:'شقة صغيرة للاستثمار',ty:'شقة',pu:'بيع',ci:'الدمام',di:'حي الجلوية',p:420000,a:85,b:2,ba:2,ag:'5 سنوات',col:'#1f4e5f',ic:'building',f:['عائد إيجاري جيد','قريبة من الخدمات','موقف'],d:'شقة مناسبة للاستثمار بعائد إيجاري مستقر، وبسعر مناسب للمبتدئين.'}];
const money=n=>n.toLocaleString('ar-SA')+' ر.س';
const card=p=>`<a href="property.html?id=${p.id}" class="card prop"><div class="th" style="background:${p.col}">${IC(p.ic)}<span class="pp">${p.pu}</span></div><div class="body"><h3>${p.t}</h3><div class="loc">${IC('pin')} ${p.di}، ${p.ci}</div><div class="pr">${money(p.p)} ${p.pu==='إيجار'?'<small>/ سنويًا</small>':''}</div>
<div class="feats"><span>${IC('ruler')} ${p.a} م²</span>${p.b?`<span>${IC('bed')} ${p.b}</span>`:''}<span>${IC('building')} ${p.ty}</span></div></div></a>`;
if($('#feat'))$('#feat').innerHTML=[PR[0],PR[1],PR[3]].map(card).join('');
if($('#hs'))$('#hs').onsubmit=()=>{};
if($('#grid')){const F={pu:qs.get('purpose')||'',ty:qs.get('type')||'',ci:qs.get('city')||'',mx:'',b:0,s:''};
 const set=()=>{$('#fp').value=F.pu;$('#ft').value=F.ty;$('#fc').value=F.ci};set();
 const draw=()=>{let L=PR.filter(p=>(!F.pu||p.pu===F.pu)&&(!F.ty||p.ty===F.ty)&&(!F.ci||p.ci===F.ci)&&(!F.mx||p.p<=+F.mx)&&p.b>=F.b);
  if(F.s==='asc')L.sort((a,b)=>a.p-b.p);if(F.s==='desc')L.sort((a,b)=>b.p-a.p);if(F.s==='area')L.sort((a,b)=>b.a-a.a);
  $('#cnt').textContent=L.length+' عقار';$('#grid').innerHTML=L.map(card).join('');$('#empty').hidden=L.length>0};
 [['fp','pu'],['ft','ty'],['fc','ci'],['fm','mx'],['fs','s']].forEach(([i,k])=>$('#'+i).oninput=e=>{F[k]=e.target.value;draw()});$('#fb').oninput=e=>{F.b=+e.target.value;draw()};
 $('#fr').onclick=()=>{Object.assign(F,{pu:'',ty:'',ci:'',mx:'',b:0,s:''});set();$('#fm').value='';$('#fb').value=0;$('#fs').value='';draw()};draw()}
if($('#pd')){const p=PR.find(x=>x.id==qs.get('id'))||PR[0];document.title=p.t+' | ركن العقارية';$('#ptitle').textContent=p.t;$('#pcrumb').textContent=p.t;
 $('#pd').innerHTML=`<div class="pd"><div><div class="big" style="background:${p.col}">${IC(p.ic)}</div>
 <div class="facts"><div>${IC('ruler')}<b>${p.a} م²</b><small>المساحة</small></div><div>${IC('bed')}<b>${p.b||'—'}</b><small>غرف النوم</small></div><div>${IC('drop')}<b>${p.ba||'—'}</b><small>دورات المياه</small></div><div>${IC('calendar')}<b>${p.ag}</b><small>عمر العقار</small></div></div>
 <h2>الوصف</h2><p class="mut">${p.d}</p><h2>المميزات</h2><ul class="checks">${p.f.map(x=>`<li>${x}</li>`).join('')}</ul></div>
 <aside class="card"><span class="badge">${p.pu}</span> <span class="badge" style="background:var(--ink)">${p.ty}</span><div class="price" style="margin-top:8px">${money(p.p)} ${p.pu==='إيجار'?'<small class="mut" style="font-size:.9rem">/ سنويًا</small>':''}</div>
 <p class="mut" style="display:flex;gap:4px;align-items:center">${IC('pin')} ${p.di}، ${p.ci}</p><hr style="border:0;border-top:1px solid var(--line);margin:14px 0"><h3 style="margin-bottom:8px">اطلب معاينة</h3>
 <form class="f" data-form data-ok="تم استلام طلبك وسيتواصل معك المستشار (نموذج)." novalidate><input placeholder="الاسم" required><input type="tel" placeholder="الجوال" required><select><option>صباحًا</option><option>ظهرًا</option><option>مساءً</option></select><button class="btn btn-block">إرسال الطلب</button><p class="form-msg" role="status"></p></form></aside></div>`;
 if(p.pu==='بيع')$('#mp').value=p.p;
 $('#sim').innerHTML=PR.filter(x=>x.id!==p.id&&(x.ty===p.ty||x.ci===p.ci)).slice(0,3).map(card).join('')}
if($('#mres')){const calc=()=>{const P=+$('#mp').value||0,d=Math.min(90,Math.max(0,+$('#md').value||0)),y=Math.max(1,+$('#my').value||1),r=(+$('#mr').value||0)/100;
  const L=P*(1-d/100),n=y*12,i=r/12,m=i?L*i/(1-Math.pow(1+i,-n)):L/n,tot=m*n;
  $('#mres').innerHTML=`<div><b>${Math.round(m).toLocaleString('ar-SA')}</b><small>القسط الشهري (ر.س)</small></div><div><b>${Math.round(L).toLocaleString('ar-SA')}</b><small>مبلغ التمويل (ر.س)</small></div><div><b>${Math.round(tot-L).toLocaleString('ar-SA')}</b><small>إجمالي الربح (ر.س)</small></div>`};
 ['mp','md','my','mr'].forEach(i=>$('#'+i).oninput=calc);calc()}
