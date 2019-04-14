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
      const section = document.createElement('section');
      const title = document.createElement('h1');
      const intro = document.createElement('p');
      const par1 = document.createElement('p');
      const subtitle = document.createElement('h2');
      const par2 = document.createElement('p');
      const par3 = document.createElement('p');
      
      section.className = "textPage"
      intro.className = 'intro'
      
      title.innerText = 'Advanced eye tracking';
      intro.innerText = `Ridiculously fast & accurate eye tracking with machine learning.`
      par1.innerText = `Eye tracking software is an important tool for software testing. But current technology struggles to perform unless paired with high quality cameras and optimal lighting conditions. But with the addition of machine learning systems, we can use predictive modelling to build eye tracking applications capable of unprecedented speed and accuracy.`;
      subtitle.innerText = `A demonstration`;
      par2.innerText = `For the demonstration, five playing cards will be dealt out across the screen. Pick a card, any card, and the EyeML software will guess your card within three seconds... just by tracking your gaze.`
      par3.innerText = `All set?`;
      
      const btn = document.createElement('button');
      btn.innerText = "Let's Go!";
      btn.className = 'btn_continue';
      btn.onclick = e => this.continue();

      section.appendChild(title);
      section.appendChild(intro);
      section.appendChild(par1);
      section.appendChild(subtitle);
      section.appendChild(par2);
      section.appendChild(par3);
      section.appendChild(btn);
      this._container.appendChild(section);
      resolve(true);
    });
  }
}

module.exports = IntroScene;
