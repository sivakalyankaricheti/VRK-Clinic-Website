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
  // Replace the email address and WhatsApp number below with the clinic's real contact details before publishing.
  window.open(`https://wa.me/919000000000?text=${details}`, '_blank', 'noopener');
  window.location.href = `mailto:hello@rekhaclinic.com?subject=${encodeURIComponent('Appointment request from ' + name)}&body=${details}`;
  confirmation.textContent = 'Your request is ready in WhatsApp and email. Please send both messages to confirm.';
});
