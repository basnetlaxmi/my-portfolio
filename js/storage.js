function store() {
  const data = {

    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
  };

  localStorage.setItem('formData', JSON.stringify(data));
}

function preFill() {
  const dataRetrieve = JSON.parse(localStorage.getItem('formData')) ;
  
  if (dataRetrieve) {
    
  }
  }
const submit = document.getElementById('sub-btn');
submit.addEventListener('click', store, preFill);



// console.log(dataRetrieve);