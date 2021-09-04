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

const projectsContainer = document.querySelector('.projects');

function languages(techArray) {
  return `<ul>
    ${techArray.map((t) => `<li class="project-language">
    ${t}
    </li>`).join('')}
    </ul>`;
}

function project(p) {
  const index = projects.findIndex((pr) => pr.popupHeading === p.popupHeading);
  return ` <div class="project">
    <h2>${p.popupHeading}</h2>
    <p>${p.description}</p>
    <div class="languages">
    ${languages(p.languages)}

</div>
    <button class="project-btn" onclick="modal(${index})">See project</button>

</div>`;
}

projectsContainer.innerHTML = projects.map((p) => project(p)).join('');