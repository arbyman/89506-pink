var menu = document.querySelector('.main-nav');
var button = document.querySelector('.page-header__toggle-menu');

menu.classList.remove('main-nav--no-js');

button.addEventListener('click', menuToggle);

function menuToggle() {
  menu.classList.toggle('main-nav--opened');
  button.classList.toggle('page-header__toggle-menu--close');
};
