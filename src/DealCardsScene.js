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
        translateY: (el, i) => {
          console.log(i);
          this._view.getCardViews()[i].flip();
          return 250;
        },
        delay: anime.stagger(500),
      }).finished;

      // console.log(this._view.getCardViews());
      // this._view.getCardViews()[0].setFaceUp(1);

      console.log('NEXT');

      resolve(true);
    });
  }
}

module.exports = DealCardsScene;
