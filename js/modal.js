/* eslint-disable no-undef */
function modal(number) {
  const modalSection = document.querySelector('#modal');
  modalSection.style.display = 'flex';
  document.querySelector('#portfolio').classList.add('activeblur');
  document.querySelector('.about').classList.add('activeblur');
  document.querySelector('*').style.overflow = 'hidden';
  const modalHeading = document.querySelector('.modal-title');
  const modalList = document.querySelector('.modal-list');
  modalList.innerHTML = '';
  const modalDesc = document.querySelector('.modal-description');

  modalHeading.innerText = projects[number].popupHeading;

  for (let i = 0; i < projects[number].languages.length; i += 1) {
    const list = document.createElement('li');
    // eslint-disable-next-line no-undef
    list.textContent = projects[number].languages[i];
    modalList.appendChild(list);
  }

  // eslint-disable-next-line no-undef
  modalDesc.innerHTML = projects[number].description;
  document.querySelectorAll('.modal-btn > a')[0].href = projects[number].liveServerbtn;
  document.querySelectorAll('.modal-btn > a')[1].href = projects[number].sourceCode;
}

// eslint-disable-next-line no-unused-vars
function closeModal() {
  document.querySelector('#modal').style.display = 'none';
  document.querySelector('*').style.overflow = 'auto';
  document.querySelector('#portfolio').classList.remove('activeblur');
  document.querySelector('.about').classList.remove('activeblur');
}