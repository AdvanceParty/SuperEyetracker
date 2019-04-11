const Card = require('./Card');

class CardView {
  static set imagePath(path) {
    CardView._imagePath = path;
  }

  static get imagePath() {
    return CardView._imagePath || 'images/';
  }
  constructor(cardData, imagePath = CardView.imagePath) {
    this._data = cardData.clone();
    const containerEl = document.createElement('div');
    containerEl.className = `card ${cardData.suit}-${cardData.rank}`;
    this._container = containerEl;
  }

  get cardData() {
    return this._data.clone();
  }

  get element() {
    return this._container;
  }
}

module.exports = CardView;
