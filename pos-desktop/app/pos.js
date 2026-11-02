
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const IC=(n,c='')=>`<svg class="i ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const m2=n=>(+n).toLocaleString('ar-SA',{minimumFractionDigits:2,maximumFractionDigits:2});const n0=n=>(+n).toLocaleString('ar-SA');
const CATS={drink:['مشروبات','#0284c7','drop'],snack:['وجبات خفيفة','#d97706','star'],dairy:['ألبان','#0d9488','box'],bakery:['مخبوزات','#b45309','home'],clean:['منظفات','#7c3aed','tag'],fresh:['خضار وفواكه','#16a34a','heart']};
const PR=[['مياه معدنية 600مل','drink',1,240,'6281001001'],['عصير برتقال 1 لتر','drink',6.5,60,'6281001002'],['كولا 330مل','drink',2.5,18,'6281001003'],['قهوة باردة','drink',9,35,'6281001004'],
['شيبس بطاطس','snack',3,120,'6281002001'],['شوكولاتة بالحليب','snack',4.5,80,'6281002002'],['بسكويت تمر','snack',5,12,'6281002003'],['مكسرات مشكلة 200غ','snack',14,40,'6281002004'],
['حليب كامل الدسم 1 لتر','dairy',6,70,'6281003001'],['لبنة 250غ','dairy',7.5,45,'6281003002'],['جبنة شرائح','dairy',11,30,'6281003003'],['زبادي طبيعي','dairy',2,9,'6281003004'],
['خبز توست','bakery',4,50,'6281004001'],['كرواسون','bakery',3.5,25,'6281004002'],['سائل جلي 750مل','clean',12,38,'6281005001'],['مناديل ورقية','clean',8,90,'6281005002'],
['تفاح أحمر كغ','fresh',9,60,'6281006001'],['موز كغ','fresh',6,55,'6281006002'],['طماطم كغ','fresh',4.5,48,'6281006003'],['بيض 30 حبة','fresh',19,22,'6281006004']]
 .map((p,i)=>({id:i+1,n:p[0],c:p[1],p:p[2],s:p[3],bc:p[4]}));
const VAT=.15;let cart=[],disc=0,view='sale',cat='all',q='',hold=null;
// sample day data for reports
const HOURS=[8,9,10,11,12,13,14,15,16,17,18,19,20,21],SALES=[420,780,960,1240,1760,2180,1480,1120,1390,1980,2560,2890,2140,1210];
function tot(){const sub=cart.reduce((s,l)=>s+PR.find(p=>p.id===l.id).p*l.q,0),d=Math.min(sub,disc),net=sub-d,vat=net*VAT/(1+VAT);return{sub,d,net,vat,tot:net}}
function menu(){const M=[['sale','cart','المبيعات'],['inventory','box','المنتجات والمخزون'],['reports','chart','التقارير']];
 $('#menu').innerHTML=M.map(m=>`<a class="${view===m[0]?'on':''}" data-v="${m[0]}">${IC(m[1])} ${m[2]}</a>`).join('')+'<span style="flex:1"></span><a>'+IC('users')+' العملاء</a><a>'+IC('settings')+' الإعدادات</a>'}
function sale(){const L=PR.filter(p=>(cat==='all'||p.c===cat)&&(p.n+p.bc).includes(q)),T=tot();
 $('#body').innerHTML=`<div class="sale">
 <section class="pan"><h4>المنتجات</h4><div class="srch"><input id="q" placeholder="ابحث بالاسم أو امسح الباركود…" value="${q}" autocomplete="off"></div>
 <div class="cats"><button class="cat ${cat==='all'?'on':''}" data-c="all">الكل</button>${Object.entries(CATS).map(([k,v])=>`<button class="cat ${cat===k?'on':''}" data-c="${k}">${v[0]}</button>`).join('')}</div>
 <div class="grid">${L.map(p=>`<div class="pt" data-p="${p.id}"><div class="ph" style="background:${CATS[p.c][1]}">${IC(CATS[p.c][2])}</div><b>${p.n}</b><span>${m2(p.p)}</span><small>المخزون ${n0(p.s)}</small></div>`).join('')||'<p class="empty">لا توجد نتائج</p>'}</div></section>
 <section class="pan"><h4><span>الفاتورة الحالية #1048</span><span style="color:var(--mut);font-weight:400">${cart.reduce((s,l)=>s+l.q,0)} قطعة</span></h4><div class="cust">${IC('user')} العميل: <b>عميل نقدي</b></div>
 <div class="cart">${cart.length?`<table class="ct"><thead><tr><th>الصنف</th><th>الكمية</th><th>السعر</th><th>المجموع</th><th></th></tr></thead><tbody>${cart.map(l=>{const p=PR.find(x=>x.id===l.id);return `<tr><td>${p.n}</td><td><span class="q"><button data-d="-1:${p.id}">−</button><b>${l.q}</b><button data-d="1:${p.id}">+</button></span></td><td>${m2(p.p)}</td><td><b>${m2(p.p*l.q)}</b></td><td><button class="rm" data-r="${p.id}" aria-label="حذف">${IC('trash')}</button></td></tr>`}).join('')}</tbody></table>`:`<div class="empty">${IC('cart')}الفاتورة فارغة<br>اضغط على منتج أو امسح الباركود</div>`}</div></section>
 <section class="pan"><h4>الإجمالي</h4><div class="sum"><div class="r"><span>المجموع</span><b>${m2(T.sub)}</b></div><div class="r d"><span>خصم (ر.س)</span><input id="dc" type="number" min="0" step="0.5" value="${disc||''}" placeholder="0.00"></div><div class="r"><span>ضريبة القيمة المضافة 15% (شاملة)</span><span>${m2(T.vat)}</span></div>
 <div class="grand"><small>المبلغ المستحق (ر.س)</small><b>${m2(T.tot)}</b></div></div>
 <div class="btns"><button class="bt pay" id="pay" ${cart.length?'':'disabled'}>${IC('wallet')} دفع (F9)</button><button class="bt card" id="cardpay" ${cart.length?'':'disabled'}>${IC('card')} شبكة</button><button class="bt hold" id="hold" ${cart.length||hold?'':'disabled'}>${IC('clock')} ${hold&&!cart.length?'استرجاع':'تعليق'}</button><button class="bt cancel" id="clr" ${cart.length?'':'disabled'}>${IC('trash')} إلغاء الفاتورة</button></div></section></div>`}
function inventory(){$('#body').innerHTML=`<div class="page"><div class="bar"><input id="iq" placeholder="ابحث في المنتجات…" value="${q}"><span class="sp"></span><button class="bt card" style="padding:9px 16px">${IC('plus')} منتج جديد</button><button class="bt hold" style="padding:9px 16px">${IC('download')} استيراد</button></div>
 <table class="dt"><thead><tr><th>الباركود</th><th>المنتج</th><th>الفئة</th><th>السعر</th><th>المخزون</th><th>الحالة</th></tr></thead><tbody>${PR.filter(p=>(p.n+p.bc).includes(q)).map(p=>`<tr><td dir="ltr" style="text-align:right">${p.bc}</td><td><b>${p.n}</b></td><td>${CATS[p.c][0]}</td><td>${m2(p.p)}</td><td>${n0(p.s)}</td><td>${p.s<=20?'<span class="bd bad">منخفض</span>':p.s<=40?'<span class="bd warn">يحتاج طلب</span>':'<span class="bd ok">متوفر</span>'}</td></tr>`).join('')}</tbody></table></div>`}
function reports(){const t=SALES.reduce((a,b)=>a+b,0),mx=Math.max(...SALES);
 $('#body').innerHTML=`<div class="page"><div class="kp">${[['wallet','#16a34a',m2(t),'إجمالي مبيعات اليوم (ر.س)'],['receipt','#1d4ed8',n0(186),'عدد الفواتير'],['chart','#7c3aed',m2(t/186),'متوسط الفاتورة (ر.س)'],['tag','#d97706',n0(612),'القطع المباعة']].map(k=>`<div class="k"><div class="ic" style="background:${k[1]}">${IC(k[0])}</div><div><b>${k[2]}</b><span>${k[3]}</span></div></div>`).join('')}</div>
 <div class="rg"><section class="pan"><h4>المبيعات بالساعة</h4><div class="chart">${SALES.map((s,i)=>`<div><b>${n0(s)}</b><i style="height:${s/mx*100}%"></i><small>${HOURS[i]}:00</small></div>`).join('')}</div></section>
 <section class="pan"><h4>طرق الدفع</h4><div class="donut" style="background:conic-gradient(#1d4ed8 0 58%,#16a34a 58% 86%,#d97706 86% 100%)"></div><div class="lg"><span><i style="background:#1d4ed8"></i> شبكة (مدى/فيزا) — 58%</span><span><i style="background:#16a34a"></i> نقدي — 28%</span><span><i style="background:#d97706"></i> مختلط — 14%</span></div></section></div>
 <section class="pan"><h4>الأكثر مبيعًا اليوم</h4><div class="tp">${[['مياه معدنية 600مل',142],['شيبس بطاطس',96],['حليب كامل الدسم 1 لتر',74],['قهوة باردة',61],['خبز توست',52]].map(([n,c])=>`<div><div class="l"><span>${n}</span><b>${n0(c)}</b></div><div class="pb"><i style="width:${c/142*100}%"></i></div></div>`).join('')}</div></section></div>`}
function render(){menu();({sale,inventory,reports})[view]();const ci=$('#clock');ci.textContent='٢٠٢٦/١١/٠٢  ١٠:٤٢ ص'}
function add(id,n=1){const l=cart.find(x=>x.id===id);if(l)l.q+=n;else cart.push({id,q:n});if(l&&l.q<=0)cart=cart.filter(x=>x.id!==id);render()}
function dlg(title,body,foot=''){$('#dlg').innerHTML=`<div class="dh"><b>${title}</b><button id="dx" aria-label="إغلاق">${IC('x')}</button></div><div class="db">${body}</div>${foot?`<div class="fa">${foot}</div>`:''}`;$('#ov').hidden=false;$('#dx').onclick=()=>$('#ov').hidden=true}
function payDlg(method='cash'){const T=tot();let rec=T.tot;
 const draw=()=>{const ch=Math.max(0,rec-T.tot);dlg('إتمام الدفع',`<div class="due"><small>المبلغ المستحق</small><br><b>${m2(T.tot)} ر.س</b></div>
 <div class="seg"><button class="${method==='cash'?'on':''}" data-m="cash">نقدي</button><button class="${method==='card'?'on':''}" data-m="card">شبكة</button><button class="${method==='mix'?'on':''}" data-m="mix">مختلط</button></div>
 <div class="rcv"><span>المبلغ المستلم</span><input id="rv" type="number" value="${rec}" ${method==='card'?'disabled':''}></div><div class="np">${[20,50,100,200,500].map(v=>`<button class="q" data-q="${v}">${v}</button>`).join('')}<button class="q" data-q="${Math.ceil(T.tot)}">المبلغ بالضبط</button><button data-q="0">مسح</button></div>
 <div class="rcv"><span>المتبقي للعميل</span><span class="chg">${m2(method==='card'?0:ch)} ر.س</span></div>`,`<button class="bt cancel" id="pc" style="padding:10px 18px">رجوع</button><button class="bt pay" id="pf" style="grid-column:auto;padding:10px 26px" ${method!=='card'&&rec<T.tot?'disabled':''}>${IC('check')} تأكيد وطباعة الإيصال</button>`);
  $$('[data-m]').forEach(b=>b.onclick=()=>{method=b.dataset.m;if(method==='card')rec=T.tot;draw()});$$('[data-q]').forEach(b=>b.onclick=()=>{rec=+b.dataset.q;draw()});
  $('#rv').oninput=e=>{rec=+e.target.value;const c=Math.max(0,rec-T.tot);$('.chg').textContent=m2(c)+' ر.س';$('#pf').disabled=method!=='card'&&rec<T.tot};$('#pc').onclick=()=>$('#ov').hidden=true;$('#pf').onclick=()=>receipt(T,method,rec)};draw()}
function receipt(T,method,rec){const items=cart.map(l=>({...PR.find(p=>p.id===l.id),q:l.q})),pm={cash:'نقدي',card:'شبكة',mix:'مختلط'}[method];
 const N=17,qr=Array.from({length:N*N},(_,i)=>{const x=i%N,y=Math.floor(i/N);let dark;const fin=(x<5&&y<5)?[x,y]:(x>=N-5&&y<5)?[x-(N-5),y]:(x<5&&y>=N-5)?[x,y-(N-5)]:null;
  if(fin){const[a,b]=fin;dark=a===0||b===0||a===4||b===4||(a===2&&b===2)}else dark=((x*31+y*17+x*y*7+x*x)%11)<5;return `<i class="${dark?'':'o'}"></i>`}).join('');
 dlg('معاينة الإيصال',`<div class="rc"><h5>متجر الأمل</h5><div class="c">الرياض — حي الملقا<br>الرقم الضريبي: 300000000000003</div><hr><div class="l"><span>فاتورة ضريبية مبسطة #1048</span></div><div class="l"><span>2026/11/02 10:42</span><span>الكاشير: سعد</span></div><hr>
 ${items.map(i=>`<div class="l"><span>${i.n} × ${i.q}</span><span>${m2(i.p*i.q)}</span></div>`).join('')}<hr>
 <div class="l"><span>المجموع</span><span>${m2(T.sub)}</span></div>${T.d?`<div class="l"><span>الخصم</span><bdi dir="ltr">-${m2(T.d)}</bdi></div>`:''}<div class="l"><span>ضريبة 15% (شاملة)</span><span>${m2(T.vat)}</span></div><div class="l"><b>الإجمالي</b><b>${m2(T.tot)} ر.س</b></div><hr>
 <div class="l"><span>الدفع: ${pm}</span><span>${m2(rec)}</span></div><div class="l"><span>المتبقي</span><span>${m2(Math.max(0,rec-T.tot))}</span></div><div class="qr">${qr}</div><div class="c">شكرًا لتسوقكم معنا</div></div>`,
 `<button class="bt card" id="pn" style="padding:10px 22px">${IC('printer')} طباعة</button><button class="bt pay" id="nw" style="grid-column:auto;padding:10px 22px">فاتورة جديدة</button>`);
 $('#nw').onclick=()=>{cart=[];disc=0;$('#ov').hidden=true;render()};$('#pn').onclick=()=>window.print()}
document.addEventListener('click',e=>{const t=e.target;
 const m=t.closest('#menu a[data-v]');if(m){view=m.dataset.v;q='';render();return}
 const p=t.closest('[data-p]');if(p){add(+p.dataset.p);return}const c=t.closest('[data-c]');if(c){cat=c.dataset.c;render();return}
 const d=t.closest('[data-d]');if(d){const[n,id]=d.dataset.d.split(':');add(+id,+n);return}const r=t.closest('[data-r]');if(r){cart=cart.filter(x=>x.id!==+r.dataset.r);render();return}
 if(t.closest('#pay'))payDlg('cash');if(t.closest('#cardpay'))payDlg('card');if(t.closest('#clr')){cart=[];disc=0;render()}
 if(t.closest('#hold')){if(cart.length){hold=cart;cart=[];}else if(hold){cart=hold;hold=null}render()}});
document.addEventListener('input',e=>{if(e.target.id==='q'){const pos=e.target.selectionStart;q=e.target.value.trim();
  const bc=PR.find(p=>p.bc===q);if(bc){add(bc.id);q='';return}render();const n=$('#q');n.focus();n.setSelectionRange(pos,pos)}
 if(e.target.id==='iq'){q=e.target.value.trim();const pos=e.target.selectionStart;render();const n=$('#iq');n.focus();n.setSelectionRange(pos,pos)}
 if(e.target.id==='dc'){disc=Math.max(0,+e.target.value||0);const T=tot();$('.grand b').textContent=m2(T.tot);$('.sum .r:nth-child(3) span:last-child').textContent=m2(T.vat)}});
document.addEventListener('keydown',e=>{if(e.key==='F9'&&view==='sale'&&cart.length){e.preventDefault();payDlg('cash')}if(e.key==='Escape')$('#ov').hidden=true});
render();
