const navWrapper = document.querySelector('.navigation-wrapp'),
  navToogler = document.querySelector('.main-nav__toggle');
navToogler.addEventListener('click', function (event) {
  navWrapper.classList.toggle('main-nav__list--show');
});
