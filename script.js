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
    name: 'The Fool',
    img: 'images/major-arcana/the-fool.jpg',
    description: 'Your path is about to change, let go of any baggage weighing you down and embrace opportunities with optimism. Free yourself of any worries and doubts, now is the time to be spontanious without a care.'
  },
  {
    name: 'magician',
    img: 'images/major-arcana/the-magician.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'high priestess',
    img: 'images/major-arcana/the-high-priestess.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'empress',
    img: 'images/major-arcana/the-empress.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'emperor',
    img: 'images/major-arcana/the-emperor.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'hierophant',
    img: 'images/major-arcana/the-hierophant.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'lovers',
    img: 'images/major-arcana/the-lovers.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'chariot',
    img: 'images/major-arcana/the-chariot.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'strength',
    img: 'images/major-arcana/strength.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'hermit',
    img: 'images/major-arcana/the-hermit.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'wheel of fortune',
    img: 'images/major-arcana/wheel-of-fortune.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'justice',
    img: 'images/major-arcana/justice.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'hanged man',
    img: 'images/major-arcana/the-hanged-man.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'death',
    img: 'images/major-arcana/death.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'temperance',
    img: 'images/major-arcana/temperance.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'devil',
    img: 'images/major-arcana/the-devil.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'tower',
    img: 'images/major-arcana/the-tower.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'star',
    img: 'images/major-arcana/the-star.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'moon',
    img: 'images/major-arcana/the-moon.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'sun',
    img: 'images/major-arcana/the-sun.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'judgement',
    img: 'images/major-arcana/judgement.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  },
  {
    name: 'world',
    img: 'images/major-arcana/the-world.jpg',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
  }
]

const container = document.querySelector('.container');
const descriptions = document.querySelector('.descriptions');

const cards = shuffleCards(cardArray);
const chosenCards = [];

function createCards() {
  for (let i = 0; i < 5; i++) {
    const cardImg = document.createElement('img');

    cardImg.setAttribute('src', 'images/card-back.png');
    cardImg.setAttribute('id', 'card-img');
    container.appendChild(cardImg);
    // reveal card
    cardImg.addEventListener('click', function () {

      cardImg.setAttribute('src', cards[0].img);
      chosenCards.push(cards[0]);
      // remove the first card to prevent duplicates
      cards.shift();

      revealMeaning();
    }, { once: true })
  }
}

function shuffleCards(arr) {
  // spread array into a list of arguments to avoid "NaN" output
  const shuffledCards = [...arr].sort(() => 0.5 - Math.random());

  return shuffledCards;
}

function revealMeaning() {
  if (chosenCards.length === 5) {
    chosenCards.forEach(card => {
      const reading = document.createElement('p');
      const text = document.createTextNode(card.description);

      descriptions.appendChild(reading);
      reading.appendChild(text);

      fadeCards();
    })
  }
}

function fadeCards() {
  setInterval(function () {
    if (!container.style.opacity) {
      container.style.opacity = 1;
    }

    if (container.style.opacity > 0) {
      container.style.opacity -= 0.1;
    }
  }, 300);
}

createCards();




