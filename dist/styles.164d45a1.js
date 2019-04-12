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
})({"../../../../.nvs/node/10.14.2/x64/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../.nvs/node/10.14.2/x64/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../.nvs/node/10.14.2/x64/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./images/cards/back.jpg":[["back.bc7df221.jpg","images/cards/back.jpg"],"images/cards/back.jpg"],"./images/cards/hearts_01.jpg":[["hearts_01.3ac9621d.jpg","images/cards/hearts_01.jpg"],"images/cards/hearts_01.jpg"],"./images/cards/hearts_02.jpg":[["hearts_02.533958c1.jpg","images/cards/hearts_02.jpg"],"images/cards/hearts_02.jpg"],"./images/cards/hearts_03.jpg":[["hearts_03.6a1c3f07.jpg","images/cards/hearts_03.jpg"],"images/cards/hearts_03.jpg"],"./images/cards/hearts_04.jpg":[["hearts_04.6e818773.jpg","images/cards/hearts_04.jpg"],"images/cards/hearts_04.jpg"],"./images/cards/hearts_05.jpg":[["hearts_05.d9f263c7.jpg","images/cards/hearts_05.jpg"],"images/cards/hearts_05.jpg"],"./images/cards/hearts_06.jpg":[["hearts_06.321ff50a.jpg","images/cards/hearts_06.jpg"],"images/cards/hearts_06.jpg"],"./images/cards/hearts_07.jpg":[["hearts_07.4ec3e555.jpg","images/cards/hearts_07.jpg"],"images/cards/hearts_07.jpg"],"./images/cards/hearts_08.jpg":[["hearts_08.91e5f553.jpg","images/cards/hearts_08.jpg"],"images/cards/hearts_08.jpg"],"./images/cards/hearts_09.jpg":[["hearts_09.9ca249fc.jpg","images/cards/hearts_09.jpg"],"images/cards/hearts_09.jpg"],"./images/cards/hearts_10.jpg":[["hearts_10.58420ae4.jpg","images/cards/hearts_10.jpg"],"images/cards/hearts_10.jpg"],"./images/cards/hearts_11.jpg":[["hearts_11.af5713b1.jpg","images/cards/hearts_11.jpg"],"images/cards/hearts_11.jpg"],"./images/cards/hearts_12.jpg":[["hearts_12.31949ced.jpg","images/cards/hearts_12.jpg"],"images/cards/hearts_12.jpg"],"./images/cards/hearts_13.jpg":[["hearts_13.9963e2f4.jpg","images/cards/hearts_13.jpg"],"images/cards/hearts_13.jpg"],"./images/cards/clubs_01.jpg":[["clubs_01.50c3197a.jpg","images/cards/clubs_01.jpg"],"images/cards/clubs_01.jpg"],"./images/cards/clubs_02.jpg":[["clubs_02.3f09c7bc.jpg","images/cards/clubs_02.jpg"],"images/cards/clubs_02.jpg"],"./images/cards/clubs_03.jpg":[["clubs_03.e5cfebe9.jpg","images/cards/clubs_03.jpg"],"images/cards/clubs_03.jpg"],"./images/cards/clubs_04.jpg":[["clubs_04.767ff2fc.jpg","images/cards/clubs_04.jpg"],"images/cards/clubs_04.jpg"],"./images/cards/clubs_05.jpg":[["clubs_05.d0327b5c.jpg","images/cards/clubs_05.jpg"],"images/cards/clubs_05.jpg"],"./images/cards/clubs_06.jpg":[["clubs_06.71404abb.jpg","images/cards/clubs_06.jpg"],"images/cards/clubs_06.jpg"],"./images/cards/clubs_07.jpg":[["clubs_07.349bbc31.jpg","images/cards/clubs_07.jpg"],"images/cards/clubs_07.jpg"],"./images/cards/clubs_08.jpg":[["clubs_08.7c9a2d32.jpg","images/cards/clubs_08.jpg"],"images/cards/clubs_08.jpg"],"./images/cards/clubs_09.jpg":[["clubs_09.119f0b9a.jpg","images/cards/clubs_09.jpg"],"images/cards/clubs_09.jpg"],"./images/cards/clubs_10.jpg":[["clubs_10.f64e1662.jpg","images/cards/clubs_10.jpg"],"images/cards/clubs_10.jpg"],"./images/cards/clubs_11.jpg":[["clubs_11.54c004db.jpg","images/cards/clubs_11.jpg"],"images/cards/clubs_11.jpg"],"./images/cards/clubs_12.jpg":[["clubs_12.50ea9da1.jpg","images/cards/clubs_12.jpg"],"images/cards/clubs_12.jpg"],"./images/cards/clubs_13.jpg":[["clubs_13.a675f595.jpg","images/cards/clubs_13.jpg"],"images/cards/clubs_13.jpg"],"./images/cards/spades_01.jpg":[["spades_01.dabae6d2.jpg","images/cards/spades_01.jpg"],"images/cards/spades_01.jpg"],"./images/cards/spades_02.jpg":[["spades_02.e74fb092.jpg","images/cards/spades_02.jpg"],"images/cards/spades_02.jpg"],"./images/cards/spades_03.jpg":[["spades_03.6aa2c084.jpg","images/cards/spades_03.jpg"],"images/cards/spades_03.jpg"],"./images/cards/spades_04.jpg":[["spades_04.372788ab.jpg","images/cards/spades_04.jpg"],"images/cards/spades_04.jpg"],"./images/cards/spades_05.jpg":[["spades_05.f7b20069.jpg","images/cards/spades_05.jpg"],"images/cards/spades_05.jpg"],"./images/cards/spades_06.jpg":[["spades_06.9f271c5a.jpg","images/cards/spades_06.jpg"],"images/cards/spades_06.jpg"],"./images/cards/spades_07.jpg":[["spades_07.09c7c79a.jpg","images/cards/spades_07.jpg"],"images/cards/spades_07.jpg"],"./images/cards/spades_08.jpg":[["spades_08.be1ecf14.jpg","images/cards/spades_08.jpg"],"images/cards/spades_08.jpg"],"./images/cards/spades_09.jpg":[["spades_09.ff81cfdb.jpg","images/cards/spades_09.jpg"],"images/cards/spades_09.jpg"],"./images/cards/spades_10.jpg":[["spades_10.8b1babd9.jpg","images/cards/spades_10.jpg"],"images/cards/spades_10.jpg"],"./images/cards/spades_11.jpg":[["spades_11.07139fc6.jpg","images/cards/spades_11.jpg"],"images/cards/spades_11.jpg"],"./images/cards/spades_12.jpg":[["spades_12.e54d7b65.jpg","images/cards/spades_12.jpg"],"images/cards/spades_12.jpg"],"./images/cards/spades_13.jpg":[["spades_13.9579786c.jpg","images/cards/spades_13.jpg"],"images/cards/spades_13.jpg"],"./images/cards/diamonds_01.jpg":[["diamonds_01.be44de52.jpg","images/cards/diamonds_01.jpg"],"images/cards/diamonds_01.jpg"],"./images/cards/diamonds_02.jpg":[["diamonds_02.1de3c7c7.jpg","images/cards/diamonds_02.jpg"],"images/cards/diamonds_02.jpg"],"./images/cards/diamonds_03.jpg":[["diamonds_03.f29fbbb2.jpg","images/cards/diamonds_03.jpg"],"images/cards/diamonds_03.jpg"],"./images/cards/diamonds_04.jpg":[["diamonds_04.3d727c4a.jpg","images/cards/diamonds_04.jpg"],"images/cards/diamonds_04.jpg"],"./images/cards/diamonds_05.jpg":[["diamonds_05.f9fcef40.jpg","images/cards/diamonds_05.jpg"],"images/cards/diamonds_05.jpg"],"./images/cards/diamonds_06.jpg":[["diamonds_06.425eb134.jpg","images/cards/diamonds_06.jpg"],"images/cards/diamonds_06.jpg"],"./images/cards/diamonds_07.jpg":[["diamonds_07.bc8d26d4.jpg","images/cards/diamonds_07.jpg"],"images/cards/diamonds_07.jpg"],"./images/cards/diamonds_08.jpg":[["diamonds_08.90d1b186.jpg","images/cards/diamonds_08.jpg"],"images/cards/diamonds_08.jpg"],"./images/cards/diamonds_09.jpg":[["diamonds_09.29b01050.jpg","images/cards/diamonds_09.jpg"],"images/cards/diamonds_09.jpg"],"./images/cards/diamonds_10.jpg":[["diamonds_10.c7aa390b.jpg","images/cards/diamonds_10.jpg"],"images/cards/diamonds_10.jpg"],"./images/cards/diamonds_11.jpg":[["diamonds_11.590fc4b0.jpg","images/cards/diamonds_11.jpg"],"images/cards/diamonds_11.jpg"],"./images/cards/diamonds_12.jpg":[["diamonds_12.2d1e4666.jpg","images/cards/diamonds_12.jpg"],"images/cards/diamonds_12.jpg"],"./images/cards/diamonds_13.jpg":[["diamonds_13.77099944.jpg","images/cards/diamonds_13.jpg"],"images/cards/diamonds_13.jpg"],"_css_loader":"../../../../.nvs/node/10.14.2/x64/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../../../../.nvs/node/10.14.2/x64/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../../../.nvs/node/10.14.2/x64/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/styles.164d45a1.js.map