/* Arabic/English switch. Default language: English. */
(function(){
var D={"تدعم لوحة المفاتيح": "Supports the keyboard", "مؤقّت بومودورو": "Pomodoro timer", "مولّد كلمات المرور": "Password generator", "النمر": "The Tiger", "خطأ": "Error", "الخميس": "Thursday", "الأرض": "Earth", "الأربعاء": "Wednesday", "ما عاصمة المملكة العربية السعودية؟": "What is the capital of Saudi Arabia?", "ابحث": "Search", "مايو": "May", "زحل": "Saturn", "اكتب ملاحظتك": "Write your note", "أبريل": "April", "لا توجد مهام": "No tasks", "ميل": "mile", "حفظ": "Save", "الدمام": "Dammam", "المتبقية": "Remaining", "اختبار معلومات": "Trivia quiz", "ضعيفة": "Weak", "العنوان": "Address", "المصروف": "Expense", "دخل ومصروف ورصيد": "Income, expenses and balance", "الطول:": "Length:", "لا توجد ملاحظات": "No notes", "الرياض": "Riyadh", "الأحد": "Sunday", "خذ استراحة.": "Take a break.", "الملاحظات": "Notes", "ما رمز الماء الكيميائي؟": "What is the chemical symbol for water?", "أوقية": "ounce", "جديدة": "New", "اختبار معلومات عامة": "General knowledge quiz", "تركيز": "Concentration", "الاثنين": "Monday", "انتهى وقت التركيز!": "Focus time is over!", "طن": "ton", "رموز": "Symbols", "ابدأ": "Start", "محوّل الوحدات": "Unit converter", "سبتمبر": "September", "سنتيمتر": "centimeter", "جلسات مكتملة اليوم:": "Sessions completed today:", "أحرف كبيرة": "Uppercase", "إضافة": "Add", "فهرنهايت": "Fahrenheit", "مكة": "Makkah", "جيد، حاول مرة أخرى": "Good, try again", "راحة": "Comfort", "نسخ": "Copy", "دخل": "Income", "أسئلة ونتيجة": "Questions and result", "الكل": "All", "أغسطس": "August", "تم": "done", "أكتوبر": "October", "نوفمبر": "November", "بدون عنوان": "Untitled", "المتبقي:": "Remaining:", "إعادة الاختبار": "Retake the quiz", "المشتري": "Buyer", "مارس": "March", "الحصان": "Horse", "جدة": "Jeddah", "أضف مهمة جديدة": "Add a new task", "فبراير": "February", "متوسطة": "Medium", "يوليو": "July", "الإثنين": "Monday", "توليد جديدة": "Generate new", "وقت الراحة": "Rest time", "ممتاز!": "Excellent!", "اختر نوعًا واحدًا على الأقل": "Choose at least one type", "من": "of", "إغلاق": "Close", "أرقام": "Numbers", "أي لغة تُستخدم لتنسيق صفحات الويب؟": "Which language is used to format web pages?", "أكبر كوكب في المجموعة الشمسية؟": "The largest planet in the solar system?", "الفهد": "Al-Fahd", "بحث وحفظ في المتصفح": "Search and save in the browser", "وقت التركيز": "Focus time", "كيلوغرام": "kilogram", "الحرارة": "Temperature", "أسرع حيوان بري؟": "Fastest land animal?", "مصروف": "Expense", "كم عدد أيام الأسبوع؟": "How many days are in a week?", "متتبّع المصروفات": "Expense tracker", "بومودورو": "Pomodoro", "حذف": "Delete", "ر.س": "SAR", "مئوية": "Celsius", "إعادة": "Reset", "قائمة المهام": "Task list", "المبلغ": "Amount", "كم عدد القارات؟": "How many continents are there?", "الآلة الحاسبة": "Calculator", "المنجزة": "Completed", "عشوائي آمن وقياس القوة": "Secure random and strength meter", "متر": "m", "المريخ": "Mars", "تحتاج لمراجعة": "Needs review", "السؤال": "Question", "السبت": "Saturday", "الوصف": "Description", "انتهت الراحة!": "Rest is over!", "ما ناتج": "What is the result of", "تطبيقات الويب": "Web apps", "أحرف صغيرة": "Lowercase", "كيلومتر": "kilometer", "الدخل": "Income", "تصفية وحفظ تلقائي": "Filtering and auto-save", "قدم": "ft", "إيقاف مؤقت": "Pause", "طول ووزن وحرارة": "Height, weight and temperature", "الثلاثاء": "Tuesday", "كلفن": "Kelvin", "الأسد": "The Lion", "تركيز وراحة": "Focus and rest", "إنش": "inch", "رطل": "lb", "و": "and", "الجمعة": "Friday", "يناير": "January", "الوزن": "Weight", "يونيو": "June", "ديسمبر": "December", "الطول": "Length", "قوية": "Strong", "غرام": "grams"};
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
