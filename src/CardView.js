const Card = require('./Card');

class CardView {
  static get FaceUpClassName() {
    return 'faceup';
  }
  static get ContainerClassName() {
    return 'card';
  }

  static get ContainerType() {
    return 'div';
  }

  static set imagePath(path) {
    CardView._imagePath = path;
  }

  static get imagePath() {
    return CardView._imagePath || 'images/';
  }

  constructor({ cardData, faceUp = true, imagePath = CardView.imagePath }) {
    this._data = cardData.clone();
    this._container = document.createElement(CardView.ContainerType);
    this._container.className = `${CardView.ContainerClassName} ${cardData.suit}-${cardData.rank}`;
    this._container.onclick = e => this.flip();

    // cards are face down by default.
    // flip it face up if the faceUp option is true
    if (faceUp) this.flip();
  }

  get cardData() {
    return this._data.clone();
  }

  get element() {
    return this._container;
  }

  get isFaceUp() {
    return this._container.classList.contains(CardView.FaceUpClassName);
  }

  flip() {
    this._container.classList.toggle(CardView.FaceUpClassName);
  }
}

module.exports = CardView;
