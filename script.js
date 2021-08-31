const mainMenu = document.querySelector('.menu-list');
const closeMenu= document.querySelector('.close-menu');
const openMenu= document.querySelector('.hamburger');


openMenu.addEventListener('click',show);

closeMenu.addEventListener('click',close);

function show() {
    closeMenu.style.display='block';
    mainMenu.style.display='flex';
    mainMenu.style.top='0';
    document.getElementById("mail").style.display="none";
    document.getElementById("menu-icon").style.display="none";
    
    
}

function close() {
    mainMenu.style.display='none';
    document.getElementById("menu-icon").style.display="block";
    closeMenu.style.display='none';


}