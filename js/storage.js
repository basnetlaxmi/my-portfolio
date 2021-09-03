const fullName = document.getElementById('name');
const mail = document.getElementById('email');
const textArea = document.getElementById('textarea');
function store() {
  const data = {
    fname: fullName.value,
    email: mail.value,
    textarea: textArea.value,
  };
  localStorage.setItem('formData', JSON.stringify(data));
}
const dataRetrieve = JSON.parse(localStorage.getItem('formData'));
if (dataRetrieve) {
  fullName.value = dataRetrieve.fname;
  mail.value = dataRetrieve.email;
  textArea.value = dataRetrieve.textarea;
}
// eslint-disable-next-line no-undef
form.addEventListener('input', store);