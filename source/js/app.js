const navWrapper = document.querySelector('.main-nav__list'),
  navToogler = document.querySelector('.main-nav__toggle');
navToogler.addEventListener('click', function (event) {
  navWrapper.classList.toggle('main-nav__list--show');
});