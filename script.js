const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function addStickyClass() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('sticky')
  } else {
    navbar.classList.remove('sticky');
  }
}

window.onscroll = function () {
  addStickyClass()
};