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
},{}],"Deck.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./Card'),
    SUIT = _require.SUIT,
    FACE = _require.FACE,
    Card = _require.Card;

var Deck =
/*#__PURE__*/
function () {
  function Deck() {
    _classCallCheck(this, Deck);

    this._undrawn = [];
    this._drawn = [];
    this._size = 0;
    this._remaining = 0;
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
      this._undrawn = [].concat(_toConsumableArray(this._undrawn), _toConsumableArray(this._drawn));
      this.drawn = [];
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
    key: "dealHand",
    value: function dealHand(count) {
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
/**
 * Fisher-Yates Shuffle algorithm
 * Return a new array -- the original is not altered
 */


function fyShuffle(array) {
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
}

module.exports = Deck;
},{"./Card":"Card.js"}],"CardView.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Card = require('./Card');

var CardView =
/*#__PURE__*/
function () {
  _createClass(CardView, null, [{
    key: "imagePath",
    set: function set(path) {
      CardView._imagePath = path;
    },
    get: function get() {
      return CardView._imagePath || 'images/';
    }
  }]);

  function CardView(cardData) {
    var imagePath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CardView.imagePath;

    _classCallCheck(this, CardView);

    this._data = cardData.clone();
    var containerEl = document.createElement('div');
    containerEl.className = "card ".concat(cardData.suit, "-").concat(cardData.rank);
    this._container = containerEl;
  }

  _createClass(CardView, [{
    key: "cardData",
    get: function get() {
      return this._data.clone();
    }
  }, {
    key: "element",
    get: function get() {
      return this._container;
    }
  }]);

  return CardView;
}();

module.exports = CardView;
},{"./Card":"Card.js"}],"images/*.*":[function(require,module,exports) {
module.exports = {};
},{}],"index.js":[function(require,module,exports) {
var _require = require('./Card'),
    Card = _require.Card,
    SUIT = _require.SUIT,
    RANK = _require.RANK;

var Deck = require('./Deck');

var CardView = require('./CardView');

var images = require('./images/*.*');

var deck = new Deck();
var table = document.querySelector('#table');
deck.add([new Card(SUIT.CLUBS, RANK.JACK), new Card(SUIT.HEARTS, RANK.JACK), new Card(SUIT.SPADES, RANK.JACK), new Card(SUIT.DIAMONDS, RANK.JACK), new Card(SUIT.CLUBS, RANK.QUEEN), new Card(SUIT.HEARTS, RANK.QUEEN), new Card(SUIT.SPADES, RANK.QUEEN), new Card(SUIT.DIAMONDS, RANK.QUEEN), new Card(SUIT.CLUBS, RANK.KING), new Card(SUIT.HEARTS, RANK.KING), new Card(SUIT.SPADES, RANK.KING), new Card(SUIT.DIAMONDS, RANK.KING), new Card(SUIT.CLUBS, RANK.ACE), new Card(SUIT.HEARTS, RANK.ACE), new Card(SUIT.SPADES, RANK.ACE), new Card(SUIT.DIAMONDS, RANK.ACE)]);

var init = function init() {
  deck.shuffle();
  dealRoundOne();
};

var dealRoundOne = function dealRoundOne() {
  var hand = deck.dealHand(5);
  var cardViews = hand.map(function (card) {
    var cView = new CardView(card);
    table.appendChild(cView.element);
    return cView;
  });
  console.log(cardViews);
};

init();
},{"./Card":"Card.js","./Deck":"Deck.js","./CardView":"CardView.js","./images/*.*":"images/*.*"}],"../../../../.nvs/node/10.14.2/x64/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "63128" + '/');

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