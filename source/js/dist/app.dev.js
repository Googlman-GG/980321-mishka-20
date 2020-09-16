var navWrappers = Array.prototype.slice.call(document.querySelectorAll('.main-nav')),
    navToogler = document.querySelector('.page-header__toggle');
navToogler.addEventListener('click', function (_event) {
  navWrappers.forEach(function (nav) {
    nav.classList.toggle('main-nav--show');
  });
});

function toggleShow() {
  navWrappers.forEach(function (nav) {
    nav.classList.add('main-nav--nojs');
  });
}

navToogler.addEventListener('click', toggleShow);
toggleShow();
