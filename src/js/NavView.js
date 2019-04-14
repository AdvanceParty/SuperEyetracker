const NavItemState = require('./NavItemState');

const onPrevClick = sequencer => {
  sequencer.previousScene();
};

const onNextClick = sequencer => {
  sequencer.nextScene();
};

const enableButton = btn => {
  btn.disabled = false;
};

const disableButton = btn => {
  btn.disabled = true;
};

class NavView {
  constructor(container, sequencer) {
    this._navState = {
      next: new NavItemState('Next', false),
      prev: new NavItemState('Back', false),
    };

    const btnNext = document.createElement('button');
    const btnPrev = document.createElement('button');
    btnNext.className = 'next';
    btnPrev.className = 'prev';

    this._container = container;
    this._nextButton = btnNext;
    this._sequencer = sequencer;
    this._prevButton = btnPrev;

    this._container.appendChild(this._prevButton);
    this._container.appendChild(this._nextButton);
    this._sequencer.registerNav(this);

    this.setNextEnabled(this._navState.next.enabled);
    this.setPrevEnabled(this._navState.prev.enabled);

    this.setNextLabel(this._navState.next.label);
    this.setPrevLabel(this._navState.prev.label);

    this._nextButton.onclick = () => onNextClick(this._sequencer);
    this._prevButton.onclick = () => onPrevClick(this._sequencer);
  }

  destroy() {
    this._container.removeChild(this._nextButton);
    this._container.removeChild(this._prevButton);
  }

  updateNavState(nextItemState, prevItemState) {
    const currentNextState = this._navState.next;
    const currentPrevState = this._navState.prev;
    if (NavItemState.AreDifferent(nextItemState, currentNextState)) {
      this.setNextLabel(nextItemState.label);
      this.setNextEnabled(nextItemState.enabled);
      this._navState.next = nextItemState.clone();
    }

    if (NavItemState.AreDifferent(prevItemState, currentPrevState)) {
      this.setPrevLabel(prevItemState.label);
      this.setPrevEnabled(prevItemState.enabled);
      this._navState.prev = prevItemState.clone();
    }
  }

  setNextLabel(str) {
    this._nextButton.innerText = str;
  }
  setPrevLabel(str) {
    this._prevButton.innerText = str;
  }

  setNextEnabled(bool) {
    bool ? enableButton(this._nextButton) : disableButton(this._nextButton);
  }

  setPrevEnabled(bool) {
    bool ? enableButton(this._prevButton) : disableButton(this._prevButton);
  }
}

module.exports = NavView;
