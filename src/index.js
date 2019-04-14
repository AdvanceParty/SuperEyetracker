const Sequencer = require('./js/Sequencer');
const IntroScene = require('./js/IntroScene');
const DealCardsScene = require('./js/DealCardsScene');
const EndScene = require('./js/EndScene');
const NavView = require('./js/NavView');

const { deck } = require('./js/decks');

const init = deck => {
  const parentElement = document.querySelector('main');
  const navContainer = document.querySelector('#siteNav');
  const sequence = new Sequencer();
  const nav = new NavView(navContainer, sequence);

  // Add scenes to sequencer
  sequence.addScene(IntroScene, parentElement, {
    className: 'textPage',
    deck,
  });

  sequence.addScene(DealCardsScene, parentElement, {
    className: 'cardTable',
    handOne: deck.drawCards(5),
    handTwo: deck.drawCards(4),
  });

  sequence.addScene(EndScene, parentElement, {
    className: 'textPage',
  });

  return sequence;
};

const sequence = init(deck);
sequence.nextScene();
