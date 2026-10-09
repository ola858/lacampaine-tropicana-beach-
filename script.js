const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
document.querySelectorAll('[data-current-year]').forEach(el => el.textContent = new Date().getFullYear());
document.querySelectorAll('form[data-demo-form]').forEach(form => form.addEventListener('submit', e => {
  e.preventDefault();
  const note = form.querySelector('.form-response');
  if (note) note.textContent = 'Thank you! This demonstration form is ready to connect to a real booking or email service before launch.';
  form.reset();
}));
