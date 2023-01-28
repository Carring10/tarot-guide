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
    obstacle: "But, you are being held back by someone domineering and rigid in their thinking. The card can suggest an over-use and abuse of authoritative power surrounding you. It could originate from you or from another person, often a boss, partner or father figure.",
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
    obstacle: "However, strained relationships are clouding your conscious. You're out of sync with those around you, you may find your relationships are tense and communication is challenging. ",
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
    name: 'Justice',
    img: 'images/major-arcana/justice.jpg',
    situation: "You are in a situation where you are seeking the truth. Be prepared to know that things are not always as clear cut as you think.",
    obstacle: "Impeding you from moving forward is denial. You may be struggling from guilt about what you have or haven't done. Or you are having trouble accepting an unfair outcome.",
    advice: "It will benefit you to be aware of the impact your decisions will have on your well-being and the well-being of others. Be ready to stand by your decisions as you will be held to account for the choices you make."
  },
  {
    name: 'The Hanged Man',
    img: 'images/major-arcana/the-hanged-man.jpg',
    situation: "When the Hanged Man appears, it's an indicator that something in your life may be coming to an unexpected and abrupt halt.",
    obstacle: "However, you are feeling stuck and restricted in your life. It could be due to something out of your control, or maybe you are unhappy and resisting your current circumstances.",
    advice: "You are being called to change your perspective and shift your energy and may find that separating yourself from your everyday life is helpful, it could be as simple as going for a walk in nature. Change up your routine so you can start to shift your energy and flow more freely again."
  },
  {
    name: 'Death',
    img: 'images/major-arcana/death.jpg',
    situation: "Death symbolizes a time of significant transformation, change, and transition. It could be a literal change, like moving or a new job, or it could be a metaphorical change, like going through a personal transformation.",
    obstacle: "Death can mean that you are on the verge of meaningful change but are resisting it. You may be reluctant to let go, or you may not know how to make the change you need. You still carry harmful viewpoints from the past that may interfere with a new opportunity. Because of your refusal, life has stagnated, and you feel stuck in limbo.",
    advice: "Death reversed offers you the opportunity to embrace change rather than resist it. See what wonderful possibilities become available to you as you say ‘yes’ to change. As you learn to release the past and surrender to the present, the future becomes even brighter."
  },
  {
    name: 'Temperance',
    img: 'images/major-arcana/temperance.jpg',
    situation: "The Temperance card shows that you have a clear, long-term vision of what you want to achieve. You are not rushing things along; instead, you are taking your time to ensure that you do the best job you can. You know you need a moderate, guided approach to reach your goals.",
    obstacle: "Yet, you are experiencing conflict because you're in a period of self-evaluation in which you are considering your priorities. You may feel called in one direction, but your life is not aligning with this decision. Be prepared that this shift will cause tension and even conflict as you align yourself with personal goals.",
    advice: "This card calls on you to remain calm, even when life feels stressful or frantic. Maintain an even temperament and manage your emotions. You have learned to keep composed in stressful situations. Little things don’t get to you, thanks to your seemingly abundant source of patience. Your respect for balance and tranquillity is what will help you achieve and experience fulfilment in your life."
  },
  {
    name: 'Devil',
    img: 'images/major-arcana/the-devil.jpg',
    situation: "You may be at the effect of negative habits, dependencies, behaviors, thought patterns, relationships, and addictions. You have found yourself trapped between the short-term pleasure you receive and the longer-term pain you experience.",
    obstacle: "In spite of that, you may be feeling like you have no control over your impulses. Deep down, though, you know it’s to your detriment, and you are only doing yourself (and often others) a disservice when you cave in to these lower needs and desires.",
    advice: "To remedy this, The Devil calls on you to confront your inner fears and anxieties to free yourself from the chains that bind you to your limiting beliefs and unhealthy attachments. Eliminate those things you know are harmful to you and your inner psyche. It may be about creating a healthier diet, watching less television, quitting smoking, spending more time with your loved ones, or focusing more on your goals."
  },
  {
    name: 'The Tower',
    img: 'images/major-arcana/the-tower.jpg',
    situation: "When The Tower card appears in a Tarot reading, expect the unexpected – massive change, upheaval, destruction and chaos. It may be a divorce, death of a loved one, financial failure, health problems, natural disaster, job loss or any event that shakes you to your core, affecting you spiritually, mentally and physically. There’s no escaping it. Change is here to tear things up, create chaos and destroy everything in its path.",
    obstacle: "However, you are feeling pain and turmoil that has come from a significant change in your life.",
    advice: "Keep in mind, every challenge that you overcome will allow growth. You will grow stronger, wiser, and more resilient as you develop a new perspective on life."
  },
  {
    name: 'The Star',
    img: 'images/major-arcana/the-star.jpg',
    situation: "If you have recently experienced an unfortunate situation, The Star signals a time of reprieve after this challenge. You are entering a peaceful phase in your life, you can expect mental stability and a more in-depth understanding of both yourself and others around you. This is a time of significant personal growth and development.",
    obstacle: "Despite that, you are starting to feel disengaged and uninspired with life or components of your life, for example, work, hobbies, relationships, or personal projects. Perhaps you started out with great vision and enthusiasm, but you are now finding yourself overwhelmed by day-to-day routines that are boring and dreary.",
    advice: "You may also want to find or rediscover a sense of meaning, inspiration, or purpose in your life. You are making some significant changes in your life, transforming yourself from the old you to the new you and, in doing so, you are bringing about a fresh perspective. Strip back any limiting beliefs, facades, or deceptions, and live in your authentic nature. Be open to new ideas and growth, and listen to the still voice within."
  },
  {
    name: 'The Moon',
    img: 'images/major-arcana/the-moon.jpg',
    situation: "The Moon can indicate a time of uncertainty and illusion, when nothing is what it seems. Be careful of making fast decisions when The Moon appears because you may later realize you only had half the information you needed.",
    obstacle: "Though, you have been dealing with fears and anxiety. You may try to bury these feelings even deeper within your subconscious so you can avoid them. You may not be ready to face your emotions, pushing them to the side and pretending as if nothing is wrong. This strategy might work in the short-term, but eventually, you will need to resurface these emotions and deal with them head-on.",
    advice: "To combat this, you need to be aware of the situations that are causing fear and anxiety in your mind, whether it is now or in the future. It alerts you not to allow inner disturbances and self-deception to take the best of you. These deep memories and fears must be let go, and the negative energies must be released and turned into something constructive."
  },
  {
    name: 'The Sun',
    img: 'images/major-arcana/the-sun.jpg',
    situation: "The Sun represents success, radiance and abundance. The Sun gives you strength and tells you that no matter where you go or what you do, your positive and radiant energy will follow you and bring you happiness and joy. You are also in a position where you can share your highest qualities and achievements with others.",
    obstacle: "But, you are struggling to see the bright side of life. You may have experienced setbacks that damaged your enthusiasm and optimism and perhaps led you to question whether you can achieve what you set out to do. You may feel depressed or left out and are no longer enjoying what you are doing. Your direction and path ahead may appear clouded or distorted.",
    advice: "No matter what you are going through, The Sun brings the message that things will get better, and through your challenges, you have discovered who you are and why you're here. Knowing setbacks are temporary will get you through your hardships."
  },
  {
    name: 'Judgement',
    img: 'images/major-arcana/judgement.jpg',
    situation: "The Judgement card often indicates that you need to make a life-changing decision. You may be at a crossroads, aware that any choice you make will bring a significant change with long-lasting effects.",
    obstacle: "Although, Judgement indicates that your inner critic is monopolizing your thoughts. You are doubting yourself and giving into these negative emotions, this is restricting you from succeeding.",
    advice: "To move forward, you will need to evaluate your past experiences in order to learn from them. Take the time to release any guilt or sadness about the past. This purging process will leave you refreshed and ready to take on any new challenges."
  },
  {
    name: 'The World',
    img: 'images/major-arcana/the-world.jpg',
    situation: "When The World card appears in a Tarot reading, you are glowing with a sense of wholeness, achievement, fulfilment, and completion. A long-term project, period of study, relationship or career has come full circle, and you are now reveling in the sense of closure and accomplishment. This card could represent graduation, a marriage, the birth of a child, or achieving a long-held dream or aspiration. You have finally accomplished your goal or purpose.",
    obstacle: "However, you are struggling with impatience. You may opt for the easiest or quickest path to attain your goal, but it won't lead to the outcome you intend.",
    advice: "Don’t be afraid to set stretch goals for yourself, even if it means enduring hardships or challenges along the way, You need to experience the trials and tribulations along the way so you can learn and grow."
  }
]

const cards = document.querySelector('.cards');
const reading = document.querySelector('.reading');
const button = document.querySelector('.button-container');

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
    back.setAttribute('alt', 'Back of Tarot Card');

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

      function refreshPage() {
        location.reload();
      }
      
      button.addEventListener('click', refreshPage);
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
      img.setAttribute('alt', 'Rider Waite Tarot Card');

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
      // the results take the place of the cards container
      cards.style.position = 'absolute';

      reading.style.opacity = 1;
      button.style.opacity = 1;
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

// only run function calls on respective html page
if (window.location.pathname.includes('/reading.html')) {
  createCards();
}

if (window.location.pathname.includes('/index.html')) {
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






