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
    obstacle: "The obstacle that is holding you back the most is a creative block. You may be feeling uninspired to come up with fresh ideas, or you are feeling unmotivated to carry out these ideas because they do not excite you.",
    advice: "It would help to take some time and experience something new to reignite your inspiration. You can achieve this by focusing on things that get your creative energy flowing, such as an art project. Or maybe you're caught up in the monotony of life, try new things such as learning a new hobby or visiting a place you've never been to before."
  },
  {
    name: 'The Emperor',
    img: 'images/major-arcana/the-emperor.jpg',
    situation: "The Emperor suggests that you are stepping into a leadership role. It could be taking the lead on a project at work, or you may be known as the 'rock' for a friend or family who rely on your stability and security.",
    obstacle: "You are being held back by someone domineering and rigid in their thinking. The card can suggest an over-use and abuse of authoritative power surrounding you. It could originate from you or from another person, often a boss, partner or father figure.",
    advice: "Take this as a sign to work towards stability by practicing hard work and discipline to bring you closer to reaching your goals. You will benefit from consulting an authority figure in your life, either a parent or boss could act as a mentor."
  },
  {
    name: 'The Hierophant',
    img: 'images/major-arcana/the-hierophant.jpg',
    situation: "The Hierophant's arrival suggests you are following convention and staying within the bounds of a ‘tried and tested’ model. You are not yet willing to go out on a limb or offer any new and innovative ideas. Instead, you adhere to the key principles and rules that you know will lead to a successful result.",
    obstacle: "You may be in a situation that is pushing you to step out of your comfort zone and challenge the status quo. Whether by choice or not, you may be struggling to be independant, and it may be unsettling at first as you discover your own way.",
    advice: "The Hierophant reminds you that you are your own teacher. All the wisdom you seek comes from within – not from some external source or power. You are being guided to follow your own path and adopt your own spiritual belief systems rather than blindly following others."
  },
  {
    name: 'The Lovers',
    img: 'images/major-arcana/the-lovers.jpg',
    situation: "Looks like you have love in the forecast. This can indicate a relationship, and though it is usually romantic in nature, it could be any sort of meaningful relationship where good chemistry is involved. The Lovers can also represent choice, the choice about who you want to be in this lifetime, how you connect with others and on what level, and about what you will and won’t stand for.",
    obstacle: "However, strained relationships are clouding your conscious. You're out of sync with those around you, you may find your relationships are strained and communication is challenging. ",
    advice: "To overcome this, this card is a sign that honesty with yourself and others will help you to become clear about your personal values and beliefs. Staying true to yourself will help you make decisions that are authentic to you and your philosophy."
  },
  {
    name: 'The Chariot',
    img: 'images/major-arcana/the-chariot.jpg',
    situation: "The Chariot represents determination. You have been firm in your decisions and you can see your dedication lead to progress. This card is a sign of encouragement that when you have set your objectives, you are capable with seeing them through.",
    obstacle: "At times, The Chariot is a warning that you are letting obstacles and challenges get in the way, preventing you from achieving what you set out to do. It’s all getting too hard, and you feel like you don’t have the will to go on.",
    advice: "The Chariot calls you to assert yourself and be courageous. Be bold in expressing your desires and laying down your boundaries; otherwise, you will not get your way. You need to have faith in yourself and know fundamentally who you are and what you stand for."
  },
  {
    name: 'Strength',
    img: 'images/major-arcana/strength.jpg',
    situation: "Strength shows that you have great stamina and persistence, balanced with underlying patience and inner calm. You are committed to what you need to do, and you go about it in a way that shows your composure and maturity.",
    obstacle: "If you have recently experienced a setback, you may be vulnerable and lacking in self-confidence. This is making it difficult for you to be confident in your endeavors.",
    advice: "No matter what you are facing right now, know that you have the power to transcend these obstacles. You are resilient, and your willpower will lead to positive results. You may be tested now but don't lose hope!"
  },
  {
    name: 'The Hermit',
    img: 'images/major-arcana/the-hermit.jpg',
    situation: "The Hermit shows that you are taking a break from everyday life to draw your energy and attention inward and find the answers you seek, deep within your soul. You realize that your most profound sense of truth and knowledge is within yourself and not in the distractions of the outside world.",
    obstacle: "You have recently been taking too much time for yourself, while alone time is essential, you may be using this to ruminate on the past and become too absorbed into your personal dilemmas that you feel shut out, and struggling to reamerge with a more positive mindset.",
    advice: "The Hermit often appears when you are at a pivotal point in your life and considering a new direction. Through meditation, contemplation, and self-examination, you may begin to re-evaluate your personal goals and change your overall course. You will look at your life with a deeper, more spiritual understanding and a few of your priorities will change as a result."
  },
  {
    name: 'The Wheel of Fortune',
    img: 'images/major-arcana/wheel-of-fortune.jpg',
    situation: "The Wheel of Fortune can show a critical turning point in your life. Opportunities you could never imagine are suddenly available to you, and you have the chance to make a significant change in your life. While it may be unexpected and unfamiliar, see this as an invitation to turn things around and take an entirely new direction in your life.",
    obstacle: "Holding you back is your resistance to change. This card suggests that change has become a source of significant stress, and you may be trying to consciously or subconsciously stop events from running their course.",
    advice: "To make the most of the situation, The Wheel of Fortune is here to remind you that life is in a constant state of change.  If you’re going through a difficult time rest assured that it will get better from here. Good luck and good fortune will make their return in time. Similarly, if things are going well, know this, too, will change and life may return to ‘normal’ soon. This cycle shows why it is so important to cherish the blissful moments in your."
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







