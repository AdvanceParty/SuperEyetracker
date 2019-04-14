const Sequencer = require('./js/Sequencer');
const IntroScene = require('./js/IntroScene');
const DealCardsScene = require('./js/DealCardsScene');
const EndScene = require('./js/EndScene');

const table = document.querySelector('#table');
const sequence = new Sequencer();
const { deck } = require('./js/decks');

const init = () => {
  // Add scenes to sequencer
  sequence.addScene(IntroScene, table, { deck });
  sequence.addScene(DealCardsScene, table, { handOne: deck.drawCards(5), handTwo: deck.drawCards(4) });
  sequence.addScene(EndScene, table, {});
  // sequence.addScene(DealCardsScene, table, { cards: deck.drawCards(4) });

  sequence.nextScene();
};

init();
