const Scene = require('./Scene');
const NavItemState = require('./NavItemState');

const MESSAGES = {
  INVALID_CLASS_ERROR: `You can only add Scene or Scene subclasses to a Sequencer`,
  NO_SCENES_ADDED_ERROR: `No scenes added to Sequencer`,
  SCENE_NOT_AVAILABLE_ERROR: `Requested scene does not exist`,
};

const dispatchNavStatus = (navViews, navState) => {
  return navViews.filter(view => {
    let viewIsValid = true;
    try {
      const { next, prev } = navState;
      view.updateNavState(next, prev);
    } catch (e) {
      viewIsValid = false;
    }
    return viewIsValid;
  });
};

class Sequencer {
  constructor() {
    this._scenes = [];
    this._navViews = [];
    this._navState = {
      next: new NavItemState('Next', false),
      prev: new NavItemState('Back', false),
    };
    this._setCurrentScene(null, -1);
  }

  addScene(sceneClass, containerElement, options) {
    if (!sceneClass instanceof Scene) {
      throw Error(MESSAGES.INVALID_CLASS_ERROR);
    } else {
      const obj = { sceneClass, containerElement, options: { ...options, sequencer: this } };
      this._scenes.push(obj);
    }
  }

  async goToScene(sceneNumber) {
    // make sure at least one scene has been added
    // and the requested scene is not out of bounds
    if (this._scenes.length == 0) {
      throw Error(MESSAGES.NO_SCENES_ADDED_ERROR);
    } else if (sceneNumber >= this._scenes.length || sceneNumber < 0) {
      throw Error(MESSAGES.SCENE_NOT_AVAILABLE_ERROR);
    }

    if (this._currentScene) {
      await this._currentScene.exit();
    }
    const sceneData = this._scenes[sceneNumber];
    const { sceneClass, containerElement, options } = sceneData;
    const sceneInstance = new sceneClass(containerElement, options);

    this._setCurrentScene(sceneInstance, sceneNumber);
  }

  nextScene() {
    const posPlusOne = this._sceneNumber + 1;
    const nextSceneNum = posPlusOne < this._scenes.length ? posPlusOne : 0;
    this.goToScene(nextSceneNum);
  }

  previousScene() {
    const posMinusOne = this._sceneNumber - 1;
    const nextSceneNum = posMinusOne >= 0 ? posMinusOne : this._scenes.length - 1;
    this.goToScene(nextSceneNum);
  }

  registerNav(navView) {
    this._navViews.push(navView);
  }

  _setCurrentScene(sceneInstance, sceneNumber) {
    this._currentScene = sceneInstance;
    this._sceneNumber = sceneNumber;
  }

  setNextNavState(navItemState) {
    const { next } = this._navState;
    if (NavItemState.AreDifferent(navItemState, next)) {
      this._navState.next = navItemState.clone();
      dispatchNavStatus(this._navViews, this._navState);
    }
  }

  setPrevNavState(navItemState) {
    const { prev } = this._navState;
    if (NavItemState.AreDifferent(navItemState, prev)) {
      this._navState.prev = navItemState.clone();
      dispatchNavStatus(this._navViews, this._navState);
    }
  }

  // setPrevEnabled(bool) {
  //   const { next } = this._navState;
  //   this.setNextPrevEnabled(next, bool);
  // }

  // setNextPrevEnabled(enableNext, enablePrev) {
  //   const { next, prev } = this._navState;
  //   if (next != enableNext || prev != enablePrev) {
  //     this._navState = { next: enableNext, prev: enablePrev };
  //     dispatchNavStatus(this._navViews, this._navState);
  //   }
  // }

  get nextEnabled() {
    return this._navState.next;
  }
  get prevEnabled() {
    return this._navState.next;
  }
}

module.exports = Sequencer;
