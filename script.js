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
    name: 'The Magician',
    img: 'images/major-arcana/the-magician.jpg',
    description: "Don't underestimate your talents! You have the skills to accomplish your goals at this time, take advantage of your abilities and continue with confidence."
  },
  {
    name: 'The High Priestess',
    img: 'images/major-arcana/the-high-priestess.jpg',
    description: "Trust your instincts before anything else. No need to seek advice from any outside sources, because you already have the knowledge and wisdom within to guide yourself."
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

// spread array into a list of arguments to avoid "NaN" output
const shuffledCards = [...cardArray].sort(() => 0.5 - Math.random());
const chosenCards = [];

function createCards() {
  for (let i = 0; i < 5; i++) {
    const card = document.createElement('img');

    card.setAttribute('src', 'images/card-back.png');
    card.setAttribute('id', 'card-img');
    container.appendChild(card);
    card.style.height = '400px';
    // reveal card
    card.addEventListener('click', function () {

      card.setAttribute('src', shuffledCards[0].img);
      chosenCards.push(shuffledCards[0]);
      // remove the first card to prevent duplicates
      shuffledCards.shift();

      revealMeaning();
    }, { once: true })
  }
}

function revealMeaning() {
  if (chosenCards.length === 5) {
    chosenCards.forEach(card => {
      const p = document.createElement('p');
      const text = document.createTextNode(card.description);

      descriptions.appendChild(p);
      p.appendChild(text);
    })
    fadeOutCards();
    fadeInMeaning();
  }
}

function fadeOutCards() {
  const fadeOutInterval = setInterval(function () {
    if (!container.style.opacity) {
      container.style.opacity = 1;
    }

    if (container.style.opacity > 0) {
      container.style.opacity -= 0.05;
    } else {
      clearInterval(fadeOutInterval);
    }
  }, 100)
}

function fadeInMeaning() {
  const fadeInInterval = setInterval(function () {
    if (!descriptions.style.opacity) {
      descriptions.style.opacity = 0;
    }

    if (descriptions.style.opacity < 1) {
      descriptions.style.opacity += 0.05;
    } else {
      clearInterval(fadeInInterval);
    }
    console.log(descriptions.style.opacity)
  }, 100)
}

createCards();







