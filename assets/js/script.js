let hamburger = document.querySelector('.hamburger-menu');
let navCollapse = document.querySelector('.nav__collapse');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('is-active');
  navCollapse.classList.toggle('is-active');
});