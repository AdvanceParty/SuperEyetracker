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
    containerEl.onclick = e => {
      this.flip();
    };
    this._container = containerEl;
  }

  get cardData() {
    return this._data.clone();
  }

  get element() {
    return this._container;
  }

  show() {
    this._container.classList.add('show');
  }

  hide() {
    this._container.classList.remove('show');
  }

  flip() {
    this._container.classList.toggle('flipped');
  }
}

module.exports = CardView;
