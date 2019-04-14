const Sequencer = require('./js/Sequencer');
const IntroScene = require('./js/IntroScene');
const DealCardsScene = require('./js/DealCardsScene');
const EndScene = require('./js/EndScene');
const NavView = require('./js/NavView');

const { deck } = require('./js/decks');

const init = deck => {
  const table = document.querySelector('#table');
  const navContainer = document.querySelector('#siteNav');
  const sequence = new Sequencer();
  const nav = new NavView(navContainer, sequence);

  // Add scenes to sequencer
  sequence.addScene(IntroScene, table, { deck });
  sequence.addScene(DealCardsScene, table, { handOne: deck.drawCards(5), handTwo: deck.drawCards(4) });
  sequence.addScene(EndScene, table, {});
  // sequence.addScene(DealCardsScene, table, { cards: deck.drawCards(4) });

  sequence.nextScene();
};

init(deck);
