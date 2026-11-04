/* Arabic/English switch. Default language: English. */
(function(){
var D={"الفهد": "Al-Fahd", "مصروف": "Expense", "جدة": "Jeddah", "لا توجد ملاحظات": "No notes", "حذف": "Delete", "لا توجد مهام": "No tasks", "المصروف": "Expense", "تركيز": "Concentration", "أسئلة ونتيجة": "Questions and result", "قدم": "ft", "الوزن": "Weight", "يناير": "January", "إنش": "inch", "سبتمبر": "September", "فبراير": "February", "الطول": "Length", "أكتوبر": "October", "السبت": "Saturday", "نوفمبر": "November", "الأربعاء": "Wednesday", "الجمعة": "Friday", "خطأ": "Error", "كيلومتر": "kilometer", "توليد جديدة": "Generate new", "أحرف صغيرة": "Lowercase", "مكة": "Makkah", "مايو": "May", "تطبيقات الويب": "Web apps", "الوصف": "Description", "ضعيفة": "Weak", "أرقام": "Numbers", "قوية": "Strong", "متوسطة": "Medium", "الحرارة": "Temperature", "المريخ": "Mars", "الدمام": "Dammam", "المتبقي:": "Remaining:", "الكل": "All", "الأحد": "Sunday", "عشوائي آمن وقياس القوة": "Secure random and strength meter", "قائمة المهام": "Task list", "طول ووزن وحرارة": "Height, weight and temperature", "رطل": "lb", "الاثنين": "Monday", "يوليو": "July", "الآلة الحاسبة": "Calculator", "أغسطس": "August", "تصفية وحفظ تلقائي": "Filtering and auto-save", "الأرض": "Earth", "غرام": "grams", "الطول:": "Length:", "زحل": "Saturn", "المشتري": "Buyer", "الحصان": "Horse", "خذ استراحة.": "Take a break.", "الأسد": "The Lion", "إعادة الاختبار": "Retake the quiz", "ابحث": "Search", "المبلغ": "Amount", "يونيو": "June", "ما ناتج": "What is the result of", "إضافة": "Add", "أي لغة تُستخدم لتنسيق صفحات الويب؟": "Which language is used to format web pages?", "ما رمز الماء الكيميائي؟": "What is the chemical symbol for water?", "فهرنهايت": "Fahrenheit", "مارس": "March", "اختبار معلومات": "Trivia quiz", "نسخ": "Copy", "راحة": "Comfort", "طن": "ton", "انتهت الراحة!": "Rest is over!", "ديسمبر": "December", "المتبقية": "Remaining", "الدخل": "Income", "متتبّع المصروفات": "Expense tracker", "كم عدد القارات؟": "How many continents are there?", "دخل": "Income", "بدون عنوان": "Untitled", "اختبار معلومات عامة": "General knowledge quiz", "جديدة": "New", "جيد، حاول مرة أخرى": "Good, try again", "المنجزة": "Completed", "مولّد كلمات المرور": "Password generator", "الثلاثاء": "Tuesday", "رموز": "Symbols", "اكتب ملاحظتك": "Write your note", "بومودورو": "Pomodoro", "متر": "m", "ابدأ": "Start", "تركيز وراحة": "Focus and rest", "كلفن": "Kelvin", "أكبر كوكب في المجموعة الشمسية؟": "The largest planet in the solar system?", "مؤقّت بومودورو": "Pomodoro timer", "أحرف كبيرة": "Uppercase", "محوّل الوحدات": "Unit converter", "حفظ": "Save", "الإثنين": "Monday", "ر.س": "SAR", "مئوية": "Celsius", "أسرع حيوان بري؟": "Fastest land animal?", "ميل": "mile", "النمر": "The Tiger", "أضف مهمة جديدة": "Add a new task", "الخميس": "Thursday", "وقت التركيز": "Focus time", "وقت الراحة": "Rest time", "أبريل": "April", "الرياض": "Riyadh", "تم": "done", "إغلاق": "Close", "سنتيمتر": "centimeter", "ممتاز!": "Excellent!", "دخل ومصروف ورصيد": "Income, expenses and balance", "إيقاف مؤقت": "Pause", "اختر نوعًا واحدًا على الأقل": "Choose at least one type", "جلسات مكتملة اليوم:": "Sessions completed today:", "انتهى وقت التركيز!": "Focus time is over!", "السؤال": "Question", "تحتاج لمراجعة": "Needs review", "و": "and", "الملاحظات": "Notes", "إعادة": "Reset", "كم عدد أيام الأسبوع؟": "How many days are in a week?", "من": "of", "أوقية": "ounce", "العنوان": "Address", "بحث وحفظ في المتصفح": "Search and save in the browser", "ما عاصمة المملكة العربية السعودية؟": "What is the capital of Saudi Arabia?", "تدعم لوحة المفاتيح": "Supports the keyboard", "كيلوغرام": "kilogram"};
var A='\\u0600-\\u06FF';
var keys=Object.keys(D).sort(function(a,b){return b.length-a.length});
var esc=function(s){return s.replace(/[.*+?^${}()|[\]\\\/-]/g,'\\$&')};
var RX=keys.length?new RegExp('(?<![؀-ۿ])(?:'+keys.map(esc).join('|')+')(?![؀-ۿ])','g'):null;
var AR=/[؀-ۿ]/;
var en=true;try{en=(localStorage.getItem('lang')||'en')!=='ar'}catch(e){}
var busy=false;
function tr(s){var o=tr1(s);if(AR.test(o)&&s.indexOf('،')>-1)o=s.split('،').map(tr1).join(', ').replace(/,\s{2,}/g,', ');return o}
function tr1(s){
  var t=s.trim();if(!t)return s;
  var out=D[t]!==undefined?s.replace(t,D[t]):(RX?s.replace(RX,function(m){return D[m]}):s);
  out=out.replace(/[٠-٩]/g,function(c){return c.charCodeAt(0)-1632}).replace(/٬/g,',').replace(/٫/g,'.');
  var NA='(?![\\u0600-\\u06FF])';
  out=out.replace(/(\d{4})\s*م(?![\u0600-\u06FF])/g,'$1').replace(/(\d)\s*م²/g,'$1 m²').replace(/(\d)\s*غ(?![\u0600-\u06FF])/g,'$1 g').replace(/(Street \d+)\s*م/g,'$1 m')
   .replace(new RegExp('(?<![\\d:])(\\d{1,2}(?::\\d{2})?)\\s*ص'+NA,'g'),'$1 AM').replace(new RegExp('(?<![\\d:])(\\d{1,2}(?::\\d{2})?)\\s*[مظ]'+NA,'g'),'$1 PM').replace(new RegExp('(?<![\\d:])(\\d{1,2}(?::\\d{2})?)\\s*ل'+NA,'g'),'$1 AM')
   .replace(/(\d)\s*و\s*(\d)/g,'$1 and $2').replace(/\sو(?=[A-Za-z])/g,' & ').replace(/^و(?=[A-Za-z])/,'& ');
  return out.replace(/،/g,',').replace(/؟/g,'?').replace(/؛/g,';');
}
var ATTRS=['placeholder','title','alt','aria-label'];
function node(n){
  if(n.nodeType===3){
    var p=n.parentNode;if(!p||/^(SCRIPT|STYLE)$/.test(p.nodeName))return;
    var v=n.nodeValue;
    if(n._en!==undefined&&v===n._en)return;
    if(AR.test(v)){n._ar=v;var o=tr(v);n._en=o;if(o!==v)n.nodeValue=o}
  }else if(n.nodeType===1){
    if(/^(SCRIPT|STYLE|SVG)$/i.test(n.nodeName))return;
    ATTRS.forEach(function(a){var v=n.getAttribute(a);if(v&&AR.test(v)){var k='_a'+a;if(n[k]===undefined||n[k+'e']!==v){n[k]=v;var o=tr(v);n[k+'e']=o;n.setAttribute(a,o)}}});
    if(n.nodeName==='INPUT'&&/^(submit|button)$/.test(n.type)&&AR.test(n.value)){n._av=n.value;n.value=tr(n.value)}
    for(var c=n.firstChild;c;c=c.nextSibling)node(c);
  }
}
function revert(n){
  if(n.nodeType===3){if(n._ar!==undefined&&n.nodeValue===n._en)n.nodeValue=n._ar;}
  else if(n.nodeType===1){
    ATTRS.forEach(function(a){var k='_a'+a;if(n[k]!==undefined&&n.getAttribute(a)===n[k+'e'])n.setAttribute(a,n[k])});
    if(n._av!==undefined)n.value=n._av;
    for(var c=n.firstChild;c;c=c.nextSibling)revert(c);
  }
}
var T0=document.title,M=document.querySelector('meta[name=description]'),M0=M&&M.content;
function apply(){
  busy=true;
  var d=document.documentElement;d.lang=en?'en':'ar';d.dir=en?'ltr':'rtl';
  if(en){node(document.body);document.title=tr(T0);if(M)M.content=tr(M0)}
  else{revert(document.body);document.title=T0;if(M)M.content=M0}
  var b=document.getElementById('i18n-btn');if(b)b.textContent=en?'عربي':'EN';
  busy=false;d.classList.remove('i18n-pending');
}
var mo=new MutationObserver(function(ms){
  if(busy||!en)return;busy=true;
  ms.forEach(function(m){
    if(m.type==='characterData')node(m.target);
    else if(m.type==='attributes')node(m.target);
    else m.addedNodes.forEach(node);
  });busy=false;
});
function init(){
  var b=document.createElement('button');b.id='i18n-btn';b.type='button';b.setAttribute('aria-label','Language');
  b.style.cssText='position:fixed;z-index:99999;bottom:14px;inset-inline-end:14px;font:600 13px/1 system-ui,sans-serif;padding:9px 13px;border-radius:999px;border:1px solid rgba(128,128,128,.45);background:rgba(20,20,20,.82);color:#fff;cursor:pointer;backdrop-filter:blur(6px)';
  b.onclick=function(){en=!en;try{localStorage.setItem('lang',en?'en':'ar')}catch(e){}apply()};
  document.body.appendChild(b);
  apply();
  mo.observe(document.body,{childList:true,subtree:true,characterData:true,attributes:true,attributeFilter:ATTRS});
}
['alert','confirm','prompt'].forEach(function(k){var f=window[k];window[k]=function(m){return f.call(window,en&&typeof m==='string'?tr(m):m)}});
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
