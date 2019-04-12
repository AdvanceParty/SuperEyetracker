let position = -1;
const items = [];

class Sequencer {
  constructor() {}

  addItem(func, ...args) {
    if (!func instanceof Function) {
      throw Error(`Sequencer.addItem requires a Function. Can't add ${typeof func}.`);
    } else {
      items.push({ func, args });
    }
  }

  callNext() {
    if (items.length == 0) {
      throw Error(`You need to add items to the Sequencer before you can callNext`);
    }
    if (++position >= items.length) {
      position = 0;
    }
    const { func, args } = items[position];
    func(args);
  }
}

module.exports = Sequencer;
