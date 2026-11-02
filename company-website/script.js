// قائمة الجوال
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => { if (e.target.tagName === 'A') menu.classList.remove('open'); });

// عدّاد الإحصائيات
const counters = document.querySelectorAll('[data-count]');
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, end = +el.dataset.count;
    let n = 0; const step = Math.max(1, Math.ceil(end / 50));
    const t = setInterval(() => { n = Math.min(end, n + step); el.textContent = n + '+'; if (n >= end) clearInterval(t); }, 30);
    io.unobserve(el);
  });
}, { threshold: .5 });
counters.forEach(c => io.observe(c));

// نموذج التواصل (تجريبي: لا يرسل بيانات لأي خادم)
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, msg = f.querySelector('.form-msg');
  if (!f.checkValidity()) { msg.textContent = 'يرجى تعبئة جميع الحقول بشكل صحيح.'; return; }
  msg.textContent = 'شكرًا لك! تم استلام رسالتك (نموذج تجريبي).';
  f.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
