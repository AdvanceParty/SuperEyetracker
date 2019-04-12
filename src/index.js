const Sequencer = require('./Sequencer');
const DealCardsScene = require('./DealCardsScene');
const IntroScene = require('./IntroScene');
const Scene = require('./Scene');

const table = document.querySelector('#table');
const continueBtn = document.querySelector('#btn_continue');
const sequence = new Sequencer();
const { deck } = require('./decks');

const init = () => {
  // Add scenes to sequencer
  sequence.addScene(IntroScene, table, { deck });
  sequence.addScene(DealCardsScene, table, { cards: deck.drawCards(5) });
  sequence.addScene(DealCardsScene, table, { cards: deck.drawCards(4) });

  // add event handler to continue button
  continueBtn.onclick = e => sequence.nextScene();
};

init();
