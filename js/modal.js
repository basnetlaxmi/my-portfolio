const projectList = [
  {
    projectTitle: 'Data Dashboard Healthcare',
    popupHeading: 'Multi-Post Stories 1',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    projectDesc: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',

  },
  {
    projectTitle: 'Data Dashboard Healthcare',
    popupHeading: 'Multi-Post Stories 2',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    projectDesc: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    popupHeading: 'Multi-Post Stories 3',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    projectDesc: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    popupHeading: 'Multi-Post Stories 4',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    projectDesc: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    popupHeading: 'Multi-Post Stories 5',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    projectDesc: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },

  {
    projectTitle: 'Profesional Art Printing Data',
    popupHeading: 'Multi-Post Stories 6',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: 'images/mb-modal.png',
    projectDesc: 'A daily selection of privately personalized reads no accounts or sign-ups required. has been the industrys standard',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },
]

// eslint-disable-next-line no-unused-vars


for (let i = 0; i < projectList.length; i += 1) {
  //document.querySelectorAll('.project-logo')[i].src = arr[i].logo;
  document.querySelectorAll('.project-name')[i].innerText = projectList[i].projectTitle;
  document.querySelectorAll('.project-desc')[i].innerText = projectList[i].projectDesc;
  const li = document.querySelector('.lanuguages-list');
  
  for (let i = 0; i < projectList[i].languages.length; i += 1) {
    const list = document.createElement('li');
    list.textContent = projectList[i].languages[i];
    li.appendChild(list);
  }
}

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

  modalHeading.innerText = projectList[number].popupHeading;

  for (let i = 0; i < projectList[number].languages.length; i += 1) {
    const list = document.createElement('li');
    list.textContent = projectList[number].languages[i];
    modalList.appendChild(list);
  }

  modalDesc.innerHTML = projectList[number].description;
  document.querySelectorAll('.modal-btn > a')[0].href = projectList[number].liveServerbtn;
  document.querySelectorAll('.modal-btn > a')[1].href = projectList[number].sourceCode;
}

// eslint-disable-next-line no-unused-vars
function closeModal() {
  document.querySelector('#modal').style.display = 'none';
  document.querySelector('*').style.overflow = 'auto';
  document.querySelector('#portfolio').classList.remove('activeblur');
  document.querySelector('.about').classList.remove('activeblur');
}
