const fullName = document.getElementById('name').value;
const mail = document.getElementById('email').value;
const submit = document.getElementById('sub-btn');

function store() {
  const data = {
    fname: fullName,
    email: mail,
  };

  localStorage.setItem('formData', JSON.stringify(data));



