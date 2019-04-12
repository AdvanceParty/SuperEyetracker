const anime = require('animejs/lib/anime');
const Scene = require('./Scene');
const HandView = require('./HandView');

class DealCardsScene extends Scene {
  constructor(container, options) {
    super(container, options);
  }

  configure(options) {
    const { cards } = options;
    this._view = new HandView(cards, false);
  }

  async build() {
    return new Promise(async (resolve, reject) => {
      this._view.attach(this._container);

      await anime({
        targets: '.card',
        translateY: 250,
        delay: anime.stagger(200),
      }).finished;

      this._view.getCardViews().map(card => card.flip());
      resolve(true);
    });
  }
}

module.exports = DealCardsScene;
