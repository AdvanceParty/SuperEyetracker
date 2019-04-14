class NavItemState {
  static AreDifferent(item1, item2) {
    return item1.enabled != item2.enabled || item1.label != item2.label;
  }

  constructor(label, enabled = false) {
    this._label = label;
    this._enabled = enabled;
  }

  set enabled(bool) {
    this._enabled = bool;
  }
  set label(str) {
    this._label = label;
  }

  get label() {
    return this._label;
  }
  get enabled() {
    return this._enabled;
  }

  clone() {
    return new NavItemState(this.label, this.enabled);
  }
}

module.exports = NavItemState;
