const { Card, SUIT, RANK } = require('./Card');
const Deck = require('./Deck');
const CardView = require('./CardView');
const images = require('./images/*.*');

const deck = new Deck();
const table = document.querySelector('#table');

deck.add([
  new Card(SUIT.CLUBS, RANK.JACK),
  new Card(SUIT.HEARTS, RANK.JACK),
  new Card(SUIT.SPADES, RANK.JACK),
  new Card(SUIT.DIAMONDS, RANK.JACK),
  new Card(SUIT.CLUBS, RANK.QUEEN),
  new Card(SUIT.HEARTS, RANK.QUEEN),
  new Card(SUIT.SPADES, RANK.QUEEN),
  new Card(SUIT.DIAMONDS, RANK.QUEEN),
  new Card(SUIT.CLUBS, RANK.KING),
  new Card(SUIT.HEARTS, RANK.KING),
  new Card(SUIT.SPADES, RANK.KING),
  new Card(SUIT.DIAMONDS, RANK.KING),
  new Card(SUIT.CLUBS, RANK.ACE),
  new Card(SUIT.HEARTS, RANK.ACE),
  new Card(SUIT.SPADES, RANK.ACE),
  new Card(SUIT.DIAMONDS, RANK.ACE),
]);

const init = () => {
  deck.shuffle();
  dealRoundOne();
};

const dealRoundOne = () => {
  const hand = deck.dealHand(5);
  const cardViews = hand.map(card => {
    const cView = new CardView(card);
    table.appendChild(cView.element);
    return cView;
  });
  console.log(cardViews);
};

init();
