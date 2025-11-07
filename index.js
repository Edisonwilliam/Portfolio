const menuBtn = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
      });
    }
  });
};



menuBtn.onclick = function() {
  menuBtn.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}