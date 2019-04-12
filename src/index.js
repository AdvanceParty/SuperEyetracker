const CardView = require('./CardView');
const HandView = require('./HandView');
const Sequencer = require('./Sequencer');

const table = document.querySelector('#table');
const continueBtn = document.querySelector('#btn_continue');
const sequence = new Sequencer();
const { deck } = require('./decks');
let currentHandView;

const intro = () => {
  const title = document.createElement('h1');
  title.innerText = 'Card Preference Prediction Algorithm';
  table.appendChild(title);
  deck.rebuild();
};

const clearTable = () => {
  // if (currentHandView) {
  //   currentHandView = currentHandView.destroy();
  // }

  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
};

const dealCards = count => {
  return displayCards(deck.drawCards(count), table);
};

/**
 * Takes an array of Cards
 * and adds HTML elements to the table node in the don
 * @param {Array:Card} cards
 */
const displayCards = (cards, container) => {
  currentHandView = new HandView(cards);
  currentHandView.attach(table);

  const cardViews = currentHandView.getCardViews();

  return currentHandView;
};

const init = () => {
  sequence.addItem(intro);
  sequence.addItem(clearTable);
  sequence.addItem(dealCards, 5);
  sequence.addItem(clearTable);
  sequence.addItem(dealCards, 4);
  sequence.addItem(clearTable);

  // temporary trigger to move from one step to the next
  continueBtn.onclick = e => {
    sequence.callNext();
  };
};

init();
