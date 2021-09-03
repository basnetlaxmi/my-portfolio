const projectList = {
  firstProject: {
    popupHeading: 'Multi-Post Stories 1',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',

  },
  secondProject: {
    popupHeading: 'Multi-Post Stories 2',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },
  thirdProject: {
    popupHeading: 'Multi-Post Stories 3',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },

  fourthProject: {
    popupHeading: 'Multi-Post Stories 4',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },

  fifthProject: {
    popupHeading: 'Multi-Post Stories 5',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },

  sixthProject: {
    popupHeading: 'Multi-Post Stories 6',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },
};

const projects = [
  projectList.firstProject,
  projectList.secondProject,
  projectList.thirdProject,
  projectList.fourthProject,
  projectList.fifthProject,
  projectList.sixthProject,
];

// eslint-disable-next-line no-unused-vars
function modal(number) {
  const modalSection = document.querySelector('#modal');
  modalSection.style.display = 'flex';
  document.querySelector('#portfolio').classList.add('activeblur');
  document.querySelector('.about').classList.add('activeblur');
  document.querySelector('*').style.overflow = 'hidden';
  const modalHeading = document.querySelector('.modal-title');
  const modalList = document.querySelector('.modal-list');
  modalList.innerHTML = '';
<<<<<<< HEAD
  // eslint-disable-next-line no-unused-vars
  const modalImg = document.querySelector('.modal-img');
=======
>>>>>>> 2140e608134b71a0e909ee68d77052f21f8c98b1
  const modalDesc = document.querySelector('.modal-description');

  modalHeading.innerText = projects[number].popupHeading;

  for (let i = 0; i < projects[number].languages.length; i += 1) {
    const list = document.createElement('li');
    list.textContent = projects[number].languages[i];
    modalList.appendChild(list);
  }

  modalDesc.innerHTML = projects[number].description;
<<<<<<< HEAD
=======
  document.querySelectorAll('.modal-btn > a')[0].href = projects[number].liveServerbtn;
  document.querySelectorAll('.modal-btn > a')[1].href = projects[number].sourceCode;
>>>>>>> 2140e608134b71a0e909ee68d77052f21f8c98b1
}

// eslint-disable-next-line no-unused-vars
function closeModal() {
  document.querySelector('#modal').style.display = 'none';
  document.querySelector('*').style.overflow = 'auto';
  document.querySelector('#portfolio').classList.remove('activeblur');
  document.querySelector('.about').classList.remove('activeblur');
}
<<<<<<< HEAD
=======

// function toggle() {
// const closed = document.querySelector('#close-btn');
// closed.classList.toggle('hidden');
// }
// toggle();
>>>>>>> 2140e608134b71a0e909ee68d77052f21f8c98b1
