const projects = [

  {
    popupHeading: 'Multi-Post Stories 1',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: './images/prjimg.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',

  },
  {
    popupHeading: 'Multi-Post Stories 2',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: './images/prjimg.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },
  {
    popupHeading: 'Multi-Post Stories 3',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: './images/prjimg.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },

  {
    popupHeading: 'Multi-Post Stories 4',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: './images/prjimg.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },

  {
    popupHeading: 'Multi-Post Stories 5',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: './images/prjimg.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },

  {
    popupHeading: 'Multi-Post Stories 6',
    languages: ['html', 'Bootstrap', 'Ruby on Rails'],
    images: './images/prjimg.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    liveServerbtn: 'https://basnetlaxmi.github.io/my-portfolio/',
    sourceCode: 'https://github.com/basnetlaxmi/my-portfolio ',
  },

];

let iterationJ = 0;

for (let i = 1; i < projects.length; i += 1) {
  document.querySelectorAll('.projects .project')[i].style.backgroundImage = `url(${projects[i].images})`;
  document.querySelectorAll('.project > h2')[i].innerText = projects[i].popupHeading;
  document.querySelectorAll('.project > p')[i].innerText = projects[i].description;
  for (let j = 0; j < projects[i].languages.length; j += 1) {
    document.querySelectorAll('.languages > ul')[i].appendChild(document.createElement('li'));
    iterationJ += 1;
  }
}

const projects2 = [];
for (let i = 0; i < projects.length; i += 1) {
  Object.values(projects[i].languages).forEach((val) => {
    projects2.push(val);
  });
}

for (let j = 16; j < 16 + iterationJ; j += 1) {
  document.querySelectorAll('li')[j].classList.add('project-language');
  document.querySelectorAll('li')[j].innerText = projects2[j - 16];
}

// Add buttons on click events using JS

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
  const modalDesc = document.querySelector('.modal-description');

  modalHeading.innerText = projects[number].popupHeading;

  for (let i = 0; i < projects[number].languages.length; i += 1) {
    const list = document.createElement('li');
    list.textContent = projects[number].languages[i];
    modalList.appendChild(list);
  }

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