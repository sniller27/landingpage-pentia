// Select DOM Items
const navbar = document.querySelector('nav');
const burgerMenu = document.querySelector('.burger-menu');
const leftMenu = document.querySelector('.left-menu');

// Set Initial State Of Menu
let showMenu = false;

navbar.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    burgerMenu.classList.add('menu-open');
    navbar.classList.add('menu-open');
    leftMenu.classList.add('menu-open');
    // menu.classList.add('show');
    // menuNav.classList.add('show');
    // menuBranding.classList.add('show');
    // navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    burgerMenu.classList.remove('menu-open');
    navbar.classList.remove('menu-open');
    leftMenu.classList.remove('menu-open');
    // menu.classList.remove('show');
    // menuNav.classList.remove('show');
    // menuBranding.classList.remove('show');
    // navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
	
}