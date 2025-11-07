const menuBtn = document.querySelector('.menu-btn');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        document
          .querySelector('header .navbar a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
};

// Toggle menu for mobile
menuBtn.onclick = () => {
  navbar.classList.toggle('active');
};
