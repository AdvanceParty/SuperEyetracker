// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"Card.js":[function(require,module,exports) {
var _TITLE;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SUIT = {
  CLUBS: 'clubs',
  HEARTS: 'hearts',
  SPADES: 'spades',
  DIAMONDS: 'diamonds'
};
var RANK = {
  ACE: '01',
  TWO: '02',
  THREE: '03',
  FOUR: '04',
  FIVE: '05',
  SIX: '06',
  SEVEN: '07',
  EIGHT: '08',
  NINE: '09',
  TEN: '10',
  JACK: '11',
  QUEEN: '12',
  KING: '13'
};
var TITLE = (_TITLE = {}, _defineProperty(_TITLE, RANK.ACE, 'Ace'), _defineProperty(_TITLE, RANK.TWO, 'Two'), _defineProperty(_TITLE, RANK.THREE, 'Three'), _defineProperty(_TITLE, RANK.FOUR, 'Four'), _defineProperty(_TITLE, RANK.FIVE, 'Five'), _defineProperty(_TITLE, RANK.SIX, 'Six'), _defineProperty(_TITLE, RANK.SEVEN, 'Seven'), _defineProperty(_TITLE, RANK.EIGHT, 'Eight'), _defineProperty(_TITLE, RANK.NINE, 'Nine'), _defineProperty(_TITLE, RANK.TEN, 'Ten'), _defineProperty(_TITLE, RANK.JACK, 'Jack'), _defineProperty(_TITLE, RANK.QUEEN, 'Queen'), _defineProperty(_TITLE, RANK.KING, 'King'), _TITLE);

var Card =
/*#__PURE__*/
function () {
  function Card(suit, rank) {
    _classCallCheck(this, Card);

    this._suit = suit;
    this._rank = rank;
  }

  _createClass(Card, [{
    key: "clone",
    value: function clone() {
      var _this$data = this.data,
          suit = _this$data.suit,
          rank = _this$data.rank;
      return new Card(suit, rank);
    }
  }, {
    key: "suit",
    get: function get() {
      return this._suit;
    }
  }, {
    key: "rank",
    get: function get() {
      return this._rank;
    }
  }, {
    key: "imageName",
    get: function get() {
      return "".concat(this.suit, "_").concat(this.rank, ".jpg");
    }
  }, {
    key: "data",
    get: function get() {
      return {
        suit: this.suit,
        rank: this.rank
      };
    }
  }, {
    key: "description",
    get: function get() {
      return "".concat(TITLE[this.rank], " of ").concat(this.suit);
    }
  }]);

  return Card;
}();

module.exports.RANK = RANK;
module.exports.SUIT = SUIT;
module.exports.Card = Card;
},{}],"CardView.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = require('./Card');

var CardView =
/*#__PURE__*/
function () {
  _createClass(CardView, null, [{
    key: "FaceUpClassName",
    get: function get() {
      return 'faceup';
    }
  }, {
    key: "ContainerClassName",
    get: function get() {
      return 'card';
    }
  }, {
    key: "ContainerType",
    get: function get() {
      return 'div';
    }
  }, {
    key: "imagePath",
    set: function set(path) {
      CardView._imagePath = path;
    },
    get: function get() {
      return CardView._imagePath || 'images/';
    }
  }]);

  function CardView(_ref) {
    var _this = this;

    var cardData = _ref.cardData,
        _ref$faceUp = _ref.faceUp,
        faceUp = _ref$faceUp === void 0 ? true : _ref$faceUp,
        _ref$imagePath = _ref.imagePath,
        imagePath = _ref$imagePath === void 0 ? CardView.imagePath : _ref$imagePath;

    _classCallCheck(this, CardView);

    this._data = cardData.clone();
    this._container = document.createElement(CardView.ContainerType);
    this._container.className = "".concat(CardView.ContainerClassName, " ").concat(cardData.suit, "-").concat(cardData.rank);

    this._container.onclick = function (e) {
      return _this.flip();
    }; // cards are face down by default.
    // flip it face up if the faceUp option is true


    if (faceUp) this.flip();
  }

  _createClass(CardView, [{
    key: "flip",
    value: function flip() {
      this._container.classList.toggle(CardView.FaceUpClassName);
    }
  }, {
    key: "cardData",
    get: function get() {
      return this._data.clone();
    }
  }, {
    key: "element",
    get: function get() {
      return this._container;
    }
  }, {
    key: "isFaceUp",
    get: function get() {
      return this._container.classList.contains(CardView.FaceUpClassName);
    }
  }]);

  return CardView;
}();

module.exports = CardView;
},{"./Card":"Card.js"}],"HandView.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CardView = require('./CardView');

var HandView =
/*#__PURE__*/
function () {
  function HandView(cards) {
    var _this = this;

    _classCallCheck(this, HandView);

    this._wrapper = document.createElement('div');
    this._wrapper.className = 'hand';
    this._cardViews = cards.map(function (cardData) {
      var view = new CardView({
        cardData: cardData
      });

      _this._wrapper.appendChild(view.element);

      return view;
    });
  }

  _createClass(HandView, [{
    key: "attach",
    value: function attach(parentElement) {
      // clear out current elements if already attach to a parent,
      if (this._parentElement) {
        this.destroy();
      }

      this._parentElement = parentElement;
      parentElement.appendChild(this._wrapper);
    }
  }, {
    key: "getCardViews",
    value: function getCardViews() {
      return this._cardViews;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      // remove the wrapper element (and the child cards) from the dom
      this._parentElement.removeChild(this._wrapper);

      this._parentElement = null;
      return null;
    }
  }]);

  return HandView;
}();

module.exports = HandView;
},{"./CardView":"CardView.js"}],"Sequencer.js":[function(require,module,exports) {
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var position = -1;
var items = [];

var Sequencer =
/*#__PURE__*/
function () {
  function Sequencer() {
    _classCallCheck(this, Sequencer);
  }

  _createClass(Sequencer, [{
    key: "addItem",
    value: function addItem(func) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (!func instanceof Function) {
        throw Error("Sequencer.addItem requires a Function. Can't add ".concat(_typeof(func), "."));
      } else {
        items.push({
          func: func,
          args: args
        });
      }
    }
  }, {
    key: "callNext",
    value: function callNext() {
      if (items.length == 0) {
        throw Error("You need to add items to the Sequencer before you can callNext");
      }

      if (++position >= items.length) {
        position = 0;
      }

      var _items$position = items[position],
          func = _items$position.func,
          args = _items$position.args;
      func(args);
    }
  }]);

  return Sequencer;
}();

module.exports = Sequencer;
},{}],"utils.js":[function(require,module,exports) {
/**
 * Fisher-Yates Shuffle algorithm
 * Return a new array -- the original is not altered
 */
var fyShuffle = function fyShuffle(array) {
  var shuffled = array.map(function (item) {
    return item;
  });

  for (var i = shuffled.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    var _ref = [shuffled[j], shuffled[i]];
    shuffled[i] = _ref[0];
    shuffled[j] = _ref[1];
  }

  return shuffled;
};

module.exports.fyShuffle = fyShuffle;
},{}],"Deck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./Card'),
    SUIT = _require.SUIT,
    FACE = _require.FACE,
    Card = _require.Card;

var _require2 = require('./utils'),
    fyShuffle = _require2.fyShuffle;

var Deck =
/*#__PURE__*/
function () {
  function Deck() {
    var cards = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, Deck);

    this._undrawn = [];
    this._drawn = [];
    this._size = 0;
    this._remaining = 0;

    if (cards) {
      this.add(cards);
    }
  }
  /**
   * Adds one more Card instances to the deck
   * obj = Card or Array[Cards]
   */


  _createClass(Deck, [{
    key: "add",
    value: function add(card) {
      var _this = this;

      // if a single item was supplied, wrap it into an array
      // so we can treat everything the same;
      newCards = card instanceof Array ? card : new Array(card);
      newCards.map(function (item) {
        if (item instanceof Card) {
          _this._undrawn.push(new Card(item.suit, item.rank));

          _this._size += 1;
        } else {
          throw Error("Can't add ".concat(item, ". Only objects of type 'Card' can be added to a deck."));
        }
      });
      return null;
    }
    /**
     * Randomises the order of cards in the _undrawn array.
     * Cards in the _drawn array are not affected.
     */

  }, {
    key: "shuffle",
    value: function shuffle() {
      this._undrawn = fyShuffle(this._undrawn);
    }
    /**
     * Moves all cards in from _drawn array into the _undrawn array
     */

  }, {
    key: "rebuild",
    value: function rebuild() {
      var _this2 = this;

      // iterate and unshift to preserve original order of deck
      // (assuming deck has not been shuffled since first card was drawn)
      this._drawn.map(function (card) {
        _this2._undrawn.unshift(card);
      });

      this._drawn.length = 0;
    }
    /**
     * Returns the total number of cards in the deck.
     * including any cards which have been drawn
     */

  }, {
    key: "drawCard",
    value: function drawCard() {
      var card = this._undrawn.pop();

      this._drawn.push(card);

      return card.clone();
    }
  }, {
    key: "drawCards",
    value: function drawCards(count) {
      if (count > this.undrawn) {
        throw Error("Can't deal ".concat(count, " cards. Only ").concat(this.undrawn, " cards are left in the deck!"));
      }

      var i = 0;
      var hand = [];

      while (i++ < count) {
        hand.push(this.drawCard());
      }

      return hand;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    }
    /**
     * Gets the remaininf number of cards which have not been drawn
     */

  }, {
    key: "undrawn",
    get: function get() {
      return this._undrawn.length;
    }
  }]);

  return Deck;
}();

module.exports = Deck;
},{"./Card":"Card.js","./utils":"utils.js"}],"decks.js":[function(require,module,exports) {
var _require = require('./Card'),
    Card = _require.Card,
    SUIT = _require.SUIT,
    RANK = _require.RANK;

var Deck = require('./Deck');

var blackDeck = new Deck([new Card(SUIT.CLUBS, RANK.JACK), new Card(SUIT.SPADES, RANK.JACK), new Card(SUIT.CLUBS, RANK.QUEEN), new Card(SUIT.SPADES, RANK.QUEEN), new Card(SUIT.CLUBS, RANK.KING), new Card(SUIT.SPADES, RANK.KING), new Card(SUIT.CLUBS, RANK.ACE), new Card(SUIT.SPADES, RANK.ACE)]);
var redDeck = new Deck([new Card(SUIT.HEARTS, RANK.JACK), new Card(SUIT.DIAMONDS, RANK.JACK), new Card(SUIT.HEARTS, RANK.QUEEN), new Card(SUIT.DIAMONDS, RANK.QUEEN), new Card(SUIT.HEARTS, RANK.KING), new Card(SUIT.DIAMONDS, RANK.KING), new Card(SUIT.HEARTS, RANK.ACE), new Card(SUIT.DIAMONDS, RANK.ACE)]);
var deck = new Deck([new Card(SUIT.CLUBS, RANK.JACK), new Card(SUIT.SPADES, RANK.KING), new Card(SUIT.DIAMONDS, RANK.ACE), new Card(SUIT.SPADES, RANK.JACK), new Card(SUIT.HEARTS, RANK.QUEEN), new Card(SUIT.SPADES, RANK.JACK), new Card(SUIT.HEARTS, RANK.ACE), new Card(SUIT.CLUBS, RANK.KING), new Card(SUIT.DIAMONDS, RANK.QUEEN)]);
module.exports.deck = deck;
module.exports.blackDeck = blackDeck;
module.exports.redDeck = redDeck;
},{"./Card":"Card.js","./Deck":"Deck.js"}],"index.js":[function(require,module,exports) {
var CardView = require('./CardView');

var HandView = require('./HandView');

var Sequencer = require('./Sequencer');

var table = document.querySelector('#table');
var continueBtn = document.querySelector('#btn_continue');
var sequence = new Sequencer();

var _require = require('./decks'),
    deck = _require.deck;

var currentHandView;

var intro = function intro() {
  var title = document.createElement('h1');
  title.innerText = 'Card Preference Prediction Algorithm';
  table.appendChild(title);
  deck.rebuild();
};

var clearTable = function clearTable() {
  // if (currentHandView) {
  //   currentHandView = currentHandView.destroy();
  // }
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
};

var dealCards = function dealCards(count) {
  return displayCards(deck.drawCards(count), table);
};
/**
 * Takes an array of Cards
 * and adds HTML elements to the table node in the don
 * @param {Array:Card} cards
 */


var displayCards = function displayCards(cards, container) {
  currentHandView = new HandView(cards);
  currentHandView.attach(table);
  var cardViews = currentHandView.getCardViews();
  return currentHandView;
};

var init = function init() {
  sequence.addItem(intro);
  sequence.addItem(clearTable);
  sequence.addItem(dealCards, 5);
  sequence.addItem(clearTable);
  sequence.addItem(dealCards, 4);
  sequence.addItem(clearTable); // temporary trigger to move from one step to the next

  continueBtn.onclick = function (e) {
    sequence.callNext();
  };
};

init();
},{"./CardView":"CardView.js","./HandView":"HandView.js","./Sequencer":"Sequencer.js","./decks":"decks.js"}],"../../../../.nvs/node/10.14.2/x64/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58608" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../.nvs/node/10.14.2/x64/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map