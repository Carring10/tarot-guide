if (window.location.pathname == '/index.html') {
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
}

const cardArray = [
  {
    name: 'Fool',
    img: 'images/major-arcana/the-fool.jpg'
  },
  {
    name: 'Magician',
    img: 'images/major-arcana/the-magician.jpg'
  }
]

const container = document.querySelector('.container')
const card = document.createElement('img')
card.setAttribute('src', 'images/major-arcana/the-fool.jpg')
container.appendChild(card)

console.log(cardArray[0].name);

