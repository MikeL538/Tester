// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2UeK4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var _consoleLogDivShow = require("./js/consoleLogDivShow"); //Show console.log infos and errors in Console.log div
var _test = require("./js/test"); // import "./js/isNumberInArray"; //Check if the number is in Array
 // import "./js/easyCallback"; //Takes cost from input1
 // import "./js/mediumCallback"; //Shows number bigger than callback (input1) from array input2 separated by space
 // import "./js/randomRGB"; //Random bg color with rgb code
 // import "./js/slim-select"; //Slim-select library
 // import "./js/fetch"; //Fetch, getting information from data-base

},{"./js/consoleLogDivShow":"3l6bs","./js/test":"2ho4Z"}],"3l6bs":[function(require,module,exports) {
const consoleLog = document.querySelector(".console-log");
if (typeof console != "undefined") {
    if (typeof console.log != "undefined") console.olog = console.log;
    else console.olog = function() {};
}
console.log = function(message) {
    console.olog(message);
    const br = document.createElement("br");
    consoleLog.append(message);
    consoleLog.append(br);
};
console.error = console.debug = console.info = console.log;
window.onerror = function(message, source, line, column, error) {
    console.error(message);
};

},{}],"2ho4Z":[function(require,module,exports) {
const click = document.querySelector(".click");
const div = document.querySelector(".div");
const divBig = document.querySelector(".div-tests");
const info = document.querySelector(".info");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const function1 = document.querySelector(".function1");
const function2 = document.querySelector(".function2");
const select = document.querySelector("#select");
const checkbox = document.querySelectorAll(".checkbox");
const range = document.querySelector(".range");
div.innerHTML += "W A S D to move";
const player = document.createElement("div");
player.setAttribute("id", "player");
player.style.width = "75px";
player.style.height = "75px";
player.style.border = "1px solid";
div.append(player);
let xTranslation = 0;
let yTranslation = 0;
document.addEventListener("keydown", (event)=>{
    if (event.key === "s") yTranslation += 10;
    else if (event.key === "w") yTranslation += -10;
    else if (event.key === "a") xTranslation += -10;
    else if (event.key === "d") xTranslation += 10;
    player.style.transform = `translate(${xTranslation}px, ${yTranslation}px)`;
}); ///////////////////////////////////////////////////////
 // Zmiania rozmiaru czcionki elementu
 // za pomocą kółka myszy na elemencie (wheel)
 // let h1let;
 // let h3let;
 // let h6let;
 // let font1 = 22;
 // let font2 = 20;
 // let font3 = 18;
 // window.onload = function () {
 //   const h1 = document.createElement("h1");
 //   const h3 = document.createElement("h3");
 //   const h6 = document.createElement("h6");
 //   h1.textContent = "This is H1";
 //   h3.textContent = "This is H2";
 //   h6.textContent = "This is H3";
 //   h1.style.fontSize = font1 + "px";
 //   h3.style.fontSize = font2 + "px";
 //   h6.style.fontSize = font3 + "px";
 //   div.appendChild(h1);
 //   div.appendChild(h3);
 //   div.appendChild(h6);
 //   h1let = document.querySelector("h1");
 //   h3let = document.querySelector("h3");
 //   h6let = document.querySelector("h6");
 //   h1let.addEventListener("wheel", (e) => {
 //     e.preventDefault();
 //     if (e.deltaY < 0) {
 //       h1.style.fontSize = font1++ + "px";
 //     } else {
 //       h1.style.fontSize = font1-- + "px";
 //     }
 //   });
 //   h3let.addEventListener("wheel", (e) => {
 //     e.preventDefault();
 //     if (e.deltaY < 0) {
 //       h3.style.fontSize = font2++ + "px";
 //     } else {
 //       h3.style.fontSize = font2-- + "px";
 //     }
 //   });
 //   h6let.addEventListener("wheel", (e) => {
 //     e.preventDefault();
 //     if (e.deltaY < 0) {
 //       h6.style.fontSize = font3++ + "px";
 //     } else {
 //       h6.style.fontSize = font3-- + "px";
 //     }
 //   });
 // };
 ///////////////////////////////////////////////////////
 // Zmiania rozmiaru czcionki za pomocą kółka myszy (wheel)
 // const body = document.querySelector("body");
 // let font = 20;
 // div.innerHTML = "Kręć kołem kręć!";
 // body.style.fontSize = font + "px";
 // div.addEventListener("wheel", (e) => {
 //   e.preventDefault();
 //   if (e.deltaY < 0) {
 //     body.style.fontSize = font++ + "px";
 //   } else {
 //     body.style.fontSize = font-- + "px";
 //   }
 // });
 ///////////////////////////////////////////////////////
 // Dodawanie do ofert klucza z wartością
 // const wycieczki = [
 //   {
 //     ido: "1",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "Z widokiem na PoĹoniny",
 //     cena: "560",
 //   },
 //   {
 //     ido: "2",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "WokĂłĹ Soliny",
 //     cena: "780",
 //   },
 //   {
 //     ido: "3",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "Na styku trzech granic",
 //     cena: "730",
 //   },
 //   {
 //     ido: "4",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "Dolina KoĹcieliska",
 //     cena: "140",
 //   },
 //   {
 //     ido: "5",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "W stronÄ Kasprowego Wierchu",
 //     cena: "320",
 //   },
 //   {
 //     ido: "7",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "Z PiÄciu StawĂłw na Morskie Oko",
 //     cena: "560",
 //   },
 //   {
 //     ido: "8",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Karkonosze",
 //     nazwa: "ĹnieĹźne KotĹy i Szrenica",
 //     cena: "456",
 //   },
 //   {
 //     ido: "9",
 //     potwierdzenie: "1",
 //     kraj: "Czechy",
 //     rejon: "Praga",
 //     nazwa: "Skarby Pragi",
 //     cena: "999",
 //   },
 //   {
 //     ido: "10",
 //     potwierdzenie: "1",
 //     kraj: "Czechy",
 //     rejon: "GĂłry StoĹowe",
 //     nazwa: "Czeskie GĂłry StoĹowe (Adrspach / Teplice nad Metuji) ",
 //     cena: "890",
 //   },
 //   {
 //     ido: "11",
 //     potwierdzenie: "0",
 //     kraj: "SĹowenia",
 //     rejon: "Jezioro Blad i Alpy ",
 //     nazwa: "Rzut oka na sĹoweĹskie Alpy.",
 //     cena: "1100",
 //   },
 //   {
 //     ido: "12",
 //     potwierdzenie: "1",
 //     kraj: "Chorwacja",
 //     rejon: "Split i Plitwickie Jeziora",
 //     nazwa: "TrĂłjkÄt piÄknych widokĂłw. Split - Szybenik - Plitwickie Jeziora",
 //     cena: "1200",
 //   },
 //   {
 //     ido: "13",
 //     potwierdzenie: "1",
 //     kraj: "WĹochy",
 //     rejon: "WĹochy w tydzieĹ",
 //     nazwa: "WĹochy wycieczka objazdowa",
 //     cena: "1999",
 //   },
 //   {
 //     ido: "14",
 //     potwierdzenie: "1",
 //     kraj: "SĹowacja",
 //     rejon: "Tatry SĹowackie",
 //     nazwa: "Ĺomnica - dach Tatr",
 //     cena: "599",
 //   },
 //   {
 //     ido: "15",
 //     potwierdzenie: "1",
 //     kraj: "SĹowacja",
 //     rejon: "Tatry SĹowackie / NiĹźne Tatry",
 //     nazwa: "SĹowackie Jaskinie",
 //     cena: "499",
 //   },
 //   {
 //     ido: "16",
 //     potwierdzenie: "0",
 //     kraj: "Niemcy",
 //     rejon: "Niemcy pĂłĹnocne",
 //     nazwa: "Niemieckie pereĹki",
 //     cena: "599",
 //   },
 //   {
 //     ido: "17",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Polesie",
 //     nazwa: "Na bagnach",
 //     cena: "499",
 //   },
 // ];
 // for (const trip of wycieczki) {
 //   if (trip.kraj === "Polska") {
 //     trip.rok = "2022";
 //     for (const key in trip) {
 //       if (key !== "potwierdzenie") {
 //         div.innerHTML += `${key}: ${trip[key]} <br>`;
 //       }
 //     }
 //     div.innerHTML += `<br>`;
 //   }
 // }
 // for (const trip of wycieczki) {
 //   for (const key in trip) {
 //     console.log(`${key}: ${trip[key]}`);
 //   }
 //   console.log(`-----------------`);
 // }
 ///////////////////////////////////////////////////////
 // Wyświetlanie ofert, które mają tylko daną specyfikajce
 // const wycieczki = [
 //   {
 //     ido: "1",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "Z widokiem na PoĹoniny",
 //     cena: "560",
 //   },
 //   {
 //     ido: "2",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "WokĂłĹ Soliny",
 //     cena: "780",
 //   },
 //   {
 //     ido: "3",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "Na styku trzech granic",
 //     cena: "730",
 //   },
 //   {
 //     ido: "4",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "Dolina KoĹcieliska",
 //     cena: "140",
 //   },
 //   {
 //     ido: "5",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "W stronÄ Kasprowego Wierchu",
 //     cena: "320",
 //   },
 //   {
 //     ido: "7",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "Z PiÄciu StawĂłw na Morskie Oko",
 //     cena: "560",
 //   },
 //   {
 //     ido: "8",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Karkonosze",
 //     nazwa: "ĹnieĹźne KotĹy i Szrenica",
 //     cena: "456",
 //   },
 //   {
 //     ido: "9",
 //     potwierdzenie: "1",
 //     kraj: "Czechy",
 //     rejon: "Praga",
 //     nazwa: "Skarby Pragi",
 //     cena: "999",
 //   },
 //   {
 //     ido: "10",
 //     potwierdzenie: "1",
 //     kraj: "Czechy",
 //     rejon: "GĂłry StoĹowe",
 //     nazwa: "Czeskie GĂłry StoĹowe (Adrspach / Teplice nad Metuji) ",
 //     cena: "890",
 //   },
 //   {
 //     ido: "11",
 //     potwierdzenie: "0",
 //     kraj: "SĹowenia",
 //     rejon: "Jezioro Blad i Alpy ",
 //     nazwa: "Rzut oka na sĹoweĹskie Alpy.",
 //     cena: "1100",
 //   },
 //   {
 //     ido: "12",
 //     potwierdzenie: "1",
 //     kraj: "Chorwacja",
 //     rejon: "Split i Plitwickie Jeziora",
 //     nazwa: "TrĂłjkÄt piÄknych widokĂłw. Split - Szybenik - Plitwickie Jeziora",
 //     cena: "1200",
 //   },
 //   {
 //     ido: "13",
 //     potwierdzenie: "1",
 //     kraj: "WĹochy",
 //     rejon: "WĹochy w tydzieĹ",
 //     nazwa: "WĹochy wycieczka objazdowa",
 //     cena: "1999",
 //   },
 //   {
 //     ido: "14",
 //     potwierdzenie: "1",
 //     kraj: "SĹowacja",
 //     rejon: "Tatry SĹowackie",
 //     nazwa: "Ĺomnica - dach Tatr",
 //     cena: "599",
 //   },
 //   {
 //     ido: "15",
 //     potwierdzenie: "1",
 //     kraj: "SĹowacja",
 //     rejon: "Tatry SĹowackie / NiĹźne Tatry",
 //     nazwa: "SĹowackie Jaskinie",
 //     cena: "499",
 //   },
 //   {
 //     ido: "16",
 //     potwierdzenie: "0",
 //     kraj: "Niemcy",
 //     rejon: "Niemcy pĂłĹnocne",
 //     nazwa: "Niemieckie pereĹki",
 //     cena: "599",
 //   },
 //   {
 //     ido: "17",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Polesie",
 //     nazwa: "Na bagnach",
 //     cena: "499",
 //   },
 // ];
 // divBig.style.display = "flex";
 // divBig.style.flexDirection = "column";
 // divBig.style.alignItems = "center";
 // for (const trip of wycieczki) {
 //   if (trip.ido !== "5") {
 //     if (trip.kraj === "Polska") {
 //       const diva = document.createElement("div");
 //       divBig.append(diva);
 //       const trips = trip;
 //       diva.style.width = "250px";
 //       diva.style.height = "150px";
 //       diva.style.textAlign = "center";
 //       for (const key in trips) {
 //         if (key !== "potwierdzenie") {
 //           diva.innerHTML += `${key}: ${trips[key]} <br>`;
 //         }
 //       }
 //     }
 //   }
 // }
 ///////////////////////////////////////////////////////
 // Wstawianie ofert w div
 // const wycieczki = [
 //   {
 //     ido: "1",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "Z widokiem na PoĹoniny",
 //     cena: "560",
 //   },
 //   {
 //     ido: "2",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "WokĂłĹ Soliny",
 //     cena: "780",
 //   },
 //   {
 //     ido: "3",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "Na styku trzech granic",
 //     cena: "730",
 //   },
 //   {
 //     ido: "4",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "Dolina KoĹcieliska",
 //     cena: "140",
 //   },
 //   {
 //     ido: "5",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "W stronÄ Kasprowego Wierchu",
 //     cena: "320",
 //   },
 //   {
 //     ido: "7",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "Z PiÄciu StawĂłw na Morskie Oko",
 //     cena: "560",
 //   },
 //   {
 //     ido: "8",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Karkonosze",
 //     nazwa: "ĹnieĹźne KotĹy i Szrenica",
 //     cena: "456",
 //   },
 //   {
 //     ido: "9",
 //     potwierdzenie: "1",
 //     kraj: "Czechy",
 //     rejon: "Praga",
 //     nazwa: "Skarby Pragi",
 //     cena: "999",
 //   },
 //   {
 //     ido: "10",
 //     potwierdzenie: "1",
 //     kraj: "Czechy",
 //     rejon: "GĂłry StoĹowe",
 //     nazwa: "Czeskie GĂłry StoĹowe (Adrspach / Teplice nad Metuji) ",
 //     cena: "890",
 //   },
 //   {
 //     ido: "11",
 //     potwierdzenie: "0",
 //     kraj: "SĹowenia",
 //     rejon: "Jezioro Blad i Alpy ",
 //     nazwa: "Rzut oka na sĹoweĹskie Alpy.",
 //     cena: "1100",
 //   },
 //   {
 //     ido: "12",
 //     potwierdzenie: "1",
 //     kraj: "Chorwacja",
 //     rejon: "Split i Plitwickie Jeziora",
 //     nazwa: "TrĂłjkÄt piÄknych widokĂłw. Split - Szybenik - Plitwickie Jeziora",
 //     cena: "1200",
 //   },
 //   {
 //     ido: "13",
 //     potwierdzenie: "1",
 //     kraj: "WĹochy",
 //     rejon: "WĹochy w tydzieĹ",
 //     nazwa: "WĹochy wycieczka objazdowa",
 //     cena: "1999",
 //   },
 //   {
 //     ido: "14",
 //     potwierdzenie: "1",
 //     kraj: "SĹowacja",
 //     rejon: "Tatry SĹowackie",
 //     nazwa: "Ĺomnica - dach Tatr",
 //     cena: "599",
 //   },
 //   {
 //     ido: "15",
 //     potwierdzenie: "1",
 //     kraj: "SĹowacja",
 //     rejon: "Tatry SĹowackie / NiĹźne Tatry",
 //     nazwa: "SĹowackie Jaskinie",
 //     cena: "499",
 //   },
 //   {
 //     ido: "16",
 //     potwierdzenie: "0",
 //     kraj: "Niemcy",
 //     rejon: "Niemcy pĂłĹnocne",
 //     nazwa: "Niemieckie pereĹki",
 //     cena: "599",
 //   },
 //   {
 //     ido: "17",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Polesie",
 //     nazwa: "Na bagnach",
 //     cena: "499",
 //   },
 // ];
 // for (const trip of wycieczki) {
 //   const diva = document.createElement("div");
 //   divBig.style.display = "flex";
 //   divBig.style.flexDirection = "column";
 //   divBig.style.alignItems = "center";
 //   divBig.append(diva);
 //   diva.style.width = "250px";
 //   diva.style.height = "150px";
 //   diva.style.textAlign = "center";
 //   const trips = trip;
 //   for (const key in trips) {
 //     if (key !== "ido" && key !== "potwierdzenie") {
 //       diva.innerHTML += `${key}: ${trips[key]} <br>`;
 //     }
 //   }
 // }
 ///////////////////////////////////////////////////////
 // Iteracja po obiekcie z tablicą.
 // const wycieczki = [
 //   {
 //     ido: "1",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "Z widokiem na PoĹoniny",
 //     cena: "560",
 //   },
 //   {
 //     ido: "2",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "WokĂłĹ Soliny",
 //     cena: "780",
 //   },
 //   {
 //     ido: "3",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Bieszczady",
 //     nazwa: "Na styku trzech granic",
 //     cena: "730",
 //   },
 //   {
 //     ido: "4",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "Dolina KoĹcieliska",
 //     cena: "140",
 //   },
 //   {
 //     ido: "5",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "W stronÄ Kasprowego Wierchu",
 //     cena: "320",
 //   },
 //   {
 //     ido: "7",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Tatry",
 //     nazwa: "Z PiÄciu StawĂłw na Morskie Oko",
 //     cena: "560",
 //   },
 //   {
 //     ido: "8",
 //     potwierdzenie: "1",
 //     kraj: "Polska",
 //     rejon: "Karkonosze",
 //     nazwa: "ĹnieĹźne KotĹy i Szrenica",
 //     cena: "456",
 //   },
 //   {
 //     ido: "9",
 //     potwierdzenie: "1",
 //     kraj: "Czechy",
 //     rejon: "Praga",
 //     nazwa: "Skarby Pragi",
 //     cena: "999",
 //   },
 //   {
 //     ido: "10",
 //     potwierdzenie: "1",
 //     kraj: "Czechy",
 //     rejon: "GĂłry StoĹowe",
 //     nazwa: "Czeskie GĂłry StoĹowe (Adrspach / Teplice nad Metuji) ",
 //     cena: "890",
 //   },
 //   {
 //     ido: "11",
 //     potwierdzenie: "0",
 //     kraj: "SĹowenia",
 //     rejon: "Jezioro Blad i Alpy ",
 //     nazwa: "Rzut oka na sĹoweĹskie Alpy.",
 //     cena: "1100",
 //   },
 //   {
 //     ido: "12",
 //     potwierdzenie: "1",
 //     kraj: "Chorwacja",
 //     rejon: "Split i Plitwickie Jeziora",
 //     nazwa: "TrĂłjkÄt piÄknych widokĂłw. Split - Szybenik - Plitwickie Jeziora",
 //     cena: "1200",
 //   },
 //   {
 //     ido: "13",
 //     potwierdzenie: "1",
 //     kraj: "WĹochy",
 //     rejon: "WĹochy w tydzieĹ",
 //     nazwa: "WĹochy wycieczka objazdowa",
 //     cena: "1999",
 //   },
 //   {
 //     ido: "14",
 //     potwierdzenie: "1",
 //     kraj: "SĹowacja",
 //     rejon: "Tatry SĹowackie",
 //     nazwa: "Ĺomnica - dach Tatr",
 //     cena: "599",
 //   },
 //   {
 //     ido: "15",
 //     potwierdzenie: "1",
 //     kraj: "SĹowacja",
 //     rejon: "Tatry SĹowackie / NiĹźne Tatry",
 //     nazwa: "SĹowackie Jaskinie",
 //     cena: "499",
 //   },
 //   {
 //     ido: "16",
 //     potwierdzenie: "0",
 //     kraj: "Niemcy",
 //     rejon: "Niemcy pĂłĹnocne",
 //     nazwa: "Niemieckie pereĹki",
 //     cena: "599",
 //   },
 //   {
 //     ido: "17",
 //     potwierdzenie: "0",
 //     kraj: "Polska",
 //     rejon: "Polesie",
 //     nazwa: "Na bagnach",
 //     cena: "499",
 //   },
 // ];
 // let stoppa = 0;
 // for (const trip of wycieczki) {
 //   for (const key in trip) {
 //     div.innerHTML += `${key}: ${trip[key]}<br>`;
 //   }
 //   div.innerHTML += `<br>`;
 //   stoppa++;
 //   if (stoppa === 12) {
 //     break;
 //   }
 // }
 ///////////////////////////////////////////////////////
 // Iteracja po obiekcie z tablicą.
 // const danie1 = {
 //   nazwa: "Burger",
 //   opis: "Burger wieprzowy, ser, ogórek",
 //   cena: 23,
 //   kalorie: 980,
 //   grafika: "grafika.jpg",
 //   dodatki: {
 //     frytki: ["frytki ziemniaczane", "100g", "frytki.jpg"],
 //     cola: ["z lodem", "200ml", "cola200.jpg"],
 //     kawa: ["z mlekiem", "250ml", "kawa250.jpg"],
 //   },
 // };
 // for (const values in danie1) {
 //   const props = danie1[values];
 //   if (values !== "dodatki") {
 //     console.log(values + ": " + danie1[values]);
 //   }
 //   for (const prop in props) {
 //     if (prop.length > 2) {
 //       console.log(prop + ": " + props[prop]);
 //     }
 //   }
 // }
 ///////////////////////////////////////////////////////
 // Dodawanie instancji do obiektu oraz usuwanie po nazwisku.
 // HTML select select.value wymagany do wyszukiwania po innej właściwości.
 // const listaKontaktow = [];
 // function dodajKontakt() {
 //   let imie = input1.value;
 //   let nazwisko = input2.value;
 //   let numerTelefonu = input3.value;
 //   const kontakt = {
 //     Imie: imie,
 //     Nazwisko: nazwisko,
 //     Telefon: numerTelefonu,
 //   };
 //   listaKontaktow.push(kontakt);
 //   console.log(listaKontaktow);
 // }
 // const input4 = document.querySelector(".input4");
 // function usunKontakt(kryterium, wartosc) {
 //   const index = listaKontaktow.findIndex((kontakt) => {
 //     switch (kryterium) {
 //       case "imie":
 //         return kontakt["Imie"] === wartosc;
 //       case "nazwisko":
 //         return kontakt["Nazwisko"] === wartosc;
 //       case "telefon":
 //         return kontakt["Telefon"] === wartosc;
 //       default:
 //         return false;
 //     }
 //   });
 //   if (index !== -1) {
 //     const kontaktUsun = listaKontaktow.splice(index, 1)[0];
 //     console.log("Usunięto kontakt:", kontaktUsun);
 //   } else {
 //     console.log(
 //       "Kontakt o podanym kryterium i wartości nie został znaleziony."
 //     );
 //   }
 //   console.log(listaKontaktow);
 // }
 // // Add
 // click.addEventListener(
 //   "click",
 //   () => {
 //     dodajKontakt();
 //   }
 // );
 // // Remove
 // function1.addEventListener("click", () => {
 //   const kryterium = "nazwisko"; // Określasz kryterium jako "nazwisko"
 //   const wartosc = input4.value; // Pobierasz wartość z input4
 //   usunKontakt(kryterium, wartosc);
 // });
 ///////////////////////////////////////////////////////
 // Tworzenie obiektu zamówienia
 // let numerZamowienia = 1;
 // const nazwaProduktu = "papier";
 // click.addEventListener("click", () => {
 //   const ilosc = parseInt(input1.value);
 //   const zamowienie = {
 //     [`zamowienie_${numerZamowienia}`]: `Produkt: ${nazwaProduktu}, Ilość: ${ilosc}`,
 //   };
 //   console.log(zamowienie);
 //   numerZamowienia++;
 // });
 ///////////////////////////////////////////////////////
 // Obiekt ze zmiennych
 // const marka = "bmw";
 // const model = "e46";
 // const cena = 10000;
 // const Oferta = {
 //   marka,
 //   model,
 //   cena,
 //   koszt100km() {
 //     return 37;
 //   },
 // };
 // console.log(Oferta);
 ///////////////////////////////////////////////////////
 // Destrukturyzacja
 // const Oferta = {
 //   marka: "Kia",
 //   model: "Carens",
 //   cena: 60000,
 //   koszt100km: function () {
 //     return 37;
 //   },
 // };
 // const { marka, model, cena, koszt100km } = Oferta;
 // console.log(marka);
 // console.log(model);
 // console.log(cena);
 ///////////////////////////////////////////////////////
 // Edytowanie i dodawanie instancji do obiektu
 // class Car {
 //   constructor(mark, model, price, consumption, age, cost100km = 0) {
 //     this.mark = mark;
 //     this.model = model;
 //     this.price = price;
 //     this.consumption = consumption;
 //     this.age = age;
 //     this.cost100km = cost100km;
 //     this.getCost();
 //     this.getAge();
 //   }
 //   getCost() {
 //     this.cost100km = this.consumption * gasPrice;
 //   }
 //   getAge() {
 //     this.age = 2023 - this.age;
 //   }
 // }
 // const gasPrice = 5;
 // const edit = document.querySelector(".edit");
 // const mark = document.querySelector("#mark");
 // const model = document.querySelector("#model");
 // const price = document.querySelector("#price");
 // const consumption = document.querySelector("#consumption");
 // const age = document.querySelector("#age");
 // const cost100km = document.querySelector("#cost100km");
 // const Trader = {
 //   bmw: new Car("bmw", "e46", 11000, 8, 2004),
 //   vw: new Car("vw", "passat", 10000, 7, 2002),
 //   3: new Car("pgot", "206", 3000, 6, 2001),
 // };
 // const add = document.querySelector(".add");
 // function addCar(carName) {
 //   Trader[carName] = new Car(
 //     mark.value,
 //     model.value,
 //     price.value,
 //     consumption.value,
 //     age.value,
 //     cost100km.value
 //   );
 // }
 // function deleteOffer(carName) {
 //   delete Trader[carName];
 // }
 // function showAll(obj) {
 //   div.innerHTML = "";
 //   for (const x in obj) {
 //     const y = obj[x];
 //     for (const prop in y) {
 //       div.innerHTML += `${prop}: ${y[prop]}<br/>`;
 //     }
 //     const edit = document.createElement("button");
 //     edit.className = "edit2";
 //     edit.textContent = "Edit";
 //     edit.setAttribute("data-car", x);
 //     div.append(edit);
 //     const dlt = document.createElement("button");
 //     dlt.className = "dlt";
 //     dlt.textContent = "Delete";
 //     dlt.setAttribute("data-car", x);
 //     div.append(dlt);
 //     div.innerHTML += `<br>`;
 //   }
 // }
 // // Delete
 // div.addEventListener("click", (event) => {
 //   if (event.target.classList.contains("dlt")) {
 //     const carName = event.target.getAttribute("data-car");
 //     deleteOffer(carName);
 //     showAll(Trader);
 //   }
 // });
 // // Edit in obj
 // div.addEventListener("click", (event) => {
 //   if (event.target.classList.contains("edit2")) {
 //     const markTarget = event.target.getAttribute("data-car");
 //     edit.setAttribute("data-car", markTarget);
 //     mark.value = Trader[markTarget].mark;
 //     model.value = Trader[markTarget].model;
 //     price.value = Trader[markTarget].price;
 //     consumption.value = Trader[markTarget].consumption;
 //     age.value = Trader[markTarget].age;
 //     cost100km.value = Trader[markTarget].cost100km;
 //     showAll(Trader);
 //   }
 // });
 // // Edit in menu
 // edit.addEventListener("click", (event) => {
 //   const markTarget = event.target.getAttribute("data-car");
 //   if (Trader.hasOwnProperty(markTarget)) {
 //     Trader[markTarget].mark = mark.value;
 //     Trader[markTarget].model = model.value;
 //     Trader[markTarget].price = price.value;
 //     Trader[markTarget].consumption = consumption.value;
 //     Trader[markTarget].age = age.value;
 //     Trader[markTarget].getCost();
 //     showAll(Trader);
 //   }
 // });
 // // Add
 // add.addEventListener("click", () => {
 //   addCar(mark.value);
 //   showAll(Trader);
 // });
 // showAll(Trader);
 ///////////////////////////////////////////////////////
 // Usuwanie instancji obiektu przyciskiem
 // class Car {
 //   constructor(mark, model, price, consumption, age, cost100km = 0) {
 //     this.mark = mark;
 //     this.model = model;
 //     this.price = price;
 //     this.consumption = consumption;
 //     this.age = age;
 //     this.cost100km = cost100km;
 //     this.getCost();
 //     this.getAge();
 //   }
 //   getCost() {
 //     this.cost100km = this.consumption * gasPrice;
 //   }
 //   getAge() {
 //     this.age = 2023 - this.age;
 //   }
 // }
 // const gasPrice = 5;
 // const Trader = {
 //   bmw: new Car("bmw", "e46", 10000, 8, 2004),
 //   vw: new Car("vw", "passat", 10000, 7, 2002),
 //   pgot: new Car("pgot", "206", 3000, 6, 2001),
 // };
 // function deleteOffer(car) {
 //   delete Trader[car];
 //   allOffer();
 // }
 // let dlt;
 // function allOffer() {
 //   div.innerHTML = "";
 //   for (const car in Trader) {
 //     const cars = Trader[car];
 //     for (const prop in cars) {
 //       div.innerHTML += `${prop}: ${cars[prop]}<br>`;
 //     }
 //     const dlts = document.createElement("span");
 //     dlts.className = "delete";
 //     dlts.textContent = "delete";
 //     dlts.setAttribute("data-car", car);
 //     div.append(dlts);
 //     div.innerHTML += `<br>`;
 //     div.innerHTML += `<br>`;
 //   }
 //   dlt = document.querySelectorAll(".delete");
 // }
 // allOffer();
 // div.addEventListener("click", (event) => {
 //   if (event.target.classList.contains("delete")) {
 //     const carName = event.target.dataset.car;
 //     deleteOffer(carName);
 //     allOffer();
 //   }
 // });
 ///////////////////////////////////////////////////////
 // Modyfikacja obiektu w klasie za pomocą funkcji carChange
 // class Car {
 //   constructor(mark, model, price, consumption, age, cost100km = 0) {
 //     this.mark = mark;
 //     this.model = model;
 //     this.price = price;
 //     this.consumption = consumption;
 //     this.age = age;
 //     this.cost100km = cost100km;
 //     this.getCost();
 //     this.getAge();
 //   }
 //   getCost() {
 //     this.cost100km = this.consumption * gasPrice;
 //   }
 //   getAge() {
 //     this.age = 2023 - this.age;
 //   }
 // }
 // const gasPrice = 5;
 // const Trader = {
 //   bmw: new Car("bmw", "e46", 10000, 8, 2004),
 //   vw: new Car("vw", "passat", 10000, 7, 2002),
 //   pgot: new Car("pgot", "206", 3000, 6, 2001),
 // };
 // function carChange(mark, model, price, consumption, age) {
 //   Trader[mark].mark = mark;
 //   Trader[mark].model = model;
 //   Trader[mark].price = price;
 //   Trader[mark].consumption = consumption;
 //   Trader[mark].age = age;
 //   Trader[mark].getAge();
 //   Trader[mark].getCost();
 // }
 // carChange("vw", "passeratti", 1000000, 0.1, 2024);
 // for (const car in Trader) {
 //   const cars = Trader[car];
 //   for (const prop in cars) {
 //     div.innerHTML += `${prop}: ${cars[prop]}<br>`;
 //   }
 //   div.innerHTML += `<br>`;
 // }
 ///////////////////////////////////////////////////////
 // Dodawanie instancji do obiektu Trader
 // class Car {
 //   constructor(mark, model, price, consumption, age, cost100km = 0) {
 //     this.mark = mark;
 //     this.model = model;
 //     this.price = price;
 //     this.consumption = consumption;
 //     this.age = age;
 //     this.cost100km = cost100km;
 //     this.getCost();
 //     this.getAge();
 //   }
 //   getCost() {
 //     this.cost100km = this.consumption * gasPrice;
 //   }
 //   getAge() {
 //     this.age = 2023 - this.age;
 //   }
 // }
 // const gasPrice = 5;
 // const Trader = {
 //   bmw: new Car("bmw", "e46", 10000, 8, 2004),
 //   vw: new Car("vw", "passat", 10000, 7, 2002),
 //   pgot: new Car("pgot", "206", 3000, 6, 2001),
 // };
 // function addCar(mark, model, price, consumption, age) {
 //   Trader.mark = new Car(mark, model, price, consumption, age);
 // }
 // addCar("bmw", "f30", 80000, 5, 2016);
 // for (const car in Trader) {
 //   const cars = Trader[car];
 //   for (const prop in cars) {
 //     div.innerHTML += `${prop}: ${cars[prop]}<br>`;
 //   }
 //   div.innerHTML += `<br>`;
 // }
 ///////////////////////////////////////////////////////
 // Dodawanie instancji do obiektu Trader
 // class Car {
 //   constructor(mark, model, price, consumption, cost100km, age) {
 //     this.mark = mark;
 //     this.model = model;
 //     this.price = price;
 //     this.consumption = consumption;
 //     this.cost100km = 0;
 //     this.age = age;
 //     this.getCost();
 //     this.getAge();
 //   }
 //   getCost() {
 //     this.cost100km = this.consumption * gasPrice;
 //   }
 //   getAge() {
 //     this.age = 2023 - this.age;
 //   }
 // }
 // const gasPrice = 5;
 // const Trader = {
 //   bmw: new Car("bmw", "e46", 10000, 8, 20, 2004),
 //   vw: new Car("vw", "passat", 10000, 7, 20, 2002),
 //   pgot: new Car("pgot", "206", 3000, 6, 20, 2001),
 // };
 // Trader.szki = new Car("suzuki", "vitara", 80500, 9, 2005);
 // function props(trader) {
 //   for (const car in trader) {
 //     const cars = trader[car];
 //     for (const prop in cars) {
 //       div.innerHTML += `${prop}: ${cars[prop]}<br>`;
 //     }
 //     div.innerHTML += `<br>`;
 //   }
 // }
 // props(Trader);
 ///////////////////////////////////////////////////////
 // Usuwanie obiektu klasy ze zmiennej Trader
 // class Car {
 //   constructor(mark, model, price, consumption, cost100km, age) {
 //     this.mark = mark;
 //     this.model = model;
 //     this.price = price;
 //     this.consumption = consumption;
 //     this.cost100km = 0;
 //     this.age = age;
 //     this.getCost();
 //     this.getAge;
 //   }
 //   getCost() {
 //     this.cost100km = this.consumption * gasPrice;
 //   }
 //   getAge() {
 //     this.age = 2023 - this.age;
 //   }
 // }
 // const gasPrice = 5;
 // const Trader = {
 //   bmw: new Car("bmw", "e46", 10000, 8, 20, 2004),
 //   vw: new Car("vw", "passat", 10000, 7, 20, 2002),
 //   pgot: new Car("pgot", "206", 3000, 6, 20, 2001),
 // };
 // function deleteOffer(carOffer) {
 //   delete Trader[carOffer];
 // }
 // deleteOffer("vw");
 // function props(trader) {
 //   for (const car in trader) {
 //     const cars = trader[car];
 //     for (const prop in cars) {
 //       div.innerHTML += `${prop}: ${cars[prop]}<br>`;
 //     }
 //     div.innerHTML += `<br>`;
 //   }
 // }
 // props(Trader);
 ///////////////////////////////////////////////////////
 // wywoływanie przypisanych klas obiektów do zmiennej w konsoli
 // class Car {
 //   constructor(mark, model, price, consumption, cost100km, age) {
 //     this.mark = mark;
 //     this.model = model;
 //     this.price = price;
 //     this.consumption = consumption;
 //     this.cost100km = 0;
 //     this.age = age;
 //     this.getCost();
 //     this.getAge;
 //   }
 //   getCost() {
 //     this.cost100km = this.consumption * gasPrice;
 //   }
 //   getAge() {
 //     this.age = 2023 - this.age;
 //   }
 // }
 // const gasPrice = 5;
 // const Trader = {
 //   bmw: new Car("bmw", "e46", 10000, 8, 20, 2004),
 //   vw: new Car("vw", "passat", 10000, 7, 20, 2002),
 //   pgot: new Car("pgot", "206", 3000, 6, 20, 2001),
 // };
 // for (idOferty of Object.keys(Trader)) {
 //   wypiszOferte(idOferty);
 // }
 // function wypiszOferte(idOferty) {
 //   console.log(Trader[idOferty]);
 // }
 ///////////////////////////////////////////////////////
 // Dodawanie klas do zmiennej i funkcja wywoływania
 // class Car {
 //   constructor(mark, model, price, consumption, cost100km, age) {
 //     this.mark = mark;
 //     this.model = model;
 //     this.price = price;
 //     this.consumption = consumption;
 //     this.cost100km = 0;
 //     this.age = age;
 //     this.getCost();
 //     this.getAge;
 //   }
 //   getCost() {
 //     this.cost100km = this.consumption * gasPrice;
 //   }
 //   getAge() {
 //     this.age = 2023 - this.age;
 //   }
 // }
 // const gasPrice = 5;
 // function props(trader) {
 //   for (const car in trader) {
 //     if (trader.hasOwnProperty(car)) {
 //       const cars = trader[car];
 //       for (const prop in cars) {
 //         if (cars.hasOwnProperty(prop)) {
 //           if (prop.includes("mark") || prop.includes("model")) {
 //             div.innerHTML += `<b>${prop}: ${cars[prop]}</b> <br>`;
 //           } else {
 //             div.innerHTML += `${prop}: ${cars[prop]} <br>`;
 //           }
 //         }
 //       }
 //       div.innerHTML += `<br>`;
 //     }
 //   }
 // }
 // const Trader = {
 //   Car1: new Car("bmw", "e46", 10000, 8, 20, 2004),
 //   Car2: new Car("vw", "passat", 10000, 7, 20, 2002),
 //   Car3: new Car("pgot", "206", 3000, 6, 20, 2001),
 // };
 // props(Trader);
 ///////////////////////////////////////////////////////
 // Klasa z funkcją dodawania informacji oraz warunkiem.
 // const gasPrice = 5;
 // class Car {
 //   constructor(mark, model, price, consumption, cost100km, age) {
 //     this.mark = mark;
 //     this.model = model;
 //     this.price = price;
 //     this.consumption = consumption;
 //     this.cost100km = 0;
 //     this.age = age;
 //     this.getCost();
 //     this.getAge;
 //   }
 //   getCost() {
 //     this.cost100km = this.consumption * gasPrice;
 //   }
 //   getAge() {
 //     this.age = 2023 - this.age;
 //   }
 // }
 // const bmw = new Car("bmw", "e46", 10000, 8, 20, 2004);
 // function props(obj) {
 //   for (const prop in obj) {
 //     if (obj.hasOwnProperty(prop)) {
 //       if (prop.includes("mark") || prop.includes("model")) {
 //         div.innerHTML += `<b>${prop}: ${obj[prop]}</b>`;
 //       } else {
 //         div.innerHTML += `${prop}: ${obj[prop]} <br>`;
 //       }
 //     }
 //   }
 // }
 ///////////////////////////////////////////////////////
 // Klasy - z warunkiem ternary
 // class Car {
 //   constructor(marka, cena, wiekSamochodu) {
 //     this.marka = marka;
 //     this.cena = cena;
 //     this.wiekSamochodu = wiekSamochodu;
 //     this.getAge();
 //   }
 //   getAge() {
 //     this.wiekSamochodu =
 //       2023 - this.wiekSamochodu + (this.wiekSamochodu < 2 ? " year" : " years");
 //   }
 // }
 // const bmw = new Car("bmw", 10000, 2004);
 // console.log(bmw.wiekSamochodu);
 ///////////////////////////////////////////////////////
 // Klasy - class razem z funkcją wyświetlania
 // function props(obj) {
 //   const propertyNames = [];
 //   for (const prop in obj) {
 //     if (obj.hasOwnProperty(prop)) {
 //       propertyNames.push(`${prop}: ${obj[prop]}`);
 //     }
 //   }
 //   return propertyNames.join("\n");
 // }
 // class Employee {
 //   constructor(name, surname, age) {
 //     this.name = name;
 //     this.surname = surname;
 //     this.age = age;
 //   }
 // }
 // const adam = new Employee("Adam", "Tuk", 24);
 // console.log(props(adam));
 ///////////////////////////////////////////////////////
 // Liczenie pola koła z promienia - właściwość Math.PI
 // function start() {
 //   const value = parseInt(input1.value);
 //   console.log(`Pole koła o promieniu ${value} wynosi ${value * Math.PI}`);
 // }
 // click.addEventListener("click", () => {
 //   start();
 // });
 ///////////////////////////////////////////////////////
 // Losowe liczby od 1 (max - 1) +1) do 49
 // for (let i = 0; i < 5; i++) {
 //   console.log(Math.round(Math.random() * (49 - 1) + 1));
 // }
 ///////////////////////////////////////////////////////
 // Odnajdywanie ostatniego indeksu - metoda .lastIndexOf('klucz')
 // const tekst =
 //   "JavaScript (w skrócie JS) – język został opracowany przez firmę Netscape w połowie lat 90. Jego twórcę jest Brendan Eich.";
 // const index = tekst.lastIndexOf(" ");
 // div.innerHTML = `Słowo JS zaczyna się od ${index}`;
 ///////////////////////////////////////////////////////
 // Zmiana wielkości tekstu - metoda .toLocale(UpperCase lub LowerCase)
 // const tekst =
 //   "JavaScript (w skrócie JS) – język został opracowany przez firmę Netscape w połowie lat 90. Jego twórcę jest Brendan Eich.";
 // div.innerHTML = tekst.toLocaleUpperCase();
 ///////////////////////////////////////////////////////
 // // Zamiana słowa w zmiennej string - metoda .replace('do zmiany', 'zmiana na')
 // let text =
 //   "JavaScript (w skrócie JS) – język został opracowany przez firmę Netscape w połowie lat 90. Jego twórcę jest Brendan Eich.";
 // text = text.replace("JavaScript (w skrócie JS)", "JS");
 // div.innerHTML = text;
 ///////////////////////////////////////////////////////
 // // Klasy
 // class Employee {
 //   constructor({ baseSalary, overtime = 0, rate = 20 }) {
 //     this.baseSalary = baseSalary;
 //     this.overtime = overtime;
 //     this.rate = rate;
 //   }
 //   getWage() {
 //     console.log(this.baseSalary + this.overtime * this.rate);
 //   }
 // }
 // const michał = new Employee({
 //   baseSalary: 60000,
 //   overtime: 21,
 //   rate: 25,
 // });
 // michał.getWage();
 ///////////////////////////////////////////////////////
 // // Tablica, która zwraca tylko nazwiska, ustawia je w element i
 // // sortuje alfabetycznie.
 // const osoby = [
 //   "Jan Nowak",
 //   "Kazimierz Zyga",
 //   "Stefan Koc",
 //   "Ewa Mocek",
 //   "Mariusz Abramski",
 // ];
 // div.innerHTML = osoby
 //   .map((osoba) => {
 //     return `<h3>${osoba.substr(osoba.indexOf(" "))}</h3>`;
 //   })
 //   .sort()
 //   .join(" ");
 ///////////////////////////////////////////////////////
 // // Tworzenie tablicy z elementów 'p' za pomocą 'Array.from()';
 // div.innerHTML += "<p>Jeden akapit</p>";
 // div.innerHTML += "<p>Drugi akapit</p>";
 // div.innerHTML += "<p>Trzeci akapit</p>";
 // const akapity = document.querySelectorAll("p");
 // const arrayFromAkapity = Array.from(akapity);
 // console.log(arrayFromAkapity[0]);
 ///////////////////////////////////////////////////////
 // // Dzielenie zdania na słowa metodą .split('jaki znak dzieli')
 // //+ łączenie ich w jedno zdanie .join('jaki znak łączy).
 // const text =
 //   "JavaScript jest językiem programowania od zawsze związanym z tworzeniem aplikacji WWW.";
 // const slowa = text.split(" ");
 // div.innerHTML = slowa;
 // div.innerHTML += slowa
 //   .map((slowo) => {
 //     return `<span>${slowo}</span>`;
 //   })
 //   .join(" ");
 ///////////////////////////////////////////////////////
 // // Metoda .splice - wycinanie tablicy .splice(od, ile elementów, wstaw w miejsce).
 // const osoby = [
 //   "Jan Nowak",
 //   "Kazimierz Zyga",
 //   "Stefan Koc",
 //   "Ewa Mocek",
 //   "Mariusz Abramski",
 // ];
 // console.log(osoby);
 // osoby.splice(3, 1, "Maria Kapik", "Elżbieta Konf");
 // console.log(osoby);
 ///////////////////////////////////////////////////////
 // // Metoda .slice - wycinanie tablicy .slice(od, do-1)
 // const osoby = [
 //   "Jan Nowak",
 //   "Kazimierz Zyga",
 //   "Stefan Koc",
 //   "Ewa Mocek",
 //   "Mariusz Abramski",
 // ];
 // let array = [];
 // // Push do array od ineksu '0' do indeksu '2' czyli 0 i 1, bez 2.
 // array.push(osoby.slice(0, 2));
 // console.log(array);
 ///////////////////////////////////////////////////////
 // // Utajnianie tablicy - metoda .fill('tajne')
 // const osoby = [
 //   "Jan Nowak",
 //   "Kazimierz Zyga",
 //   "Stefan Koc",
 //   "Ewa Mocek",
 //   "Mariusz Abramski",
 // ];
 // // Wszystko
 // console.log(osoby.fill("aaa bbb"));
 // const samochody = [
 //   "Fiat",
 //   "Skoda",
 //   "Volvo",
 //   "Mercedes",
 //   "Kia",
 //   "Opel",
 //   "Citroen",
 // ];
 // // Od elementu do elementu -1 (=> 2 i 3)
 // console.log(samochody.fill("TAJNE", 2, 4));
 ///////////////////////////////////////////////////////
 // Tablica zwracająca tylko imiona - metoda 'substr(od, do)'
 // const osoby = [
 //   "Jan Nowak",
 //   "Kazimierz Zyga",
 //   "Stefan Koc",
 //   "Ewa Mocek",
 //   "Mariusz Abramski",
 // ];
 // let osobyImiona = osoby.map((osoba) => {
 //   return osoba.substr(0, osoba.indexOf(" "));
 // });
 // div.innerHTML = osobyImiona;
 ///////////////////////////////////////////////////////
 // Tworzenie listy z tablicy
 // const osoby = [
 //   "Jan Nowak",
 //   "Kazimierz Zyga",
 //   "Stefan Koc",
 //   "Ewa Mocek",
 //   "Mariusz Abramski",
 // ];
 // osoby.join(" , ");
 // div.innerHTML += `<p>${osoby.join("</p><p>")}<p>`;
 ///////////////////////////////////////////////////////
 // Tworzenie tabeli z tablicy index - element
 // const array = ["Zenek", "Tomasz", "Adam", "Ewa", "Krzysztof"];
 // let index = -1;
 // let table = `<table>`; // !!!
 // console.log(array);
 // console.log("");
 // div.innerHTML = `<table>`;
 // array.forEach((arr) => {
 //   index++;
 //   table += `<tr><td>${index}</td><td>${arr}</td></tr>`;
 // });
 // table.innerHTML += `</table>`;
 // div.innerHTML = table;
 ///////////////////////////////////////////////////////
 // Checkbox
 // checkbox.forEach((check) => {
 //   check.addEventListener("change", () => {
 //     if (check.checked) {
 //       div.innerHTML += " " + check.id + " ";
 //     } else {
 //       div.innerHTML += " Unchecked";
 //     }
 //   });
 // });
 ///////////////////////////////////////////////////////
 // Selector Listener
 // select.addEventListener("input", () => {
 //   switch (select.value) {
 //     case "1":
 //       div.innerHTML = "This is 1";
 //       break;
 //     case "2":
 //       div.innerHTML = "This is 2";
 //       break;
 //     case "3":
 //       div.innerHTML = "This is 3";
 //       break;
 //   }
 // });
 ///////////////////////////////////////////////////////
 // Sorting input1 with separating using 'space'
 // click.addEventListener("click", () => {
 //   const mappedArray = input1.value.split(" ");
 //   console.log(mappedArray);
 //   sorting(mappedArray);
 //   console.log(mappedArray);
 // });
 // function sorting(array) {
 //   const isNumeric = array.every((item) => !isNaN(item));
 //   if (!isNumeric) {
 //     array.sort((a, b) => {
 //       return a.localeCompare(b);
 //     });
 //   } else {
 //     array.sort((a, b) => {
 //       return a - b;
 //     });
 //   }
 // }

},{}]},["2UeK4","bB7Pu"], "bB7Pu", "parcelRequiref99c")

//# sourceMappingURL=index.3d214d75.js.map
