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
    situation: 'It appears your path is about to change, let go of any baggage weighing you down and embrace opportunities with optimism. Free yourself of any worries and doubts, now is the time to be spontanious without a care.',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'The Magician',
    img: 'images/major-arcana/the-magician.jpg',
    situation: "Don't underestimate your talents! You have the skills to accomplish your goals at this time, take advantage of your abilities and continue with confidence.",
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'The High Priestess',
    img: 'images/major-arcana/the-high-priestess.jpg',
    situation: "Trust your instincts before anything else. No need to seek advice from outside sources, you already have the knowledge and wisdom within to guide yourself.",
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'The Empress',
    img: 'images/major-arcana/the-empress.jpg',
    situation: 'This is an indicator that you are entering a period of creativity. During this time, harness your inspiration to bring your ideas to fruition.',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'The Emperor',
    img: 'images/major-arcana/the-emperor.jpg',
    situation: 'Take this as a sign to work towards stability by practicing hard work and discipline to bring you closer to reaching your goals. You will benefit from consulting an authority figure in your life, either a parent or boss could act as a mentor.',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'The Hierophant',
    img: 'images/major-arcana/the-hierophant.jpg',
    situation: 'If you are considering challenging the status quo, now is not the time to shake things up. Focus on tried and true methods for your future endeavors.',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'The Lovers',
    img: 'images/major-arcana/the-lovers.jpg',
    situation: 'Looks like you have love in the forecast. This can indicate a relationship, and though it is usually romantic in nature, it could be any sort of relationship where good communication is involved.',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'The Chariot',
    img: 'images/major-arcana/the-chariot.jpg',
    situation: 'It appears your current undertakings are progressing. Conquer the upcoming challenges with confidence, you got this.',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'Strength',
    img: 'images/major-arcana/strength.jpg',
    situation: "No matter what you are facing right now, know that you have the power to transcend these obstacles. You are resilient, and your willpower will lead to positive results. You may be tested now but don't lose hope!",
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'hermit',
    img: 'images/major-arcana/the-hermit.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'wheel of fortune',
    img: 'images/major-arcana/wheel-of-fortune.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'justice',
    img: 'images/major-arcana/justice.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'hanged man',
    img: 'images/major-arcana/the-hanged-man.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'death',
    img: 'images/major-arcana/death.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'temperance',
    img: 'images/major-arcana/temperance.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'devil',
    img: 'images/major-arcana/the-devil.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'tower',
    img: 'images/major-arcana/the-tower.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'star',
    img: 'images/major-arcana/the-star.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'moon',
    img: 'images/major-arcana/the-moon.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'sun',
    img: 'images/major-arcana/the-sun.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'judgement',
    img: 'images/major-arcana/judgement.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  },
  {
    name: 'world',
    img: 'images/major-arcana/the-world.jpg',
    situation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    obstacle: "obstable reading",
    advice: "advice reading"
  }
]

const container = document.querySelector('.container');
const descriptions = document.querySelector('.descriptions');

// spread array into a list of arguments to avoid "NaN" output
const shuffledCards = [...cardArray].sort(() => 0.5 - Math.random());
const chosenCards = [];

function createCards() {
  for (let i = 0; i < shuffledCards.length; i++) {
    const card = document.createElement('div');
    const back = document.createElement('img');

    card.setAttribute('class', 'card');
    back.setAttribute('class', 'back');
    back.setAttribute('src', 'images/card-back.png');

    container.appendChild(card);
    card.appendChild(back);
    back.style.height = '380px';
    // reveal card
    card.addEventListener('click', function () {
      back.setAttribute('src', shuffledCards[0].img);
      chosenCards.push(shuffledCards[0]);
      // remove the first card to prevent duplicates
      shuffledCards.shift();

      // revealMeaning();
    }, { once: true })
  }
}

function revealMeaning() {
  if (chosenCards.length === 3) {
    for (let i = 0; i < chosenCards.length; i++) {
      const img = document.createElement('img');
      const p = document.createElement('p');

      img.setAttribute('src', chosenCards[i].img);
      img.setAttribute('id', i);

      descriptions.appendChild(img);
      img.style.height = '400px';

      if (img.id == 0) {
        const text = document.createTextNode(chosenCards[i].situation);
        descriptions.appendChild(p);
        p.appendChild(text);
      } else if (img.id == 1) {
        const text = document.createTextNode(chosenCards[i].obstacle);
        descriptions.appendChild(p);
        p.appendChild(text);
      } else {
        const text = document.createTextNode(chosenCards[i].advice);
        descriptions.appendChild(p);
        p.appendChild(text);
      }
    }
    fadeOutCards();
    // fadeInMeaning();
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







