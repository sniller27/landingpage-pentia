// Select DOM Items
const buttonPane = document.querySelector('.button-pane');
const navbar = document.querySelector('nav');
const burgerMenu = document.querySelector('.burger-menu');
const leftMenu = document.querySelector('.left-menu');

// Set Initial State Of Menu
let showMenu = false;

const toggleMenu = () => {

  if (!showMenu) {

    burgerMenu.classList.add('menu-open');
    navbar.classList.add('menu-open');
    leftMenu.classList.add('menu-open');

    // Set Menu State
    showMenu = true;

  } else {

    burgerMenu.classList.remove('menu-open');
    navbar.classList.remove('menu-open');
    leftMenu.classList.remove('menu-open');

    // Set Menu State
    showMenu = false;

  }
	
};

buttonPane.addEventListener('click', toggleMenu);
