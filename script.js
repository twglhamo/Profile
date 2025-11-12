const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    // Optionally toggle a menu icon change (like from 'bx-menu' to 'bx-x')
    menuIcon.classList.toggle('bx-x');
  };

const header = document.querySelector('.header');

  // Toggle mobile menu
  menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
  };

  // Add 'scrolled' class when scrolling down
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });