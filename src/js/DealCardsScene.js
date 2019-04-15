const anime = require('animejs/lib/anime');
const Scene = require('./Scene');
const HandView = require('./HandView');
const NavItemState = require('./NavItemState');

class DealCardsScene extends Scene {
  constructor(container, options) {
    super(container, options);
  }

  configure(options) {
    const { handOne, handTwo } = options;

    this._handOneView = new HandView(handOne, false);
    this._handTwoView = new HandView(handTwo, false);

    this._msgBoxContainer = document.createElement('div');
    this._msgBox = document.createElement('p');
    this._msgBoxContainer.classList.add('msgBox');
    this._container.appendChild(this._msgBoxContainer);
    this._msgBoxContainer.appendChild(this._msgBox);
    this.clearMsg();
  }

  displayMsg(msg) {
    this._msgBox.innerText = msg;
    this._msgBoxContainer.classList.remove('hide');
  }

  clearMsg() {
    this._msgBoxContainer.classList.add('hide');
  }

  async build() {
    await this.pause(1000);

    this.displayMsg('Shuffling the deck.');
    await this.pause(3000);

    this.clearMsg();
    await this.pause(1000);
    this.displayMsg('Pick a card & focus your gaze on it.');
    await this.pause(1000);
    this._handOneView.attach(this._container);
    await this.dealFive();
    await this.pause(3500);
    this.flipCards(this._handOneView);
    await this.pause(3500);

    this.flipCards(this._handOneView);
    this.clearMsg();
    await this.pause(600);

    this.displayMsg(`Throwing away your card!`);
    await this.mixUp();

    // swap in the new hand
    this._handOneView.destroy();
    this._handTwoView.attach(this._container);
    await this.dealFour();
    this.flipCards(this._handTwoView);
    this.clearMsg();

    await this.pause(800);
    this.displayMsg(`Check it out: your card is gone!`);
    return this.pause(600);
  }

  flipCards(handView) {
    handView.getCardViews().map(async card => card.flip());
  }

  getLayoutInfo() {
    const cardWidth = document.querySelectorAll('.card')[0].offsetWidth;
    const padding = 10;
    const handWidth = (cardWidth + padding) * 5;
    const handPosX = 20;
    const screen = { w: window.innerWidth, h: window.innerHeight };
    return { cardWidth, padding, handWidth, handPosX, screen };
  }

  pause(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
  }

  mixUp() {
    const { cardWidth, handPosX, screen } = this.getLayoutInfo();

    const timeline = anime.timeline({
      direction: 'forwards',
      autoplay: true,
    });

    return timeline
      .add({
        targets: '.card',
        easing: 'easeOutQuint',
        left: handPosX,
        duration: 500,
        delay: anime.stagger(80),
      })
      .add({
        // kick one of the face down cards off the screen
        targets: document.querySelectorAll('.card')[2],
        easing: 'easeOutQuint',
        translateX: screen.w + cardWidth * 2,
        translateY: screen.h / 2,
        delay: '300',
        rotate: 900,
        duration: 2500,
      }).finished;
  }

  dealFour() {
    const { handPosX } = this.getLayoutInfo();
    anime.set('.card', { left: handPosX });
    return anime({
      targets: '.card',
      easing: 'easeOutQuint',
      ...this.spreadCards(4),
    }).finished;
  }

  dealFive() {
    const { cardWidth, handPosX, screen } = this.getLayoutInfo();

    anime.set('.card', { translateY: -500 });

    return anime({
      targets: '.card',
      easing: 'easeOutQuint',
      keyframes: [
        {
          translateY: 0,
          left: function(el, i) {
            return handPosX + i * (cardWidth / 6);
          },
          duration: 500,
          delay: anime.stagger(80),
        },
        this.spreadCards(5),
      ],
    }).finished;
  }

  spreadCards(count) {
    const { cardWidth, handPosX, screen } = this.getLayoutInfo();
    const padding = (screen.w - handPosX * 2 - cardWidth * count) / (count - 1);
    return {
      left: function(el, i) {
        return handPosX + i * (cardWidth + padding);
      },
      duration: 220,
      delay: anime.stagger(70, { direction: 'reverse' }),
    };
  }

  onBuildComplete() {
    this._navState.next.enabled = true;
    this._navState.prev = new NavItemState('Try Again', true);
    this._navState.next = new NavItemState('The Secret', true);
    this._options.sequencer.setNavState(this._navState);
  }
}

module.exports = DealCardsScene;
