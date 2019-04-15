const Scene = require('./Scene');
const NavItemState = require('./NavItemState');

class EndScene extends Scene {
  constructor(container, options) {
    super(container, options);
    this._navState.prev = new NavItemState('Try Again', false);
    this._navState.next = new NavItemState('Fin ', false);
    this._options.sequencer.setNavState(this._navState);
  }

  build() {
    return new Promise((resolve, reject) => {
      const title = document.createElement('h1');
      const intro = document.createElement('p');
      const par1 = document.createElement('p');
      const subtitle = document.createElement('h2');
      const par2 = document.createElement('p');
      const par3 = document.createElement('p');

      intro.className = 'intro';

      title.innerText = 'Pretty slick, hey?';
      intro.innerText = `Unfortunately, it's all bullshit.`;
      par1.innerText = `There's no neural network here. No AI or machine learning, just some sleight of hand and good old-fashioned misdirection. You'll find versions of this particular trick all over the internet once you know what you're looking for. Run the trrick a couple more times and you should be able to figure out what's going on.`;
      subtitle.innerText = `So it's just a con?`;
      par2.innerText = `Sorry about that. But welcome to the unreal world!`;
      par3.innerText = `The internet is filled with unrealiable narrators, hyperbolic claims and a billion dubious versions of 'truth'. We are already living in the unreal world. For all the wonders and conveniences that it offers, we should move through it with a healthy degree of skepticism.`;

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
    this._navState.next.enabled = false;
    this._navState.prev.enabled = true;
    this._options.sequencer.setNavState(this._navState);
  }

  continue() {
    this.exit();
    this.triggerNextScene();
  }
}

module.exports = EndScene;
