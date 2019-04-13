const Sequencer = require('./Sequencer');
const IntroScene = require('./IntroScene');
const DealCardsScene = require('./DealCardsScene');
const EndScene = require('./EndScene');

const table = document.querySelector('#table');
const sequence = new Sequencer();
const { deck } = require('./decks');

const init = () => {
  // Add scenes to sequencer
  sequence.addScene(IntroScene, table, { deck });
  sequence.addScene(DealCardsScene, table, { handOne: deck.drawCards(5), handTwo: deck.drawCards(4) });
  sequence.addScene(EndScene, table, {});
  // sequence.addScene(DealCardsScene, table, { cards: deck.drawCards(4) });

  sequence.nextScene();
};

init();
