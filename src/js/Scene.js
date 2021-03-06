const NavItemState = require('./NavItemState');
const DEFAULT_CLASS_NAME = 'scene';

class Scene {
  constructor(parent, options) {
    this._navState = {
      next: new NavItemState('Next', false),
      prev: new NavItemState('Back', false),
    };
    this._parentElement = parent;
    this._container = document.createElement('section');
    this._container.className = options.className || DEFAULT_CLASS_NAME;
    this._parentElement.appendChild(this._container);
    this._options = options;

    this.configure(options);
    this._options.sequencer.setNavState(this._navState);

    this.startBuild();
  }

  async startBuild() {
    await this.build();
    this.onBuildComplete();
  }

  /**
   * Default configure method just iterates over the {options} object
   * and creates an instance prop with pattern _{optionsPropname}.optionsPropValue
   * @param {object} options
   */
  configure(options) {
    Object.keys(options).map(key => {
      this[`_${key}`] = options[key];
    });
  }

  /**
   * Override this in subclasses if you need to do any
   * custom transition effects or other async tasks.
   * Make sure you return a promise in your subclass method
   */
  build() {
    return new Promise((resolve, reject) => {
      resolve(true);
    });
  }

  /**
   * Override in subclasses if you need to run code after the
   * initial build() mehthod has completed.
   */
  onBuildComplete() {
    this._navState.next.enabled = true;
    this._navState.prev.enabled = true;
    this._options.sequencer.setNavState(this._navState);
  }

  /**
   * Default behaviour is just to remove all children of the
   * DomElement referenced in Scene's _container property.
   * Override this in subclasses if you need to do any
   * custom transition effects or other async tasks.
   * Make sure you return a promise in your subclass method
   */
  exit() {
    return new Promise((resolve, reject) => {
      while (this._parentElement.firstChild) {
        this._parentElement.removeChild(this._parentElement.firstChild);
      }
      resolve(true);
    });
  }

  triggerNextScene() {
    this._options.sequencer.nextScene();
  }

  continue() {
    this.exit();
    this.triggerNextScene();
  }
}

module.exports = Scene;
