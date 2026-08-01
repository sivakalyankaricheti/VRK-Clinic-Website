const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const form = document.querySelector('#appointment-form');
const confirmation = document.querySelector('.form-success');
const dateField = form.querySelector('[name="date"]');
dateField.min = new Date().toISOString().split('T')[0];
form.addEventListener('submit', event => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name'), phone = data.get('phone'), email = data.get('email'), date = data.get('date'), message = data.get('message') || 'Not provided';
  const details = `Appointment request%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AEmail: ${encodeURIComponent(email)}%0APreferred date: ${encodeURIComponent(date)}%0AConcern: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/919701218130?text=${details}`, '_blank', 'noopener');
  confirmation.textContent = 'Your appointment request is ready in WhatsApp. Please send the message to confirm.';
  confirmation.textContent = 'Your request is ready in WhatsApp and email. Please send both messages to confirm.';
});
