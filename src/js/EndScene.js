const Scene = require('./Scene');

class EndScene extends Scene {
  constructor(container, options) {
    super(container, options);
  }

  build() {
    return new Promise((resolve, reject) => {
      const section = document.createElement('section');
      const title = document.createElement('h1');
      const intro = document.createElement('p');
      const par1 = document.createElement('p');
      const subtitle = document.createElement('h2');
      const par2 = document.createElement('p');
      const par3 = document.createElement('p');
      const cta = document.createElement('h3');
      
      section.className = "textPage"
      intro.className = 'intro'
      
      title.innerText = 'Pretty slick, hey?';
      intro.innerText = `Unfortunately, it's all bullshit.`
      par1.innerText = `There's no neural network here. No AI or machine learning, just some sleight of hand and good old-fashioned misdirection.`;
      subtitle.innerText = `Well, that's a mean trick.`;
      par2.innerText = `Sorry about that. But welcome to the unreal world!`
      par3.innerText = `The internet is filled with unrealiable narrators, hyperbolic claims and a billion dubious versions of 'truth'. We are already living in the unreal world. For all the wonders and conveniences that it offers, we should move through it with a healthy degree of skepticism.`
      
      const btn = document.createElement('button');
      btn.innerText = "Replay";
      btn.className = 'btn_continue';
      btn.onclick = e => this.continue();

      section.appendChild(title);
      section.appendChild(intro);
      section.appendChild(par1);
      section.appendChild(subtitle);
      section.appendChild(par2);
      section.appendChild(par3);
      section.appendChild(cta);
      section.appendChild(btn);
      this._container.appendChild(section);
      resolve(true);
    });
  }

  continue() {
    this.exit();
    this.triggerNextScene();
  }
}

module.exports = EndScene;
