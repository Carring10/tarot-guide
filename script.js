if (window.location.pathname == '/' | 'index.html') {
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
    img: 'images/major-arcana/the-fool.jpg',
    id: 1
  },
  {
    name: 'magician',
    img: 'images/major-arcana/the-magician.jpg',
    id: 2
  },
  {
    name: 'high priestess',
    img: 'images/major-arcana/the-high-priestess.jpg',
    id: 3
  },
  {
    name: 'empress',
    img: 'images/major-arcana/the-empress.jpg',
    id: 4
  },
  {
    name: 'emperor',
    img: 'images/major-arcana/the-emperor.jpg',
    id: 5
  },
  {
    name: 'hierophant',
    img: 'images/major-arcana/the-hierophant.jpg',
    id: 6
  },
  {
    name: 'lovers',
    img: 'images/major-arcana/the-lovers.jpg',
    id: 7
  },
  {
    name: 'chariot',
    img: 'images/major-arcana/the-chariot.jpg',
    id: 8
  },
  {
    name: 'strength',
    img: 'images/major-arcana/the-strength.jpg',
    id: 9
  },
  {
    name: 'hermit',
    img: 'images/major-arcana/the-hermit.jpg',
    id: 10
  },
  {
    name: 'wheel of fortune',
    img: 'images/major-arcana/wheel-of-fortune.jpg',
    id: 11
  },
  {
    name: 'justice',
    img: 'images/major-arcana/justice.jpg',
    id: 12
  },
  {
    name: 'hanged man',
    img: 'images/major-arcana/the-hanged-man.jpg',
    id: 13
  },
  {
    name: 'death',
    img: 'images/major-arcana/death.jpg',
    id: 14
  },
  {
    name: 'temperance',
    img: 'images/major-arcana/temperance.jpg',
    id: 15
  },
  {
    name: 'devil',
    img: 'images/major-arcana/the-devil.jpg',
    id: 16
  },
  {
    name: 'tower',
    img: 'images/major-arcana/the-tower.jpg',
    id: 17
  },
  {
    name: 'star',
    img: 'images/major-arcana/the-star.jpg',
    id: 18
  },
  {
    name: 'moon',
    img: 'images/major-arcana/the-moon.jpg',
    id: 19
  },
  {
    name: 'sun',
    img: 'images/major-arcana/the-sun.jpg',
    id: 20
  },
  {
    name: 'judgement',
    img: 'images/major-arcana/judgement.jpg',
    id: 21
  },
  {
    name: 'world',
    img: 'images/major-arcana/the-world.jpg',
    id: 22
  }
]

const container = document.querySelector('.container');

function createCards() {
  for (let i = 0; i < 5; i++) {
    const cardImg = document.createElement('img');

    cardImg.setAttribute('src', 'images/card-back.png');
    container.appendChild(cardImg);

    const card = shuffleCards(cardArray, 1);
    cardImg.addEventListener('click', function () {
      cardImg.setAttribute('src', card[0].img)
    }
    )
  }
}


function shuffleCards(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, num);
}

createCards();

