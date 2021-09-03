const fullName = document.getElementById('name').value;
const mail = document.getElementById('email').value;
function store() {
  const data = {
    fname: fullName,
    email: mail,
  };

  localStorage.setItem('formData', JSON.stringify(data));
}

function preFill() {
  const dataRetrieve = JSON.parse(localStorage.getItem('formData'));

  if (dataRetrieve) {
    fullName.value = dataRetrieve.fname
  }
}
const submit = document.getElementById('sub-btn');
submit.addEventListener('click', store, preFill);

// console.log(dataRetrieve);