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
      const cta = document.createElement('h3');
      
      section.className = "textPage"
      intro.className = 'intro'
      
      title.innerText = 'Advanced eye tracking';
      intro.innerText = `This is demonstration of how machine learning can be used to develop ridiculously fast and accurate eye tracking.`
      par1.innerText = `The neural network used for this demonstration was trained on hundreds of hours of eye tracking data. This enables the software to augment traditional eye tracking technology with predictive modelling based on real user behaviour. The result is an eye tracking application which can detect a viewer's point of focus with unprecedented speed and accuracy.`;
      subtitle.innerText = `Seeing is believing: A demonstration.`;
      par2.innerText = `When you click the "Let's Go" button below, five playing cards will be dealt onto the screen.`
      par3.innerText = `Quickly choose a card and focus your gaze on it for three full seconds. As soon as tbe software has determined which card you're focussing on, it will clear the screen and reveal its result.`;
      cta.innerText = `Ready?`;
      
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
      section.appendChild(cta);
      section.appendChild(btn);
      this._container.appendChild(section);
      resolve(true);
    });
  }
}

module.exports = IntroScene;
