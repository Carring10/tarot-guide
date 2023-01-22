const cardArray = [
  {
    name: 'The Fool',
    img: 'images/major-arcana/the-fool.jpg',
    situation: "New beginnings are on their way, if you've been looking to start a new career path, form a new relationship, or learn a skill - what ever it may be, The Fool is a welcome sign to to start your journey.",
    obstacle: "Keep in mind, in attempts to be a spontaneous and care-free spirit, you may be disregarding the potential risks. You will need to find a balance of living in the moment and being considerate of the consequences, always involve a plan B in your endeavors.",
    advice: "On your journey of navigating life, whether it be new opportunities or unexpected tribulations, The Fool is there to remind you that you can never really predict what lies ahead - therefore approach each day as a new adventure. Don't be troubled by the unknown, greet it with a sense of innocence and curiosity."
  },
  {
    name: 'The Magician',
    img: 'images/major-arcana/the-magician.jpg',
    situation: "There are opportunities in your midst, and you are likely to find success as The Magician is a sign that you are as ready as you will ever be.",
    obstacle: "It is true that you have the desire and commitment to pursue whatever it is you want, but your lack of confidence in your abilities is holding you back, your hesitation could lead to missed opportunities.",
    advice: "Regardless, whatever you set out to do, you can trust your abilities. Without confidence in your potential, you will become a victim to indecision. You can harness the opportunities ahead if you take action."
  },
  {
    name: 'The High Priestess',
    img: 'images/major-arcana/the-high-priestess.jpg',
    situation: "The High Priestess represents wisdom attained through study. During this time, you may be in a period of isolation in order to understand your needs for future goals.",
    obstacle: "However, you have outside sources swaying your beliefs. It could be other's opinions or you find yourself getting swept up in drama.",
    advice: "In order to combat this, The High Priestess suggests that you rely on your intuition to guide you. You can do this by embracing a pause from the outside world, isolate yourself from other's opinions and avoid getting swept up in drama. Be attentative to your own needs and desires."
  },
  {
    name: 'The Empress',
    img: 'images/major-arcana/the-empress.jpg',
    situation: "The Empress is an indicator that you are entering a period of creativity. During this time, you have an abundance of new ideas, harness your inspiration to bring them to fruition.",
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

const cards = document.querySelector('.cards');
const reading = document.querySelector('.reading');

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

    cards.appendChild(card);
    card.appendChild(back);

    card.addEventListener('click', function () {
      chosenCards.push(shuffledCards[0]);
      // so it appears the user cannot select more than 3 cards at a time
      if (chosenCards.length < 4) {
        back.classList.toggle('selected');
      }
      // remove the first card to prevent duplicates
      shuffledCards.shift();

      revealReading();
    }, { once: true })
  }
}

function revealReading() {
  if (chosenCards.length === 3) {
    for (let i = 0; i < chosenCards.length; i++) {
      const content = document.createElement('div');
      const description = document.createElement('div');
      const img = document.createElement('img');
      const h2 = document.createElement('h2');
      const p = document.createElement('p');

      content.setAttribute('class', 'content');
      description.setAttribute('class', 'description');
      img.setAttribute('src', chosenCards[i].img);
      img.setAttribute('id', i);
      img.setAttribute('class', 'front');

      reading.appendChild(content);
      content.appendChild(img);
      content.appendChild(description);

      function appendElements(category, text) {
        description.appendChild(h2);
        description.appendChild(p);
        h2.appendChild(category);
        p.appendChild(text);
      }

      if (img.id == 0) {
        const category = document.createTextNode('Situation');
        const text = document.createTextNode(chosenCards[i].situation);

        appendElements(category, text);
      } else if (img.id == 1) {
        const category = document.createTextNode('Obstacle');
        const text = document.createTextNode(chosenCards[i].obstacle);

        appendElements(category, text);
      } else {
        const category = document.createTextNode('Advice');
        const text = document.createTextNode(chosenCards[i].advice);

        appendElements(category, text);
      }
    }

    fadeOutCards();
    // fade in reading
    setTimeout(() => {
      const header = document.getElementById('header');

      reading.style.opacity = 1;
      header.textContent = "Your Reading Foretells...";
    }, 1500)
  }
}

function fadeOutCards() {
  const fadeOutInterval = setInterval(function () {
    if (!cards.style.opacity) {
      cards.style.opacity = 1;
    }

    if (cards.style.opacity > 0) {
      cards.style.opacity -= 0.05;
    } else {
      clearInterval(fadeOutInterval);
    }
  }, 80)
}

// to prevent errors on homepage
if (window.location.pathname == '/reading.html') {
  createCards();
}

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







