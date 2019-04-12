const { Card, SUIT, RANK } = require('./Card');
const Deck = require('./Deck');

const blackDeck = new Deck([
  new Card(SUIT.CLUBS, RANK.JACK),
  new Card(SUIT.SPADES, RANK.JACK),
  new Card(SUIT.CLUBS, RANK.QUEEN),
  new Card(SUIT.SPADES, RANK.QUEEN),
  new Card(SUIT.CLUBS, RANK.KING),
  new Card(SUIT.SPADES, RANK.KING),
  new Card(SUIT.CLUBS, RANK.ACE),
  new Card(SUIT.SPADES, RANK.ACE),
]);

const redDeck = new Deck([
  new Card(SUIT.HEARTS, RANK.JACK),
  new Card(SUIT.DIAMONDS, RANK.JACK),
  new Card(SUIT.HEARTS, RANK.QUEEN),
  new Card(SUIT.DIAMONDS, RANK.QUEEN),
  new Card(SUIT.HEARTS, RANK.KING),
  new Card(SUIT.DIAMONDS, RANK.KING),
  new Card(SUIT.HEARTS, RANK.ACE),
  new Card(SUIT.DIAMONDS, RANK.ACE),
]);

const deck = new Deck([
  new Card(SUIT.CLUBS, RANK.JACK),
  new Card(SUIT.SPADES, RANK.KING),
  new Card(SUIT.DIAMONDS, RANK.ACE),
  new Card(SUIT.SPADES, RANK.JACK),
  new Card(SUIT.HEARTS, RANK.QUEEN),
  new Card(SUIT.SPADES, RANK.JACK),
  new Card(SUIT.HEARTS, RANK.ACE),
  new Card(SUIT.CLUBS, RANK.KING),
  new Card(SUIT.DIAMONDS, RANK.QUEEN),
]);

module.exports.deck = deck;
module.exports.blackDeck = blackDeck;
module.exports.redDeck = redDeck;
