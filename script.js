const hamburgerMenu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close');
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', function () {
  navList.classList.add('active');
});
closeMenu.addEventListener('click', function () {
  navList.classList.remove('active');
});
