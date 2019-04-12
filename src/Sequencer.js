const Scene = require('./Scene');

const MESSAGES = {
  INVALID_CLASS_ERROR: `You can only add Scene or Scene subclasses to a Sequencer`,
  NO_SCENES_ADDED_ERROR: `No scenes added to Sequencer`,
};

class Sequencer {
  constructor() {
    this._scenes = [];
    this._setCurrentScene(null, -1);
  }

  addScene(sceneClass, containerElement, options) {
    if (!sceneClass instanceof Scene) {
      throw Error(MESSAGES.INVALID_CLASS_ERROR);
    } else {
      const obj = { sceneClass, containerElement, options };
      this._scenes.push(obj);
    }
  }

  async nextScene() {
    if (this._scenes.length == 0) {
      throw Error(MESSAGES.NO_SCENES_ADDED_ERROR);
    }

    if (this._currentScene) {
      await this._currentScene.exit();
    }

    const sceneNumber = this.getNextSceneNumber();
    const sceneData = this._scenes[sceneNumber];
    const { sceneClass, containerElement, options } = sceneData;
    const sceneInstance = new sceneClass(containerElement, options);

    this._setCurrentScene(sceneInstance, sceneNumber);
  }

  getNextSceneNumber() {
    const posPlusOne = this._sceneNumber + 1;
    return posPlusOne < this._scenes.length ? posPlusOne : 0;
  }

  _setCurrentScene(sceneInstance, sceneNumber) {
    this._currentScene = sceneInstance;
    this._sceneNumber = sceneNumber;
  }
}

module.exports = Sequencer;
