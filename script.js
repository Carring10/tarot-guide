if (window.location.pathname == '/') {
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
    name: 'fool',
    img: 'images/major-arcana/the-fool.jpg'
  },
  {
    name: 'magician',
    img: 'images/major-arcana/the-magician.jpg'
  },
  {
    name: 'high priestess',
    img: 'images/major-arcana/the-high-priestess.jpg'
  },
  {
    name: 'empress',
    img: 'images/major-arcana/the-empress.jpg'
  },
  {
    name: 'emperor',
    img: 'images/major-arcana/the-emperor.jpg'
  },
  {
    name: 'hierophant',
    img: 'images/major-arcana/the-hierophant.jpg'
  },
  {
    name: 'lovers',
    img: 'images/major-arcana/the-lovers.jpg'
  },
  {
    name: 'chariot',
    img: 'images/major-arcana/the-chariot.jpg'
  },
  {
    name: 'strength',
    img: 'images/major-arcana/the-strength.jpg'
  },
  {
    name: 'hermit',
    img: 'images/major-arcana/the-hermit.jpg'
  },
  {
    name: 'wheel of fortune',
    img: 'images/major-arcana/wheel-of-fortune.jpg'
  },
  {
    name: 'justice',
    img: 'images/major-arcana/justice.jpg'
  },
  {
    name: 'hanged man',
    img: 'images/major-arcana/the-hanged-man.jpg'
  },
  {
    name: 'death',
    img: 'images/major-arcana/death.jpg'
  },
  {
    name: 'temperance',
    img: 'images/major-arcana/temperance.jpg'
  },
  {
    name: 'devil',
    img: 'images/major-arcana/the-devil.jpg'
  },
  {
    name: 'tower',
    img: 'images/major-arcana/the-tower.jpg'
  },
  {
    name: 'star',
    img: 'images/major-arcana/the-star.jpg'
  },
  {
    name: 'moon',
    img: 'images/major-arcana/the-moon.jpg'
  },
  {
    name: 'sun',
    img: 'images/major-arcana/the-sun.jpg'
  },
  {
    name: 'judgement',
    img: 'images/major-arcana/judgement.jpg'
  },
  {
    name: 'world',
    img: 'images/major-arcana/the-world.jpg'
  }
]

const container = document.querySelector('.container');

function createCards() {
  for (let i = 0; i < 5; i++) {
    const cardImg = document.createElement('img');

    cardImg.setAttribute('src', 'images/card-back.png');
    container.appendChild(cardImg);

    cardImg.addEventListener('click', console.log(shuffleCards(cardArray, 5)));
  }
}


function shuffleCards(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}
// document.getElementById("card-back").addEventListener("click", console.log(result))

createCards();

