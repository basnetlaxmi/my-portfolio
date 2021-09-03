const fullName = document.getElementById('name');
const mail = document.getElementById('email');
const submit = document.getElementById('sub-btn');

function store() {
  const data = {
    fname: fullName.value,
    email: mail.value,
  };

  localStorage.setItem('formData', JSON.stringify(data));

  function preFill() {
    const dataRetrieve = JSON.parse(localStorage.getItem('formData'));
  
    if (dataRetrieve) {
      fullName.value = dataRetrieve.fname;
      mail.value = dataRetrieve.email;
    }
  }
  
  submit.addEventListener('click', store, preFill);