"use strict";function toggleMenu(e){menu.classList.toggle("menu-show")}var showMenu=document.getElementsByClassName("main-header__open-menu-icon")[0],burger=document.getElementsByClassName("burger")[0],menu=document.getElementsByClassName("menu")[0];console.log(showMenu),showMenu.addEventListener("click",toggleMenu),showMenu.addEventListener("click",function(){burger.classList.toggle("burger-clicked")});