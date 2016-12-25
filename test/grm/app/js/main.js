'use strict';

var showMenu = document.getElementsByClassName('main-header__open-menu-icon')[0];
var burger = document.getElementsByClassName('burger')[0];
var menu = document.getElementsByClassName('menu')[0];
console.log(showMenu);

function toggleMenu(e) {
  menu.classList.toggle('menu-show');
}
showMenu.addEventListener('click', toggleMenu);
showMenu.addEventListener('click', function() {
  burger.classList.toggle('burger-clicked');
})
