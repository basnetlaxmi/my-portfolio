function store() {
  const data = {

    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
  };

  localStorage.setItem('formData', JSON.stringify(data));
}