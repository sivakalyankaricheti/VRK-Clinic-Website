const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menu.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

const form = document.querySelector('#appointment-form');
const confirmation = document.querySelector('.form-success');
const dateField = form.querySelector('[name="date"]');
dateField.min = new Date().toISOString().split('T')[0];

form.addEventListener('submit', async event => {
  event.preventDefault();
  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;
  submitButton.textContent = 'Sending request…';
  confirmation.textContent = '';
  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (!response.ok) throw new Error('Unable to send request');
    form.reset();
    dateField.min = new Date().toISOString().split('T')[0];
    confirmation.textContent = 'Thank you — your appointment request has been sent to Dr. Rekha.';
  } catch (error) {
    confirmation.textContent = 'We could not send your request. Please call +91 97012 18130.';
  } finally {
    submitButton.disabled = false;
    submitButton.innerHTML = 'Send appointment request <span>→</span>';
  }
});
