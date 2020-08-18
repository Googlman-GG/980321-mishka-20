const navWrappers = Array.prototype.slice.call(document.querySelectorAll('.main-nav__list')),
  navToogler = document.querySelector('.main-nav__toggle');
navToogler.addEventListener('click', function (_event) {
  navWrappers.forEach(function(nav) {
      nav.classList.toggle('main-nav__list--show');
  })
});
