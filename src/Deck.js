const { SUIT, FACE, Card } = require('./Card');
const { fyShuffle } = require('./utils');
class Deck {
  constructor(cards = false) {
    this._undrawn = [];
    this._drawn = [];
    this._size = 0;
    this._remaining = 0;

    if (cards) {
      this.add(cards);
    }
  }

  /**
   * Adds one more Card instances to the deck
   * obj = Card or Array[Cards]
   */
  add(card) {
    // if a single item was supplied, wrap it into an array
    // so we can treat everything the same;
    const newCards = card instanceof Array ? card : new Array(card);

    newCards.map(item => {
      if (item instanceof Card) {
        this._undrawn.push(new Card(item.suit, item.rank));
        this._size += 1;
      } else {
        throw Error(`Can't add ${item}. Only objects of type 'Card' can be added to a deck.`);
      }
    });

    return null;
  }

  /**
   * Randomises the order of cards in the _undrawn array.
   * Cards in the _drawn array are not affected.
   */
  shuffle() {
    this._undrawn = fyShuffle(this._undrawn);
  }

  /**
   * Moves all cards in from _drawn array into the _undrawn array
   */
  rebuild() {
    // iterate and unshift to preserve original order of deck
    // (assuming deck has not been shuffled since first card was drawn)
    this._drawn.map(card => {
      this._undrawn.unshift(card);
    });
    this._drawn.length = 0;
  }

  /**
   * Returns the total number of cards in the deck.
   * including any cards which have been drawn
   */
  get size() {
    return this._size;
  }

  /**
   * Gets the remaininf number of cards which have not been drawn
   */
  get undrawn() {
    return this._undrawn.length;
  }

  drawCard() {
    const card = this._undrawn.pop();
    this._drawn.push(card);
    return card.clone();
  }

  drawCards(count) {
    if (count > this.undrawn) {
      throw Error(`Can't deal ${count} cards. Only ${this.undrawn} cards are left in the deck!`);
    }

    let i = 0;
    const hand = [];
    while (i++ < count) {
      hand.push(this.drawCard());
    }
    return hand;
  }
}

module.exports = Deck;
