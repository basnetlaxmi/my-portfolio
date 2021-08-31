const makeMenuDisappear = document.querySelector('.icon');
const firstMainPage = document.querySelector('.first-mainpage');
const hamburgerPage = document.querySelector('.hamburger-page');
const hambClose = document.querySelector('.close-ham-img');
const otherClose = document.querySelector('.menu-inside-hamb-page');

makeMenuDisappear.addEventListener ('click', show);
function show() {
    firstMainPage.style.display = 'none';
    hamburgerPage.style.display = 'block';
}
hambClose.addEventListener('click', close);
otherClose.addEventListener('click', close);

function close() {
    firstMainPage.style.display = 'block';
    hamburgerPage.style.display = 'none';
}
