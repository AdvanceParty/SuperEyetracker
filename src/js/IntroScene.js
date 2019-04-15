const Scene = require('./Scene');

class IntroScene extends Scene {
  constructor(container, options) {
    super(container, options);
  }

  configure(options) {
    options.deck.rebuild();
  }

  build() {
    return new Promise(resolve => {
      const title = document.createElement('h1');
      const intro = document.createElement('p');
      const par1 = document.createElement('p');
      const subtitle = document.createElement('h2');
      const par2 = document.createElement('p');
      const par3 = document.createElement('p');

      intro.className = 'intro';

      title.innerText = 'Advanced eye tracking';
      intro.innerText = `Ridiculously fast & accurate eye tracking with machine learning.`;
      par1.innerText = `Eye tracking software is an important tool for software testing. But current technology struggles to perform unless paired with high quality cameras and optimal lighting conditions. But with the addition of machine learning systems, we can use predictive modelling to build eye tracking applications capable of unprecedented speed and accuracy.`;
      subtitle.innerText = `A demonstration`;
      par2.innerText = `For the demonstration, five playing cards will be dealt out across the screen. Pick a card, any card, and the EyeML software will guess your card within three seconds... just by tracking your gaze.`;
      par3.innerText = `All set?`;

      this._container.appendChild(title);
      this._container.appendChild(intro);
      this._container.appendChild(par1);
      this._container.appendChild(subtitle);
      this._container.appendChild(par2);
      this._container.appendChild(par3);

      resolve(true);
    });
  }

  onBuildComplete() {
    this._navState.next.enabled = true;
    this._navState.prev.enabled = false;
    this._options.sequencer.setNavState(this._navState);
  }
}

module.exports = IntroScene;
