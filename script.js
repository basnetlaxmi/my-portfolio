const makeMenuDisappear = document.querySelector('.icon');
const firstMainPage = document.querySelector('.first-mainpage');
const hamburgerPage = document.querySelector('.hamburger-page');
const hambClose = document.querySelector('.close-ham-img');
const otherClose = document.querySelector('.menu-inside-hamb-page');

function show() {
  firstMainPage.style.display = 'none';
  hamburgerPage.style.display = 'block';
}

function close() {
  firstMainPage.style.display = 'block';
  hamburgerPage.style.display = 'none';
}

makeMenuDisappear.addEventListener('click', show);
hambClose.addEventListener('click', close);
otherClose.addEventListener('click', close);