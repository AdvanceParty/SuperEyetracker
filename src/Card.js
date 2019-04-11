const SUIT = {
  CLUBS: 'clubs',
  HEARTS: 'hearts',
  SPADES: 'spades',
  DIAMONDS: 'diamonds',
};

const RANK = {
  ACE: '01',
  TWO: '02',
  THREE: '03',
  FOUR: '04',
  FIVE: '05',
  SIX: '06',
  SEVEN: '07',
  EIGHT: '08',
  NINE: '09',
  TEN: '10',
  JACK: '11',
  QUEEN: '12',
  KING: '13',
};

const TITLE = {
  [RANK.ACE]: 'Ace',
  [RANK.TWO]: 'Two',
  [RANK.THREE]: 'Three',
  [RANK.FOUR]: 'Four',
  [RANK.FIVE]: 'Five',
  [RANK.SIX]: 'Six',
  [RANK.SEVEN]: 'Seven',
  [RANK.EIGHT]: 'Eight',
  [RANK.NINE]: 'Nine',
  [RANK.TEN]: 'Ten',
  [RANK.JACK]: 'Jack',
  [RANK.QUEEN]: 'Queen',
  [RANK.KING]: 'King',
};

class Card {
  constructor(suit, rank) {
    this._suit = suit;
    this._rank = rank;
  }

  get suit() {
    return this._suit;
  }
  get rank() {
    return this._rank;
  }

  get imageName() {
    return `${this.suit}_${this.rank}.jpg`;
  }

  get data() {
    return { suit: this.suit, rank: this.rank };
  }

  get description() {
    return `${TITLE[this.rank]} of ${this.suit}`;
  }

  clone() {
    const { suit, rank } = this.data;
    return new Card(suit, rank);
  }
}

module.exports.RANK = RANK;
module.exports.SUIT = SUIT;
module.exports.Card = Card;
