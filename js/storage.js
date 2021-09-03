const fullName = document.getElementById('name');
const mail = document.getElementById('email');
function store() {
  const data = {
    fname: fullName.value,
    email: mail.value,
  };
  localStorage.setItem('formData', JSON.stringify(data));
}
const dataRetrieve = JSON.parse(localStorage.getItem('formData'));
if (dataRetrieve) {
  fullName.value = dataRetrieve.fname;
  mail.value = dataRetrieve.email;
}
// eslint-disable-next-line no-undef
form.addEventListener('input', store);