const Scene = require('./Scene');
const HandView = require('./HandView');

class DealCardsScene extends Scene {
  constructor(container, options) {
    super(container, options);
  }

  configure(options) {
    const { cards } = options;
    this._view = new HandView(cards);
  }

  build() {
    return new Promise((resolve, reject) => {
      this._view.attach(this._container);
      resolve(true);
    });
  }
}

module.exports = DealCardsScene;
