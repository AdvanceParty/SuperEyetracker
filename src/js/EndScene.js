const Scene = require('./Scene');
const NavItemState = require('./NavItemState');

class EndScene extends Scene {
  constructor(container, options) {
    super(container, options);
    this._navState.prev = new NavItemState('Try Again', false);
    this._options.sequencer.setNextNavState(this._navState.prev);
  }

  build() {
    return new Promise((resolve, reject) => {
      const title = document.createElement('h1');
      const intro = document.createElement('p');
      const par1 = document.createElement('p');
      const subtitle = document.createElement('h2');
      const par2 = document.createElement('p');
      const par3 = document.createElement('p');
      // const cta = document.createElement('h3');

      intro.className = 'intro';

      title.innerText = 'Pretty slick, hey?';
      intro.innerText = `Unfortunately, it's all bullshit.`;
      par1.innerText = `There's no neural network here. No AI or machine learning, just some sleight of hand and good old-fashioned misdirection.`;
      subtitle.innerText = `Well, that's a mean trick.`;
      par2.innerText = `Sorry about that. But welcome to the unreal world!`;
      par3.innerText = `The internet is filled with unrealiable narrators, hyperbolic claims and a billion dubious versions of 'truth'. We are already living in the unreal world. For all the wonders and conveniences that it offers, we should move through it with a healthy degree of skepticism.`;

      this._container.appendChild(title);
      this._container.appendChild(intro);
      this._container.appendChild(par1);
      this._container.appendChild(subtitle);
      this._container.appendChild(par2);
      this._container.appendChild(par3);
      // this._container.appendChild(cta);

      resolve(true);
    });
  }

  onBuildComplete() {
    this._navState.next.enabled = true;
    this._navState.prev.enabled = true;
    this._options.sequencer.setPrevNavState(this._navState.next);
    this._options.sequencer.setNextNavState(this._navState.prev);
  }

  continue() {
    this.exit();
    this.triggerNextScene();
  }
}

module.exports = EndScene;
