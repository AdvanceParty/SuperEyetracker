const Card = require('./Card');

class CardView {
  static get FaceUpClassName() {
    return 'faceUp';
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

    const inner = document.createElement('div');
    const front = document.createElement('div');
    const back = document.createElement('div');

    this._container.appendChild(inner);
    inner.appendChild(front);
    inner.appendChild(back);

    this._container.className = `${CardView.ContainerClassName} ${cardData.suit}-${cardData.rank}`;
    inner.className = 'inner';
    front.className = 'front';
    back.className = 'back';

    this._container.onclick = e => this.flip();

    // cards are face down by default.
    // flip it face up if the faceUp option is true
    if (this.isFaceUp) this.flip();
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

  /**
   * Pass false/0 to make card face down
   * Or true/1 to make card face up
   * -> Allows face siide to be set wirh a numeric value
   * which is useful for targetting with anime library/
   * @param {bool} bool
   */
  setFaceUp(bool) {
    if (this.isFaceUp != bool) {
      this.flip();
    }
  }

  flip() {
    this._container.classList.toggle(CardView.FaceUpClassName);
  }
}

module.exports = CardView;
