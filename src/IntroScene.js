const Scene = require('./Scene');

class IntroScene extends Scene {
  constructor(container, options) {
    super(container, options);
  }

  configure(options) {
    options.deck.rebuild();
  }

  build() {
    return new Promise((resolve, reject) => {
      const title = document.createElement('h1');
      title.innerText = 'Card Preference Prediction Algorithm';
      this._container.appendChild(title);
      resolve(true);
    });
  }
}

module.exports = IntroScene;
