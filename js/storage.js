const fullName = document.getElementById('name').value;
const mail = document.getElementById('email').value;
const textArea = document.getElementById('textarea').value;
function store() {
  const data = {
    fname: fullName,
    email: mail,
    textarea: textArea,
  };
  localStorage.setItem('formData', JSON.stringify(data));
}
const dataRetrieve = JSON.parse(localStorage.getItem('formData'));
if (dataRetrieve) {
  fullName = dataRetrieve.fname;
  mail = dataRetrieve.email;
  textArea = dataRetrieve.textarea;
}
// eslint-disable-next-line no-undef
form.addEventListener('input', store);