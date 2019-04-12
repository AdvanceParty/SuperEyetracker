const CardView = require('./CardView');

class HandView {
  constructor(cards) {
    this._wrapper = document.createElement('div');
    this._wrapper.className = 'hand';
    this._cardViews = cards.map(cardData => {
      const view = new CardView({ cardData });
      this._wrapper.appendChild(view.element);
      return view;
    });
  }

  attach(parentElement) {
    // clear out current elements if already attach to a parent,
    if (this._parentElement) {
      this.destroy();
    }

    this._parentElement = parentElement;
    parentElement.appendChild(this._wrapper);
  }

  getCardViews() {
    return this._cardViews;
  }

  destroy() {
    // remove the wrapper element (and the child cards) from the dom
    this._parentElement.removeChild(this._wrapper);
    this._parentElement = null;
    return null;
  }
}

module.exports = HandView;
