const form = document.getElementById('contact');
const email = document.getElementById('email');

const emailError = document.querySelector('small');
const msg = 'Your email must be lowercase.';

function showError() {
  emailError.innerText = msg;
}

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    showError();
    event.preventDefault();
  }
});
