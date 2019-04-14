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
    const btnNext = document.createElement('button');
    const btnPrev = document.createElement('button');

    btnNext.className = 'next';
    btnNext.innerText = 'Next';
    btnPrev.className = 'prev';
    btnPrev.innerText = 'Back';

    this._container = container;
    this._nextButton = btnNext;
    this._prevButton = btnPrev;
    this._sequencer = sequencer;

    this._container.appendChild(this._prevButton);
    this._container.appendChild(this._nextButton);
    this._sequencer.registerNav(this);

    this.setNextEnabled(false);
    this.setPrevEnabled(false);

    this._nextButton.onclick = () => onNextClick(this._sequencer);
    this._prevButton.onclick = () => onPrevClick(this._sequencer);
  }

  destroy() {
    this._container.removeChild(this._nextButton);
    this._container.removeChild(this._prevButton);
  }

  setNextEnabled(bool) {
    bool ? enableButton(this._nextButton) : disableButton(this._nextButton);
  }

  setPrevEnabled(bool) {
    bool ? enableButton(this._prevButton) : disableButton(this._prevButton);
  }
}

module.exports = NavView;
