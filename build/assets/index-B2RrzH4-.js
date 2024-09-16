function _mergeNamespaces(n2, m2) {
  for (var i2 = 0; i2 < m2.length; i2++) {
    const e2 = m2[i2];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node2 of mutation.addedNodes) {
        if (node2.tagName === "LINK" && node2.rel === "modulepreload")
          processPreload(node2);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  if (n2.__esModule) return n2;
  var f2 = n2.default;
  if (typeof f2 == "function") {
    var a2 = function a3() {
      if (this instanceof a3) {
        return Reflect.construct(f2, arguments, this.constructor);
      }
      return f2.apply(this, arguments);
    };
    a2.prototype = f2.prototype;
  } else a2 = {};
  Object.defineProperty(a2, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k2) {
    var d2 = Object.getOwnPropertyDescriptor(n2, k2);
    Object.defineProperty(a2, k2, d2.get ? d2 : {
      enumerable: true,
      get: function() {
        return n2[k2];
      }
    });
  });
  return a2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$5 = Symbol.for("react.element"), n$6 = Symbol.for("react.portal"), p$7 = Symbol.for("react.fragment"), q$7 = Symbol.for("react.strict_mode"), r$6 = Symbol.for("react.profiler"), t$5 = Symbol.for("react.provider"), u$4 = Symbol.for("react.context"), v$6 = Symbol.for("react.forward_ref"), w$4 = Symbol.for("react.suspense"), x$3 = Symbol.for("react.memo"), y$4 = Symbol.for("react.lazy"), z$4 = Symbol.iterator;
function A$3(a2) {
  if (null === a2 || "object" !== typeof a2) return null;
  a2 = z$4 && a2[z$4] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var B$3 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$3 = Object.assign, D$3 = {};
function E$3(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$3;
}
E$3.prototype.isReactComponent = {};
E$3.prototype.setState = function(a2, b2) {
  if ("object" !== typeof a2 && "function" !== typeof a2 && null != a2) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a2, b2, "setState");
};
E$3.prototype.forceUpdate = function(a2) {
  this.updater.enqueueForceUpdate(this, a2, "forceUpdate");
};
function F$2() {
}
F$2.prototype = E$3.prototype;
function G$3(a2, b2, e2) {
  this.props = a2;
  this.context = b2;
  this.refs = D$3;
  this.updater = e2 || B$3;
}
var H$3 = G$3.prototype = new F$2();
H$3.constructor = G$3;
C$3(H$3, E$3.prototype);
H$3.isPureReactComponent = true;
var I$3 = Array.isArray, J$2 = Object.prototype.hasOwnProperty, K$3 = { current: null }, L$3 = { key: true, ref: true, __self: true, __source: true };
function M$3(a2, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2) for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2) J$2.call(b2, d2) && !L$3.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2) c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++) f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a2 && a2.defaultProps) for (d2 in g2 = a2.defaultProps, g2) void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$5, type: a2, key: k2, ref: h2, props: c2, _owner: K$3.current };
}
function N$3(a2, b2) {
  return { $$typeof: l$5, type: a2.type, key: b2, ref: a2.ref, props: a2.props, _owner: a2._owner };
}
function O$2(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === l$5;
}
function escape(a2) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a2.replace(/[=:]/g, function(a3) {
    return b2[a3];
  });
}
var P$3 = /\/+/g;
function Q$3(a2, b2) {
  return "object" === typeof a2 && null !== a2 && null != a2.key ? escape("" + a2.key) : b2.toString(36);
}
function R$2(a2, b2, e2, d2, c2) {
  var k2 = typeof a2;
  if ("undefined" === k2 || "boolean" === k2) a2 = null;
  var h2 = false;
  if (null === a2) h2 = true;
  else switch (k2) {
    case "string":
    case "number":
      h2 = true;
      break;
    case "object":
      switch (a2.$$typeof) {
        case l$5:
        case n$6:
          h2 = true;
      }
  }
  if (h2) return h2 = a2, c2 = c2(h2), a2 = "" === d2 ? "." + Q$3(h2, 0) : d2, I$3(c2) ? (e2 = "", null != a2 && (e2 = a2.replace(P$3, "$&/") + "/"), R$2(c2, b2, e2, "", function(a3) {
    return a3;
  })) : null != c2 && (O$2(c2) && (c2 = N$3(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$3, "$&/") + "/") + a2)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$3(a2)) for (var g2 = 0; g2 < a2.length; g2++) {
    k2 = a2[g2];
    var f2 = d2 + Q$3(k2, g2);
    h2 += R$2(k2, b2, e2, f2, c2);
  }
  else if (f2 = A$3(a2), "function" === typeof f2) for (a2 = f2.call(a2), g2 = 0; !(k2 = a2.next()).done; ) k2 = k2.value, f2 = d2 + Q$3(k2, g2++), h2 += R$2(k2, b2, e2, f2, c2);
  else if ("object" === k2) throw b2 = String(a2), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a2).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$3(a2, b2, e2) {
  if (null == a2) return a2;
  var d2 = [], c2 = 0;
  R$2(a2, d2, "", "", function(a3) {
    return b2.call(e2, a3, c2++);
  });
  return d2;
}
function T$3(a2) {
  if (-1 === a2._status) {
    var b2 = a2._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a2._status || -1 === a2._status) a2._status = 1, a2._result = b3;
    }, function(b3) {
      if (0 === a2._status || -1 === a2._status) a2._status = 2, a2._result = b3;
    });
    -1 === a2._status && (a2._status = 0, a2._result = b2);
  }
  if (1 === a2._status) return a2._result.default;
  throw a2._result;
}
var U$3 = { current: null }, V$3 = { transition: null }, W$3 = { ReactCurrentDispatcher: U$3, ReactCurrentBatchConfig: V$3, ReactCurrentOwner: K$3 };
function X$3() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$3, forEach: function(a2, b2, e2) {
  S$3(a2, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a2) {
  var b2 = 0;
  S$3(a2, function() {
    b2++;
  });
  return b2;
}, toArray: function(a2) {
  return S$3(a2, function(a3) {
    return a3;
  }) || [];
}, only: function(a2) {
  if (!O$2(a2)) throw Error("React.Children.only expected to receive a single React element child.");
  return a2;
} };
react_production_min.Component = E$3;
react_production_min.Fragment = p$7;
react_production_min.Profiler = r$6;
react_production_min.PureComponent = G$3;
react_production_min.StrictMode = q$7;
react_production_min.Suspense = w$4;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$3;
react_production_min.act = X$3;
react_production_min.cloneElement = function(a2, b2, e2) {
  if (null === a2 || void 0 === a2) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a2 + ".");
  var d2 = C$3({}, a2.props), c2 = a2.key, k2 = a2.ref, h2 = a2._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$3.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a2.type && a2.type.defaultProps) var g2 = a2.type.defaultProps;
    for (f2 in b2) J$2.call(b2, f2) && !L$3.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$5, type: a2.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a2) {
  a2 = { $$typeof: u$4, _currentValue: a2, _currentValue2: a2, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a2.Provider = { $$typeof: t$5, _context: a2 };
  return a2.Consumer = a2;
};
react_production_min.createElement = M$3;
react_production_min.createFactory = function(a2) {
  var b2 = M$3.bind(null, a2);
  b2.type = a2;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a2) {
  return { $$typeof: v$6, render: a2 };
};
react_production_min.isValidElement = O$2;
react_production_min.lazy = function(a2) {
  return { $$typeof: y$4, _payload: { _status: -1, _result: a2 }, _init: T$3 };
};
react_production_min.memo = function(a2, b2) {
  return { $$typeof: x$3, type: a2, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a2) {
  var b2 = V$3.transition;
  V$3.transition = {};
  try {
    a2();
  } finally {
    V$3.transition = b2;
  }
};
react_production_min.unstable_act = X$3;
react_production_min.useCallback = function(a2, b2) {
  return U$3.current.useCallback(a2, b2);
};
react_production_min.useContext = function(a2) {
  return U$3.current.useContext(a2);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a2) {
  return U$3.current.useDeferredValue(a2);
};
react_production_min.useEffect = function(a2, b2) {
  return U$3.current.useEffect(a2, b2);
};
react_production_min.useId = function() {
  return U$3.current.useId();
};
react_production_min.useImperativeHandle = function(a2, b2, e2) {
  return U$3.current.useImperativeHandle(a2, b2, e2);
};
react_production_min.useInsertionEffect = function(a2, b2) {
  return U$3.current.useInsertionEffect(a2, b2);
};
react_production_min.useLayoutEffect = function(a2, b2) {
  return U$3.current.useLayoutEffect(a2, b2);
};
react_production_min.useMemo = function(a2, b2) {
  return U$3.current.useMemo(a2, b2);
};
react_production_min.useReducer = function(a2, b2, e2) {
  return U$3.current.useReducer(a2, b2, e2);
};
react_production_min.useRef = function(a2) {
  return U$3.current.useRef(a2);
};
react_production_min.useState = function(a2) {
  return U$3.current.useState(a2);
};
react_production_min.useSyncExternalStore = function(a2, b2, e2) {
  return U$3.current.useSyncExternalStore(a2, b2, e2);
};
react_production_min.useTransition = function() {
  return U$3.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const r$5 = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const React = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: r$5
}, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$3 = reactExports, k$5 = Symbol.for("react.element"), l$4 = Symbol.for("react.fragment"), m$7 = Object.prototype.hasOwnProperty, n$5 = f$3.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$6 = { key: true, ref: true, __self: true, __source: true };
function q$6(c2, a2, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (h2 = a2.ref);
  for (b2 in a2) m$7.call(a2, b2) && !p$6.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps) for (b2 in a2 = c2.defaultProps, a2) void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: k$5, type: c2, key: e2, ref: h2, props: d2, _owner: n$5.current };
}
reactJsxRuntime_production_min.Fragment = l$4;
reactJsxRuntime_production_min.jsx = q$6;
reactJsxRuntime_production_min.jsxs = q$6;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var isDevelopment$2 = false;
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
    if (document.styleSheets[i2].ownerNode === tag) {
      return document.styleSheets[i2];
    }
  }
  return void 0;
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? !isDevelopment$2 : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      var _tag$parentNode;
      return (_tag$parentNode = tag.parentNode) == null ? void 0 : _tag$parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign$1 = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search2) {
  return value.indexOf(search2);
}
function charat(value, index2) {
  return value.charCodeAt(index2) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root2, parent, type, props, children, length2) {
  return { value, root: root2, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root2, props) {
  return assign$1(node("", null, null, "", null, null, 0), root2, { length: -root2.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index2, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index2, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index2) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index2, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index2) {
  while (!token(peek()))
    next();
  return slice(index2, position);
}
function compile(value) {
  return dealloc(parse$1("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse$1(value, root2, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index2 = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root2, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index2++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1) characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root2, parent, index2, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse$1(characters2, root2, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse$1(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse$1(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index2 = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index2++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root2, parent, index2, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i2 = 0, j2 = 0, k2 = 0; i2 < index2; ++i2)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j2 = points[i2])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j2 > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root2, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root2, parent) {
  return node(value, root2, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root2, parent, length2) {
  return node(value, root2, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i2 = 0; i2 < length2; i2++)
    output += callback(children[i2], i2, children, callback) || "";
  return output;
}
function stringify(element, index2, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length) break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index2, children, callback) {
    var output = "";
    for (var i2 = 0; i2 < length2; i2++)
      output += collection[i2](element, index2, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
function memoize(fn2) {
  var cache2 = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache2[arg] === void 0) cache2[arg] = fn2(arg);
    return cache2[arg];
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index2) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index2] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index2 = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index2] = 1;
        }
        parsed[index2] += identifierWithPointTracking(position - 1, points, index2);
        break;
      case 2:
        parsed[index2] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index2] = peek() === 58 ? "&\f" : "";
          points[index2] = parsed[index2].length;
          break;
        }
      default:
        parsed[index2] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent) return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i2 = 0, k2 = 0; i2 < rules.length; i2++) {
    for (var j2 = 0; j2 < parentRules.length; j2++, k2++) {
      element.props[k2] = points[i2] ? rules[i2].replace(/&\f/g, parentRules[j2]) : parentRules[j2] + " " + rules[i2];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6) switch (charat(value, length2 + 1)) {
        case 109:
          if (charat(value, length2 + 4) !== 45) break;
        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
        case 115:
          return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
      }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115) break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index2, children, callback) {
  if (element.length > -1) {
    if (!element["return"]) switch (element.type) {
      case DECLARATION:
        element["return"] = prefix(element.value, element.length);
        break;
      case KEYFRAMES:
        return serialize([copy(element, {
          value: replace(element.value, "@", "@" + WEBKIT)
        })], callback);
      case RULESET:
        if (element.length) return combine(element.props, function(value) {
          switch (match(value, /(::plac\w+|:read-\w+)/)) {
            case ":read-only":
            case ":read-write":
              return serialize([copy(element, {
                props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
              })], callback);
            case "::placeholder":
              return serialize([copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
              }), copy(element, {
                props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
              })], callback);
          }
          return "";
        });
    }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i2 = 1; i2 < attrib.length; i2++) {
          inserted[attrib[i2]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles) {
      return serialize(compile(styles), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache2.inserted[serialized.name] = true;
      }
    };
  }
  var cache2 = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache2.sheet.hydrate(nodesToHydrate);
  return cache2;
};
var reactIs$2 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$3 = "function" === typeof Symbol && Symbol.for, c$2 = b$3 ? Symbol.for("react.element") : 60103, d$3 = b$3 ? Symbol.for("react.portal") : 60106, e$3 = b$3 ? Symbol.for("react.fragment") : 60107, f$2 = b$3 ? Symbol.for("react.strict_mode") : 60108, g$3 = b$3 ? Symbol.for("react.profiler") : 60114, h$5 = b$3 ? Symbol.for("react.provider") : 60109, k$4 = b$3 ? Symbol.for("react.context") : 60110, l$3 = b$3 ? Symbol.for("react.async_mode") : 60111, m$6 = b$3 ? Symbol.for("react.concurrent_mode") : 60111, n$4 = b$3 ? Symbol.for("react.forward_ref") : 60112, p$5 = b$3 ? Symbol.for("react.suspense") : 60113, q$5 = b$3 ? Symbol.for("react.suspense_list") : 60120, r$4 = b$3 ? Symbol.for("react.memo") : 60115, t$4 = b$3 ? Symbol.for("react.lazy") : 60116, v$5 = b$3 ? Symbol.for("react.block") : 60121, w$3 = b$3 ? Symbol.for("react.fundamental") : 60117, x$2 = b$3 ? Symbol.for("react.responder") : 60118, y$3 = b$3 ? Symbol.for("react.scope") : 60119;
function z$3(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var u2 = a2.$$typeof;
    switch (u2) {
      case c$2:
        switch (a2 = a2.type, a2) {
          case l$3:
          case m$6:
          case e$3:
          case g$3:
          case f$2:
          case p$5:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$4:
              case n$4:
              case t$4:
              case r$4:
              case h$5:
                return a2;
              default:
                return u2;
            }
        }
      case d$3:
        return u2;
    }
  }
}
function A$2(a2) {
  return z$3(a2) === m$6;
}
reactIs_production_min$1.AsyncMode = l$3;
reactIs_production_min$1.ConcurrentMode = m$6;
reactIs_production_min$1.ContextConsumer = k$4;
reactIs_production_min$1.ContextProvider = h$5;
reactIs_production_min$1.Element = c$2;
reactIs_production_min$1.ForwardRef = n$4;
reactIs_production_min$1.Fragment = e$3;
reactIs_production_min$1.Lazy = t$4;
reactIs_production_min$1.Memo = r$4;
reactIs_production_min$1.Portal = d$3;
reactIs_production_min$1.Profiler = g$3;
reactIs_production_min$1.StrictMode = f$2;
reactIs_production_min$1.Suspense = p$5;
reactIs_production_min$1.isAsyncMode = function(a2) {
  return A$2(a2) || z$3(a2) === l$3;
};
reactIs_production_min$1.isConcurrentMode = A$2;
reactIs_production_min$1.isContextConsumer = function(a2) {
  return z$3(a2) === k$4;
};
reactIs_production_min$1.isContextProvider = function(a2) {
  return z$3(a2) === h$5;
};
reactIs_production_min$1.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === c$2;
};
reactIs_production_min$1.isForwardRef = function(a2) {
  return z$3(a2) === n$4;
};
reactIs_production_min$1.isFragment = function(a2) {
  return z$3(a2) === e$3;
};
reactIs_production_min$1.isLazy = function(a2) {
  return z$3(a2) === t$4;
};
reactIs_production_min$1.isMemo = function(a2) {
  return z$3(a2) === r$4;
};
reactIs_production_min$1.isPortal = function(a2) {
  return z$3(a2) === d$3;
};
reactIs_production_min$1.isProfiler = function(a2) {
  return z$3(a2) === g$3;
};
reactIs_production_min$1.isStrictMode = function(a2) {
  return z$3(a2) === f$2;
};
reactIs_production_min$1.isSuspense = function(a2) {
  return z$3(a2) === p$5;
};
reactIs_production_min$1.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === e$3 || a2 === m$6 || a2 === g$3 || a2 === f$2 || a2 === p$5 || a2 === q$5 || "object" === typeof a2 && null !== a2 && (a2.$$typeof === t$4 || a2.$$typeof === r$4 || a2.$$typeof === h$5 || a2.$$typeof === k$4 || a2.$$typeof === n$4 || a2.$$typeof === w$3 || a2.$$typeof === x$2 || a2.$$typeof === y$3 || a2.$$typeof === v$5);
};
reactIs_production_min$1.typeOf = z$3;
{
  reactIs$2.exports = reactIs_production_min$1;
}
var reactIsExports$1 = reactIs$2.exports;
var reactIs$1 = reactIsExports$1;
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs$1.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs$1.Memo] = MEMO_STATICS;
function getStatics(component) {
  if (reactIs$1.isMemo(component)) {
    return MEMO_STATICS;
  }
  return TYPE_STATICS[component["$$typeof"]] || REACT_STATICS;
}
var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== "string") {
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);
      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }
    var keys = getOwnPropertyNames(sourceComponent);
    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }
    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);
    for (var i2 = 0; i2 < keys.length; ++i2) {
      var key = keys[i2];
      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
        try {
          defineProperty(targetComponent, key, descriptor);
        } catch (e2) {
        }
      }
    }
  }
  return targetComponent;
}
var hoistNonReactStatics_cjs = hoistNonReactStatics;
const m$5 = /* @__PURE__ */ getDefaultExportFromCjs(hoistNonReactStatics_cjs);
var isBrowser$2 = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache2, serialized, isStringTag) {
  var className = cache2.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser$2 === false) && cache2.registered[className] === void 0
  ) {
    cache2.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache2, serialized, isStringTag) {
  registerStyles(cache2, serialized, isStringTag);
  var className = cache2.key + "-" + serialized.name;
  if (cache2.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache2.insert(serialized === current ? "." + className : "", current, cache2.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k2, i2 = 0, len = str.length;
  for (; len >= 4; ++i2, len -= 4) {
    k2 = str.charCodeAt(i2) & 255 | (str.charCodeAt(++i2) & 255) << 8 | (str.charCodeAt(++i2) & 255) << 16 | (str.charCodeAt(++i2) & 255) << 24;
    k2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= /* k >>> r: */
    k2 >>> 24;
    h2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i2 + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i2 + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i2) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys$1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var isDevelopment$1 = false;
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys$1[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  var componentSelector = interpolation;
  if (componentSelector.__emotion_styles !== void 0) {
    return componentSelector;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      var keyframes = interpolation;
      if (keyframes.anim === 1) {
        cursor = {
          name: keyframes.name,
          styles: keyframes.styles,
          next: cursor
        };
        return keyframes.name;
      }
      var serializedStyles = interpolation;
      if (serializedStyles.styles !== void 0) {
        var next2 = serializedStyles.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles = serializedStyles.styles + ";";
        return styles;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  var asString = interpolation;
  {
    return asString;
  }
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i2 = 0; i2 < obj.length; i2++) {
      string += handleInterpolation(mergedProps, registered, obj[i2]) + ";";
    }
  } else {
    for (var key in obj) {
      var value = obj[key];
      if (typeof value !== "object") {
        var asString = value;
        if (isProcessableValue(asString)) {
          string += processStyleName(key) + ":" + processStyleValue(key, asString) + ";";
        }
      } else {
        if (key === "NO_COMPONENT_SELECTOR" && isDevelopment$1) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && registered == null) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(key) + ":" + processStyleValue(key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (key) {
            case "animation":
            case "animationName": {
              string += processStyleName(key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    var asTemplateStringsArr = strings;
    styles += asTemplateStringsArr[0];
  }
  for (var i2 = 1; i2 < args.length; i2++) {
    styles += handleInterpolation(mergedProps, registered, args[i2]);
    if (stringMode) {
      var templateStringsArr = strings;
      styles += templateStringsArr[i2];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles)) !== null) {
    identifierName += "-" + match2[1];
  }
  var name = murmur2(styles) + identifierName;
  return {
    name,
    styles,
    next: cursor
  };
}
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect = React["useInsertionEffect"] ? React["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var isDevelopment = false;
var EmotionCacheContext = /* @__PURE__ */ reactExports.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
    var cache2 = reactExports.useContext(EmotionCacheContext);
    return func(props, cache2, ref);
  });
};
var ThemeContext = /* @__PURE__ */ reactExports.createContext({});
var hasOwn = {}.hasOwnProperty;
var typePropName = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__";
var createEmotionProps = function createEmotionProps2(type, props) {
  var newProps = {};
  for (var key in props) {
    if (hasOwn.call(props, key)) {
      newProps[key] = props[key];
    }
  }
  newProps[typePropName] = type;
  return newProps;
};
var Insertion = function Insertion2(_ref) {
  var cache2 = _ref.cache, serialized = _ref.serialized, isStringTag = _ref.isStringTag;
  registerStyles(cache2, serialized, isStringTag);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache2, serialized, isStringTag);
  });
  return null;
};
var Emotion = /* @__PURE__ */ withEmotionCache(
  /* <any, any> */
  function(props, cache2, ref) {
    var cssProp = props.css;
    if (typeof cssProp === "string" && cache2.registered[cssProp] !== void 0) {
      cssProp = cache2.registered[cssProp];
    }
    var WrappedComponent = props[typePropName];
    var registeredStyles = [cssProp];
    var className = "";
    if (typeof props.className === "string") {
      className = getRegisteredStyles(cache2.registered, registeredStyles, props.className);
    } else if (props.className != null) {
      className = props.className + " ";
    }
    var serialized = serializeStyles(registeredStyles, void 0, reactExports.useContext(ThemeContext));
    className += cache2.key + "-" + serialized.name;
    var newProps = {};
    for (var key in props) {
      if (hasOwn.call(props, key) && key !== "css" && key !== typePropName && !isDevelopment) {
        newProps[key] = props[key];
      }
    }
    newProps.className = className;
    if (ref) {
      newProps.ref = ref;
    }
    return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Insertion, {
      cache: cache2,
      serialized,
      isStringTag: typeof WrappedComponent === "string"
    }), /* @__PURE__ */ reactExports.createElement(WrappedComponent, newProps));
  }
);
var Emotion$1 = Emotion;
var Fragment = jsxRuntimeExports.Fragment;
function jsx(type, props, key) {
  if (!hasOwn.call(props, "css")) {
    return jsxRuntimeExports.jsx(type, props, key);
  }
  return jsxRuntimeExports.jsx(Emotion$1, createEmotionProps(type, props), key);
}
function jsxs(type, props, key) {
  if (!hasOwn.call(props, "css")) {
    return jsxRuntimeExports.jsxs(type, props, key);
  }
  return jsxRuntimeExports.jsxs(Emotion$1, createEmotionProps(type, props), key);
}
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a2, b2) {
    var c2 = a2.length;
    a2.push(b2);
    a: for (; 0 < c2; ) {
      var d2 = c2 - 1 >>> 1, e2 = a2[d2];
      if (0 < g2(e2, b2)) a2[d2] = b2, a2[c2] = e2, c2 = d2;
      else break a;
    }
  }
  function h2(a2) {
    return 0 === a2.length ? null : a2[0];
  }
  function k2(a2) {
    if (0 === a2.length) return null;
    var b2 = a2[0], c2 = a2.pop();
    if (c2 !== b2) {
      a2[0] = c2;
      a: for (var d2 = 0, e2 = a2.length, w2 = e2 >>> 1; d2 < w2; ) {
        var m2 = 2 * (d2 + 1) - 1, C2 = a2[m2], n2 = m2 + 1, x2 = a2[n2];
        if (0 > g2(C2, c2)) n2 < e2 && 0 > g2(x2, C2) ? (a2[d2] = x2, a2[n2] = c2, d2 = n2) : (a2[d2] = C2, a2[m2] = c2, d2 = m2);
        else if (n2 < e2 && 0 > g2(x2, c2)) a2[d2] = x2, a2[n2] = c2, d2 = n2;
        else break a;
      }
    }
    return b2;
  }
  function g2(a2, b2) {
    var c2 = a2.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a2.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a2) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback) k2(t2);
      else if (b2.startTime <= a2) k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else break;
      b2 = h2(t2);
    }
  }
  function H2(a2) {
    B2 = false;
    G2(a2);
    if (!A2) if (null !== h2(r2)) A2 = true, I2(J2);
    else {
      var b2 = h2(t2);
      null !== b2 && K2(H2, b2.startTime - a2);
    }
  }
  function J2(a2, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a2 && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a2 = exports.unstable_now();
      Q2 = a2;
      var b2 = true;
      try {
        b2 = O2(true, a2);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a2) {
    O2 = a2;
    N2 || (N2 = true, S2());
  }
  function K2(a2, b2) {
    L2 = D2(function() {
      a2(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a2) {
    a2.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a2) {
    0 > a2 || 125 < a2 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a2 ? Math.floor(1e3 / a2) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a2) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a2, b2) {
    switch (a2) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a2 = 3;
    }
    var c2 = y2;
    y2 = a2;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a2, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a2) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a2 = { id: u2++, callback: b2, priorityLevel: a2, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a2.sortIndex = c2, f2(t2, a2), null === h2(r2) && a2 === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a2.sortIndex = e2, f2(r2, a2), A2 || z2 || (A2 = true, I2(J2)));
    return a2;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a2) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a2.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$4(a2) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a2, c2 = 1; c2 < arguments.length; c2++) b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a2 + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a2, b2) {
  ha(a2, b2);
  ha(a2 + "Capture", b2);
}
function ha(a2, b2) {
  ea[a2] = b2;
  for (a2 = 0; a2 < b2.length; a2++) da.add(b2[a2]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a2) {
  if (ja.call(ma, a2)) return true;
  if (ja.call(la, a2)) return false;
  if (ka.test(a2)) return ma[a2] = true;
  la[a2] = true;
  return false;
}
function pa(a2, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type) return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2) return false;
      if (null !== c2) return !c2.acceptsBooleans;
      a2 = a2.toLowerCase().slice(0, 5);
      return "data-" !== a2 && "aria-" !== a2;
    default:
      return false;
  }
}
function qa(a2, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a2, b2, c2, d2)) return true;
  if (d2) return false;
  if (null !== c2) switch (c2.type) {
    case 3:
      return !b2;
    case 4:
      return false === b2;
    case 5:
      return isNaN(b2);
    case 6:
      return isNaN(b2) || 1 > b2;
  }
  return false;
}
function v$4(a2, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a2;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$2 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a2) {
  z$2[a2] = new v$4(a2, 0, false, a2, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a2) {
  var b2 = a2[0];
  z$2[b2] = new v$4(b2, 1, false, a2[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 2, false, a2.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 2, false, a2, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a2) {
  z$2[a2] = new v$4(a2, 3, false, a2.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 3, true, a2, null, false, false);
});
["capture", "download"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 4, false, a2, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 6, false, a2, null, false, false);
});
["rowSpan", "start"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 5, false, a2.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a2) {
  return a2[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a2) {
  var b2 = a2.replace(
    ra,
    sa
  );
  z$2[b2] = new v$4(b2, 1, false, a2, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$2[b2] = new v$4(b2, 1, false, a2, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a2) {
  var b2 = a2.replace(ra, sa);
  z$2[b2] = new v$4(b2, 1, false, a2, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 1, false, a2.toLowerCase(), null, false, false);
});
z$2.xlinkHref = new v$4("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a2) {
  z$2[a2] = new v$4(a2, 1, false, a2.toLowerCase(), null, true, true);
});
function ta(a2, b2, c2, d2) {
  var e2 = z$2.hasOwnProperty(b2) ? z$2[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1]) qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a2.removeAttribute(b2) : a2.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a2[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a2.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a2.setAttributeNS(d2, b2, c2) : a2.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a2) {
  if (null === a2 || "object" !== typeof a2) return null;
  a2 = Ja && a2[Ja] || a2["@@iterator"];
  return "function" === typeof a2 ? a2 : null;
}
var A$1 = Object.assign, La;
function Ma(a2) {
  if (void 0 === La) try {
    throw Error();
  } catch (c2) {
    var b2 = c2.stack.trim().match(/\n( *(at )?)/);
    La = b2 && b2[1] || "";
  }
  return "\n" + La + a2;
}
var Na = false;
function Oa(a2, b2) {
  if (!a2 || Na) return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2) if (b2 = function() {
      throw Error();
    }, Object.defineProperty(b2.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b2, []);
      } catch (l2) {
        var d2 = l2;
      }
      Reflect.construct(a2, [], b2);
    } else {
      try {
        b2.call();
      } catch (l2) {
        d2 = l2;
      }
      a2.call(b2.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a2();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; ) h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--) if (e2[g2] !== f2[h2]) {
        if (1 !== g2 || 1 !== h2) {
          do
            if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
              var k2 = "\n" + e2[g2].replace(" at new ", " at ");
              a2.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a2.displayName));
              return k2;
            }
          while (1 <= g2 && 0 <= h2);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a2 = a2 ? a2.displayName || a2.name : "") ? Ma(a2) : "";
}
function Pa(a2) {
  switch (a2.tag) {
    case 5:
      return Ma(a2.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a2 = Oa(a2.type, false), a2;
    case 11:
      return a2 = Oa(a2.type.render, false), a2;
    case 1:
      return a2 = Oa(a2.type, true), a2;
    default:
      return "";
  }
}
function Qa(a2) {
  if (null == a2) return null;
  if ("function" === typeof a2) return a2.displayName || a2.name || null;
  if ("string" === typeof a2) return a2;
  switch (a2) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a2) switch (a2.$$typeof) {
    case Ca:
      return (a2.displayName || "Context") + ".Consumer";
    case Ba:
      return (a2._context.displayName || "Context") + ".Provider";
    case Da:
      var b2 = a2.render;
      a2 = a2.displayName;
      a2 || (a2 = b2.displayName || b2.name || "", a2 = "" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
      return a2;
    case Ga:
      return b2 = a2.displayName || null, null !== b2 ? b2 : Qa(a2.type) || "Memo";
    case Ha:
      b2 = a2._payload;
      a2 = a2._init;
      try {
        return Qa(a2(b2));
      } catch (c2) {
      }
  }
  return null;
}
function Ra(a2) {
  var b2 = a2.type;
  switch (a2.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a2 = b2.render, a2 = a2.displayName || a2.name || "", b2.displayName || ("" !== a2 ? "ForwardRef(" + a2 + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2) return b2.displayName || b2.name || null;
      if ("string" === typeof b2) return b2;
  }
  return null;
}
function Sa(a2) {
  switch (typeof a2) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a2;
    case "object":
      return a2;
    default:
      return "";
  }
}
function Ta(a2) {
  var b2 = a2.type;
  return (a2 = a2.nodeName) && "input" === a2.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a2) {
  var b2 = Ta(a2) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a2.constructor.prototype, b2), d2 = "" + a2[b2];
  if (!a2.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a2, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a3) {
      d2 = "" + a3;
      f2.call(this, a3);
    } });
    Object.defineProperty(a2, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a3) {
      d2 = "" + a3;
    }, stopTracking: function() {
      a2._valueTracker = null;
      delete a2[b2];
    } };
  }
}
function Va(a2) {
  a2._valueTracker || (a2._valueTracker = Ua(a2));
}
function Wa(a2) {
  if (!a2) return false;
  var b2 = a2._valueTracker;
  if (!b2) return true;
  var c2 = b2.getValue();
  var d2 = "";
  a2 && (d2 = Ta(a2) ? a2.checked ? "true" : "false" : a2.value);
  a2 = d2;
  return a2 !== c2 ? (b2.setValue(a2), true) : false;
}
function Xa(a2) {
  a2 = a2 || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a2) return null;
  try {
    return a2.activeElement || a2.body;
  } catch (b2) {
    return a2.body;
  }
}
function Ya(a2, b2) {
  var c2 = b2.checked;
  return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a2._wrapperState.initialChecked });
}
function Za(a2, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a2._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a2, b2) {
  b2 = b2.checked;
  null != b2 && ta(a2, "checked", b2, false);
}
function bb(a2, b2) {
  ab(a2, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2) if ("number" === d2) {
    if (0 === c2 && "" === a2.value || a2.value != c2) a2.value = "" + c2;
  } else a2.value !== "" + c2 && (a2.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a2.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a2, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a2, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a2.defaultChecked = !!b2.defaultChecked);
}
function db(a2, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value)) return;
    b2 = "" + a2._wrapperState.initialValue;
    c2 || b2 === a2.value || (a2.value = b2);
    a2.defaultValue = b2;
  }
  c2 = a2.name;
  "" !== c2 && (a2.name = "");
  a2.defaultChecked = !!a2._wrapperState.initialChecked;
  "" !== c2 && (a2.name = c2);
}
function cb(a2, b2, c2) {
  if ("number" !== b2 || Xa(a2.ownerDocument) !== a2) null == c2 ? a2.defaultValue = "" + a2._wrapperState.initialValue : a2.defaultValue !== "" + c2 && (a2.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a2, b2, c2, d2) {
  a2 = a2.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++) b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a2.length; c2++) e2 = b2.hasOwnProperty("$" + a2[c2].value), a2[c2].selected !== e2 && (a2[c2].selected = e2), e2 && d2 && (a2[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a2.length; e2++) {
      if (a2[e2].value === c2) {
        a2[e2].selected = true;
        d2 && (a2[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a2[e2].disabled || (b2 = a2[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a2, b2) {
  if (null != b2.dangerouslySetInnerHTML) throw Error(p$4(91));
  return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a2._wrapperState.initialValue });
}
function hb(a2, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2) throw Error(p$4(92));
      if (eb(c2)) {
        if (1 < c2.length) throw Error(p$4(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a2._wrapperState = { initialValue: Sa(c2) };
}
function ib(a2, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a2.value && (a2.value = c2), null == b2.defaultValue && a2.defaultValue !== c2 && (a2.defaultValue = c2));
  null != d2 && (a2.defaultValue = "" + d2);
}
function jb(a2) {
  var b2 = a2.textContent;
  b2 === a2._wrapperState.initialValue && "" !== b2 && null !== b2 && (a2.value = b2);
}
function kb(a2) {
  switch (a2) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a2, b2) {
  return null == a2 || "http://www.w3.org/1999/xhtml" === a2 ? kb(b2) : "http://www.w3.org/2000/svg" === a2 && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a2;
}
var mb, nb = function(a2) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a2(b2, c2, d2, e2);
    });
  } : a2;
}(function(a2, b2) {
  if ("http://www.w3.org/2000/svg" !== a2.namespaceURI || "innerHTML" in a2) a2.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a2.firstChild; ) a2.removeChild(a2.firstChild);
    for (; b2.firstChild; ) a2.appendChild(b2.firstChild);
  }
});
function ob(a2, b2) {
  if (b2) {
    var c2 = a2.firstChild;
    if (c2 && c2 === a2.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a2.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a2) {
  qb.forEach(function(b2) {
    b2 = b2 + a2.charAt(0).toUpperCase() + a2.substring(1);
    pb[b2] = pb[a2];
  });
});
function rb(a2, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a2) && pb[a2] ? ("" + b2).trim() : b2 + "px";
}
function sb(a2, b2) {
  a2 = a2.style;
  for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
    var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
    "float" === c2 && (c2 = "cssFloat");
    d2 ? a2.setProperty(c2, e2) : a2[c2] = e2;
  }
}
var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a2, b2) {
  if (b2) {
    if (tb[a2] && (null != b2.children || null != b2.dangerouslySetInnerHTML)) throw Error(p$4(137, a2));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children) throw Error(p$4(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML)) throw Error(p$4(61));
    }
    if (null != b2.style && "object" !== typeof b2.style) throw Error(p$4(62));
  }
}
function vb(a2, b2) {
  if (-1 === a2.indexOf("-")) return "string" === typeof b2.is;
  switch (a2) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a2) {
  a2 = a2.target || a2.srcElement || window;
  a2.correspondingUseElement && (a2 = a2.correspondingUseElement);
  return 3 === a2.nodeType ? a2.parentNode : a2;
}
var yb = null, zb = null, Ab = null;
function Bb(a2) {
  if (a2 = Cb(a2)) {
    if ("function" !== typeof yb) throw Error(p$4(280));
    var b2 = a2.stateNode;
    b2 && (b2 = Db(b2), yb(a2.stateNode, a2.type, b2));
  }
}
function Eb(a2) {
  zb ? Ab ? Ab.push(a2) : Ab = [a2] : zb = a2;
}
function Fb() {
  if (zb) {
    var a2 = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a2);
    if (b2) for (a2 = 0; a2 < b2.length; a2++) Bb(b2[a2]);
  }
}
function Gb(a2, b2) {
  return a2(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a2, b2, c2) {
  if (Ib) return a2(b2, c2);
  Ib = true;
  try {
    return Gb(a2, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a2, b2) {
  var c2 = a2.stateNode;
  if (null === c2) return null;
  var d2 = Db(c2);
  if (null === d2) return null;
  c2 = d2[b2];
  a: switch (b2) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (d2 = !d2.disabled) || (a2 = a2.type, d2 = !("button" === a2 || "input" === a2 || "select" === a2 || "textarea" === a2));
      a2 = !d2;
      break a;
    default:
      a2 = false;
  }
  if (a2) return null;
  if (c2 && "function" !== typeof c2) throw Error(p$4(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a2) {
  Lb = false;
}
function Nb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a2) {
  Ob = true;
  Pb = a2;
} };
function Tb(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p$4(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a2) {
  var b2 = a2, c2 = a2;
  if (a2.alternate) for (; b2.return; ) b2 = b2.return;
  else {
    a2 = b2;
    do
      b2 = a2, 0 !== (b2.flags & 4098) && (c2 = b2.return), a2 = b2.return;
    while (a2);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a2) {
  if (13 === a2.tag) {
    var b2 = a2.memoizedState;
    null === b2 && (a2 = a2.alternate, null !== a2 && (b2 = a2.memoizedState));
    if (null !== b2) return b2.dehydrated;
  }
  return null;
}
function Xb(a2) {
  if (Vb(a2) !== a2) throw Error(p$4(188));
}
function Yb(a2) {
  var b2 = a2.alternate;
  if (!b2) {
    b2 = Vb(a2);
    if (null === b2) throw Error(p$4(188));
    return b2 !== a2 ? null : a2;
  }
  for (var c2 = a2, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2) break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2) return Xb(e2), a2;
        if (f2 === d2) return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$4(188));
    }
    if (c2.return !== d2.return) c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2) throw Error(p$4(189));
      }
    }
    if (c2.alternate !== d2) throw Error(p$4(190));
  }
  if (3 !== c2.tag) throw Error(p$4(188));
  return c2.stateNode.current === c2 ? a2 : b2;
}
function Zb(a2) {
  a2 = Yb(a2);
  return null !== a2 ? $b(a2) : null;
}
function $b(a2) {
  if (5 === a2.tag || 6 === a2.tag) return a2;
  for (a2 = a2.child; null !== a2; ) {
    var b2 = $b(a2);
    if (null !== b2) return b2;
    a2 = a2.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B$2 = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a2) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a2, void 0, 128 === (a2.current.flags & 128));
  } catch (b2) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a2) {
  a2 >>>= 0;
  return 0 === a2 ? 32 : 31 - (pc(a2) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a2) {
  switch (a2 & -a2) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a2 & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a2 & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a2;
  }
}
function uc(a2, b2) {
  var c2 = a2.pendingLanes;
  if (0 === c2) return 0;
  var d2 = 0, e2 = a2.suspendedLanes, f2 = a2.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2) return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240))) return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a2.entangledLanes;
  if (0 !== b2) for (a2 = a2.entanglements, b2 &= d2; 0 < b2; ) c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a2[c2], b2 &= ~e2;
  return d2;
}
function vc(a2, b2) {
  switch (a2) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a2, b2) {
  for (var c2 = a2.suspendedLanes, d2 = a2.pingedLanes, e2 = a2.expirationTimes, f2 = a2.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2)) e2[g2] = vc(h2, b2);
    } else k2 <= b2 && (a2.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a2) {
  a2 = a2.pendingLanes & -1073741825;
  return 0 !== a2 ? a2 : a2 & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a2 = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a2;
}
function zc(a2) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++) b2.push(a2);
  return b2;
}
function Ac(a2, b2, c2) {
  a2.pendingLanes |= b2;
  536870912 !== b2 && (a2.suspendedLanes = 0, a2.pingedLanes = 0);
  a2 = a2.eventTimes;
  b2 = 31 - oc(b2);
  a2[b2] = c2;
}
function Bc(a2, b2) {
  var c2 = a2.pendingLanes & ~b2;
  a2.pendingLanes = b2;
  a2.suspendedLanes = 0;
  a2.pingedLanes = 0;
  a2.expiredLanes &= b2;
  a2.mutableReadLanes &= b2;
  a2.entangledLanes &= b2;
  b2 = a2.entanglements;
  var d2 = a2.eventTimes;
  for (a2 = a2.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a2[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a2, b2) {
  var c2 = a2.entangledLanes |= b2;
  for (a2 = a2.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a2[d2] & b2 && (a2[d2] |= b2);
    c2 &= ~e2;
  }
}
var C$2 = 0;
function Dc(a2) {
  a2 &= -a2;
  return 1 < a2 ? 4 < a2 ? 0 !== (a2 & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a2, b2) {
  switch (a2) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a2, b2, c2, d2, e2, f2) {
  if (null === a2 || a2.nativeEvent !== f2) return a2 = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a2;
  a2.eventSystemFlags |= d2;
  b2 = a2.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a2;
}
function Uc(a2, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a2, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a2, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a2, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a2, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a2, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a2) {
  var b2 = Wc(a2.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a2.blockedOn = b2;
          Ic(a2.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a2.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a2.blockedOn = null;
}
function Xc(a2) {
  if (null !== a2.blockedOn) return false;
  for (var b2 = a2.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a2.domEventName, a2.eventSystemFlags, b2[0], a2.nativeEvent);
    if (null === c2) {
      c2 = a2.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else return b2 = Cb(c2), null !== b2 && Fc(b2), a2.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a2, b2, c2) {
  Xc(a2) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a2, b2) {
  a2.blockedOn === b2 && (a2.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a2) {
  function b2(b3) {
    return ad(b3, a2);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a2);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a2 && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a2);
  null !== Mc && ad(Mc, a2);
  null !== Nc && ad(Nc, a2);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++) d2 = Qc[c2], d2.blockedOn === a2 && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); ) Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a2, b2, c2, d2) {
  var e2 = C$2, f2 = cd.transition;
  cd.transition = null;
  try {
    C$2 = 1, fd(a2, b2, c2, d2);
  } finally {
    C$2 = e2, cd.transition = f2;
  }
}
function gd(a2, b2, c2, d2) {
  var e2 = C$2, f2 = cd.transition;
  cd.transition = null;
  try {
    C$2 = 4, fd(a2, b2, c2, d2);
  } finally {
    C$2 = e2, cd.transition = f2;
  }
}
function fd(a2, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a2, b2, c2, d2);
    if (null === e2) hd(a2, b2, d2, id, c2), Sc(a2, d2);
    else if (Uc(e2, a2, b2, c2, d2)) d2.stopPropagation();
    else if (Sc(a2, d2), b2 & 4 && -1 < Rc.indexOf(a2)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a2, b2, c2, d2);
        null === f2 && hd(a2, b2, d2, id, c2);
        if (f2 === e2) break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else hd(a2, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a2, b2, c2, d2) {
  id = null;
  a2 = xb(d2);
  a2 = Wc(a2);
  if (null !== a2) if (b2 = Vb(a2), null === b2) a2 = null;
  else if (c2 = b2.tag, 13 === c2) {
    a2 = Wb(b2);
    if (null !== a2) return a2;
    a2 = null;
  } else if (3 === c2) {
    if (b2.stateNode.current.memoizedState.isDehydrated) return 3 === b2.tag ? b2.stateNode.containerInfo : null;
    a2 = null;
  } else b2 !== a2 && (a2 = null);
  id = a2;
  return null;
}
function jd(a2) {
  switch (a2) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a2, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a2 = 0; a2 < c2 && b2[a2] === e2[a2]; a2++) ;
  var g2 = c2 - a2;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++) ;
  return md = e2.slice(a2, 1 < d2 ? 1 - d2 : void 0);
}
function od(a2) {
  var b2 = a2.keyCode;
  "charCode" in a2 ? (a2 = a2.charCode, 0 === a2 && 13 === b2 && (a2 = 13)) : a2 = b2;
  10 === a2 && (a2 = 13);
  return 32 <= a2 || 13 === a2 ? a2 : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a2) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a2) a2.hasOwnProperty(c2) && (b3 = a2[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a3 = this.nativeEvent;
    a3 && (a3.preventDefault ? a3.preventDefault() : "unknown" !== typeof a3.returnValue && (a3.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a3 = this.nativeEvent;
    a3 && (a3.stopPropagation ? a3.stopPropagation() : "unknown" !== typeof a3.cancelBubble && (a3.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a2) {
  return a2.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a2) {
  return void 0 === a2.relatedTarget ? a2.fromElement === a2.srcElement ? a2.toElement : a2.fromElement : a2.relatedTarget;
}, movementX: function(a2) {
  if ("movementX" in a2) return a2.movementX;
  a2 !== yd && (yd && "mousemove" === a2.type ? (wd = a2.screenX - yd.screenX, xd = a2.screenY - yd.screenY) : xd = wd = 0, yd = a2);
  return wd;
}, movementY: function(a2) {
  return "movementY" in a2 ? a2.movementY : xd;
} }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(a2) {
  return "clipboardData" in a2 ? a2.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a2) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a2) : (a2 = Od[a2]) ? !!b2[a2] : false;
}
function zd() {
  return Pd;
}
var Qd = A$1({}, ud, { key: function(a2) {
  if (a2.key) {
    var b2 = Md[a2.key] || a2.key;
    if ("Unidentified" !== b2) return b2;
  }
  return "keypress" === a2.type ? (a2 = od(a2), 13 === a2 ? "Enter" : String.fromCharCode(a2)) : "keydown" === a2.type || "keyup" === a2.type ? Nd[a2.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a2) {
  return "keypress" === a2.type ? od(a2) : 0;
}, keyCode: function(a2) {
  return "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
}, which: function(a2) {
  return "keypress" === a2.type ? od(a2) : "keydown" === a2.type || "keyup" === a2.type ? a2.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, {
  deltaX: function(a2) {
    return "deltaX" in a2 ? a2.deltaX : "wheelDeltaX" in a2 ? -a2.wheelDeltaX : 0;
  },
  deltaY: function(a2) {
    return "deltaY" in a2 ? a2.deltaY : "wheelDeltaY" in a2 ? -a2.wheelDeltaY : "wheelDelta" in a2 ? -a2.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae$1 = ia && "CompositionEvent" in window, be$1 = null;
ia && "documentMode" in document && (be$1 = document.documentMode);
var ce$1 = ia && "TextEvent" in window && !be$1, de$1 = ia && (!ae$1 || be$1 && 8 < be$1 && 11 >= be$1), ee$1 = String.fromCharCode(32), fe$1 = false;
function ge$1(a2, b2) {
  switch (a2) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he$1(a2) {
  a2 = a2.detail;
  return "object" === typeof a2 && "data" in a2 ? a2.data : null;
}
var ie$1 = false;
function je$1(a2, b2) {
  switch (a2) {
    case "compositionend":
      return he$1(b2);
    case "keypress":
      if (32 !== b2.which) return null;
      fe$1 = true;
      return ee$1;
    case "textInput":
      return a2 = b2.data, a2 === ee$1 && fe$1 ? null : a2;
    default:
      return null;
  }
}
function ke$1(a2, b2) {
  if (ie$1) return "compositionend" === a2 || !ae$1 && ge$1(a2, b2) ? (a2 = nd(), md = ld = kd = null, ie$1 = false, a2) : null;
  switch (a2) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length) return b2.char;
        if (b2.which) return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de$1 && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le$1 = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return "input" === b2 ? !!le$1[a2.type] : "textarea" === b2 ? true : false;
}
function ne$1(a2, b2, c2, d2) {
  Eb(d2);
  b2 = oe$1(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a2.push({ event: c2, listeners: b2 }));
}
var pe$1 = null, qe$1 = null;
function re$1(a2) {
  se$1(a2, 0);
}
function te$1(a2) {
  var b2 = ue(a2);
  if (Wa(b2)) return a2;
}
function ve$1(a2, b2) {
  if ("change" === a2) return b2;
}
var we$1 = false;
if (ia) {
  var xe$1;
  if (ia) {
    var ye$1 = "oninput" in document;
    if (!ye$1) {
      var ze$1 = document.createElement("div");
      ze$1.setAttribute("oninput", "return;");
      ye$1 = "function" === typeof ze$1.oninput;
    }
    xe$1 = ye$1;
  } else xe$1 = false;
  we$1 = xe$1 && (!document.documentMode || 9 < document.documentMode);
}
function Ae$1() {
  pe$1 && (pe$1.detachEvent("onpropertychange", Be$1), qe$1 = pe$1 = null);
}
function Be$1(a2) {
  if ("value" === a2.propertyName && te$1(qe$1)) {
    var b2 = [];
    ne$1(b2, qe$1, a2, xb(a2));
    Jb(re$1, b2);
  }
}
function Ce(a2, b2, c2) {
  "focusin" === a2 ? (Ae$1(), pe$1 = b2, qe$1 = c2, pe$1.attachEvent("onpropertychange", Be$1)) : "focusout" === a2 && Ae$1();
}
function De$1(a2) {
  if ("selectionchange" === a2 || "keyup" === a2 || "keydown" === a2) return te$1(qe$1);
}
function Ee$1(a2, b2) {
  if ("click" === a2) return te$1(b2);
}
function Fe$1(a2, b2) {
  if ("input" === a2 || "change" === a2) return te$1(b2);
}
function Ge(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var He$1 = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a2, b2) {
  if (He$1(a2, b2)) return true;
  if ("object" !== typeof a2 || null === a2 || "object" !== typeof b2 || null === b2) return false;
  var c2 = Object.keys(a2), d2 = Object.keys(b2);
  if (c2.length !== d2.length) return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He$1(a2[e2], b2[e2])) return false;
  }
  return true;
}
function Je(a2) {
  for (; a2 && a2.firstChild; ) a2 = a2.firstChild;
  return a2;
}
function Ke(a2, b2) {
  var c2 = Je(a2);
  a2 = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a2 + c2.textContent.length;
      if (a2 <= b2 && d2 >= b2) return { node: c2, offset: b2 - a2 };
      a2 = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je(c2);
  }
}
function Le(a2, b2) {
  return a2 && b2 ? a2 === b2 ? true : a2 && 3 === a2.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a2, b2.parentNode) : "contains" in a2 ? a2.contains(b2) : a2.compareDocumentPosition ? !!(a2.compareDocumentPosition(b2) & 16) : false : false;
}
function Me$1() {
  for (var a2 = window, b2 = Xa(); b2 instanceof a2.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2) a2 = b2.contentWindow;
    else break;
    b2 = Xa(a2.document);
  }
  return b2;
}
function Ne$1(a2) {
  var b2 = a2 && a2.nodeName && a2.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a2.type || "search" === a2.type || "tel" === a2.type || "url" === a2.type || "password" === a2.type) || "textarea" === b2 || "true" === a2.contentEditable);
}
function Oe$1(a2) {
  var b2 = Me$1(), c2 = a2.focusedElem, d2 = a2.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne$1(c2)) {
      if (b2 = d2.start, a2 = d2.end, void 0 === a2 && (a2 = b2), "selectionStart" in c2) c2.selectionStart = b2, c2.selectionEnd = Math.min(a2, c2.value.length);
      else if (a2 = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a2.getSelection) {
        a2 = a2.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a2.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke(c2, f2);
        var g2 = Ke(
          c2,
          d2
        );
        e2 && g2 && (1 !== a2.rangeCount || a2.anchorNode !== e2.node || a2.anchorOffset !== e2.offset || a2.focusNode !== g2.node || a2.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a2.removeAllRanges(), f2 > d2 ? (a2.addRange(b2), a2.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a2.addRange(b2)));
      }
    }
    b2 = [];
    for (a2 = c2; a2 = a2.parentNode; ) 1 === a2.nodeType && b2.push({ element: a2, left: a2.scrollLeft, top: a2.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++) a2 = b2[c2], a2.element.scrollLeft = a2.left, a2.element.scrollTop = a2.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re$1 = null, Se$1 = null, Te$1 = false;
function Ue(a2, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te$1 || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne$1(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se$1 && Ie(Se$1, d2) || (Se$1 = d2, d2 = oe$1(Re$1, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a2.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
function Ve$1(a2, b2) {
  var c2 = {};
  c2[a2.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a2] = "webkit" + b2;
  c2["Moz" + a2] = "moz" + b2;
  return c2;
}
var We$1 = { animationend: Ve$1("Animation", "AnimationEnd"), animationiteration: Ve$1("Animation", "AnimationIteration"), animationstart: Ve$1("Animation", "AnimationStart"), transitionend: Ve$1("Transition", "TransitionEnd") }, Xe = {}, Ye$1 = {};
ia && (Ye$1 = document.createElement("div").style, "AnimationEvent" in window || (delete We$1.animationend.animation, delete We$1.animationiteration.animation, delete We$1.animationstart.animation), "TransitionEvent" in window || delete We$1.transitionend.transition);
function Ze(a2) {
  if (Xe[a2]) return Xe[a2];
  if (!We$1[a2]) return a2;
  var b2 = We$1[a2], c2;
  for (c2 in b2) if (b2.hasOwnProperty(c2) && c2 in Ye$1) return Xe[a2] = b2[c2];
  return a2;
}
var $e$1 = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a2, b2) {
  df.set(a2, b2);
  fa(b2, [a2]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e$1, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a2, b2, c2) {
  var d2 = a2.type || "unknown-event";
  a2.currentTarget = c2;
  Ub(d2, b2, void 0, a2);
  a2.currentTarget = null;
}
function se$1(a2, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a2.length; c2++) {
    var d2 = a2[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2) for (var g2 = d2.length - 1; 0 <= g2; g2--) {
        var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
      else for (g2 = 0; g2 < d2.length; g2++) {
        h2 = d2[g2];
        k2 = h2.instance;
        l2 = h2.currentTarget;
        h2 = h2.listener;
        if (k2 !== f2 && e2.isPropagationStopped()) break a;
        nf(e2, h2, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a2 = Rb, Qb = false, Rb = null, a2;
}
function D$2(a2, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a2 + "__bubble";
  c2.has(d2) || (pf(b2, a2, 2, false), c2.add(d2));
}
function qf(a2, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a2, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a2) {
  if (!a2[rf]) {
    a2[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a2), qf(b3, true, a2));
    });
    var b2 = 9 === a2.nodeType ? a2 : a2.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a2, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a2);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a2.addEventListener(b2, c2, { capture: true, passive: e2 }) : a2.addEventListener(b2, c2, true) : void 0 !== e2 ? a2.addEventListener(b2, c2, { passive: e2 }) : a2.addEventListener(b2, c2, false);
}
function hd(a2, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2) a: for (; ; ) {
    if (null === d2) return;
    var g2 = d2.tag;
    if (3 === g2 || 4 === g2) {
      var h2 = d2.stateNode.containerInfo;
      if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2) break;
      if (4 === g2) for (g2 = d2.return; null !== g2; ) {
        var k2 = g2.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2) return;
        }
        g2 = g2.return;
      }
      for (; null !== h2; ) {
        g2 = Wc(h2);
        if (null === g2) return;
        k2 = g2.tag;
        if (5 === k2 || 6 === k2) {
          d2 = f2 = g2;
          continue a;
        }
        h2 = h2.parentNode;
      }
    }
    d2 = d2.return;
  }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a2);
      if (void 0 !== h3) {
        var k3 = td, n2 = a2;
        switch (a2) {
          case "keypress":
            if (0 === od(c2)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e$1:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a2, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a2 || "pointerover" === a2;
        k3 = "mouseout" === a2 || "pointerout" === a2;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a2 || "pointerover" === a2) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type) var na = ve$1;
        else if (me(h3)) if (we$1) na = Fe$1;
        else {
          na = De$1;
          var xa = Ce;
        }
        else (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee$1);
        if (na && (na = na(a2, d3))) {
          ne$1(g3, na, c2, e3);
          break a;
        }
        xa && xa(a2, h3, d3);
        "focusout" === a2 && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue(d3) : window;
      switch (a2) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re$1 = d3, Se$1 = null;
          break;
        case "focusout":
          Se$1 = Re$1 = Qe = null;
          break;
        case "mousedown":
          Te$1 = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te$1 = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var $a;
      if (ae$1) b: {
        switch (a2) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie$1 ? ge$1(a2, c2) && (ba = "onCompositionEnd") : "keydown" === a2 && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de$1 && "ko" !== c2.locale && (ie$1 || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie$1 && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie$1 = true)), xa = oe$1(d3, ba), 0 < xa.length && (ba = new Ld(ba, a2, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he$1(c2), null !== $a && (ba.data = $a))));
      if ($a = ce$1 ? je$1(a2, c2) : ke$1(a2, c2)) d3 = oe$1(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se$1(g3, b2);
  });
}
function tf(a2, b2, c2) {
  return { instance: a2, listener: b2, currentTarget: c2 };
}
function oe$1(a2, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a2; ) {
    var e2 = a2, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a2, c2), null != f2 && d2.unshift(tf(a2, f2, e2)), f2 = Kb(a2, b2), null != f2 && d2.push(tf(a2, f2, e2)));
    a2 = a2.return;
  }
  return d2;
}
function vf(a2) {
  if (null === a2) return null;
  do
    a2 = a2.return;
  while (a2 && 5 !== a2.tag);
  return a2 ? a2 : null;
}
function wf(a2, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2) break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a2.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a2) {
  return ("string" === typeof a2 ? a2 : "" + a2).replace(xf, "\n").replace(yf, "");
}
function Af(a2, b2, c2) {
  b2 = zf(b2);
  if (zf(a2) !== b2 && c2) throw Error(p$4(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a2, b2) {
  return "textarea" === a2 || "noscript" === a2 || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a2) {
  return Hf.resolve(null).then(a2).catch(If);
} : Ff;
function If(a2) {
  setTimeout(function() {
    throw a2;
  });
}
function Kf(a2, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a2.removeChild(c2);
    if (e2 && 8 === e2.nodeType) if (c2 = e2.data, "/$" === c2) {
      if (0 === d2) {
        a2.removeChild(e2);
        bd(b2);
        return;
      }
      d2--;
    } else "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a2) {
  for (; null != a2; a2 = a2.nextSibling) {
    var b2 = a2.nodeType;
    if (1 === b2 || 3 === b2) break;
    if (8 === b2) {
      b2 = a2.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2) break;
      if ("/$" === b2) return null;
    }
  }
  return a2;
}
function Mf(a2) {
  a2 = a2.previousSibling;
  for (var b2 = 0; a2; ) {
    if (8 === a2.nodeType) {
      var c2 = a2.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2) return a2;
        b2--;
      } else "/$" === c2 && b2++;
    }
    a2 = a2.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a2) {
  var b2 = a2[Of];
  if (b2) return b2;
  for (var c2 = a2.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child) for (a2 = Mf(a2); null !== a2; ) {
        if (c2 = a2[Of]) return c2;
        a2 = Mf(a2);
      }
      return b2;
    }
    a2 = c2;
    c2 = a2.parentNode;
  }
  return null;
}
function Cb(a2) {
  a2 = a2[Of] || a2[uf];
  return !a2 || 5 !== a2.tag && 6 !== a2.tag && 13 !== a2.tag && 3 !== a2.tag ? null : a2;
}
function ue(a2) {
  if (5 === a2.tag || 6 === a2.tag) return a2.stateNode;
  throw Error(p$4(33));
}
function Db(a2) {
  return a2[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a2) {
  return { current: a2 };
}
function E$2(a2) {
  0 > Tf || (a2.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G$2(a2, b2) {
  Tf++;
  Sf[Tf] = a2.current;
  a2.current = b2;
}
var Vf = {}, H$2 = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a2, b2) {
  var c2 = a2.type.contextTypes;
  if (!c2) return Vf;
  var d2 = a2.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2) return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2) e2[f2] = b2[f2];
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = b2, a2.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a2) {
  a2 = a2.childContextTypes;
  return null !== a2 && void 0 !== a2;
}
function $f() {
  E$2(Wf);
  E$2(H$2);
}
function ag(a2, b2, c2) {
  if (H$2.current !== Vf) throw Error(p$4(168));
  G$2(H$2, b2);
  G$2(Wf, c2);
}
function bg(a2, b2, c2) {
  var d2 = a2.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext) return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2) if (!(e2 in b2)) throw Error(p$4(108, Ra(a2) || "Unknown", e2));
  return A$1({}, c2, d2);
}
function cg(a2) {
  a2 = (a2 = a2.stateNode) && a2.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H$2.current;
  G$2(H$2, a2);
  G$2(Wf, Wf.current);
  return true;
}
function dg(a2, b2, c2) {
  var d2 = a2.stateNode;
  if (!d2) throw Error(p$4(169));
  c2 ? (a2 = bg(a2, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a2, E$2(Wf), E$2(H$2), G$2(H$2, a2)) : E$2(Wf);
  G$2(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a2) {
  null === eg ? eg = [a2] : eg.push(a2);
}
function ig(a2) {
  fg = true;
  hg(a2);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a2 = 0, b2 = C$2;
    try {
      var c2 = eg;
      for (C$2 = 1; a2 < c2.length; a2++) {
        var d2 = c2[a2];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a2 + 1)), ac(fc, jg), e2;
    } finally {
      C$2 = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a2, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a2;
  ng = b2;
}
function ug(a2, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a2;
  var d2 = rg;
  a2 = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a2;
  } else rg = 1 << f2 | c2 << e2 | d2, sg = a2;
}
function vg(a2) {
  null !== a2.return && (tg(a2, 1), ug(a2, 1, 0));
}
function wg(a2) {
  for (; a2 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a2 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I$2 = false, zg = null;
function Ag(a2, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a2;
  b2 = a2.deletions;
  null === b2 ? (a2.deletions = [c2], a2.flags |= 16) : b2.push(c2);
}
function Cg(a2, b2) {
  switch (a2.tag) {
    case 5:
      var c2 = a2.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a2.stateNode = b2, xg = a2, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a2.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a2.stateNode = b2, xg = a2, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a2.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a2, a2.child = c2, xg = a2, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a2) {
  return 0 !== (a2.mode & 1) && 0 === (a2.flags & 128);
}
function Eg(a2) {
  if (I$2) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a2, b2)) {
        if (Dg(a2)) throw Error(p$4(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a2, b2) ? Ag(d2, c2) : (a2.flags = a2.flags & -4097 | 2, I$2 = false, xg = a2);
      }
    } else {
      if (Dg(a2)) throw Error(p$4(418));
      a2.flags = a2.flags & -4097 | 2;
      I$2 = false;
      xg = a2;
    }
  }
}
function Fg(a2) {
  for (a2 = a2.return; null !== a2 && 5 !== a2.tag && 3 !== a2.tag && 13 !== a2.tag; ) a2 = a2.return;
  xg = a2;
}
function Gg(a2) {
  if (a2 !== xg) return false;
  if (!I$2) return Fg(a2), I$2 = true, false;
  var b2;
  (b2 = 3 !== a2.tag) && !(b2 = 5 !== a2.tag) && (b2 = a2.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a2.type, a2.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a2)) throw Hg(), Error(p$4(418));
    for (; b2; ) Ag(a2, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a2);
  if (13 === a2.tag) {
    a2 = a2.memoizedState;
    a2 = null !== a2 ? a2.dehydrated : null;
    if (!a2) throw Error(p$4(317));
    a: {
      a2 = a2.nextSibling;
      for (b2 = 0; a2; ) {
        if (8 === a2.nodeType) {
          var c2 = a2.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a2.nextSibling);
              break a;
            }
            b2--;
          } else "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a2 = a2.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a2.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a2 = yg; a2; ) a2 = Lf(a2.nextSibling);
}
function Ig() {
  yg = xg = null;
  I$2 = false;
}
function Jg(a2) {
  null === zg ? zg = [a2] : zg.push(a2);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a2, b2, c2) {
  a2 = c2.ref;
  if (null !== a2 && "function" !== typeof a2 && "object" !== typeof a2) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag) throw Error(p$4(309));
        var d2 = c2.stateNode;
      }
      if (!d2) throw Error(p$4(147, a2));
      var e2 = d2, f2 = "" + a2;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2) return b2.ref;
      b2 = function(a3) {
        var b3 = e2.refs;
        null === a3 ? delete b3[f2] : b3[f2] = a3;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a2) throw Error(p$4(284));
    if (!c2._owner) throw Error(p$4(290, a2));
  }
  return a2;
}
function Mg(a2, b2) {
  a2 = Object.prototype.toString.call(b2);
  throw Error(p$4(31, "[object Object]" === a2 ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a2));
}
function Ng(a2) {
  var b2 = a2._init;
  return b2(a2._payload);
}
function Og(a2) {
  function b2(b3, c3) {
    if (a2) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a2) return null;
    for (; null !== d3; ) b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a3, b3) {
    for (a3 = /* @__PURE__ */ new Map(); null !== b3; ) null !== b3.key ? a3.set(b3.key, b3) : a3.set(b3.index, b3), b3 = b3.sibling;
    return a3;
  }
  function e2(a3, b3) {
    a3 = Pg(a3, b3);
    a3.index = 0;
    a3.sibling = null;
    return a3;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a2) return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3) return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a2 && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a3, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag) return b3 = Qg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function k2(a3, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya) return m2(a3, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b3.type)) return d3 = e2(b3, c3.props), d3.ref = Lg(a3, b3, c3), d3.return = a3, d3;
    d3 = Rg(c3.type, c3.key, c3.props, null, a3.mode, d3);
    d3.ref = Lg(a3, b3, c3);
    d3.return = a3;
    return d3;
  }
  function l2(a3, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation) return b3 = Sg(c3, a3.mode, d3), b3.return = a3, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a3;
    return b3;
  }
  function m2(a3, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag) return b3 = Tg(c3, a3.mode, d3, f3), b3.return = a3, b3;
    b3 = e2(b3, c3);
    b3.return = a3;
    return b3;
  }
  function q2(a3, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3) return b3 = Qg("" + b3, a3.mode, c3), b3.return = a3, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = Rg(b3.type, b3.key, b3.props, null, a3.mode, c3), c3.ref = Lg(a3, null, b3), c3.return = a3, c3;
        case wa:
          return b3 = Sg(b3, a3.mode, c3), b3.return = a3, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a3, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3)) return b3 = Tg(b3, a3.mode, c3, null), b3.return = a3, b3;
      Mg(a3, b3);
    }
    return null;
  }
  function r2(a3, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3) return null !== e3 ? null : h2(a3, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a3, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a3, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a3,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3)) return null !== e3 ? null : m2(a3, b3, c3, d3, null);
      Mg(a3, c3);
    }
    return null;
  }
  function y2(a3, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3) return a3 = a3.get(c3) || null, h2(b3, a3, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a3, d3, e3);
        case wa:
          return a3 = a3.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a3, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a3, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3)) return a3 = a3.get(c3) || null, m2(b3, a3, d3, e3, null);
      Mg(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a2 && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length) return c2(e3, u2), I$2 && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++) u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I$2 && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++) x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a2 && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a2 && u2.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$2 && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3) throw Error(p$4(150));
    h3 = l3.call(h3);
    if (null == h3) throw Error(p$4(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a2 && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c2(
      e3,
      m3
    ), I$2 && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next()) n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I$2 && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next()) n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a2 && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a2 && m3.forEach(function(a3) {
      return b2(e3, a3);
    });
    I$2 && tg(e3, w2);
    return l3;
  }
  function J2(a3, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a3, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a3;
                    a3 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c2(a3, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = Lg(a3, l3, f3);
                  d3.return = a3;
                  a3 = d3;
                  break a;
                }
                c2(a3, l3);
                break;
              } else b2(a3, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Tg(f3.props.children, a3.mode, h3, f3.key), d3.return = a3, a3 = d3) : (h3 = Rg(f3.type, f3.key, f3.props, null, a3.mode, h3), h3.ref = Lg(a3, d3, f3), h3.return = a3, a3 = h3);
          }
          return g2(a3);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3) if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                c2(a3, d3.sibling);
                d3 = e2(d3, f3.children || []);
                d3.return = a3;
                a3 = d3;
                break a;
              } else {
                c2(a3, d3);
                break;
              }
              else b2(a3, d3);
              d3 = d3.sibling;
            }
            d3 = Sg(f3, a3.mode, h3);
            d3.return = a3;
            a3 = d3;
          }
          return g2(a3);
        case Ha:
          return l3 = f3._init, J2(a3, d3, l3(f3._payload), h3);
      }
      if (eb(f3)) return n2(a3, d3, f3, h3);
      if (Ka(f3)) return t2(a3, d3, f3, h3);
      Mg(a3, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a3, d3.sibling), d3 = e2(d3, f3), d3.return = a3, a3 = d3) : (c2(a3, d3), d3 = Qg(f3, a3.mode, h3), d3.return = a3, a3 = d3), g2(a3)) : c2(a3, d3);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a2) {
  var b2 = Wg.current;
  E$2(Wg);
  a2._currentValue = b2;
}
function bh(a2, b2, c2) {
  for (; null !== a2; ) {
    var d2 = a2.alternate;
    (a2.childLanes & b2) !== b2 ? (a2.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a2 === c2) break;
    a2 = a2.return;
  }
}
function ch(a2, b2) {
  Xg = a2;
  Zg = Yg = null;
  a2 = a2.dependencies;
  null !== a2 && null !== a2.firstContext && (0 !== (a2.lanes & b2) && (dh = true), a2.firstContext = null);
}
function eh(a2) {
  var b2 = a2._currentValue;
  if (Zg !== a2) if (a2 = { context: a2, memoizedValue: b2, next: null }, null === Yg) {
    if (null === Xg) throw Error(p$4(308));
    Yg = a2;
    Xg.dependencies = { lanes: 0, firstContext: a2 };
  } else Yg = Yg.next = a2;
  return b2;
}
var fh = null;
function gh(a2) {
  null === fh ? fh = [a2] : fh.push(a2);
}
function hh(a2, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, gh(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return ih(a2, d2);
}
function ih(a2, b2) {
  a2.lanes |= b2;
  var c2 = a2.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a2;
  for (a2 = a2.return; null !== a2; ) a2.childLanes |= b2, c2 = a2.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a2, a2 = a2.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var jh = false;
function kh(a2) {
  a2.updateQueue = { baseState: a2.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a2, b2) {
  a2 = a2.updateQueue;
  b2.updateQueue === a2 && (b2.updateQueue = { baseState: a2.baseState, firstBaseUpdate: a2.firstBaseUpdate, lastBaseUpdate: a2.lastBaseUpdate, shared: a2.shared, effects: a2.effects });
}
function mh(a2, b2) {
  return { eventTime: a2, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function nh(a2, b2, c2) {
  var d2 = a2.updateQueue;
  if (null === d2) return null;
  d2 = d2.shared;
  if (0 !== (K$2 & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return ih(a2, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, gh(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return ih(a2, c2);
}
function oh(a2, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
function ph(a2, b2) {
  var c2 = a2.updateQueue, d2 = a2.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a2.updateQueue = c2;
    return;
  }
  a2 = c2.lastBaseUpdate;
  null === a2 ? c2.firstBaseUpdate = b2 : a2.next = b2;
  c2.lastBaseUpdate = b2;
}
function qh(a2, b2, c2, d2) {
  var e2 = a2.updateQueue;
  jh = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a2.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a2, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A$1({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a2.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2) if (h2 = e2.shared.pending, null === h2) break;
      else r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else null === f2 && (e2.shared.lanes = 0);
    rh |= g2;
    a2.lanes = g2;
    a2.memoizedState = q2;
  }
}
function sh(a2, b2, c2) {
  a2 = b2.effects;
  b2.effects = null;
  if (null !== a2) for (b2 = 0; b2 < a2.length; b2++) {
    var d2 = a2[b2], e2 = d2.callback;
    if (null !== e2) {
      d2.callback = null;
      d2 = c2;
      if ("function" !== typeof e2) throw Error(p$4(191, e2));
      e2.call(d2);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a2) {
  if (a2 === th) throw Error(p$4(174));
  return a2;
}
function yh(a2, b2) {
  G$2(wh, b2);
  G$2(vh, a2);
  G$2(uh, th);
  a2 = b2.nodeType;
  switch (a2) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a2 = 8 === a2 ? b2.parentNode : b2, b2 = a2.namespaceURI || null, a2 = a2.tagName, b2 = lb(b2, a2);
  }
  E$2(uh);
  G$2(uh, b2);
}
function zh() {
  E$2(uh);
  E$2(vh);
  E$2(wh);
}
function Ah(a2) {
  xh(wh.current);
  var b2 = xh(uh.current);
  var c2 = lb(b2, a2.type);
  b2 !== c2 && (G$2(vh, a2), G$2(uh, c2));
}
function Bh(a2) {
  vh.current === a2 && (E$2(uh), E$2(vh));
}
var L$2 = Uf(0);
function Ch(a2) {
  for (var b2 = a2; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data)) return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128)) return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a2) break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a2) return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a2 = 0; a2 < Dh.length; a2++) Dh[a2]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M$2 = null, N$2 = null, O$1 = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P$2() {
  throw Error(p$4(321));
}
function Mh(a2, b2) {
  if (null === b2) return false;
  for (var c2 = 0; c2 < b2.length && c2 < a2.length; c2++) if (!He$1(a2[c2], b2[c2])) return false;
  return true;
}
function Nh(a2, b2, c2, d2, e2, f2) {
  Hh = f2;
  M$2 = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Fh.current = null === a2 || null === a2.memoizedState ? Oh : Ph;
  a2 = c2(d2, e2);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p$4(301));
      f2 += 1;
      O$1 = N$2 = null;
      b2.updateQueue = null;
      Fh.current = Qh;
      a2 = c2(d2, e2);
    } while (Jh);
  }
  Fh.current = Rh;
  b2 = null !== N$2 && null !== N$2.next;
  Hh = 0;
  O$1 = N$2 = M$2 = null;
  Ih = false;
  if (b2) throw Error(p$4(300));
  return a2;
}
function Sh() {
  var a2 = 0 !== Kh;
  Kh = 0;
  return a2;
}
function Th() {
  var a2 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O$1 ? M$2.memoizedState = O$1 = a2 : O$1 = O$1.next = a2;
  return O$1;
}
function Uh() {
  if (null === N$2) {
    var a2 = M$2.alternate;
    a2 = null !== a2 ? a2.memoizedState : null;
  } else a2 = N$2.next;
  var b2 = null === O$1 ? M$2.memoizedState : O$1.next;
  if (null !== b2) O$1 = b2, N$2 = a2;
  else {
    if (null === a2) throw Error(p$4(310));
    N$2 = a2;
    a2 = { memoizedState: N$2.memoizedState, baseState: N$2.baseState, baseQueue: N$2.baseQueue, queue: N$2.queue, next: null };
    null === O$1 ? M$2.memoizedState = O$1 = a2 : O$1 = O$1.next = a2;
  }
  return O$1;
}
function Vh(a2, b2) {
  return "function" === typeof b2 ? b2(a2) : b2;
}
function Wh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$4(311));
  c2.lastRenderedReducer = a2;
  var d2 = N$2, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a2(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        M$2.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He$1(d2, b2.memoizedState) || (dh = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a2 = c2.interleaved;
  if (null !== a2) {
    e2 = a2;
    do
      f2 = e2.lane, M$2.lanes |= f2, rh |= f2, e2 = e2.next;
    while (e2 !== a2);
  } else null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function Xh(a2) {
  var b2 = Uh(), c2 = b2.queue;
  if (null === c2) throw Error(p$4(311));
  c2.lastRenderedReducer = a2;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a2(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He$1(f2, b2.memoizedState) || (dh = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function Yh() {
}
function Zh(a2, b2) {
  var c2 = M$2, d2 = Uh(), e2 = b2(), f2 = !He$1(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, dh = true);
  d2 = d2.queue;
  $h(ai.bind(null, c2, d2, a2), [a2]);
  if (d2.getSnapshot !== b2 || f2 || null !== O$1 && O$1.memoizedState.tag & 1) {
    c2.flags |= 2048;
    bi(9, ci.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === Q$2) throw Error(p$4(349));
    0 !== (Hh & 30) || di(c2, b2, e2);
  }
  return e2;
}
function di(a2, b2, c2) {
  a2.flags |= 16384;
  a2 = { getSnapshot: b2, value: c2 };
  b2 = M$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$2.updateQueue = b2, b2.stores = [a2]) : (c2 = b2.stores, null === c2 ? b2.stores = [a2] : c2.push(a2));
}
function ci(a2, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  ei(b2) && fi(a2);
}
function ai(a2, b2, c2) {
  return c2(function() {
    ei(b2) && fi(a2);
  });
}
function ei(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var c2 = b2();
    return !He$1(a2, c2);
  } catch (d2) {
    return true;
  }
}
function fi(a2) {
  var b2 = ih(a2, 1);
  null !== b2 && gi(b2, a2, 1, -1);
}
function hi(a2) {
  var b2 = Th();
  "function" === typeof a2 && (a2 = a2());
  b2.memoizedState = b2.baseState = a2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a2 };
  b2.queue = a2;
  a2 = a2.dispatch = ii.bind(null, M$2, a2);
  return [b2.memoizedState, a2];
}
function bi(a2, b2, c2, d2) {
  a2 = { tag: a2, create: b2, destroy: c2, deps: d2, next: null };
  b2 = M$2.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, M$2.updateQueue = b2, b2.lastEffect = a2.next = a2) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a2.next = a2 : (d2 = c2.next, c2.next = a2, a2.next = d2, b2.lastEffect = a2));
  return a2;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a2, b2, c2, d2) {
  var e2 = Th();
  M$2.flags |= a2;
  e2.memoizedState = bi(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function li(a2, b2, c2, d2) {
  var e2 = Uh();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== N$2) {
    var g2 = N$2.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Mh(d2, g2.deps)) {
      e2.memoizedState = bi(b2, c2, f2, d2);
      return;
    }
  }
  M$2.flags |= a2;
  e2.memoizedState = bi(1 | b2, c2, f2, d2);
}
function mi(a2, b2) {
  return ki(8390656, 8, a2, b2);
}
function $h(a2, b2) {
  return li(2048, 8, a2, b2);
}
function ni(a2, b2) {
  return li(4, 2, a2, b2);
}
function oi(a2, b2) {
  return li(4, 4, a2, b2);
}
function pi(a2, b2) {
  if ("function" === typeof b2) return a2 = a2(), b2(a2), function() {
    b2(null);
  };
  if (null !== b2 && void 0 !== b2) return a2 = a2(), b2.current = a2, function() {
    b2.current = null;
  };
}
function qi(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return li(4, 4, pi.bind(null, b2, a2), c2);
}
function ri() {
}
function si(a2, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  c2.memoizedState = [a2, b2];
  return a2;
}
function ti(a2, b2) {
  var c2 = Uh();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Mh(b2, d2[1])) return d2[0];
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}
function ui(a2, b2, c2) {
  if (0 === (Hh & 21)) return a2.baseState && (a2.baseState = false, dh = true), a2.memoizedState = c2;
  He$1(c2, b2) || (c2 = yc(), M$2.lanes |= c2, rh |= c2, a2.baseState = true);
  return b2;
}
function vi(a2, b2) {
  var c2 = C$2;
  C$2 = 0 !== c2 && 4 > c2 ? c2 : 4;
  a2(true);
  var d2 = Gh.transition;
  Gh.transition = {};
  try {
    a2(false), b2();
  } finally {
    C$2 = c2, Gh.transition = d2;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a2, b2, c2) {
  var d2 = yi(a2);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a2)) Ai(b2, c2);
  else if (c2 = hh(a2, b2, c2, d2), null !== c2) {
    var e2 = R$1();
    gi(c2, a2, d2, e2);
    Bi(c2, b2, d2);
  }
}
function ii(a2, b2, c2) {
  var d2 = yi(a2), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (zi(a2)) Ai(b2, e2);
  else {
    var f2 = a2.alternate;
    if (0 === a2.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2)) try {
      var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
      e2.hasEagerState = true;
      e2.eagerState = h2;
      if (He$1(h2, g2)) {
        var k2 = b2.interleaved;
        null === k2 ? (e2.next = e2, gh(b2)) : (e2.next = k2.next, k2.next = e2);
        b2.interleaved = e2;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c2 = hh(a2, b2, e2, d2);
    null !== c2 && (e2 = R$1(), gi(c2, a2, d2, e2), Bi(c2, b2, d2));
  }
}
function zi(a2) {
  var b2 = a2.alternate;
  return a2 === M$2 || null !== b2 && b2 === M$2;
}
function Ai(a2, b2) {
  Jh = Ih = true;
  var c2 = a2.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a2.pending = b2;
}
function Bi(a2, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a2.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a2, c2);
  }
}
var Rh = { readContext: eh, useCallback: P$2, useContext: P$2, useEffect: P$2, useImperativeHandle: P$2, useInsertionEffect: P$2, useLayoutEffect: P$2, useMemo: P$2, useReducer: P$2, useRef: P$2, useState: P$2, useDebugValue: P$2, useDeferredValue: P$2, useTransition: P$2, useMutableSource: P$2, useSyncExternalStore: P$2, useId: P$2, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a2, b2) {
  Th().memoizedState = [a2, void 0 === b2 ? null : b2];
  return a2;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a2, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a2]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b2, a2),
    c2
  );
}, useLayoutEffect: function(a2, b2) {
  return ki(4194308, 4, a2, b2);
}, useInsertionEffect: function(a2, b2) {
  return ki(4, 2, a2, b2);
}, useMemo: function(a2, b2) {
  var c2 = Th();
  b2 = void 0 === b2 ? null : b2;
  a2 = a2();
  c2.memoizedState = [a2, b2];
  return a2;
}, useReducer: function(a2, b2, c2) {
  var d2 = Th();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a2 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a2, lastRenderedState: b2 };
  d2.queue = a2;
  a2 = a2.dispatch = xi.bind(null, M$2, a2);
  return [d2.memoizedState, a2];
}, useRef: function(a2) {
  var b2 = Th();
  a2 = { current: a2 };
  return b2.memoizedState = a2;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a2) {
  return Th().memoizedState = a2;
}, useTransition: function() {
  var a2 = hi(false), b2 = a2[0];
  a2 = vi.bind(null, a2[1]);
  Th().memoizedState = a2;
  return [b2, a2];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a2, b2, c2) {
  var d2 = M$2, e2 = Th();
  if (I$2) {
    if (void 0 === c2) throw Error(p$4(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === Q$2) throw Error(p$4(349));
    0 !== (Hh & 30) || di(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  mi(ai.bind(
    null,
    d2,
    f2,
    a2
  ), [a2]);
  d2.flags |= 2048;
  bi(9, ci.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a2 = Th(), b2 = Q$2.identifierPrefix;
  if (I$2) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Kh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else c2 = Lh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a2.memoizedState = b2;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a2) {
    var b2 = Uh();
    return ui(b2, N$2.memoizedState, a2);
  },
  useTransition: function() {
    var a2 = Wh(Vh)[0], b2 = Uh().memoizedState;
    return [a2, b2];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a2) {
  var b2 = Uh();
  return null === N$2 ? b2.memoizedState = a2 : ui(b2, N$2.memoizedState, a2);
}, useTransition: function() {
  var a2 = Xh(Vh)[0], b2 = Uh().memoizedState;
  return [a2, b2];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a2, b2) {
  if (a2 && a2.defaultProps) {
    b2 = A$1({}, b2);
    a2 = a2.defaultProps;
    for (var c2 in a2) void 0 === b2[c2] && (b2[c2] = a2[c2]);
    return b2;
  }
  return b2;
}
function Di(a2, b2, c2, d2) {
  b2 = a2.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$1({}, b2, c2);
  a2.memoizedState = c2;
  0 === a2.lanes && (a2.updateQueue.baseState = c2);
}
var Ei = { isMounted: function(a2) {
  return (a2 = a2._reactInternals) ? Vb(a2) === a2 : false;
}, enqueueSetState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = R$1(), e2 = yi(a2), f2 = mh(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a2, f2, e2);
  null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
}, enqueueReplaceState: function(a2, b2, c2) {
  a2 = a2._reactInternals;
  var d2 = R$1(), e2 = yi(a2), f2 = mh(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = nh(a2, f2, e2);
  null !== b2 && (gi(b2, a2, e2, d2), oh(b2, a2, e2));
}, enqueueForceUpdate: function(a2, b2) {
  a2 = a2._reactInternals;
  var c2 = R$1(), d2 = yi(a2), e2 = mh(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = nh(a2, e2, d2);
  null !== b2 && (gi(b2, a2, d2, c2), oh(b2, a2, d2));
} };
function Fi(a2, b2, c2, d2, e2, f2, g2) {
  a2 = a2.stateNode;
  return "function" === typeof a2.shouldComponentUpdate ? a2.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
}
function Gi(a2, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e2 = Zf(b2) ? Xf : H$2.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a2, e2) : Vf);
  b2 = new b2(c2, f2);
  a2.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = Ei;
  a2.stateNode = b2;
  b2._reactInternals = a2;
  d2 && (a2 = a2.stateNode, a2.__reactInternalMemoizedUnmaskedChildContext = e2, a2.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function Hi(a2, b2, c2, d2) {
  a2 = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a2 && Ei.enqueueReplaceState(b2, b2.state, null);
}
function Ii(a2, b2, c2, d2) {
  var e2 = a2.stateNode;
  e2.props = c2;
  e2.state = a2.memoizedState;
  e2.refs = {};
  kh(a2);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = eh(f2) : (f2 = Zf(b2) ? Xf : H$2.current, e2.context = Yf(a2, f2));
  e2.state = a2.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a2, b2, f2, c2), e2.state = a2.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && Ei.enqueueReplaceState(e2, e2.state, null), qh(a2, c2, e2, d2), e2.state = a2.memoizedState);
  "function" === typeof e2.componentDidMount && (a2.flags |= 4194308);
}
function Ji(a2, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a2, source: b2, stack: e2, digest: null };
}
function Ki(a2, b2, c2) {
  return { value: a2, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Li(a2, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a2, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Oi || (Oi = true, Pi = d2);
    Li(a2, b2);
  };
  return c2;
}
function Qi(a2, b2, c2) {
  c2 = mh(-1, c2);
  c2.tag = 3;
  var d2 = a2.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Li(a2, b2);
    };
  }
  var f2 = a2.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Li(a2, b2);
    "function" !== typeof d2 && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Si(a2, b2, c2) {
  var d2 = a2.pingCache;
  if (null === d2) {
    d2 = a2.pingCache = new Mi();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a2 = Ti.bind(null, a2, b2, c2), b2.then(a2, a2));
}
function Ui(a2) {
  do {
    var b2;
    if (b2 = 13 === a2.tag) b2 = a2.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2) return a2;
    a2 = a2.return;
  } while (null !== a2);
  return null;
}
function Vi(a2, b2, c2, d2, e2) {
  if (0 === (a2.mode & 1)) return a2 === b2 ? a2.flags |= 65536 : (a2.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = mh(-1, 1), b2.tag = 2, nh(c2, b2, 1))), c2.lanes |= 1), a2;
  a2.flags |= 65536;
  a2.lanes = e2;
  return a2;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a2, b2, c2, d2) {
  b2.child = null === a2 ? Vg(b2, null, c2, d2) : Ug(b2, a2.child, c2, d2);
}
function Yi(a2, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  ch(b2, e2);
  d2 = Nh(a2, b2, c2, d2, f2, e2);
  c2 = Sh();
  if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
  I$2 && c2 && vg(b2);
  b2.flags |= 1;
  Xi(a2, b2, d2, e2);
  return b2.child;
}
function $i(a2, b2, c2, d2, e2) {
  if (null === a2) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps) return b2.tag = 15, b2.type = f2, bj(a2, b2, f2, d2, e2);
    a2 = Rg(c2.type, null, d2, b2, b2.mode, e2);
    a2.ref = b2.ref;
    a2.return = b2;
    return b2.child = a2;
  }
  f2 = a2.child;
  if (0 === (a2.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie;
    if (c2(g2, d2) && a2.ref === b2.ref) return Zi(a2, b2, e2);
  }
  b2.flags |= 1;
  a2 = Pg(f2, d2);
  a2.ref = b2.ref;
  a2.return = b2;
  return b2.child = a2;
}
function bj(a2, b2, c2, d2, e2) {
  if (null !== a2) {
    var f2 = a2.memoizedProps;
    if (Ie(f2, d2) && a2.ref === b2.ref) if (dh = false, b2.pendingProps = d2 = f2, 0 !== (a2.lanes & e2)) 0 !== (a2.flags & 131072) && (dh = true);
    else return b2.lanes = a2.lanes, Zi(a2, b2, e2);
  }
  return cj(a2, b2, c2, d2, e2);
}
function dj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a2 ? a2.memoizedState : null;
  if ("hidden" === d2.mode) if (0 === (b2.mode & 1)) b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G$2(ej, fj), fj |= c2;
  else {
    if (0 === (c2 & 1073741824)) return a2 = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a2, cachePool: null, transitions: null }, b2.updateQueue = null, G$2(ej, fj), fj |= a2, null;
    b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d2 = null !== f2 ? f2.baseLanes : c2;
    G$2(ej, fj);
    fj |= d2;
  }
  else null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G$2(ej, fj), fj |= d2;
  Xi(a2, b2, e2, c2);
  return b2.child;
}
function gj(a2, b2) {
  var c2 = b2.ref;
  if (null === a2 && null !== c2 || null !== a2 && a2.ref !== c2) b2.flags |= 512, b2.flags |= 2097152;
}
function cj(a2, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H$2.current;
  f2 = Yf(b2, f2);
  ch(b2, e2);
  c2 = Nh(a2, b2, c2, d2, f2, e2);
  d2 = Sh();
  if (null !== a2 && !dh) return b2.updateQueue = a2.updateQueue, b2.flags &= -2053, a2.lanes &= ~e2, Zi(a2, b2, e2);
  I$2 && d2 && vg(b2);
  b2.flags |= 1;
  Xi(a2, b2, c2, e2);
  return b2.child;
}
function hj(a2, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else f2 = false;
  ch(b2, e2);
  if (null === b2.stateNode) ij(a2, b2), Gi(b2, c2, d2), Ii(b2, c2, d2, e2), d2 = true;
  else if (null === a2) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c2) ? Xf : H$2.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && Hi(b2, g2, d2, l2);
    jh = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = jh || Fi(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    lh(a2, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Ci(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c2) ? Xf : H$2.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && Hi(b2, g2, d2, k2);
    jh = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    qh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = jh || Fi(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a2.memoizedProps && r2 === a2.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return jj(a2, b2, c2, d2, f2, e2);
}
function jj(a2, b2, c2, d2, e2, f2) {
  gj(a2, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2) return e2 && dg(b2, c2, false), Zi(a2, b2, f2);
  d2 = b2.stateNode;
  Wi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a2 && g2 ? (b2.child = Ug(b2, a2.child, null, f2), b2.child = Ug(b2, null, h2, f2)) : Xi(a2, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function kj(a2) {
  var b2 = a2.stateNode;
  b2.pendingContext ? ag(a2, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a2, b2.context, false);
  yh(a2, b2.containerInfo);
}
function lj(a2, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Xi(a2, b2, c2, d2);
  return b2.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a2) {
  return { baseLanes: a2, cachePool: null, transitions: null };
}
function oj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = L$2.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a2 && null === a2.memoizedState ? false : 0 !== (e2 & 2));
  if (h2) f2 = true, b2.flags &= -129;
  else if (null === a2 || null !== a2.memoizedState) e2 |= 1;
  G$2(L$2, e2 & 1);
  if (null === a2) {
    Eg(b2);
    a2 = b2.memoizedState;
    if (null !== a2 && (a2 = a2.dehydrated, null !== a2)) return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a2.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a2 = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = pj(g2, d2, 0, null), a2 = Tg(a2, d2, c2, null), f2.return = b2, a2.return = b2, f2.sibling = a2, b2.child = f2, b2.child.memoizedState = nj(c2), b2.memoizedState = mj, a2) : qj(b2, g2);
  }
  e2 = a2.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2)) return rj(a2, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a2.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = Pg(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = Pg(h2, f2) : (f2 = Tg(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a2.child.memoizedState;
    g2 = null === g2 ? nj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a2.childLanes & ~c2;
    b2.memoizedState = mj;
    return d2;
  }
  f2 = a2.child;
  a2 = f2.sibling;
  d2 = Pg(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a2 && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a2], b2.flags |= 16) : c2.push(a2));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function qj(a2, b2) {
  b2 = pj({ mode: "visible", children: b2 }, a2.mode, 0, null);
  b2.return = a2;
  return a2.child = b2;
}
function sj(a2, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Ug(b2, a2.child, null, c2);
  a2 = qj(b2, b2.pendingProps.children);
  a2.flags |= 2;
  b2.memoizedState = null;
  return a2;
}
function rj(a2, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256) return b2.flags &= -257, d2 = Ki(Error(p$4(422))), sj(a2, b2, g2, d2);
    if (null !== b2.memoizedState) return b2.child = a2.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = pj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Tg(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Ug(b2, a2.child, null, g2);
    b2.child.memoizedState = nj(g2);
    b2.memoizedState = mj;
    return f2;
  }
  if (0 === (b2.mode & 1)) return sj(a2, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2) var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$4(419));
    d2 = Ki(f2, d2, void 0);
    return sj(a2, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a2.childLanes);
  if (dh || h2) {
    d2 = Q$2;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, ih(a2, e2), gi(d2, a2, e2, -1));
    }
    tj();
    d2 = Ki(Error(p$4(421)));
    return sj(a2, b2, g2, d2);
  }
  if ("$?" === e2.data) return b2.flags |= 128, b2.child = a2.child, b2 = uj.bind(null, a2), e2._reactRetry = b2, null;
  a2 = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I$2 = true;
  zg = null;
  null !== a2 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a2.id, sg = a2.overflow, qg = b2);
  b2 = qj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function vj(a2, b2, c2) {
  a2.lanes |= b2;
  var d2 = a2.alternate;
  null !== d2 && (d2.lanes |= b2);
  bh(a2.return, b2, c2);
}
function wj(a2, b2, c2, d2, e2) {
  var f2 = a2.memoizedState;
  null === f2 ? a2.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function xj(a2, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Xi(a2, b2, d2.children, c2);
  d2 = L$2.current;
  if (0 !== (d2 & 2)) d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a2 && 0 !== (a2.flags & 128)) a: for (a2 = b2.child; null !== a2; ) {
      if (13 === a2.tag) null !== a2.memoizedState && vj(a2, c2, b2);
      else if (19 === a2.tag) vj(a2, c2, b2);
      else if (null !== a2.child) {
        a2.child.return = a2;
        a2 = a2.child;
        continue;
      }
      if (a2 === b2) break a;
      for (; null === a2.sibling; ) {
        if (null === a2.return || a2.return === b2) break a;
        a2 = a2.return;
      }
      a2.sibling.return = a2.return;
      a2 = a2.sibling;
    }
    d2 &= 1;
  }
  G$2(L$2, d2);
  if (0 === (b2.mode & 1)) b2.memoizedState = null;
  else switch (e2) {
    case "forwards":
      c2 = b2.child;
      for (e2 = null; null !== c2; ) a2 = c2.alternate, null !== a2 && null === Ch(a2) && (e2 = c2), c2 = c2.sibling;
      c2 = e2;
      null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
      wj(b2, false, e2, c2, f2);
      break;
    case "backwards":
      c2 = null;
      e2 = b2.child;
      for (b2.child = null; null !== e2; ) {
        a2 = e2.alternate;
        if (null !== a2 && null === Ch(a2)) {
          b2.child = e2;
          break;
        }
        a2 = e2.sibling;
        e2.sibling = c2;
        c2 = e2;
        e2 = a2;
      }
      wj(b2, true, c2, null, f2);
      break;
    case "together":
      wj(b2, false, null, null, void 0);
      break;
    default:
      b2.memoizedState = null;
  }
  return b2.child;
}
function ij(a2, b2) {
  0 === (b2.mode & 1) && null !== a2 && (a2.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function Zi(a2, b2, c2) {
  null !== a2 && (b2.dependencies = a2.dependencies);
  rh |= b2.lanes;
  if (0 === (c2 & b2.childLanes)) return null;
  if (null !== a2 && b2.child !== a2.child) throw Error(p$4(153));
  if (null !== b2.child) {
    a2 = b2.child;
    c2 = Pg(a2, a2.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a2.sibling; ) a2 = a2.sibling, c2 = c2.sibling = Pg(a2, a2.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function yj(a2, b2, c2) {
  switch (b2.tag) {
    case 3:
      kj(b2);
      Ig();
      break;
    case 5:
      Ah(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      yh(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G$2(Wg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated) return G$2(L$2, L$2.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes)) return oj(a2, b2, c2);
        G$2(L$2, L$2.current & 1);
        a2 = Zi(a2, b2, c2);
        return null !== a2 ? a2.sibling : null;
      }
      G$2(L$2, L$2.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a2.flags & 128)) {
        if (d2) return xj(a2, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G$2(L$2, L$2.current);
      if (d2) break;
      else return null;
    case 22:
    case 23:
      return b2.lanes = 0, dj(a2, b2, c2);
  }
  return Zi(a2, b2, c2);
}
var zj, Aj, Bj, Cj;
zj = function(a2, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag) a2.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2) break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2) return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Aj = function() {
};
Bj = function(a2, b2, c2, d2) {
  var e2 = a2.memoizedProps;
  if (e2 !== d2) {
    a2 = b2.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a2, e2);
        d2 = Ya(a2, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$1({}, e2, { value: void 0 });
        d2 = A$1({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a2, e2);
        d2 = gb(a2, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a2.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2) if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2]) if ("style" === l2) {
      var h2 = e2[l2];
      for (g2 in h2) h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2)) if ("style" === l2) if (h2) {
        for (g2 in h2) !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
        for (g2 in k2) k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
      } else c2 || (f2 || (f2 = []), f2.push(
        l2,
        c2
      )), c2 = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D$2("scroll", a2), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2) b2.flags |= 4;
  }
};
Cj = function(a2, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Dj(a2, b2) {
  if (!I$2) switch (a2.tailMode) {
    case "hidden":
      b2 = a2.tail;
      for (var c2 = null; null !== b2; ) null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
      null === c2 ? a2.tail = null : c2.sibling = null;
      break;
    case "collapsed":
      c2 = a2.tail;
      for (var d2 = null; null !== c2; ) null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
      null === d2 ? b2 || null === a2.tail ? a2.tail = null : a2.tail.sibling = null : d2.sibling = null;
  }
}
function S$2(a2) {
  var b2 = null !== a2.alternate && a2.alternate.child === a2.child, c2 = 0, d2 = 0;
  if (b2) for (var e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a2, e2 = e2.sibling;
  else for (e2 = a2.child; null !== e2; ) c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a2, e2 = e2.sibling;
  a2.subtreeFlags |= d2;
  a2.childLanes = c2;
  return b2;
}
function Ej(a2, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S$2(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S$2(b2), null;
    case 3:
      d2 = b2.stateNode;
      zh();
      E$2(Wf);
      E$2(H$2);
      Eh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a2 || null === a2.child) Gg(b2) ? b2.flags |= 4 : null === a2 || a2.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a2, b2);
      S$2(b2);
      return null;
    case 5:
      Bh(b2);
      var e2 = xh(wh.current);
      c2 = b2.type;
      if (null !== a2 && null != b2.stateNode) Bj(a2, b2, c2, d2, e2), a2.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode) throw Error(p$4(166));
          S$2(b2);
          return null;
        }
        a2 = xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a2 = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D$2("cancel", d2);
              D$2("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D$2("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++) D$2(lf[e2], d2);
              break;
            case "source":
              D$2("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D$2(
                "error",
                d2
              );
              D$2("load", d2);
              break;
            case "details":
              D$2("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D$2("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D$2("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D$2("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2) if (f2.hasOwnProperty(g2)) {
            var h2 = f2[g2];
            "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a2), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
              d2.textContent,
              h2,
              a2
            ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D$2("scroll", d2);
          }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a2 && (a2 = kb(c2));
          "http://www.w3.org/1999/xhtml" === a2 ? "script" === c2 ? (a2 = g2.createElement("div"), a2.innerHTML = "<script><\/script>", a2 = a2.removeChild(a2.firstChild)) : "string" === typeof d2.is ? a2 = g2.createElement(c2, { is: d2.is }) : (a2 = g2.createElement(c2), "select" === c2 && (g2 = a2, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a2 = g2.createElementNS(a2, c2);
          a2[Of] = b2;
          a2[Pf] = d2;
          zj(a2, b2, false, false);
          b2.stateNode = a2;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D$2("cancel", a2);
                D$2("close", a2);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D$2("load", a2);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++) D$2(lf[e2], a2);
                e2 = d2;
                break;
              case "source":
                D$2("error", a2);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D$2(
                  "error",
                  a2
                );
                D$2("load", a2);
                e2 = d2;
                break;
              case "details":
                D$2("toggle", a2);
                e2 = d2;
                break;
              case "input":
                Za(a2, d2);
                e2 = Ya(a2, d2);
                D$2("invalid", a2);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a2._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$1({}, d2, { value: void 0 });
                D$2("invalid", a2);
                break;
              case "textarea":
                hb(a2, d2);
                e2 = gb(a2, d2);
                D$2("invalid", a2);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2) if (h2.hasOwnProperty(f2)) {
              var k2 = h2[f2];
              "style" === f2 ? sb(a2, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a2, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a2, k2) : "number" === typeof k2 && ob(a2, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D$2("scroll", a2) : null != k2 && ta(a2, f2, k2, g2));
            }
            switch (c2) {
              case "input":
                Va(a2);
                db(a2, d2, false);
                break;
              case "textarea":
                Va(a2);
                jb(a2);
                break;
              case "option":
                null != d2.value && a2.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a2.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a2, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a2,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a2.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S$2(b2);
      return null;
    case 6:
      if (a2 && null != b2.stateNode) Cj(a2, b2, a2.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode) throw Error(p$4(166));
        c2 = xh(wh.current);
        xh(uh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a2 = xg, null !== a2) switch (a2.tag) {
              case 3:
                Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
                break;
              case 5:
                true !== a2.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a2.mode & 1));
            }
          }
          f2 && (b2.flags |= 4);
        } else d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S$2(b2);
      return null;
    case 13:
      E$2(L$2);
      d2 = b2.memoizedState;
      if (null === a2 || null !== a2.memoizedState && null !== a2.memoizedState.dehydrated) {
        if (I$2 && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128)) Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a2) {
            if (!f2) throw Error(p$4(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p$4(317));
            f2[Of] = b2;
          } else Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S$2(b2);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128)) return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a2 && null !== a2.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a2 || 0 !== (L$2.current & 1) ? 0 === T$2 && (T$2 = 3) : tj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S$2(b2);
      return null;
    case 4:
      return zh(), Aj(a2, b2), null === a2 && sf(b2.stateNode.containerInfo), S$2(b2), null;
    case 10:
      return ah(b2.type._context), S$2(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S$2(b2), null;
    case 19:
      E$2(L$2);
      f2 = b2.memoizedState;
      if (null === f2) return S$2(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2) if (d2) Dj(f2, false);
      else {
        if (0 !== T$2 || null !== a2 && 0 !== (a2.flags & 128)) for (a2 = b2.child; null !== a2; ) {
          g2 = Ch(a2);
          if (null !== g2) {
            b2.flags |= 128;
            Dj(f2, false);
            d2 = g2.updateQueue;
            null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
            b2.subtreeFlags = 0;
            d2 = c2;
            for (c2 = b2.child; null !== c2; ) f2 = c2, a2 = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a2, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a2 = g2.dependencies, f2.dependencies = null === a2 ? null : { lanes: a2.lanes, firstContext: a2.firstContext }), c2 = c2.sibling;
            G$2(L$2, L$2.current & 1 | 2);
            return b2.child;
          }
          a2 = a2.sibling;
        }
        null !== f2.tail && B$2() > Gj && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
      }
      else {
        if (!d2) if (a2 = Ch(g2), null !== a2) {
          if (b2.flags |= 128, d2 = true, c2 = a2.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I$2) return S$2(b2), null;
        } else 2 * B$2() - f2.renderingStartTime > Gj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Dj(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail) return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B$2(), b2.sibling = null, c2 = L$2.current, G$2(L$2, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S$2(b2);
      return null;
    case 22:
    case 23:
      return Hj(), d2 = null !== b2.memoizedState, null !== a2 && null !== a2.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (fj & 1073741824) && (S$2(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S$2(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$4(156, b2.tag));
}
function Ij(a2, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a2 = b2.flags, a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 3:
      return zh(), E$2(Wf), E$2(H$2), Eh(), a2 = b2.flags, 0 !== (a2 & 65536) && 0 === (a2 & 128) ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 5:
      return Bh(b2), null;
    case 13:
      E$2(L$2);
      a2 = b2.memoizedState;
      if (null !== a2 && null !== a2.dehydrated) {
        if (null === b2.alternate) throw Error(p$4(340));
        Ig();
      }
      a2 = b2.flags;
      return a2 & 65536 ? (b2.flags = a2 & -65537 | 128, b2) : null;
    case 19:
      return E$2(L$2), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b2.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U$2 = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V$2 = null;
function Lj(a2, b2) {
  var c2 = a2.ref;
  if (null !== c2) if ("function" === typeof c2) try {
    c2(null);
  } catch (d2) {
    W$2(a2, b2, d2);
  }
  else c2.current = null;
}
function Mj(a2, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W$2(a2, b2, d2);
  }
}
var Nj = false;
function Oj(a2, b2) {
  Cf = dd;
  a2 = Me$1();
  if (Ne$1(a2)) {
    if ("selectionStart" in a2) var c2 = { start: a2.selectionStart, end: a2.selectionEnd };
    else a: {
      c2 = (c2 = a2.ownerDocument) && c2.defaultView || window;
      var d2 = c2.getSelection && c2.getSelection();
      if (d2 && 0 !== d2.rangeCount) {
        c2 = d2.anchorNode;
        var e2 = d2.anchorOffset, f2 = d2.focusNode;
        d2 = d2.focusOffset;
        try {
          c2.nodeType, f2.nodeType;
        } catch (F2) {
          c2 = null;
          break a;
        }
        var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a2, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
            q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
            3 === q2.nodeType && (g2 += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a2) break b;
            r2 === c2 && ++l2 === e2 && (h2 = g2);
            r2 === f2 && ++m2 === d2 && (k2 = g2);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
      } else c2 = null;
    }
    c2 = c2 || { start: 0, end: 0 };
  } else c2 = null;
  Df = { focusedElem: a2, selectionRange: c2 };
  dd = false;
  for (V$2 = b2; null !== V$2; ) if (b2 = V$2, a2 = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a2) a2.return = b2, V$2 = a2;
  else for (; null !== V$2; ) {
    b2 = V$2;
    try {
      var n2 = b2.alternate;
      if (0 !== (b2.flags & 1024)) switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Ci(b2.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b2.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p$4(163));
      }
    } catch (F2) {
      W$2(b2, b2.return, F2);
    }
    a2 = b2.sibling;
    if (null !== a2) {
      a2.return = b2.return;
      V$2 = a2;
      break;
    }
    V$2 = b2.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a2, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a2) === a2) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Mj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Qj(a2, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a2) === a2) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Rj(a2) {
  var b2 = a2.ref;
  if (null !== b2) {
    var c2 = a2.stateNode;
    switch (a2.tag) {
      case 5:
        a2 = c2;
        break;
      default:
        a2 = c2;
    }
    "function" === typeof b2 ? b2(a2) : b2.current = a2;
  }
}
function Sj(a2) {
  var b2 = a2.alternate;
  null !== b2 && (a2.alternate = null, Sj(b2));
  a2.child = null;
  a2.deletions = null;
  a2.sibling = null;
  5 === a2.tag && (b2 = a2.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a2.stateNode = null;
  a2.return = null;
  a2.dependencies = null;
  a2.memoizedProps = null;
  a2.memoizedState = null;
  a2.pendingProps = null;
  a2.stateNode = null;
  a2.updateQueue = null;
}
function Tj(a2) {
  return 5 === a2.tag || 3 === a2.tag || 4 === a2.tag;
}
function Uj(a2) {
  a: for (; ; ) {
    for (; null === a2.sibling; ) {
      if (null === a2.return || Tj(a2.return)) return null;
      a2 = a2.return;
    }
    a2.sibling.return = a2.return;
    for (a2 = a2.sibling; 5 !== a2.tag && 6 !== a2.tag && 18 !== a2.tag; ) {
      if (a2.flags & 2) continue a;
      if (null === a2.child || 4 === a2.tag) continue a;
      else a2.child.return = a2, a2 = a2.child;
    }
    if (!(a2.flags & 2)) return a2.stateNode;
  }
}
function Vj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a2, b2) : c2.insertBefore(a2, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a2, c2)) : (b2 = c2, b2.appendChild(a2)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Vj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Vj(a2, b2, c2), a2 = a2.sibling;
}
function Wj(a2, b2, c2) {
  var d2 = a2.tag;
  if (5 === d2 || 6 === d2) a2 = a2.stateNode, b2 ? c2.insertBefore(a2, b2) : c2.appendChild(a2);
  else if (4 !== d2 && (a2 = a2.child, null !== a2)) for (Wj(a2, b2, c2), a2 = a2.sibling; null !== a2; ) Wj(a2, b2, c2), a2 = a2.sibling;
}
var X$2 = null, Xj = false;
function Yj(a2, b2, c2) {
  for (c2 = c2.child; null !== c2; ) Zj(a2, b2, c2), c2 = c2.sibling;
}
function Zj(a2, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c2);
  } catch (h2) {
  }
  switch (c2.tag) {
    case 5:
      U$2 || Lj(c2, b2);
    case 6:
      var d2 = X$2, e2 = Xj;
      X$2 = null;
      Yj(a2, b2, c2);
      X$2 = d2;
      Xj = e2;
      null !== X$2 && (Xj ? (a2 = X$2, c2 = c2.stateNode, 8 === a2.nodeType ? a2.parentNode.removeChild(c2) : a2.removeChild(c2)) : X$2.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X$2 && (Xj ? (a2 = X$2, c2 = c2.stateNode, 8 === a2.nodeType ? Kf(a2.parentNode, c2) : 1 === a2.nodeType && Kf(a2, c2), bd(a2)) : Kf(X$2, c2.stateNode));
      break;
    case 4:
      d2 = X$2;
      e2 = Xj;
      X$2 = c2.stateNode.containerInfo;
      Xj = true;
      Yj(a2, b2, c2);
      X$2 = d2;
      Xj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U$2 && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Mj(c2, b2, g2) : 0 !== (f2 & 4) && Mj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Yj(a2, b2, c2);
      break;
    case 1:
      if (!U$2 && (Lj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount)) try {
        d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
      } catch (h2) {
        W$2(c2, b2, h2);
      }
      Yj(a2, b2, c2);
      break;
    case 21:
      Yj(a2, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U$2 = (d2 = U$2) || null !== c2.memoizedState, Yj(a2, b2, c2), U$2 = d2) : Yj(a2, b2, c2);
      break;
    default:
      Yj(a2, b2, c2);
  }
}
function ak(a2) {
  var b2 = a2.updateQueue;
  if (null !== b2) {
    a2.updateQueue = null;
    var c2 = a2.stateNode;
    null === c2 && (c2 = a2.stateNode = new Kj());
    b2.forEach(function(b3) {
      var d2 = bk.bind(null, a2, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function ck(a2, b2) {
  var c2 = b2.deletions;
  if (null !== c2) for (var d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    try {
      var f2 = a2, g2 = b2, h2 = g2;
      a: for (; null !== h2; ) {
        switch (h2.tag) {
          case 5:
            X$2 = h2.stateNode;
            Xj = false;
            break a;
          case 3:
            X$2 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X$2 = h2.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h2 = h2.return;
      }
      if (null === X$2) throw Error(p$4(160));
      Zj(f2, g2, e2);
      X$2 = null;
      Xj = false;
      var k2 = e2.alternate;
      null !== k2 && (k2.return = null);
      e2.return = null;
    } catch (l2) {
      W$2(e2, b2, l2);
    }
  }
  if (b2.subtreeFlags & 12854) for (b2 = b2.child; null !== b2; ) dk(b2, a2), b2 = b2.sibling;
}
function dk(a2, b2) {
  var c2 = a2.alternate, d2 = a2.flags;
  switch (a2.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4) {
        try {
          Pj(3, a2, a2.return), Qj(3, a2);
        } catch (t2) {
          W$2(a2, a2.return, t2);
        }
        try {
          Pj(5, a2, a2.return);
        } catch (t2) {
          W$2(a2, a2.return, t2);
        }
      }
      break;
    case 1:
      ck(b2, a2);
      ek(a2);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      break;
    case 5:
      ck(b2, a2);
      ek(a2);
      d2 & 512 && null !== c2 && Lj(c2, c2.return);
      if (a2.flags & 32) {
        var e2 = a2.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W$2(a2, a2.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a2.stateNode, null != e2)) {
        var f2 = a2.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a2.type, k2 = a2.updateQueue;
        a2.updateQueue = null;
        if (null !== k2) try {
          "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
          vb(h2, g2);
          var l2 = vb(h2, f2);
          for (g2 = 0; g2 < k2.length; g2 += 2) {
            var m2 = k2[g2], q2 = k2[g2 + 1];
            "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
          }
          switch (h2) {
            case "input":
              bb(e2, f2);
              break;
            case "textarea":
              ib(e2, f2);
              break;
            case "select":
              var r2 = e2._wrapperState.wasMultiple;
              e2._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e2,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e2[Pf] = f2;
        } catch (t2) {
          W$2(a2, a2.return, t2);
        }
      }
      break;
    case 6:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4) {
        if (null === a2.stateNode) throw Error(p$4(162));
        e2 = a2.stateNode;
        f2 = a2.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W$2(a2, a2.return, t2);
        }
      }
      break;
    case 3:
      ck(b2, a2);
      ek(a2);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated) try {
        bd(b2.containerInfo);
      } catch (t2) {
        W$2(a2, a2.return, t2);
      }
      break;
    case 4:
      ck(b2, a2);
      ek(a2);
      break;
    case 13:
      ck(b2, a2);
      ek(a2);
      e2 = a2.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (fk = B$2()));
      d2 & 4 && ak(a2);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a2.mode & 1 ? (U$2 = (l2 = U$2) || m2, ck(b2, a2), U$2 = l2) : ck(b2, a2);
      ek(a2);
      if (d2 & 8192) {
        l2 = null !== a2.memoizedState;
        if ((a2.stateNode.isHidden = l2) && !m2 && 0 !== (a2.mode & 1)) for (V$2 = a2, m2 = a2.child; null !== m2; ) {
          for (q2 = V$2 = m2; null !== V$2; ) {
            r2 = V$2;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d2 = r2;
                  c2 = r2.return;
                  try {
                    b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W$2(d2, c2, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V$2 = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a2; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
              } catch (t2) {
                W$2(a2, a2.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W$2(a2, a2.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a2) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a2) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a2) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b2, a2);
      ek(a2);
      d2 & 4 && ak(a2);
      break;
    case 21:
      break;
    default:
      ck(
        b2,
        a2
      ), ek(a2);
  }
}
function ek(a2) {
  var b2 = a2.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a2.return; null !== c2; ) {
          if (Tj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$4(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Uj(a2);
          Wj(a2, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Uj(a2);
          Vj(a2, h2, g2);
          break;
        default:
          throw Error(p$4(161));
      }
    } catch (k2) {
      W$2(a2, a2.return, k2);
    }
    a2.flags &= -3;
  }
  b2 & 4096 && (a2.flags &= -4097);
}
function hk(a2, b2, c2) {
  V$2 = a2;
  ik(a2);
}
function ik(a2, b2, c2) {
  for (var d2 = 0 !== (a2.mode & 1); null !== V$2; ) {
    var e2 = V$2, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Jj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U$2;
        h2 = Jj;
        var l2 = U$2;
        Jj = g2;
        if ((U$2 = k2) && !l2) for (V$2 = e2; null !== V$2; ) g2 = V$2, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? jk(e2) : null !== k2 ? (k2.return = g2, V$2 = k2) : jk(e2);
        for (; null !== f2; ) V$2 = f2, ik(f2), f2 = f2.sibling;
        V$2 = e2;
        Jj = h2;
        U$2 = l2;
      }
      kk(a2);
    } else 0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V$2 = f2) : kk(a2);
  }
}
function kk(a2) {
  for (; null !== V$2; ) {
    var b2 = V$2;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772)) switch (b2.tag) {
          case 0:
          case 11:
          case 15:
            U$2 || Qj(5, b2);
            break;
          case 1:
            var d2 = b2.stateNode;
            if (b2.flags & 4 && !U$2) if (null === c2) d2.componentDidMount();
            else {
              var e2 = b2.elementType === b2.type ? c2.memoizedProps : Ci(b2.type, c2.memoizedProps);
              d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b2.updateQueue;
            null !== f2 && sh(b2, f2, d2);
            break;
          case 3:
            var g2 = b2.updateQueue;
            if (null !== g2) {
              c2 = null;
              if (null !== b2.child) switch (b2.child.tag) {
                case 5:
                  c2 = b2.child.stateNode;
                  break;
                case 1:
                  c2 = b2.child.stateNode;
              }
              sh(b2, g2, c2);
            }
            break;
          case 5:
            var h2 = b2.stateNode;
            if (null === c2 && b2.flags & 4) {
              c2 = h2;
              var k2 = b2.memoizedProps;
              switch (b2.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c2.focus();
                  break;
                case "img":
                  k2.src && (c2.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b2.memoizedState) {
              var l2 = b2.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p$4(163));
        }
        U$2 || b2.flags & 512 && Rj(b2);
      } catch (r2) {
        W$2(b2, b2.return, r2);
      }
    }
    if (b2 === a2) {
      V$2 = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$2 = c2;
      break;
    }
    V$2 = b2.return;
  }
}
function gk(a2) {
  for (; null !== V$2; ) {
    var b2 = V$2;
    if (b2 === a2) {
      V$2 = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V$2 = c2;
      break;
    }
    V$2 = b2.return;
  }
}
function jk(a2) {
  for (; null !== V$2; ) {
    var b2 = V$2;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Qj(4, b2);
          } catch (k2) {
            W$2(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W$2(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$2(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Rj(b2);
          } catch (k2) {
            W$2(b2, g2, k2);
          }
      }
    } catch (k2) {
      W$2(b2, b2.return, k2);
    }
    if (b2 === a2) {
      V$2 = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V$2 = h2;
      break;
    }
    V$2 = b2.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K$2 = 0, Q$2 = null, Y$1 = null, Z$2 = 0, fj = 0, ej = Uf(0), T$2 = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R$1() {
  return 0 !== (K$2 & 6) ? B$2() : -1 !== Ak ? Ak : Ak = B$2();
}
function yi(a2) {
  if (0 === (a2.mode & 1)) return 1;
  if (0 !== (K$2 & 2) && 0 !== Z$2) return Z$2 & -Z$2;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a2 = C$2;
  if (0 !== a2) return a2;
  a2 = window.event;
  a2 = void 0 === a2 ? 16 : jd(a2.type);
  return a2;
}
function gi(a2, b2, c2, d2) {
  if (50 < yk) throw yk = 0, zk = null, Error(p$4(185));
  Ac(a2, c2, d2);
  if (0 === (K$2 & 2) || a2 !== Q$2) a2 === Q$2 && (0 === (K$2 & 2) && (qk |= c2), 4 === T$2 && Ck(a2, Z$2)), Dk(a2, d2), 1 === c2 && 0 === K$2 && 0 === (b2.mode & 1) && (Gj = B$2() + 500, fg && jg());
}
function Dk(a2, b2) {
  var c2 = a2.callbackNode;
  wc(a2, b2);
  var d2 = uc(a2, a2 === Q$2 ? Z$2 : 0);
  if (0 === d2) null !== c2 && bc(c2), a2.callbackNode = null, a2.callbackPriority = 0;
  else if (b2 = d2 & -d2, a2.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2) 0 === a2.tag ? ig(Ek.bind(null, a2)) : hg(Ek.bind(null, a2)), Jf(function() {
      0 === (K$2 & 6) && jg();
    }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Fk(c2, Gk.bind(null, a2));
    }
    a2.callbackPriority = b2;
    a2.callbackNode = c2;
  }
}
function Gk(a2, b2) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K$2 & 6)) throw Error(p$4(327));
  var c2 = a2.callbackNode;
  if (Hk() && a2.callbackNode !== c2) return null;
  var d2 = uc(a2, a2 === Q$2 ? Z$2 : 0);
  if (0 === d2) return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a2.expiredLanes) || b2) b2 = Ik(a2, d2);
  else {
    b2 = d2;
    var e2 = K$2;
    K$2 |= 2;
    var f2 = Jk();
    if (Q$2 !== a2 || Z$2 !== b2) uk = null, Gj = B$2() + 500, Kk(a2, b2);
    do
      try {
        Lk();
        break;
      } catch (h2) {
        Mk(a2, h2);
      }
    while (1);
    $g();
    mk.current = f2;
    K$2 = e2;
    null !== Y$1 ? b2 = 0 : (Q$2 = null, Z$2 = 0, b2 = T$2);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a2), 0 !== e2 && (d2 = e2, b2 = Nk(a2, e2)));
    if (1 === b2) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B$2()), c2;
    if (6 === b2) Ck(a2, d2);
    else {
      e2 = a2.current.alternate;
      if (0 === (d2 & 30) && !Ok(e2) && (b2 = Ik(a2, d2), 2 === b2 && (f2 = xc(a2), 0 !== f2 && (d2 = f2, b2 = Nk(a2, f2))), 1 === b2)) throw c2 = pk, Kk(a2, 0), Ck(a2, d2), Dk(a2, B$2()), c2;
      a2.finishedWork = e2;
      a2.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$4(345));
        case 2:
          Pk(a2, tk, uk);
          break;
        case 3:
          Ck(a2, d2);
          if ((d2 & 130023424) === d2 && (b2 = fk + 500 - B$2(), 10 < b2)) {
            if (0 !== uc(a2, 0)) break;
            e2 = a2.suspendedLanes;
            if ((e2 & d2) !== d2) {
              R$1();
              a2.pingedLanes |= a2.suspendedLanes & e2;
              break;
            }
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), b2);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 4:
          Ck(a2, d2);
          if ((d2 & 4194240) === d2) break;
          b2 = a2.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B$2() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * lk(d2 / 1960)) - d2;
          if (10 < d2) {
            a2.timeoutHandle = Ff(Pk.bind(null, a2, tk, uk), d2);
            break;
          }
          Pk(a2, tk, uk);
          break;
        case 5:
          Pk(a2, tk, uk);
          break;
        default:
          throw Error(p$4(329));
      }
    }
  }
  Dk(a2, B$2());
  return a2.callbackNode === c2 ? Gk.bind(null, a2) : null;
}
function Nk(a2, b2) {
  var c2 = sk;
  a2.current.memoizedState.isDehydrated && (Kk(a2, b2).flags |= 256);
  a2 = Ik(a2, b2);
  2 !== a2 && (b2 = tk, tk = c2, null !== b2 && Fj(b2));
  return a2;
}
function Fj(a2) {
  null === tk ? tk = a2 : tk.push.apply(tk, a2);
}
function Ok(a2) {
  for (var b2 = a2; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2)) for (var d2 = 0; d2 < c2.length; d2++) {
        var e2 = c2[d2], f2 = e2.getSnapshot;
        e2 = e2.value;
        try {
          if (!He$1(f2(), e2)) return false;
        } catch (g2) {
          return false;
        }
      }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2) c2.return = b2, b2 = c2;
    else {
      if (b2 === a2) break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a2) return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Ck(a2, b2) {
  b2 &= ~rk;
  b2 &= ~qk;
  a2.suspendedLanes |= b2;
  a2.pingedLanes &= ~b2;
  for (a2 = a2.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a2[c2] = -1;
    b2 &= ~d2;
  }
}
function Ek(a2) {
  if (0 !== (K$2 & 6)) throw Error(p$4(327));
  Hk();
  var b2 = uc(a2, 0);
  if (0 === (b2 & 1)) return Dk(a2, B$2()), null;
  var c2 = Ik(a2, b2);
  if (0 !== a2.tag && 2 === c2) {
    var d2 = xc(a2);
    0 !== d2 && (b2 = d2, c2 = Nk(a2, d2));
  }
  if (1 === c2) throw c2 = pk, Kk(a2, 0), Ck(a2, b2), Dk(a2, B$2()), c2;
  if (6 === c2) throw Error(p$4(345));
  a2.finishedWork = a2.current.alternate;
  a2.finishedLanes = b2;
  Pk(a2, tk, uk);
  Dk(a2, B$2());
  return null;
}
function Qk(a2, b2) {
  var c2 = K$2;
  K$2 |= 1;
  try {
    return a2(b2);
  } finally {
    K$2 = c2, 0 === K$2 && (Gj = B$2() + 500, fg && jg());
  }
}
function Rk(a2) {
  null !== wk && 0 === wk.tag && 0 === (K$2 & 6) && Hk();
  var b2 = K$2;
  K$2 |= 1;
  var c2 = ok.transition, d2 = C$2;
  try {
    if (ok.transition = null, C$2 = 1, a2) return a2();
  } finally {
    C$2 = d2, ok.transition = c2, K$2 = b2, 0 === (K$2 & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E$2(ej);
}
function Kk(a2, b2) {
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  var c2 = a2.timeoutHandle;
  -1 !== c2 && (a2.timeoutHandle = -1, Gf(c2));
  if (null !== Y$1) for (c2 = Y$1.return; null !== c2; ) {
    var d2 = c2;
    wg(d2);
    switch (d2.tag) {
      case 1:
        d2 = d2.type.childContextTypes;
        null !== d2 && void 0 !== d2 && $f();
        break;
      case 3:
        zh();
        E$2(Wf);
        E$2(H$2);
        Eh();
        break;
      case 5:
        Bh(d2);
        break;
      case 4:
        zh();
        break;
      case 13:
        E$2(L$2);
        break;
      case 19:
        E$2(L$2);
        break;
      case 10:
        ah(d2.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c2 = c2.return;
  }
  Q$2 = a2;
  Y$1 = a2 = Pg(a2.current, null);
  Z$2 = fj = b2;
  T$2 = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b2 = 0; b2 < fh.length; b2++) if (c2 = fh[b2], d2 = c2.interleaved, null !== d2) {
      c2.interleaved = null;
      var e2 = d2.next, f2 = c2.pending;
      if (null !== f2) {
        var g2 = f2.next;
        f2.next = e2;
        d2.next = g2;
      }
      c2.pending = d2;
    }
    fh = null;
  }
  return a2;
}
function Mk(a2, b2) {
  do {
    var c2 = Y$1;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d2 = M$2.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Ih = false;
      }
      Hh = 0;
      O$1 = N$2 = M$2 = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c2 || null === c2.return) {
        T$2 = 1;
        pk = b2;
        Y$1 = null;
        break;
      }
      a: {
        var f2 = a2, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z$2;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Si(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Si(f2, l2, b2);
              tj();
              break a;
            }
            k2 = Error(p$4(426));
          }
        } else if (I$2 && h2.mode & 1) {
          var J2 = Ui(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g2, h2, f2, b2);
            Jg(Ji(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h2);
        4 !== T$2 && (T$2 = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Ni(f2, k2, b2);
              ph(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Qi(f2, h2, b2);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c2);
    } catch (na) {
      b2 = na;
      Y$1 === c2 && null !== c2 && (Y$1 = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a2 = mk.current;
  mk.current = Rh;
  return null === a2 ? Rh : a2;
}
function tj() {
  if (0 === T$2 || 3 === T$2 || 2 === T$2) T$2 = 4;
  null === Q$2 || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q$2, Z$2);
}
function Ik(a2, b2) {
  var c2 = K$2;
  K$2 |= 2;
  var d2 = Jk();
  if (Q$2 !== a2 || Z$2 !== b2) uk = null, Kk(a2, b2);
  do
    try {
      Tk();
      break;
    } catch (e2) {
      Mk(a2, e2);
    }
  while (1);
  $g();
  K$2 = c2;
  mk.current = d2;
  if (null !== Y$1) throw Error(p$4(261));
  Q$2 = null;
  Z$2 = 0;
  return T$2;
}
function Tk() {
  for (; null !== Y$1; ) Uk(Y$1);
}
function Lk() {
  for (; null !== Y$1 && !cc(); ) Uk(Y$1);
}
function Uk(a2) {
  var b2 = Vk(a2.alternate, a2, fj);
  a2.memoizedProps = a2.pendingProps;
  null === b2 ? Sk(a2) : Y$1 = b2;
  nk.current = null;
}
function Sk(a2) {
  var b2 = a2;
  do {
    var c2 = b2.alternate;
    a2 = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Ej(c2, b2, fj), null !== c2) {
        Y$1 = c2;
        return;
      }
    } else {
      c2 = Ij(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y$1 = c2;
        return;
      }
      if (null !== a2) a2.flags |= 32768, a2.subtreeFlags = 0, a2.deletions = null;
      else {
        T$2 = 6;
        Y$1 = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y$1 = b2;
      return;
    }
    Y$1 = b2 = a2;
  } while (null !== b2);
  0 === T$2 && (T$2 = 5);
}
function Pk(a2, b2, c2) {
  var d2 = C$2, e2 = ok.transition;
  try {
    ok.transition = null, C$2 = 1, Wk(a2, b2, c2, d2);
  } finally {
    ok.transition = e2, C$2 = d2;
  }
  return null;
}
function Wk(a2, b2, c2, d2) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K$2 & 6)) throw Error(p$4(327));
  c2 = a2.finishedWork;
  var e2 = a2.finishedLanes;
  if (null === c2) return null;
  a2.finishedWork = null;
  a2.finishedLanes = 0;
  if (c2 === a2.current) throw Error(p$4(177));
  a2.callbackNode = null;
  a2.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a2, f2);
  a2 === Q$2 && (Y$1 = Q$2 = null, Z$2 = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g2 = C$2;
    C$2 = 1;
    var h2 = K$2;
    K$2 |= 4;
    nk.current = null;
    Oj(a2, c2);
    dk(c2, a2);
    Oe$1(Df);
    dd = !!Cf;
    Df = Cf = null;
    a2.current = c2;
    hk(c2);
    dc();
    K$2 = h2;
    C$2 = g2;
    ok.transition = f2;
  } else a2.current = c2;
  vk && (vk = false, wk = a2, xk = e2);
  f2 = a2.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c2.stateNode);
  Dk(a2, B$2());
  if (null !== b2) for (d2 = a2.onRecoverableError, c2 = 0; c2 < b2.length; c2++) e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Oi) throw Oi = false, a2 = Pi, Pi = null, a2;
  0 !== (xk & 1) && 0 !== a2.tag && Hk();
  f2 = a2.pendingLanes;
  0 !== (f2 & 1) ? a2 === zk ? yk++ : (yk = 0, zk = a2) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a2 = Dc(xk), b2 = ok.transition, c2 = C$2;
    try {
      ok.transition = null;
      C$2 = 16 > a2 ? 16 : a2;
      if (null === wk) var d2 = false;
      else {
        a2 = wk;
        wk = null;
        xk = 0;
        if (0 !== (K$2 & 6)) throw Error(p$4(331));
        var e2 = K$2;
        K$2 |= 4;
        for (V$2 = a2.current; null !== V$2; ) {
          var f2 = V$2, g2 = f2.child;
          if (0 !== (V$2.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V$2 = l2; null !== V$2; ) {
                  var m2 = V$2;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V$2 = q2;
                  else for (; null !== V$2; ) {
                    m2 = V$2;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V$2 = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V$2 = r2;
                      break;
                    }
                    V$2 = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V$2 = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2) g2.return = f2, V$2 = g2;
          else b: for (; null !== V$2; ) {
            f2 = V$2;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V$2 = x2;
              break b;
            }
            V$2 = f2.return;
          }
        }
        var w2 = a2.current;
        for (V$2 = w2; null !== V$2; ) {
          g2 = V$2;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2) u2.return = g2, V$2 = u2;
          else b: for (g2 = w2; null !== V$2; ) {
            h2 = V$2;
            if (0 !== (h2.flags & 2048)) try {
              switch (h2.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h2);
              }
            } catch (na) {
              W$2(h2, h2.return, na);
            }
            if (h2 === g2) {
              V$2 = null;
              break b;
            }
            var F2 = h2.sibling;
            if (null !== F2) {
              F2.return = h2.return;
              V$2 = F2;
              break b;
            }
            V$2 = h2.return;
          }
        }
        K$2 = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a2);
        } catch (na) {
        }
        d2 = true;
      }
      return d2;
    } finally {
      C$2 = c2, ok.transition = b2;
    }
  }
  return false;
}
function Xk(a2, b2, c2) {
  b2 = Ji(c2, b2);
  b2 = Ni(a2, b2, 1);
  a2 = nh(a2, b2, 1);
  b2 = R$1();
  null !== a2 && (Ac(a2, 1, b2), Dk(a2, b2));
}
function W$2(a2, b2, c2) {
  if (3 === a2.tag) Xk(a2, a2, c2);
  else for (; null !== b2; ) {
    if (3 === b2.tag) {
      Xk(b2, a2, c2);
      break;
    } else if (1 === b2.tag) {
      var d2 = b2.stateNode;
      if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Ri || !Ri.has(d2))) {
        a2 = Ji(c2, a2);
        a2 = Qi(b2, a2, 1);
        b2 = nh(b2, a2, 1);
        a2 = R$1();
        null !== b2 && (Ac(b2, 1, a2), Dk(b2, a2));
        break;
      }
    }
    b2 = b2.return;
  }
}
function Ti(a2, b2, c2) {
  var d2 = a2.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = R$1();
  a2.pingedLanes |= a2.suspendedLanes & c2;
  Q$2 === a2 && (Z$2 & c2) === c2 && (4 === T$2 || 3 === T$2 && (Z$2 & 130023424) === Z$2 && 500 > B$2() - fk ? Kk(a2, 0) : rk |= c2);
  Dk(a2, b2);
}
function Yk(a2, b2) {
  0 === b2 && (0 === (a2.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = R$1();
  a2 = ih(a2, b2);
  null !== a2 && (Ac(a2, b2, c2), Dk(a2, c2));
}
function uj(a2) {
  var b2 = a2.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Yk(a2, c2);
}
function bk(a2, b2) {
  var c2 = 0;
  switch (a2.tag) {
    case 13:
      var d2 = a2.stateNode;
      var e2 = a2.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a2.stateNode;
      break;
    default:
      throw Error(p$4(314));
  }
  null !== d2 && d2.delete(b2);
  Yk(a2, c2);
}
var Vk;
Vk = function(a2, b2, c2) {
  if (null !== a2) if (a2.memoizedProps !== b2.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a2.lanes & c2) && 0 === (b2.flags & 128)) return dh = false, yj(a2, b2, c2);
    dh = 0 !== (a2.flags & 131072) ? true : false;
  }
  else dh = false, I$2 && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      ij(a2, b2);
      a2 = b2.pendingProps;
      var e2 = Yf(b2, H$2.current);
      ch(b2, c2);
      e2 = Nh(null, b2, d2, a2, e2, c2);
      var f2 = Sh();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, kh(b2), e2.updater = Ei, b2.stateNode = e2, e2._reactInternals = b2, Ii(b2, d2, a2, c2), b2 = jj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I$2 && f2 && vg(b2), Xi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        ij(a2, b2);
        a2 = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = Zk(d2);
        a2 = Ci(d2, a2);
        switch (e2) {
          case 0:
            b2 = cj(null, b2, d2, a2, c2);
            break a;
          case 1:
            b2 = hj(null, b2, d2, a2, c2);
            break a;
          case 11:
            b2 = Yi(null, b2, d2, a2, c2);
            break a;
          case 14:
            b2 = $i(null, b2, d2, Ci(d2.type, a2), c2);
            break a;
        }
        throw Error(p$4(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), cj(a2, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), hj(a2, b2, d2, e2, c2);
    case 3:
      a: {
        kj(b2);
        if (null === a2) throw Error(p$4(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        lh(a2, b2);
        qh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated) if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
          e2 = Ji(Error(p$4(423)), b2);
          b2 = lj(a2, b2, d2, c2, e2);
          break a;
        } else if (d2 !== e2) {
          e2 = Ji(Error(p$4(424)), b2);
          b2 = lj(a2, b2, d2, c2, e2);
          break a;
        } else for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I$2 = true, zg = null, c2 = Vg(b2, null, d2, c2), b2.child = c2; c2; ) c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = Zi(a2, b2, c2);
            break a;
          }
          Xi(a2, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Ah(b2), null === a2 && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a2 ? a2.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), gj(a2, b2), Xi(a2, b2, g2, c2), b2.child;
    case 6:
      return null === a2 && Eg(b2), null;
    case 13:
      return oj(a2, b2, c2);
    case 4:
      return yh(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a2 ? b2.child = Ug(b2, null, d2, c2) : Xi(a2, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), Yi(a2, b2, d2, e2, c2);
    case 7:
      return Xi(a2, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Xi(a2, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G$2(Wg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2) if (He$1(f2.value, g2)) {
          if (f2.children === e2.children && !Wf.current) {
            b2 = Zi(a2, b2, c2);
            break a;
          }
        } else for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
          var h2 = f2.dependencies;
          if (null !== h2) {
            g2 = f2.child;
            for (var k2 = h2.firstContext; null !== k2; ) {
              if (k2.context === d2) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c2 & -c2);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c2;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c2);
                bh(
                  f2.return,
                  c2,
                  b2
                );
                h2.lanes |= c2;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g2 = f2.type === b2.type ? null : f2.child;
          else if (18 === f2.tag) {
            g2 = f2.return;
            if (null === g2) throw Error(p$4(341));
            g2.lanes |= c2;
            h2 = g2.alternate;
            null !== h2 && (h2.lanes |= c2);
            bh(g2, c2, b2);
            g2 = f2.sibling;
          } else g2 = f2.child;
          if (null !== g2) g2.return = f2;
          else for (g2 = f2; null !== g2; ) {
            if (g2 === b2) {
              g2 = null;
              break;
            }
            f2 = g2.sibling;
            if (null !== f2) {
              f2.return = g2.return;
              g2 = f2;
              break;
            }
            g2 = g2.return;
          }
          f2 = g2;
        }
        Xi(a2, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, ch(b2, c2), e2 = eh(e2), d2 = d2(e2), b2.flags |= 1, Xi(a2, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Ci(d2, b2.pendingProps), e2 = Ci(d2.type, e2), $i(a2, b2, d2, e2, c2);
    case 15:
      return bj(a2, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Ci(d2, e2), ij(a2, b2), b2.tag = 1, Zf(d2) ? (a2 = true, cg(b2)) : a2 = false, ch(b2, c2), Gi(b2, d2, e2), Ii(b2, d2, e2, c2), jj(null, b2, d2, true, a2, c2);
    case 19:
      return xj(a2, b2, c2);
    case 22:
      return dj(a2, b2, c2);
  }
  throw Error(p$4(156, b2.tag));
};
function Fk(a2, b2) {
  return ac(a2, b2);
}
function $k(a2, b2, c2, d2) {
  this.tag = a2;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a2, b2, c2, d2) {
  return new $k(a2, b2, c2, d2);
}
function aj(a2) {
  a2 = a2.prototype;
  return !(!a2 || !a2.isReactComponent);
}
function Zk(a2) {
  if ("function" === typeof a2) return aj(a2) ? 1 : 0;
  if (void 0 !== a2 && null !== a2) {
    a2 = a2.$$typeof;
    if (a2 === Da) return 11;
    if (a2 === Ga) return 14;
  }
  return 2;
}
function Pg(a2, b2) {
  var c2 = a2.alternate;
  null === c2 ? (c2 = Bg(a2.tag, b2, a2.key, a2.mode), c2.elementType = a2.elementType, c2.type = a2.type, c2.stateNode = a2.stateNode, c2.alternate = a2, a2.alternate = c2) : (c2.pendingProps = b2, c2.type = a2.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a2.flags & 14680064;
  c2.childLanes = a2.childLanes;
  c2.lanes = a2.lanes;
  c2.child = a2.child;
  c2.memoizedProps = a2.memoizedProps;
  c2.memoizedState = a2.memoizedState;
  c2.updateQueue = a2.updateQueue;
  b2 = a2.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a2.sibling;
  c2.index = a2.index;
  c2.ref = a2.ref;
  return c2;
}
function Rg(a2, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a2;
  if ("function" === typeof a2) aj(a2) && (g2 = 1);
  else if ("string" === typeof a2) g2 = 5;
  else a: switch (a2) {
    case ya:
      return Tg(c2.children, e2, f2, b2);
    case za:
      g2 = 8;
      e2 |= 8;
      break;
    case Aa:
      return a2 = Bg(12, c2, b2, e2 | 2), a2.elementType = Aa, a2.lanes = f2, a2;
    case Ea:
      return a2 = Bg(13, c2, b2, e2), a2.elementType = Ea, a2.lanes = f2, a2;
    case Fa:
      return a2 = Bg(19, c2, b2, e2), a2.elementType = Fa, a2.lanes = f2, a2;
    case Ia:
      return pj(c2, e2, f2, b2);
    default:
      if ("object" === typeof a2 && null !== a2) switch (a2.$$typeof) {
        case Ba:
          g2 = 10;
          break a;
        case Ca:
          g2 = 9;
          break a;
        case Da:
          g2 = 11;
          break a;
        case Ga:
          g2 = 14;
          break a;
        case Ha:
          g2 = 16;
          d2 = null;
          break a;
      }
      throw Error(p$4(130, null == a2 ? a2 : typeof a2, ""));
  }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a2;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Tg(a2, b2, c2, d2) {
  a2 = Bg(7, a2, d2, b2);
  a2.lanes = c2;
  return a2;
}
function pj(a2, b2, c2, d2) {
  a2 = Bg(22, a2, d2, b2);
  a2.elementType = Ia;
  a2.lanes = c2;
  a2.stateNode = { isHidden: false };
  return a2;
}
function Qg(a2, b2, c2) {
  a2 = Bg(6, a2, null, b2);
  a2.lanes = c2;
  return a2;
}
function Sg(a2, b2, c2) {
  b2 = Bg(4, null !== a2.children ? a2.children : [], a2.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a2.containerInfo, pendingChildren: null, implementation: a2.implementation };
  return b2;
}
function al(a2, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a2;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = new al(a2, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a2.current = f2;
  f2.stateNode = a2;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a2;
}
function cl(a2, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a2, containerInfo: b2, implementation: c2 };
}
function dl(a2) {
  if (!a2) return Vf;
  a2 = a2._reactInternals;
  a: {
    if (Vb(a2) !== a2 || 1 !== a2.tag) throw Error(p$4(170));
    var b2 = a2;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$4(171));
  }
  if (1 === a2.tag) {
    var c2 = a2.type;
    if (Zf(c2)) return bg(a2, c2, b2);
  }
  return b2;
}
function el(a2, b2, c2, d2, e2, f2, g2, h2, k2) {
  a2 = bl(c2, d2, true, a2, e2, f2, g2, h2, k2);
  a2.context = dl(null);
  c2 = a2.current;
  d2 = R$1();
  e2 = yi(c2);
  f2 = mh(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  nh(c2, f2, e2);
  a2.current.lanes = e2;
  Ac(a2, e2, d2);
  Dk(a2, d2);
  return a2;
}
function fl(a2, b2, c2, d2) {
  var e2 = b2.current, f2 = R$1(), g2 = yi(e2);
  c2 = dl(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = mh(f2, g2);
  b2.payload = { element: a2 };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a2 = nh(e2, b2, g2);
  null !== a2 && (gi(a2, e2, g2, f2), oh(a2, e2, g2));
  return g2;
}
function gl(a2) {
  a2 = a2.current;
  if (!a2.child) return null;
  switch (a2.child.tag) {
    case 5:
      return a2.child.stateNode;
    default:
      return a2.child.stateNode;
  }
}
function hl(a2, b2) {
  a2 = a2.memoizedState;
  if (null !== a2 && null !== a2.dehydrated) {
    var c2 = a2.retryLane;
    a2.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function il(a2, b2) {
  hl(a2, b2);
  (a2 = a2.alternate) && hl(a2, b2);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a2) {
  console.error(a2);
};
function ll(a2) {
  this._internalRoot = a2;
}
ml.prototype.render = ll.prototype.render = function(a2) {
  var b2 = this._internalRoot;
  if (null === b2) throw Error(p$4(409));
  fl(a2, b2, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a2 = this._internalRoot;
  if (null !== a2) {
    this._internalRoot = null;
    var b2 = a2.containerInfo;
    Rk(function() {
      fl(null, a2, null, null);
    });
    b2[uf] = null;
  }
};
function ml(a2) {
  this._internalRoot = a2;
}
ml.prototype.unstable_scheduleHydration = function(a2) {
  if (a2) {
    var b2 = Hc();
    a2 = { blockedOn: null, target: a2, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++) ;
    Qc.splice(c2, 0, a2);
    0 === c2 && Vc(a2);
  }
};
function nl(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType);
}
function ol(a2) {
  return !(!a2 || 1 !== a2.nodeType && 9 !== a2.nodeType && 11 !== a2.nodeType && (8 !== a2.nodeType || " react-mount-point-unstable " !== a2.nodeValue));
}
function pl() {
}
function ql(a2, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a3 = gl(g2);
        f2.call(a3);
      };
    }
    var g2 = el(b2, d2, a2, 0, null, false, false, "", pl);
    a2._reactRootContainer = g2;
    a2[uf] = g2.current;
    sf(8 === a2.nodeType ? a2.parentNode : a2);
    Rk();
    return g2;
  }
  for (; e2 = a2.lastChild; ) a2.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a3 = gl(k2);
      h2.call(a3);
    };
  }
  var k2 = bl(a2, 0, false, null, null, false, false, "", pl);
  a2._reactRootContainer = k2;
  a2[uf] = k2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  Rk(function() {
    fl(b2, k2, c2, d2);
  });
  return k2;
}
function rl(a2, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a3 = gl(g2);
        h2.call(a3);
      };
    }
    fl(b2, g2, a2, e2);
  } else g2 = ql(c2, b2, a2, e2, d2);
  return gl(g2);
}
Ec = function(a2) {
  switch (a2.tag) {
    case 3:
      var b2 = a2.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Dk(b2, B$2()), 0 === (K$2 & 6) && (Gj = B$2() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b3 = ih(a2, 1);
        if (null !== b3) {
          var c3 = R$1();
          gi(b3, a2, 1, c3);
        }
      }), il(a2, 1);
  }
};
Fc = function(a2) {
  if (13 === a2.tag) {
    var b2 = ih(a2, 134217728);
    if (null !== b2) {
      var c2 = R$1();
      gi(b2, a2, 134217728, c2);
    }
    il(a2, 134217728);
  }
};
Gc = function(a2) {
  if (13 === a2.tag) {
    var b2 = yi(a2), c2 = ih(a2, b2);
    if (null !== c2) {
      var d2 = R$1();
      gi(c2, a2, b2, d2);
    }
    il(a2, b2);
  }
};
Hc = function() {
  return C$2;
};
Ic = function(a2, b2) {
  var c2 = C$2;
  try {
    return C$2 = a2, b2();
  } finally {
    C$2 = c2;
  }
};
yb = function(a2, b2, c2) {
  switch (b2) {
    case "input":
      bb(a2, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a2; c2.parentNode; ) c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a2 && d2.form === a2.form) {
            var e2 = Db(d2);
            if (!e2) throw Error(p$4(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a2, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a2, !!c2.multiple, b2, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a2) {
  a2 = Zb(a2);
  return null === a2 ? null : a2.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a2) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a2, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b2)) throw Error(p$4(200));
  return cl(a2, b2, null, c2);
};
reactDom_production_min.createRoot = function(a2, b2) {
  if (!nl(a2)) throw Error(p$4(299));
  var c2 = false, d2 = "", e2 = kl;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = bl(a2, 1, false, null, null, c2, false, d2, e2);
  a2[uf] = b2.current;
  sf(8 === a2.nodeType ? a2.parentNode : a2);
  return new ll(b2);
};
reactDom_production_min.findDOMNode = function(a2) {
  if (null == a2) return null;
  if (1 === a2.nodeType) return a2;
  var b2 = a2._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a2.render) throw Error(p$4(188));
    a2 = Object.keys(a2).join(",");
    throw Error(p$4(268, a2));
  }
  a2 = Zb(b2);
  a2 = null === a2 ? null : a2.stateNode;
  return a2;
};
reactDom_production_min.flushSync = function(a2) {
  return Rk(a2);
};
reactDom_production_min.hydrate = function(a2, b2, c2) {
  if (!ol(b2)) throw Error(p$4(200));
  return rl(null, a2, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a2, b2, c2) {
  if (!nl(a2)) throw Error(p$4(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = kl;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = el(b2, null, a2, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a2[uf] = b2.current;
  sf(a2);
  if (d2) for (a2 = 0; a2 < d2.length; a2++) c2 = d2[a2], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
    c2,
    e2
  );
  return new ml(b2);
};
reactDom_production_min.render = function(a2, b2, c2) {
  if (!ol(b2)) throw Error(p$4(200));
  return rl(null, a2, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a2) {
  if (!ol(a2)) throw Error(p$4(40));
  return a2._reactRootContainer ? (Rk(function() {
    rl(null, null, a2, false, function() {
      a2._reactRootContainer = null;
      a2[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a2, b2, c2, d2) {
  if (!ol(c2)) throw Error(p$4(200));
  if (null == a2 || void 0 === a2._reactInternals) throw Error(p$4(38));
  return rl(a2, b2, c2, false, d2);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var m$4 = reactDomExports;
{
  client.createRoot = m$4.createRoot;
  client.hydrateRoot = m$4.hydrateRoot;
}
/**
 * @remix-run/router v1.19.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$5() {
  _extends$5 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$5.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createBrowserHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createBrowserLocation(window2, globalHistory) {
    let {
      pathname,
      search: search2,
      hash: hash2
    } = window2.location;
    return createLocation(
      "",
      {
        pathname,
        search: search2,
        hash: hash2
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createBrowserHref(window2, to) {
    return typeof to === "string" ? to : createPath(to);
  }
  return getUrlBasedHistory(createBrowserLocation, createBrowserHref, null, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined") console.warn(message);
    try {
      throw new Error(message);
    } catch (e2) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index2) {
  return {
    usr: location.state,
    key: location.key,
    idx: index2
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$5({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search: search2 = "",
    hash: hash2 = ""
  } = _ref;
  if (search2 && search2 !== "?") pathname += search2.charAt(0) === "?" ? search2 : "?" + search2;
  if (hash2 && hash2 !== "#") pathname += hash2.charAt(0) === "#" ? hash2 : "#" + hash2;
  return pathname;
}
function parsePath(path2) {
  let parsedPath = {};
  if (path2) {
    let hashIndex = path2.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path2.substr(hashIndex);
      path2 = path2.substr(0, hashIndex);
    }
    let searchIndex = path2.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path2.substr(searchIndex);
      path2 = path2.substr(0, searchIndex);
    }
    if (path2) {
      parsedPath.pathname = path2;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener2 = null;
  let index2 = getIndex();
  if (index2 == null) {
    index2 = 0;
    globalHistory.replaceState(_extends$5({}, globalHistory.state, {
      idx: index2
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index2;
    index2 = nextIndex;
    if (listener2) {
      listener2({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    index2 = getIndex() + 1;
    let historyState = getHistoryState(location, index2);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      if (error instanceof DOMException && error.name === "DataCloneError") {
        throw error;
      }
      window2.location.assign(url);
    }
    if (v5Compat && listener2) {
      listener2({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace2(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    index2 = getIndex();
    let historyState = getHistoryState(location, index2);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener2) {
      listener2({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    href = href.replace(/ $/, "%20");
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn2) {
      if (listener2) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener2 = fn2;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener2 = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace: replace2,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  return matchRoutesImpl(routes, locationArg, basename, false);
}
function matchRoutesImpl(routes, locationArg, basename, allowPartial) {
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches2 = null;
  for (let i2 = 0; matches2 == null && i2 < branches.length; ++i2) {
    let decoded = decodePath(pathname);
    matches2 = matchRouteBranch(branches[i2], decoded, allowPartial);
  }
  return matches2;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index2, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path2 = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        // Our types know better, but runtime JS may not!
        // @ts-expect-error
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path2 + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path2);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path: path2,
      score: computeScore(path2, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index2) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index2);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index2, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path2) {
  let segments = path2.split("/");
  if (segments.length === 0) return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path2.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a2, b2) => a2.score !== b2.score ? b2.score - a2.score : compareIndexes(a2.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:[\w-]+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s2) => s2 === "*";
function computeScore(path2, index2) {
  let segments = path2.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s2) => !isSplat(s2)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a2, b2) {
  let siblings = a2.length === b2.length && a2.slice(0, -1).every((n2, i2) => n2 === b2[i2]);
  return siblings ? (
    // If two routes are siblings, we should try to match the earlier sibling
    // first. This allows people to have fine-grained control over the matching
    // behavior by simply putting routes with identical paths in the order they
    // want them tried.
    a2[a2.length - 1] - b2[b2.length - 1]
  ) : (
    // Otherwise, it doesn't really make sense to rank non-siblings by index,
    // so they sort equally.
    0
  );
}
function matchRouteBranch(branch, pathname, allowPartial) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches2 = [];
  for (let i2 = 0; i2 < routesMeta.length; ++i2) {
    let meta = routesMeta[i2];
    let end = i2 === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match2 = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    let route = meta.route;
    if (!match2 && end && allowPartial && !routesMeta[routesMeta.length - 1].route.index) {
      match2 = matchPath({
        path: meta.relativePath,
        caseSensitive: meta.caseSensitive,
        end: false
      }, remainingPathname);
    }
    if (!match2) {
      return null;
    }
    Object.assign(matchedParams, match2.params);
    matches2.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match2.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match2.pathnameBase])),
      route
    });
    if (match2.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match2.pathnameBase]);
    }
  }
  return matches2;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, compiledParams] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match2 = pathname.match(matcher);
  if (!match2) return null;
  let matchedPathname = match2[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match2.slice(1);
  let params = compiledParams.reduce((memo, _ref, index2) => {
    let {
      paramName,
      isOptional
    } = _ref;
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    const value = captureGroups[index2];
    if (isOptional && !value) {
      memo[paramName] = void 0;
    } else {
      memo[paramName] = (value || "").replace(/%2F/g, "/");
    }
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path2, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path2 === "*" || !path2.endsWith("*") || path2.endsWith("/*"), 'Route path "' + path2 + '" will be treated as if it were ' + ('"' + path2.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path2.replace(/\*$/, "/*") + '".'));
  let params = [];
  let regexpSource = "^" + path2.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (_2, paramName, isOptional) => {
    params.push({
      paramName,
      isOptional: isOptional != null
    });
    return isOptional ? "/?([^\\/]+)?" : "/([^\\/]+)";
  });
  if (path2.endsWith("*")) {
    params.push({
      paramName: "*"
    });
    regexpSource += path2 === "*" || path2 === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path2 !== "" && path2 !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, params];
}
function decodePath(value) {
  try {
    return value.split("/").map((v2) => decodeURIComponent(v2).replace(/\//g, "%2F")).join("/");
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/") return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search: search2 = "",
    hash: hash2 = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search2),
    hash: normalizeHash(hash2)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1) segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char2, field, dest, path2) {
  return "Cannot include a '" + char2 + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path2) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches2) {
  return matches2.filter((match2, index2) => index2 === 0 || match2.route.path && match2.route.path.length > 0);
}
function getResolveToMatches(matches2, v7_relativeSplatPath) {
  let pathMatches = getPathContributingMatches(matches2);
  if (v7_relativeSplatPath) {
    return pathMatches.map((match2, idx) => idx === pathMatches.length - 1 ? match2.pathname : match2.pathnameBase);
  }
  return pathMatches.map((match2) => match2.pathnameBase);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$5({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from2;
  if (toPathname == null) {
    from2 = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (!isPathRelative && toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from2 = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path2 = resolvePath(to, from2);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path2.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path2.pathname += "/";
  }
  return path2;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search2) => !search2 || search2 === "?" ? "" : search2.startsWith("?") ? search2 : "?" + search2;
const normalizeHash = (hash2) => !hash2 || hash2 === "#" ? "" : hash2.startsWith("#") ? hash2 : "#" + hash2;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
new Set(validMutationMethodsArr);
const validRequestMethodsArr = ["get", ...validMutationMethodsArr];
new Set(validRequestMethodsArr);
/**
 * React Router v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$4() {
  _extends$4 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$4.apply(this, arguments);
}
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: [],
  isDataRoute: false
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    hash: hash2,
    pathname,
    search: search2
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search: search2,
    hash: hash2
  });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useIsomorphicLayoutEffect$2(cb2) {
  let isStatic = reactExports.useContext(NavigationContext).static;
  if (!isStatic) {
    reactExports.useLayoutEffect(cb2);
  }
}
function useNavigate() {
  let {
    isDataRoute
  } = reactExports.useContext(RouteContext);
  return isDataRoute ? useNavigateStable() : useNavigateUnstable();
}
function useNavigateUnstable() {
  !useInRouterContext() ? invariant(false) : void 0;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let {
    basename,
    future,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches: matches2
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches2, future.v7_relativeSplatPath));
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect$2(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path2 = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (dataRouterContext == null && basename !== "/") {
      path2.pathname = path2.pathname === "/" ? basename : joinPaths([basename, path2.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path2, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname, dataRouterContext]);
  return navigate;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    future
  } = reactExports.useContext(NavigationContext);
  let {
    matches: matches2
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getResolveToMatches(matches2, future.v7_relativeSplatPath));
  return reactExports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes, locationArg) {
  return useRoutesImpl(routes, locationArg);
}
function useRoutesImpl(routes, locationArg, dataRouterState, future) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = pathname;
  if (parentPathnameBase !== "/") {
    let parentSegments = parentPathnameBase.replace(/^\//, "").split("/");
    let segments = pathname.replace(/^\//, "").split("/");
    remainingPathname = "/" + segments.slice(parentSegments.length).join("/");
  }
  let matches2 = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches2 && matches2.map((match2) => Object.assign({}, match2, {
    params: Object.assign({}, parentParams, match2.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match2.pathname).pathname : match2.pathname
    ]),
    pathnameBase: match2.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match2.pathnameBase).pathname : match2.pathnameBase
    ])
  })), parentMatches, dataRouterState, future);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$4({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorComponent() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
const defaultErrorElement = /* @__PURE__ */ reactExports.createElement(DefaultErrorComponent, null);
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      revalidation: props.revalidation,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location || state.revalidation !== "idle" && props.revalidation === "idle") {
      return {
        error: props.error,
        location: props.location,
        revalidation: props.revalidation
      };
    }
    return {
      error: props.error !== void 0 ? props.error : state.error,
      location: state.location,
      revalidation: props.revalidation || state.revalidation
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error !== void 0 ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match: match2,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && (match2.route.errorElement || match2.route.ErrorBoundary)) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match2.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches2, parentMatches, dataRouterState, future) {
  var _dataRouterState;
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (dataRouterState === void 0) {
    dataRouterState = null;
  }
  if (future === void 0) {
    future = null;
  }
  if (matches2 == null) {
    var _future;
    if (!dataRouterState) {
      return null;
    }
    if (dataRouterState.errors) {
      matches2 = dataRouterState.matches;
    } else if ((_future = future) != null && _future.v7_partialHydration && parentMatches.length === 0 && !dataRouterState.initialized && dataRouterState.matches.length > 0) {
      matches2 = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches2;
  let errors = (_dataRouterState = dataRouterState) == null ? void 0 : _dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]) !== void 0);
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  let renderFallback = false;
  let fallbackIndex = -1;
  if (dataRouterState && future && future.v7_partialHydration) {
    for (let i2 = 0; i2 < renderedMatches.length; i2++) {
      let match2 = renderedMatches[i2];
      if (match2.route.HydrateFallback || match2.route.hydrateFallbackElement) {
        fallbackIndex = i2;
      }
      if (match2.route.id) {
        let {
          loaderData,
          errors: errors2
        } = dataRouterState;
        let needsToRunLoader = match2.route.loader && loaderData[match2.route.id] === void 0 && (!errors2 || errors2[match2.route.id] === void 0);
        if (match2.route.lazy || needsToRunLoader) {
          renderFallback = true;
          if (fallbackIndex >= 0) {
            renderedMatches = renderedMatches.slice(0, fallbackIndex + 1);
          } else {
            renderedMatches = [renderedMatches[0]];
          }
          break;
        }
      }
    }
  }
  return renderedMatches.reduceRight((outlet, match2, index2) => {
    let error;
    let shouldRenderHydrateFallback = false;
    let errorElement = null;
    let hydrateFallbackElement = null;
    if (dataRouterState) {
      error = errors && match2.route.id ? errors[match2.route.id] : void 0;
      errorElement = match2.route.errorElement || defaultErrorElement;
      if (renderFallback) {
        if (fallbackIndex < 0 && index2 === 0) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = null;
        } else if (fallbackIndex === index2) {
          shouldRenderHydrateFallback = true;
          hydrateFallbackElement = match2.route.hydrateFallbackElement || null;
        }
      }
    }
    let matches22 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
    let getChildren = () => {
      let children;
      if (error) {
        children = errorElement;
      } else if (shouldRenderHydrateFallback) {
        children = hydrateFallbackElement;
      } else if (match2.route.Component) {
        children = /* @__PURE__ */ reactExports.createElement(match2.route.Component, null);
      } else if (match2.route.element) {
        children = match2.route.element;
      } else {
        children = outlet;
      }
      return /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
        match: match2,
        routeContext: {
          outlet,
          matches: matches22,
          isDataRoute: dataRouterState != null
        },
        children
      });
    };
    return dataRouterState && (match2.route.ErrorBoundary || match2.route.errorElement || index2 === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      revalidation: dataRouterState.revalidation,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches22,
        isDataRoute: true
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1 = /* @__PURE__ */ function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
  DataRouterHook2["UseNavigateStable"] = "useNavigate";
  return DataRouterHook2;
}(DataRouterHook$1 || {});
var DataRouterStateHook$1 = /* @__PURE__ */ function(DataRouterStateHook2) {
  DataRouterStateHook2["UseBlocker"] = "useBlocker";
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
  DataRouterStateHook2["UseNavigateStable"] = "useNavigate";
  DataRouterStateHook2["UseRouteId"] = "useRouteId";
  return DataRouterStateHook2;
}(DataRouterStateHook$1 || {});
function useDataRouterContext(hookName) {
  let ctx = reactExports.useContext(DataRouterContext);
  !ctx ? invariant(false) : void 0;
  return ctx;
}
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  if (error !== void 0) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function useNavigateStable() {
  let {
    router
  } = useDataRouterContext(DataRouterHook$1.UseNavigateStable);
  let id2 = useCurrentRouteId(DataRouterStateHook$1.UseNavigateStable);
  let activeRef = reactExports.useRef(false);
  useIsomorphicLayoutEffect$2(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current) return;
    if (typeof to === "number") {
      router.navigate(to);
    } else {
      router.navigate(to, _extends$4({
        fromRouteId: id2
      }, options));
    }
  }, [router, id2]);
  return navigate;
}
function Route(_props) {
  invariant(false);
}
function Router(_ref5) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false,
    future
  } = _ref5;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp,
    future: _extends$4({
      v7_relativeSplatPath: false
    }, future)
  }), [basename, future, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search: search2 = "",
    hash: hash2 = "",
    state = null,
    key = "default"
  } = locationProp;
  let locationContext = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      location: {
        pathname: trailingPathname,
        search: search2,
        hash: hash2,
        state,
        key
      },
      navigationType
    };
  }, [basename, pathname, search2, hash2, state, key, navigationType]);
  if (locationContext == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: locationContext
  }));
}
function Routes(_ref6) {
  let {
    children,
    location
  } = _ref6;
  return useRoutes(createRoutesFromChildren(children), location);
}
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports.Children.forEach(children, (element, index2) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
      return;
    }
    let treePath = [...parentPath, index2];
    if (element.type === reactExports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, treePath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      Component: element.props.Component,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      ErrorBoundary: element.props.ErrorBoundary,
      hasErrorBoundary: element.props.ErrorBoundary != null || element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle,
      lazy: element.props.lazy
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
/**
 * React Router DOM v6.26.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _extends$3() {
  _extends$3 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$3.apply(this, arguments);
}
function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
function createSearchParams(init) {
  if (init === void 0) {
    init = "";
  }
  return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
    let value = init[key];
    return memo.concat(Array.isArray(value) ? value.map((v2) => [key, v2]) : [[key, value]]);
  }, []));
}
function getSearchParamsForLocation(locationSearch, defaultSearchParams) {
  let searchParams = createSearchParams(locationSearch);
  if (defaultSearchParams) {
    defaultSearchParams.forEach((_2, key) => {
      if (!searchParams.has(key)) {
        defaultSearchParams.getAll(key).forEach((value) => {
          searchParams.append(key, value);
        });
      }
    });
  }
  return searchParams;
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "unstable_viewTransition"];
const REACT_ROUTER_VERSION = "6";
try {
  window.__reactRouterVersion = REACT_ROUTER_VERSION;
} catch (e2) {
}
const START_TRANSITION = "startTransition";
const startTransitionImpl = React[START_TRANSITION];
function BrowserRouter(_ref4) {
  let {
    basename,
    children,
    future,
    window: window2
  } = _ref4;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createBrowserHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setStateImpl] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  let {
    v7_startTransition
  } = future || {};
  let setState = reactExports.useCallback((newState) => {
    v7_startTransition && startTransitionImpl ? startTransitionImpl(() => setStateImpl(newState)) : setStateImpl(newState);
  }, [setStateImpl, v7_startTransition]);
  reactExports.useLayoutEffect(() => history.listen(setState), [history, setState]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history,
    future
  });
}
const isBrowser$1 = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const ABSOLUTE_URL_REGEX = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref7, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace: replace2,
    state,
    target,
    to,
    preventScrollReset,
    unstable_viewTransition
  } = _ref7, rest = _objectWithoutPropertiesLoose$1(_ref7, _excluded);
  let {
    basename
  } = reactExports.useContext(NavigationContext);
  let absoluteHref;
  let isExternal = false;
  if (typeof to === "string" && ABSOLUTE_URL_REGEX.test(to)) {
    absoluteHref = to;
    if (isBrowser$1) {
      try {
        let currentUrl = new URL(window.location.href);
        let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
        let path2 = stripBasename(targetUrl.pathname, basename);
        if (targetUrl.origin === currentUrl.origin && path2 != null) {
          to = path2 + targetUrl.search + targetUrl.hash;
        } else {
          isExternal = true;
        }
      } catch (e2) {
      }
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace: replace2,
    state,
    target,
    preventScrollReset,
    relative,
    unstable_viewTransition
  });
  function handleClick(event) {
    if (onClick) onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement("a", _extends$3({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmit"] = "useSubmit";
  DataRouterHook2["UseSubmitFetcher"] = "useSubmitFetcher";
  DataRouterHook2["UseFetcher"] = "useFetcher";
  DataRouterHook2["useViewTransitionState"] = "useViewTransitionState";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetcher"] = "useFetcher";
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative,
    unstable_viewTransition
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path2 = useResolvedPath(to, {
    relative
  });
  return reactExports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace2 = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path2);
      navigate(to, {
        replace: replace2,
        state,
        preventScrollReset,
        relative,
        unstable_viewTransition
      });
    }
  }, [location, navigate, path2, replaceProp, state, target, to, preventScrollReset, relative, unstable_viewTransition]);
}
function useSearchParams(defaultInit) {
  let defaultSearchParamsRef = reactExports.useRef(createSearchParams(defaultInit));
  let hasSetSearchParamsRef = reactExports.useRef(false);
  let location = useLocation();
  let searchParams = reactExports.useMemo(() => (
    // Only merge in the defaults if we haven't yet called setSearchParams.
    // Once we call that we want those to take precedence, otherwise you can't
    // remove a param with setSearchParams({}) if it has an initial value
    getSearchParamsForLocation(location.search, hasSetSearchParamsRef.current ? null : defaultSearchParamsRef.current)
  ), [location.search]);
  let navigate = useNavigate();
  let setSearchParams = reactExports.useCallback((nextInit, navigateOptions) => {
    const newSearchParams = createSearchParams(typeof nextInit === "function" ? nextInit(searchParams) : nextInit);
    hasSetSearchParamsRef.current = true;
    navigate("?" + newSearchParams, navigateOptions);
  }, [navigate, searchParams]);
  return [searchParams, setSearchParams];
}
var propTypes$1 = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim2(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim2.isRequired = shim2;
  function getShim() {
    return shim2;
  }
  var ReactPropTypes = {
    array: shim2,
    bigint: shim2,
    bool: shim2,
    func: shim2,
    number: shim2,
    object: shim2,
    string: shim2,
    symbol: shim2,
    any: shim2,
    arrayOf: getShim,
    element: shim2,
    elementType: shim2,
    instanceOf: getShim,
    node: shim2,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes$1.exports = factoryWithThrowingShims();
}
var propTypesExports = propTypes$1.exports;
const PropTypes = /* @__PURE__ */ getDefaultExportFromCjs(propTypesExports);
var fastDeepEqual = function equal(a2, b2) {
  if (a2 === b2) return true;
  if (a2 && b2 && typeof a2 == "object" && typeof b2 == "object") {
    if (a2.constructor !== b2.constructor) return false;
    var length2, i2, keys;
    if (Array.isArray(a2)) {
      length2 = a2.length;
      if (length2 != b2.length) return false;
      for (i2 = length2; i2-- !== 0; )
        if (!equal(a2[i2], b2[i2])) return false;
      return true;
    }
    if (a2.constructor === RegExp) return a2.source === b2.source && a2.flags === b2.flags;
    if (a2.valueOf !== Object.prototype.valueOf) return a2.valueOf() === b2.valueOf();
    if (a2.toString !== Object.prototype.toString) return a2.toString() === b2.toString();
    keys = Object.keys(a2);
    length2 = keys.length;
    if (length2 !== Object.keys(b2).length) return false;
    for (i2 = length2; i2-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b2, keys[i2])) return false;
    for (i2 = length2; i2-- !== 0; ) {
      var key = keys[i2];
      if (!equal(a2[key], b2[key])) return false;
    }
    return true;
  }
  return a2 !== a2 && b2 !== b2;
};
const isEqual = /* @__PURE__ */ getDefaultExportFromCjs(fastDeepEqual);
var dist = { exports: {} };
var Sister;
/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/
Sister = function() {
  var sister2 = {}, events = {};
  sister2.on = function(name, handler) {
    var listener2 = { name, handler };
    events[name] = events[name] || [];
    events[name].unshift(listener2);
    return listener2;
  };
  sister2.off = function(listener2) {
    var index2 = events[listener2.name].indexOf(listener2);
    if (index2 !== -1) {
      events[listener2.name].splice(index2, 1);
    }
  };
  sister2.trigger = function(name, data2) {
    var listeners = events[name], i2;
    if (listeners) {
      i2 = listeners.length;
      while (i2--) {
        listeners[i2].handler(data2);
      }
    }
  };
  return sister2;
};
var sister = Sister;
var loadYouTubeIframeApi = { exports: {} };
var loadScript = function load(src2, opts, cb2) {
  var head = document.head || document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  if (typeof opts === "function") {
    cb2 = opts;
    opts = {};
  }
  opts = opts || {};
  cb2 = cb2 || function() {
  };
  script.type = opts.type || "text/javascript";
  script.charset = opts.charset || "utf8";
  script.async = "async" in opts ? !!opts.async : true;
  script.src = src2;
  if (opts.attrs) {
    setAttributes(script, opts.attrs);
  }
  if (opts.text) {
    script.text = "" + opts.text;
  }
  var onend = "onload" in script ? stdOnEnd : ieOnEnd;
  onend(script, cb2);
  if (!script.onload) {
    stdOnEnd(script, cb2);
  }
  head.appendChild(script);
};
function setAttributes(script, attrs) {
  for (var attr in attrs) {
    script.setAttribute(attr, attrs[attr]);
  }
}
function stdOnEnd(script, cb2) {
  script.onload = function() {
    this.onerror = this.onload = null;
    cb2(null, script);
  };
  script.onerror = function() {
    this.onerror = this.onload = null;
    cb2(new Error("Failed to load " + this.src), script);
  };
}
function ieOnEnd(script, cb2) {
  script.onreadystatechange = function() {
    if (this.readyState != "complete" && this.readyState != "loaded") return;
    this.onreadystatechange = null;
    cb2(null, script);
  };
}
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _loadScript = loadScript;
  var _loadScript2 = _interopRequireDefault2(_loadScript);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports.default = function(emitter) {
    var iframeAPIReady = new Promise(function(resolve) {
      if (window.YT && window.YT.Player && window.YT.Player instanceof Function) {
        resolve(window.YT);
        return;
      } else {
        var protocol = window.location.protocol === "http:" ? "http:" : "https:";
        (0, _loadScript2.default)(protocol + "//www.youtube.com/iframe_api", function(error) {
          if (error) {
            emitter.trigger("error", error);
          }
        });
      }
      var previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = function() {
        if (previous) {
          previous();
        }
        resolve(window.YT);
      };
    });
    return iframeAPIReady;
  };
  module.exports = exports["default"];
})(loadYouTubeIframeApi, loadYouTubeIframeApi.exports);
var loadYouTubeIframeApiExports = loadYouTubeIframeApi.exports;
var YouTubePlayer = { exports: {} };
var browser = { exports: {} };
var debug = { exports: {} };
var s$1 = 1e3;
var m$3 = s$1 * 60;
var h$4 = m$3 * 60;
var d$2 = h$4 * 24;
var y$2 = d$2 * 365.25;
var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === "string" && val.length > 0) {
    return parse(val);
  } else if (type === "number" && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
  );
};
function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match2 = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match2) {
    return;
  }
  var n2 = parseFloat(match2[1]);
  var type = (match2[2] || "ms").toLowerCase();
  switch (type) {
    case "years":
    case "year":
    case "yrs":
    case "yr":
    case "y":
      return n2 * y$2;
    case "days":
    case "day":
    case "d":
      return n2 * d$2;
    case "hours":
    case "hour":
    case "hrs":
    case "hr":
    case "h":
      return n2 * h$4;
    case "minutes":
    case "minute":
    case "mins":
    case "min":
    case "m":
      return n2 * m$3;
    case "seconds":
    case "second":
    case "secs":
    case "sec":
    case "s":
      return n2 * s$1;
    case "milliseconds":
    case "millisecond":
    case "msecs":
    case "msec":
    case "ms":
      return n2;
    default:
      return void 0;
  }
}
function fmtShort(ms2) {
  if (ms2 >= d$2) {
    return Math.round(ms2 / d$2) + "d";
  }
  if (ms2 >= h$4) {
    return Math.round(ms2 / h$4) + "h";
  }
  if (ms2 >= m$3) {
    return Math.round(ms2 / m$3) + "m";
  }
  if (ms2 >= s$1) {
    return Math.round(ms2 / s$1) + "s";
  }
  return ms2 + "ms";
}
function fmtLong(ms2) {
  return plural(ms2, d$2, "day") || plural(ms2, h$4, "hour") || plural(ms2, m$3, "minute") || plural(ms2, s$1, "second") || ms2 + " ms";
}
function plural(ms2, n2, name) {
  if (ms2 < n2) {
    return;
  }
  if (ms2 < n2 * 1.5) {
    return Math.floor(ms2 / n2) + " " + name;
  }
  return Math.ceil(ms2 / n2) + " " + name + "s";
}
(function(module, exports) {
  exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
  exports.coerce = coerce;
  exports.disable = disable;
  exports.enable = enable;
  exports.enabled = enabled;
  exports.humanize = ms;
  exports.names = [];
  exports.skips = [];
  exports.formatters = {};
  var prevTime;
  function selectColor(namespace) {
    var hash2 = 0, i2;
    for (i2 in namespace) {
      hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i2);
      hash2 |= 0;
    }
    return exports.colors[Math.abs(hash2) % exports.colors.length];
  }
  function createDebug(namespace) {
    function debug2() {
      if (!debug2.enabled) return;
      var self2 = debug2;
      var curr = +/* @__PURE__ */ new Date();
      var ms2 = curr - (prevTime || curr);
      self2.diff = ms2;
      self2.prev = prevTime;
      self2.curr = curr;
      prevTime = curr;
      var args = new Array(arguments.length);
      for (var i2 = 0; i2 < args.length; i2++) {
        args[i2] = arguments[i2];
      }
      args[0] = exports.coerce(args[0]);
      if ("string" !== typeof args[0]) {
        args.unshift("%O");
      }
      var index2 = 0;
      args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match2, format) {
        if (match2 === "%%") return match2;
        index2++;
        var formatter = exports.formatters[format];
        if ("function" === typeof formatter) {
          var val = args[index2];
          match2 = formatter.call(self2, val);
          args.splice(index2, 1);
          index2--;
        }
        return match2;
      });
      exports.formatArgs.call(self2, args);
      var logFn = debug2.log || exports.log || console.log.bind(console);
      logFn.apply(self2, args);
    }
    debug2.namespace = namespace;
    debug2.enabled = exports.enabled(namespace);
    debug2.useColors = exports.useColors();
    debug2.color = selectColor(namespace);
    if ("function" === typeof exports.init) {
      exports.init(debug2);
    }
    return debug2;
  }
  function enable(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    var len = split.length;
    for (var i2 = 0; i2 < len; i2++) {
      if (!split[i2]) continue;
      namespaces = split[i2].replace(/\*/g, ".*?");
      if (namespaces[0] === "-") {
        exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
      } else {
        exports.names.push(new RegExp("^" + namespaces + "$"));
      }
    }
  }
  function disable() {
    exports.enable("");
  }
  function enabled(name) {
    var i2, len;
    for (i2 = 0, len = exports.skips.length; i2 < len; i2++) {
      if (exports.skips[i2].test(name)) {
        return false;
      }
    }
    for (i2 = 0, len = exports.names.length; i2 < len; i2++) {
      if (exports.names[i2].test(name)) {
        return true;
      }
    }
    return false;
  }
  function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
  }
})(debug, debug.exports);
var debugExports = debug.exports;
(function(module, exports) {
  var define_process_env_default2 = {};
  exports = module.exports = debugExports;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load2;
  exports.useColors = useColors;
  exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
  exports.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
  ];
  function useColors() {
    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
      return true;
    }
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // is firebug? http://stackoverflow.com/a/398120/376773
    typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // double check webkit in userAgent just in case we are in a worker
    typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  exports.formatters.j = function(v2) {
    try {
      return JSON.stringify(v2);
    } catch (err) {
      return "[UnexpectedJSONParseError]: " + err.message;
    }
  };
  function formatArgs(args) {
    var useColors2 = this.useColors;
    args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports.humanize(this.diff);
    if (!useColors2) return;
    var c2 = "color: " + this.color;
    args.splice(1, 0, c2, "color: inherit");
    var index2 = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match2) {
      if ("%%" === match2) return;
      index2++;
      if ("%c" === match2) {
        lastC = index2;
      }
    });
    args.splice(lastC, 0, c2);
  }
  function log() {
    return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
  }
  function save(namespaces) {
    try {
      if (null == namespaces) {
        exports.storage.removeItem("debug");
      } else {
        exports.storage.debug = namespaces;
      }
    } catch (e2) {
    }
  }
  function load2() {
    var r2;
    try {
      r2 = exports.storage.debug;
    } catch (e2) {
    }
    if (!r2 && typeof process !== "undefined" && "env" in process) {
      r2 = define_process_env_default2.DEBUG;
    }
    return r2;
  }
  exports.enable(load2());
  function localstorage() {
    try {
      return window.localStorage;
    } catch (e2) {
    }
  }
})(browser, browser.exports);
var browserExports = browser.exports;
var functionNames = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ["cueVideoById", "loadVideoById", "cueVideoByUrl", "loadVideoByUrl", "playVideo", "pauseVideo", "stopVideo", "getVideoLoadedFraction", "cuePlaylist", "loadPlaylist", "nextVideo", "previousVideo", "playVideoAt", "setShuffle", "setLoop", "getPlaylist", "getPlaylistIndex", "setOption", "mute", "unMute", "isMuted", "setVolume", "getVolume", "seekTo", "getPlayerState", "getPlaybackRate", "setPlaybackRate", "getAvailablePlaybackRates", "getPlaybackQuality", "setPlaybackQuality", "getAvailableQualityLevels", "getCurrentTime", "getDuration", "removeEventListener", "getVideoUrl", "getVideoEmbedCode", "getOptions", "getOption", "addEventListener", "destroy", "setSize", "getIframe"];
  module.exports = exports["default"];
})(functionNames, functionNames.exports);
var functionNamesExports = functionNames.exports;
var eventNames = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = ["ready", "stateChange", "playbackQualityChange", "playbackRateChange", "error", "apiChange", "volumeChange"];
  module.exports = exports["default"];
})(eventNames, eventNames.exports);
var eventNamesExports = eventNames.exports;
var FunctionStateMap = { exports: {} };
var PlayerStates = { exports: {} };
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    BUFFERING: 3,
    ENDED: 0,
    PAUSED: 2,
    PLAYING: 1,
    UNSTARTED: -1,
    VIDEO_CUED: 5
  };
  module.exports = exports["default"];
})(PlayerStates, PlayerStates.exports);
var PlayerStatesExports = PlayerStates.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _PlayerStates = PlayerStatesExports;
  var _PlayerStates2 = _interopRequireDefault2(_PlayerStates);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  exports.default = {
    pauseVideo: {
      acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PAUSED],
      stateChangeRequired: false
    },
    playVideo: {
      acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING],
      stateChangeRequired: false
    },
    seekTo: {
      acceptableStates: [_PlayerStates2.default.ENDED, _PlayerStates2.default.PLAYING, _PlayerStates2.default.PAUSED],
      stateChangeRequired: true,
      // TRICKY: `seekTo` may not cause a state change if no buffering is
      // required.
      timeout: 3e3
    }
  };
  module.exports = exports["default"];
})(FunctionStateMap, FunctionStateMap.exports);
var FunctionStateMapExports = FunctionStateMap.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _debug = browserExports;
  var _debug2 = _interopRequireDefault2(_debug);
  var _functionNames = functionNamesExports;
  var _functionNames2 = _interopRequireDefault2(_functionNames);
  var _eventNames = eventNamesExports;
  var _eventNames2 = _interopRequireDefault2(_eventNames);
  var _FunctionStateMap = FunctionStateMapExports;
  var _FunctionStateMap2 = _interopRequireDefault2(_FunctionStateMap);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var debug2 = (0, _debug2.default)("youtube-player");
  var YouTubePlayer2 = {};
  YouTubePlayer2.proxyEvents = function(emitter) {
    var events = {};
    var _loop = function _loop2(eventName2) {
      var onEventName = "on" + eventName2.slice(0, 1).toUpperCase() + eventName2.slice(1);
      events[onEventName] = function(event) {
        debug2('event "%s"', onEventName, event);
        emitter.trigger(eventName2, event);
      };
    };
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = void 0;
    try {
      for (var _iterator = _eventNames2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var eventName = _step.value;
        _loop(eventName);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
    return events;
  };
  YouTubePlayer2.promisifyPlayer = function(playerAPIReady) {
    var strictState = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    var functions = {};
    var _loop2 = function _loop22(functionName2) {
      if (strictState && _FunctionStateMap2.default[functionName2]) {
        functions[functionName2] = function() {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return playerAPIReady.then(function(player) {
            var stateInfo = _FunctionStateMap2.default[functionName2];
            var playerState = player.getPlayerState();
            var value = player[functionName2].apply(player, args);
            if (stateInfo.stateChangeRequired || // eslint-disable-next-line no-extra-parens
            Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerState) === -1) {
              return new Promise(function(resolve) {
                var onPlayerStateChange = function onPlayerStateChange2() {
                  var playerStateAfterChange = player.getPlayerState();
                  var timeout = void 0;
                  if (typeof stateInfo.timeout === "number") {
                    timeout = setTimeout(function() {
                      player.removeEventListener("onStateChange", onPlayerStateChange2);
                      resolve();
                    }, stateInfo.timeout);
                  }
                  if (Array.isArray(stateInfo.acceptableStates) && stateInfo.acceptableStates.indexOf(playerStateAfterChange) !== -1) {
                    player.removeEventListener("onStateChange", onPlayerStateChange2);
                    clearTimeout(timeout);
                    resolve();
                  }
                };
                player.addEventListener("onStateChange", onPlayerStateChange);
              }).then(function() {
                return value;
              });
            }
            return value;
          });
        };
      } else {
        functions[functionName2] = function() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          return playerAPIReady.then(function(player) {
            return player[functionName2].apply(player, args);
          });
        };
      }
    };
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = void 0;
    try {
      for (var _iterator2 = _functionNames2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var functionName = _step2.value;
        _loop2(functionName);
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
    return functions;
  };
  exports.default = YouTubePlayer2;
  module.exports = exports["default"];
})(YouTubePlayer, YouTubePlayer.exports);
var YouTubePlayerExports = YouTubePlayer.exports;
(function(module, exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
  } : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var _sister = sister;
  var _sister2 = _interopRequireDefault2(_sister);
  var _loadYouTubeIframeApi = loadYouTubeIframeApiExports;
  var _loadYouTubeIframeApi2 = _interopRequireDefault2(_loadYouTubeIframeApi);
  var _YouTubePlayer = YouTubePlayerExports;
  var _YouTubePlayer2 = _interopRequireDefault2(_YouTubePlayer);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }
  var youtubeIframeAPI = void 0;
  exports.default = function(maybeElementId) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var strictState = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    var emitter = (0, _sister2.default)();
    if (!youtubeIframeAPI) {
      youtubeIframeAPI = (0, _loadYouTubeIframeApi2.default)(emitter);
    }
    if (options.events) {
      throw new Error("Event handlers cannot be overwritten.");
    }
    if (typeof maybeElementId === "string" && !document.getElementById(maybeElementId)) {
      throw new Error('Element "' + maybeElementId + '" does not exist.');
    }
    options.events = _YouTubePlayer2.default.proxyEvents(emitter);
    var playerAPIReady = new Promise(function(resolve) {
      if ((typeof maybeElementId === "undefined" ? "undefined" : _typeof2(maybeElementId)) === "object" && maybeElementId.playVideo instanceof Function) {
        var player = maybeElementId;
        resolve(player);
      } else {
        youtubeIframeAPI.then(function(YT) {
          var player2 = new YT.Player(maybeElementId, options);
          emitter.on("ready", function() {
            resolve(player2);
          });
          return null;
        });
      }
    });
    var playerApi = _YouTubePlayer2.default.promisifyPlayer(playerAPIReady, strictState);
    playerApi.on = emitter.on;
    playerApi.off = emitter.off;
    return playerApi;
  };
  module.exports = exports["default"];
})(dist, dist.exports);
var distExports = dist.exports;
const youTubePlayer = /* @__PURE__ */ getDefaultExportFromCjs(distExports);
var __defProp$3 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$3.call(b2, prop))
      __defNormalProp$3(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b2)) {
      if (__propIsEnum$3.call(b2, prop))
        __defNormalProp$3(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps$3 = (a2, b2) => __defProps$3(a2, __getOwnPropDescs$3(b2));
var __async$2 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
function shouldUpdateVideo(prevProps, props) {
  var _a, _b;
  if (prevProps.videoId !== props.videoId) {
    return true;
  }
  const prevVars = ((_a = prevProps.opts) == null ? void 0 : _a.playerVars) || {};
  const vars = ((_b = props.opts) == null ? void 0 : _b.playerVars) || {};
  return prevVars.start !== vars.start || prevVars.end !== vars.end;
}
function filterResetOptions(opts = {}) {
  return __spreadProps$3(__spreadValues$3({}, opts), {
    height: 0,
    width: 0,
    playerVars: __spreadProps$3(__spreadValues$3({}, opts.playerVars), {
      autoplay: 0,
      start: 0,
      end: 0
    })
  });
}
function shouldResetPlayer(prevProps, props) {
  return prevProps.videoId !== props.videoId || !isEqual(filterResetOptions(prevProps.opts), filterResetOptions(props.opts));
}
function shouldUpdatePlayer(prevProps, props) {
  var _a, _b, _c, _d;
  return prevProps.id !== props.id || prevProps.className !== props.className || ((_a = prevProps.opts) == null ? void 0 : _a.width) !== ((_b = props.opts) == null ? void 0 : _b.width) || ((_c = prevProps.opts) == null ? void 0 : _c.height) !== ((_d = props.opts) == null ? void 0 : _d.height) || prevProps.iframeClassName !== props.iframeClassName || prevProps.title !== props.title;
}
var defaultProps$1 = {
  videoId: "",
  id: "",
  className: "",
  iframeClassName: "",
  style: {},
  title: "",
  loading: void 0,
  opts: {},
  onReady: () => {
  },
  onError: () => {
  },
  onPlay: () => {
  },
  onPause: () => {
  },
  onEnd: () => {
  },
  onStateChange: () => {
  },
  onPlaybackRateChange: () => {
  },
  onPlaybackQualityChange: () => {
  }
};
var propTypes = {
  videoId: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  iframeClassName: PropTypes.string,
  style: PropTypes.object,
  title: PropTypes.string,
  loading: PropTypes.oneOf(["lazy", "eager"]),
  opts: PropTypes.objectOf(PropTypes.any),
  onReady: PropTypes.func,
  onError: PropTypes.func,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnd: PropTypes.func,
  onStateChange: PropTypes.func,
  onPlaybackRateChange: PropTypes.func,
  onPlaybackQualityChange: PropTypes.func
};
var _YouTube = class extends r$5.Component {
  constructor(props) {
    super(props);
    this.destroyPlayerPromise = void 0;
    this.onPlayerReady = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onReady) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerError = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onError) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerStateChange = (event) => {
      var _a, _b, _c, _d, _e2, _f, _g, _h;
      (_b = (_a = this.props).onStateChange) == null ? void 0 : _b.call(_a, event);
      switch (event.data) {
        case _YouTube.PlayerState.ENDED:
          (_d = (_c = this.props).onEnd) == null ? void 0 : _d.call(_c, event);
          break;
        case _YouTube.PlayerState.PLAYING:
          (_f = (_e2 = this.props).onPlay) == null ? void 0 : _f.call(_e2, event);
          break;
        case _YouTube.PlayerState.PAUSED:
          (_h = (_g = this.props).onPause) == null ? void 0 : _h.call(_g, event);
          break;
      }
    };
    this.onPlayerPlaybackRateChange = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onPlaybackRateChange) == null ? void 0 : _b.call(_a, event);
    };
    this.onPlayerPlaybackQualityChange = (event) => {
      var _a, _b;
      return (_b = (_a = this.props).onPlaybackQualityChange) == null ? void 0 : _b.call(_a, event);
    };
    this.destroyPlayer = () => {
      if (this.internalPlayer) {
        this.destroyPlayerPromise = this.internalPlayer.destroy().then(() => this.destroyPlayerPromise = void 0);
        return this.destroyPlayerPromise;
      }
      return Promise.resolve();
    };
    this.createPlayer = () => {
      if (typeof document === "undefined")
        return;
      if (this.destroyPlayerPromise) {
        this.destroyPlayerPromise.then(this.createPlayer);
        return;
      }
      const playerOpts = __spreadProps$3(__spreadValues$3({}, this.props.opts), {
        videoId: this.props.videoId
      });
      this.internalPlayer = youTubePlayer(this.container, playerOpts);
      this.internalPlayer.on("ready", this.onPlayerReady);
      this.internalPlayer.on("error", this.onPlayerError);
      this.internalPlayer.on("stateChange", this.onPlayerStateChange);
      this.internalPlayer.on("playbackRateChange", this.onPlayerPlaybackRateChange);
      this.internalPlayer.on("playbackQualityChange", this.onPlayerPlaybackQualityChange);
      if (this.props.title || this.props.loading) {
        this.internalPlayer.getIframe().then((iframe) => {
          if (this.props.title)
            iframe.setAttribute("title", this.props.title);
          if (this.props.loading)
            iframe.setAttribute("loading", this.props.loading);
        });
      }
    };
    this.resetPlayer = () => this.destroyPlayer().then(this.createPlayer);
    this.updatePlayer = () => {
      var _a;
      (_a = this.internalPlayer) == null ? void 0 : _a.getIframe().then((iframe) => {
        if (this.props.id)
          iframe.setAttribute("id", this.props.id);
        else
          iframe.removeAttribute("id");
        if (this.props.iframeClassName)
          iframe.setAttribute("class", this.props.iframeClassName);
        else
          iframe.removeAttribute("class");
        if (this.props.opts && this.props.opts.width)
          iframe.setAttribute("width", this.props.opts.width.toString());
        else
          iframe.removeAttribute("width");
        if (this.props.opts && this.props.opts.height)
          iframe.setAttribute("height", this.props.opts.height.toString());
        else
          iframe.removeAttribute("height");
        if (this.props.title)
          iframe.setAttribute("title", this.props.title);
        else
          iframe.setAttribute("title", "YouTube video player");
        if (this.props.loading)
          iframe.setAttribute("loading", this.props.loading);
        else
          iframe.removeAttribute("loading");
      });
    };
    this.getInternalPlayer = () => {
      return this.internalPlayer;
    };
    this.updateVideo = () => {
      var _a, _b, _c, _d;
      if (typeof this.props.videoId === "undefined" || this.props.videoId === null) {
        (_a = this.internalPlayer) == null ? void 0 : _a.stopVideo();
        return;
      }
      let autoplay = false;
      const opts = {
        videoId: this.props.videoId
      };
      if ((_b = this.props.opts) == null ? void 0 : _b.playerVars) {
        autoplay = this.props.opts.playerVars.autoplay === 1;
        if ("start" in this.props.opts.playerVars) {
          opts.startSeconds = this.props.opts.playerVars.start;
        }
        if ("end" in this.props.opts.playerVars) {
          opts.endSeconds = this.props.opts.playerVars.end;
        }
      }
      if (autoplay) {
        (_c = this.internalPlayer) == null ? void 0 : _c.loadVideoById(opts);
        return;
      }
      (_d = this.internalPlayer) == null ? void 0 : _d.cueVideoById(opts);
    };
    this.refContainer = (container) => {
      this.container = container;
    };
    this.container = null;
    this.internalPlayer = null;
  }
  componentDidMount() {
    this.createPlayer();
  }
  componentDidUpdate(prevProps) {
    return __async$2(this, null, function* () {
      if (shouldUpdatePlayer(prevProps, this.props)) {
        this.updatePlayer();
      }
      if (shouldResetPlayer(prevProps, this.props)) {
        yield this.resetPlayer();
      }
      if (shouldUpdateVideo(prevProps, this.props)) {
        this.updateVideo();
      }
    });
  }
  componentWillUnmount() {
    this.destroyPlayer();
  }
  render() {
    return /* @__PURE__ */ r$5.createElement("div", {
      className: this.props.className,
      style: this.props.style
    }, /* @__PURE__ */ r$5.createElement("div", {
      id: this.props.id,
      className: this.props.iframeClassName,
      ref: this.refContainer
    }));
  }
};
var YouTube = _YouTube;
YouTube.propTypes = propTypes;
YouTube.defaultProps = defaultProps$1;
YouTube.PlayerState = {
  UNSTARTED: -1,
  ENDED: 0,
  PLAYING: 1,
  PAUSED: 2,
  BUFFERING: 3,
  CUED: 5
};
var YouTube_default = YouTube;
const VideoCard = ({ video: video2, iframeClassName }) => {
  const iframeWrapper = reactExports.useRef(null);
  const iframe = reactExports.useRef(null);
  const [params] = useSearchParams();
  const startsForm = reactExports.useMemo(() => {
    const time = params.get("t");
    return time ? parseInt(time) : 0;
  }, [params]);
  const onStateChange = () => {
  };
  return /* @__PURE__ */ jsx("div", { ref: iframeWrapper, children: video2 && /* @__PURE__ */ jsx(
    YouTube_default,
    {
      iframeClassName,
      videoId: video2.videoId,
      title: video2.title,
      ref: iframe,
      onStateChange,
      opts: {
        playerVars: {
          start: video2.startsFrom || startsForm,
          autoplay: 0,
          rel: 0
        }
      }
    }
  ) });
};
const summary = "/assets/summaryReezOnly-W58xF-YV.png";
const Summary = ({}) => {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: summary }) });
};
const SearchIcon = () => /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
  /* @__PURE__ */ jsx(
    "path",
    {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M6.80524 15.7137C5.9404 14.8306 5.35381 13.7131 5.11824 12.4997C4.88072 11.2829 5.00269 10.0233 5.46924 8.87469C5.93181 7.73253 6.72153 6.75251 7.73924 6.05769C9.80409 4.64744 12.5224 4.64744 14.5872 6.05769C15.605 6.75251 16.3947 7.73253 16.8572 8.87469C17.3238 10.0233 17.4458 11.2829 17.2082 12.4997C16.9727 13.7131 16.3861 14.8306 15.5212 15.7137C14.3759 16.889 12.8044 17.5519 11.1632 17.5519C9.52213 17.5519 7.95059 16.889 6.80524 15.7137V15.7137Z",
      stroke: "#ACB5B8",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }
  ),
  /* @__PURE__ */ jsx(
    "path",
    {
      d: "M11.17 7.20286C10.7581 7.2465 10.4596 7.6158 10.5032 8.02771C10.5468 8.43962 10.9161 8.73815 11.3281 8.69451L11.17 7.20286ZM13.0214 9.69207C13.1828 10.0735 13.623 10.2518 14.0044 10.0903C14.3859 9.92886 14.5642 9.48873 14.4027 9.10729L13.0214 9.69207ZM16.1419 15.0869C15.8487 14.7942 15.3739 14.7947 15.0812 15.0878C14.7886 15.381 14.789 15.8558 15.0822 16.1485L16.1419 15.0869ZM18.4702 19.5305C18.7633 19.8231 19.2382 19.8227 19.5308 19.5295C19.8235 19.2364 19.823 18.7615 19.5299 18.4689L18.4702 19.5305ZM11.3281 8.69451C12.0506 8.61795 12.7381 9.023 13.0214 9.69207L14.4027 9.10729C13.8619 7.82999 12.5493 7.0567 11.17 7.20286L11.3281 8.69451ZM15.0822 16.1485L18.4702 19.5305L19.5299 18.4689L16.1419 15.0869L15.0822 16.1485Z",
      fill: "#ACB5B8"
    }
  )
] });
const backIconWhite = "data:image/svg+xml,%3csvg%20width='18'%20height='28'%20viewBox='0%200%2018%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2014L1.49321%2013.4471L0.89008%2014L1.49321%2014.5529L2%2014ZM17%2014.75C17.4142%2014.75%2017.75%2014.4142%2017.75%2014C17.75%2013.5858%2017.4142%2013.25%2017%2013.25V14.75ZM7.49321%207.94713L1.49321%2013.4471L2.50679%2014.5529L8.50679%209.05287L7.49321%207.94713ZM1.49321%2014.5529L7.49321%2020.0529L8.50679%2018.9471L2.50679%2013.4471L1.49321%2014.5529ZM2%2014.75H17V13.25H2V14.75Z'%20fill='white'/%3e%3c/svg%3e";
function useLatest(value) {
  const latestValue = reactExports.useRef(value);
  reactExports.useLayoutEffect(() => {
    latestValue.current = value;
  });
  return latestValue;
}
function r$3(r2, e2, n2) {
  var i2, t2, o2;
  void 0 === n2 && (n2 = {});
  var a2 = null != (i2 = n2.isImmediate) && i2, u2 = null != (t2 = n2.callback) && t2, c2 = n2.maxWait, v2 = Date.now(), l2 = [];
  function f2() {
    if (void 0 !== c2) {
      var r3 = Date.now() - v2;
      if (r3 + e2 >= c2) return c2 - r3;
    }
    return e2;
  }
  var d2 = function() {
    var e3 = [].slice.call(arguments), n3 = this;
    return new Promise(function(i3, t3) {
      var c3 = a2 && void 0 === o2;
      if (void 0 !== o2 && clearTimeout(o2), o2 = setTimeout(function() {
        if (o2 = void 0, v2 = Date.now(), !a2) {
          var i4 = r2.apply(n3, e3);
          u2 && u2(i4), l2.forEach(function(r3) {
            return (0, r3.resolve)(i4);
          }), l2 = [];
        }
      }, f2()), c3) {
        var d3 = r2.apply(n3, e3);
        return u2 && u2(d3), i3(d3);
      }
      l2.push({ resolve: i3, reject: t3 });
    });
  };
  return d2.cancel = function(r3) {
    void 0 !== o2 && clearTimeout(o2), l2.forEach(function(e3) {
      return (0, e3.reject)(r3);
    }), l2 = [];
  }, d2;
}
function useDebounce(callback, ms2) {
  const memoCallback = useLatest(callback);
  return reactExports.useMemo(
    () => r$3((...args) => {
      memoCallback.current(...args);
    }, ms2),
    [ms2, memoCallback]
  );
}
const InputSearchTimecodes = ({ getSearch }) => {
  const [, setIsFocused] = reactExports.useState(false);
  const [showBackButton, setShowBackButton] = reactExports.useState(false);
  const [param, setParam] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = reactExports.useRef(null);
  const search2 = param.get("search") || "";
  reactExports.useEffect(() => {
    var _a;
    const data2 = ((_a = searchInputRef.current) == null ? void 0 : _a.value) || "";
    if (data2) {
      getSearch(data2);
    }
  }, []);
  reactExports.useEffect(() => {
    var _a;
    if ((_a = location.state) == null ? void 0 : _a.fromSearch) {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [location]);
  const makeSearch = useDebounce(() => {
    var _a;
    const data2 = ((_a = searchInputRef.current) == null ? void 0 : _a.value) || "";
    if (data2) {
      setParam((prev2) => {
        prev2.set("search", data2);
        return prev2;
      });
      getSearch(data2);
    } else {
      setParam((prev2) => {
        prev2.delete("search");
        return prev2;
      });
    }
  }, 500);
  const handleBackClick = () => {
    navigate("/search");
  };
  const handleFocus = () => {
    setIsFocused(true);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  const onSearch = () => {
    makeSearch();
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-[10px] w-[526px] h-[40px]", children: [
    showBackButton && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: handleBackClick,
        className: "hover:bg-opacity-80 bg-[#514DF7] pl-3 w-[45px] h-[40px] rounded-[10px]",
        children: /* @__PURE__ */ jsx("img", { src: backIconWhite, alt: "backIcon" })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          defaultValue: search2,
          ref: searchInputRef,
          onChange: onSearch,
          onBlur: handleBlur,
          onFocus: handleFocus,
          placeholder: "Какие слова ищем в этом видео?",
          className: `${showBackButton ? "w-[490px]" : "w-[528px]"} focus:outline-none focus:border-light-gray self-end pl-[16px] pr-[45px] pt-[7px] pb-[7px] border-white-active border-[1px] rounded-[10px] text-[16px] text-dark-blue`
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute right-[2%] top-[25%]", children: /* @__PURE__ */ jsx(SearchIcon, {}) })
    ] })
  ] });
};
function n$3(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++) t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r$2(n2) {
  return !!n2 && !!n2[Q$1];
}
function t$3(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3) return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3) return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z$1;
  }(n2) || Array.isArray(n2) || !!n2[L$1] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L$1]) || s(n2) || v$3(n2));
}
function e$2(t2) {
  return r$2(t2) || n$3(23, t2), t2[Q$1].t;
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e2) {
    t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q$1];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v$3(n2) ? 3 : 0;
}
function u$3(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f$1(n2, r2, t2) {
  var e2 = o(n2);
  2 === e2 ? n2.set(r2, t2) : 3 === e2 ? n2.add(t2) : n2[r2] = t2;
}
function c$1(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X$1 && n2 instanceof Map;
}
function v$3(n2) {
  return q$4 && n2 instanceof Set;
}
function p$3(n2) {
  return n2.o || n2.t;
}
function l$2(n2) {
  if (Array.isArray(n2)) return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q$1];
  for (var t2 = nn(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d$1(n2, e2) {
  return void 0 === e2 && (e2 = false), y$1(n2) || r$2(n2) || !t$3(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$3), Object.freeze(n2), e2 && i(n2, function(n3, r2) {
    return d$1(r2, true);
  }, true)), n2;
}
function h$3() {
  n$3(2);
}
function y$1(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b$2(r2) {
  var t2 = tn[r2];
  return t2 || n$3(18, r2), t2;
}
function m$2(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _$1() {
  return U$1;
}
function j$1(n2, r2) {
  r2 && (b$2("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function g$2(n2) {
  O(n2), n2.p.forEach(S$1), n2.p = null;
}
function O(n2) {
  n2 === U$1 && (U$1 = n2.l);
}
function w$2(n2) {
  return U$1 = { p: [], l: U$1, h: n2, m: true, _: 0 };
}
function S$1(n2) {
  var r2 = n2[Q$1];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.g = true;
}
function P$1(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e2.h.O || b$2("ES5").S(e2, r2, o2), o2 ? (i2[Q$1].P && (g$2(e2), n$3(4)), t$3(r2) && (r2 = M$1(e2, r2), e2.l || x$1(e2, r2)), e2.u && b$2("Patches").M(i2[Q$1].t, r2, e2.u, e2.s)) : r2 = M$1(e2, i2, []), g$2(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H$1 ? r2 : void 0;
}
function M$1(n2, r2, t2) {
  if (y$1(r2)) return r2;
  var e2 = r2[Q$1];
  if (!e2) return i(r2, function(i2, o3) {
    return A(n2, e2, r2, i2, o3, t2);
  }, true), r2;
  if (e2.A !== n2) return r2;
  if (!e2.P) return x$1(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l$2(e2.k) : e2.o, u2 = o2, a2 = false;
    3 === e2.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r3, i2) {
      return A(n2, e2, o2, r3, i2, t2, a2);
    }), x$1(n2, o2, false), t2 && n2.u && b$2("Patches").N(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A(e2, i2, o2, a2, c2, s2, v2) {
  if (r$2(c2)) {
    var p2 = M$1(e2, c2, s2 && i2 && 3 !== i2.i && !u$3(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f$1(o2, a2, p2), !r$2(p2)) return;
    e2.m = false;
  } else v2 && o2.add(c2);
  if (t$3(c2) && !y$1(c2)) {
    if (!e2.h.D && e2._ < 1) return;
    M$1(e2, c2), i2 && i2.A.l || x$1(e2, c2);
  }
}
function x$1(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d$1(r2, t2);
}
function z$1(n2, r2) {
  var t2 = n2[Q$1];
  return (t2 ? p$3(t2) : n2)[r2];
}
function I$1(n2, r2) {
  if (r2 in n2) for (var t2 = Object.getPrototypeOf(n2); t2; ) {
    var e2 = Object.getOwnPropertyDescriptor(t2, r2);
    if (e2) return e2;
    t2 = Object.getPrototypeOf(t2);
  }
}
function k$3(n2) {
  n2.P || (n2.P = true, n2.l && k$3(n2.l));
}
function E$1(n2) {
  n2.o || (n2.o = l$2(n2.t));
}
function N$1(n2, r2, t2) {
  var e2 = s(r2) ? b$2("MapSet").F(r2, t2) : v$3(r2) ? b$2("MapSet").T(r2, t2) : n2.O ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _$1(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en;
    t3 && (i2 = [e3], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b$2("ES5").J(r2, t2);
  return (t2 ? t2.A : _$1()).p.push(e2), e2;
}
function R(e2) {
  return r$2(e2) || n$3(22, e2), function n2(r2) {
    if (!t$3(r2)) return r2;
    var e3, u2 = r2[Q$1], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b$2("ES5").K(u2))) return u2.t;
      u2.I = true, e3 = D$1(r2, c2), u2.I = false;
    } else e3 = D$1(r2, c2);
    return i(e3, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f$1(e3, r3, n2(t2));
    }), 3 === c2 ? new Set(e3) : e3;
  }(e2);
}
function D$1(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l$2(n2);
}
function F$1() {
  function t2(n2, r2) {
    var t3 = s2[n2];
    return t3 ? t3.enumerable = r2 : s2[n2] = t3 = { configurable: true, enumerable: r2, get: function() {
      var r3 = this[Q$1];
      return en.get(r3, n2);
    }, set: function(r3) {
      var t4 = this[Q$1];
      en.set(t4, n2, r3);
    } }, t3;
  }
  function e2(n2) {
    for (var r2 = n2.length - 1; r2 >= 0; r2--) {
      var t3 = n2[r2][Q$1];
      if (!t3.P) switch (t3.i) {
        case 5:
          a2(t3) && k$3(t3);
          break;
        case 4:
          o2(t3) && k$3(t3);
      }
    }
  }
  function o2(n2) {
    for (var r2 = n2.t, t3 = n2.k, e3 = nn(t3), i2 = e3.length - 1; i2 >= 0; i2--) {
      var o3 = e3[i2];
      if (o3 !== Q$1) {
        var a3 = r2[o3];
        if (void 0 === a3 && !u$3(r2, o3)) return true;
        var f3 = t3[o3], s3 = f3 && f3[Q$1];
        if (s3 ? s3.t !== a3 : !c$1(f3, a3)) return true;
      }
    }
    var v2 = !!r2[Q$1];
    return e3.length !== nn(r2).length + (v2 ? 0 : 1);
  }
  function a2(n2) {
    var r2 = n2.k;
    if (r2.length !== n2.t.length) return true;
    var t3 = Object.getOwnPropertyDescriptor(r2, r2.length - 1);
    if (t3 && !t3.get) return true;
    for (var e3 = 0; e3 < r2.length; e3++) if (!r2.hasOwnProperty(e3)) return true;
    return false;
  }
  var s2 = {};
  m$2("ES5", { J: function(n2, r2) {
    var e3 = Array.isArray(n2), i2 = function(n3, r3) {
      if (n3) {
        for (var e4 = Array(r3.length), i3 = 0; i3 < r3.length; i3++) Object.defineProperty(e4, "" + i3, t2(i3, true));
        return e4;
      }
      var o4 = rn(r3);
      delete o4[Q$1];
      for (var u2 = nn(o4), a3 = 0; a3 < u2.length; a3++) {
        var f3 = u2[a3];
        o4[f3] = t2(f3, n3 || !!o4[f3].enumerable);
      }
      return Object.create(Object.getPrototypeOf(r3), o4);
    }(e3, n2), o3 = { i: e3 ? 5 : 4, A: r2 ? r2.A : _$1(), P: false, I: false, R: {}, l: r2, t: n2, k: i2, o: null, g: false, C: false };
    return Object.defineProperty(i2, Q$1, { value: o3, writable: true }), i2;
  }, S: function(n2, t3, o3) {
    o3 ? r$2(t3) && t3[Q$1].A === n2 && e2(n2.p) : (n2.u && function n3(r2) {
      if (r2 && "object" == typeof r2) {
        var t4 = r2[Q$1];
        if (t4) {
          var e3 = t4.t, o4 = t4.k, f3 = t4.R, c2 = t4.i;
          if (4 === c2) i(o4, function(r3) {
            r3 !== Q$1 && (void 0 !== e3[r3] || u$3(e3, r3) ? f3[r3] || n3(o4[r3]) : (f3[r3] = true, k$3(t4)));
          }), i(e3, function(n4) {
            void 0 !== o4[n4] || u$3(o4, n4) || (f3[n4] = false, k$3(t4));
          });
          else if (5 === c2) {
            if (a2(t4) && (k$3(t4), f3.length = true), o4.length < e3.length) for (var s3 = o4.length; s3 < e3.length; s3++) f3[s3] = false;
            else for (var v2 = e3.length; v2 < o4.length; v2++) f3[v2] = true;
            for (var p2 = Math.min(o4.length, e3.length), l2 = 0; l2 < p2; l2++) o4.hasOwnProperty(l2) || (f3[l2] = true), void 0 === f3[l2] && n3(o4[l2]);
          }
        }
      }
    }(n2.p[0]), e2(n2.p));
  }, K: function(n2) {
    return 4 === n2.i ? o2(n2) : a2(n2);
  } });
}
function T$1() {
  function e2(n2) {
    if (!t$3(n2)) return n2;
    if (Array.isArray(n2)) return n2.map(e2);
    if (s(n2)) return new Map(Array.from(n2.entries()).map(function(n3) {
      return [n3[0], e2(n3[1])];
    }));
    if (v$3(n2)) return new Set(Array.from(n2).map(e2));
    var r2 = Object.create(Object.getPrototypeOf(n2));
    for (var i2 in n2) r2[i2] = e2(n2[i2]);
    return u$3(n2, L$1) && (r2[L$1] = n2[L$1]), r2;
  }
  function f2(n2) {
    return r$2(n2) ? e2(n2) : n2;
  }
  var c2 = "add";
  m$2("Patches", { $: function(r2, t2) {
    return t2.forEach(function(t3) {
      for (var i2 = t3.path, u2 = t3.op, f3 = r2, s2 = 0; s2 < i2.length - 1; s2++) {
        var v2 = o(f3), p2 = i2[s2];
        "string" != typeof p2 && "number" != typeof p2 && (p2 = "" + p2), 0 !== v2 && 1 !== v2 || "__proto__" !== p2 && "constructor" !== p2 || n$3(24), "function" == typeof f3 && "prototype" === p2 && n$3(24), "object" != typeof (f3 = a(f3, p2)) && n$3(15, i2.join("/"));
      }
      var l2 = o(f3), d2 = e2(t3.value), h2 = i2[i2.length - 1];
      switch (u2) {
        case "replace":
          switch (l2) {
            case 2:
              return f3.set(h2, d2);
            case 3:
              n$3(16);
            default:
              return f3[h2] = d2;
          }
        case c2:
          switch (l2) {
            case 1:
              return "-" === h2 ? f3.push(d2) : f3.splice(h2, 0, d2);
            case 2:
              return f3.set(h2, d2);
            case 3:
              return f3.add(d2);
            default:
              return f3[h2] = d2;
          }
        case "remove":
          switch (l2) {
            case 1:
              return f3.splice(h2, 1);
            case 2:
              return f3.delete(h2);
            case 3:
              return f3.delete(t3.value);
            default:
              return delete f3[h2];
          }
        default:
          n$3(17, u2);
      }
    }), r2;
  }, N: function(n2, r2, t2, e3) {
    switch (n2.i) {
      case 0:
      case 4:
      case 2:
        return function(n3, r3, t3, e4) {
          var o2 = n3.t, s2 = n3.o;
          i(n3.R, function(n4, i2) {
            var v2 = a(o2, n4), p2 = a(s2, n4), l2 = i2 ? u$3(o2, n4) ? "replace" : c2 : "remove";
            if (v2 !== p2 || "replace" !== l2) {
              var d2 = r3.concat(n4);
              t3.push("remove" === l2 ? { op: l2, path: d2 } : { op: l2, path: d2, value: p2 }), e4.push(l2 === c2 ? { op: "remove", path: d2 } : "remove" === l2 ? { op: c2, path: d2, value: f2(v2) } : { op: "replace", path: d2, value: f2(v2) });
            }
          });
        }(n2, r2, t2, e3);
      case 5:
      case 1:
        return function(n3, r3, t3, e4) {
          var i2 = n3.t, o2 = n3.R, u2 = n3.o;
          if (u2.length < i2.length) {
            var a2 = [u2, i2];
            i2 = a2[0], u2 = a2[1];
            var s2 = [e4, t3];
            t3 = s2[0], e4 = s2[1];
          }
          for (var v2 = 0; v2 < i2.length; v2++) if (o2[v2] && u2[v2] !== i2[v2]) {
            var p2 = r3.concat([v2]);
            t3.push({ op: "replace", path: p2, value: f2(u2[v2]) }), e4.push({ op: "replace", path: p2, value: f2(i2[v2]) });
          }
          for (var l2 = i2.length; l2 < u2.length; l2++) {
            var d2 = r3.concat([l2]);
            t3.push({ op: c2, path: d2, value: f2(u2[l2]) });
          }
          i2.length < u2.length && e4.push({ op: "replace", path: r3.concat(["length"]), value: i2.length });
        }(n2, r2, t2, e3);
      case 3:
        return function(n3, r3, t3, e4) {
          var i2 = n3.t, o2 = n3.o, u2 = 0;
          i2.forEach(function(n4) {
            if (!o2.has(n4)) {
              var i3 = r3.concat([u2]);
              t3.push({ op: "remove", path: i3, value: n4 }), e4.unshift({ op: c2, path: i3, value: n4 });
            }
            u2++;
          }), u2 = 0, o2.forEach(function(n4) {
            if (!i2.has(n4)) {
              var o3 = r3.concat([u2]);
              t3.push({ op: c2, path: o3, value: n4 }), e4.unshift({ op: "remove", path: o3, value: n4 });
            }
            u2++;
          });
        }(n2, r2, t2, e3);
    }
  }, M: function(n2, r2, t2, e3) {
    t2.push({ op: "replace", path: [], value: r2 === H$1 ? void 0 : r2 }), e3.push({ op: "replace", path: [], value: n2 });
  } });
}
function C$1() {
  function r2(n2, r3) {
    function t2() {
      this.constructor = n2;
    }
    a2(n2, r3), n2.prototype = (t2.prototype = r3.prototype, new t2());
  }
  function e2(n2) {
    n2.o || (n2.R = /* @__PURE__ */ new Map(), n2.o = new Map(n2.t));
  }
  function o2(n2) {
    n2.o || (n2.o = /* @__PURE__ */ new Set(), n2.t.forEach(function(r3) {
      if (t$3(r3)) {
        var e3 = N$1(n2.A.h, r3, n2);
        n2.p.set(r3, e3), n2.o.add(e3);
      } else n2.o.add(r3);
    }));
  }
  function u2(r3) {
    r3.g && n$3(3, JSON.stringify(p$3(r3)));
  }
  var a2 = function(n2, r3) {
    return (a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n3, r4) {
      n3.__proto__ = r4;
    } || function(n3, r4) {
      for (var t2 in r4) r4.hasOwnProperty(t2) && (n3[t2] = r4[t2]);
    })(n2, r3);
  }, f2 = function() {
    function n2(n3, r3) {
      return this[Q$1] = { i: 2, l: r3, A: r3 ? r3.A : _$1(), P: false, I: false, o: void 0, R: void 0, t: n3, k: this, C: false, g: false }, this;
    }
    r2(n2, Map);
    var o3 = n2.prototype;
    return Object.defineProperty(o3, "size", { get: function() {
      return p$3(this[Q$1]).size;
    } }), o3.has = function(n3) {
      return p$3(this[Q$1]).has(n3);
    }, o3.set = function(n3, r3) {
      var t2 = this[Q$1];
      return u2(t2), p$3(t2).has(n3) && p$3(t2).get(n3) === r3 || (e2(t2), k$3(t2), t2.R.set(n3, true), t2.o.set(n3, r3), t2.R.set(n3, true)), this;
    }, o3.delete = function(n3) {
      if (!this.has(n3)) return false;
      var r3 = this[Q$1];
      return u2(r3), e2(r3), k$3(r3), r3.t.has(n3) ? r3.R.set(n3, false) : r3.R.delete(n3), r3.o.delete(n3), true;
    }, o3.clear = function() {
      var n3 = this[Q$1];
      u2(n3), p$3(n3).size && (e2(n3), k$3(n3), n3.R = /* @__PURE__ */ new Map(), i(n3.t, function(r3) {
        n3.R.set(r3, false);
      }), n3.o.clear());
    }, o3.forEach = function(n3, r3) {
      var t2 = this;
      p$3(this[Q$1]).forEach(function(e3, i2) {
        n3.call(r3, t2.get(i2), i2, t2);
      });
    }, o3.get = function(n3) {
      var r3 = this[Q$1];
      u2(r3);
      var i2 = p$3(r3).get(n3);
      if (r3.I || !t$3(i2)) return i2;
      if (i2 !== r3.t.get(n3)) return i2;
      var o4 = N$1(r3.A.h, i2, r3);
      return e2(r3), r3.o.set(n3, o4), o4;
    }, o3.keys = function() {
      return p$3(this[Q$1]).keys();
    }, o3.values = function() {
      var n3, r3 = this, t2 = this.keys();
      return (n3 = {})[V$1] = function() {
        return r3.values();
      }, n3.next = function() {
        var n4 = t2.next();
        return n4.done ? n4 : { done: false, value: r3.get(n4.value) };
      }, n3;
    }, o3.entries = function() {
      var n3, r3 = this, t2 = this.keys();
      return (n3 = {})[V$1] = function() {
        return r3.entries();
      }, n3.next = function() {
        var n4 = t2.next();
        if (n4.done) return n4;
        var e3 = r3.get(n4.value);
        return { done: false, value: [n4.value, e3] };
      }, n3;
    }, o3[V$1] = function() {
      return this.entries();
    }, n2;
  }(), c2 = function() {
    function n2(n3, r3) {
      return this[Q$1] = { i: 3, l: r3, A: r3 ? r3.A : _$1(), P: false, I: false, o: void 0, t: n3, k: this, p: /* @__PURE__ */ new Map(), g: false, C: false }, this;
    }
    r2(n2, Set);
    var t2 = n2.prototype;
    return Object.defineProperty(t2, "size", { get: function() {
      return p$3(this[Q$1]).size;
    } }), t2.has = function(n3) {
      var r3 = this[Q$1];
      return u2(r3), r3.o ? !!r3.o.has(n3) || !(!r3.p.has(n3) || !r3.o.has(r3.p.get(n3))) : r3.t.has(n3);
    }, t2.add = function(n3) {
      var r3 = this[Q$1];
      return u2(r3), this.has(n3) || (o2(r3), k$3(r3), r3.o.add(n3)), this;
    }, t2.delete = function(n3) {
      if (!this.has(n3)) return false;
      var r3 = this[Q$1];
      return u2(r3), o2(r3), k$3(r3), r3.o.delete(n3) || !!r3.p.has(n3) && r3.o.delete(r3.p.get(n3));
    }, t2.clear = function() {
      var n3 = this[Q$1];
      u2(n3), p$3(n3).size && (o2(n3), k$3(n3), n3.o.clear());
    }, t2.values = function() {
      var n3 = this[Q$1];
      return u2(n3), o2(n3), n3.o.values();
    }, t2.entries = function() {
      var n3 = this[Q$1];
      return u2(n3), o2(n3), n3.o.entries();
    }, t2.keys = function() {
      return this.values();
    }, t2[V$1] = function() {
      return this.values();
    }, t2.forEach = function(n3, r3) {
      for (var t3 = this.values(), e3 = t3.next(); !e3.done; ) n3.call(r3, e3.value, e3.value, this), e3 = t3.next();
    }, n2;
  }();
  m$2("MapSet", { F: function(n2, r3) {
    return new f2(n2, r3);
  }, T: function(n2, r3) {
    return new c2(n2, r3);
  } });
}
function J$1() {
  F$1(), C$1(), T$1();
}
function K$1(n2) {
  return n2;
}
function $$1(n2) {
  return n2;
}
var G$1, U$1, W$1 = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X$1 = "undefined" != typeof Map, q$4 = "undefined" != typeof Set, B$1 = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H$1 = W$1 ? Symbol.for("immer-nothing") : ((G$1 = {})["immer-nothing"] = true, G$1), L$1 = W$1 ? Symbol.for("immer-draftable") : "__$immer_draftable", Q$1 = W$1 ? Symbol.for("immer-state") : "__$immer_state", V$1 = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", Z$1 = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en = { get: function(n2, r2) {
  if (r2 === Q$1) return n2;
  var e2 = p$3(n2);
  if (!u$3(e2, r2)) return function(n3, r3, t2) {
    var e3, i3 = I$1(r3, t2);
    return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
  }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t$3(i2) ? i2 : i2 === z$1(n2.t, r2) ? (E$1(n2), n2.o[r2] = N$1(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p$3(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$3(n2));
}, set: function(n2, r2, t2) {
  var e2 = I$1(p$3(n2), r2);
  if (null == e2 ? void 0 : e2.set) return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z$1(p$3(n2), r2), o2 = null == i2 ? void 0 : i2[Q$1];
    if (o2 && o2.t === t2) return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c$1(t2, i2) && (void 0 !== t2 || u$3(n2.t, r2))) return true;
    E$1(n2), k$3(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z$1(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E$1(n2), k$3(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p$3(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n$3(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n$3(12);
} }, on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e2) {
  return en.set.call(this, r2[0], t2, e2, r2[0]);
};
var un = function() {
  function e2(r2) {
    var e3 = this;
    this.O = B$1, this.D = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++) e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n$3(6), void 0 !== o2 && "function" != typeof o2 && n$3(7), t$3(r3)) {
        var c2 = w$2(e3), s2 = N$1(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? g$2(c2) : O(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j$1(c2, o2), P$1(n2, c2);
        }, function(n2) {
          throw g$2(c2), n2;
        }) : (j$1(c2, o2), P$1(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H$1 && (f2 = void 0), e3.D && d$1(f2, true), o2) {
          var p2 = [], l2 = [];
          b$2("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n$3(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2) return function(r4) {
        for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++) i4[o3 - 1] = arguments[o3];
        return e3.produceWithPatches(r4, function(r5) {
          return n2.apply(void 0, [r5].concat(i4));
        });
      };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t$3(e3) || n$3(8), r$2(e3) && (e3 = R(e3));
    var i3 = w$2(this), o2 = N$1(this, e3, void 0);
    return o2[Q$1].C = true, O(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q$1];
    var i3 = e3.A;
    return j$1(i3, t2), P$1(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B$1 && n$3(20), this.O = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b$2("Patches").$;
    return r$2(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un(), fn = an.produce, cn = an.produceWithPatches.bind(an), sn = an.setAutoFreeze.bind(an), vn = an.setUseProxies.bind(an), pn = an.applyPatches.bind(an), ln = an.createDraft.bind(an), dn = an.finishDraft.bind(an);
const createNextState2 = fn;
const immer_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Immer: un,
  applyPatches: pn,
  castDraft: K$1,
  castImmutable: $$1,
  createDraft: ln,
  current: R,
  default: createNextState2,
  enableAllPlugins: J$1,
  enableES5: F$1,
  enableMapSet: C$1,
  enablePatches: T$1,
  finishDraft: dn,
  freeze: d$1,
  immerable: L$1,
  isDraft: r$2,
  isDraftable: t$3,
  nothing: H$1,
  original: e$2,
  produce: fn,
  produceWithPatches: cn,
  setAutoFreeze: sn,
  setUseProxies: vn
}, Symbol.toStringTag, { value: "Module" }));
function _typeof$5(o2) {
  "@babel/helpers - typeof";
  return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$5(o2);
}
function toPrimitive(t2, r2) {
  if ("object" != _typeof$5(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != _typeof$5(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function toPropertyKey(t2) {
  var i2 = toPrimitive(t2, "string");
  return "symbol" == _typeof$5(i2) ? i2 : i2 + "";
}
function _defineProperty$5(e2, r2, t2) {
  return (r2 = toPropertyKey(r2)) in e2 ? Object.defineProperty(e2, r2, {
    value: t2,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e2[r2] = t2, e2;
}
function ownKeys$5(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$5(Object(t2), true).forEach(function(r3) {
      _defineProperty$5(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$5(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or use the non-minified dev environment for full errors. ";
}
var $$observable = function() {
  return typeof Symbol === "function" && Symbol.observable || "@@observable";
}();
var randomString = function randomString2() {
  return Math.random().toString(36).substring(7).split("").join(".");
};
var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};
function isPlainObject$2(obj) {
  if (typeof obj !== "object" || obj === null) return false;
  var proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(obj) === proto;
}
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;
  if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") {
    throw new Error(formatProdErrorMessage(0));
  }
  if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
    enhancer = preloadedState;
    preloadedState = void 0;
  }
  if (typeof enhancer !== "undefined") {
    if (typeof enhancer !== "function") {
      throw new Error(formatProdErrorMessage(1));
    }
    return enhancer(createStore)(reducer, preloadedState);
  }
  if (typeof reducer !== "function") {
    throw new Error(formatProdErrorMessage(2));
  }
  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  function getState() {
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(3));
    }
    return currentState;
  }
  function subscribe(listener2) {
    if (typeof listener2 !== "function") {
      throw new Error(formatProdErrorMessage(4));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(5));
    }
    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener2);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }
      if (isDispatching) {
        throw new Error(formatProdErrorMessage(6));
      }
      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index2 = nextListeners.indexOf(listener2);
      nextListeners.splice(index2, 1);
      currentListeners = null;
    };
  }
  function dispatch(action) {
    if (!isPlainObject$2(action)) {
      throw new Error(formatProdErrorMessage(7));
    }
    if (typeof action.type === "undefined") {
      throw new Error(formatProdErrorMessage(8));
    }
    if (isDispatching) {
      throw new Error(formatProdErrorMessage(9));
    }
    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }
    var listeners = currentListeners = nextListeners;
    for (var i2 = 0; i2 < listeners.length; i2++) {
      var listener2 = listeners[i2];
      listener2();
    }
    return action;
  }
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== "function") {
      throw new Error(formatProdErrorMessage(10));
    }
    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  function observable() {
    var _ref;
    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe2(observer) {
        if (typeof observer !== "object" || observer === null) {
          throw new Error(formatProdErrorMessage(11));
        }
        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }
        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe
        };
      }
    }, _ref[$$observable] = function() {
      return this;
    }, _ref;
  }
  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch,
    subscribe,
    getState,
    replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}
var legacy_createStore = createStore;
function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function(key) {
    var reducer = reducers[key];
    var initialState2 = reducer(void 0, {
      type: ActionTypes.INIT
    });
    if (typeof initialState2 === "undefined") {
      throw new Error(formatProdErrorMessage(12));
    }
    if (typeof reducer(void 0, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === "undefined") {
      throw new Error(formatProdErrorMessage(13));
    }
  });
}
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i2 = 0; i2 < reducerKeys.length; i2++) {
    var key = reducerKeys[i2];
    if (typeof reducers[key] === "function") {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);
  var shapeAssertionError;
  try {
    assertReducerShape(finalReducers);
  } catch (e2) {
    shapeAssertionError = e2;
  }
  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }
    if (shapeAssertionError) {
      throw shapeAssertionError;
    }
    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === "undefined") {
        action && action.type;
        throw new Error(formatProdErrorMessage(14));
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
    return hasChanged ? nextState : state;
  };
}
function bindActionCreator(actionCreator, dispatch) {
  return function() {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === "function") {
    return bindActionCreator(actionCreators, dispatch);
  }
  if (typeof actionCreators !== "object" || actionCreators === null) {
    throw new Error(formatProdErrorMessage(16));
  }
  var boundActionCreators = {};
  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === "function") {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }
  if (funcs.length === 0) {
    return function(arg) {
      return arg;
    };
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(function(a2, b2) {
    return function() {
      return a2(b2.apply(void 0, arguments));
    };
  });
}
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }
  return function(createStore2) {
    return function() {
      var store2 = createStore2.apply(void 0, arguments);
      var _dispatch = function dispatch() {
        throw new Error(formatProdErrorMessage(15));
      };
      var middlewareAPI = {
        getState: store2.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function(middleware2) {
        return middleware2(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store2.dispatch);
      return _objectSpread2(_objectSpread2({}, store2), {}, {
        dispatch: _dispatch
      });
    };
  };
}
var NOT_FOUND = "NOT_FOUND";
function createSingletonCache(equals) {
  var entry;
  return {
    get: function get(key) {
      if (entry && equals(entry.key, key)) {
        return entry.value;
      }
      return NOT_FOUND;
    },
    put: function put(key, value) {
      entry = {
        key,
        value
      };
    },
    getEntries: function getEntries() {
      return entry ? [entry] : [];
    },
    clear: function clear() {
      entry = void 0;
    }
  };
}
function createLruCache(maxSize, equals) {
  var entries = [];
  function get(key) {
    var cacheIndex = entries.findIndex(function(entry2) {
      return equals(key, entry2.key);
    });
    if (cacheIndex > -1) {
      var entry = entries[cacheIndex];
      if (cacheIndex > 0) {
        entries.splice(cacheIndex, 1);
        entries.unshift(entry);
      }
      return entry.value;
    }
    return NOT_FOUND;
  }
  function put(key, value) {
    if (get(key) === NOT_FOUND) {
      entries.unshift({
        key,
        value
      });
      if (entries.length > maxSize) {
        entries.pop();
      }
    }
  }
  function getEntries() {
    return entries;
  }
  function clear() {
    entries = [];
  }
  return {
    get,
    put,
    getEntries,
    clear
  };
}
var defaultEqualityCheck = function defaultEqualityCheck2(a2, b2) {
  return a2 === b2;
};
function createCacheKeyComparator(equalityCheck) {
  return function areArgumentsShallowlyEqual(prev2, next2) {
    if (prev2 === null || next2 === null || prev2.length !== next2.length) {
      return false;
    }
    var length2 = prev2.length;
    for (var i2 = 0; i2 < length2; i2++) {
      if (!equalityCheck(prev2[i2], next2[i2])) {
        return false;
      }
    }
    return true;
  };
}
function defaultMemoize(func, equalityCheckOrOptions) {
  var providedOptions = typeof equalityCheckOrOptions === "object" ? equalityCheckOrOptions : {
    equalityCheck: equalityCheckOrOptions
  };
  var _providedOptions$equa = providedOptions.equalityCheck, equalityCheck = _providedOptions$equa === void 0 ? defaultEqualityCheck : _providedOptions$equa, _providedOptions$maxS = providedOptions.maxSize, maxSize = _providedOptions$maxS === void 0 ? 1 : _providedOptions$maxS, resultEqualityCheck = providedOptions.resultEqualityCheck;
  var comparator = createCacheKeyComparator(equalityCheck);
  var cache2 = maxSize === 1 ? createSingletonCache(comparator) : createLruCache(maxSize, comparator);
  function memoized() {
    var value = cache2.get(arguments);
    if (value === NOT_FOUND) {
      value = func.apply(null, arguments);
      if (resultEqualityCheck) {
        var entries = cache2.getEntries();
        var matchingEntry = entries.find(function(entry) {
          return resultEqualityCheck(entry.value, value);
        });
        if (matchingEntry) {
          value = matchingEntry.value;
        }
      }
      cache2.put(arguments, value);
    }
    return value;
  }
  memoized.clearCache = function() {
    return cache2.clear();
  };
  return memoized;
}
function getDependencies(funcs) {
  var dependencies = Array.isArray(funcs[0]) ? funcs[0] : funcs;
  if (!dependencies.every(function(dep) {
    return typeof dep === "function";
  })) {
    var dependencyTypes = dependencies.map(function(dep) {
      return typeof dep === "function" ? "function " + (dep.name || "unnamed") + "()" : typeof dep;
    }).join(", ");
    throw new Error("createSelector expects all input-selectors to be functions, but received the following types: [" + dependencyTypes + "]");
  }
  return dependencies;
}
function createSelectorCreator(memoize2) {
  for (var _len = arguments.length, memoizeOptionsFromArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    memoizeOptionsFromArgs[_key - 1] = arguments[_key];
  }
  var createSelector2 = function createSelector3() {
    for (var _len2 = arguments.length, funcs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      funcs[_key2] = arguments[_key2];
    }
    var _recomputations = 0;
    var _lastResult;
    var directlyPassedOptions = {
      memoizeOptions: void 0
    };
    var resultFunc = funcs.pop();
    if (typeof resultFunc === "object") {
      directlyPassedOptions = resultFunc;
      resultFunc = funcs.pop();
    }
    if (typeof resultFunc !== "function") {
      throw new Error("createSelector expects an output function after the inputs, but received: [" + typeof resultFunc + "]");
    }
    var _directlyPassedOption = directlyPassedOptions, _directlyPassedOption2 = _directlyPassedOption.memoizeOptions, memoizeOptions = _directlyPassedOption2 === void 0 ? memoizeOptionsFromArgs : _directlyPassedOption2;
    var finalMemoizeOptions = Array.isArray(memoizeOptions) ? memoizeOptions : [memoizeOptions];
    var dependencies = getDependencies(funcs);
    var memoizedResultFunc = memoize2.apply(void 0, [function recomputationWrapper() {
      _recomputations++;
      return resultFunc.apply(null, arguments);
    }].concat(finalMemoizeOptions));
    var selector = memoize2(function dependenciesChecker() {
      var params = [];
      var length2 = dependencies.length;
      for (var i2 = 0; i2 < length2; i2++) {
        params.push(dependencies[i2].apply(null, arguments));
      }
      _lastResult = memoizedResultFunc.apply(null, params);
      return _lastResult;
    });
    Object.assign(selector, {
      resultFunc,
      memoizedResultFunc,
      dependencies,
      lastResult: function lastResult() {
        return _lastResult;
      },
      recomputations: function recomputations() {
        return _recomputations;
      },
      resetRecomputations: function resetRecomputations() {
        return _recomputations = 0;
      }
    });
    return selector;
  };
  return createSelector2;
}
var createSelector = /* @__PURE__ */ createSelectorCreator(defaultMemoize);
var createStructuredSelector = function createStructuredSelector2(selectors, selectorCreator) {
  if (selectorCreator === void 0) {
    selectorCreator = createSelector;
  }
  if (typeof selectors !== "object") {
    throw new Error("createStructuredSelector expects first argument to be an object " + ("where each property is a selector, instead received a " + typeof selectors));
  }
  var objectKeys = Object.keys(selectors);
  var resultSelector = selectorCreator(
    // @ts-ignore
    objectKeys.map(function(key) {
      return selectors[key];
    }),
    function() {
      for (var _len3 = arguments.length, values = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        values[_key3] = arguments[_key3];
      }
      return values.reduce(function(composition, value, index2) {
        composition[objectKeys[index2]] = value;
        return composition;
      }, {});
    }
  );
  return resultSelector;
};
const es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  createSelector,
  createSelectorCreator,
  createStructuredSelector,
  defaultEqualityCheck,
  defaultMemoize
}, Symbol.toStringTag, { value: "Module" }));
function createThunkMiddleware(extraArgument) {
  var middleware2 = function middleware3(_ref) {
    var dispatch = _ref.dispatch, getState = _ref.getState;
    return function(next2) {
      return function(action) {
        if (typeof action === "function") {
          return action(dispatch, getState, extraArgument);
        }
        return next2(action);
      };
    };
  };
  return middleware2;
}
var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;
var __extends = /* @__PURE__ */ function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d22, b22) {
      d22.__proto__ = b22;
    } || function(d22, b22) {
      for (var p2 in b22) if (Object.prototype.hasOwnProperty.call(b22, p2)) d22[p2] = b22[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __generator$1 = function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (_2) try {
      if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
      if (y2 = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y2 = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t2[1]) {
            _2.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _2.label < t2[2]) {
            _2.label = t2[2];
            _2.ops.push(op);
            break;
          }
          if (t2[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e2) {
      op = [6, e2];
      y2 = 0;
    } finally {
      f2 = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray$2 = function(to, from2) {
  for (var i2 = 0, il2 = from2.length, j2 = to.length; i2 < il2; i2++, j2++)
    to[j2] = from2[i2];
  return to;
};
var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = function(obj, key, value) {
  return key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues$2 = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$2.call(b2, prop))
      __defNormalProp$2(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$2)
    for (var _i = 0, _c = __getOwnPropSymbols$2(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum$2.call(b2, prop))
        __defNormalProp$2(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps$2 = function(a2, b2) {
  return __defProps$2(a2, __getOwnPropDescs$2(b2));
};
var __async$1 = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var createDraftSafeSelector = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  var selector = createSelector.apply(void 0, args);
  var wrappedSelector = function(value) {
    var rest = [];
    for (var _i2 = 1; _i2 < arguments.length; _i2++) {
      rest[_i2 - 1] = arguments[_i2];
    }
    return selector.apply(void 0, __spreadArray$2([r$2(value) ? R(value) : value], rest));
  };
  return wrappedSelector;
};
var composeWithDevTools = typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length === 0)
    return void 0;
  if (typeof arguments[0] === "object")
    return compose;
  return compose.apply(null, arguments);
};
function isPlainObject$1(value) {
  if (typeof value !== "object" || value === null)
    return false;
  var proto = Object.getPrototypeOf(value);
  if (proto === null)
    return true;
  var baseProto = proto;
  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }
  return proto === baseProto;
}
var hasMatchFunction = function(v2) {
  return v2 && typeof v2.match === "function";
};
function createAction(type, prepareAction) {
  function actionCreator() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    if (prepareAction) {
      var prepared = prepareAction.apply(void 0, args);
      if (!prepared) {
        throw new Error("prepareAction did not return an object");
      }
      return __spreadValues$2(__spreadValues$2({
        type,
        payload: prepared.payload
      }, "meta" in prepared && { meta: prepared.meta }), "error" in prepared && { error: prepared.error });
    }
    return { type, payload: args[0] };
  }
  actionCreator.toString = function() {
    return "" + type;
  };
  actionCreator.type = type;
  actionCreator.match = function(action) {
    return action.type === type;
  };
  return actionCreator;
}
function isAction(action) {
  return isPlainObject$1(action) && "type" in action;
}
function isActionCreator(action) {
  return typeof action === "function" && "type" in action && hasMatchFunction(action);
}
function isFSA(action) {
  return isAction(action) && typeof action.type === "string" && Object.keys(action).every(isValidKey);
}
function isValidKey(key) {
  return ["type", "payload", "error", "meta"].indexOf(key) > -1;
}
function getType(actionCreator) {
  return "" + actionCreator;
}
function createActionCreatorInvariantMiddleware(options) {
  {
    return function() {
      return function(next2) {
        return function(action) {
          return next2(action);
        };
      };
    };
  }
}
var MiddlewareArray = (
  /** @class */
  function(_super) {
    __extends(MiddlewareArray2, _super);
    function MiddlewareArray2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, MiddlewareArray2.prototype);
      return _this;
    }
    Object.defineProperty(MiddlewareArray2, Symbol.species, {
      get: function() {
        return MiddlewareArray2;
      },
      enumerable: false,
      configurable: true
    });
    MiddlewareArray2.prototype.concat = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    MiddlewareArray2.prototype.prepend = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray$2([void 0], arr[0].concat(this))))();
      }
      return new (MiddlewareArray2.bind.apply(MiddlewareArray2, __spreadArray$2([void 0], arr.concat(this))))();
    };
    return MiddlewareArray2;
  }(Array)
);
var EnhancerArray = (
  /** @class */
  function(_super) {
    __extends(EnhancerArray2, _super);
    function EnhancerArray2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var _this = _super.apply(this, args) || this;
      Object.setPrototypeOf(_this, EnhancerArray2.prototype);
      return _this;
    }
    Object.defineProperty(EnhancerArray2, Symbol.species, {
      get: function() {
        return EnhancerArray2;
      },
      enumerable: false,
      configurable: true
    });
    EnhancerArray2.prototype.concat = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      return _super.prototype.concat.apply(this, arr);
    };
    EnhancerArray2.prototype.prepend = function() {
      var arr = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
      }
      if (arr.length === 1 && Array.isArray(arr[0])) {
        return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray$2([void 0], arr[0].concat(this))))();
      }
      return new (EnhancerArray2.bind.apply(EnhancerArray2, __spreadArray$2([void 0], arr.concat(this))))();
    };
    return EnhancerArray2;
  }(Array)
);
function freezeDraftable(val) {
  return t$3(val) ? createNextState2(val, function() {
  }) : val;
}
function isImmutableDefault(value) {
  return typeof value !== "object" || value == null || Object.isFrozen(value);
}
function createImmutableStateInvariantMiddleware(options) {
  {
    return function() {
      return function(next2) {
        return function(action) {
          return next2(action);
        };
      };
    };
  }
}
function isPlain(val) {
  var type = typeof val;
  return val == null || type === "string" || type === "boolean" || type === "number" || Array.isArray(val) || isPlainObject$1(val);
}
function findNonSerializableValue(value, path2, isSerializable, getEntries, ignoredPaths, cache2) {
  if (path2 === void 0) {
    path2 = "";
  }
  if (isSerializable === void 0) {
    isSerializable = isPlain;
  }
  if (ignoredPaths === void 0) {
    ignoredPaths = [];
  }
  var foundNestedSerializable;
  if (!isSerializable(value)) {
    return {
      keyPath: path2 || "<root>",
      value
    };
  }
  if (typeof value !== "object" || value === null) {
    return false;
  }
  if (cache2 == null ? void 0 : cache2.has(value))
    return false;
  var entries = getEntries != null ? getEntries(value) : Object.entries(value);
  var hasIgnoredPaths = ignoredPaths.length > 0;
  var _loop_2 = function(key2, nestedValue2) {
    var nestedPath = path2 ? path2 + "." + key2 : key2;
    if (hasIgnoredPaths) {
      var hasMatches = ignoredPaths.some(function(ignored) {
        if (ignored instanceof RegExp) {
          return ignored.test(nestedPath);
        }
        return nestedPath === ignored;
      });
      if (hasMatches) {
        return "continue";
      }
    }
    if (!isSerializable(nestedValue2)) {
      return { value: {
        keyPath: nestedPath,
        value: nestedValue2
      } };
    }
    if (typeof nestedValue2 === "object") {
      foundNestedSerializable = findNonSerializableValue(nestedValue2, nestedPath, isSerializable, getEntries, ignoredPaths, cache2);
      if (foundNestedSerializable) {
        return { value: foundNestedSerializable };
      }
    }
  };
  for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
    var _c = entries_1[_i], key = _c[0], nestedValue = _c[1];
    var state_2 = _loop_2(key, nestedValue);
    if (typeof state_2 === "object")
      return state_2.value;
  }
  if (cache2 && isNestedFrozen(value))
    cache2.add(value);
  return false;
}
function isNestedFrozen(value) {
  if (!Object.isFrozen(value))
    return false;
  for (var _i = 0, _c = Object.values(value); _i < _c.length; _i++) {
    var nestedValue = _c[_i];
    if (typeof nestedValue !== "object" || nestedValue === null)
      continue;
    if (!isNestedFrozen(nestedValue))
      return false;
  }
  return true;
}
function createSerializableStateInvariantMiddleware(options) {
  {
    return function() {
      return function(next2) {
        return function(action) {
          return next2(action);
        };
      };
    };
  }
}
function isBoolean(x2) {
  return typeof x2 === "boolean";
}
function curryGetDefaultMiddleware() {
  return function curriedGetDefaultMiddleware(options) {
    return getDefaultMiddleware(options);
  };
}
function getDefaultMiddleware(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = options.thunk, thunk$1 = _c === void 0 ? true : _c;
  options.immutableCheck;
  options.serializableCheck;
  options.actionCreatorCheck;
  var middlewareArray = new MiddlewareArray();
  if (thunk$1) {
    if (isBoolean(thunk$1)) {
      middlewareArray.push(thunk);
    } else {
      middlewareArray.push(thunk.withExtraArgument(thunk$1.extraArgument));
    }
  }
  return middlewareArray;
}
var IS_PRODUCTION = true;
function configureStore(options) {
  var curriedGetDefaultMiddleware = curryGetDefaultMiddleware();
  var _c = options || {}, _d = _c.reducer, reducer = _d === void 0 ? void 0 : _d, _e2 = _c.middleware, middleware2 = _e2 === void 0 ? curriedGetDefaultMiddleware() : _e2, _f = _c.devTools, devTools = _f === void 0 ? true : _f, _g = _c.preloadedState, preloadedState = _g === void 0 ? void 0 : _g, _h = _c.enhancers, enhancers = _h === void 0 ? void 0 : _h;
  var rootReducer;
  if (typeof reducer === "function") {
    rootReducer = reducer;
  } else if (isPlainObject$1(reducer)) {
    rootReducer = combineReducers(reducer);
  } else {
    throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
  }
  var finalMiddleware = middleware2;
  if (typeof finalMiddleware === "function") {
    finalMiddleware = finalMiddleware(curriedGetDefaultMiddleware);
  }
  var middlewareEnhancer = applyMiddleware.apply(void 0, finalMiddleware);
  var finalCompose = compose;
  if (devTools) {
    finalCompose = composeWithDevTools(__spreadValues$2({
      trace: !IS_PRODUCTION
    }, typeof devTools === "object" && devTools));
  }
  var defaultEnhancers = new EnhancerArray(middlewareEnhancer);
  var storeEnhancers = defaultEnhancers;
  if (Array.isArray(enhancers)) {
    storeEnhancers = __spreadArray$2([middlewareEnhancer], enhancers);
  } else if (typeof enhancers === "function") {
    storeEnhancers = enhancers(defaultEnhancers);
  }
  var composedEnhancer = finalCompose.apply(void 0, storeEnhancers);
  return createStore(rootReducer, preloadedState, composedEnhancer);
}
function executeReducerBuilderCallback(builderCallback) {
  var actionsMap = {};
  var actionMatchers = [];
  var defaultCaseReducer;
  var builder = {
    addCase: function(typeOrActionCreator, reducer) {
      var type = typeof typeOrActionCreator === "string" ? typeOrActionCreator : typeOrActionCreator.type;
      if (!type) {
        throw new Error("`builder.addCase` cannot be called with an empty action type");
      }
      if (type in actionsMap) {
        throw new Error("`builder.addCase` cannot be called with two reducers for the same action type");
      }
      actionsMap[type] = reducer;
      return builder;
    },
    addMatcher: function(matcher, reducer) {
      actionMatchers.push({ matcher, reducer });
      return builder;
    },
    addDefaultCase: function(reducer) {
      defaultCaseReducer = reducer;
      return builder;
    }
  };
  builderCallback(builder);
  return [actionsMap, actionMatchers, defaultCaseReducer];
}
function isStateFunction(x2) {
  return typeof x2 === "function";
}
function createReducer(initialState2, mapOrBuilderCallback, actionMatchers, defaultCaseReducer) {
  if (actionMatchers === void 0) {
    actionMatchers = [];
  }
  var _c = typeof mapOrBuilderCallback === "function" ? executeReducerBuilderCallback(mapOrBuilderCallback) : [mapOrBuilderCallback, actionMatchers, defaultCaseReducer], actionsMap = _c[0], finalActionMatchers = _c[1], finalDefaultCaseReducer = _c[2];
  var getInitialState;
  if (isStateFunction(initialState2)) {
    getInitialState = function() {
      return freezeDraftable(initialState2());
    };
  } else {
    var frozenInitialState_1 = freezeDraftable(initialState2);
    getInitialState = function() {
      return frozenInitialState_1;
    };
  }
  function reducer(state, action) {
    if (state === void 0) {
      state = getInitialState();
    }
    var caseReducers = __spreadArray$2([
      actionsMap[action.type]
    ], finalActionMatchers.filter(function(_c2) {
      var matcher = _c2.matcher;
      return matcher(action);
    }).map(function(_c2) {
      var reducer2 = _c2.reducer;
      return reducer2;
    }));
    if (caseReducers.filter(function(cr) {
      return !!cr;
    }).length === 0) {
      caseReducers = [finalDefaultCaseReducer];
    }
    return caseReducers.reduce(function(previousState, caseReducer) {
      if (caseReducer) {
        if (r$2(previousState)) {
          var draft = previousState;
          var result = caseReducer(draft, action);
          if (result === void 0) {
            return previousState;
          }
          return result;
        } else if (!t$3(previousState)) {
          var result = caseReducer(previousState, action);
          if (result === void 0) {
            if (previousState === null) {
              return previousState;
            }
            throw Error("A case reducer on a non-draftable value must not return undefined");
          }
          return result;
        } else {
          return createNextState2(previousState, function(draft2) {
            return caseReducer(draft2, action);
          });
        }
      }
      return previousState;
    }, state);
  }
  reducer.getInitialState = getInitialState;
  return reducer;
}
function getType2(slice2, actionKey) {
  return slice2 + "/" + actionKey;
}
function createSlice(options) {
  var name = options.name;
  if (!name) {
    throw new Error("`name` is a required option for createSlice");
  }
  if (typeof process !== "undefined" && false) {
    if (options.initialState === void 0) {
      console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    }
  }
  var initialState2 = typeof options.initialState == "function" ? options.initialState : freezeDraftable(options.initialState);
  var reducers = options.reducers || {};
  var reducerNames = Object.keys(reducers);
  var sliceCaseReducersByName = {};
  var sliceCaseReducersByType = {};
  var actionCreators = {};
  reducerNames.forEach(function(reducerName) {
    var maybeReducerWithPrepare = reducers[reducerName];
    var type = getType2(name, reducerName);
    var caseReducer;
    var prepareCallback;
    if ("reducer" in maybeReducerWithPrepare) {
      caseReducer = maybeReducerWithPrepare.reducer;
      prepareCallback = maybeReducerWithPrepare.prepare;
    } else {
      caseReducer = maybeReducerWithPrepare;
    }
    sliceCaseReducersByName[reducerName] = caseReducer;
    sliceCaseReducersByType[type] = caseReducer;
    actionCreators[reducerName] = prepareCallback ? createAction(type, prepareCallback) : createAction(type);
  });
  function buildReducer() {
    var _c = typeof options.extraReducers === "function" ? executeReducerBuilderCallback(options.extraReducers) : [options.extraReducers], _d = _c[0], extraReducers = _d === void 0 ? {} : _d, _e2 = _c[1], actionMatchers = _e2 === void 0 ? [] : _e2, _f = _c[2], defaultCaseReducer = _f === void 0 ? void 0 : _f;
    var finalCaseReducers = __spreadValues$2(__spreadValues$2({}, extraReducers), sliceCaseReducersByType);
    return createReducer(initialState2, function(builder) {
      for (var key in finalCaseReducers) {
        builder.addCase(key, finalCaseReducers[key]);
      }
      for (var _i = 0, actionMatchers_1 = actionMatchers; _i < actionMatchers_1.length; _i++) {
        var m2 = actionMatchers_1[_i];
        builder.addMatcher(m2.matcher, m2.reducer);
      }
      if (defaultCaseReducer) {
        builder.addDefaultCase(defaultCaseReducer);
      }
    });
  }
  var _reducer;
  return {
    name,
    reducer: function(state, action) {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer(state, action);
    },
    actions: actionCreators,
    caseReducers: sliceCaseReducersByName,
    getInitialState: function() {
      if (!_reducer)
        _reducer = buildReducer();
      return _reducer.getInitialState();
    }
  };
}
function getInitialEntityState() {
  return {
    ids: [],
    entities: {}
  };
}
function createInitialStateFactory() {
  function getInitialState(additionalState) {
    if (additionalState === void 0) {
      additionalState = {};
    }
    return Object.assign(getInitialEntityState(), additionalState);
  }
  return { getInitialState };
}
function createSelectorsFactory() {
  function getSelectors(selectState) {
    var selectIds = function(state) {
      return state.ids;
    };
    var selectEntities = function(state) {
      return state.entities;
    };
    var selectAll = createDraftSafeSelector(selectIds, selectEntities, function(ids, entities) {
      return ids.map(function(id2) {
        return entities[id2];
      });
    });
    var selectId = function(_2, id2) {
      return id2;
    };
    var selectById = function(entities, id2) {
      return entities[id2];
    };
    var selectTotal = createDraftSafeSelector(selectIds, function(ids) {
      return ids.length;
    });
    if (!selectState) {
      return {
        selectIds,
        selectEntities,
        selectAll,
        selectTotal,
        selectById: createDraftSafeSelector(selectEntities, selectId, selectById)
      };
    }
    var selectGlobalizedEntities = createDraftSafeSelector(selectState, selectEntities);
    return {
      selectIds: createDraftSafeSelector(selectState, selectIds),
      selectEntities: selectGlobalizedEntities,
      selectAll: createDraftSafeSelector(selectState, selectAll),
      selectTotal: createDraftSafeSelector(selectState, selectTotal),
      selectById: createDraftSafeSelector(selectGlobalizedEntities, selectId, selectById)
    };
  }
  return { getSelectors };
}
function createSingleArgumentStateOperator(mutator) {
  var operator = createStateOperator(function(_2, state) {
    return mutator(state);
  });
  return function operation(state) {
    return operator(state, void 0);
  };
}
function createStateOperator(mutator) {
  return function operation(state, arg) {
    function isPayloadActionArgument(arg2) {
      return isFSA(arg2);
    }
    var runMutator = function(draft) {
      if (isPayloadActionArgument(arg)) {
        mutator(arg.payload, draft);
      } else {
        mutator(arg, draft);
      }
    };
    if (r$2(state)) {
      runMutator(state);
      return state;
    } else {
      return createNextState2(state, runMutator);
    }
  };
}
function selectIdValue(entity, selectId) {
  var key = selectId(entity);
  return key;
}
function ensureEntitiesArray(entities) {
  if (!Array.isArray(entities)) {
    entities = Object.values(entities);
  }
  return entities;
}
function splitAddedUpdatedEntities(newEntities, selectId, state) {
  newEntities = ensureEntitiesArray(newEntities);
  var added = [];
  var updated = [];
  for (var _i = 0, newEntities_1 = newEntities; _i < newEntities_1.length; _i++) {
    var entity = newEntities_1[_i];
    var id2 = selectIdValue(entity, selectId);
    if (id2 in state.entities) {
      updated.push({ id: id2, changes: entity });
    } else {
      added.push(entity);
    }
  }
  return [added, updated];
}
function createUnsortedStateAdapter(selectId) {
  function addOneMutably(entity, state) {
    var key = selectIdValue(entity, selectId);
    if (key in state.entities) {
      return;
    }
    state.ids.push(key);
    state.entities[key] = entity;
  }
  function addManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    for (var _i = 0, newEntities_2 = newEntities; _i < newEntities_2.length; _i++) {
      var entity = newEntities_2[_i];
      addOneMutably(entity, state);
    }
  }
  function setOneMutably(entity, state) {
    var key = selectIdValue(entity, selectId);
    if (!(key in state.entities)) {
      state.ids.push(key);
    }
    state.entities[key] = entity;
  }
  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    for (var _i = 0, newEntities_3 = newEntities; _i < newEntities_3.length; _i++) {
      var entity = newEntities_3[_i];
      setOneMutably(entity, state);
    }
  }
  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.ids = [];
    state.entities = {};
    addManyMutably(newEntities, state);
  }
  function removeOneMutably(key, state) {
    return removeManyMutably([key], state);
  }
  function removeManyMutably(keys, state) {
    var didMutate = false;
    keys.forEach(function(key) {
      if (key in state.entities) {
        delete state.entities[key];
        didMutate = true;
      }
    });
    if (didMutate) {
      state.ids = state.ids.filter(function(id2) {
        return id2 in state.entities;
      });
    }
  }
  function removeAllMutably(state) {
    Object.assign(state, {
      ids: [],
      entities: {}
    });
  }
  function takeNewKey(keys, update, state) {
    var original2 = state.entities[update.id];
    var updated = Object.assign({}, original2, update.changes);
    var newKey = selectIdValue(updated, selectId);
    var hasNewKey = newKey !== update.id;
    if (hasNewKey) {
      keys[update.id] = newKey;
      delete state.entities[update.id];
    }
    state.entities[newKey] = updated;
    return hasNewKey;
  }
  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }
  function updateManyMutably(updates, state) {
    var newKeys = {};
    var updatesPerEntity = {};
    updates.forEach(function(update) {
      if (update.id in state.entities) {
        updatesPerEntity[update.id] = {
          id: update.id,
          changes: __spreadValues$2(__spreadValues$2({}, updatesPerEntity[update.id] ? updatesPerEntity[update.id].changes : null), update.changes)
        };
      }
    });
    updates = Object.values(updatesPerEntity);
    var didMutateEntities = updates.length > 0;
    if (didMutateEntities) {
      var didMutateIds = updates.filter(function(update) {
        return takeNewKey(newKeys, update, state);
      }).length > 0;
      if (didMutateIds) {
        state.ids = Object.keys(state.entities);
      }
    }
  }
  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }
  function upsertManyMutably(newEntities, state) {
    var _c = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c[0], updated = _c[1];
    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }
  return {
    removeAll: createSingleArgumentStateOperator(removeAllMutably),
    addOne: createStateOperator(addOneMutably),
    addMany: createStateOperator(addManyMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    updateOne: createStateOperator(updateOneMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    upsertMany: createStateOperator(upsertManyMutably),
    removeOne: createStateOperator(removeOneMutably),
    removeMany: createStateOperator(removeManyMutably)
  };
}
function createSortedStateAdapter(selectId, sort) {
  var _c = createUnsortedStateAdapter(selectId), removeOne = _c.removeOne, removeMany = _c.removeMany, removeAll = _c.removeAll;
  function addOneMutably(entity, state) {
    return addManyMutably([entity], state);
  }
  function addManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    var models = newEntities.filter(function(model) {
      return !(selectIdValue(model, selectId) in state.entities);
    });
    if (models.length !== 0) {
      merge(models, state);
    }
  }
  function setOneMutably(entity, state) {
    return setManyMutably([entity], state);
  }
  function setManyMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    if (newEntities.length !== 0) {
      merge(newEntities, state);
    }
  }
  function setAllMutably(newEntities, state) {
    newEntities = ensureEntitiesArray(newEntities);
    state.entities = {};
    state.ids = [];
    addManyMutably(newEntities, state);
  }
  function updateOneMutably(update, state) {
    return updateManyMutably([update], state);
  }
  function updateManyMutably(updates, state) {
    var appliedUpdates = false;
    for (var _i = 0, updates_1 = updates; _i < updates_1.length; _i++) {
      var update = updates_1[_i];
      var entity = state.entities[update.id];
      if (!entity) {
        continue;
      }
      appliedUpdates = true;
      Object.assign(entity, update.changes);
      var newId = selectId(entity);
      if (update.id !== newId) {
        delete state.entities[update.id];
        state.entities[newId] = entity;
      }
    }
    if (appliedUpdates) {
      resortEntities(state);
    }
  }
  function upsertOneMutably(entity, state) {
    return upsertManyMutably([entity], state);
  }
  function upsertManyMutably(newEntities, state) {
    var _c2 = splitAddedUpdatedEntities(newEntities, selectId, state), added = _c2[0], updated = _c2[1];
    updateManyMutably(updated, state);
    addManyMutably(added, state);
  }
  function areArraysEqual(a2, b2) {
    if (a2.length !== b2.length) {
      return false;
    }
    for (var i2 = 0; i2 < a2.length && i2 < b2.length; i2++) {
      if (a2[i2] === b2[i2]) {
        continue;
      }
      return false;
    }
    return true;
  }
  function merge(models, state) {
    models.forEach(function(model) {
      state.entities[selectId(model)] = model;
    });
    resortEntities(state);
  }
  function resortEntities(state) {
    var allEntities = Object.values(state.entities);
    allEntities.sort(sort);
    var newSortedIds = allEntities.map(selectId);
    var ids = state.ids;
    if (!areArraysEqual(ids, newSortedIds)) {
      state.ids = newSortedIds;
    }
  }
  return {
    removeOne,
    removeMany,
    removeAll,
    addOne: createStateOperator(addOneMutably),
    updateOne: createStateOperator(updateOneMutably),
    upsertOne: createStateOperator(upsertOneMutably),
    setOne: createStateOperator(setOneMutably),
    setMany: createStateOperator(setManyMutably),
    setAll: createStateOperator(setAllMutably),
    addMany: createStateOperator(addManyMutably),
    updateMany: createStateOperator(updateManyMutably),
    upsertMany: createStateOperator(upsertManyMutably)
  };
}
function createEntityAdapter(options) {
  if (options === void 0) {
    options = {};
  }
  var _c = __spreadValues$2({
    sortComparer: false,
    selectId: function(instance) {
      return instance.id;
    }
  }, options), selectId = _c.selectId, sortComparer = _c.sortComparer;
  var stateFactory = createInitialStateFactory();
  var selectorsFactory = createSelectorsFactory();
  var stateAdapter = sortComparer ? createSortedStateAdapter(selectId, sortComparer) : createUnsortedStateAdapter(selectId);
  return __spreadValues$2(__spreadValues$2(__spreadValues$2({
    selectId,
    sortComparer
  }, stateFactory), selectorsFactory), stateAdapter);
}
var urlAlphabet = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW";
var nanoid = function(size) {
  if (size === void 0) {
    size = 21;
  }
  var id2 = "";
  var i2 = size;
  while (i2--) {
    id2 += urlAlphabet[Math.random() * 64 | 0];
  }
  return id2;
};
var commonProperties = [
  "name",
  "message",
  "stack",
  "code"
];
var RejectWithValue = (
  /** @class */
  /* @__PURE__ */ function() {
    function RejectWithValue2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return RejectWithValue2;
  }()
);
var FulfillWithMeta = (
  /** @class */
  /* @__PURE__ */ function() {
    function FulfillWithMeta2(payload, meta) {
      this.payload = payload;
      this.meta = meta;
    }
    return FulfillWithMeta2;
  }()
);
var miniSerializeError = function(value) {
  if (typeof value === "object" && value !== null) {
    var simpleError = {};
    for (var _i = 0, commonProperties_1 = commonProperties; _i < commonProperties_1.length; _i++) {
      var property = commonProperties_1[_i];
      if (typeof value[property] === "string") {
        simpleError[property] = value[property];
      }
    }
    return simpleError;
  }
  return { message: String(value) };
};
var createAsyncThunk = function() {
  function createAsyncThunk2(typePrefix, payloadCreator, options) {
    var fulfilled = createAction(typePrefix + "/fulfilled", function(payload, requestId, arg, meta) {
      return {
        payload,
        meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "fulfilled"
        })
      };
    });
    var pending = createAction(typePrefix + "/pending", function(requestId, arg, meta) {
      return {
        payload: void 0,
        meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
          arg,
          requestId,
          requestStatus: "pending"
        })
      };
    });
    var rejected = createAction(typePrefix + "/rejected", function(error, requestId, arg, payload, meta) {
      return {
        payload,
        error: (options && options.serializeError || miniSerializeError)(error || "Rejected"),
        meta: __spreadProps$2(__spreadValues$2({}, meta || {}), {
          arg,
          requestId,
          rejectedWithValue: !!payload,
          requestStatus: "rejected",
          aborted: (error == null ? void 0 : error.name) === "AbortError",
          condition: (error == null ? void 0 : error.name) === "ConditionError"
        })
      };
    });
    var AC = typeof AbortController !== "undefined" ? AbortController : (
      /** @class */
      function() {
        function class_1() {
          this.signal = {
            aborted: false,
            addEventListener: function() {
            },
            dispatchEvent: function() {
              return false;
            },
            onabort: function() {
            },
            removeEventListener: function() {
            },
            reason: void 0,
            throwIfAborted: function() {
            }
          };
        }
        class_1.prototype.abort = function() {
        };
        return class_1;
      }()
    );
    function actionCreator(arg) {
      return function(dispatch, getState, extra) {
        var requestId = (options == null ? void 0 : options.idGenerator) ? options.idGenerator(arg) : nanoid();
        var abortController = new AC();
        var abortReason;
        function abort(reason) {
          abortReason = reason;
          abortController.abort();
        }
        var promise2 = function() {
          return __async$1(this, null, function() {
            var _a, _b, finalAction, conditionResult, abortedPromise, err_1, skipDispatch;
            return __generator$1(this, function(_c) {
              switch (_c.label) {
                case 0:
                  _c.trys.push([0, 4, , 5]);
                  conditionResult = (_a = options == null ? void 0 : options.condition) == null ? void 0 : _a.call(options, arg, { getState, extra });
                  if (!isThenable(conditionResult)) return [3, 2];
                  return [4, conditionResult];
                case 1:
                  conditionResult = _c.sent();
                  _c.label = 2;
                case 2:
                  if (conditionResult === false || abortController.signal.aborted) {
                    throw {
                      name: "ConditionError",
                      message: "Aborted due to condition callback returning false."
                    };
                  }
                  abortedPromise = new Promise(function(_2, reject) {
                    return abortController.signal.addEventListener("abort", function() {
                      return reject({
                        name: "AbortError",
                        message: abortReason || "Aborted"
                      });
                    });
                  });
                  dispatch(pending(requestId, arg, (_b = options == null ? void 0 : options.getPendingMeta) == null ? void 0 : _b.call(options, { requestId, arg }, { getState, extra })));
                  return [4, Promise.race([
                    abortedPromise,
                    Promise.resolve(payloadCreator(arg, {
                      dispatch,
                      getState,
                      extra,
                      requestId,
                      signal: abortController.signal,
                      abort,
                      rejectWithValue: function(value, meta) {
                        return new RejectWithValue(value, meta);
                      },
                      fulfillWithValue: function(value, meta) {
                        return new FulfillWithMeta(value, meta);
                      }
                    })).then(function(result) {
                      if (result instanceof RejectWithValue) {
                        throw result;
                      }
                      if (result instanceof FulfillWithMeta) {
                        return fulfilled(result.payload, requestId, arg, result.meta);
                      }
                      return fulfilled(result, requestId, arg);
                    })
                  ])];
                case 3:
                  finalAction = _c.sent();
                  return [3, 5];
                case 4:
                  err_1 = _c.sent();
                  finalAction = err_1 instanceof RejectWithValue ? rejected(null, requestId, arg, err_1.payload, err_1.meta) : rejected(err_1, requestId, arg);
                  return [3, 5];
                case 5:
                  skipDispatch = options && !options.dispatchConditionRejection && rejected.match(finalAction) && finalAction.meta.condition;
                  if (!skipDispatch) {
                    dispatch(finalAction);
                  }
                  return [2, finalAction];
              }
            });
          });
        }();
        return Object.assign(promise2, {
          abort,
          requestId,
          arg,
          unwrap: function() {
            return promise2.then(unwrapResult);
          }
        });
      };
    }
    return Object.assign(actionCreator, {
      pending,
      rejected,
      fulfilled,
      typePrefix
    });
  }
  createAsyncThunk2.withTypes = function() {
    return createAsyncThunk2;
  };
  return createAsyncThunk2;
}();
function unwrapResult(action) {
  if (action.meta && action.meta.rejectedWithValue) {
    throw action.payload;
  }
  if (action.error) {
    throw action.error;
  }
  return action.payload;
}
function isThenable(value) {
  return value !== null && typeof value === "object" && typeof value.then === "function";
}
var matches = function(matcher, action) {
  if (hasMatchFunction(matcher)) {
    return matcher.match(action);
  } else {
    return matcher(action);
  }
};
function isAnyOf() {
  var matchers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    matchers[_i] = arguments[_i];
  }
  return function(action) {
    return matchers.some(function(matcher) {
      return matches(matcher, action);
    });
  };
}
function isAllOf() {
  var matchers = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    matchers[_i] = arguments[_i];
  }
  return function(action) {
    return matchers.every(function(matcher) {
      return matches(matcher, action);
    });
  };
}
function hasExpectedRequestMetadata(action, validStatus) {
  if (!action || !action.meta)
    return false;
  var hasValidRequestId = typeof action.meta.requestId === "string";
  var hasValidRequestStatus = validStatus.indexOf(action.meta.requestStatus) > -1;
  return hasValidRequestId && hasValidRequestStatus;
}
function isAsyncThunkArray(a2) {
  return typeof a2[0] === "function" && "pending" in a2[0] && "fulfilled" in a2[0] && "rejected" in a2[0];
}
function isPending() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["pending"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isPending()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = asyncThunks.map(function(asyncThunk) {
      return asyncThunk.pending;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isRejected() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["rejected"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejected()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = asyncThunks.map(function(asyncThunk) {
      return asyncThunk.rejected;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isRejectedWithValue() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  var hasFlag = function(action) {
    return action && action.meta && action.meta.rejectedWithValue;
  };
  if (asyncThunks.length === 0) {
    return function(action) {
      var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
      return combinedMatcher(action);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isRejectedWithValue()(asyncThunks[0]);
  }
  return function(action) {
    var combinedMatcher = isAllOf(isRejected.apply(void 0, asyncThunks), hasFlag);
    return combinedMatcher(action);
  };
}
function isFulfilled() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["fulfilled"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isFulfilled()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = asyncThunks.map(function(asyncThunk) {
      return asyncThunk.fulfilled;
    });
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
function isAsyncThunkAction() {
  var asyncThunks = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    asyncThunks[_i] = arguments[_i];
  }
  if (asyncThunks.length === 0) {
    return function(action) {
      return hasExpectedRequestMetadata(action, ["pending", "fulfilled", "rejected"]);
    };
  }
  if (!isAsyncThunkArray(asyncThunks)) {
    return isAsyncThunkAction()(asyncThunks[0]);
  }
  return function(action) {
    var matchers = [];
    for (var _i2 = 0, asyncThunks_1 = asyncThunks; _i2 < asyncThunks_1.length; _i2++) {
      var asyncThunk = asyncThunks_1[_i2];
      matchers.push(asyncThunk.pending, asyncThunk.rejected, asyncThunk.fulfilled);
    }
    var combinedMatcher = isAnyOf.apply(void 0, matchers);
    return combinedMatcher(action);
  };
}
var assertFunction = function(func, expected) {
  if (typeof func !== "function") {
    throw new TypeError(expected + " is not a function");
  }
};
var noop = function() {
};
var catchRejection = function(promise2, onError) {
  if (onError === void 0) {
    onError = noop;
  }
  promise2.catch(onError);
  return promise2;
};
var addAbortSignalListener = function(abortSignal, callback) {
  abortSignal.addEventListener("abort", callback, { once: true });
  return function() {
    return abortSignal.removeEventListener("abort", callback);
  };
};
var abortControllerWithReason = function(abortController, reason) {
  var signal = abortController.signal;
  if (signal.aborted) {
    return;
  }
  if (!("reason" in signal)) {
    Object.defineProperty(signal, "reason", {
      enumerable: true,
      value: reason,
      configurable: true,
      writable: true
    });
  }
  abortController.abort(reason);
};
var task = "task";
var listener = "listener";
var completed = "completed";
var cancelled = "cancelled";
var taskCancelled = "task-" + cancelled;
var taskCompleted = "task-" + completed;
var listenerCancelled = listener + "-" + cancelled;
var listenerCompleted = listener + "-" + completed;
var TaskAbortError = (
  /** @class */
  /* @__PURE__ */ function() {
    function TaskAbortError2(code) {
      this.code = code;
      this.name = "TaskAbortError";
      this.message = task + " " + cancelled + " (reason: " + code + ")";
    }
    return TaskAbortError2;
  }()
);
var validateActive = function(signal) {
  if (signal.aborted) {
    throw new TaskAbortError(signal.reason);
  }
};
function raceWithSignal(signal, promise2) {
  var cleanup = noop;
  return new Promise(function(resolve, reject) {
    var notifyRejection = function() {
      return reject(new TaskAbortError(signal.reason));
    };
    if (signal.aborted) {
      notifyRejection();
      return;
    }
    cleanup = addAbortSignalListener(signal, notifyRejection);
    promise2.finally(function() {
      return cleanup();
    }).then(resolve, reject);
  }).finally(function() {
    cleanup = noop;
  });
}
var runTask = function(task2, cleanUp) {
  return __async$1(void 0, null, function() {
    var value, error_1;
    return __generator$1(this, function(_c) {
      switch (_c.label) {
        case 0:
          _c.trys.push([0, 3, 4, 5]);
          return [4, Promise.resolve()];
        case 1:
          _c.sent();
          return [4, task2()];
        case 2:
          value = _c.sent();
          return [2, {
            status: "ok",
            value
          }];
        case 3:
          error_1 = _c.sent();
          return [2, {
            status: error_1 instanceof TaskAbortError ? "cancelled" : "rejected",
            error: error_1
          }];
        case 4:
          cleanUp == null ? void 0 : cleanUp();
          return [
            7
            /*endfinally*/
          ];
        case 5:
          return [
            2
            /*return*/
          ];
      }
    });
  });
};
var createPause = function(signal) {
  return function(promise2) {
    return catchRejection(raceWithSignal(signal, promise2).then(function(output) {
      validateActive(signal);
      return output;
    }));
  };
};
var createDelay = function(signal) {
  var pause = createPause(signal);
  return function(timeoutMs) {
    return pause(new Promise(function(resolve) {
      return setTimeout(resolve, timeoutMs);
    }));
  };
};
var assign = Object.assign;
var INTERNAL_NIL_TOKEN = {};
var alm = "listenerMiddleware";
var createFork = function(parentAbortSignal, parentBlockingPromises) {
  var linkControllers = function(controller) {
    return addAbortSignalListener(parentAbortSignal, function() {
      return abortControllerWithReason(controller, parentAbortSignal.reason);
    });
  };
  return function(taskExecutor, opts) {
    assertFunction(taskExecutor, "taskExecutor");
    var childAbortController = new AbortController();
    linkControllers(childAbortController);
    var result = runTask(function() {
      return __async$1(void 0, null, function() {
        var result2;
        return __generator$1(this, function(_c) {
          switch (_c.label) {
            case 0:
              validateActive(parentAbortSignal);
              validateActive(childAbortController.signal);
              return [4, taskExecutor({
                pause: createPause(childAbortController.signal),
                delay: createDelay(childAbortController.signal),
                signal: childAbortController.signal
              })];
            case 1:
              result2 = _c.sent();
              validateActive(childAbortController.signal);
              return [2, result2];
          }
        });
      });
    }, function() {
      return abortControllerWithReason(childAbortController, taskCompleted);
    });
    if (opts == null ? void 0 : opts.autoJoin) {
      parentBlockingPromises.push(result);
    }
    return {
      result: createPause(parentAbortSignal)(result),
      cancel: function() {
        abortControllerWithReason(childAbortController, taskCancelled);
      }
    };
  };
};
var createTakePattern = function(startListening, signal) {
  var take = function(predicate, timeout) {
    return __async$1(void 0, null, function() {
      var unsubscribe, tuplePromise, promises, output;
      return __generator$1(this, function(_c) {
        switch (_c.label) {
          case 0:
            validateActive(signal);
            unsubscribe = function() {
            };
            tuplePromise = new Promise(function(resolve, reject) {
              var stopListening = startListening({
                predicate,
                effect: function(action, listenerApi) {
                  listenerApi.unsubscribe();
                  resolve([
                    action,
                    listenerApi.getState(),
                    listenerApi.getOriginalState()
                  ]);
                }
              });
              unsubscribe = function() {
                stopListening();
                reject();
              };
            });
            promises = [
              tuplePromise
            ];
            if (timeout != null) {
              promises.push(new Promise(function(resolve) {
                return setTimeout(resolve, timeout, null);
              }));
            }
            _c.label = 1;
          case 1:
            _c.trys.push([1, , 3, 4]);
            return [4, raceWithSignal(signal, Promise.race(promises))];
          case 2:
            output = _c.sent();
            validateActive(signal);
            return [2, output];
          case 3:
            unsubscribe();
            return [
              7
              /*endfinally*/
            ];
          case 4:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  return function(predicate, timeout) {
    return catchRejection(take(predicate, timeout));
  };
};
var getListenerEntryPropsFrom = function(options) {
  var type = options.type, actionCreator = options.actionCreator, matcher = options.matcher, predicate = options.predicate, effect = options.effect;
  if (type) {
    predicate = createAction(type).match;
  } else if (actionCreator) {
    type = actionCreator.type;
    predicate = actionCreator.match;
  } else if (matcher) {
    predicate = matcher;
  } else if (predicate) ;
  else {
    throw new Error("Creating or removing a listener requires one of the known fields for matching an action");
  }
  assertFunction(effect, "options.listener");
  return { predicate, type, effect };
};
var createListenerEntry = function(options) {
  var _c = getListenerEntryPropsFrom(options), type = _c.type, predicate = _c.predicate, effect = _c.effect;
  var id2 = nanoid();
  var entry = {
    id: id2,
    effect,
    type,
    predicate,
    pending: /* @__PURE__ */ new Set(),
    unsubscribe: function() {
      throw new Error("Unsubscribe not initialized");
    }
  };
  return entry;
};
var cancelActiveListeners = function(entry) {
  entry.pending.forEach(function(controller) {
    abortControllerWithReason(controller, listenerCancelled);
  });
};
var createClearListenerMiddleware = function(listenerMap) {
  return function() {
    listenerMap.forEach(cancelActiveListeners);
    listenerMap.clear();
  };
};
var safelyNotifyError = function(errorHandler, errorToNotify, errorInfo) {
  try {
    errorHandler(errorToNotify, errorInfo);
  } catch (errorHandlerError) {
    setTimeout(function() {
      throw errorHandlerError;
    }, 0);
  }
};
var addListener = createAction(alm + "/add");
var clearAllListeners = createAction(alm + "/removeAll");
var removeListener = createAction(alm + "/remove");
var defaultErrorHandler = function() {
  var args = [];
  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }
  console.error.apply(console, __spreadArray$2([alm + "/error"], args));
};
function createListenerMiddleware(middlewareOptions) {
  var _this = this;
  if (middlewareOptions === void 0) {
    middlewareOptions = {};
  }
  var listenerMap = /* @__PURE__ */ new Map();
  var extra = middlewareOptions.extra, _c = middlewareOptions.onError, onError = _c === void 0 ? defaultErrorHandler : _c;
  assertFunction(onError, "onError");
  var insertEntry = function(entry) {
    entry.unsubscribe = function() {
      return listenerMap.delete(entry.id);
    };
    listenerMap.set(entry.id, entry);
    return function(cancelOptions) {
      entry.unsubscribe();
      if (cancelOptions == null ? void 0 : cancelOptions.cancelActive) {
        cancelActiveListeners(entry);
      }
    };
  };
  var findListenerEntry = function(comparator) {
    for (var _i = 0, _c2 = Array.from(listenerMap.values()); _i < _c2.length; _i++) {
      var entry = _c2[_i];
      if (comparator(entry)) {
        return entry;
      }
    }
    return void 0;
  };
  var startListening = function(options) {
    var entry = findListenerEntry(function(existingEntry) {
      return existingEntry.effect === options.effect;
    });
    if (!entry) {
      entry = createListenerEntry(options);
    }
    return insertEntry(entry);
  };
  var stopListening = function(options) {
    var _c2 = getListenerEntryPropsFrom(options), type = _c2.type, effect = _c2.effect, predicate = _c2.predicate;
    var entry = findListenerEntry(function(entry2) {
      var matchPredicateOrType = typeof type === "string" ? entry2.type === type : entry2.predicate === predicate;
      return matchPredicateOrType && entry2.effect === effect;
    });
    if (entry) {
      entry.unsubscribe();
      if (options.cancelActive) {
        cancelActiveListeners(entry);
      }
    }
    return !!entry;
  };
  var notifyListener = function(entry, action, api2, getOriginalState) {
    return __async$1(_this, null, function() {
      var internalTaskController, take, autoJoinPromises, listenerError_1;
      return __generator$1(this, function(_c2) {
        switch (_c2.label) {
          case 0:
            internalTaskController = new AbortController();
            take = createTakePattern(startListening, internalTaskController.signal);
            autoJoinPromises = [];
            _c2.label = 1;
          case 1:
            _c2.trys.push([1, 3, 4, 6]);
            entry.pending.add(internalTaskController);
            return [4, Promise.resolve(entry.effect(action, assign({}, api2, {
              getOriginalState,
              condition: function(predicate, timeout) {
                return take(predicate, timeout).then(Boolean);
              },
              take,
              delay: createDelay(internalTaskController.signal),
              pause: createPause(internalTaskController.signal),
              extra,
              signal: internalTaskController.signal,
              fork: createFork(internalTaskController.signal, autoJoinPromises),
              unsubscribe: entry.unsubscribe,
              subscribe: function() {
                listenerMap.set(entry.id, entry);
              },
              cancelActiveListeners: function() {
                entry.pending.forEach(function(controller, _2, set) {
                  if (controller !== internalTaskController) {
                    abortControllerWithReason(controller, listenerCancelled);
                    set.delete(controller);
                  }
                });
              }
            })))];
          case 2:
            _c2.sent();
            return [3, 6];
          case 3:
            listenerError_1 = _c2.sent();
            if (!(listenerError_1 instanceof TaskAbortError)) {
              safelyNotifyError(onError, listenerError_1, {
                raisedBy: "effect"
              });
            }
            return [3, 6];
          case 4:
            return [4, Promise.allSettled(autoJoinPromises)];
          case 5:
            _c2.sent();
            abortControllerWithReason(internalTaskController, listenerCompleted);
            entry.pending.delete(internalTaskController);
            return [
              7
              /*endfinally*/
            ];
          case 6:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  var clearListenerMiddleware = createClearListenerMiddleware(listenerMap);
  var middleware2 = function(api2) {
    return function(next2) {
      return function(action) {
        if (!isAction(action)) {
          return next2(action);
        }
        if (addListener.match(action)) {
          return startListening(action.payload);
        }
        if (clearAllListeners.match(action)) {
          clearListenerMiddleware();
          return;
        }
        if (removeListener.match(action)) {
          return stopListening(action.payload);
        }
        var originalState = api2.getState();
        var getOriginalState = function() {
          if (originalState === INTERNAL_NIL_TOKEN) {
            throw new Error(alm + ": getOriginalState can only be called synchronously");
          }
          return originalState;
        };
        var result;
        try {
          result = next2(action);
          if (listenerMap.size > 0) {
            var currentState = api2.getState();
            var listenerEntries = Array.from(listenerMap.values());
            for (var _i = 0, listenerEntries_1 = listenerEntries; _i < listenerEntries_1.length; _i++) {
              var entry = listenerEntries_1[_i];
              var runListener = false;
              try {
                runListener = entry.predicate(action, currentState, originalState);
              } catch (predicateError) {
                runListener = false;
                safelyNotifyError(onError, predicateError, {
                  raisedBy: "predicate"
                });
              }
              if (!runListener) {
                continue;
              }
              notifyListener(entry, action, api2, getOriginalState);
            }
          }
        } finally {
          originalState = INTERNAL_NIL_TOKEN;
        }
        return result;
      };
    };
  };
  return {
    middleware: middleware2,
    startListening,
    stopListening,
    clearListeners: clearListenerMiddleware
  };
}
var SHOULD_AUTOBATCH = "RTK_autoBatch";
var prepareAutoBatched = function() {
  return function(payload) {
    var _c;
    return {
      payload,
      meta: (_c = {}, _c[SHOULD_AUTOBATCH] = true, _c)
    };
  };
};
var promise$1;
var queueMicrotaskShim$1 = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb2) {
  return (promise$1 || (promise$1 = Promise.resolve())).then(cb2).catch(function(err) {
    return setTimeout(function() {
      throw err;
    }, 0);
  });
};
var createQueueWithTimer = function(timeout) {
  return function(notify) {
    setTimeout(notify, timeout);
  };
};
var rAF = typeof window !== "undefined" && window.requestAnimationFrame ? window.requestAnimationFrame : createQueueWithTimer(10);
var autoBatchEnhancer = function(options) {
  if (options === void 0) {
    options = { type: "raf" };
  }
  return function(next2) {
    return function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var store2 = next2.apply(void 0, args);
      var notifying = true;
      var shouldNotifyAtEndOfTick = false;
      var notificationQueued = false;
      var listeners = /* @__PURE__ */ new Set();
      var queueCallback = options.type === "tick" ? queueMicrotaskShim$1 : options.type === "raf" ? rAF : options.type === "callback" ? options.queueNotification : createQueueWithTimer(options.timeout);
      var notifyListeners = function() {
        notificationQueued = false;
        if (shouldNotifyAtEndOfTick) {
          shouldNotifyAtEndOfTick = false;
          listeners.forEach(function(l2) {
            return l2();
          });
        }
      };
      return Object.assign({}, store2, {
        subscribe: function(listener2) {
          var wrappedListener = function() {
            return notifying && listener2();
          };
          var unsubscribe = store2.subscribe(wrappedListener);
          listeners.add(listener2);
          return function() {
            unsubscribe();
            listeners.delete(listener2);
          };
        },
        dispatch: function(action) {
          var _a;
          try {
            notifying = !((_a = action == null ? void 0 : action.meta) == null ? void 0 : _a[SHOULD_AUTOBATCH]);
            shouldNotifyAtEndOfTick = !notifying;
            if (shouldNotifyAtEndOfTick) {
              if (!notificationQueued) {
                notificationQueued = true;
                queueCallback(notifyListeners);
              }
            }
            return store2.dispatch(action);
          } finally {
            notifying = true;
          }
        }
      });
    };
  };
};
F$1();
const reduxToolkit_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  EnhancerArray,
  MiddlewareArray,
  SHOULD_AUTOBATCH,
  TaskAbortError,
  __DO_NOT_USE__ActionTypes: ActionTypes,
  addListener,
  applyMiddleware,
  autoBatchEnhancer,
  bindActionCreators,
  clearAllListeners,
  combineReducers,
  compose,
  configureStore,
  createAction,
  createActionCreatorInvariantMiddleware,
  createAsyncThunk,
  createDraftSafeSelector,
  createEntityAdapter,
  createImmutableStateInvariantMiddleware,
  createListenerMiddleware,
  createNextState: createNextState2,
  createReducer,
  createSelector,
  createSerializableStateInvariantMiddleware,
  createSlice,
  createStore,
  current: R,
  findNonSerializableValue,
  freeze: d$1,
  getDefaultMiddleware,
  getType,
  isAction,
  isActionCreator,
  isAllOf,
  isAnyOf,
  isAsyncThunkAction,
  isDraft: r$2,
  isFluxStandardAction: isFSA,
  isFulfilled,
  isImmutableDefault,
  isPending,
  isPlain,
  isPlainObject: isPlainObject$1,
  isRejected,
  isRejectedWithValue,
  legacy_createStore,
  miniSerializeError,
  nanoid,
  original: e$2,
  prepareAutoBatched,
  removeListener,
  unwrapResult
}, Symbol.toStringTag, { value: "Module" }));
var __generator = function(thisArg, body) {
  var _2 = { label: 0, sent: function() {
    if (t2[0] & 1) throw t2[1];
    return t2[1];
  }, trys: [], ops: [] }, f2, y2, t2, g2;
  return g2 = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g2[Symbol.iterator] = function() {
    return this;
  }), g2;
  function verb(n2) {
    return function(v2) {
      return step([n2, v2]);
    };
  }
  function step(op) {
    if (f2) throw new TypeError("Generator is already executing.");
    while (_2) try {
      if (f2 = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
      if (y2 = 0, t2) op = [op[0] & 2, t2.value];
      switch (op[0]) {
        case 0:
        case 1:
          t2 = op;
          break;
        case 4:
          _2.label++;
          return { value: op[1], done: false };
        case 5:
          _2.label++;
          y2 = op[1];
          op = [0];
          continue;
        case 7:
          op = _2.ops.pop();
          _2.trys.pop();
          continue;
        default:
          if (!(t2 = _2.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _2 = 0;
            continue;
          }
          if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
            _2.label = op[1];
            break;
          }
          if (op[0] === 6 && _2.label < t2[1]) {
            _2.label = t2[1];
            t2 = op;
            break;
          }
          if (t2 && _2.label < t2[2]) {
            _2.label = t2[2];
            _2.ops.push(op);
            break;
          }
          if (t2[2]) _2.ops.pop();
          _2.trys.pop();
          continue;
      }
      op = body.call(thisArg, _2);
    } catch (e2) {
      op = [6, e2];
      y2 = 0;
    } finally {
      f2 = t2 = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __spreadArray$1 = function(to, from2) {
  for (var i2 = 0, il2 = from2.length, j2 = to.length; i2 < il2; i2++, j2++)
    to[j2] = from2[i2];
  return to;
};
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = function(obj, key, value) {
  return key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues$1 = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp$1.call(b2, prop))
      __defNormalProp$1(a2, prop, b2[prop]);
  if (__getOwnPropSymbols$1)
    for (var _j = 0, _k = __getOwnPropSymbols$1(b2); _j < _k.length; _j++) {
      var prop = _k[_j];
      if (__propIsEnum$1.call(b2, prop))
        __defNormalProp$1(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps$1 = function(a2, b2) {
  return __defProps$1(a2, __getOwnPropDescs$1(b2));
};
var __async = function(__this, __arguments, generator) {
  return new Promise(function(resolve, reject) {
    var fulfilled = function(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = function(value) {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = function(x2) {
      return x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    };
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var QueryStatus;
(function(QueryStatus2) {
  QueryStatus2["uninitialized"] = "uninitialized";
  QueryStatus2["pending"] = "pending";
  QueryStatus2["fulfilled"] = "fulfilled";
  QueryStatus2["rejected"] = "rejected";
})(QueryStatus || (QueryStatus = {}));
function getRequestStatusFlags(status) {
  return {
    status,
    isUninitialized: status === QueryStatus.uninitialized,
    isLoading: status === QueryStatus.pending,
    isSuccess: status === QueryStatus.fulfilled,
    isError: status === QueryStatus.rejected
  };
}
var flatten = function(arr) {
  return [].concat.apply([], arr);
};
function isOnline() {
  return typeof navigator === "undefined" ? true : navigator.onLine === void 0 ? true : navigator.onLine;
}
function isDocumentVisible() {
  if (typeof document === "undefined") {
    return true;
  }
  return document.visibilityState !== "hidden";
}
var isPlainObject = isPlainObject$1;
function copyWithStructuralSharing(oldObj, newObj) {
  if (oldObj === newObj || !(isPlainObject(oldObj) && isPlainObject(newObj) || Array.isArray(oldObj) && Array.isArray(newObj))) {
    return newObj;
  }
  var newKeys = Object.keys(newObj);
  var oldKeys = Object.keys(oldObj);
  var isSameObject = newKeys.length === oldKeys.length;
  var mergeObj = Array.isArray(newObj) ? [] : {};
  for (var _j = 0, newKeys_1 = newKeys; _j < newKeys_1.length; _j++) {
    var key = newKeys_1[_j];
    mergeObj[key] = copyWithStructuralSharing(oldObj[key], newObj[key]);
    if (isSameObject)
      isSameObject = oldObj[key] === mergeObj[key];
  }
  return isSameObject ? oldObj : mergeObj;
}
var HandledError = (
  /** @class */
  /* @__PURE__ */ function() {
    function HandledError2(value, meta) {
      if (meta === void 0) {
        meta = void 0;
      }
      this.value = value;
      this.meta = meta;
    }
    return HandledError2;
  }()
);
var onFocus = /* @__PURE__ */ createAction("__rtkq/focused");
var onFocusLost = /* @__PURE__ */ createAction("__rtkq/unfocused");
var onOnline = /* @__PURE__ */ createAction("__rtkq/online");
var onOffline = /* @__PURE__ */ createAction("__rtkq/offline");
var initialized = false;
function setupListeners(dispatch, customHandler) {
  function defaultHandler() {
    var handleFocus = function() {
      return dispatch(onFocus());
    };
    var handleFocusLost = function() {
      return dispatch(onFocusLost());
    };
    var handleOnline = function() {
      return dispatch(onOnline());
    };
    var handleOffline = function() {
      return dispatch(onOffline());
    };
    var handleVisibilityChange = function() {
      if (window.document.visibilityState === "visible") {
        handleFocus();
      } else {
        handleFocusLost();
      }
    };
    if (!initialized) {
      if (typeof window !== "undefined" && window.addEventListener) {
        window.addEventListener("visibilitychange", handleVisibilityChange, false);
        window.addEventListener("focus", handleFocus, false);
        window.addEventListener("online", handleOnline, false);
        window.addEventListener("offline", handleOffline, false);
        initialized = true;
      }
    }
    var unsubscribe = function() {
      window.removeEventListener("focus", handleFocus);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      initialized = false;
    };
    return unsubscribe;
  }
  return defaultHandler();
}
var DefinitionType$1;
(function(DefinitionType2) {
  DefinitionType2["query"] = "query";
  DefinitionType2["mutation"] = "mutation";
})(DefinitionType$1 || (DefinitionType$1 = {}));
function isQueryDefinition$1(e2) {
  return e2.type === DefinitionType$1.query;
}
function isMutationDefinition$1(e2) {
  return e2.type === DefinitionType$1.mutation;
}
function calculateProvidedBy(description, result, error, queryArg, meta, assertTagTypes) {
  if (isFunction(description)) {
    return description(result, error, queryArg, meta).map(expandTagDescription).map(assertTagTypes);
  }
  if (Array.isArray(description)) {
    return description.map(expandTagDescription).map(assertTagTypes);
  }
  return [];
}
function isFunction(t2) {
  return typeof t2 === "function";
}
function expandTagDescription(description) {
  return typeof description === "string" ? { type: description } : description;
}
function isNotNullish(v2) {
  return v2 != null;
}
var forceQueryFnSymbol = Symbol("forceQueryFn");
var isUpsertQuery = function(arg) {
  return typeof arg[forceQueryFnSymbol] === "function";
};
function buildInitiate(_j) {
  var serializeQueryArgs = _j.serializeQueryArgs, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk, api2 = _j.api, context = _j.context;
  var runningQueries = /* @__PURE__ */ new Map();
  var runningMutations = /* @__PURE__ */ new Map();
  var _k = api2.internalActions, unsubscribeQueryResult = _k.unsubscribeQueryResult, removeMutationResult = _k.removeMutationResult, updateSubscriptionOptions = _k.updateSubscriptionOptions;
  return {
    buildInitiateQuery,
    buildInitiateMutation,
    getRunningQueryThunk,
    getRunningMutationThunk,
    getRunningQueriesThunk,
    getRunningMutationsThunk,
    getRunningOperationPromises,
    removalWarning
  };
  function removalWarning() {
    throw new Error("This method had to be removed due to a conceptual bug in RTK.\n       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.\n       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.");
  }
  function getRunningOperationPromises() {
    if (typeof process !== "undefined" && false) {
      removalWarning();
    } else {
      var extract = function(v2) {
        return Array.from(v2.values()).flatMap(function(queriesForStore) {
          return queriesForStore ? Object.values(queriesForStore) : [];
        });
      };
      return __spreadArray$1(__spreadArray$1([], extract(runningQueries)), extract(runningMutations)).filter(isNotNullish);
    }
  }
  function getRunningQueryThunk(endpointName, queryArgs) {
    return function(dispatch) {
      var _a;
      var endpointDefinition = context.endpointDefinitions[endpointName];
      var queryCacheKey = serializeQueryArgs({
        queryArgs,
        endpointDefinition,
        endpointName
      });
      return (_a = runningQueries.get(dispatch)) == null ? void 0 : _a[queryCacheKey];
    };
  }
  function getRunningMutationThunk(_endpointName, fixedCacheKeyOrRequestId) {
    return function(dispatch) {
      var _a;
      return (_a = runningMutations.get(dispatch)) == null ? void 0 : _a[fixedCacheKeyOrRequestId];
    };
  }
  function getRunningQueriesThunk() {
    return function(dispatch) {
      return Object.values(runningQueries.get(dispatch) || {}).filter(isNotNullish);
    };
  }
  function getRunningMutationsThunk() {
    return function(dispatch) {
      return Object.values(runningMutations.get(dispatch) || {}).filter(isNotNullish);
    };
  }
  function buildInitiateQuery(endpointName, endpointDefinition) {
    var queryAction = function(arg, _j2) {
      var _k2 = _j2 === void 0 ? {} : _j2, _l = _k2.subscribe, subscribe = _l === void 0 ? true : _l, forceRefetch = _k2.forceRefetch, subscriptionOptions = _k2.subscriptionOptions, _m = forceQueryFnSymbol, forceQueryFn = _k2[_m];
      return function(dispatch, getState) {
        var _j3;
        var _a;
        var queryCacheKey = serializeQueryArgs({
          queryArgs: arg,
          endpointDefinition,
          endpointName
        });
        var thunk2 = queryThunk((_j3 = {
          type: "query",
          subscribe,
          forceRefetch,
          subscriptionOptions,
          endpointName,
          originalArgs: arg,
          queryCacheKey
        }, _j3[forceQueryFnSymbol] = forceQueryFn, _j3));
        var selector = api2.endpoints[endpointName].select(arg);
        var thunkResult = dispatch(thunk2);
        var stateAfter = selector(getState());
        var requestId = thunkResult.requestId, abort = thunkResult.abort;
        var skippedSynchronously = stateAfter.requestId !== requestId;
        var runningQuery = (_a = runningQueries.get(dispatch)) == null ? void 0 : _a[queryCacheKey];
        var selectFromState = function() {
          return selector(getState());
        };
        var statePromise = Object.assign(forceQueryFn ? thunkResult.then(selectFromState) : skippedSynchronously && !runningQuery ? Promise.resolve(stateAfter) : Promise.all([runningQuery, thunkResult]).then(selectFromState), {
          arg,
          requestId,
          subscriptionOptions,
          queryCacheKey,
          abort,
          unwrap: function() {
            return __async(this, null, function() {
              var result;
              return __generator(this, function(_j4) {
                switch (_j4.label) {
                  case 0:
                    return [4, statePromise];
                  case 1:
                    result = _j4.sent();
                    if (result.isError) {
                      throw result.error;
                    }
                    return [2, result.data];
                }
              });
            });
          },
          refetch: function() {
            return dispatch(queryAction(arg, { subscribe: false, forceRefetch: true }));
          },
          unsubscribe: function() {
            if (subscribe)
              dispatch(unsubscribeQueryResult({
                queryCacheKey,
                requestId
              }));
          },
          updateSubscriptionOptions: function(options) {
            statePromise.subscriptionOptions = options;
            dispatch(updateSubscriptionOptions({
              endpointName,
              requestId,
              queryCacheKey,
              options
            }));
          }
        });
        if (!runningQuery && !skippedSynchronously && !forceQueryFn) {
          var running_1 = runningQueries.get(dispatch) || {};
          running_1[queryCacheKey] = statePromise;
          runningQueries.set(dispatch, running_1);
          statePromise.then(function() {
            delete running_1[queryCacheKey];
            if (!Object.keys(running_1).length) {
              runningQueries.delete(dispatch);
            }
          });
        }
        return statePromise;
      };
    };
    return queryAction;
  }
  function buildInitiateMutation(endpointName) {
    return function(arg, _j2) {
      var _k2 = _j2 === void 0 ? {} : _j2, _l = _k2.track, track2 = _l === void 0 ? true : _l, fixedCacheKey = _k2.fixedCacheKey;
      return function(dispatch, getState) {
        var thunk2 = mutationThunk({
          type: "mutation",
          endpointName,
          originalArgs: arg,
          track: track2,
          fixedCacheKey
        });
        var thunkResult = dispatch(thunk2);
        var requestId = thunkResult.requestId, abort = thunkResult.abort, unwrap = thunkResult.unwrap;
        var returnValuePromise = thunkResult.unwrap().then(function(data2) {
          return { data: data2 };
        }).catch(function(error) {
          return { error };
        });
        var reset = function() {
          dispatch(removeMutationResult({ requestId, fixedCacheKey }));
        };
        var ret = Object.assign(returnValuePromise, {
          arg: thunkResult.arg,
          requestId,
          abort,
          unwrap,
          unsubscribe: reset,
          reset
        });
        var running = runningMutations.get(dispatch) || {};
        runningMutations.set(dispatch, running);
        running[requestId] = ret;
        ret.then(function() {
          delete running[requestId];
          if (!Object.keys(running).length) {
            runningMutations.delete(dispatch);
          }
        });
        if (fixedCacheKey) {
          running[fixedCacheKey] = ret;
          ret.then(function() {
            if (running[fixedCacheKey] === ret) {
              delete running[fixedCacheKey];
              if (!Object.keys(running).length) {
                runningMutations.delete(dispatch);
              }
            }
          });
        }
        return ret;
      };
    };
  }
}
function defaultTransformResponse(baseQueryReturnValue) {
  return baseQueryReturnValue;
}
function buildThunks(_j) {
  var _this = this;
  var reducerPath = _j.reducerPath, baseQuery2 = _j.baseQuery, endpointDefinitions = _j.context.endpointDefinitions, serializeQueryArgs = _j.serializeQueryArgs, api2 = _j.api, assertTagType = _j.assertTagType;
  var patchQueryData = function(endpointName, args, patches, updateProvided) {
    return function(dispatch, getState) {
      var endpointDefinition = endpointDefinitions[endpointName];
      var queryCacheKey = serializeQueryArgs({
        queryArgs: args,
        endpointDefinition,
        endpointName
      });
      dispatch(api2.internalActions.queryResultPatched({ queryCacheKey, patches }));
      if (!updateProvided) {
        return;
      }
      var newValue = api2.endpoints[endpointName].select(args)(getState());
      var providedTags = calculateProvidedBy(endpointDefinition.providesTags, newValue.data, void 0, args, {}, assertTagType);
      dispatch(api2.internalActions.updateProvidedBy({ queryCacheKey, providedTags }));
    };
  };
  var updateQueryData = function(endpointName, args, updateRecipe, updateProvided) {
    if (updateProvided === void 0) {
      updateProvided = true;
    }
    return function(dispatch, getState) {
      var _j2, _k;
      var endpointDefinition = api2.endpoints[endpointName];
      var currentState = endpointDefinition.select(args)(getState());
      var ret = {
        patches: [],
        inversePatches: [],
        undo: function() {
          return dispatch(api2.util.patchQueryData(endpointName, args, ret.inversePatches, updateProvided));
        }
      };
      if (currentState.status === QueryStatus.uninitialized) {
        return ret;
      }
      var newValue;
      if ("data" in currentState) {
        if (t$3(currentState.data)) {
          var _l = cn(currentState.data, updateRecipe), value = _l[0], patches = _l[1], inversePatches = _l[2];
          (_j2 = ret.patches).push.apply(_j2, patches);
          (_k = ret.inversePatches).push.apply(_k, inversePatches);
          newValue = value;
        } else {
          newValue = updateRecipe(currentState.data);
          ret.patches.push({ op: "replace", path: [], value: newValue });
          ret.inversePatches.push({
            op: "replace",
            path: [],
            value: currentState.data
          });
        }
      }
      dispatch(api2.util.patchQueryData(endpointName, args, ret.patches, updateProvided));
      return ret;
    };
  };
  var upsertQueryData = function(endpointName, args, value) {
    return function(dispatch) {
      var _j2;
      return dispatch(api2.endpoints[endpointName].initiate(args, (_j2 = {
        subscribe: false,
        forceRefetch: true
      }, _j2[forceQueryFnSymbol] = function() {
        return {
          data: value
        };
      }, _j2)));
    };
  };
  var executeEndpoint = function(_0, _1) {
    return __async(_this, [_0, _1], function(arg, _j2) {
      var endpointDefinition, transformResponse, result, baseQueryApi_1, forceQueryFn, what, err, _k, _l, key, _m, error_1, catchedError, transformErrorResponse, _o, e_4;
      var _p, _q;
      var signal = _j2.signal, abort = _j2.abort, rejectWithValue = _j2.rejectWithValue, fulfillWithValue = _j2.fulfillWithValue, dispatch = _j2.dispatch, getState = _j2.getState, extra = _j2.extra;
      return __generator(this, function(_r) {
        switch (_r.label) {
          case 0:
            endpointDefinition = endpointDefinitions[arg.endpointName];
            _r.label = 1;
          case 1:
            _r.trys.push([1, 8, , 13]);
            transformResponse = defaultTransformResponse;
            result = void 0;
            baseQueryApi_1 = {
              signal,
              abort,
              dispatch,
              getState,
              extra,
              endpoint: arg.endpointName,
              type: arg.type,
              forced: arg.type === "query" ? isForcedQuery(arg, getState()) : void 0
            };
            forceQueryFn = arg.type === "query" ? arg[forceQueryFnSymbol] : void 0;
            if (!forceQueryFn) return [3, 2];
            result = forceQueryFn();
            return [3, 6];
          case 2:
            if (!endpointDefinition.query) return [3, 4];
            return [4, baseQuery2(endpointDefinition.query(arg.originalArgs), baseQueryApi_1, endpointDefinition.extraOptions)];
          case 3:
            result = _r.sent();
            if (endpointDefinition.transformResponse) {
              transformResponse = endpointDefinition.transformResponse;
            }
            return [3, 6];
          case 4:
            return [4, endpointDefinition.queryFn(arg.originalArgs, baseQueryApi_1, endpointDefinition.extraOptions, function(arg2) {
              return baseQuery2(arg2, baseQueryApi_1, endpointDefinition.extraOptions);
            })];
          case 5:
            result = _r.sent();
            _r.label = 6;
          case 6:
            if (typeof process !== "undefined" && false) {
              what = endpointDefinition.query ? "`baseQuery`" : "`queryFn`";
              err = void 0;
              if (!result) {
                err = what + " did not return anything.";
              } else if (typeof result !== "object") {
                err = what + " did not return an object.";
              } else if (result.error && result.data) {
                err = what + " returned an object containing both `error` and `result`.";
              } else if (result.error === void 0 && result.data === void 0) {
                err = what + " returned an object containing neither a valid `error` and `result`. At least one of them should not be `undefined`";
              } else {
                for (_k = 0, _l = Object.keys(result); _k < _l.length; _k++) {
                  key = _l[_k];
                  if (key !== "error" && key !== "data" && key !== "meta") {
                    err = "The object returned by " + what + " has the unknown property " + key + ".";
                    break;
                  }
                }
              }
              if (err) {
                console.error("Error encountered handling the endpoint " + arg.endpointName + ".\n              " + err + "\n              It needs to return an object with either the shape `{ data: <value> }` or `{ error: <value> }` that may contain an optional `meta` property.\n              Object returned was:", result);
              }
            }
            if (result.error)
              throw new HandledError(result.error, result.meta);
            _m = fulfillWithValue;
            return [4, transformResponse(result.data, result.meta, arg.originalArgs)];
          case 7:
            return [2, _m.apply(void 0, [_r.sent(), (_p = {
              fulfilledTimeStamp: Date.now(),
              baseQueryMeta: result.meta
            }, _p[SHOULD_AUTOBATCH] = true, _p)])];
          case 8:
            error_1 = _r.sent();
            catchedError = error_1;
            if (!(catchedError instanceof HandledError)) return [3, 12];
            transformErrorResponse = defaultTransformResponse;
            if (endpointDefinition.query && endpointDefinition.transformErrorResponse) {
              transformErrorResponse = endpointDefinition.transformErrorResponse;
            }
            _r.label = 9;
          case 9:
            _r.trys.push([9, 11, , 12]);
            _o = rejectWithValue;
            return [4, transformErrorResponse(catchedError.value, catchedError.meta, arg.originalArgs)];
          case 10:
            return [2, _o.apply(void 0, [_r.sent(), (_q = { baseQueryMeta: catchedError.meta }, _q[SHOULD_AUTOBATCH] = true, _q)])];
          case 11:
            e_4 = _r.sent();
            catchedError = e_4;
            return [3, 12];
          case 12:
            if (typeof process !== "undefined" && false) {
              console.error('An unhandled error occurred processing a request for the endpoint "' + arg.endpointName + '".\nIn the case of an unhandled error, no tags will be "provided" or "invalidated".', catchedError);
            } else {
              console.error(catchedError);
            }
            throw catchedError;
          case 13:
            return [
              2
              /*return*/
            ];
        }
      });
    });
  };
  function isForcedQuery(arg, state) {
    var _a, _b, _c, _d;
    var requestState = (_b = (_a = state[reducerPath]) == null ? void 0 : _a.queries) == null ? void 0 : _b[arg.queryCacheKey];
    var baseFetchOnMountOrArgChange = (_c = state[reducerPath]) == null ? void 0 : _c.config.refetchOnMountOrArgChange;
    var fulfilledVal = requestState == null ? void 0 : requestState.fulfilledTimeStamp;
    var refetchVal = (_d = arg.forceRefetch) != null ? _d : arg.subscribe && baseFetchOnMountOrArgChange;
    if (refetchVal) {
      return refetchVal === true || (Number(/* @__PURE__ */ new Date()) - Number(fulfilledVal)) / 1e3 >= refetchVal;
    }
    return false;
  }
  var queryThunk = createAsyncThunk(reducerPath + "/executeQuery", executeEndpoint, {
    getPendingMeta: function() {
      var _j2;
      return _j2 = { startedTimeStamp: Date.now() }, _j2[SHOULD_AUTOBATCH] = true, _j2;
    },
    condition: function(queryThunkArgs, _j2) {
      var getState = _j2.getState;
      var _a, _b, _c;
      var state = getState();
      var requestState = (_b = (_a = state[reducerPath]) == null ? void 0 : _a.queries) == null ? void 0 : _b[queryThunkArgs.queryCacheKey];
      var fulfilledVal = requestState == null ? void 0 : requestState.fulfilledTimeStamp;
      var currentArg = queryThunkArgs.originalArgs;
      var previousArg = requestState == null ? void 0 : requestState.originalArgs;
      var endpointDefinition = endpointDefinitions[queryThunkArgs.endpointName];
      if (isUpsertQuery(queryThunkArgs)) {
        return true;
      }
      if ((requestState == null ? void 0 : requestState.status) === "pending") {
        return false;
      }
      if (isForcedQuery(queryThunkArgs, state)) {
        return true;
      }
      if (isQueryDefinition$1(endpointDefinition) && ((_c = endpointDefinition == null ? void 0 : endpointDefinition.forceRefetch) == null ? void 0 : _c.call(endpointDefinition, {
        currentArg,
        previousArg,
        endpointState: requestState,
        state
      }))) {
        return true;
      }
      if (fulfilledVal) {
        return false;
      }
      return true;
    },
    dispatchConditionRejection: true
  });
  var mutationThunk = createAsyncThunk(reducerPath + "/executeMutation", executeEndpoint, {
    getPendingMeta: function() {
      var _j2;
      return _j2 = { startedTimeStamp: Date.now() }, _j2[SHOULD_AUTOBATCH] = true, _j2;
    }
  });
  var hasTheForce = function(options) {
    return "force" in options;
  };
  var hasMaxAge = function(options) {
    return "ifOlderThan" in options;
  };
  var prefetch = function(endpointName, arg, options) {
    return function(dispatch, getState) {
      var force = hasTheForce(options) && options.force;
      var maxAge = hasMaxAge(options) && options.ifOlderThan;
      var queryAction = function(force2) {
        if (force2 === void 0) {
          force2 = true;
        }
        return api2.endpoints[endpointName].initiate(arg, { forceRefetch: force2 });
      };
      var latestStateValue = api2.endpoints[endpointName].select(arg)(getState());
      if (force) {
        dispatch(queryAction());
      } else if (maxAge) {
        var lastFulfilledTs = latestStateValue == null ? void 0 : latestStateValue.fulfilledTimeStamp;
        if (!lastFulfilledTs) {
          dispatch(queryAction());
          return;
        }
        var shouldRetrigger = (Number(/* @__PURE__ */ new Date()) - Number(new Date(lastFulfilledTs))) / 1e3 >= maxAge;
        if (shouldRetrigger) {
          dispatch(queryAction());
        }
      } else {
        dispatch(queryAction(false));
      }
    };
  };
  function matchesEndpoint(endpointName) {
    return function(action) {
      var _a, _b;
      return ((_b = (_a = action == null ? void 0 : action.meta) == null ? void 0 : _a.arg) == null ? void 0 : _b.endpointName) === endpointName;
    };
  }
  function buildMatchThunkActions(thunk2, endpointName) {
    return {
      matchPending: isAllOf(isPending(thunk2), matchesEndpoint(endpointName)),
      matchFulfilled: isAllOf(isFulfilled(thunk2), matchesEndpoint(endpointName)),
      matchRejected: isAllOf(isRejected(thunk2), matchesEndpoint(endpointName))
    };
  }
  return {
    queryThunk,
    mutationThunk,
    prefetch,
    updateQueryData,
    upsertQueryData,
    patchQueryData,
    buildMatchThunkActions
  };
}
function calculateProvidedByThunk(action, type, endpointDefinitions, assertTagType) {
  return calculateProvidedBy(endpointDefinitions[action.meta.arg.endpointName][type], isFulfilled(action) ? action.payload : void 0, isRejectedWithValue(action) ? action.payload : void 0, action.meta.arg.originalArgs, "baseQueryMeta" in action.meta ? action.meta.baseQueryMeta : void 0, assertTagType);
}
function updateQuerySubstateIfExists(state, queryCacheKey, update) {
  var substate = state[queryCacheKey];
  if (substate) {
    update(substate);
  }
}
function getMutationCacheKey(id2) {
  var _a;
  return (_a = "arg" in id2 ? id2.arg.fixedCacheKey : id2.fixedCacheKey) != null ? _a : id2.requestId;
}
function updateMutationSubstateIfExists(state, id2, update) {
  var substate = state[getMutationCacheKey(id2)];
  if (substate) {
    update(substate);
  }
}
var initialState$4 = {};
function buildSlice(_j) {
  var reducerPath = _j.reducerPath, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk, _k = _j.context, definitions = _k.endpointDefinitions, apiUid = _k.apiUid, extractRehydrationInfo = _k.extractRehydrationInfo, hasRehydrationInfo = _k.hasRehydrationInfo, assertTagType = _j.assertTagType, config = _j.config;
  var resetApiState = createAction(reducerPath + "/resetApiState");
  var querySlice = createSlice({
    name: reducerPath + "/queries",
    initialState: initialState$4,
    reducers: {
      removeQueryResult: {
        reducer: function(draft, _j2) {
          var queryCacheKey = _j2.payload.queryCacheKey;
          delete draft[queryCacheKey];
        },
        prepare: prepareAutoBatched()
      },
      queryResultPatched: {
        reducer: function(draft, _j2) {
          var _k2 = _j2.payload, queryCacheKey = _k2.queryCacheKey, patches = _k2.patches;
          updateQuerySubstateIfExists(draft, queryCacheKey, function(substate) {
            substate.data = pn(substate.data, patches.concat());
          });
        },
        prepare: prepareAutoBatched()
      }
    },
    extraReducers: function(builder) {
      builder.addCase(queryThunk.pending, function(draft, _j2) {
        var meta = _j2.meta, arg = _j2.meta.arg;
        var _a, _b;
        var upserting = isUpsertQuery(arg);
        if (arg.subscribe || upserting) {
          (_b = draft[_a = arg.queryCacheKey]) != null ? _b : draft[_a] = {
            status: QueryStatus.uninitialized,
            endpointName: arg.endpointName
          };
        }
        updateQuerySubstateIfExists(draft, arg.queryCacheKey, function(substate) {
          substate.status = QueryStatus.pending;
          substate.requestId = upserting && substate.requestId ? substate.requestId : meta.requestId;
          if (arg.originalArgs !== void 0) {
            substate.originalArgs = arg.originalArgs;
          }
          substate.startedTimeStamp = meta.startedTimeStamp;
        });
      }).addCase(queryThunk.fulfilled, function(draft, _j2) {
        var meta = _j2.meta, payload = _j2.payload;
        updateQuerySubstateIfExists(draft, meta.arg.queryCacheKey, function(substate) {
          var _a;
          if (substate.requestId !== meta.requestId && !isUpsertQuery(meta.arg))
            return;
          var merge = definitions[meta.arg.endpointName].merge;
          substate.status = QueryStatus.fulfilled;
          if (merge) {
            if (substate.data !== void 0) {
              var fulfilledTimeStamp_1 = meta.fulfilledTimeStamp, arg_1 = meta.arg, baseQueryMeta_1 = meta.baseQueryMeta, requestId_1 = meta.requestId;
              var newData = createNextState2(substate.data, function(draftSubstateData) {
                return merge(draftSubstateData, payload, {
                  arg: arg_1.originalArgs,
                  baseQueryMeta: baseQueryMeta_1,
                  fulfilledTimeStamp: fulfilledTimeStamp_1,
                  requestId: requestId_1
                });
              });
              substate.data = newData;
            } else {
              substate.data = payload;
            }
          } else {
            substate.data = ((_a = definitions[meta.arg.endpointName].structuralSharing) != null ? _a : true) ? copyWithStructuralSharing(r$2(substate.data) ? e$2(substate.data) : substate.data, payload) : payload;
          }
          delete substate.error;
          substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
        });
      }).addCase(queryThunk.rejected, function(draft, _j2) {
        var _k2 = _j2.meta, condition = _k2.condition, arg = _k2.arg, requestId = _k2.requestId, error = _j2.error, payload = _j2.payload;
        updateQuerySubstateIfExists(draft, arg.queryCacheKey, function(substate) {
          if (condition) ;
          else {
            if (substate.requestId !== requestId)
              return;
            substate.status = QueryStatus.rejected;
            substate.error = payload != null ? payload : error;
          }
        });
      }).addMatcher(hasRehydrationInfo, function(draft, action) {
        var queries = extractRehydrationInfo(action).queries;
        for (var _j2 = 0, _k2 = Object.entries(queries); _j2 < _k2.length; _j2++) {
          var _l = _k2[_j2], key = _l[0], entry = _l[1];
          if ((entry == null ? void 0 : entry.status) === QueryStatus.fulfilled || (entry == null ? void 0 : entry.status) === QueryStatus.rejected) {
            draft[key] = entry;
          }
        }
      });
    }
  });
  var mutationSlice = createSlice({
    name: reducerPath + "/mutations",
    initialState: initialState$4,
    reducers: {
      removeMutationResult: {
        reducer: function(draft, _j2) {
          var payload = _j2.payload;
          var cacheKey = getMutationCacheKey(payload);
          if (cacheKey in draft) {
            delete draft[cacheKey];
          }
        },
        prepare: prepareAutoBatched()
      }
    },
    extraReducers: function(builder) {
      builder.addCase(mutationThunk.pending, function(draft, _j2) {
        var meta = _j2.meta, _k2 = _j2.meta, requestId = _k2.requestId, arg = _k2.arg, startedTimeStamp = _k2.startedTimeStamp;
        if (!arg.track)
          return;
        draft[getMutationCacheKey(meta)] = {
          requestId,
          status: QueryStatus.pending,
          endpointName: arg.endpointName,
          startedTimeStamp
        };
      }).addCase(mutationThunk.fulfilled, function(draft, _j2) {
        var payload = _j2.payload, meta = _j2.meta;
        if (!meta.arg.track)
          return;
        updateMutationSubstateIfExists(draft, meta, function(substate) {
          if (substate.requestId !== meta.requestId)
            return;
          substate.status = QueryStatus.fulfilled;
          substate.data = payload;
          substate.fulfilledTimeStamp = meta.fulfilledTimeStamp;
        });
      }).addCase(mutationThunk.rejected, function(draft, _j2) {
        var payload = _j2.payload, error = _j2.error, meta = _j2.meta;
        if (!meta.arg.track)
          return;
        updateMutationSubstateIfExists(draft, meta, function(substate) {
          if (substate.requestId !== meta.requestId)
            return;
          substate.status = QueryStatus.rejected;
          substate.error = payload != null ? payload : error;
        });
      }).addMatcher(hasRehydrationInfo, function(draft, action) {
        var mutations = extractRehydrationInfo(action).mutations;
        for (var _j2 = 0, _k2 = Object.entries(mutations); _j2 < _k2.length; _j2++) {
          var _l = _k2[_j2], key = _l[0], entry = _l[1];
          if (((entry == null ? void 0 : entry.status) === QueryStatus.fulfilled || (entry == null ? void 0 : entry.status) === QueryStatus.rejected) && key !== (entry == null ? void 0 : entry.requestId)) {
            draft[key] = entry;
          }
        }
      });
    }
  });
  var invalidationSlice = createSlice({
    name: reducerPath + "/invalidation",
    initialState: initialState$4,
    reducers: {
      updateProvidedBy: {
        reducer: function(draft, action) {
          var _a, _b, _c, _d;
          var _j2 = action.payload, queryCacheKey = _j2.queryCacheKey, providedTags = _j2.providedTags;
          for (var _k2 = 0, _l = Object.values(draft); _k2 < _l.length; _k2++) {
            var tagTypeSubscriptions = _l[_k2];
            for (var _m = 0, _o = Object.values(tagTypeSubscriptions); _m < _o.length; _m++) {
              var idSubscriptions = _o[_m];
              var foundAt = idSubscriptions.indexOf(queryCacheKey);
              if (foundAt !== -1) {
                idSubscriptions.splice(foundAt, 1);
              }
            }
          }
          for (var _p = 0, providedTags_1 = providedTags; _p < providedTags_1.length; _p++) {
            var _q = providedTags_1[_p], type = _q.type, id2 = _q.id;
            var subscribedQueries = (_d = (_b = (_a = draft[type]) != null ? _a : draft[type] = {})[_c = id2 || "__internal_without_id"]) != null ? _d : _b[_c] = [];
            var alreadySubscribed = subscribedQueries.includes(queryCacheKey);
            if (!alreadySubscribed) {
              subscribedQueries.push(queryCacheKey);
            }
          }
        },
        prepare: prepareAutoBatched()
      }
    },
    extraReducers: function(builder) {
      builder.addCase(querySlice.actions.removeQueryResult, function(draft, _j2) {
        var queryCacheKey = _j2.payload.queryCacheKey;
        for (var _k2 = 0, _l = Object.values(draft); _k2 < _l.length; _k2++) {
          var tagTypeSubscriptions = _l[_k2];
          for (var _m = 0, _o = Object.values(tagTypeSubscriptions); _m < _o.length; _m++) {
            var idSubscriptions = _o[_m];
            var foundAt = idSubscriptions.indexOf(queryCacheKey);
            if (foundAt !== -1) {
              idSubscriptions.splice(foundAt, 1);
            }
          }
        }
      }).addMatcher(hasRehydrationInfo, function(draft, action) {
        var _a, _b, _c, _d;
        var provided = extractRehydrationInfo(action).provided;
        for (var _j2 = 0, _k2 = Object.entries(provided); _j2 < _k2.length; _j2++) {
          var _l = _k2[_j2], type = _l[0], incomingTags = _l[1];
          for (var _m = 0, _o = Object.entries(incomingTags); _m < _o.length; _m++) {
            var _p = _o[_m], id2 = _p[0], cacheKeys = _p[1];
            var subscribedQueries = (_d = (_b = (_a = draft[type]) != null ? _a : draft[type] = {})[_c = id2 || "__internal_without_id"]) != null ? _d : _b[_c] = [];
            for (var _q = 0, cacheKeys_1 = cacheKeys; _q < cacheKeys_1.length; _q++) {
              var queryCacheKey = cacheKeys_1[_q];
              var alreadySubscribed = subscribedQueries.includes(queryCacheKey);
              if (!alreadySubscribed) {
                subscribedQueries.push(queryCacheKey);
              }
            }
          }
        }
      }).addMatcher(isAnyOf(isFulfilled(queryThunk), isRejectedWithValue(queryThunk)), function(draft, action) {
        var providedTags = calculateProvidedByThunk(action, "providesTags", definitions, assertTagType);
        var queryCacheKey = action.meta.arg.queryCacheKey;
        invalidationSlice.caseReducers.updateProvidedBy(draft, invalidationSlice.actions.updateProvidedBy({
          queryCacheKey,
          providedTags
        }));
      });
    }
  });
  var subscriptionSlice = createSlice({
    name: reducerPath + "/subscriptions",
    initialState: initialState$4,
    reducers: {
      updateSubscriptionOptions: function(d2, a2) {
      },
      unsubscribeQueryResult: function(d2, a2) {
      },
      internal_probeSubscription: function(d2, a2) {
      }
    }
  });
  var internalSubscriptionsSlice = createSlice({
    name: reducerPath + "/internalSubscriptions",
    initialState: initialState$4,
    reducers: {
      subscriptionsUpdated: {
        reducer: function(state, action) {
          return pn(state, action.payload);
        },
        prepare: prepareAutoBatched()
      }
    }
  });
  var configSlice = createSlice({
    name: reducerPath + "/config",
    initialState: __spreadValues$1({
      online: isOnline(),
      focused: isDocumentVisible(),
      middlewareRegistered: false
    }, config),
    reducers: {
      middlewareRegistered: function(state, _j2) {
        var payload = _j2.payload;
        state.middlewareRegistered = state.middlewareRegistered === "conflict" || apiUid !== payload ? "conflict" : true;
      }
    },
    extraReducers: function(builder) {
      builder.addCase(onOnline, function(state) {
        state.online = true;
      }).addCase(onOffline, function(state) {
        state.online = false;
      }).addCase(onFocus, function(state) {
        state.focused = true;
      }).addCase(onFocusLost, function(state) {
        state.focused = false;
      }).addMatcher(hasRehydrationInfo, function(draft) {
        return __spreadValues$1({}, draft);
      });
    }
  });
  var combinedReducer = combineReducers({
    queries: querySlice.reducer,
    mutations: mutationSlice.reducer,
    provided: invalidationSlice.reducer,
    subscriptions: internalSubscriptionsSlice.reducer,
    config: configSlice.reducer
  });
  var reducer = function(state, action) {
    return combinedReducer(resetApiState.match(action) ? void 0 : state, action);
  };
  var actions = __spreadProps$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1({}, configSlice.actions), querySlice.actions), subscriptionSlice.actions), internalSubscriptionsSlice.actions), mutationSlice.actions), invalidationSlice.actions), {
    unsubscribeMutationResult: mutationSlice.actions.removeMutationResult,
    resetApiState
  });
  return { reducer, actions };
}
var skipToken = /* @__PURE__ */ Symbol.for("RTKQ/skipToken");
var initialSubState = {
  status: QueryStatus.uninitialized
};
var defaultQuerySubState = /* @__PURE__ */ createNextState2(initialSubState, function() {
});
var defaultMutationSubState = /* @__PURE__ */ createNextState2(initialSubState, function() {
});
function buildSelectors(_j) {
  var serializeQueryArgs = _j.serializeQueryArgs, reducerPath = _j.reducerPath;
  var selectSkippedQuery = function(state) {
    return defaultQuerySubState;
  };
  var selectSkippedMutation = function(state) {
    return defaultMutationSubState;
  };
  return { buildQuerySelector, buildMutationSelector, selectInvalidatedBy };
  function withRequestFlags(substate) {
    return __spreadValues$1(__spreadValues$1({}, substate), getRequestStatusFlags(substate.status));
  }
  function selectInternalState(rootState) {
    var state = rootState[reducerPath];
    return state;
  }
  function buildQuerySelector(endpointName, endpointDefinition) {
    return function(queryArgs) {
      var serializedArgs = serializeQueryArgs({
        queryArgs,
        endpointDefinition,
        endpointName
      });
      var selectQuerySubstate = function(state) {
        var _a, _b, _c;
        return (_c = (_b = (_a = selectInternalState(state)) == null ? void 0 : _a.queries) == null ? void 0 : _b[serializedArgs]) != null ? _c : defaultQuerySubState;
      };
      var finalSelectQuerySubState = queryArgs === skipToken ? selectSkippedQuery : selectQuerySubstate;
      return createSelector(finalSelectQuerySubState, withRequestFlags);
    };
  }
  function buildMutationSelector() {
    return function(id2) {
      var _a;
      var mutationId;
      if (typeof id2 === "object") {
        mutationId = (_a = getMutationCacheKey(id2)) != null ? _a : skipToken;
      } else {
        mutationId = id2;
      }
      var selectMutationSubstate = function(state) {
        var _a2, _b, _c;
        return (_c = (_b = (_a2 = selectInternalState(state)) == null ? void 0 : _a2.mutations) == null ? void 0 : _b[mutationId]) != null ? _c : defaultMutationSubState;
      };
      var finalSelectMutationSubstate = mutationId === skipToken ? selectSkippedMutation : selectMutationSubstate;
      return createSelector(finalSelectMutationSubstate, withRequestFlags);
    };
  }
  function selectInvalidatedBy(state, tags) {
    var _a;
    var apiState = state[reducerPath];
    var toInvalidate = /* @__PURE__ */ new Set();
    for (var _j2 = 0, _k = tags.map(expandTagDescription); _j2 < _k.length; _j2++) {
      var tag = _k[_j2];
      var provided = apiState.provided[tag.type];
      if (!provided) {
        continue;
      }
      var invalidateSubscriptions = (_a = tag.id !== void 0 ? provided[tag.id] : flatten(Object.values(provided))) != null ? _a : [];
      for (var _l = 0, invalidateSubscriptions_1 = invalidateSubscriptions; _l < invalidateSubscriptions_1.length; _l++) {
        var invalidate = invalidateSubscriptions_1[_l];
        toInvalidate.add(invalidate);
      }
    }
    return flatten(Array.from(toInvalidate.values()).map(function(queryCacheKey) {
      var querySubState = apiState.queries[queryCacheKey];
      return querySubState ? [
        {
          queryCacheKey,
          endpointName: querySubState.endpointName,
          originalArgs: querySubState.originalArgs
        }
      ] : [];
    }));
  }
}
var cache$1 = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0;
var defaultSerializeQueryArgs$1 = function(_j) {
  var endpointName = _j.endpointName, queryArgs = _j.queryArgs;
  var serialized = "";
  var cached = cache$1 == null ? void 0 : cache$1.get(queryArgs);
  if (typeof cached === "string") {
    serialized = cached;
  } else {
    var stringified = JSON.stringify(queryArgs, function(key, value) {
      return isPlainObject$1(value) ? Object.keys(value).sort().reduce(function(acc, key2) {
        acc[key2] = value[key2];
        return acc;
      }, {}) : value;
    });
    if (isPlainObject$1(queryArgs)) {
      cache$1 == null ? void 0 : cache$1.set(queryArgs, stringified);
    }
    serialized = stringified;
  }
  return endpointName + "(" + serialized + ")";
};
function buildCreateApi() {
  var modules = [];
  for (var _j = 0; _j < arguments.length; _j++) {
    modules[_j] = arguments[_j];
  }
  return function baseCreateApi(options) {
    var extractRehydrationInfo = defaultMemoize(function(action) {
      var _a, _b;
      return (_b = options.extractRehydrationInfo) == null ? void 0 : _b.call(options, action, {
        reducerPath: (_a = options.reducerPath) != null ? _a : "api"
      });
    });
    var optionsWithDefaults = __spreadProps$1(__spreadValues$1({
      reducerPath: "api",
      keepUnusedDataFor: 60,
      refetchOnMountOrArgChange: false,
      refetchOnFocus: false,
      refetchOnReconnect: false
    }, options), {
      extractRehydrationInfo,
      serializeQueryArgs: function(queryArgsApi) {
        var finalSerializeQueryArgs = defaultSerializeQueryArgs$1;
        if ("serializeQueryArgs" in queryArgsApi.endpointDefinition) {
          var endpointSQA_1 = queryArgsApi.endpointDefinition.serializeQueryArgs;
          finalSerializeQueryArgs = function(queryArgsApi2) {
            var initialResult = endpointSQA_1(queryArgsApi2);
            if (typeof initialResult === "string") {
              return initialResult;
            } else {
              return defaultSerializeQueryArgs$1(__spreadProps$1(__spreadValues$1({}, queryArgsApi2), {
                queryArgs: initialResult
              }));
            }
          };
        } else if (options.serializeQueryArgs) {
          finalSerializeQueryArgs = options.serializeQueryArgs;
        }
        return finalSerializeQueryArgs(queryArgsApi);
      },
      tagTypes: __spreadArray$1([], options.tagTypes || [])
    });
    var context = {
      endpointDefinitions: {},
      batch: function(fn2) {
        fn2();
      },
      apiUid: nanoid(),
      extractRehydrationInfo,
      hasRehydrationInfo: defaultMemoize(function(action) {
        return extractRehydrationInfo(action) != null;
      })
    };
    var api2 = {
      injectEndpoints,
      enhanceEndpoints: function(_j2) {
        var addTagTypes = _j2.addTagTypes, endpoints = _j2.endpoints;
        if (addTagTypes) {
          for (var _k = 0, addTagTypes_1 = addTagTypes; _k < addTagTypes_1.length; _k++) {
            var eT = addTagTypes_1[_k];
            if (!optionsWithDefaults.tagTypes.includes(eT)) {
              optionsWithDefaults.tagTypes.push(eT);
            }
          }
        }
        if (endpoints) {
          for (var _l = 0, _m = Object.entries(endpoints); _l < _m.length; _l++) {
            var _o = _m[_l], endpointName = _o[0], partialDefinition = _o[1];
            if (typeof partialDefinition === "function") {
              partialDefinition(context.endpointDefinitions[endpointName]);
            } else {
              Object.assign(context.endpointDefinitions[endpointName] || {}, partialDefinition);
            }
          }
        }
        return api2;
      }
    };
    var initializedModules = modules.map(function(m2) {
      return m2.init(api2, optionsWithDefaults, context);
    });
    function injectEndpoints(inject) {
      var evaluatedEndpoints = inject.endpoints({
        query: function(x2) {
          return __spreadProps$1(__spreadValues$1({}, x2), { type: DefinitionType$1.query });
        },
        mutation: function(x2) {
          return __spreadProps$1(__spreadValues$1({}, x2), { type: DefinitionType$1.mutation });
        }
      });
      for (var _j2 = 0, _k = Object.entries(evaluatedEndpoints); _j2 < _k.length; _j2++) {
        var _l = _k[_j2], endpointName = _l[0], definition = _l[1];
        if (!inject.overrideExisting && endpointName in context.endpointDefinitions) {
          if (typeof process !== "undefined" && false) {
            console.error("called `injectEndpoints` to override already-existing endpointName " + endpointName + " without specifying `overrideExisting: true`");
          }
          continue;
        }
        context.endpointDefinitions[endpointName] = definition;
        for (var _m = 0, initializedModules_1 = initializedModules; _m < initializedModules_1.length; _m++) {
          var m2 = initializedModules_1[_m];
          m2.injectEndpoint(endpointName, definition);
        }
      }
      return api2;
    }
    return api2.injectEndpoints({ endpoints: options.endpoints });
  };
}
function isObjectEmpty(obj) {
  for (var k2 in obj) {
    return false;
  }
  return true;
}
var THIRTY_TWO_BIT_MAX_TIMER_SECONDS = 2147483647 / 1e3 - 1;
var buildCacheCollectionHandler = function(_j) {
  var reducerPath = _j.reducerPath, api2 = _j.api, context = _j.context, internalState = _j.internalState;
  var _k = api2.internalActions, removeQueryResult = _k.removeQueryResult, unsubscribeQueryResult = _k.unsubscribeQueryResult;
  function anySubscriptionsRemainingForKey(queryCacheKey) {
    var subscriptions = internalState.currentSubscriptions[queryCacheKey];
    return !!subscriptions && !isObjectEmpty(subscriptions);
  }
  var currentRemovalTimeouts = {};
  var handler = function(action, mwApi, internalState2) {
    var _a;
    if (unsubscribeQueryResult.match(action)) {
      var state = mwApi.getState()[reducerPath];
      var queryCacheKey = action.payload.queryCacheKey;
      handleUnsubscribe(queryCacheKey, (_a = state.queries[queryCacheKey]) == null ? void 0 : _a.endpointName, mwApi, state.config);
    }
    if (api2.util.resetApiState.match(action)) {
      for (var _j2 = 0, _k2 = Object.entries(currentRemovalTimeouts); _j2 < _k2.length; _j2++) {
        var _l = _k2[_j2], key = _l[0], timeout = _l[1];
        if (timeout)
          clearTimeout(timeout);
        delete currentRemovalTimeouts[key];
      }
    }
    if (context.hasRehydrationInfo(action)) {
      var state = mwApi.getState()[reducerPath];
      var queries = context.extractRehydrationInfo(action).queries;
      for (var _m = 0, _o = Object.entries(queries); _m < _o.length; _m++) {
        var _p = _o[_m], queryCacheKey = _p[0], queryState = _p[1];
        handleUnsubscribe(queryCacheKey, queryState == null ? void 0 : queryState.endpointName, mwApi, state.config);
      }
    }
  };
  function handleUnsubscribe(queryCacheKey, endpointName, api22, config) {
    var _a;
    var endpointDefinition = context.endpointDefinitions[endpointName];
    var keepUnusedDataFor = (_a = endpointDefinition == null ? void 0 : endpointDefinition.keepUnusedDataFor) != null ? _a : config.keepUnusedDataFor;
    if (keepUnusedDataFor === Infinity) {
      return;
    }
    var finalKeepUnusedDataFor = Math.max(0, Math.min(keepUnusedDataFor, THIRTY_TWO_BIT_MAX_TIMER_SECONDS));
    if (!anySubscriptionsRemainingForKey(queryCacheKey)) {
      var currentTimeout = currentRemovalTimeouts[queryCacheKey];
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
      currentRemovalTimeouts[queryCacheKey] = setTimeout(function() {
        if (!anySubscriptionsRemainingForKey(queryCacheKey)) {
          api22.dispatch(removeQueryResult({ queryCacheKey }));
        }
        delete currentRemovalTimeouts[queryCacheKey];
      }, finalKeepUnusedDataFor * 1e3);
    }
  }
  return handler;
};
var buildInvalidationByTagsHandler = function(_j) {
  var reducerPath = _j.reducerPath, context = _j.context, endpointDefinitions = _j.context.endpointDefinitions, mutationThunk = _j.mutationThunk, api2 = _j.api, assertTagType = _j.assertTagType, refetchQuery = _j.refetchQuery;
  var removeQueryResult = api2.internalActions.removeQueryResult;
  var isThunkActionWithTags = isAnyOf(isFulfilled(mutationThunk), isRejectedWithValue(mutationThunk));
  var handler = function(action, mwApi) {
    if (isThunkActionWithTags(action)) {
      invalidateTags(calculateProvidedByThunk(action, "invalidatesTags", endpointDefinitions, assertTagType), mwApi);
    }
    if (api2.util.invalidateTags.match(action)) {
      invalidateTags(calculateProvidedBy(action.payload, void 0, void 0, void 0, void 0, assertTagType), mwApi);
    }
  };
  function invalidateTags(tags, mwApi) {
    var rootState = mwApi.getState();
    var state = rootState[reducerPath];
    var toInvalidate = api2.util.selectInvalidatedBy(rootState, tags);
    context.batch(function() {
      var _a;
      var valuesArray = Array.from(toInvalidate.values());
      for (var _j2 = 0, valuesArray_1 = valuesArray; _j2 < valuesArray_1.length; _j2++) {
        var queryCacheKey = valuesArray_1[_j2].queryCacheKey;
        var querySubState = state.queries[queryCacheKey];
        var subscriptionSubState = (_a = state.subscriptions[queryCacheKey]) != null ? _a : {};
        if (querySubState) {
          if (Object.keys(subscriptionSubState).length === 0) {
            mwApi.dispatch(removeQueryResult({
              queryCacheKey
            }));
          } else if (querySubState.status !== QueryStatus.uninitialized) {
            mwApi.dispatch(refetchQuery(querySubState, queryCacheKey));
          }
        }
      }
    });
  }
  return handler;
};
var buildPollingHandler = function(_j) {
  var reducerPath = _j.reducerPath, queryThunk = _j.queryThunk, api2 = _j.api, refetchQuery = _j.refetchQuery, internalState = _j.internalState;
  var currentPolls = {};
  var handler = function(action, mwApi) {
    if (api2.internalActions.updateSubscriptionOptions.match(action) || api2.internalActions.unsubscribeQueryResult.match(action)) {
      updatePollingInterval(action.payload, mwApi);
    }
    if (queryThunk.pending.match(action) || queryThunk.rejected.match(action) && action.meta.condition) {
      updatePollingInterval(action.meta.arg, mwApi);
    }
    if (queryThunk.fulfilled.match(action) || queryThunk.rejected.match(action) && !action.meta.condition) {
      startNextPoll(action.meta.arg, mwApi);
    }
    if (api2.util.resetApiState.match(action)) {
      clearPolls();
    }
  };
  function startNextPoll(_j2, api22) {
    var queryCacheKey = _j2.queryCacheKey;
    var state = api22.getState()[reducerPath];
    var querySubState = state.queries[queryCacheKey];
    var subscriptions = internalState.currentSubscriptions[queryCacheKey];
    if (!querySubState || querySubState.status === QueryStatus.uninitialized)
      return;
    var lowestPollingInterval = findLowestPollingInterval(subscriptions);
    if (!Number.isFinite(lowestPollingInterval))
      return;
    var currentPoll = currentPolls[queryCacheKey];
    if (currentPoll == null ? void 0 : currentPoll.timeout) {
      clearTimeout(currentPoll.timeout);
      currentPoll.timeout = void 0;
    }
    var nextPollTimestamp = Date.now() + lowestPollingInterval;
    var currentInterval = currentPolls[queryCacheKey] = {
      nextPollTimestamp,
      pollingInterval: lowestPollingInterval,
      timeout: setTimeout(function() {
        currentInterval.timeout = void 0;
        api22.dispatch(refetchQuery(querySubState, queryCacheKey));
      }, lowestPollingInterval)
    };
  }
  function updatePollingInterval(_j2, api22) {
    var queryCacheKey = _j2.queryCacheKey;
    var state = api22.getState()[reducerPath];
    var querySubState = state.queries[queryCacheKey];
    var subscriptions = internalState.currentSubscriptions[queryCacheKey];
    if (!querySubState || querySubState.status === QueryStatus.uninitialized) {
      return;
    }
    var lowestPollingInterval = findLowestPollingInterval(subscriptions);
    if (!Number.isFinite(lowestPollingInterval)) {
      cleanupPollForKey(queryCacheKey);
      return;
    }
    var currentPoll = currentPolls[queryCacheKey];
    var nextPollTimestamp = Date.now() + lowestPollingInterval;
    if (!currentPoll || nextPollTimestamp < currentPoll.nextPollTimestamp) {
      startNextPoll({ queryCacheKey }, api22);
    }
  }
  function cleanupPollForKey(key) {
    var existingPoll = currentPolls[key];
    if (existingPoll == null ? void 0 : existingPoll.timeout) {
      clearTimeout(existingPoll.timeout);
    }
    delete currentPolls[key];
  }
  function clearPolls() {
    for (var _j2 = 0, _k = Object.keys(currentPolls); _j2 < _k.length; _j2++) {
      var key = _k[_j2];
      cleanupPollForKey(key);
    }
  }
  function findLowestPollingInterval(subscribers) {
    if (subscribers === void 0) {
      subscribers = {};
    }
    var lowestPollingInterval = Number.POSITIVE_INFINITY;
    for (var key in subscribers) {
      if (!!subscribers[key].pollingInterval) {
        lowestPollingInterval = Math.min(subscribers[key].pollingInterval, lowestPollingInterval);
      }
    }
    return lowestPollingInterval;
  }
  return handler;
};
var buildWindowEventHandler = function(_j) {
  var reducerPath = _j.reducerPath, context = _j.context, api2 = _j.api, refetchQuery = _j.refetchQuery, internalState = _j.internalState;
  var removeQueryResult = api2.internalActions.removeQueryResult;
  var handler = function(action, mwApi) {
    if (onFocus.match(action)) {
      refetchValidQueries(mwApi, "refetchOnFocus");
    }
    if (onOnline.match(action)) {
      refetchValidQueries(mwApi, "refetchOnReconnect");
    }
  };
  function refetchValidQueries(api22, type) {
    var state = api22.getState()[reducerPath];
    var queries = state.queries;
    var subscriptions = internalState.currentSubscriptions;
    context.batch(function() {
      for (var _j2 = 0, _k = Object.keys(subscriptions); _j2 < _k.length; _j2++) {
        var queryCacheKey = _k[_j2];
        var querySubState = queries[queryCacheKey];
        var subscriptionSubState = subscriptions[queryCacheKey];
        if (!subscriptionSubState || !querySubState)
          continue;
        var shouldRefetch = Object.values(subscriptionSubState).some(function(sub) {
          return sub[type] === true;
        }) || Object.values(subscriptionSubState).every(function(sub) {
          return sub[type] === void 0;
        }) && state.config[type];
        if (shouldRefetch) {
          if (Object.keys(subscriptionSubState).length === 0) {
            api22.dispatch(removeQueryResult({
              queryCacheKey
            }));
          } else if (querySubState.status !== QueryStatus.uninitialized) {
            api22.dispatch(refetchQuery(querySubState, queryCacheKey));
          }
        }
      }
    });
  }
  return handler;
};
var neverResolvedError = new Error("Promise never resolved before cacheEntryRemoved.");
var buildCacheLifecycleHandler = function(_j) {
  var api2 = _j.api, reducerPath = _j.reducerPath, context = _j.context, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk;
  _j.internalState;
  var isQueryThunk = isAsyncThunkAction(queryThunk);
  var isMutationThunk = isAsyncThunkAction(mutationThunk);
  var isFulfilledThunk = isFulfilled(queryThunk, mutationThunk);
  var lifecycleMap = {};
  var handler = function(action, mwApi, stateBefore) {
    var cacheKey = getCacheKey(action);
    if (queryThunk.pending.match(action)) {
      var oldState = stateBefore[reducerPath].queries[cacheKey];
      var state = mwApi.getState()[reducerPath].queries[cacheKey];
      if (!oldState && state) {
        handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
      }
    } else if (mutationThunk.pending.match(action)) {
      var state = mwApi.getState()[reducerPath].mutations[cacheKey];
      if (state) {
        handleNewKey(action.meta.arg.endpointName, action.meta.arg.originalArgs, cacheKey, mwApi, action.meta.requestId);
      }
    } else if (isFulfilledThunk(action)) {
      var lifecycle = lifecycleMap[cacheKey];
      if (lifecycle == null ? void 0 : lifecycle.valueResolved) {
        lifecycle.valueResolved({
          data: action.payload,
          meta: action.meta.baseQueryMeta
        });
        delete lifecycle.valueResolved;
      }
    } else if (api2.internalActions.removeQueryResult.match(action) || api2.internalActions.removeMutationResult.match(action)) {
      var lifecycle = lifecycleMap[cacheKey];
      if (lifecycle) {
        delete lifecycleMap[cacheKey];
        lifecycle.cacheEntryRemoved();
      }
    } else if (api2.util.resetApiState.match(action)) {
      for (var _j2 = 0, _k = Object.entries(lifecycleMap); _j2 < _k.length; _j2++) {
        var _l = _k[_j2], cacheKey2 = _l[0], lifecycle = _l[1];
        delete lifecycleMap[cacheKey2];
        lifecycle.cacheEntryRemoved();
      }
    }
  };
  function getCacheKey(action) {
    if (isQueryThunk(action))
      return action.meta.arg.queryCacheKey;
    if (isMutationThunk(action))
      return action.meta.requestId;
    if (api2.internalActions.removeQueryResult.match(action))
      return action.payload.queryCacheKey;
    if (api2.internalActions.removeMutationResult.match(action))
      return getMutationCacheKey(action.payload);
    return "";
  }
  function handleNewKey(endpointName, originalArgs, queryCacheKey, mwApi, requestId) {
    var endpointDefinition = context.endpointDefinitions[endpointName];
    var onCacheEntryAdded = endpointDefinition == null ? void 0 : endpointDefinition.onCacheEntryAdded;
    if (!onCacheEntryAdded)
      return;
    var lifecycle = {};
    var cacheEntryRemoved = new Promise(function(resolve) {
      lifecycle.cacheEntryRemoved = resolve;
    });
    var cacheDataLoaded = Promise.race([
      new Promise(function(resolve) {
        lifecycle.valueResolved = resolve;
      }),
      cacheEntryRemoved.then(function() {
        throw neverResolvedError;
      })
    ]);
    cacheDataLoaded.catch(function() {
    });
    lifecycleMap[queryCacheKey] = lifecycle;
    var selector = api2.endpoints[endpointName].select(endpointDefinition.type === DefinitionType$1.query ? originalArgs : queryCacheKey);
    var extra = mwApi.dispatch(function(_2, __, extra2) {
      return extra2;
    });
    var lifecycleApi = __spreadProps$1(__spreadValues$1({}, mwApi), {
      getCacheEntry: function() {
        return selector(mwApi.getState());
      },
      requestId,
      extra,
      updateCachedData: endpointDefinition.type === DefinitionType$1.query ? function(updateRecipe) {
        return mwApi.dispatch(api2.util.updateQueryData(endpointName, originalArgs, updateRecipe));
      } : void 0,
      cacheDataLoaded,
      cacheEntryRemoved
    });
    var runningHandler = onCacheEntryAdded(originalArgs, lifecycleApi);
    Promise.resolve(runningHandler).catch(function(e2) {
      if (e2 === neverResolvedError)
        return;
      throw e2;
    });
  }
  return handler;
};
var buildQueryLifecycleHandler = function(_j) {
  var api2 = _j.api, context = _j.context, queryThunk = _j.queryThunk, mutationThunk = _j.mutationThunk;
  var isPendingThunk = isPending(queryThunk, mutationThunk);
  var isRejectedThunk = isRejected(queryThunk, mutationThunk);
  var isFullfilledThunk = isFulfilled(queryThunk, mutationThunk);
  var lifecycleMap = {};
  var handler = function(action, mwApi) {
    var _a, _b, _c;
    if (isPendingThunk(action)) {
      var _j2 = action.meta, requestId = _j2.requestId, _k = _j2.arg, endpointName_1 = _k.endpointName, originalArgs_1 = _k.originalArgs;
      var endpointDefinition = context.endpointDefinitions[endpointName_1];
      var onQueryStarted = endpointDefinition == null ? void 0 : endpointDefinition.onQueryStarted;
      if (onQueryStarted) {
        var lifecycle_1 = {};
        var queryFulfilled = new Promise(function(resolve, reject) {
          lifecycle_1.resolve = resolve;
          lifecycle_1.reject = reject;
        });
        queryFulfilled.catch(function() {
        });
        lifecycleMap[requestId] = lifecycle_1;
        var selector_1 = api2.endpoints[endpointName_1].select(endpointDefinition.type === DefinitionType$1.query ? originalArgs_1 : requestId);
        var extra = mwApi.dispatch(function(_2, __, extra2) {
          return extra2;
        });
        var lifecycleApi = __spreadProps$1(__spreadValues$1({}, mwApi), {
          getCacheEntry: function() {
            return selector_1(mwApi.getState());
          },
          requestId,
          extra,
          updateCachedData: endpointDefinition.type === DefinitionType$1.query ? function(updateRecipe) {
            return mwApi.dispatch(api2.util.updateQueryData(endpointName_1, originalArgs_1, updateRecipe));
          } : void 0,
          queryFulfilled
        });
        onQueryStarted(originalArgs_1, lifecycleApi);
      }
    } else if (isFullfilledThunk(action)) {
      var _l = action.meta, requestId = _l.requestId, baseQueryMeta = _l.baseQueryMeta;
      (_a = lifecycleMap[requestId]) == null ? void 0 : _a.resolve({
        data: action.payload,
        meta: baseQueryMeta
      });
      delete lifecycleMap[requestId];
    } else if (isRejectedThunk(action)) {
      var _m = action.meta, requestId = _m.requestId, rejectedWithValue = _m.rejectedWithValue, baseQueryMeta = _m.baseQueryMeta;
      (_c = lifecycleMap[requestId]) == null ? void 0 : _c.reject({
        error: (_b = action.payload) != null ? _b : action.error,
        isUnhandledError: !rejectedWithValue,
        meta: baseQueryMeta
      });
      delete lifecycleMap[requestId];
    }
  };
  return handler;
};
var buildDevCheckHandler = function(_j) {
  var api2 = _j.api, apiUid = _j.context.apiUid, reducerPath = _j.reducerPath;
  return function(action, mwApi) {
    var _a, _b;
    if (api2.util.resetApiState.match(action)) {
      mwApi.dispatch(api2.internalActions.middlewareRegistered(apiUid));
    }
    if (typeof process !== "undefined" && false) {
      if (api2.internalActions.middlewareRegistered.match(action) && action.payload === apiUid && ((_b = (_a = mwApi.getState()[reducerPath]) == null ? void 0 : _a.config) == null ? void 0 : _b.middlewareRegistered) === "conflict") {
        console.warn('There is a mismatch between slice and middleware for the reducerPath "' + reducerPath + '".\nYou can only have one api per reducer path, this will lead to crashes in various situations!' + (reducerPath === "api" ? "\nIf you have multiple apis, you *have* to specify the reducerPath option when using createApi!" : ""));
      }
    }
  };
};
var promise;
var queueMicrotaskShim = typeof queueMicrotask === "function" ? queueMicrotask.bind(typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : globalThis) : function(cb2) {
  return (promise || (promise = Promise.resolve())).then(cb2).catch(function(err) {
    return setTimeout(function() {
      throw err;
    }, 0);
  });
};
var buildBatchedActionsHandler = function(_j) {
  var api2 = _j.api, queryThunk = _j.queryThunk, internalState = _j.internalState;
  var subscriptionsPrefix = api2.reducerPath + "/subscriptions";
  var previousSubscriptions = null;
  var dispatchQueued = false;
  var _k = api2.internalActions, updateSubscriptionOptions = _k.updateSubscriptionOptions, unsubscribeQueryResult = _k.unsubscribeQueryResult;
  var actuallyMutateSubscriptions = function(mutableState, action) {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i;
    if (updateSubscriptionOptions.match(action)) {
      var _j2 = action.payload, queryCacheKey = _j2.queryCacheKey, requestId = _j2.requestId, options = _j2.options;
      if ((_a = mutableState == null ? void 0 : mutableState[queryCacheKey]) == null ? void 0 : _a[requestId]) {
        mutableState[queryCacheKey][requestId] = options;
      }
      return true;
    }
    if (unsubscribeQueryResult.match(action)) {
      var _k2 = action.payload, queryCacheKey = _k2.queryCacheKey, requestId = _k2.requestId;
      if (mutableState[queryCacheKey]) {
        delete mutableState[queryCacheKey][requestId];
      }
      return true;
    }
    if (api2.internalActions.removeQueryResult.match(action)) {
      delete mutableState[action.payload.queryCacheKey];
      return true;
    }
    if (queryThunk.pending.match(action)) {
      var _l = action.meta, arg = _l.arg, requestId = _l.requestId;
      if (arg.subscribe) {
        var substate = (_c = mutableState[_b = arg.queryCacheKey]) != null ? _c : mutableState[_b] = {};
        substate[requestId] = (_e2 = (_d = arg.subscriptionOptions) != null ? _d : substate[requestId]) != null ? _e2 : {};
        return true;
      }
    }
    if (queryThunk.rejected.match(action)) {
      var _m = action.meta, condition = _m.condition, arg = _m.arg, requestId = _m.requestId;
      if (condition && arg.subscribe) {
        var substate = (_g = mutableState[_f = arg.queryCacheKey]) != null ? _g : mutableState[_f] = {};
        substate[requestId] = (_i = (_h = arg.subscriptionOptions) != null ? _h : substate[requestId]) != null ? _i : {};
        return true;
      }
    }
    return false;
  };
  return function(action, mwApi) {
    var _a, _b;
    if (!previousSubscriptions) {
      previousSubscriptions = JSON.parse(JSON.stringify(internalState.currentSubscriptions));
    }
    if (api2.util.resetApiState.match(action)) {
      previousSubscriptions = internalState.currentSubscriptions = {};
      return [true, false];
    }
    if (api2.internalActions.internal_probeSubscription.match(action)) {
      var _j2 = action.payload, queryCacheKey = _j2.queryCacheKey, requestId = _j2.requestId;
      var hasSubscription = !!((_a = internalState.currentSubscriptions[queryCacheKey]) == null ? void 0 : _a[requestId]);
      return [false, hasSubscription];
    }
    var didMutate = actuallyMutateSubscriptions(internalState.currentSubscriptions, action);
    if (didMutate) {
      if (!dispatchQueued) {
        queueMicrotaskShim(function() {
          var newSubscriptions = JSON.parse(JSON.stringify(internalState.currentSubscriptions));
          var _j3 = cn(previousSubscriptions, function() {
            return newSubscriptions;
          }), patches = _j3[1];
          mwApi.next(api2.internalActions.subscriptionsUpdated(patches));
          previousSubscriptions = newSubscriptions;
          dispatchQueued = false;
        });
        dispatchQueued = true;
      }
      var isSubscriptionSliceAction = !!((_b = action.type) == null ? void 0 : _b.startsWith(subscriptionsPrefix));
      var isAdditionalSubscriptionAction = queryThunk.rejected.match(action) && action.meta.condition && !!action.meta.arg.subscribe;
      var actionShouldContinue = !isSubscriptionSliceAction && !isAdditionalSubscriptionAction;
      return [actionShouldContinue, false];
    }
    return [true, false];
  };
};
function buildMiddleware(input) {
  var reducerPath = input.reducerPath, queryThunk = input.queryThunk, api2 = input.api, context = input.context;
  var apiUid = context.apiUid;
  var actions = {
    invalidateTags: createAction(reducerPath + "/invalidateTags")
  };
  var isThisApiSliceAction = function(action) {
    return !!action && typeof action.type === "string" && action.type.startsWith(reducerPath + "/");
  };
  var handlerBuilders = [
    buildDevCheckHandler,
    buildCacheCollectionHandler,
    buildInvalidationByTagsHandler,
    buildPollingHandler,
    buildCacheLifecycleHandler,
    buildQueryLifecycleHandler
  ];
  var middleware2 = function(mwApi) {
    var initialized2 = false;
    var internalState = {
      currentSubscriptions: {}
    };
    var builderArgs = __spreadProps$1(__spreadValues$1({}, input), {
      internalState,
      refetchQuery
    });
    var handlers = handlerBuilders.map(function(build) {
      return build(builderArgs);
    });
    var batchedActionsHandler = buildBatchedActionsHandler(builderArgs);
    var windowEventsHandler = buildWindowEventHandler(builderArgs);
    return function(next2) {
      return function(action) {
        if (!initialized2) {
          initialized2 = true;
          mwApi.dispatch(api2.internalActions.middlewareRegistered(apiUid));
        }
        var mwApiWithNext = __spreadProps$1(__spreadValues$1({}, mwApi), { next: next2 });
        var stateBefore = mwApi.getState();
        var _j = batchedActionsHandler(action, mwApiWithNext, stateBefore), actionShouldContinue = _j[0], hasSubscription = _j[1];
        var res;
        if (actionShouldContinue) {
          res = next2(action);
        } else {
          res = hasSubscription;
        }
        if (!!mwApi.getState()[reducerPath]) {
          windowEventsHandler(action, mwApiWithNext, stateBefore);
          if (isThisApiSliceAction(action) || context.hasRehydrationInfo(action)) {
            for (var _k = 0, handlers_1 = handlers; _k < handlers_1.length; _k++) {
              var handler = handlers_1[_k];
              handler(action, mwApiWithNext, stateBefore);
            }
          }
        }
        return res;
      };
    };
  };
  return { middleware: middleware2, actions };
  function refetchQuery(querySubState, queryCacheKey, override) {
    if (override === void 0) {
      override = {};
    }
    return queryThunk(__spreadValues$1({
      type: "query",
      endpointName: querySubState.endpointName,
      originalArgs: querySubState.originalArgs,
      subscribe: false,
      forceRefetch: true,
      queryCacheKey
    }, override));
  }
}
function safeAssign$1(target) {
  var args = [];
  for (var _j = 1; _j < arguments.length; _j++) {
    args[_j - 1] = arguments[_j];
  }
  Object.assign.apply(Object, __spreadArray$1([target], args));
}
var coreModuleName = /* @__PURE__ */ Symbol();
var coreModule = function() {
  return {
    name: coreModuleName,
    init: function(api2, _j, context) {
      var baseQuery2 = _j.baseQuery, tagTypes = _j.tagTypes, reducerPath = _j.reducerPath, serializeQueryArgs = _j.serializeQueryArgs, keepUnusedDataFor = _j.keepUnusedDataFor, refetchOnMountOrArgChange = _j.refetchOnMountOrArgChange, refetchOnFocus = _j.refetchOnFocus, refetchOnReconnect = _j.refetchOnReconnect;
      T$1();
      var assertTagType = function(tag) {
        if (typeof process !== "undefined" && false) {
          if (!tagTypes.includes(tag.type)) {
            console.error("Tag type '" + tag.type + "' was used, but not specified in `tagTypes`!");
          }
        }
        return tag;
      };
      Object.assign(api2, {
        reducerPath,
        endpoints: {},
        internalActions: {
          onOnline,
          onOffline,
          onFocus,
          onFocusLost
        },
        util: {}
      });
      var _k = buildThunks({
        baseQuery: baseQuery2,
        reducerPath,
        context,
        api: api2,
        serializeQueryArgs,
        assertTagType
      }), queryThunk = _k.queryThunk, mutationThunk = _k.mutationThunk, patchQueryData = _k.patchQueryData, updateQueryData = _k.updateQueryData, upsertQueryData = _k.upsertQueryData, prefetch = _k.prefetch, buildMatchThunkActions = _k.buildMatchThunkActions;
      var _l = buildSlice({
        context,
        queryThunk,
        mutationThunk,
        reducerPath,
        assertTagType,
        config: {
          refetchOnFocus,
          refetchOnReconnect,
          refetchOnMountOrArgChange,
          keepUnusedDataFor,
          reducerPath
        }
      }), reducer = _l.reducer, sliceActions = _l.actions;
      safeAssign$1(api2.util, {
        patchQueryData,
        updateQueryData,
        upsertQueryData,
        prefetch,
        resetApiState: sliceActions.resetApiState
      });
      safeAssign$1(api2.internalActions, sliceActions);
      var _m = buildMiddleware({
        reducerPath,
        context,
        queryThunk,
        mutationThunk,
        api: api2,
        assertTagType
      }), middleware2 = _m.middleware, middlewareActions = _m.actions;
      safeAssign$1(api2.util, middlewareActions);
      safeAssign$1(api2, { reducer, middleware: middleware2 });
      var _o = buildSelectors({
        serializeQueryArgs,
        reducerPath
      }), buildQuerySelector = _o.buildQuerySelector, buildMutationSelector = _o.buildMutationSelector, selectInvalidatedBy = _o.selectInvalidatedBy;
      safeAssign$1(api2.util, { selectInvalidatedBy });
      var _p = buildInitiate({
        queryThunk,
        mutationThunk,
        api: api2,
        serializeQueryArgs,
        context
      }), buildInitiateQuery = _p.buildInitiateQuery, buildInitiateMutation = _p.buildInitiateMutation, getRunningMutationThunk = _p.getRunningMutationThunk, getRunningMutationsThunk = _p.getRunningMutationsThunk, getRunningQueriesThunk = _p.getRunningQueriesThunk, getRunningQueryThunk = _p.getRunningQueryThunk, getRunningOperationPromises = _p.getRunningOperationPromises, removalWarning = _p.removalWarning;
      safeAssign$1(api2.util, {
        getRunningOperationPromises,
        getRunningOperationPromise: removalWarning,
        getRunningMutationThunk,
        getRunningMutationsThunk,
        getRunningQueryThunk,
        getRunningQueriesThunk
      });
      return {
        name: coreModuleName,
        injectEndpoint: function(endpointName, definition) {
          var _a, _b;
          var anyApi = api2;
          (_b = (_a = anyApi.endpoints)[endpointName]) != null ? _b : _a[endpointName] = {};
          if (isQueryDefinition$1(definition)) {
            safeAssign$1(anyApi.endpoints[endpointName], {
              name: endpointName,
              select: buildQuerySelector(endpointName, definition),
              initiate: buildInitiateQuery(endpointName, definition)
            }, buildMatchThunkActions(queryThunk, endpointName));
          } else if (isMutationDefinition$1(definition)) {
            safeAssign$1(anyApi.endpoints[endpointName], {
              name: endpointName,
              select: buildMutationSelector(),
              initiate: buildInitiateMutation(endpointName)
            }, buildMatchThunkActions(mutationThunk, endpointName));
          }
        }
      };
    }
  };
};
var shim = { exports: {} };
var useSyncExternalStoreShim_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e$1 = reactExports;
function h$2(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var k$2 = "function" === typeof Object.is ? Object.is : h$2, l$1 = e$1.useState, m$1 = e$1.useEffect, n$2 = e$1.useLayoutEffect, p$2 = e$1.useDebugValue;
function q$3(a2, b2) {
  var d2 = b2(), f2 = l$1({ inst: { value: d2, getSnapshot: b2 } }), c2 = f2[0].inst, g2 = f2[1];
  n$2(function() {
    c2.value = d2;
    c2.getSnapshot = b2;
    r$1(c2) && g2({ inst: c2 });
  }, [a2, d2, b2]);
  m$1(function() {
    r$1(c2) && g2({ inst: c2 });
    return a2(function() {
      r$1(c2) && g2({ inst: c2 });
    });
  }, [a2]);
  p$2(d2);
  return d2;
}
function r$1(a2) {
  var b2 = a2.getSnapshot;
  a2 = a2.value;
  try {
    var d2 = b2();
    return !k$2(a2, d2);
  } catch (f2) {
    return true;
  }
}
function t$2(a2, b2) {
  return b2();
}
var u$2 = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? t$2 : q$3;
useSyncExternalStoreShim_production_min.useSyncExternalStore = void 0 !== e$1.useSyncExternalStore ? e$1.useSyncExternalStore : u$2;
{
  shim.exports = useSyncExternalStoreShim_production_min;
}
var shimExports = shim.exports;
var withSelector = { exports: {} };
var withSelector_production_min = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h$1 = reactExports, n$1 = shimExports;
function p$1(a2, b2) {
  return a2 === b2 && (0 !== a2 || 1 / a2 === 1 / b2) || a2 !== a2 && b2 !== b2;
}
var q$2 = "function" === typeof Object.is ? Object.is : p$1, r = n$1.useSyncExternalStore, t$1 = h$1.useRef, u$1 = h$1.useEffect, v$2 = h$1.useMemo, w$1 = h$1.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector = function(a2, b2, e2, l2, g2) {
  var c2 = t$1(null);
  if (null === c2.current) {
    var f2 = { hasValue: false, value: null };
    c2.current = f2;
  } else f2 = c2.current;
  c2 = v$2(function() {
    function a3(a4) {
      if (!c3) {
        c3 = true;
        d3 = a4;
        a4 = l2(a4);
        if (void 0 !== g2 && f2.hasValue) {
          var b3 = f2.value;
          if (g2(b3, a4)) return k2 = b3;
        }
        return k2 = a4;
      }
      b3 = k2;
      if (q$2(d3, a4)) return b3;
      var e3 = l2(a4);
      if (void 0 !== g2 && g2(b3, e3)) return b3;
      d3 = a4;
      return k2 = e3;
    }
    var c3 = false, d3, k2, m2 = void 0 === e2 ? null : e2;
    return [function() {
      return a3(b2());
    }, null === m2 ? void 0 : function() {
      return a3(m2());
    }];
  }, [b2, e2, l2, g2]);
  var d2 = r(a2, c2[0], c2[1]);
  u$1(function() {
    f2.hasValue = true;
    f2.value = d2;
  }, [d2]);
  w$1(d2);
  return d2;
};
{
  withSelector.exports = withSelector_production_min;
}
var withSelectorExports = withSelector.exports;
function defaultNoopBatch(callback) {
  callback();
}
let batch = defaultNoopBatch;
const setBatch = (newBatch) => batch = newBatch;
const getBatch = () => batch;
const ContextKey = Symbol.for(`react-redux-context`);
const gT = typeof globalThis !== "undefined" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function getContext() {
  var _gT$ContextKey;
  if (!reactExports.createContext) return {};
  const contextMap = (_gT$ContextKey = gT[ContextKey]) != null ? _gT$ContextKey : gT[ContextKey] = /* @__PURE__ */ new Map();
  let realContext = contextMap.get(reactExports.createContext);
  if (!realContext) {
    realContext = reactExports.createContext(null);
    contextMap.set(reactExports.createContext, realContext);
  }
  return realContext;
}
const ReactReduxContext = /* @__PURE__ */ getContext();
function createReduxContextHook(context = ReactReduxContext) {
  return function useReduxContext2() {
    const contextValue = reactExports.useContext(context);
    return contextValue;
  };
}
const useReduxContext = /* @__PURE__ */ createReduxContextHook();
const notInitialized = () => {
  throw new Error("uSES not initialized!");
};
let useSyncExternalStoreWithSelector = notInitialized;
const initializeUseSelector = (fn2) => {
  useSyncExternalStoreWithSelector = fn2;
};
const refEquality = (a2, b2) => a2 === b2;
function createSelectorHook(context = ReactReduxContext) {
  const useReduxContext$1 = context === ReactReduxContext ? useReduxContext : createReduxContextHook(context);
  return function useSelector2(selector, equalityFnOrOptions = {}) {
    const {
      equalityFn = refEquality,
      stabilityCheck = void 0,
      noopCheck = void 0
    } = typeof equalityFnOrOptions === "function" ? {
      equalityFn: equalityFnOrOptions
    } : equalityFnOrOptions;
    const {
      store: store2,
      subscription,
      getServerState,
      stabilityCheck: globalStabilityCheck,
      noopCheck: globalNoopCheck
    } = useReduxContext$1();
    reactExports.useRef(true);
    const wrappedSelector = reactExports.useCallback({
      [selector.name](state) {
        const selected = selector(state);
        return selected;
      }
    }[selector.name], [selector, globalStabilityCheck, stabilityCheck]);
    const selectedState = useSyncExternalStoreWithSelector(subscription.addNestedSub, store2.getState, getServerState || store2.getState, wrappedSelector, equalityFn);
    reactExports.useDebugValue(selectedState);
    return selectedState;
  };
}
const useSelector = /* @__PURE__ */ createSelectorHook();
var reactIs = { exports: {} };
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g$1 = Symbol.for("react.provider"), h = Symbol.for("react.context"), k$1 = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q$1 = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v$1(a2) {
  if ("object" === typeof a2 && null !== a2) {
    var r2 = a2.$$typeof;
    switch (r2) {
      case b$1:
        switch (a2 = a2.type, a2) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return a2;
          default:
            switch (a2 = a2 && a2.$$typeof, a2) {
              case k$1:
              case h:
              case l:
              case q$1:
              case p:
              case g$1:
                return a2;
              default:
                return r2;
            }
        }
      case c:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g$1;
reactIs_production_min.Element = b$1;
reactIs_production_min.ForwardRef = l;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q$1;
reactIs_production_min.Memo = p;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m;
reactIs_production_min.SuspenseList = n;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a2) {
  return v$1(a2) === h;
};
reactIs_production_min.isContextProvider = function(a2) {
  return v$1(a2) === g$1;
};
reactIs_production_min.isElement = function(a2) {
  return "object" === typeof a2 && null !== a2 && a2.$$typeof === b$1;
};
reactIs_production_min.isForwardRef = function(a2) {
  return v$1(a2) === l;
};
reactIs_production_min.isFragment = function(a2) {
  return v$1(a2) === d;
};
reactIs_production_min.isLazy = function(a2) {
  return v$1(a2) === q$1;
};
reactIs_production_min.isMemo = function(a2) {
  return v$1(a2) === p;
};
reactIs_production_min.isPortal = function(a2) {
  return v$1(a2) === c;
};
reactIs_production_min.isProfiler = function(a2) {
  return v$1(a2) === f;
};
reactIs_production_min.isStrictMode = function(a2) {
  return v$1(a2) === e;
};
reactIs_production_min.isSuspense = function(a2) {
  return v$1(a2) === m;
};
reactIs_production_min.isSuspenseList = function(a2) {
  return v$1(a2) === n;
};
reactIs_production_min.isValidElementType = function(a2) {
  return "string" === typeof a2 || "function" === typeof a2 || a2 === d || a2 === f || a2 === e || a2 === m || a2 === n || a2 === t || "object" === typeof a2 && null !== a2 && (a2.$$typeof === q$1 || a2.$$typeof === p || a2.$$typeof === g$1 || a2.$$typeof === h || a2.$$typeof === l || a2.$$typeof === u || void 0 !== a2.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v$1;
{
  reactIs.exports = reactIs_production_min;
}
var reactIsExports = reactIs.exports;
function createListenerCollection() {
  const batch2 = getBatch();
  let first = null;
  let last = null;
  return {
    clear() {
      first = null;
      last = null;
    },
    notify() {
      batch2(() => {
        let listener2 = first;
        while (listener2) {
          listener2.callback();
          listener2 = listener2.next;
        }
      });
    },
    get() {
      let listeners = [];
      let listener2 = first;
      while (listener2) {
        listeners.push(listener2);
        listener2 = listener2.next;
      }
      return listeners;
    },
    subscribe(callback) {
      let isSubscribed = true;
      let listener2 = last = {
        callback,
        next: null,
        prev: last
      };
      if (listener2.prev) {
        listener2.prev.next = listener2;
      } else {
        first = listener2;
      }
      return function unsubscribe() {
        if (!isSubscribed || first === null) return;
        isSubscribed = false;
        if (listener2.next) {
          listener2.next.prev = listener2.prev;
        } else {
          last = listener2.prev;
        }
        if (listener2.prev) {
          listener2.prev.next = listener2.next;
        } else {
          first = listener2.next;
        }
      };
    }
  };
}
const nullListeners = {
  notify() {
  },
  get: () => []
};
function createSubscription(store2, parentSub) {
  let unsubscribe;
  let listeners = nullListeners;
  let subscriptionsAmount = 0;
  let selfSubscribed = false;
  function addNestedSub(listener2) {
    trySubscribe();
    const cleanupListener = listeners.subscribe(listener2);
    let removed = false;
    return () => {
      if (!removed) {
        removed = true;
        cleanupListener();
        tryUnsubscribe();
      }
    };
  }
  function notifyNestedSubs() {
    listeners.notify();
  }
  function handleChangeWrapper() {
    if (subscription.onStateChange) {
      subscription.onStateChange();
    }
  }
  function isSubscribed() {
    return selfSubscribed;
  }
  function trySubscribe() {
    subscriptionsAmount++;
    if (!unsubscribe) {
      unsubscribe = store2.subscribe(handleChangeWrapper);
      listeners = createListenerCollection();
    }
  }
  function tryUnsubscribe() {
    subscriptionsAmount--;
    if (unsubscribe && subscriptionsAmount === 0) {
      unsubscribe();
      unsubscribe = void 0;
      listeners.clear();
      listeners = nullListeners;
    }
  }
  function trySubscribeSelf() {
    if (!selfSubscribed) {
      selfSubscribed = true;
      trySubscribe();
    }
  }
  function tryUnsubscribeSelf() {
    if (selfSubscribed) {
      selfSubscribed = false;
      tryUnsubscribe();
    }
  }
  const subscription = {
    addNestedSub,
    notifyNestedSubs,
    handleChangeWrapper,
    isSubscribed,
    trySubscribe: trySubscribeSelf,
    tryUnsubscribe: tryUnsubscribeSelf,
    getListeners: () => listeners
  };
  return subscription;
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const useIsomorphicLayoutEffect$1 = canUseDOM ? reactExports.useLayoutEffect : reactExports.useEffect;
function is(x2, y2) {
  if (x2 === y2) {
    return x2 !== 0 || y2 !== 0 || 1 / x2 === 1 / y2;
  } else {
    return x2 !== x2 && y2 !== y2;
  }
}
function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;
  if (typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null) {
    return false;
  }
  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;
  for (let i2 = 0; i2 < keysA.length; i2++) {
    if (!Object.prototype.hasOwnProperty.call(objB, keysA[i2]) || !is(objA[keysA[i2]], objB[keysA[i2]])) {
      return false;
    }
  }
  return true;
}
function Provider({
  store: store2,
  context,
  children,
  serverState,
  stabilityCheck = "once",
  noopCheck = "once"
}) {
  const contextValue = reactExports.useMemo(() => {
    const subscription = createSubscription(store2);
    return {
      store: store2,
      subscription,
      getServerState: serverState ? () => serverState : void 0,
      stabilityCheck,
      noopCheck
    };
  }, [store2, serverState, stabilityCheck, noopCheck]);
  const previousState = reactExports.useMemo(() => store2.getState(), [store2]);
  useIsomorphicLayoutEffect$1(() => {
    const {
      subscription
    } = contextValue;
    subscription.onStateChange = subscription.notifyNestedSubs;
    subscription.trySubscribe();
    if (previousState !== store2.getState()) {
      subscription.notifyNestedSubs();
    }
    return () => {
      subscription.tryUnsubscribe();
      subscription.onStateChange = void 0;
    };
  }, [contextValue, previousState]);
  const Context = context || ReactReduxContext;
  return /* @__PURE__ */ reactExports.createElement(Context.Provider, {
    value: contextValue
  }, children);
}
function createStoreHook(context = ReactReduxContext) {
  const useReduxContext$1 = (
    // @ts-ignore
    context === ReactReduxContext ? useReduxContext : (
      // @ts-ignore
      createReduxContextHook(context)
    )
  );
  return function useStore2() {
    const {
      store: store2
    } = useReduxContext$1();
    return store2;
  };
}
const useStore = /* @__PURE__ */ createStoreHook();
function createDispatchHook(context = ReactReduxContext) {
  const useStore$1 = (
    // @ts-ignore
    context === ReactReduxContext ? useStore : createStoreHook(context)
  );
  return function useDispatch2() {
    const store2 = useStore$1();
    return store2.dispatch;
  };
}
const useDispatch = /* @__PURE__ */ createDispatchHook();
initializeUseSelector(withSelectorExports.useSyncExternalStoreWithSelector);
setBatch(reactDomExports.unstable_batchedUpdates);
var __spreadArray = function(to, from2) {
  for (var i2 = 0, il2 = from2.length, j2 = to.length; i2 < il2; i2++, j2++)
    to[j2] = from2[i2];
  return to;
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = function(obj, key, value) {
  return key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
};
var __spreadValues = function(a2, b2) {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var _i = 0, _c = __getOwnPropSymbols(b2); _i < _c.length; _i++) {
      var prop = _c[_i];
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = function(a2, b2) {
  return __defProps(a2, __getOwnPropDescs(b2));
};
function useStableQueryArgs(queryArgs, serialize2, endpointDefinition, endpointName) {
  var incoming = reactExports.useMemo(function() {
    return {
      queryArgs,
      serialized: typeof queryArgs == "object" ? serialize2({ queryArgs, endpointDefinition, endpointName }) : queryArgs
    };
  }, [queryArgs, serialize2, endpointDefinition, endpointName]);
  var cache2 = reactExports.useRef(incoming);
  reactExports.useEffect(function() {
    if (cache2.current.serialized !== incoming.serialized) {
      cache2.current = incoming;
    }
  }, [incoming]);
  return cache2.current.serialized === incoming.serialized ? cache2.current.queryArgs : queryArgs;
}
var UNINITIALIZED_VALUE = Symbol();
function useShallowStableValue(value) {
  var cache2 = reactExports.useRef(value);
  reactExports.useEffect(function() {
    if (!shallowEqual(cache2.current, value)) {
      cache2.current = value;
    }
  }, [value]);
  return shallowEqual(cache2.current, value) ? cache2.current : value;
}
var cache = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0;
var defaultSerializeQueryArgs = function(_c) {
  var endpointName = _c.endpointName, queryArgs = _c.queryArgs;
  var serialized = "";
  var cached = cache == null ? void 0 : cache.get(queryArgs);
  if (typeof cached === "string") {
    serialized = cached;
  } else {
    var stringified = JSON.stringify(queryArgs, function(key, value) {
      return isPlainObject$1(value) ? Object.keys(value).sort().reduce(function(acc, key2) {
        acc[key2] = value[key2];
        return acc;
      }, {}) : value;
    });
    if (isPlainObject$1(queryArgs)) {
      cache == null ? void 0 : cache.set(queryArgs, stringified);
    }
    serialized = stringified;
  }
  return endpointName + "(" + serialized + ")";
};
var useIsomorphicLayoutEffect = typeof window !== "undefined" && !!window.document && !!window.document.createElement ? reactExports.useLayoutEffect : reactExports.useEffect;
var defaultMutationStateSelector = function(x2) {
  return x2;
};
var noPendingQueryStateSelector = function(selected) {
  if (selected.isUninitialized) {
    return __spreadProps(__spreadValues({}, selected), {
      isUninitialized: false,
      isFetching: true,
      isLoading: selected.data !== void 0 ? false : true,
      status: QueryStatus.pending
    });
  }
  return selected;
};
function buildHooks(_c) {
  var api2 = _c.api, _d = _c.moduleOptions, batch2 = _d.batch, useDispatch2 = _d.useDispatch, useSelector2 = _d.useSelector, useStore2 = _d.useStore, unstable__sideEffectsInRender = _d.unstable__sideEffectsInRender, serializeQueryArgs = _c.serializeQueryArgs, context = _c.context;
  var usePossiblyImmediateEffect = unstable__sideEffectsInRender ? function(cb2) {
    return cb2();
  } : reactExports.useEffect;
  return { buildQueryHooks, buildMutationHook, usePrefetch };
  function queryStatePreSelector(currentState, lastResult, queryArgs) {
    if ((lastResult == null ? void 0 : lastResult.endpointName) && currentState.isUninitialized) {
      var endpointName = lastResult.endpointName;
      var endpointDefinition = context.endpointDefinitions[endpointName];
      if (serializeQueryArgs({
        queryArgs: lastResult.originalArgs,
        endpointDefinition,
        endpointName
      }) === serializeQueryArgs({
        queryArgs,
        endpointDefinition,
        endpointName
      }))
        lastResult = void 0;
    }
    var data2 = currentState.isSuccess ? currentState.data : lastResult == null ? void 0 : lastResult.data;
    if (data2 === void 0)
      data2 = currentState.data;
    var hasData = data2 !== void 0;
    var isFetching = currentState.isLoading;
    var isLoading = !hasData && isFetching;
    var isSuccess = currentState.isSuccess || isFetching && hasData;
    return __spreadProps(__spreadValues({}, currentState), {
      data: data2,
      currentData: currentState.data,
      isFetching,
      isLoading,
      isSuccess
    });
  }
  function usePrefetch(endpointName, defaultOptions) {
    var dispatch = useDispatch2();
    var stableDefaultOptions = useShallowStableValue(defaultOptions);
    return reactExports.useCallback(function(arg, options) {
      return dispatch(api2.util.prefetch(endpointName, arg, __spreadValues(__spreadValues({}, stableDefaultOptions), options)));
    }, [endpointName, dispatch, stableDefaultOptions]);
  }
  function buildQueryHooks(name) {
    var useQuerySubscription = function(arg, _c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, refetchOnReconnect = _d2.refetchOnReconnect, refetchOnFocus = _d2.refetchOnFocus, refetchOnMountOrArgChange = _d2.refetchOnMountOrArgChange, _e2 = _d2.skip, skip = _e2 === void 0 ? false : _e2, _f = _d2.pollingInterval, pollingInterval = _f === void 0 ? 0 : _f;
      var initiate = api2.endpoints[name].initiate;
      var dispatch = useDispatch2();
      var stableArg = useStableQueryArgs(skip ? skipToken : arg, defaultSerializeQueryArgs, context.endpointDefinitions[name], name);
      var stableSubscriptionOptions = useShallowStableValue({
        refetchOnReconnect,
        refetchOnFocus,
        pollingInterval
      });
      var lastRenderHadSubscription = reactExports.useRef(false);
      var promiseRef = reactExports.useRef();
      var _g = promiseRef.current || {}, queryCacheKey = _g.queryCacheKey, requestId = _g.requestId;
      var currentRenderHasSubscription = false;
      if (queryCacheKey && requestId) {
        var returnedValue = dispatch(api2.internalActions.internal_probeSubscription({
          queryCacheKey,
          requestId
        }));
        currentRenderHasSubscription = !!returnedValue;
      }
      var subscriptionRemoved = !currentRenderHasSubscription && lastRenderHadSubscription.current;
      usePossiblyImmediateEffect(function() {
        lastRenderHadSubscription.current = currentRenderHasSubscription;
      });
      usePossiblyImmediateEffect(function() {
        if (subscriptionRemoved) {
          promiseRef.current = void 0;
        }
      }, [subscriptionRemoved]);
      usePossiblyImmediateEffect(function() {
        var _a;
        var lastPromise = promiseRef.current;
        if (typeof process !== "undefined" && false) {
          console.log(subscriptionRemoved);
        }
        if (stableArg === skipToken) {
          lastPromise == null ? void 0 : lastPromise.unsubscribe();
          promiseRef.current = void 0;
          return;
        }
        var lastSubscriptionOptions = (_a = promiseRef.current) == null ? void 0 : _a.subscriptionOptions;
        if (!lastPromise || lastPromise.arg !== stableArg) {
          lastPromise == null ? void 0 : lastPromise.unsubscribe();
          var promise2 = dispatch(initiate(stableArg, {
            subscriptionOptions: stableSubscriptionOptions,
            forceRefetch: refetchOnMountOrArgChange
          }));
          promiseRef.current = promise2;
        } else if (stableSubscriptionOptions !== lastSubscriptionOptions) {
          lastPromise.updateSubscriptionOptions(stableSubscriptionOptions);
        }
      }, [
        dispatch,
        initiate,
        refetchOnMountOrArgChange,
        stableArg,
        stableSubscriptionOptions,
        subscriptionRemoved
      ]);
      reactExports.useEffect(function() {
        return function() {
          var _a;
          (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
          promiseRef.current = void 0;
        };
      }, []);
      return reactExports.useMemo(function() {
        return {
          refetch: function() {
            var _a;
            if (!promiseRef.current)
              throw new Error("Cannot refetch a query that has not been started yet.");
            return (_a = promiseRef.current) == null ? void 0 : _a.refetch();
          }
        };
      }, []);
    };
    var useLazyQuerySubscription = function(_c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, refetchOnReconnect = _d2.refetchOnReconnect, refetchOnFocus = _d2.refetchOnFocus, _e2 = _d2.pollingInterval, pollingInterval = _e2 === void 0 ? 0 : _e2;
      var initiate = api2.endpoints[name].initiate;
      var dispatch = useDispatch2();
      var _f = reactExports.useState(UNINITIALIZED_VALUE), arg = _f[0], setArg = _f[1];
      var promiseRef = reactExports.useRef();
      var stableSubscriptionOptions = useShallowStableValue({
        refetchOnReconnect,
        refetchOnFocus,
        pollingInterval
      });
      usePossiblyImmediateEffect(function() {
        var _a, _b;
        var lastSubscriptionOptions = (_a = promiseRef.current) == null ? void 0 : _a.subscriptionOptions;
        if (stableSubscriptionOptions !== lastSubscriptionOptions) {
          (_b = promiseRef.current) == null ? void 0 : _b.updateSubscriptionOptions(stableSubscriptionOptions);
        }
      }, [stableSubscriptionOptions]);
      var subscriptionOptionsRef = reactExports.useRef(stableSubscriptionOptions);
      usePossiblyImmediateEffect(function() {
        subscriptionOptionsRef.current = stableSubscriptionOptions;
      }, [stableSubscriptionOptions]);
      var trigger = reactExports.useCallback(function(arg2, preferCacheValue) {
        if (preferCacheValue === void 0) {
          preferCacheValue = false;
        }
        var promise2;
        batch2(function() {
          var _a;
          (_a = promiseRef.current) == null ? void 0 : _a.unsubscribe();
          promiseRef.current = promise2 = dispatch(initiate(arg2, {
            subscriptionOptions: subscriptionOptionsRef.current,
            forceRefetch: !preferCacheValue
          }));
          setArg(arg2);
        });
        return promise2;
      }, [dispatch, initiate]);
      reactExports.useEffect(function() {
        return function() {
          var _a;
          (_a = promiseRef == null ? void 0 : promiseRef.current) == null ? void 0 : _a.unsubscribe();
        };
      }, []);
      reactExports.useEffect(function() {
        if (arg !== UNINITIALIZED_VALUE && !promiseRef.current) {
          trigger(arg, true);
        }
      }, [arg, trigger]);
      return reactExports.useMemo(function() {
        return [trigger, arg];
      }, [trigger, arg]);
    };
    var useQueryState = function(arg, _c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, _e2 = _d2.skip, skip = _e2 === void 0 ? false : _e2, selectFromResult = _d2.selectFromResult;
      var select = api2.endpoints[name].select;
      var stableArg = useStableQueryArgs(skip ? skipToken : arg, serializeQueryArgs, context.endpointDefinitions[name], name);
      var lastValue = reactExports.useRef();
      var selectDefaultResult = reactExports.useMemo(function() {
        return createSelector([
          select(stableArg),
          function(_2, lastResult) {
            return lastResult;
          },
          function(_2) {
            return stableArg;
          }
        ], queryStatePreSelector);
      }, [select, stableArg]);
      var querySelector = reactExports.useMemo(function() {
        return selectFromResult ? createSelector([selectDefaultResult], selectFromResult) : selectDefaultResult;
      }, [selectDefaultResult, selectFromResult]);
      var currentState = useSelector2(function(state) {
        return querySelector(state, lastValue.current);
      }, shallowEqual);
      var store2 = useStore2();
      var newLastValue = selectDefaultResult(store2.getState(), lastValue.current);
      useIsomorphicLayoutEffect(function() {
        lastValue.current = newLastValue;
      }, [newLastValue]);
      return currentState;
    };
    return {
      useQueryState,
      useQuerySubscription,
      useLazyQuerySubscription,
      useLazyQuery: function(options) {
        var _c2 = useLazyQuerySubscription(options), trigger = _c2[0], arg = _c2[1];
        var queryStateResults = useQueryState(arg, __spreadProps(__spreadValues({}, options), {
          skip: arg === UNINITIALIZED_VALUE
        }));
        var info = reactExports.useMemo(function() {
          return { lastArg: arg };
        }, [arg]);
        return reactExports.useMemo(function() {
          return [trigger, queryStateResults, info];
        }, [trigger, queryStateResults, info]);
      },
      useQuery: function(arg, options) {
        var querySubscriptionResults = useQuerySubscription(arg, options);
        var queryStateResults = useQueryState(arg, __spreadValues({
          selectFromResult: arg === skipToken || (options == null ? void 0 : options.skip) ? void 0 : noPendingQueryStateSelector
        }, options));
        var data2 = queryStateResults.data, status = queryStateResults.status, isLoading = queryStateResults.isLoading, isSuccess = queryStateResults.isSuccess, isError = queryStateResults.isError, error = queryStateResults.error;
        reactExports.useDebugValue({ data: data2, status, isLoading, isSuccess, isError, error });
        return reactExports.useMemo(function() {
          return __spreadValues(__spreadValues({}, queryStateResults), querySubscriptionResults);
        }, [queryStateResults, querySubscriptionResults]);
      }
    };
  }
  function buildMutationHook(name) {
    return function(_c2) {
      var _d2 = _c2 === void 0 ? {} : _c2, _e2 = _d2.selectFromResult, selectFromResult = _e2 === void 0 ? defaultMutationStateSelector : _e2, fixedCacheKey = _d2.fixedCacheKey;
      var _f = api2.endpoints[name], select = _f.select, initiate = _f.initiate;
      var dispatch = useDispatch2();
      var _g = reactExports.useState(), promise2 = _g[0], setPromise = _g[1];
      reactExports.useEffect(function() {
        return function() {
          if (!(promise2 == null ? void 0 : promise2.arg.fixedCacheKey)) {
            promise2 == null ? void 0 : promise2.reset();
          }
        };
      }, [promise2]);
      var triggerMutation = reactExports.useCallback(function(arg) {
        var promise22 = dispatch(initiate(arg, { fixedCacheKey }));
        setPromise(promise22);
        return promise22;
      }, [dispatch, initiate, fixedCacheKey]);
      var requestId = (promise2 || {}).requestId;
      var mutationSelector = reactExports.useMemo(function() {
        return createSelector([select({ fixedCacheKey, requestId: promise2 == null ? void 0 : promise2.requestId })], selectFromResult);
      }, [select, promise2, selectFromResult, fixedCacheKey]);
      var currentState = useSelector2(mutationSelector, shallowEqual);
      var originalArgs = fixedCacheKey == null ? promise2 == null ? void 0 : promise2.arg.originalArgs : void 0;
      var reset = reactExports.useCallback(function() {
        batch2(function() {
          if (promise2) {
            setPromise(void 0);
          }
          if (fixedCacheKey) {
            dispatch(api2.internalActions.removeMutationResult({
              requestId,
              fixedCacheKey
            }));
          }
        });
      }, [dispatch, fixedCacheKey, promise2, requestId]);
      var endpointName = currentState.endpointName, data2 = currentState.data, status = currentState.status, isLoading = currentState.isLoading, isSuccess = currentState.isSuccess, isError = currentState.isError, error = currentState.error;
      reactExports.useDebugValue({
        endpointName,
        data: data2,
        status,
        isLoading,
        isSuccess,
        isError,
        error
      });
      var finalState = reactExports.useMemo(function() {
        return __spreadProps(__spreadValues({}, currentState), { originalArgs, reset });
      }, [currentState, originalArgs, reset]);
      return reactExports.useMemo(function() {
        return [triggerMutation, finalState];
      }, [triggerMutation, finalState]);
    };
  }
}
var DefinitionType;
(function(DefinitionType2) {
  DefinitionType2["query"] = "query";
  DefinitionType2["mutation"] = "mutation";
})(DefinitionType || (DefinitionType = {}));
function isQueryDefinition(e2) {
  return e2.type === DefinitionType.query;
}
function isMutationDefinition(e2) {
  return e2.type === DefinitionType.mutation;
}
function capitalize(str) {
  return str.replace(str[0], str[0].toUpperCase());
}
function safeAssign(target) {
  var args = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }
  Object.assign.apply(Object, __spreadArray([target], args));
}
var reactHooksModuleName = /* @__PURE__ */ Symbol();
var reactHooksModule = function(_c) {
  var _d = {}, _e2 = _d.batch, batch2 = _e2 === void 0 ? reactDomExports.unstable_batchedUpdates : _e2, _f = _d.useDispatch, useDispatch$1 = _f === void 0 ? useDispatch : _f, _g = _d.useSelector, useSelector$1 = _g === void 0 ? useSelector : _g, _h = _d.useStore, useStore$1 = _h === void 0 ? useStore : _h, _j = _d.unstable__sideEffectsInRender, unstable__sideEffectsInRender = _j === void 0 ? false : _j;
  return {
    name: reactHooksModuleName,
    init: function(api2, _c2, context) {
      var serializeQueryArgs = _c2.serializeQueryArgs;
      var anyApi = api2;
      var _d2 = buildHooks({
        api: api2,
        moduleOptions: {
          batch: batch2,
          useDispatch: useDispatch$1,
          useSelector: useSelector$1,
          useStore: useStore$1,
          unstable__sideEffectsInRender
        },
        serializeQueryArgs,
        context
      }), buildQueryHooks = _d2.buildQueryHooks, buildMutationHook = _d2.buildMutationHook, usePrefetch = _d2.usePrefetch;
      safeAssign(anyApi, { usePrefetch });
      safeAssign(context, { batch: batch2 });
      return {
        injectEndpoint: function(endpointName, definition) {
          if (isQueryDefinition(definition)) {
            var _c3 = buildQueryHooks(endpointName), useQuery = _c3.useQuery, useLazyQuery = _c3.useLazyQuery, useLazyQuerySubscription = _c3.useLazyQuerySubscription, useQueryState = _c3.useQueryState, useQuerySubscription = _c3.useQuerySubscription;
            safeAssign(anyApi.endpoints[endpointName], {
              useQuery,
              useLazyQuery,
              useLazyQuerySubscription,
              useQueryState,
              useQuerySubscription
            });
            api2["use" + capitalize(endpointName) + "Query"] = useQuery;
            api2["useLazy" + capitalize(endpointName) + "Query"] = useLazyQuery;
          } else if (isMutationDefinition(definition)) {
            var useMutation = buildMutationHook(endpointName);
            safeAssign(anyApi.endpoints[endpointName], {
              useMutation
            });
            api2["use" + capitalize(endpointName) + "Mutation"] = useMutation;
          }
        }
      };
    }
  };
};
var createApi = /* @__PURE__ */ buildCreateApi(coreModule(), reactHooksModule());
var query = { exports: {} };
var rtkQuery_cjs_production_min = {};
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(reduxToolkit_esm);
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(immer_esm);
const require$$2 = /* @__PURE__ */ getAugmentedNamespace(es);
(function(exports) {
  var e2, t2, n2 = commonjsGlobal && commonjsGlobal.__generator || function(e3, t3) {
    var n3, r3, i3, a3, u3 = { label: 0, sent: function() {
      if (1 & i3[0]) throw i3[1];
      return i3[1];
    }, trys: [], ops: [] };
    return a3 = { next: o3(0), throw: o3(1), return: o3(2) }, "function" == typeof Symbol && (a3[Symbol.iterator] = function() {
      return this;
    }), a3;
    function o3(a4) {
      return function(o4) {
        return function(a5) {
          if (n3) throw new TypeError("Generator is already executing.");
          for (; u3; ) try {
            if (n3 = 1, r3 && (i3 = 2 & a5[0] ? r3.return : a5[0] ? r3.throw || ((i3 = r3.return) && i3.call(r3), 0) : r3.next) && !(i3 = i3.call(r3, a5[1])).done) return i3;
            switch (r3 = 0, i3 && (a5 = [2 & a5[0], i3.value]), a5[0]) {
              case 0:
              case 1:
                i3 = a5;
                break;
              case 4:
                return u3.label++, { value: a5[1], done: false };
              case 5:
                u3.label++, r3 = a5[1], a5 = [0];
                continue;
              case 7:
                a5 = u3.ops.pop(), u3.trys.pop();
                continue;
              default:
                if (!((i3 = (i3 = u3.trys).length > 0 && i3[i3.length - 1]) || 6 !== a5[0] && 2 !== a5[0])) {
                  u3 = 0;
                  continue;
                }
                if (3 === a5[0] && (!i3 || a5[1] > i3[0] && a5[1] < i3[3])) {
                  u3.label = a5[1];
                  break;
                }
                if (6 === a5[0] && u3.label < i3[1]) {
                  u3.label = i3[1], i3 = a5;
                  break;
                }
                if (i3 && u3.label < i3[2]) {
                  u3.label = i3[2], u3.ops.push(a5);
                  break;
                }
                i3[2] && u3.ops.pop(), u3.trys.pop();
                continue;
            }
            a5 = t3.call(e3, u3);
          } catch (e4) {
            a5 = [6, e4], r3 = 0;
          } finally {
            n3 = i3 = 0;
          }
          if (5 & a5[0]) throw a5[1];
          return { value: a5[0] ? a5[1] : void 0, done: true };
        }([a4, o4]);
      };
    }
  }, r2 = commonjsGlobal && commonjsGlobal.__spreadArray || function(e3, t3) {
    for (var n3 = 0, r3 = t3.length, i3 = e3.length; n3 < r3; n3++, i3++) e3[i3] = t3[n3];
    return e3;
  }, i2 = Object.create, a2 = Object.defineProperty, u2 = Object.defineProperties, o2 = Object.getOwnPropertyDescriptor, s2 = Object.getOwnPropertyDescriptors, c2 = Object.getOwnPropertyNames, l2 = Object.getOwnPropertySymbols, d2 = Object.getPrototypeOf, f2 = Object.prototype.hasOwnProperty, p2 = Object.prototype.propertyIsEnumerable, h2 = function(e3, t3, n3) {
    return t3 in e3 ? a2(e3, t3, { enumerable: true, configurable: true, writable: true, value: n3 }) : e3[t3] = n3;
  }, v2 = function(e3, t3) {
    for (var n3 in t3 || (t3 = {})) f2.call(t3, n3) && h2(e3, n3, t3[n3]);
    if (l2) for (var r3 = 0, i3 = l2(t3); r3 < i3.length; r3++) p2.call(t3, n3 = i3[r3]) && h2(e3, n3, t3[n3]);
    return e3;
  }, y2 = function(e3, t3) {
    return u2(e3, s2(t3));
  }, m2 = function(e3) {
    return a2(e3, "__esModule", { value: true });
  }, g2 = function(e3, t3) {
    var n3 = {};
    for (var r3 in e3) f2.call(e3, r3) && t3.indexOf(r3) < 0 && (n3[r3] = e3[r3]);
    if (null != e3 && l2) for (var i3 = 0, a3 = l2(e3); i3 < a3.length; i3++) t3.indexOf(r3 = a3[i3]) < 0 && p2.call(e3, r3) && (n3[r3] = e3[r3]);
    return n3;
  }, b2 = function(e3) {
    return function(e4, t3, n3) {
      if (t3 && "object" == typeof t3 || "function" == typeof t3) for (var r3 = function(r4) {
        f2.call(e4, r4) || "default" === r4 || a2(e4, r4, { get: function() {
          return t3[r4];
        }, enumerable: !(n3 = o2(t3, r4)) || n3.enumerable });
      }, i3 = 0, u3 = c2(t3); i3 < u3.length; i3++) r3(u3[i3]);
      return e4;
    }(m2(a2(null != e3 ? i2(d2(e3)) : {}, "default", e3 && e3.__esModule && "default" in e3 ? { get: function() {
      return e3.default;
    }, enumerable: true } : { value: e3, enumerable: true })), e3);
  }, q2 = function(e3, t3, n3) {
    return new Promise(function(r3, i3) {
      var a3 = function(e4) {
        try {
          o3(n3.next(e4));
        } catch (e5) {
          i3(e5);
        }
      }, u3 = function(e4) {
        try {
          o3(n3.throw(e4));
        } catch (e5) {
          i3(e5);
        }
      }, o3 = function(e4) {
        return e4.done ? r3(e4.value) : Promise.resolve(e4.value).then(a3, u3);
      };
      o3((n3 = n3.apply(e3, t3)).next());
    });
  };
  m2(exports), function(e3, t3) {
    for (var n3 in t3) a2(e3, n3, { get: t3[n3], enumerable: true });
  }(exports, { QueryStatus: function() {
    return e2;
  }, buildCreateApi: function() {
    return ge2;
  }, copyWithStructuralSharing: function() {
    return A2;
  }, coreModule: function() {
    return Ke2;
  }, coreModuleName: function() {
    return Ne2;
  }, createApi: function() {
    return Ee2;
  }, defaultSerializeQueryArgs: function() {
    return ve2;
  }, fakeBaseQuery: function() {
    return be2;
  }, fetchBaseQuery: function() {
    return x2;
  }, retry: function() {
    return I2;
  }, setupListeners: function() {
    return F2;
  }, skipSelector: function() {
    return ce2;
  }, skipToken: function() {
    return se2;
  } }), (t2 = e2 || (e2 = {})).uninitialized = "uninitialized", t2.pending = "pending", t2.fulfilled = "fulfilled", t2.rejected = "rejected";
  var S2 = function(e3) {
    return [].concat.apply([], e3);
  }, O2 = b2(require$$0).isPlainObject;
  function A2(e3, t3) {
    if (e3 === t3 || !(O2(e3) && O2(t3) || Array.isArray(e3) && Array.isArray(t3))) return t3;
    for (var n3 = Object.keys(t3), r3 = Object.keys(e3), i3 = n3.length === r3.length, a3 = Array.isArray(t3) ? [] : {}, u3 = 0, o3 = n3; u3 < o3.length; u3++) {
      var s3 = o3[u3];
      a3[s3] = A2(e3[s3], t3[s3]), i3 && (i3 = e3[s3] === a3[s3]);
    }
    return i3 ? e3 : a3;
  }
  var T2 = b2(require$$0), R2 = function() {
    for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
    return fetch.apply(void 0, e3);
  }, j2 = function(e3) {
    return e3.status >= 200 && e3.status <= 299;
  }, w2 = function(e3) {
    return /ion\/(vnd\.api\+)?json/.test(e3.get("content-type") || "");
  };
  function k2(e3) {
    if (!(0, T2.isPlainObject)(e3)) return e3;
    for (var t3 = v2({}, e3), n3 = 0, r3 = Object.entries(t3); n3 < r3.length; n3++) {
      var i3 = r3[n3];
      void 0 === i3[1] && delete t3[i3[0]];
    }
    return t3;
  }
  function x2(e3) {
    var t3 = this;
    void 0 === e3 && (e3 = {});
    var r3 = e3.baseUrl, i3 = e3.prepareHeaders, a3 = void 0 === i3 ? function(e4) {
      return e4;
    } : i3, u3 = e3.fetchFn, o3 = void 0 === u3 ? R2 : u3, s3 = e3.paramsSerializer, c3 = e3.isJsonContentType, l3 = void 0 === c3 ? w2 : c3, d3 = e3.jsonContentType, f3 = void 0 === d3 ? "application/json" : d3, p3 = e3.jsonReplacer, h3 = e3.timeout, m3 = e3.responseHandler, b3 = e3.validateStatus, S3 = g2(e3, ["baseUrl", "prepareHeaders", "fetchFn", "paramsSerializer", "isJsonContentType", "jsonContentType", "jsonReplacer", "timeout", "responseHandler", "validateStatus"]);
    return "undefined" == typeof fetch && o3 === R2 && console.warn("Warning: `fetch` is not available. Please supply a custom `fetchFn` property to use `fetchBaseQuery` on SSR environments."), function(e4, i4) {
      return q2(t3, null, function() {
        var t4, u4, c4, d4, q3, A3, R3, w3, x3, P3, Q3, C3, I3, M3, D3, N3, K3, E3, _3, F3, z3, U3, B3, L3, W3, H3, J3, V3, G3, Y3, $3, X3, Z3, ee3, te3, ne3;
        return n2(this, function(n3) {
          switch (n3.label) {
            case 0:
              return t4 = i4.signal, u4 = i4.getState, c4 = i4.extra, d4 = i4.endpoint, q3 = i4.forced, A3 = i4.type, x3 = (w3 = "string" == typeof e4 ? { url: e4 } : e4).url, Q3 = void 0 === (P3 = w3.headers) ? new Headers(S3.headers) : P3, I3 = void 0 === (C3 = w3.params) ? void 0 : C3, D3 = void 0 === (M3 = w3.responseHandler) ? null != m3 ? m3 : "json" : M3, K3 = void 0 === (N3 = w3.validateStatus) ? null != b3 ? b3 : j2 : N3, _3 = void 0 === (E3 = w3.timeout) ? h3 : E3, F3 = g2(w3, ["url", "headers", "params", "responseHandler", "validateStatus", "timeout"]), z3 = v2(y2(v2({}, S3), { signal: t4 }), F3), Q3 = new Headers(k2(Q3)), U3 = z3, [4, a3(Q3, { getState: u4, extra: c4, endpoint: d4, forced: q3, type: A3 })];
            case 1:
              U3.headers = n3.sent() || Q3, B3 = function(e5) {
                return "object" == typeof e5 && ((0, T2.isPlainObject)(e5) || Array.isArray(e5) || "function" == typeof e5.toJSON);
              }, !z3.headers.has("content-type") && B3(z3.body) && z3.headers.set("content-type", f3), B3(z3.body) && l3(z3.headers) && (z3.body = JSON.stringify(z3.body, p3)), I3 && (L3 = ~x3.indexOf("?") ? "&" : "?", W3 = s3 ? s3(I3) : new URLSearchParams(k2(I3)), x3 += L3 + W3), x3 = function(e5, t5) {
                if (!e5) return t5;
                if (!t5) return e5;
                if (function(e6) {
                  return new RegExp("(^|:)//").test(e6);
                }(t5)) return t5;
                var n4 = e5.endsWith("/") || !t5.startsWith("?") ? "/" : "";
                return e5 = function(e6) {
                  return e6.replace(/\/$/, "");
                }(e5), "" + e5 + n4 + function(e6) {
                  return e6.replace(/^\//, "");
                }(t5);
              }(r3, x3), H3 = new Request(x3, z3), J3 = new Request(x3, z3), R3 = { request: J3 }, G3 = false, Y3 = _3 && setTimeout(function() {
                G3 = true, i4.abort();
              }, _3), n3.label = 2;
            case 2:
              return n3.trys.push([2, 4, 5, 6]), [4, o3(H3)];
            case 3:
              return V3 = n3.sent(), [3, 6];
            case 4:
              return $3 = n3.sent(), [2, { error: { status: G3 ? "TIMEOUT_ERROR" : "FETCH_ERROR", error: String($3) }, meta: R3 }];
            case 5:
              return Y3 && clearTimeout(Y3), [7];
            case 6:
              X3 = V3.clone(), R3.response = X3, ee3 = "", n3.label = 7;
            case 7:
              return n3.trys.push([7, 9, , 10]), [4, Promise.all([O3(V3, D3).then(function(e5) {
                return Z3 = e5;
              }, function(e5) {
                return te3 = e5;
              }), X3.text().then(function(e5) {
                return ee3 = e5;
              }, function() {
              })])];
            case 8:
              if (n3.sent(), te3) throw te3;
              return [3, 10];
            case 9:
              return ne3 = n3.sent(), [2, { error: { status: "PARSING_ERROR", originalStatus: V3.status, data: ee3, error: String(ne3) }, meta: R3 }];
            case 10:
              return [2, K3(V3, Z3) ? { data: Z3, meta: R3 } : { error: { status: V3.status, data: Z3 }, meta: R3 }];
          }
        });
      });
    };
    function O3(e4, t4) {
      return q2(this, null, function() {
        var r4;
        return n2(this, function(n3) {
          switch (n3.label) {
            case 0:
              return "function" == typeof t4 ? [2, t4(e4)] : ("content-type" === t4 && (t4 = l3(e4.headers) ? "json" : "text"), "json" !== t4 ? [3, 2] : [4, e4.text()]);
            case 1:
              return [2, (r4 = n3.sent()).length ? JSON.parse(r4) : null];
            case 2:
              return [2, e4.text()];
          }
        });
      });
    }
  }
  var P2 = function(e3, t3) {
    void 0 === t3 && (t3 = void 0), this.value = e3, this.meta = t3;
  };
  function Q2(e3, t3) {
    return void 0 === e3 && (e3 = 0), void 0 === t3 && (t3 = 5), q2(this, null, function() {
      var r3, i3;
      return n2(this, function(n3) {
        switch (n3.label) {
          case 0:
            return r3 = Math.min(e3, t3), i3 = ~~((Math.random() + 0.4) * (300 << r3)), [4, new Promise(function(e4) {
              return setTimeout(function(t4) {
                return e4(t4);
              }, i3);
            })];
          case 1:
            return n3.sent(), [2];
        }
      });
    });
  }
  var C2 = {}, I2 = Object.assign(function(e3, t3) {
    return function(r3, i3, a3) {
      return q2(void 0, null, function() {
        var u3, o3, s3, c3, l3, d3, f3;
        return n2(this, function(n3) {
          switch (n3.label) {
            case 0:
              u3 = [5, (t3 || C2).maxRetries, (a3 || C2).maxRetries].filter(function(e4) {
                return void 0 !== e4;
              }), o3 = u3.slice(-1)[0], s3 = function(e4, t4, n4) {
                return n4.attempt <= o3;
              }, c3 = v2(v2({ maxRetries: o3, backoff: Q2, retryCondition: s3 }, t3), a3), l3 = 0, n3.label = 1;
            case 1:
              n3.label = 2;
            case 2:
              return n3.trys.push([2, 4, , 6]), [4, e3(r3, i3, a3)];
            case 3:
              if ((d3 = n3.sent()).error) throw new P2(d3);
              return [2, d3];
            case 4:
              if (f3 = n3.sent(), l3++, f3.throwImmediately) {
                if (f3 instanceof P2) return [2, f3.value];
                throw f3;
              }
              return f3 instanceof P2 && !c3.retryCondition(f3.value.error, r3, { attempt: l3, baseQueryApi: i3, extraOptions: a3 }) ? [2, f3.value] : [4, c3.backoff(l3, c3.maxRetries)];
            case 5:
              return n3.sent(), [3, 6];
            case 6:
              return [3, 1];
            case 7:
              return [2];
          }
        });
      });
    };
  }, { fail: function(e3) {
    throw Object.assign(new P2({ error: e3 }), { throwImmediately: true });
  } }), M2 = b2(require$$0), D2 = (0, M2.createAction)("__rtkq/focused"), N2 = (0, M2.createAction)("__rtkq/unfocused"), K2 = (0, M2.createAction)("__rtkq/online"), E2 = (0, M2.createAction)("__rtkq/offline"), _2 = false;
  function F2(e3, t3) {
    return t3 ? t3(e3, { onFocus: D2, onFocusLost: N2, onOffline: E2, onOnline: K2 }) : (n3 = function() {
      return e3(D2());
    }, r3 = function() {
      return e3(K2());
    }, i3 = function() {
      return e3(E2());
    }, a3 = function() {
      "visible" === window.document.visibilityState ? n3() : e3(N2());
    }, _2 || "undefined" != typeof window && window.addEventListener && (window.addEventListener("visibilitychange", a3, false), window.addEventListener("focus", n3, false), window.addEventListener("online", r3, false), window.addEventListener("offline", i3, false), _2 = true), function() {
      window.removeEventListener("focus", n3), window.removeEventListener("visibilitychange", a3), window.removeEventListener("online", r3), window.removeEventListener("offline", i3), _2 = false;
    });
    var n3, r3, i3, a3;
  }
  var z2, U2, B2 = b2(require$$0);
  function L2(e3) {
    return e3.type === z2.query;
  }
  function W2(e3, t3, n3, r3, i3, a3) {
    return "function" == typeof e3 ? e3(t3, n3, r3, i3).map(H2).map(a3) : Array.isArray(e3) ? e3.map(H2).map(a3) : [];
  }
  function H2(e3) {
    return "string" == typeof e3 ? { type: e3 } : e3;
  }
  (U2 = z2 || (z2 = {})).query = "query", U2.mutation = "mutation";
  var J2 = b2(require$$0);
  function V2(e3) {
    return null != e3;
  }
  var G2 = Symbol("forceQueryFn"), Y2 = function(e3) {
    return "function" == typeof e3[G2];
  }, $2 = b2(require$$0), X2 = b2(require$$1), Z2 = b2(require$$0);
  function ee2(e3) {
    return e3;
  }
  function te2(e3, t3, n3, r3) {
    return W2(n3[e3.meta.arg.endpointName][t3], (0, $2.isFulfilled)(e3) ? e3.payload : void 0, (0, $2.isRejectedWithValue)(e3) ? e3.payload : void 0, e3.meta.arg.originalArgs, "baseQueryMeta" in e3.meta ? e3.meta.baseQueryMeta : void 0, r3);
  }
  var ne2 = b2(require$$1), re2 = b2(require$$1);
  function ie2(e3, t3, n3) {
    var r3 = e3[t3];
    r3 && n3(r3);
  }
  function ae2(e3) {
    var t3;
    return null != (t3 = "arg" in e3 ? e3.arg.fixedCacheKey : e3.fixedCacheKey) ? t3 : e3.requestId;
  }
  function ue2(e3, t3, n3) {
    var r3 = e3[ae2(t3)];
    r3 && n3(r3);
  }
  var oe2 = {}, se2 = Symbol.for("RTKQ/skipToken"), ce2 = se2, le2 = { status: e2.uninitialized }, de2 = (0, B2.createNextState)(le2, function() {
  }), fe2 = (0, B2.createNextState)(le2, function() {
  }), pe2 = b2(require$$0), he2 = WeakMap ? /* @__PURE__ */ new WeakMap() : void 0, ve2 = function(e3) {
    var t3 = e3.endpointName, n3 = e3.queryArgs, r3 = "", i3 = null == he2 ? void 0 : he2.get(n3);
    if ("string" == typeof i3) r3 = i3;
    else {
      var a3 = JSON.stringify(n3, function(e4, t4) {
        return (0, pe2.isPlainObject)(t4) ? Object.keys(t4).sort().reduce(function(e5, n4) {
          return e5[n4] = t4[n4], e5;
        }, {}) : t4;
      });
      (0, pe2.isPlainObject)(n3) && (null == he2 || he2.set(n3, a3)), r3 = a3;
    }
    return t3 + "(" + r3 + ")";
  }, ye2 = b2(require$$0), me2 = b2(require$$2);
  function ge2() {
    for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
    return function(t4) {
      var n3 = (0, me2.defaultMemoize)(function(e4) {
        var n4, r3;
        return null == (r3 = t4.extractRehydrationInfo) ? void 0 : r3.call(t4, e4, { reducerPath: null != (n4 = t4.reducerPath) ? n4 : "api" });
      }), i3 = y2(v2({ reducerPath: "api", keepUnusedDataFor: 60, refetchOnMountOrArgChange: false, refetchOnFocus: false, refetchOnReconnect: false }, t4), { extractRehydrationInfo: n3, serializeQueryArgs: function(e4) {
        var n4 = ve2;
        if ("serializeQueryArgs" in e4.endpointDefinition) {
          var r3 = e4.endpointDefinition.serializeQueryArgs;
          n4 = function(e5) {
            var t5 = r3(e5);
            return "string" == typeof t5 ? t5 : ve2(y2(v2({}, e5), { queryArgs: t5 }));
          };
        } else t4.serializeQueryArgs && (n4 = t4.serializeQueryArgs);
        return n4(e4);
      }, tagTypes: r2([], t4.tagTypes || []) }), a3 = { endpointDefinitions: {}, batch: function(e4) {
        e4();
      }, apiUid: (0, ye2.nanoid)(), extractRehydrationInfo: n3, hasRehydrationInfo: (0, me2.defaultMemoize)(function(e4) {
        return null != n3(e4);
      }) }, u3 = { injectEndpoints: function(e4) {
        for (var t5 = e4.endpoints({ query: function(e5) {
          return y2(v2({}, e5), { type: z2.query });
        }, mutation: function(e5) {
          return y2(v2({}, e5), { type: z2.mutation });
        } }), n4 = 0, r3 = Object.entries(t5); n4 < r3.length; n4++) {
          var i4 = r3[n4], s3 = i4[0], c3 = i4[1];
          if (e4.overrideExisting || !(s3 in a3.endpointDefinitions)) {
            a3.endpointDefinitions[s3] = c3;
            for (var l3 = 0, d3 = o3; l3 < d3.length; l3++) d3[l3].injectEndpoint(s3, c3);
          }
        }
        return u3;
      }, enhanceEndpoints: function(e4) {
        var t5 = e4.addTagTypes, n4 = e4.endpoints;
        if (t5) for (var r3 = 0, o4 = t5; r3 < o4.length; r3++) {
          var s3 = o4[r3];
          i3.tagTypes.includes(s3) || i3.tagTypes.push(s3);
        }
        if (n4) for (var c3 = 0, l3 = Object.entries(n4); c3 < l3.length; c3++) {
          var d3 = l3[c3], f3 = d3[0], p3 = d3[1];
          "function" == typeof p3 ? p3(a3.endpointDefinitions[f3]) : Object.assign(a3.endpointDefinitions[f3] || {}, p3);
        }
        return u3;
      } }, o3 = e3.map(function(e4) {
        return e4.init(u3, i3, a3);
      });
      return u3.injectEndpoints({ endpoints: t4.endpoints });
    };
  }
  function be2() {
    return function() {
      throw new Error("When using `fakeBaseQuery`, all queries & mutations must use the `queryFn` definition syntax.");
    };
  }
  var qe2, Se2 = b2(require$$0), Oe2 = function(e3) {
    var t3 = e3.reducerPath, n3 = e3.api, r3 = e3.context, i3 = e3.internalState, a3 = n3.internalActions, u3 = a3.removeQueryResult, o3 = a3.unsubscribeQueryResult;
    function s3(e4) {
      var t4 = i3.currentSubscriptions[e4];
      return !!t4 && !function(e5) {
        for (var t5 in e5) return false;
        return true;
      }(t4);
    }
    var c3 = {};
    function l3(e4, t4, n4, i4) {
      var a4, o4 = r3.endpointDefinitions[t4], l4 = null != (a4 = null == o4 ? void 0 : o4.keepUnusedDataFor) ? a4 : i4.keepUnusedDataFor;
      if (Infinity !== l4) {
        var d3 = Math.max(0, Math.min(l4, 2147482647e-3));
        if (!s3(e4)) {
          var f3 = c3[e4];
          f3 && clearTimeout(f3), c3[e4] = setTimeout(function() {
            s3(e4) || n4.dispatch(u3({ queryCacheKey: e4 })), delete c3[e4];
          }, 1e3 * d3);
        }
      }
    }
    return function(e4, i4, a4) {
      var u4;
      if (o3.match(e4)) {
        var s4 = i4.getState()[t3];
        l3(b3 = e4.payload.queryCacheKey, null == (u4 = s4.queries[b3]) ? void 0 : u4.endpointName, i4, s4.config);
      }
      if (n3.util.resetApiState.match(e4)) for (var d3 = 0, f3 = Object.entries(c3); d3 < f3.length; d3++) {
        var p3 = f3[d3], h3 = p3[0], v3 = p3[1];
        v3 && clearTimeout(v3), delete c3[h3];
      }
      if (r3.hasRehydrationInfo(e4)) {
        s4 = i4.getState()[t3];
        for (var y3 = r3.extractRehydrationInfo(e4).queries, m3 = 0, g3 = Object.entries(y3); m3 < g3.length; m3++) {
          var b3, q3 = g3[m3], S3 = q3[1];
          l3(b3 = q3[0], null == S3 ? void 0 : S3.endpointName, i4, s4.config);
        }
      }
    };
  }, Ae2 = b2(require$$0), Te2 = function(t3) {
    var n3 = t3.reducerPath, r3 = t3.context, i3 = t3.context.endpointDefinitions, a3 = t3.mutationThunk, u3 = t3.api, o3 = t3.assertTagType, s3 = t3.refetchQuery, c3 = u3.internalActions.removeQueryResult, l3 = (0, Ae2.isAnyOf)((0, Ae2.isFulfilled)(a3), (0, Ae2.isRejectedWithValue)(a3));
    function d3(t4, i4) {
      var a4 = i4.getState(), o4 = a4[n3], l4 = u3.util.selectInvalidatedBy(a4, t4);
      r3.batch(function() {
        for (var t5, n4 = 0, r4 = Array.from(l4.values()); n4 < r4.length; n4++) {
          var a5 = r4[n4].queryCacheKey, u4 = o4.queries[a5], d4 = null != (t5 = o4.subscriptions[a5]) ? t5 : {};
          u4 && (0 === Object.keys(d4).length ? i4.dispatch(c3({ queryCacheKey: a5 })) : u4.status !== e2.uninitialized && i4.dispatch(s3(u4, a5)));
        }
      });
    }
    return function(e3, t4) {
      l3(e3) && d3(te2(e3, "invalidatesTags", i3, o3), t4), u3.util.invalidateTags.match(e3) && d3(W2(e3.payload, void 0, void 0, void 0, void 0, o3), t4);
    };
  }, Re2 = function(t3) {
    var n3 = t3.reducerPath, r3 = t3.queryThunk, i3 = t3.api, a3 = t3.refetchQuery, u3 = t3.internalState, o3 = {};
    function s3(t4, r4) {
      var i4 = t4.queryCacheKey, s4 = r4.getState()[n3].queries[i4];
      if (s4 && s4.status !== e2.uninitialized) {
        var c4 = d3(u3.currentSubscriptions[i4]);
        if (Number.isFinite(c4)) {
          var l4 = o3[i4];
          (null == l4 ? void 0 : l4.timeout) && (clearTimeout(l4.timeout), l4.timeout = void 0);
          var f3 = Date.now() + c4, p3 = o3[i4] = { nextPollTimestamp: f3, pollingInterval: c4, timeout: setTimeout(function() {
            p3.timeout = void 0, r4.dispatch(a3(s4, i4));
          }, c4) };
        }
      }
    }
    function c3(t4, r4) {
      var i4 = t4.queryCacheKey, a4 = r4.getState()[n3].queries[i4];
      if (a4 && a4.status !== e2.uninitialized) {
        var c4 = d3(u3.currentSubscriptions[i4]);
        if (Number.isFinite(c4)) {
          var f3 = o3[i4], p3 = Date.now() + c4;
          (!f3 || p3 < f3.nextPollTimestamp) && s3({ queryCacheKey: i4 }, r4);
        } else l3(i4);
      }
    }
    function l3(e3) {
      var t4 = o3[e3];
      (null == t4 ? void 0 : t4.timeout) && clearTimeout(t4.timeout), delete o3[e3];
    }
    function d3(e3) {
      void 0 === e3 && (e3 = {});
      var t4 = Number.POSITIVE_INFINITY;
      for (var n4 in e3) e3[n4].pollingInterval && (t4 = Math.min(e3[n4].pollingInterval, t4));
      return t4;
    }
    return function(e3, t4) {
      (i3.internalActions.updateSubscriptionOptions.match(e3) || i3.internalActions.unsubscribeQueryResult.match(e3)) && c3(e3.payload, t4), (r3.pending.match(e3) || r3.rejected.match(e3) && e3.meta.condition) && c3(e3.meta.arg, t4), (r3.fulfilled.match(e3) || r3.rejected.match(e3) && !e3.meta.condition) && s3(e3.meta.arg, t4), i3.util.resetApiState.match(e3) && function() {
        for (var e4 = 0, t5 = Object.keys(o3); e4 < t5.length; e4++) l3(t5[e4]);
      }();
    };
  }, je2 = b2(require$$0), we2 = new Error("Promise never resolved before cacheEntryRemoved."), ke2 = function(e3) {
    var t3 = e3.api, n3 = e3.reducerPath, r3 = e3.context, i3 = e3.queryThunk, a3 = e3.mutationThunk, u3 = (0, je2.isAsyncThunkAction)(i3), o3 = (0, je2.isAsyncThunkAction)(a3), s3 = (0, je2.isFulfilled)(i3, a3), c3 = {};
    function l3(e4, n4, i4, a4, u4) {
      var o4 = r3.endpointDefinitions[e4], s4 = null == o4 ? void 0 : o4.onCacheEntryAdded;
      if (s4) {
        var l4 = {}, d3 = new Promise(function(e5) {
          l4.cacheEntryRemoved = e5;
        }), f3 = Promise.race([new Promise(function(e5) {
          l4.valueResolved = e5;
        }), d3.then(function() {
          throw we2;
        })]);
        f3.catch(function() {
        }), c3[i4] = l4;
        var p3 = t3.endpoints[e4].select(o4.type === z2.query ? n4 : i4), h3 = a4.dispatch(function(e5, t4, n5) {
          return n5;
        }), m3 = y2(v2({}, a4), { getCacheEntry: function() {
          return p3(a4.getState());
        }, requestId: u4, extra: h3, updateCachedData: o4.type === z2.query ? function(r4) {
          return a4.dispatch(t3.util.updateQueryData(e4, n4, r4));
        } : void 0, cacheDataLoaded: f3, cacheEntryRemoved: d3 }), g3 = s4(n4, m3);
        Promise.resolve(g3).catch(function(e5) {
          if (e5 !== we2) throw e5;
        });
      }
    }
    return function(e4, r4, d3) {
      var f3 = function(e5) {
        return u3(e5) ? e5.meta.arg.queryCacheKey : o3(e5) ? e5.meta.requestId : t3.internalActions.removeQueryResult.match(e5) ? e5.payload.queryCacheKey : t3.internalActions.removeMutationResult.match(e5) ? ae2(e5.payload) : "";
      }(e4);
      if (i3.pending.match(e4)) {
        var p3 = d3[n3].queries[f3], h3 = r4.getState()[n3].queries[f3];
        !p3 && h3 && l3(e4.meta.arg.endpointName, e4.meta.arg.originalArgs, f3, r4, e4.meta.requestId);
      } else if (a3.pending.match(e4)) (h3 = r4.getState()[n3].mutations[f3]) && l3(e4.meta.arg.endpointName, e4.meta.arg.originalArgs, f3, r4, e4.meta.requestId);
      else if (s3(e4)) (null == (g3 = c3[f3]) ? void 0 : g3.valueResolved) && (g3.valueResolved({ data: e4.payload, meta: e4.meta.baseQueryMeta }), delete g3.valueResolved);
      else if (t3.internalActions.removeQueryResult.match(e4) || t3.internalActions.removeMutationResult.match(e4)) (g3 = c3[f3]) && (delete c3[f3], g3.cacheEntryRemoved());
      else if (t3.util.resetApiState.match(e4)) for (var v3 = 0, y3 = Object.entries(c3); v3 < y3.length; v3++) {
        var m3 = y3[v3], g3 = m3[1];
        delete c3[m3[0]], g3.cacheEntryRemoved();
      }
    };
  }, xe2 = b2(require$$0), Pe2 = function(e3) {
    var t3 = e3.api, n3 = e3.context, r3 = e3.queryThunk, i3 = e3.mutationThunk, a3 = (0, xe2.isPending)(r3, i3), u3 = (0, xe2.isRejected)(r3, i3), o3 = (0, xe2.isFulfilled)(r3, i3), s3 = {};
    return function(e4, r4) {
      var i4, c3, l3;
      if (a3(e4)) {
        var d3 = e4.meta, f3 = d3.requestId, p3 = d3.arg, h3 = p3.endpointName, m3 = p3.originalArgs, g3 = n3.endpointDefinitions[h3], b3 = null == g3 ? void 0 : g3.onQueryStarted;
        if (b3) {
          var q3 = {}, S3 = new Promise(function(e5, t4) {
            q3.resolve = e5, q3.reject = t4;
          });
          S3.catch(function() {
          }), s3[f3] = q3;
          var O3 = t3.endpoints[h3].select(g3.type === z2.query ? m3 : f3), A3 = r4.dispatch(function(e5, t4, n4) {
            return n4;
          }), T3 = y2(v2({}, r4), { getCacheEntry: function() {
            return O3(r4.getState());
          }, requestId: f3, extra: A3, updateCachedData: g3.type === z2.query ? function(e5) {
            return r4.dispatch(t3.util.updateQueryData(h3, m3, e5));
          } : void 0, queryFulfilled: S3 });
          b3(m3, T3);
        }
      } else if (o3(e4)) {
        var R3 = e4.meta, j3 = R3.baseQueryMeta;
        null == (i4 = s3[f3 = R3.requestId]) || i4.resolve({ data: e4.payload, meta: j3 }), delete s3[f3];
      } else if (u3(e4)) {
        var w3 = e4.meta;
        j3 = w3.baseQueryMeta, null == (l3 = s3[f3 = w3.requestId]) || l3.reject({ error: null != (c3 = e4.payload) ? c3 : e4.error, isUnhandledError: !w3.rejectedWithValue, meta: j3 }), delete s3[f3];
      }
    };
  }, Qe2 = function(e3) {
    var t3 = e3.api, n3 = e3.context.apiUid;
    return function(e4, r3) {
      t3.util.resetApiState.match(e4) && r3.dispatch(t3.internalActions.middlewareRegistered(n3));
    };
  }, Ce2 = b2(require$$1), Ie2 = "function" == typeof queueMicrotask ? queueMicrotask.bind("undefined" != typeof window ? window : "undefined" != typeof commonjsGlobal ? commonjsGlobal : globalThis) : function(e3) {
    return (qe2 || (qe2 = Promise.resolve())).then(e3).catch(function(e4) {
      return setTimeout(function() {
        throw e4;
      }, 0);
    });
  };
  function Me2(e3) {
    for (var t3 = [], n3 = 1; n3 < arguments.length; n3++) t3[n3 - 1] = arguments[n3];
    Object.assign.apply(Object, r2([e3], t3));
  }
  var De2 = b2(require$$1), Ne2 = Symbol(), Ke2 = function() {
    return { name: Ne2, init: function(t3, i3, a3) {
      var u3 = i3.baseQuery, o3 = i3.reducerPath, s3 = i3.serializeQueryArgs, c3 = i3.keepUnusedDataFor, l3 = i3.refetchOnMountOrArgChange, d3 = i3.refetchOnFocus, f3 = i3.refetchOnReconnect;
      (0, De2.enablePatches)();
      var p3 = function(e3) {
        return e3;
      };
      Object.assign(t3, { reducerPath: o3, endpoints: {}, internalActions: { onOnline: K2, onOffline: E2, onFocus: D2, onFocusLost: N2 }, util: {} });
      var h3 = function(t4) {
        var r3 = this, i4 = t4.reducerPath, a4 = t4.baseQuery, u4 = t4.context.endpointDefinitions, o4 = t4.serializeQueryArgs, s4 = t4.api, c4 = t4.assertTagType, l4 = function(e3, t5) {
          return q2(r3, [e3, t5], function(e4, t6) {
            var r4, i5, o5, s5, c5, l5, f5, p5, h5, v3, y3, m4, g4, b4 = t6.signal, q3 = t6.abort, S3 = t6.rejectWithValue, O4 = t6.fulfillWithValue, A3 = t6.dispatch, T4 = t6.getState, R4 = t6.extra;
            return n2(this, function(t7) {
              switch (t7.label) {
                case 0:
                  r4 = u4[e4.endpointName], t7.label = 1;
                case 1:
                  return t7.trys.push([1, 8, , 13]), i5 = ee2, o5 = void 0, s5 = { signal: b4, abort: q3, dispatch: A3, getState: T4, extra: R4, endpoint: e4.endpointName, type: e4.type, forced: "query" === e4.type ? d4(e4, T4()) : void 0 }, (c5 = "query" === e4.type ? e4[G2] : void 0) ? (o5 = c5(), [3, 6]) : [3, 2];
                case 2:
                  return r4.query ? [4, a4(r4.query(e4.originalArgs), s5, r4.extraOptions)] : [3, 4];
                case 3:
                  return o5 = t7.sent(), r4.transformResponse && (i5 = r4.transformResponse), [3, 6];
                case 4:
                  return [4, r4.queryFn(e4.originalArgs, s5, r4.extraOptions, function(e5) {
                    return a4(e5, s5, r4.extraOptions);
                  })];
                case 5:
                  o5 = t7.sent(), t7.label = 6;
                case 6:
                  if (o5.error) throw new P2(o5.error, o5.meta);
                  return l5 = O4, [4, i5(o5.data, o5.meta, e4.originalArgs)];
                case 7:
                  return [2, l5.apply(void 0, [t7.sent(), (m4 = { fulfilledTimeStamp: Date.now(), baseQueryMeta: o5.meta }, m4[Z2.SHOULD_AUTOBATCH] = true, m4)])];
                case 8:
                  if (f5 = t7.sent(), !((p5 = f5) instanceof P2)) return [3, 12];
                  h5 = ee2, r4.query && r4.transformErrorResponse && (h5 = r4.transformErrorResponse), t7.label = 9;
                case 9:
                  return t7.trys.push([9, 11, , 12]), v3 = S3, [4, h5(p5.value, p5.meta, e4.originalArgs)];
                case 10:
                  return [2, v3.apply(void 0, [t7.sent(), (g4 = { baseQueryMeta: p5.meta }, g4[Z2.SHOULD_AUTOBATCH] = true, g4)])];
                case 11:
                  return y3 = t7.sent(), p5 = y3, [3, 12];
                case 12:
                  throw console.error(p5), p5;
                case 13:
                  return [2];
              }
            });
          });
        };
        function d4(e3, t5) {
          var n3, r4, a5, u5, o5 = null == (r4 = null == (n3 = t5[i4]) ? void 0 : n3.queries) ? void 0 : r4[e3.queryCacheKey], s5 = null == (a5 = t5[i4]) ? void 0 : a5.config.refetchOnMountOrArgChange, c5 = null == o5 ? void 0 : o5.fulfilledTimeStamp, l5 = null != (u5 = e3.forceRefetch) ? u5 : e3.subscribe && s5;
          return !!l5 && (true === l5 || (Number(/* @__PURE__ */ new Date()) - Number(c5)) / 1e3 >= l5);
        }
        var f4 = (0, Z2.createAsyncThunk)(i4 + "/executeQuery", l4, { getPendingMeta: function() {
          var e3;
          return (e3 = { startedTimeStamp: Date.now() })[Z2.SHOULD_AUTOBATCH] = true, e3;
        }, condition: function(e3, t5) {
          var n3, r4, a5, o5 = (0, t5.getState)(), s5 = null == (r4 = null == (n3 = o5[i4]) ? void 0 : n3.queries) ? void 0 : r4[e3.queryCacheKey], c5 = null == s5 ? void 0 : s5.fulfilledTimeStamp, l5 = e3.originalArgs, f5 = null == s5 ? void 0 : s5.originalArgs, p5 = u4[e3.endpointName];
          return !(!Y2(e3) && ("pending" === (null == s5 ? void 0 : s5.status) || !d4(e3, o5) && (!L2(p5) || !(null == (a5 = null == p5 ? void 0 : p5.forceRefetch) ? void 0 : a5.call(p5, { currentArg: l5, previousArg: f5, endpointState: s5, state: o5 }))) && c5));
        }, dispatchConditionRejection: true }), p4 = (0, Z2.createAsyncThunk)(i4 + "/executeMutation", l4, { getPendingMeta: function() {
          var e3;
          return (e3 = { startedTimeStamp: Date.now() })[Z2.SHOULD_AUTOBATCH] = true, e3;
        } });
        function h4(e3) {
          return function(t5) {
            var n3, r4;
            return (null == (r4 = null == (n3 = null == t5 ? void 0 : t5.meta) ? void 0 : n3.arg) ? void 0 : r4.endpointName) === e3;
          };
        }
        return { queryThunk: f4, mutationThunk: p4, prefetch: function(e3, t5, n3) {
          return function(r4, i5) {
            var a5 = function(e4) {
              return "force" in e4;
            }(n3) && n3.force, u5 = function(e4) {
              return "ifOlderThan" in e4;
            }(n3) && n3.ifOlderThan, o5 = function(n4) {
              return void 0 === n4 && (n4 = true), s4.endpoints[e3].initiate(t5, { forceRefetch: n4 });
            }, c5 = s4.endpoints[e3].select(t5)(i5());
            if (a5) r4(o5());
            else if (u5) {
              var l5 = null == c5 ? void 0 : c5.fulfilledTimeStamp;
              if (!l5) return void r4(o5());
              (Number(/* @__PURE__ */ new Date()) - Number(new Date(l5))) / 1e3 >= u5 && r4(o5());
            } else r4(o5(false));
          };
        }, updateQueryData: function(t5, n3, r4, i5) {
          return void 0 === i5 && (i5 = true), function(a5, u5) {
            var o5, c5, l5, d5 = s4.endpoints[t5].select(n3)(u5()), f5 = { patches: [], inversePatches: [], undo: function() {
              return a5(s4.util.patchQueryData(t5, n3, f5.inversePatches, i5));
            } };
            if (d5.status === e2.uninitialized) return f5;
            if ("data" in d5) if ((0, X2.isDraftable)(d5.data)) {
              var p5 = (0, X2.produceWithPatches)(d5.data, r4), h5 = p5[0], v3 = p5[2];
              (o5 = f5.patches).push.apply(o5, p5[1]), (c5 = f5.inversePatches).push.apply(c5, v3), l5 = h5;
            } else l5 = r4(d5.data), f5.patches.push({ op: "replace", path: [], value: l5 }), f5.inversePatches.push({ op: "replace", path: [], value: d5.data });
            return a5(s4.util.patchQueryData(t5, n3, f5.patches, i5)), f5;
          };
        }, upsertQueryData: function(e3, t5, n3) {
          return function(r4) {
            var i5;
            return r4(s4.endpoints[e3].initiate(t5, ((i5 = { subscribe: false, forceRefetch: true })[G2] = function() {
              return { data: n3 };
            }, i5)));
          };
        }, patchQueryData: function(e3, t5, n3, r4) {
          return function(i5, a5) {
            var l5 = u4[e3], d5 = o4({ queryArgs: t5, endpointDefinition: l5, endpointName: e3 });
            if (i5(s4.internalActions.queryResultPatched({ queryCacheKey: d5, patches: n3 })), r4) {
              var f5 = s4.endpoints[e3].select(t5)(a5()), p5 = W2(l5.providesTags, f5.data, void 0, t5, {}, c4);
              i5(s4.internalActions.updateProvidedBy({ queryCacheKey: d5, providedTags: p5 }));
            }
          };
        }, buildMatchThunkActions: function(e3, t5) {
          return { matchPending: (0, $2.isAllOf)((0, $2.isPending)(e3), h4(t5)), matchFulfilled: (0, $2.isAllOf)((0, $2.isFulfilled)(e3), h4(t5)), matchRejected: (0, $2.isAllOf)((0, $2.isRejected)(e3), h4(t5)) };
        } };
      }({ baseQuery: u3, reducerPath: o3, context: a3, api: t3, serializeQueryArgs: s3, assertTagType: p3 }), m3 = h3.queryThunk, g3 = h3.mutationThunk, b3 = h3.patchQueryData, O3 = h3.updateQueryData, T3 = h3.upsertQueryData, R3 = h3.prefetch, j3 = h3.buildMatchThunkActions, w3 = function(t4) {
        var n3 = t4.reducerPath, r3 = t4.queryThunk, i4 = t4.mutationThunk, a4 = t4.context, u4 = a4.endpointDefinitions, o4 = a4.apiUid, s4 = a4.extractRehydrationInfo, c4 = a4.hasRehydrationInfo, l4 = t4.assertTagType, d4 = t4.config, f4 = (0, J2.createAction)(n3 + "/resetApiState"), p4 = (0, J2.createSlice)({ name: n3 + "/queries", initialState: oe2, reducers: { removeQueryResult: { reducer: function(e3, t5) {
          delete e3[t5.payload.queryCacheKey];
        }, prepare: (0, J2.prepareAutoBatched)() }, queryResultPatched: { reducer: function(e3, t5) {
          var n4 = t5.payload, r4 = n4.patches;
          ie2(e3, n4.queryCacheKey, function(e4) {
            e4.data = (0, re2.applyPatches)(e4.data, r4.concat());
          });
        }, prepare: (0, J2.prepareAutoBatched)() } }, extraReducers: function(t5) {
          t5.addCase(r3.pending, function(t6, n4) {
            var r4, i5 = n4.meta, a5 = n4.meta.arg, u5 = Y2(a5);
            (a5.subscribe || u5) && (null != t6[r4 = a5.queryCacheKey] || (t6[r4] = { status: e2.uninitialized, endpointName: a5.endpointName })), ie2(t6, a5.queryCacheKey, function(t7) {
              t7.status = e2.pending, t7.requestId = u5 && t7.requestId ? t7.requestId : i5.requestId, void 0 !== a5.originalArgs && (t7.originalArgs = a5.originalArgs), t7.startedTimeStamp = i5.startedTimeStamp;
            });
          }).addCase(r3.fulfilled, function(t6, n4) {
            var r4 = n4.meta, i5 = n4.payload;
            ie2(t6, r4.arg.queryCacheKey, function(t7) {
              var n5;
              if (t7.requestId === r4.requestId || Y2(r4.arg)) {
                var a5 = u4[r4.arg.endpointName].merge;
                if (t7.status = e2.fulfilled, a5) if (void 0 !== t7.data) {
                  var o5 = r4.fulfilledTimeStamp, s5 = r4.arg, c5 = r4.baseQueryMeta, l5 = r4.requestId, d5 = (0, J2.createNextState)(t7.data, function(e3) {
                    return a5(e3, i5, { arg: s5.originalArgs, baseQueryMeta: c5, fulfilledTimeStamp: o5, requestId: l5 });
                  });
                  t7.data = d5;
                } else t7.data = i5;
                else t7.data = null == (n5 = u4[r4.arg.endpointName].structuralSharing) || n5 ? A2((0, ne2.isDraft)(t7.data) ? (0, re2.original)(t7.data) : t7.data, i5) : i5;
                delete t7.error, t7.fulfilledTimeStamp = r4.fulfilledTimeStamp;
              }
            });
          }).addCase(r3.rejected, function(t6, n4) {
            var r4 = n4.meta, i5 = r4.condition, a5 = r4.requestId, u5 = n4.error, o5 = n4.payload;
            ie2(t6, r4.arg.queryCacheKey, function(t7) {
              if (i5) ;
              else {
                if (t7.requestId !== a5) return;
                t7.status = e2.rejected, t7.error = null != o5 ? o5 : u5;
              }
            });
          }).addMatcher(c4, function(t6, n4) {
            for (var r4 = s4(n4).queries, i5 = 0, a5 = Object.entries(r4); i5 < a5.length; i5++) {
              var u5 = a5[i5], o5 = u5[1];
              (null == o5 ? void 0 : o5.status) !== e2.fulfilled && (null == o5 ? void 0 : o5.status) !== e2.rejected || (t6[u5[0]] = o5);
            }
          });
        } }), h4 = (0, J2.createSlice)({ name: n3 + "/mutations", initialState: oe2, reducers: { removeMutationResult: { reducer: function(e3, t5) {
          var n4 = ae2(t5.payload);
          n4 in e3 && delete e3[n4];
        }, prepare: (0, J2.prepareAutoBatched)() } }, extraReducers: function(t5) {
          t5.addCase(i4.pending, function(t6, n4) {
            var r4 = n4.meta, i5 = r4.requestId, a5 = r4.arg, u5 = r4.startedTimeStamp;
            a5.track && (t6[ae2(n4.meta)] = { requestId: i5, status: e2.pending, endpointName: a5.endpointName, startedTimeStamp: u5 });
          }).addCase(i4.fulfilled, function(t6, n4) {
            var r4 = n4.payload, i5 = n4.meta;
            i5.arg.track && ue2(t6, i5, function(t7) {
              t7.requestId === i5.requestId && (t7.status = e2.fulfilled, t7.data = r4, t7.fulfilledTimeStamp = i5.fulfilledTimeStamp);
            });
          }).addCase(i4.rejected, function(t6, n4) {
            var r4 = n4.payload, i5 = n4.error, a5 = n4.meta;
            a5.arg.track && ue2(t6, a5, function(t7) {
              t7.requestId === a5.requestId && (t7.status = e2.rejected, t7.error = null != r4 ? r4 : i5);
            });
          }).addMatcher(c4, function(t6, n4) {
            for (var r4 = s4(n4).mutations, i5 = 0, a5 = Object.entries(r4); i5 < a5.length; i5++) {
              var u5 = a5[i5], o5 = u5[0], c5 = u5[1];
              (null == c5 ? void 0 : c5.status) !== e2.fulfilled && (null == c5 ? void 0 : c5.status) !== e2.rejected || o5 === (null == c5 ? void 0 : c5.requestId) || (t6[o5] = c5);
            }
          });
        } }), m4 = (0, J2.createSlice)({ name: n3 + "/invalidation", initialState: oe2, reducers: { updateProvidedBy: { reducer: function(e3, t5) {
          for (var n4, r4, i5, a5, u5 = t5.payload, o5 = u5.queryCacheKey, s5 = u5.providedTags, c5 = 0, l5 = Object.values(e3); c5 < l5.length; c5++) for (var d5 = 0, f5 = Object.values(l5[c5]); d5 < f5.length; d5++) {
            var p5 = f5[d5], h5 = p5.indexOf(o5);
            -1 !== h5 && p5.splice(h5, 1);
          }
          for (var v3 = 0, y3 = s5; v3 < y3.length; v3++) {
            var m5 = y3[v3], g5 = m5.type, b5 = m5.id, q4 = null != (a5 = (r4 = null != (n4 = e3[g5]) ? n4 : e3[g5] = {})[i5 = b5 || "__internal_without_id"]) ? a5 : r4[i5] = [];
            q4.includes(o5) || q4.push(o5);
          }
        }, prepare: (0, J2.prepareAutoBatched)() } }, extraReducers: function(e3) {
          e3.addCase(p4.actions.removeQueryResult, function(e4, t5) {
            for (var n4 = t5.payload.queryCacheKey, r4 = 0, i5 = Object.values(e4); r4 < i5.length; r4++) for (var a5 = 0, u5 = Object.values(i5[r4]); a5 < u5.length; a5++) {
              var o5 = u5[a5], s5 = o5.indexOf(n4);
              -1 !== s5 && o5.splice(s5, 1);
            }
          }).addMatcher(c4, function(e4, t5) {
            for (var n4, r4, i5, a5, u5 = s4(t5).provided, o5 = 0, c5 = Object.entries(u5); o5 < c5.length; o5++) for (var l5 = c5[o5], d5 = l5[0], f5 = 0, p5 = Object.entries(l5[1]); f5 < p5.length; f5++) for (var h5 = p5[f5], v3 = h5[0], y3 = h5[1], m5 = null != (a5 = (r4 = null != (n4 = e4[d5]) ? n4 : e4[d5] = {})[i5 = v3 || "__internal_without_id"]) ? a5 : r4[i5] = [], g5 = 0, b5 = y3; g5 < b5.length; g5++) {
              var q4 = b5[g5];
              m5.includes(q4) || m5.push(q4);
            }
          }).addMatcher((0, J2.isAnyOf)((0, J2.isFulfilled)(r3), (0, J2.isRejectedWithValue)(r3)), function(e4, t5) {
            var n4 = te2(t5, "providesTags", u4, l4);
            m4.caseReducers.updateProvidedBy(e4, m4.actions.updateProvidedBy({ queryCacheKey: t5.meta.arg.queryCacheKey, providedTags: n4 }));
          });
        } }), g4 = (0, J2.createSlice)({ name: n3 + "/subscriptions", initialState: oe2, reducers: { updateSubscriptionOptions: function(e3, t5) {
        }, unsubscribeQueryResult: function(e3, t5) {
        }, internal_probeSubscription: function(e3, t5) {
        } } }), b4 = (0, J2.createSlice)({ name: n3 + "/internalSubscriptions", initialState: oe2, reducers: { subscriptionsUpdated: { reducer: function(e3, t5) {
          return (0, re2.applyPatches)(e3, t5.payload);
        }, prepare: (0, J2.prepareAutoBatched)() } } }), q3 = (0, J2.createSlice)({ name: n3 + "/config", initialState: v2({ online: "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine, focused: "undefined" == typeof document || "hidden" !== document.visibilityState, middlewareRegistered: false }, d4), reducers: { middlewareRegistered: function(e3, t5) {
          e3.middlewareRegistered = "conflict" !== e3.middlewareRegistered && o4 === t5.payload || "conflict";
        } }, extraReducers: function(e3) {
          e3.addCase(K2, function(e4) {
            e4.online = true;
          }).addCase(E2, function(e4) {
            e4.online = false;
          }).addCase(D2, function(e4) {
            e4.focused = true;
          }).addCase(N2, function(e4) {
            e4.focused = false;
          }).addMatcher(c4, function(e4) {
            return v2({}, e4);
          });
        } }), S3 = (0, J2.combineReducers)({ queries: p4.reducer, mutations: h4.reducer, provided: m4.reducer, subscriptions: b4.reducer, config: q3.reducer });
        return { reducer: function(e3, t5) {
          return S3(f4.match(t5) ? void 0 : e3, t5);
        }, actions: y2(v2(v2(v2(v2(v2(v2({}, q3.actions), p4.actions), g4.actions), b4.actions), h4.actions), m4.actions), { unsubscribeMutationResult: h4.actions.removeMutationResult, resetApiState: f4 }) };
      }({ context: a3, queryThunk: m3, mutationThunk: g3, reducerPath: o3, assertTagType: p3, config: { refetchOnFocus: d3, refetchOnReconnect: f3, refetchOnMountOrArgChange: l3, keepUnusedDataFor: c3, reducerPath: o3 } }), k3 = w3.reducer, x3 = w3.actions;
      Me2(t3.util, { patchQueryData: b3, updateQueryData: O3, upsertQueryData: T3, prefetch: R3, resetApiState: x3.resetApiState }), Me2(t3.internalActions, x3);
      var Q3 = function(t4) {
        var n3 = t4.reducerPath, r3 = t4.queryThunk, i4 = t4.api, a4 = t4.context, u4 = a4.apiUid, o4 = { invalidateTags: (0, Se2.createAction)(n3 + "/invalidateTags") }, s4 = [Qe2, Oe2, Te2, Re2, ke2, Pe2];
        return { middleware: function(r4) {
          var o5 = false, l4 = y2(v2({}, t4), { internalState: { currentSubscriptions: {} }, refetchQuery: c4 }), d4 = s4.map(function(e3) {
            return e3(l4);
          }), f4 = function(e3) {
            var t5 = e3.api, n4 = e3.queryThunk, r5 = e3.internalState, i5 = t5.reducerPath + "/subscriptions", a5 = null, u5 = false, o6 = t5.internalActions, s5 = o6.updateSubscriptionOptions, c5 = o6.unsubscribeQueryResult;
            return function(e4, o7) {
              var l5, d5;
              if (a5 || (a5 = JSON.parse(JSON.stringify(r5.currentSubscriptions))), t5.util.resetApiState.match(e4)) return a5 = r5.currentSubscriptions = {}, [true, false];
              if (t5.internalActions.internal_probeSubscription.match(e4)) {
                var f5 = e4.payload;
                return [false, !!(null == (l5 = r5.currentSubscriptions[f5.queryCacheKey]) ? void 0 : l5[f5.requestId])];
              }
              var p5 = function(e5, r6) {
                var i6, a6, u6, o8, l6, d6, f6, p6, h5;
                if (s5.match(r6)) {
                  var v4 = r6.payload, y3 = v4.queryCacheKey, m4 = v4.requestId;
                  return (null == (i6 = null == e5 ? void 0 : e5[y3]) ? void 0 : i6[m4]) && (e5[y3][m4] = v4.options), true;
                }
                if (c5.match(r6)) {
                  var g4 = r6.payload;
                  return m4 = g4.requestId, e5[y3 = g4.queryCacheKey] && delete e5[y3][m4], true;
                }
                if (t5.internalActions.removeQueryResult.match(r6)) return delete e5[r6.payload.queryCacheKey], true;
                if (n4.pending.match(r6)) {
                  var b4 = r6.meta;
                  if (m4 = b4.requestId, (O4 = b4.arg).subscribe) return (q3 = null != (u6 = e5[a6 = O4.queryCacheKey]) ? u6 : e5[a6] = {})[m4] = null != (l6 = null != (o8 = O4.subscriptionOptions) ? o8 : q3[m4]) ? l6 : {}, true;
                }
                if (n4.rejected.match(r6)) {
                  var q3, S3 = r6.meta, O4 = S3.arg;
                  if (m4 = S3.requestId, S3.condition && O4.subscribe) return (q3 = null != (f6 = e5[d6 = O4.queryCacheKey]) ? f6 : e5[d6] = {})[m4] = null != (h5 = null != (p6 = O4.subscriptionOptions) ? p6 : q3[m4]) ? h5 : {}, true;
                }
                return false;
              }(r5.currentSubscriptions, e4);
              if (p5) {
                u5 || (Ie2(function() {
                  var e5 = JSON.parse(JSON.stringify(r5.currentSubscriptions)), n5 = (0, Ce2.produceWithPatches)(a5, function() {
                    return e5;
                  });
                  o7.next(t5.internalActions.subscriptionsUpdated(n5[1])), a5 = e5, u5 = false;
                }), u5 = true);
                var h4 = !!(null == (d5 = e4.type) ? void 0 : d5.startsWith(i5)), v3 = n4.rejected.match(e4) && e4.meta.condition && !!e4.meta.arg.subscribe;
                return [!h4 && !v3, false];
              }
              return [true, false];
            };
          }(l4), p4 = function(t5) {
            var n4 = t5.reducerPath, r5 = t5.context, i5 = t5.refetchQuery, a5 = t5.internalState, u5 = t5.api.internalActions.removeQueryResult;
            function o6(t6, o7) {
              var s5 = t6.getState()[n4], c5 = s5.queries, l5 = a5.currentSubscriptions;
              r5.batch(function() {
                for (var n5 = 0, r6 = Object.keys(l5); n5 < r6.length; n5++) {
                  var a6 = r6[n5], d5 = c5[a6], f5 = l5[a6];
                  f5 && d5 && (Object.values(f5).some(function(e3) {
                    return true === e3[o7];
                  }) || Object.values(f5).every(function(e3) {
                    return void 0 === e3[o7];
                  }) && s5.config[o7]) && (0 === Object.keys(f5).length ? t6.dispatch(u5({ queryCacheKey: a6 })) : d5.status !== e2.uninitialized && t6.dispatch(i5(d5, a6)));
                }
              });
            }
            return function(e3, t6) {
              D2.match(e3) && o6(t6, "refetchOnFocus"), K2.match(e3) && o6(t6, "refetchOnReconnect");
            };
          }(l4);
          return function(e3) {
            return function(t5) {
              o5 || (o5 = true, r4.dispatch(i4.internalActions.middlewareRegistered(u4)));
              var s5, c5 = y2(v2({}, r4), { next: e3 }), l5 = r4.getState(), h4 = f4(t5, c5, l5), m4 = h4[1];
              if (s5 = h4[0] ? e3(t5) : m4, r4.getState()[n3] && (p4(t5, c5, l5), function(e4) {
                return !!e4 && "string" == typeof e4.type && e4.type.startsWith(n3 + "/");
              }(t5) || a4.hasRehydrationInfo(t5))) for (var g4 = 0, b4 = d4; g4 < b4.length; g4++) (0, b4[g4])(t5, c5, l5);
              return s5;
            };
          };
        }, actions: o4 };
        function c4(e3, t5, n4) {
          return void 0 === n4 && (n4 = {}), r3(v2({ type: "query", endpointName: e3.endpointName, originalArgs: e3.originalArgs, subscribe: false, forceRefetch: true, queryCacheKey: t5 }, n4));
        }
      }({ reducerPath: o3, context: a3, queryThunk: m3, mutationThunk: g3, api: t3, assertTagType: p3 }), C3 = Q3.middleware;
      Me2(t3.util, Q3.actions), Me2(t3, { reducer: k3, middleware: C3 });
      var I3 = function(t4) {
        var n3 = t4.serializeQueryArgs, r3 = t4.reducerPath, i4 = function(e3) {
          return de2;
        }, a4 = function(e3) {
          return fe2;
        };
        return { buildQuerySelector: function(e3, t5) {
          return function(r4) {
            var a5 = n3({ queryArgs: r4, endpointDefinition: t5, endpointName: e3 });
            return (0, B2.createSelector)(r4 === se2 ? i4 : function(e4) {
              var t6, n4, r5;
              return null != (r5 = null == (n4 = null == (t6 = o4(e4)) ? void 0 : t6.queries) ? void 0 : n4[a5]) ? r5 : de2;
            }, u4);
          };
        }, buildMutationSelector: function() {
          return function(e3) {
            var t5, n4;
            return n4 = "object" == typeof e3 ? null != (t5 = ae2(e3)) ? t5 : se2 : e3, (0, B2.createSelector)(n4 === se2 ? a4 : function(e4) {
              var t6, r4, i5;
              return null != (i5 = null == (r4 = null == (t6 = o4(e4)) ? void 0 : t6.mutations) ? void 0 : r4[n4]) ? i5 : fe2;
            }, u4);
          };
        }, selectInvalidatedBy: function(e3, t5) {
          for (var n4, i5 = e3[r3], a5 = /* @__PURE__ */ new Set(), u5 = 0, o5 = t5.map(H2); u5 < o5.length; u5++) {
            var s4 = o5[u5], c4 = i5.provided[s4.type];
            if (c4) for (var l4 = 0, d4 = null != (n4 = void 0 !== s4.id ? c4[s4.id] : S2(Object.values(c4))) ? n4 : []; l4 < d4.length; l4++) a5.add(d4[l4]);
          }
          return S2(Array.from(a5.values()).map(function(e4) {
            var t6 = i5.queries[e4];
            return t6 ? [{ queryCacheKey: e4, endpointName: t6.endpointName, originalArgs: t6.originalArgs }] : [];
          }));
        } };
        function u4(t5) {
          return v2(v2({}, t5), { status: n4 = t5.status, isUninitialized: n4 === e2.uninitialized, isLoading: n4 === e2.pending, isSuccess: n4 === e2.fulfilled, isError: n4 === e2.rejected });
          var n4;
        }
        function o4(e3) {
          return e3[r3];
        }
      }({ serializeQueryArgs: s3, reducerPath: o3 }), M3 = I3.buildQuerySelector, _3 = I3.buildMutationSelector;
      Me2(t3.util, { selectInvalidatedBy: I3.selectInvalidatedBy });
      var F3 = function(e3) {
        var t4 = e3.serializeQueryArgs, i4 = e3.queryThunk, a4 = e3.mutationThunk, u4 = e3.api, o4 = e3.context, s4 = /* @__PURE__ */ new Map(), c4 = /* @__PURE__ */ new Map(), l4 = u4.internalActions, d4 = l4.unsubscribeQueryResult, f4 = l4.removeMutationResult, p4 = l4.updateSubscriptionOptions;
        return { buildInitiateQuery: function(e4, r3) {
          var a5 = function(o5, c5) {
            var l5 = void 0 === c5 ? {} : c5, f5 = l5.subscribe, h4 = void 0 === f5 || f5, v3 = l5.forceRefetch, y3 = l5.subscriptionOptions, m4 = l5[G2];
            return function(c6, l6) {
              var f6, g4, b4 = t4({ queryArgs: o5, endpointDefinition: r3, endpointName: e4 }), S3 = i4(((f6 = { type: "query", subscribe: h4, forceRefetch: v3, subscriptionOptions: y3, endpointName: e4, originalArgs: o5, queryCacheKey: b4 })[G2] = m4, f6)), O4 = u4.endpoints[e4].select(o5), A3 = c6(S3), T4 = O4(l6()), R4 = A3.requestId, j4 = A3.abort, w4 = T4.requestId !== R4, k4 = null == (g4 = s4.get(c6)) ? void 0 : g4[b4], x4 = function() {
                return O4(l6());
              }, P3 = Object.assign(m4 ? A3.then(x4) : w4 && !k4 ? Promise.resolve(T4) : Promise.all([k4, A3]).then(x4), { arg: o5, requestId: R4, subscriptionOptions: y3, queryCacheKey: b4, abort: j4, unwrap: function() {
                return q2(this, null, function() {
                  var e5;
                  return n2(this, function(t5) {
                    switch (t5.label) {
                      case 0:
                        return [4, P3];
                      case 1:
                        if ((e5 = t5.sent()).isError) throw e5.error;
                        return [2, e5.data];
                    }
                  });
                });
              }, refetch: function() {
                return c6(a5(o5, { subscribe: false, forceRefetch: true }));
              }, unsubscribe: function() {
                h4 && c6(d4({ queryCacheKey: b4, requestId: R4 }));
              }, updateSubscriptionOptions: function(t5) {
                P3.subscriptionOptions = t5, c6(p4({ endpointName: e4, requestId: R4, queryCacheKey: b4, options: t5 }));
              } });
              if (!k4 && !w4 && !m4) {
                var Q4 = s4.get(c6) || {};
                Q4[b4] = P3, s4.set(c6, Q4), P3.then(function() {
                  delete Q4[b4], Object.keys(Q4).length || s4.delete(c6);
                });
              }
              return P3;
            };
          };
          return a5;
        }, buildInitiateMutation: function(e4) {
          return function(t5, n3) {
            var r3 = void 0 === n3 ? {} : n3, i5 = r3.track, u5 = void 0 === i5 || i5, o5 = r3.fixedCacheKey;
            return function(n4, r4) {
              var i6 = a4({ type: "mutation", endpointName: e4, originalArgs: t5, track: u5, fixedCacheKey: o5 }), s5 = n4(i6), l5 = s5.requestId, d5 = s5.abort, p5 = s5.unwrap, h4 = s5.unwrap().then(function(e5) {
                return { data: e5 };
              }).catch(function(e5) {
                return { error: e5 };
              }), v3 = function() {
                n4(f4({ requestId: l5, fixedCacheKey: o5 }));
              }, y3 = Object.assign(h4, { arg: s5.arg, requestId: l5, abort: d5, unwrap: p5, unsubscribe: v3, reset: v3 }), m4 = c4.get(n4) || {};
              return c4.set(n4, m4), m4[l5] = y3, y3.then(function() {
                delete m4[l5], Object.keys(m4).length || c4.delete(n4);
              }), o5 && (m4[o5] = y3, y3.then(function() {
                m4[o5] === y3 && (delete m4[o5], Object.keys(m4).length || c4.delete(n4));
              })), y3;
            };
          };
        }, getRunningQueryThunk: function(e4, n3) {
          return function(r3) {
            var i5, a5 = t4({ queryArgs: n3, endpointDefinition: o4.endpointDefinitions[e4], endpointName: e4 });
            return null == (i5 = s4.get(r3)) ? void 0 : i5[a5];
          };
        }, getRunningMutationThunk: function(e4, t5) {
          return function(e5) {
            var n3;
            return null == (n3 = c4.get(e5)) ? void 0 : n3[t5];
          };
        }, getRunningQueriesThunk: function() {
          return function(e4) {
            return Object.values(s4.get(e4) || {}).filter(V2);
          };
        }, getRunningMutationsThunk: function() {
          return function(e4) {
            return Object.values(c4.get(e4) || {}).filter(V2);
          };
        }, getRunningOperationPromises: function() {
          var e4 = function(e5) {
            return Array.from(e5.values()).flatMap(function(e6) {
              return e6 ? Object.values(e6) : [];
            });
          };
          return r2(r2([], e4(s4)), e4(c4)).filter(V2);
        }, removalWarning: function() {
          throw new Error("This method had to be removed due to a conceptual bug in RTK.\n       Please see https://github.com/reduxjs/redux-toolkit/pull/2481 for details.\n       See https://redux-toolkit.js.org/rtk-query/usage/server-side-rendering for new guidance on SSR.");
        } };
      }({ queryThunk: m3, mutationThunk: g3, api: t3, serializeQueryArgs: s3, context: a3 }), U3 = F3.buildInitiateQuery, ce3 = F3.buildInitiateMutation;
      return Me2(t3.util, { getRunningOperationPromises: F3.getRunningOperationPromises, getRunningOperationPromise: F3.removalWarning, getRunningMutationThunk: F3.getRunningMutationThunk, getRunningMutationsThunk: F3.getRunningMutationsThunk, getRunningQueryThunk: F3.getRunningQueryThunk, getRunningQueriesThunk: F3.getRunningQueriesThunk }), { name: Ne2, injectEndpoint: function(e3, n3) {
        var r3, i4 = t3;
        null != (r3 = i4.endpoints)[e3] || (r3[e3] = {}), L2(n3) ? Me2(i4.endpoints[e3], { name: e3, select: M3(e3, n3), initiate: U3(e3, n3) }, j3(m3, e3)) : n3.type === z2.mutation && Me2(i4.endpoints[e3], { name: e3, select: _3(), initiate: ce3(e3) }, j3(g3, e3));
      } };
    } };
  }, Ee2 = ge2(Ke2());
})(rtkQuery_cjs_production_min);
{
  query.exports = rtkQuery_cjs_production_min;
}
var queryExports = query.exports;
const baseQuery = queryExports.fetchBaseQuery({
  baseUrl: `${"https://visaver.online"}/${"api/v1"}`,
  credentials: "same-origin",
  prepareHeaders: (headers) => {
    headers.set("Authorization", `Bearer ${"'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzI4NTY4NzQwLCJpYXQiOjE3MjU5NzY3NDAsImp0aSI6ImYxOTMyYzcwZmM3ZDQ5NzZhYTViMmZkNDgyMjdiY2NkIiwidXNlcl9pZCI6IjQ3ZTUxYWI0LTk0NzAtNDkwYS04MGMxLTlhOWM3Yzk1OTBjZCJ9.3DlLIeADw8m71XRKnp6_GyvnPw-k4AVER_vhZXWVh8o';"}`);
    return headers;
  }
});
const api = createApi({
  reducerPath: "visaver",
  tagTypes: [
    "videos",
    "playlist",
    "playlists",
    "personal_playlist",
    "personal_playlists",
    "searchAI",
    "searchInPlaylist",
    "quiz",
    "quizzes"
  ],
  baseQuery,
  endpoints: () => ({}),
  refetchOnReconnect: true
  // refetchOnFocus: true,
});
const getSearchParamFromURL = (url, param) => {
  let result;
  if (url) {
    result = new URLSearchParams(url).get(param);
  }
  return result ?? "";
};
const PATH = "videos";
const searchPATH = "videos/search/";
const videosAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query({
      query: ({ params }) => ({
        url: `${PATH}/`,
        method: "GET",
        params
      }),
      transformResponse: (data2) => data2.results,
      providesTags: (result) => result ? [...result.map(({ publicId: id2 }) => ({ type: "videos", id: id2 })), { type: "videos", id: "LIST" }] : [{ type: "videos", id: "LIST" }]
    }),
    getMyVideos: build.query({
      query: ({ params }) => ({
        url: `${PATH}/my/`,
        method: "GET",
        params
      }),
      transformResponse: (data2) => data2.results,
      providesTags: (result) => result ? [...result.map(({ publicId: id2 }) => ({ type: "videos", id: id2 })), { type: "videos", id: "LIST" }] : [{ type: "videos", id: "LIST" }]
    }),
    getMovieById: build.query({
      query: ({ id: id2 }) => ({
        url: `${PATH}/${id2}/`,
        method: "GET"
      }),
      providesTags: [{ type: "videos", id: "ONE" }]
    }),
    // //summary
    // getSummary: build.query<any, SummariesRequest>({
    //   query: ({ playlistPk, videoPk }) => ({
    //     url: `${path}/playlist/${playlistPk}/video/${videoPk}/summaries`,
    //     method: 'GET',
    //   }),
    // }),
    getSearchVideos: build.query({
      query: ({ search_str = "", playlist_id }) => ({
        url: searchPATH,
        method: "GET",
        params: {
          search_str,
          playlist_id
        }
      }),
      providesTags: (result) => result ? result.map(({ publicId: id2 }) => ({ type: "searchInPlaylist", id: id2 })) : ["searchInPlaylist"],
      transformResponse: (data2) => {
        return data2.map((video2) => ({
          ...video2,
          timestamp_link: getSearchParamFromURL(video2.timestamp_link, "t")
        }));
      }
    })
  })
});
const {
  useGetVideosQuery,
  // useGetSummaryQuery,
  useGetMyVideosQuery,
  useGetSearchVideosQuery,
  useLazyGetSearchVideosQuery,
  useGetMovieByIdQuery
} = videosAPI;
const path = "playlists";
const playlistsAPI = api.injectEndpoints({
  endpoints: (build) => ({
    getPlaylists: build.query({
      query: ({ params }) => ({
        url: `${path}/`,
        method: "GET",
        params
      }),
      extraOptions: { maxRetries: 8 },
      // transformErrorResponse: (error) => {
      //   console.log(error);
      //   return { status: error.status };
      // },
      providesTags: (result) => result ? [
        ...result.results.map(({ publicId: id2 }) => ({ type: "playlists", id: id2 })),
        { type: "playlists", id: "LIST" }
      ] : [{ type: "playlists", id: "LIST" }]
    }),
    getPlaylistById: build.query({
      query: ({ id: id2, params }) => ({
        url: `${path}/${id2}/`,
        method: "GET",
        params
      }),
      providesTags: (result, _2, { id: id2 }) => result ? [
        { type: "playlist", id: id2 },
        { type: "playlist", id: "one" }
      ] : [{ type: "playlists", id: "one" }]
    }),
    //-----------------------------------------------------------------------------------------------------------------------------------
    getMyPlaylists: build.query({
      query: ({ params }) => ({
        url: `${path}/my/`,
        method: "GET",
        params
      }),
      // transformResponse: (data: GetList<PersonalPlaylist>) => data.results,
      providesTags: ["personal_playlists"]
    }),
    getFullSearch: build.query({
      query: ({ publicId, query: query2 }) => ({
        url: `${path}/${publicId}/full_search/`,
        method: "GET",
        params: { query: query2 }
      }),
      transformResponse: (data2) => {
        const dataWithCues = data2.filter((video2) => video2.cues.length > 0);
        return dataWithCues.map((video2) => ({
          ...video2,
          cues: video2.cues.map((cue) => ({ ...cue, timestampLink: getSearchParamFromURL(cue.timestampLink, "t") }))
        }));
      }
    }),
    //таймкоды
    getTimecodes: build.query({
      query: ({ playlistId: playlistId2, videoPublicId }) => ({
        url: `${path}/${playlistId2}/videos/${videoPublicId}/timecodes/`,
        method: "GET"
      }),
      transformResponse: (response) => response.results[0].data.timecodes.filter((obj, index2) => {
        return index2 === response.results[0].data.timecodes.findIndex((t2) => t2.start === obj.start || t2.text === obj.text);
      }).map((timecode) => ({ ...timecode, startOffsetMs: Math.round(timecode.start) })).sort((a2, b2) => a2.startOffsetMs - b2.startOffsetMs)
    }),
    getDocs: build.query({
      query: ({ playlistId: playlistId2, videoPublicId }) => ({
        url: `${path}/${playlistId2}/videos/${videoPublicId}/summaries/`,
        method: "GET"
      }),
      transformResponse: (response) => response.results[0].pdfFile
    }),
    getSuggestionVideos: build.query({
      query: ({ publicId, previouslySuggestedVideos }) => ({
        url: `${path}/${publicId}/suggest-video/`,
        method: "POST",
        body: { previouslySuggestedVideos }
      }),
      keepUnusedDataFor: 9999999999
    }),
    getGenerate: build.mutation({
      query: () => ({
        url: `${path}/generate/`,
        method: "POST"
      })
    }),
    //квизы
    getAllQuizzes: build.query({
      query: ({ playlistId: playlistId2, params }) => ({
        url: `${path}/${playlistId2}/quizes/`,
        method: "GET",
        params
      }),
      providesTags: (result, _2, { playlistId: playlistId2 }) => result ? [
        { type: "quizzes", id: playlistId2 }
      ] : [{ type: "quizzes", id: "LIST" }]
    }),
    getVideoQuiz: build.query({
      query: ({ playlistId: playlistId2, videoPublicId = "" }) => ({
        url: `${path}/${playlistId2}/quizes/${videoPublicId}/`,
        method: "GET"
      }),
      providesTags: (_2, __, { videoPublicId }) => [{ type: "quiz", id: videoPublicId }]
    })
  })
});
const { useGetTimecodesQuery, useLazyGetTimecodesQuery, useGetDocsQuery, useLazyGetDocsQuery, useGetVideoQuizQuery, useGetAllQuizzesQuery, useGetFullSearchQuery, useGetMyPlaylistsQuery } = playlistsAPI;
function secondsToTime(s2) {
  const totalSeconds = Math.floor(s2);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor(totalSeconds % 3600 / 60);
  const remainingSeconds = totalSeconds % 60;
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
const Timecodes = reactExports.memo(({ setTime, playlistId: playlistId2, id: id2 }) => {
  const [showTextIndex, setShowTextIndex] = reactExports.useState(null);
  const { data: data2 } = useGetTimecodesQuery({ playlistId: playlistId2, videoPublicId: id2 });
  const toggleText = (index2) => {
    setShowTextIndex((prevIndex) => prevIndex === index2 ? null : index2);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "h-[469px] scroll-bar overflow-y-scroll w-[526px] rounded-[12px] border-white-active border-[1px] py-[8px] px-[16px]",
      children: [
        data2 && /* @__PURE__ */ jsx("ol", { children: data2.map(({ start, text, title }, i2) => /* @__PURE__ */ jsxs(
          "li",
          {
            className: "cursor-pointer rounded-[12px] pb-[8px] pr-[8px]",
            children: [
              /* @__PURE__ */ jsxs("div", { onClick: () => setTime(start), children: [
                /* @__PURE__ */ jsx("span", { className: "text-[#6F42C1] font-open-sans font-bold text-[14px] pr-[5px]", children: secondsToTime(start) }),
                /* @__PURE__ */ jsx("span", { className: "text-dark-blue font-open-sans font-bold text-[14px]", children: title })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "text-indigo font-open-sans font-normal text-[14px]",
                    children: showTextIndex === i2 ? text : text.slice(0, 59) + "..."
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    onClick: () => toggleText(i2),
                    className: "self-end cursor-pointer text-[#6F42C1] font-open-sans font-normal text-[14px]",
                    children: showTextIndex === i2 ? "Свернуть" : "...ещё"
                  }
                )
              ] })
            ]
          },
          i2
        )) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-end" })
      ]
    }
  );
});
Timecodes.displayName = "Timecodes";
const VideoFragmentCard = ({
  fragment,
  goToTime
}) => {
  const startsFrom = parseInt(fragment.timestampLink);
  const goToHandler = () => {
    goToTime == null ? void 0 : goToTime(startsFrom);
  };
  console.log(fragment);
  return /* @__PURE__ */ jsxs("div", { onClick: goToHandler, children: [
    /* @__PURE__ */ jsx("div", { className: "w-full" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(
        "span",
        {
          className: "text-[#6F42C1] font-open-sans font-bold text-[14px] pr-[5px]",
          children: secondsToTime(startsFrom)
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "text-dark-blue font-open-sans font-bold text-[14px]", children: "Стратегии продвижения на рынке." }),
      /* @__PURE__ */ jsx(
        "p",
        {
          className: "text-dark-blue font-open-sans font-normal text-[14px]",
          dangerouslySetInnerHTML: { __html: fragment.content }
        }
      )
    ] })
  ] });
};
const Video = () => {
  const [currentTime] = reactExports.useState(null);
  const iframe = reactExports.useRef(null);
  const iframeWrapper = reactExports.useRef(null);
  const vkRef = reactExports.useRef(null);
  const [param] = useSearchParams();
  const playlistId2 = "59609dd8-7ef4-4080-9cb8-3c2cab266494";
  const videoId = "5ec5bb33-9c1e-4295-8a82-ca36138da3cb";
  const {
    data: video2
  } = videosAPI.useGetMovieByIdQuery({ id: videoId });
  const [getSearchVideos, { data: searchVideos }] = playlistsAPI.useLazyGetFullSearchQuery();
  const getSearchVideosHandler = reactExports.useCallback(
    async (query2) => {
      await getSearchVideos({ query: query2, publicId: playlistId2 });
    },
    [playlistId2]
  );
  const goToTime = reactExports.useCallback(
    (time) => {
      var _a, _b, _c;
      if (video2 && video2.source === "VK" && vkRef.current) {
        const player = window.VK.VideoPlayer(vkRef.current);
        player.seek(time);
        (_a = iframeWrapper.current) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      (_b = iframe.current) == null ? void 0 : _b.internalPlayer.seekTo(time, true);
      (_c = iframeWrapper.current) == null ? void 0 : _c.scrollIntoView({ behavior: "smooth", block: "center" });
    },
    [video2]
  );
  return /* @__PURE__ */ jsx("div", { className: "w-[100vw] h-[100vh] bg-white-hover", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-[14px] w-full h-full bg-white p-[10px]", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "mb-[14px]", children: /* @__PURE__ */ jsx(InputSearchTimecodes, { getSearch: getSearchVideosHandler }) }),
      searchVideos ? /* @__PURE__ */ jsx("div", { children: searchVideos && searchVideos.map(
        (fragment) => fragment.cues.map((cue, i2) => {
          if (fragment.publicId === video2.publicId) {
            return (
              //       <Timecodes key={fragment.publicId} setTime={goToTime} currentTime={currentTime} id={videoId} playlistId={playlistId}/>
              /* @__PURE__ */ jsx(
                VideoFragmentCard,
                {
                  fragment: cue,
                  goToTime,
                  videoPreview: fragment.thumbnailUrl
                },
                fragment.publicId + i2
              )
            );
          }
        })
      ) }) : /* @__PURE__ */ jsx(Fragment, { children: !param.get("search") && /* @__PURE__ */ jsx(Timecodes, { setTime: goToTime, currentTime, id: videoId, playlistId: playlistId2 }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "mb-[14px]", children: video2 && /* @__PURE__ */ jsx(VideoCard, { setCurrentTime: () => {
      }, video: video2, iframeClassName: "w-[440px] h-[252px] rounded-[12px]" }) }),
      /* @__PURE__ */ jsx(Summary, { id: videoId, playlistId: playlistId2 })
    ] })
  ] }) });
};
const VideoLayout = () => {
  return /* @__PURE__ */ jsx("div", { className: "flex gap-[14px]", children: /* @__PURE__ */ jsx(Video, {}) });
};
const useAppSelector = useSelector;
const initialState$3 = {
  statusSearch: false,
  search: null,
  searchAI: null
};
const searchSlice = createSlice({
  name: "search",
  initialState: initialState$3,
  reducers: {
    setSearchStatus: (state, { payload }) => {
      state.statusSearch = payload;
    },
    setSearchValue: (state, { payload }) => {
      state.search = payload;
    },
    resetSearch: (state) => {
      state.search = null;
      state.statusSearch = false;
    }
  }
});
const search = searchSlice.reducer;
const initialState$2 = {
  done: false,
  activeQuestionIndex: 0,
  correctCount: 0,
  answers: [[]],
  questions: [
    {
      question: "Что включается в процесс анализа рынка?",
      answers: [
        "получение запроса, проведение анализа, разработку маркетинговой или другой стратегии, её внедрение, а затем оценку результатов и выводов с последующим повторением цикла",
        "получение запроса, проведение анализа, разработку маркетинговой или другой стратегии, её внедрение",
        "разработку маркетинговой или другой стратегии, её внедрение, а затем оценку результатов и выводов с последующим повторением цикла"
      ],
      correctAnswer: "получение запроса, проведение анализа, разработку маркетинговой или другой стратегии, её внедрение, а затем оценку результатов и выводов с последующим повторением цикла",
      answer: "",
      start: "00:00:00"
    },
    {
      question: "Кто обычно выполняет анализ рынка в случае отсутствия аналитического отдела в компании?",
      answers: [
        "директор по развитию",
        "технический директор",
        "продакт-менеджер"
      ],
      correctAnswer: "продакт-менеджер",
      answer: "",
      start: "00:00:29"
    },
    {
      question: "Какой метод используется для анализа рынка в данном случае?",
      answers: [
        "TAM-SAM-SOM",
        "PESTEL",
        "SWOT"
      ],
      correctAnswer: "TAM-SAM-SOM",
      answer: "",
      start: "00:00:57"
    },
    {
      question: "Что важно учитывать при анализе конкурентов?",
      answers: [
        "клиенты, продукты, ценообразование, маркетинговые каналы",
        "тип продукта",
        "доходность"
      ],
      correctAnswer: "клиенты, продукты, ценообразование, маркетинговые каналы",
      answer: "",
      start: "00:02:53"
    }
  ],
  starts: []
};
const quizSlice = createSlice({
  name: "quiz",
  initialState: initialState$2,
  reducers: {
    setQuizRestart: (state) => {
      state.done = false;
      state.activeQuestionIndex = 0;
      state.answers = state.answers.map((a2) => a2.sort(() => Math.random() - 0.5));
      state.questions = state.questions.map((q2) => ({ ...q2, answer: null }));
      state.correctCount = 0;
    },
    setQuizDone: (state) => {
      state.done = true;
    },
    setActiveQuestionIndex: (state, { payload }) => {
      state.activeQuestionIndex = payload;
    },
    setQuizAnswer: (state, { payload: { answer, question } }) => {
      const i2 = state.questions.findIndex((q2) => q2.question === question);
      state.questions[i2].answer = answer;
      if (answer === state.questions[i2].correctAnswer) {
        state.correctCount++;
      }
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(playlistsAPI.endpoints.getVideoQuiz.matchFulfilled, (state, { payload }) => {
      console.log(payload);
      state.done = false;
      state.activeQuestionIndex = 0;
      state.questions = payload.data.map(
        (item) => item.quiz.map((q2) => ({
          ...q2,
          start: item.chapter.start,
          answers: [q2.correctAnswer, ...q2.wrongAnswers].sort(() => Math.random() - 0.5),
          answer: null
        }))
      ).flat();
      state.answers = payload.data.map((q2) => q2.quiz[0].wrongAnswers.concat(q2.quiz[0].correctAnswer).flat()).sort(() => Math.random() - 0.5);
    }).addMatcher(playlistsAPI.endpoints.getVideoQuiz.matchPending, (state) => {
      state.done = false;
      state.activeQuestionIndex = 0;
      state.correctCount = 0;
      state.questions = [];
      state.answers = [[]];
    });
  }
});
const quiz = quizSlice.reducer;
const initialState$1 = {
  playlists: [],
  playlist: null,
  status: null
};
const playlistsSlice = createSlice({
  name: "playlists",
  initialState: initialState$1,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(playlistsAPI.endpoints.getPlaylists.matchFulfilled, (state, action) => {
      state.status = "idle";
      state.playlists = action.payload.results;
    });
  }
});
const playlists = playlistsSlice.reducer;
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    playlists,
    search,
    quiz
  },
  middleware: (getDefaultMiddleware2) => getDefaultMiddleware2({ serializableCheck: false }).concat(api.middleware),
  devTools: false
});
setupListeners(store.dispatch);
const rootActions = {
  ...searchSlice.actions,
  ...quizSlice.actions
};
function useActions() {
  const dispatch = useDispatch();
  const action = reactExports.useMemo(() => {
    return bindActionCreators(rootActions, dispatch);
  }, [dispatch]);
  return action;
}
const resultQuiz = "/assets/resultQuiz-CKnLhn4k.svg";
const Complete = () => {
  const { setQuizRestart } = useActions();
  const [correctCount, questionsCount] = useAppSelector((state) => [
    state.quiz.correctCount,
    state.quiz.questions.length
  ]);
  const setText = () => {
    const correctPercent = Math.round(correctCount / questionsCount * 100);
    if (correctPercent === questionsCount) {
      return "Вы великолепны!";
    } else {
      return `Правильных ответов: ${correctCount} из ${questionsCount}`;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex gap-[100px]", children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("img", { src: resultQuiz, alt: "icon" }) }),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center ", children: [
      /* @__PURE__ */ jsx("span", { className: "text-right block pb-[4px] font-open-sans text-[16px] font-normal text-black", children: "Ваш результат" }),
      /* @__PURE__ */ jsx("span", { className: "block pb-[16px] font-open-sans text-[16px] font-bold text-black", children: setText() }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setQuizRestart();
          },
          className: "w-[152px] h-[40px] font-open-sans text-[15px] font-bold text-white bg-[#514DF7] rounded-[10px]",
          children: "Пройти заново"
        }
      ) })
    ] }) })
  ] });
};
const ArrowLeft = (props) => /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "https://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ jsx("path", { d: "M15 18L9 12L15 6", stroke: props.stroke, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
const ArrowRight = (props) => /* @__PURE__ */ jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "https://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ jsx("path", { d: "M9 6L15 12L9 18", stroke: props.stroke, strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) });
function stylis_min(W2) {
  function M2(d2, c2, e2, h2, a2) {
    for (var m2 = 0, b2 = 0, v2 = 0, n2 = 0, q2, g2, x2 = 0, K2 = 0, k2, u2 = k2 = q2 = 0, l2 = 0, r2 = 0, I2 = 0, t2 = 0, B3 = e2.length, J2 = B3 - 1, y2, f2 = "", p2 = "", F3 = "", G3 = "", C2; l2 < B3; ) {
      g2 = e2.charCodeAt(l2);
      l2 === J2 && 0 !== b2 + n2 + v2 + m2 && (0 !== b2 && (g2 = 47 === b2 ? 10 : 47), n2 = v2 = m2 = 0, B3++, J2++);
      if (0 === b2 + n2 + v2 + m2) {
        if (l2 === J2 && (0 < r2 && (f2 = f2.replace(N2, "")), 0 < f2.trim().length)) {
          switch (g2) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              f2 += e2.charAt(l2);
          }
          g2 = 59;
        }
        switch (g2) {
          case 123:
            f2 = f2.trim();
            q2 = f2.charCodeAt(0);
            k2 = 1;
            for (t2 = ++l2; l2 < B3; ) {
              switch (g2 = e2.charCodeAt(l2)) {
                case 123:
                  k2++;
                  break;
                case 125:
                  k2--;
                  break;
                case 47:
                  switch (g2 = e2.charCodeAt(l2 + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u2 = l2 + 1; u2 < J2; ++u2) {
                          switch (e2.charCodeAt(u2)) {
                            case 47:
                              if (42 === g2 && 42 === e2.charCodeAt(u2 - 1) && l2 + 2 !== u2) {
                                l2 = u2 + 1;
                                break a;
                              }
                              break;
                            case 10:
                              if (47 === g2) {
                                l2 = u2 + 1;
                                break a;
                              }
                          }
                        }
                        l2 = u2;
                      }
                  }
                  break;
                case 91:
                  g2++;
                case 40:
                  g2++;
                case 34:
                case 39:
                  for (; l2++ < J2 && e2.charCodeAt(l2) !== g2; ) {
                  }
              }
              if (0 === k2) break;
              l2++;
            }
            k2 = e2.substring(t2, l2);
            0 === q2 && (q2 = (f2 = f2.replace(ca2, "").trim()).charCodeAt(0));
            switch (q2) {
              case 64:
                0 < r2 && (f2 = f2.replace(N2, ""));
                g2 = f2.charCodeAt(1);
                switch (g2) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r2 = c2;
                    break;
                  default:
                    r2 = O2;
                }
                k2 = M2(c2, r2, k2, g2, a2 + 1);
                t2 = k2.length;
                0 < A2 && (r2 = X2(O2, f2, I2), C2 = H2(3, k2, r2, c2, D2, z2, t2, g2, a2, h2), f2 = r2.join(""), void 0 !== C2 && 0 === (t2 = (k2 = C2.trim()).length) && (g2 = 0, k2 = ""));
                if (0 < t2) switch (g2) {
                  case 115:
                    f2 = f2.replace(da2, ea2);
                  case 100:
                  case 109:
                  case 45:
                    k2 = f2 + "{" + k2 + "}";
                    break;
                  case 107:
                    f2 = f2.replace(fa2, "$1 $2");
                    k2 = f2 + "{" + k2 + "}";
                    k2 = 1 === w2 || 2 === w2 && L2("@" + k2, 3) ? "@-webkit-" + k2 + "@" + k2 : "@" + k2;
                    break;
                  default:
                    k2 = f2 + k2, 112 === h2 && (k2 = (p2 += k2, ""));
                }
                else k2 = "";
                break;
              default:
                k2 = M2(c2, X2(c2, f2, I2), k2, h2, a2 + 1);
            }
            F3 += k2;
            k2 = I2 = r2 = u2 = q2 = 0;
            f2 = "";
            g2 = e2.charCodeAt(++l2);
            break;
          case 125:
          case 59:
            f2 = (0 < r2 ? f2.replace(N2, "") : f2).trim();
            if (1 < (t2 = f2.length)) switch (0 === u2 && (q2 = f2.charCodeAt(0), 45 === q2 || 96 < q2 && 123 > q2) && (t2 = (f2 = f2.replace(" ", ":")).length), 0 < A2 && void 0 !== (C2 = H2(1, f2, c2, d2, D2, z2, p2.length, h2, a2, h2)) && 0 === (t2 = (f2 = C2.trim()).length) && (f2 = "\0\0"), q2 = f2.charCodeAt(0), g2 = f2.charCodeAt(1), q2) {
              case 0:
                break;
              case 64:
                if (105 === g2 || 99 === g2) {
                  G3 += f2 + e2.charAt(l2);
                  break;
                }
              default:
                58 !== f2.charCodeAt(t2 - 1) && (p2 += P2(f2, q2, g2, f2.charCodeAt(2)));
            }
            I2 = r2 = u2 = q2 = 0;
            f2 = "";
            g2 = e2.charCodeAt(++l2);
        }
      }
      switch (g2) {
        case 13:
        case 10:
          47 === b2 ? b2 = 0 : 0 === 1 + q2 && 107 !== h2 && 0 < f2.length && (r2 = 1, f2 += "\0");
          0 < A2 * Y2 && H2(0, f2, c2, d2, D2, z2, p2.length, h2, a2, h2);
          z2 = 1;
          D2++;
          break;
        case 59:
        case 125:
          if (0 === b2 + n2 + v2 + m2) {
            z2++;
            break;
          }
        default:
          z2++;
          y2 = e2.charAt(l2);
          switch (g2) {
            case 9:
            case 32:
              if (0 === n2 + m2 + b2) switch (x2) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y2 = "";
                  break;
                default:
                  32 !== g2 && (y2 = " ");
              }
              break;
            case 0:
              y2 = "\\0";
              break;
            case 12:
              y2 = "\\f";
              break;
            case 11:
              y2 = "\\v";
              break;
            case 38:
              0 === n2 + b2 + m2 && (r2 = I2 = 1, y2 = "\f" + y2);
              break;
            case 108:
              if (0 === n2 + b2 + m2 + E2 && 0 < u2) switch (l2 - u2) {
                case 2:
                  112 === x2 && 58 === e2.charCodeAt(l2 - 3) && (E2 = x2);
                case 8:
                  111 === K2 && (E2 = K2);
              }
              break;
            case 58:
              0 === n2 + b2 + m2 && (u2 = l2);
              break;
            case 44:
              0 === b2 + v2 + n2 + m2 && (r2 = 1, y2 += "\r");
              break;
            case 34:
            case 39:
              0 === b2 && (n2 = n2 === g2 ? 0 : 0 === n2 ? g2 : n2);
              break;
            case 91:
              0 === n2 + b2 + v2 && m2++;
              break;
            case 93:
              0 === n2 + b2 + v2 && m2--;
              break;
            case 41:
              0 === n2 + b2 + m2 && v2--;
              break;
            case 40:
              if (0 === n2 + b2 + m2) {
                if (0 === q2) switch (2 * x2 + 3 * K2) {
                  case 533:
                    break;
                  default:
                    q2 = 1;
                }
                v2++;
              }
              break;
            case 64:
              0 === b2 + v2 + n2 + m2 + u2 + k2 && (k2 = 1);
              break;
            case 42:
            case 47:
              if (!(0 < n2 + m2 + v2)) switch (b2) {
                case 0:
                  switch (2 * g2 + 3 * e2.charCodeAt(l2 + 1)) {
                    case 235:
                      b2 = 47;
                      break;
                    case 220:
                      t2 = l2, b2 = 42;
                  }
                  break;
                case 42:
                  47 === g2 && 42 === x2 && t2 + 2 !== l2 && (33 === e2.charCodeAt(t2 + 2) && (p2 += e2.substring(t2, l2 + 1)), y2 = "", b2 = 0);
              }
          }
          0 === b2 && (f2 += y2);
      }
      K2 = x2;
      x2 = g2;
      l2++;
    }
    t2 = p2.length;
    if (0 < t2) {
      r2 = c2;
      if (0 < A2 && (C2 = H2(2, p2, r2, d2, D2, z2, t2, h2, a2, h2), void 0 !== C2 && 0 === (p2 = C2).length)) return G3 + p2 + F3;
      p2 = r2.join(",") + "{" + p2 + "}";
      if (0 !== w2 * E2) {
        2 !== w2 || L2(p2, 2) || (E2 = 0);
        switch (E2) {
          case 111:
            p2 = p2.replace(ha2, ":-moz-$1") + p2;
            break;
          case 112:
            p2 = p2.replace(Q2, "::-webkit-input-$1") + p2.replace(Q2, "::-moz-$1") + p2.replace(Q2, ":-ms-input-$1") + p2;
        }
        E2 = 0;
      }
    }
    return G3 + p2 + F3;
  }
  function X2(d2, c2, e2) {
    var h2 = c2.trim().split(ia2);
    c2 = h2;
    var a2 = h2.length, m2 = d2.length;
    switch (m2) {
      case 0:
      case 1:
        var b2 = 0;
        for (d2 = 0 === m2 ? "" : d2[0] + " "; b2 < a2; ++b2) {
          c2[b2] = Z2(d2, c2[b2], e2).trim();
        }
        break;
      default:
        var v2 = b2 = 0;
        for (c2 = []; b2 < a2; ++b2) {
          for (var n2 = 0; n2 < m2; ++n2) {
            c2[v2++] = Z2(d2[n2] + " ", h2[b2], e2).trim();
          }
        }
    }
    return c2;
  }
  function Z2(d2, c2, e2) {
    var h2 = c2.charCodeAt(0);
    33 > h2 && (h2 = (c2 = c2.trim()).charCodeAt(0));
    switch (h2) {
      case 38:
        return c2.replace(F2, "$1" + d2.trim());
      case 58:
        return d2.trim() + c2.replace(F2, "$1" + d2.trim());
      default:
        if (0 < 1 * e2 && 0 < c2.indexOf("\f")) return c2.replace(F2, (58 === d2.charCodeAt(0) ? "" : "$1") + d2.trim());
    }
    return d2 + c2;
  }
  function P2(d2, c2, e2, h2) {
    var a2 = d2 + ";", m2 = 2 * c2 + 3 * e2 + 4 * h2;
    if (944 === m2) {
      d2 = a2.indexOf(":", 9) + 1;
      var b2 = a2.substring(d2, a2.length - 1).trim();
      b2 = a2.substring(0, d2).trim() + b2 + ";";
      return 1 === w2 || 2 === w2 && L2(b2, 1) ? "-webkit-" + b2 + b2 : b2;
    }
    if (0 === w2 || 2 === w2 && !L2(a2, 1)) return a2;
    switch (m2) {
      case 1015:
        return 97 === a2.charCodeAt(10) ? "-webkit-" + a2 + a2 : a2;
      case 951:
        return 116 === a2.charCodeAt(3) ? "-webkit-" + a2 + a2 : a2;
      case 963:
        return 110 === a2.charCodeAt(5) ? "-webkit-" + a2 + a2 : a2;
      case 1009:
        if (100 !== a2.charCodeAt(4)) break;
      case 969:
      case 942:
        return "-webkit-" + a2 + a2;
      case 978:
        return "-webkit-" + a2 + "-moz-" + a2 + a2;
      case 1019:
      case 983:
        return "-webkit-" + a2 + "-moz-" + a2 + "-ms-" + a2 + a2;
      case 883:
        if (45 === a2.charCodeAt(8)) return "-webkit-" + a2 + a2;
        if (0 < a2.indexOf("image-set(", 11)) return a2.replace(ja2, "$1-webkit-$2") + a2;
        break;
      case 932:
        if (45 === a2.charCodeAt(4)) switch (a2.charCodeAt(5)) {
          case 103:
            return "-webkit-box-" + a2.replace("-grow", "") + "-webkit-" + a2 + "-ms-" + a2.replace("grow", "positive") + a2;
          case 115:
            return "-webkit-" + a2 + "-ms-" + a2.replace("shrink", "negative") + a2;
          case 98:
            return "-webkit-" + a2 + "-ms-" + a2.replace("basis", "preferred-size") + a2;
        }
        return "-webkit-" + a2 + "-ms-" + a2 + a2;
      case 964:
        return "-webkit-" + a2 + "-ms-flex-" + a2 + a2;
      case 1023:
        if (99 !== a2.charCodeAt(8)) break;
        b2 = a2.substring(a2.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify");
        return "-webkit-box-pack" + b2 + "-webkit-" + a2 + "-ms-flex-pack" + b2 + a2;
      case 1005:
        return ka2.test(a2) ? a2.replace(aa2, ":-webkit-") + a2.replace(aa2, ":-moz-") + a2 : a2;
      case 1e3:
        b2 = a2.substring(13).trim();
        c2 = b2.indexOf("-") + 1;
        switch (b2.charCodeAt(0) + b2.charCodeAt(c2)) {
          case 226:
            b2 = a2.replace(G2, "tb");
            break;
          case 232:
            b2 = a2.replace(G2, "tb-rl");
            break;
          case 220:
            b2 = a2.replace(G2, "lr");
            break;
          default:
            return a2;
        }
        return "-webkit-" + a2 + "-ms-" + b2 + a2;
      case 1017:
        if (-1 === a2.indexOf("sticky", 9)) break;
      case 975:
        c2 = (a2 = d2).length - 10;
        b2 = (33 === a2.charCodeAt(c2) ? a2.substring(0, c2) : a2).substring(d2.indexOf(":", 7) + 1).trim();
        switch (m2 = b2.charCodeAt(0) + (b2.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b2.charCodeAt(8)) break;
          case 115:
            a2 = a2.replace(b2, "-webkit-" + b2) + ";" + a2;
            break;
          case 207:
          case 102:
            a2 = a2.replace(b2, "-webkit-" + (102 < m2 ? "inline-" : "") + "box") + ";" + a2.replace(b2, "-webkit-" + b2) + ";" + a2.replace(b2, "-ms-" + b2 + "box") + ";" + a2;
        }
        return a2 + ";";
      case 938:
        if (45 === a2.charCodeAt(5)) switch (a2.charCodeAt(6)) {
          case 105:
            return b2 = a2.replace("-items", ""), "-webkit-" + a2 + "-webkit-box-" + b2 + "-ms-flex-" + b2 + a2;
          case 115:
            return "-webkit-" + a2 + "-ms-flex-item-" + a2.replace(ba, "") + a2;
          default:
            return "-webkit-" + a2 + "-ms-flex-line-pack" + a2.replace("align-content", "").replace(ba, "") + a2;
        }
        break;
      case 973:
      case 989:
        if (45 !== a2.charCodeAt(3) || 122 === a2.charCodeAt(4)) break;
      case 931:
      case 953:
        if (true === la2.test(d2)) return 115 === (b2 = d2.substring(d2.indexOf(":") + 1)).charCodeAt(0) ? P2(d2.replace("stretch", "fill-available"), c2, e2, h2).replace(":fill-available", ":stretch") : a2.replace(b2, "-webkit-" + b2) + a2.replace(b2, "-moz-" + b2.replace("fill-", "")) + a2;
        break;
      case 962:
        if (a2 = "-webkit-" + a2 + (102 === a2.charCodeAt(5) ? "-ms-" + a2 : "") + a2, 211 === e2 + h2 && 105 === a2.charCodeAt(13) && 0 < a2.indexOf("transform", 10)) return a2.substring(0, a2.indexOf(";", 27) + 1).replace(ma2, "$1-webkit-$2") + a2;
    }
    return a2;
  }
  function L2(d2, c2) {
    var e2 = d2.indexOf(1 === c2 ? ":" : "{"), h2 = d2.substring(0, 3 !== c2 ? e2 : 10);
    e2 = d2.substring(e2 + 1, d2.length - 1);
    return R2(2 !== c2 ? h2 : h2.replace(na, "$1"), e2, c2);
  }
  function ea2(d2, c2) {
    var e2 = P2(c2, c2.charCodeAt(0), c2.charCodeAt(1), c2.charCodeAt(2));
    return e2 !== c2 + ";" ? e2.replace(oa2, " or ($1)").substring(4) : "(" + c2 + ")";
  }
  function H2(d2, c2, e2, h2, a2, m2, b2, v2, n2, q2) {
    for (var g2 = 0, x2 = c2, w3; g2 < A2; ++g2) {
      switch (w3 = S2[g2].call(B2, d2, x2, e2, h2, a2, m2, b2, v2, n2, q2)) {
        case void 0:
        case false:
        case true:
        case null:
          break;
        default:
          x2 = w3;
      }
    }
    if (x2 !== c2) return x2;
  }
  function T2(d2) {
    switch (d2) {
      case void 0:
      case null:
        A2 = S2.length = 0;
        break;
      default:
        if ("function" === typeof d2) S2[A2++] = d2;
        else if ("object" === typeof d2) for (var c2 = 0, e2 = d2.length; c2 < e2; ++c2) {
          T2(d2[c2]);
        }
        else Y2 = !!d2 | 0;
    }
    return T2;
  }
  function U2(d2) {
    d2 = d2.prefix;
    void 0 !== d2 && (R2 = null, d2 ? "function" !== typeof d2 ? w2 = 1 : (w2 = 2, R2 = d2) : w2 = 0);
    return U2;
  }
  function B2(d2, c2) {
    var e2 = d2;
    33 > e2.charCodeAt(0) && (e2 = e2.trim());
    V2 = e2;
    e2 = [V2];
    if (0 < A2) {
      var h2 = H2(-1, c2, e2, e2, D2, z2, 0, 0, 0, 0);
      void 0 !== h2 && "string" === typeof h2 && (c2 = h2);
    }
    var a2 = M2(O2, e2, c2, 0, 0);
    0 < A2 && (h2 = H2(-2, a2, e2, e2, D2, z2, a2.length, 0, 0, 0), void 0 !== h2 && (a2 = h2));
    V2 = "";
    E2 = 0;
    z2 = D2 = 1;
    return a2;
  }
  var ca2 = /^\0+/g, N2 = /[\0\r\f]/g, aa2 = /: */g, ka2 = /zoo|gra/, ma2 = /([,: ])(transform)/g, ia2 = /,\r+?/g, F2 = /([\t\r\n ])*\f?&/g, fa2 = /@(k\w+)\s*(\S*)\s*/, Q2 = /::(place)/g, ha2 = /:(read-only)/g, G2 = /[svh]\w+-[tblr]{2}/, da2 = /\(\s*(.*)\s*\)/g, oa2 = /([\s\S]*?);/g, ba = /-self|flex-/g, na = /[^]*?(:[rp][el]a[\w-]+)[^]*/, la2 = /stretch|:\s*\w+\-(?:conte|avail)/, ja2 = /([^-])(image-set\()/, z2 = 1, D2 = 1, E2 = 0, w2 = 1, O2 = [], S2 = [], A2 = 0, R2 = null, Y2 = 0, V2 = "";
  B2.use = T2;
  B2.set = U2;
  void 0 !== W2 && U2(W2);
  return B2;
}
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
var define_process_env_default = {};
function y() {
  return (y = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2) Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }).apply(this, arguments);
}
var v = function(e2, t2) {
  for (var n2 = [e2[0]], r2 = 0, o2 = t2.length; r2 < o2; r2 += 1) n2.push(t2[r2], e2[r2 + 1]);
  return n2;
}, g = function(t2) {
  return null !== t2 && "object" == typeof t2 && "[object Object]" === (t2.toString ? t2.toString() : Object.prototype.toString.call(t2)) && !reactIsExports.typeOf(t2);
}, S = Object.freeze([]), w = Object.freeze({});
function E(e2) {
  return "function" == typeof e2;
}
function b(e2) {
  return e2.displayName || e2.name || "Component";
}
function _(e2) {
  return e2 && "string" == typeof e2.styledComponentId;
}
var N = "undefined" != typeof process && void 0 !== define_process_env_default && (define_process_env_default.REACT_APP_SC_ATTR || define_process_env_default.SC_ATTR) || "data-styled", C = "undefined" != typeof window && "HTMLElement" in window, I = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== define_process_env_default && (void 0 !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && "" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY && define_process_env_default.REACT_APP_SC_DISABLE_SPEEDY : void 0 !== define_process_env_default.SC_DISABLE_SPEEDY && "" !== define_process_env_default.SC_DISABLE_SPEEDY ? "false" !== define_process_env_default.SC_DISABLE_SPEEDY && define_process_env_default.SC_DISABLE_SPEEDY : false)), P = {};
function D(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
  throw new Error("An error occurred. See https://git.io/JUIaE#" + e2 + " for more information." + (n2.length > 0 ? " Args: " + n2.join(", ") : ""));
}
var j = function() {
  function e2(e3) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e3;
  }
  var t2 = e2.prototype;
  return t2.indexOfGroup = function(e3) {
    for (var t3 = 0, n2 = 0; n2 < e3; n2++) t3 += this.groupSizes[n2];
    return t3;
  }, t2.insertRules = function(e3, t3) {
    if (e3 >= this.groupSizes.length) {
      for (var n2 = this.groupSizes, r2 = n2.length, o2 = r2; e3 >= o2; ) (o2 <<= 1) < 0 && D(16, "" + e3);
      this.groupSizes = new Uint32Array(o2), this.groupSizes.set(n2), this.length = o2;
      for (var s2 = r2; s2 < o2; s2++) this.groupSizes[s2] = 0;
    }
    for (var i2 = this.indexOfGroup(e3 + 1), a2 = 0, c2 = t3.length; a2 < c2; a2++) this.tag.insertRule(i2, t3[a2]) && (this.groupSizes[e3]++, i2++);
  }, t2.clearGroup = function(e3) {
    if (e3 < this.length) {
      var t3 = this.groupSizes[e3], n2 = this.indexOfGroup(e3), r2 = n2 + t3;
      this.groupSizes[e3] = 0;
      for (var o2 = n2; o2 < r2; o2++) this.tag.deleteRule(n2);
    }
  }, t2.getGroup = function(e3) {
    var t3 = "";
    if (e3 >= this.length || 0 === this.groupSizes[e3]) return t3;
    for (var n2 = this.groupSizes[e3], r2 = this.indexOfGroup(e3), o2 = r2 + n2, s2 = r2; s2 < o2; s2++) t3 += this.tag.getRule(s2) + "/*!sc*/\n";
    return t3;
  }, e2;
}(), T = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), k = 1, V = function(e2) {
  if (T.has(e2)) return T.get(e2);
  for (; x.has(k); ) k++;
  var t2 = k++;
  return T.set(e2, t2), x.set(t2, e2), t2;
}, B = function(e2) {
  return x.get(e2);
}, z = function(e2, t2) {
  t2 >= k && (k = t2 + 1), T.set(e2, t2), x.set(t2, e2);
}, M = "style[" + N + '][data-styled-version="5.3.11"]', G = new RegExp("^" + N + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), L = function(e2, t2, n2) {
  for (var r2, o2 = n2.split(","), s2 = 0, i2 = o2.length; s2 < i2; s2++) (r2 = o2[s2]) && e2.registerName(t2, r2);
}, F = function(e2, t2) {
  for (var n2 = (t2.textContent || "").split("/*!sc*/\n"), r2 = [], o2 = 0, s2 = n2.length; o2 < s2; o2++) {
    var i2 = n2[o2].trim();
    if (i2) {
      var a2 = i2.match(G);
      if (a2) {
        var c2 = 0 | parseInt(a2[1], 10), u2 = a2[2];
        0 !== c2 && (z(u2, c2), L(e2, u2, a2[3]), e2.getTag().insertRules(c2, r2)), r2.length = 0;
      } else r2.push(i2);
    }
  }
}, Y = function() {
  return "undefined" != typeof __webpack_nonce__ ? __webpack_nonce__ : null;
}, q = function(e2) {
  var t2 = document.head, n2 = e2 || t2, r2 = document.createElement("style"), o2 = function(e3) {
    for (var t3 = e3.childNodes, n3 = t3.length; n3 >= 0; n3--) {
      var r3 = t3[n3];
      if (r3 && 1 === r3.nodeType && r3.hasAttribute(N)) return r3;
    }
  }(n2), s2 = void 0 !== o2 ? o2.nextSibling : null;
  r2.setAttribute(N, "active"), r2.setAttribute("data-styled-version", "5.3.11");
  var i2 = Y();
  return i2 && r2.setAttribute("nonce", i2), n2.insertBefore(r2, s2), r2;
}, H = function() {
  function e2(e3) {
    var t3 = this.element = q(e3);
    t3.appendChild(document.createTextNode("")), this.sheet = function(e4) {
      if (e4.sheet) return e4.sheet;
      for (var t4 = document.styleSheets, n2 = 0, r2 = t4.length; n2 < r2; n2++) {
        var o2 = t4[n2];
        if (o2.ownerNode === e4) return o2;
      }
      D(17);
    }(t3), this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    try {
      return this.sheet.insertRule(t3, e3), this.length++, true;
    } catch (e4) {
      return false;
    }
  }, t2.deleteRule = function(e3) {
    this.sheet.deleteRule(e3), this.length--;
  }, t2.getRule = function(e3) {
    var t3 = this.sheet.cssRules[e3];
    return void 0 !== t3 && "string" == typeof t3.cssText ? t3.cssText : "";
  }, e2;
}(), $ = function() {
  function e2(e3) {
    var t3 = this.element = q(e3);
    this.nodes = t3.childNodes, this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    if (e3 <= this.length && e3 >= 0) {
      var n2 = document.createTextNode(t3), r2 = this.nodes[e3];
      return this.element.insertBefore(n2, r2 || null), this.length++, true;
    }
    return false;
  }, t2.deleteRule = function(e3) {
    this.element.removeChild(this.nodes[e3]), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.nodes[e3].textContent : "";
  }, e2;
}(), W = function() {
  function e2(e3) {
    this.rules = [], this.length = 0;
  }
  var t2 = e2.prototype;
  return t2.insertRule = function(e3, t3) {
    return e3 <= this.length && (this.rules.splice(e3, 0, t3), this.length++, true);
  }, t2.deleteRule = function(e3) {
    this.rules.splice(e3, 1), this.length--;
  }, t2.getRule = function(e3) {
    return e3 < this.length ? this.rules[e3] : "";
  }, e2;
}(), U = C, J = { isServer: !C, useCSSOMInjection: !I }, X = function() {
  function e2(e3, t3, n2) {
    void 0 === e3 && (e3 = w), void 0 === t3 && (t3 = {}), this.options = y({}, J, {}, e3), this.gs = t3, this.names = new Map(n2), this.server = !!e3.isServer, !this.server && C && U && (U = false, function(e4) {
      for (var t4 = document.querySelectorAll(M), n3 = 0, r2 = t4.length; n3 < r2; n3++) {
        var o2 = t4[n3];
        o2 && "active" !== o2.getAttribute(N) && (F(e4, o2), o2.parentNode && o2.parentNode.removeChild(o2));
      }
    }(this));
  }
  e2.registerId = function(e3) {
    return V(e3);
  };
  var t2 = e2.prototype;
  return t2.reconstructWithOptions = function(t3, n2) {
    return void 0 === n2 && (n2 = true), new e2(y({}, this.options, {}, t3), this.gs, n2 && this.names || void 0);
  }, t2.allocateGSInstance = function(e3) {
    return this.gs[e3] = (this.gs[e3] || 0) + 1;
  }, t2.getTag = function() {
    return this.tag || (this.tag = (n2 = (t3 = this.options).isServer, r2 = t3.useCSSOMInjection, o2 = t3.target, e3 = n2 ? new W(o2) : r2 ? new H(o2) : new $(o2), new j(e3)));
    var e3, t3, n2, r2, o2;
  }, t2.hasNameForId = function(e3, t3) {
    return this.names.has(e3) && this.names.get(e3).has(t3);
  }, t2.registerName = function(e3, t3) {
    if (V(e3), this.names.has(e3)) this.names.get(e3).add(t3);
    else {
      var n2 = /* @__PURE__ */ new Set();
      n2.add(t3), this.names.set(e3, n2);
    }
  }, t2.insertRules = function(e3, t3, n2) {
    this.registerName(e3, t3), this.getTag().insertRules(V(e3), n2);
  }, t2.clearNames = function(e3) {
    this.names.has(e3) && this.names.get(e3).clear();
  }, t2.clearRules = function(e3) {
    this.getTag().clearGroup(V(e3)), this.clearNames(e3);
  }, t2.clearTag = function() {
    this.tag = void 0;
  }, t2.toString = function() {
    return function(e3) {
      for (var t3 = e3.getTag(), n2 = t3.length, r2 = "", o2 = 0; o2 < n2; o2++) {
        var s2 = B(o2);
        if (void 0 !== s2) {
          var i2 = e3.names.get(s2), a2 = t3.getGroup(o2);
          if (i2 && a2 && i2.size) {
            var c2 = N + ".g" + o2 + '[id="' + s2 + '"]', u2 = "";
            void 0 !== i2 && i2.forEach(function(e4) {
              e4.length > 0 && (u2 += e4 + ",");
            }), r2 += "" + a2 + c2 + '{content:"' + u2 + '"}/*!sc*/\n';
          }
        }
      }
      return r2;
    }(this);
  }, e2;
}(), Z = /(a)(d)/gi, K = function(e2) {
  return String.fromCharCode(e2 + (e2 > 25 ? 39 : 97));
};
function Q(e2) {
  var t2, n2 = "";
  for (t2 = Math.abs(e2); t2 > 52; t2 = t2 / 52 | 0) n2 = K(t2 % 52) + n2;
  return (K(t2 % 52) + n2).replace(Z, "$1-$2");
}
var ee = function(e2, t2) {
  for (var n2 = t2.length; n2; ) e2 = 33 * e2 ^ t2.charCodeAt(--n2);
  return e2;
}, te = function(e2) {
  return ee(5381, e2);
};
function ne(e2) {
  for (var t2 = 0; t2 < e2.length; t2 += 1) {
    var n2 = e2[t2];
    if (E(n2) && !_(n2)) return false;
  }
  return true;
}
var re = te("5.3.11"), oe = function() {
  function e2(e3, t2, n2) {
    this.rules = e3, this.staticRulesId = "", this.isStatic = (void 0 === n2 || n2.isStatic) && ne(e3), this.componentId = t2, this.baseHash = ee(re, t2), this.baseStyle = n2, X.registerId(t2);
  }
  return e2.prototype.generateAndInjectStyles = function(e3, t2, n2) {
    var r2 = this.componentId, o2 = [];
    if (this.baseStyle && o2.push(this.baseStyle.generateAndInjectStyles(e3, t2, n2)), this.isStatic && !n2.hash) if (this.staticRulesId && t2.hasNameForId(r2, this.staticRulesId)) o2.push(this.staticRulesId);
    else {
      var s2 = _e(this.rules, e3, t2, n2).join(""), i2 = Q(ee(this.baseHash, s2) >>> 0);
      if (!t2.hasNameForId(r2, i2)) {
        var a2 = n2(s2, "." + i2, void 0, r2);
        t2.insertRules(r2, i2, a2);
      }
      o2.push(i2), this.staticRulesId = i2;
    }
    else {
      for (var c2 = this.rules.length, u2 = ee(this.baseHash, n2.hash), l2 = "", d2 = 0; d2 < c2; d2++) {
        var h2 = this.rules[d2];
        if ("string" == typeof h2) l2 += h2;
        else if (h2) {
          var p2 = _e(h2, e3, t2, n2), f2 = Array.isArray(p2) ? p2.join("") : p2;
          u2 = ee(u2, f2 + d2), l2 += f2;
        }
      }
      if (l2) {
        var m2 = Q(u2 >>> 0);
        if (!t2.hasNameForId(r2, m2)) {
          var y2 = n2(l2, "." + m2, void 0, r2);
          t2.insertRules(r2, m2, y2);
        }
        o2.push(m2);
      }
    }
    return o2.join(" ");
  }, e2;
}(), se = /^\s*\/\/.*$/gm, ie = [":", "[", ".", "#"];
function ae(e2) {
  var t2, n2, r2, o2, s2 = w, i2 = s2.options, a2 = void 0 === i2 ? w : i2, c2 = s2.plugins, u2 = void 0 === c2 ? S : c2, l2 = new stylis_min(a2), d2 = [], p2 = /* @__PURE__ */ function(e3) {
    function t3(t4) {
      if (t4) try {
        e3(t4 + "}");
      } catch (e4) {
      }
    }
    return function(n3, r3, o3, s3, i3, a3, c3, u3, l3, d3) {
      switch (n3) {
        case 1:
          if (0 === l3 && 64 === r3.charCodeAt(0)) return e3(r3 + ";"), "";
          break;
        case 2:
          if (0 === u3) return r3 + "/*|*/";
          break;
        case 3:
          switch (u3) {
            case 102:
            case 112:
              return e3(o3[0] + r3), "";
            default:
              return r3 + (0 === d3 ? "/*|*/" : "");
          }
        case -2:
          r3.split("/*|*/}").forEach(t3);
      }
    };
  }(function(e3) {
    d2.push(e3);
  }), f2 = function(e3, r3, s3) {
    return 0 === r3 && -1 !== ie.indexOf(s3[n2.length]) || s3.match(o2) ? e3 : "." + t2;
  };
  function m2(e3, s3, i3, a3) {
    void 0 === a3 && (a3 = "&");
    var c3 = e3.replace(se, ""), u3 = s3 && i3 ? i3 + " " + s3 + " { " + c3 + " }" : c3;
    return t2 = a3, n2 = s3, r2 = new RegExp("\\" + n2 + "\\b", "g"), o2 = new RegExp("(\\" + n2 + "\\b){2,}"), l2(i3 || !s3 ? "" : s3, u3);
  }
  return l2.use([].concat(u2, [function(e3, t3, o3) {
    2 === e3 && o3.length && o3[0].lastIndexOf(n2) > 0 && (o3[0] = o3[0].replace(r2, f2));
  }, p2, function(e3) {
    if (-2 === e3) {
      var t3 = d2;
      return d2 = [], t3;
    }
  }])), m2.hash = u2.length ? u2.reduce(function(e3, t3) {
    return t3.name || D(15), ee(e3, t3.name);
  }, 5381).toString() : "", m2;
}
var ce = r$5.createContext();
ce.Consumer;
var le = r$5.createContext(), de = (le.Consumer, new X()), he = ae();
function pe() {
  return reactExports.useContext(ce) || de;
}
function fe() {
  return reactExports.useContext(le) || he;
}
var ye = function() {
  function e2(e3, t2) {
    var n2 = this;
    this.inject = function(e4, t3) {
      void 0 === t3 && (t3 = he);
      var r2 = n2.name + t3.hash;
      e4.hasNameForId(n2.id, r2) || e4.insertRules(n2.id, r2, t3(n2.rules, r2, "@keyframes"));
    }, this.toString = function() {
      return D(12, String(n2.name));
    }, this.name = e3, this.id = "sc-keyframes-" + e3, this.rules = t2;
  }
  return e2.prototype.getName = function(e3) {
    return void 0 === e3 && (e3 = he), this.name + e3.hash;
  }, e2;
}(), ve = /([A-Z])/, ge = /([A-Z])/g, Se = /^ms-/, we = function(e2) {
  return "-" + e2.toLowerCase();
};
function Ee(e2) {
  return ve.test(e2) ? e2.replace(ge, we).replace(Se, "-ms-") : e2;
}
var be = function(e2) {
  return null == e2 || false === e2 || "" === e2;
};
function _e(e2, n2, r2, o2) {
  if (Array.isArray(e2)) {
    for (var s2, i2 = [], a2 = 0, c2 = e2.length; a2 < c2; a2 += 1) "" !== (s2 = _e(e2[a2], n2, r2, o2)) && (Array.isArray(s2) ? i2.push.apply(i2, s2) : i2.push(s2));
    return i2;
  }
  if (be(e2)) return "";
  if (_(e2)) return "." + e2.styledComponentId;
  if (E(e2)) {
    if ("function" != typeof (l2 = e2) || l2.prototype && l2.prototype.isReactComponent || !n2) return e2;
    var u2 = e2(n2);
    return _e(u2, n2, r2, o2);
  }
  var l2;
  return e2 instanceof ye ? r2 ? (e2.inject(r2, o2), e2.getName(o2)) : e2 : g(e2) ? function e3(t2, n3) {
    var r3, o3, s3 = [];
    for (var i3 in t2) t2.hasOwnProperty(i3) && !be(t2[i3]) && (Array.isArray(t2[i3]) && t2[i3].isCss || E(t2[i3]) ? s3.push(Ee(i3) + ":", t2[i3], ";") : g(t2[i3]) ? s3.push.apply(s3, e3(t2[i3], i3)) : s3.push(Ee(i3) + ": " + (r3 = i3, null == (o3 = t2[i3]) || "boolean" == typeof o3 || "" === o3 ? "" : "number" != typeof o3 || 0 === o3 || r3 in unitlessKeys || r3.startsWith("--") ? String(o3).trim() : o3 + "px") + ";"));
    return n3 ? [n3 + " {"].concat(s3, ["}"]) : s3;
  }(e2) : e2.toString();
}
var Ne = function(e2) {
  return Array.isArray(e2) && (e2.isCss = true), e2;
};
function Ae(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
  return E(e2) || g(e2) ? Ne(_e(v(S, [e2].concat(n2)))) : 0 === n2.length && 1 === e2.length && "string" == typeof e2[0] ? e2 : Ne(_e(v(e2, n2)));
}
var Oe = function(e2, t2, n2) {
  return void 0 === n2 && (n2 = w), e2.theme !== n2.theme && e2.theme || t2 || n2.theme;
}, Re = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, De = /(^-|-$)/g;
function je(e2) {
  return e2.replace(Re, "-").replace(De, "");
}
var Te = function(e2) {
  return Q(te(e2) >>> 0);
};
function xe(e2) {
  return "string" == typeof e2 && true;
}
var ke = function(e2) {
  return "function" == typeof e2 || "object" == typeof e2 && null !== e2 && !Array.isArray(e2);
}, Ve = function(e2) {
  return "__proto__" !== e2 && "constructor" !== e2 && "prototype" !== e2;
};
function Be(e2, t2, n2) {
  var r2 = e2[n2];
  ke(t2) && ke(r2) ? ze(r2, t2) : e2[n2] = t2;
}
function ze(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
  for (var o2 = 0, s2 = n2; o2 < s2.length; o2++) {
    var i2 = s2[o2];
    if (ke(i2)) for (var a2 in i2) Ve(a2) && Be(e2, i2[a2], a2);
  }
  return e2;
}
var Me = r$5.createContext();
Me.Consumer;
var Fe = {};
function Ye(e2, t2, n2) {
  var o2 = _(e2), i2 = !xe(e2), a2 = t2.attrs, c2 = void 0 === a2 ? S : a2, l2 = t2.componentId, d2 = void 0 === l2 ? function(e3, t3) {
    var n3 = "string" != typeof e3 ? "sc" : je(e3);
    Fe[n3] = (Fe[n3] || 0) + 1;
    var r2 = n3 + "-" + Te("5.3.11" + n3 + Fe[n3]);
    return t3 ? t3 + "-" + r2 : r2;
  }(t2.displayName, t2.parentComponentId) : l2, h2 = t2.displayName, p2 = void 0 === h2 ? function(e3) {
    return xe(e3) ? "styled." + e3 : "Styled(" + b(e3) + ")";
  }(e2) : h2, v2 = t2.displayName && t2.componentId ? je(t2.displayName) + "-" + t2.componentId : t2.componentId || d2, g2 = o2 && e2.attrs ? Array.prototype.concat(e2.attrs, c2).filter(Boolean) : c2, N2 = t2.shouldForwardProp;
  o2 && e2.shouldForwardProp && (N2 = t2.shouldForwardProp ? function(n3, r2, o3) {
    return e2.shouldForwardProp(n3, r2, o3) && t2.shouldForwardProp(n3, r2, o3);
  } : e2.shouldForwardProp);
  var A2, C2 = new oe(n2, v2, o2 ? e2.componentStyle : void 0), I2 = C2.isStatic && 0 === c2.length, P2 = function(e3, t3) {
    return function(e4, t4, n3, r2) {
      var o3 = e4.attrs, i3 = e4.componentStyle, a3 = e4.defaultProps, c3 = e4.foldedComponentIds, l3 = e4.shouldForwardProp, d3 = e4.styledComponentId, h3 = e4.target, p3 = function(e5, t5, n4) {
        void 0 === e5 && (e5 = w);
        var r3 = y({}, t5, { theme: e5 }), o4 = {};
        return n4.forEach(function(e6) {
          var t6, n5, s2, i4 = e6;
          for (t6 in E(i4) && (i4 = i4(r3)), i4) r3[t6] = o4[t6] = "className" === t6 ? (n5 = o4[t6], s2 = i4[t6], n5 && s2 ? n5 + " " + s2 : n5 || s2) : i4[t6];
        }), [r3, o4];
      }(Oe(t4, reactExports.useContext(Me), a3) || w, t4, o3), m2 = p3[0], v3 = p3[1], g3 = function(e5, t5, n4, r3) {
        var o4 = pe(), s2 = fe(), i4 = t5 ? e5.generateAndInjectStyles(w, o4, s2) : e5.generateAndInjectStyles(n4, o4, s2);
        return i4;
      }(i3, r2, m2), S2 = n3, b2 = v3.$as || t4.$as || v3.as || t4.as || h3, _2 = xe(b2), N3 = v3 !== t4 ? y({}, t4, {}, v3) : t4, A3 = {};
      for (var C3 in N3) "$" !== C3[0] && "as" !== C3 && ("forwardedAs" === C3 ? A3.as = N3[C3] : (l3 ? l3(C3, isPropValid, b2) : !_2 || isPropValid(C3)) && (A3[C3] = N3[C3]));
      return t4.style && v3.style !== t4.style && (A3.style = y({}, t4.style, {}, v3.style)), A3.className = Array.prototype.concat(c3, d3, g3 !== d3 ? g3 : null, t4.className, v3.className).filter(Boolean).join(" "), A3.ref = S2, reactExports.createElement(b2, A3);
    }(A2, e3, t3, I2);
  };
  return P2.displayName = p2, (A2 = r$5.forwardRef(P2)).attrs = g2, A2.componentStyle = C2, A2.displayName = p2, A2.shouldForwardProp = N2, A2.foldedComponentIds = o2 ? Array.prototype.concat(e2.foldedComponentIds, e2.styledComponentId) : S, A2.styledComponentId = v2, A2.target = o2 ? e2.target : e2, A2.withComponent = function(e3) {
    var r2 = t2.componentId, o3 = function(e4, t3) {
      if (null == e4) return {};
      var n3, r3, o4 = {}, s3 = Object.keys(e4);
      for (r3 = 0; r3 < s3.length; r3++) n3 = s3[r3], t3.indexOf(n3) >= 0 || (o4[n3] = e4[n3]);
      return o4;
    }(t2, ["componentId"]), s2 = r2 && r2 + "-" + (xe(e3) ? e3 : je(b(e3)));
    return Ye(e3, y({}, o3, { attrs: g2, componentId: s2 }), n2);
  }, Object.defineProperty(A2, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(t3) {
    this._foldedDefaultProps = o2 ? ze({}, e2.defaultProps, t3) : t3;
  } }), Object.defineProperty(A2, "toString", { value: function() {
    return "." + A2.styledComponentId;
  } }), i2 && m$5(A2, e2, { attrs: true, componentStyle: true, displayName: true, foldedComponentIds: true, shouldForwardProp: true, styledComponentId: true, target: true, withComponent: true }), A2;
}
var qe = function(e2) {
  return function e3(t2, r2, o2) {
    if (void 0 === o2 && (o2 = w), !reactIsExports.isValidElementType(r2)) return D(1, String(r2));
    var s2 = function() {
      return t2(r2, o2, Ae.apply(void 0, arguments));
    };
    return s2.withConfig = function(n2) {
      return e3(t2, r2, y({}, o2, {}, n2));
    }, s2.attrs = function(n2) {
      return e3(t2, r2, y({}, o2, { attrs: Array.prototype.concat(o2.attrs, n2).filter(Boolean) }));
    }, s2;
  }(Ye, e2);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e2) {
  qe[e2] = qe(e2);
});
var He = function() {
  function e2(e3, t3) {
    this.rules = e3, this.componentId = t3, this.isStatic = ne(e3), X.registerId(this.componentId + 1);
  }
  var t2 = e2.prototype;
  return t2.createStyles = function(e3, t3, n2, r2) {
    var o2 = r2(_e(this.rules, t3, n2, r2).join(""), ""), s2 = this.componentId + e3;
    n2.insertRules(s2, s2, o2);
  }, t2.removeStyles = function(e3, t3) {
    t3.clearRules(this.componentId + e3);
  }, t2.renderStyles = function(e3, t3, n2, r2) {
    e3 > 2 && X.registerId(this.componentId + e3), this.removeStyles(e3, n2), this.createStyles(e3, t3, n2, r2);
  }, e2;
}();
function $e(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), o2 = 1; o2 < t2; o2++) n2[o2 - 1] = arguments[o2];
  var i2 = Ae.apply(void 0, [e2].concat(n2)), a2 = "sc-global-" + Te(JSON.stringify(i2)), u2 = new He(i2, a2);
  function d2(e3) {
    var t3 = pe(), n3 = fe(), o3 = reactExports.useContext(Me), d3 = reactExports.useRef(t3.allocateGSInstance(a2)).current;
    return t3.server && h2(d3, e3, t3, o3, n3), reactExports.useLayoutEffect(function() {
      if (!t3.server) return h2(d3, e3, t3, o3, n3), function() {
        return u2.removeStyles(d3, t3);
      };
    }, [d3, e3, t3, o3, n3]), null;
  }
  function h2(e3, t3, n3, r2, o3) {
    if (u2.isStatic) u2.renderStyles(e3, P, n3, o3);
    else {
      var s2 = y({}, t3, { theme: Oe(t3, r2, d2.defaultProps) });
      u2.renderStyles(e3, s2, n3, o3);
    }
  }
  return r$5.memo(d2);
}
function We(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
  var o2 = Ae.apply(void 0, [e2].concat(n2)).join(""), s2 = Te(o2);
  return new ye(s2, o2);
}
const styled = qe;
We`
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
`;
We`
  0%{
    /* scale: 0; */
    opacity: 0;
    transform: translateY(50vh);
  }
  100%{
    /* scale: 1; */
    opacity: 1;
    transform: translateY(0);
  }
  `;
We`
  0%{
    /* scale: 1; */
    opacity: 1;
    transform: translateY(0);
  }
  100%{
    /* scale: 0; */
    opacity: 0;
    transform: translateY(50vh);
  }
`;
We`
  0%{
    opacity: 0;
    /* scale: 0; */
    /* transform: translateY(400px); */
  }
  100%{
    /* scale: 1; */
    opacity: 0.8;
    /* transform: translateY(0); */
  }
  `;
We`
  0%{
    /* scale: 1; */
    opacity: 0.8;
    /* transform: translateY(0); */
  }
  100%{
    /* scale: 0; */
    opacity: 0;
    /* transform: translateY(400px); */
  }
`;
We`
  0%{
    opacity: 0;
    /* transform: translateY(-400px); */
  }
  100%{
    opacity: 1;
    /* transform: translateY(0); */
  }
  `;
We`
  0%{
    opacity: 1;
    /* transform: translateY(0); */
  }
  100%{
    opacity: 0;
    /* transform: translateY(-400px); */
  }
`;
const theme = {
  colors: {
    dark_blue: "#1F2D3D",
    black: "#161818",
    indigo: "#273444",
    white: "#FFFFFF",
    green_active: "#00B856",
    white_hover: "#F4F4F4",
    white_active: "#D3DCE6",
    milk_white: "#E5E9F2",
    lite_green: "#009E5A",
    green_hover: "#2EDB8A",
    green_disabled: "#50AE7C",
    dark_gray: "#3C4858",
    light_gray: "#8492A6",
    gray: "#494952",
    white_disabled: "#E5E9F2",
    white_default: "#ACB5B8",
    gray_default: "#8391A5",
    lite_gray: "#D1DBE5",
    gray_hover: "#E7EBEF",
    text: {
      white_100: "#E4E4FF",
      white_80: "#BBB6DA",
      white_40: "#685FA7",
      white_30: "#62548B",
      white_10: "#3E2C69",
      blue_25: "#17087B"
    },
    White: {
      white_100: "#E4E4FF",
      white_80: "#BBB6DA",
      white_40: "#685FA7",
      white_30: "#62548B",
      white_10: "#2B1759"
    },
    blue: {
      blue_normal: "#1F1EFE",
      blue_70: "#1E15C7",
      blue_55: "#14003C",
      blue_25: "#17087B",
      blue_20: "#16066C",
      blue_5: "#140150",
      blue_dark: "#000046",
      blue_modal: "#0B002C"
    },
    red: {
      red_light: "#EF7A80",
      red_dark: " #EA525A"
    },
    label: {
      label_light: "#E4E4FF",
      label_dark: "#17087B"
    }
  },
  fonts: {
    nunito: "Nunito"
  }
};
styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 67px;
`;
styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 45px;
  @media screen and (max-width: 1024px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;
styled.h3`
  font-weight: 500;
  font-size: 28px;
  line-height: 39px;
  color: ${theme.colors.text.white_100};

  @media (max-width: 1024px) {
    font-size: 24px;
    line-height: 34px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    line-height: 28px;
  }
`;
styled.h4`
  font-weight: 500;
  font-size: 24px;
  line-height: 34px;
  color: ${theme.colors.text.white_100};

  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 17px;
  }
`;
styled.h5`
  font-weight: 500;
  font-size: 17px;
  line-height: 24px;
  color: ${theme.colors.text.white_100};
`;
const Text = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 28px;
`;
styled.p`
  font-weight: 300;
  font-size: 17px;
  line-height: 24px;
  color: ${theme.colors.text.white_80};

  @media (max-width: 1028px) {
    font-size: 15px;
  }
  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
const ButtonText = styled.p`
  font-weight: 700;
  font-size: 17px;
  line-height: 24px;
  text-align: center;
  color: ${theme.colors.text.white_100};
`;
const LabelText = styled.p`
  font-weight: 400;
  font-size: 17px;
  line-height: 24px;
  color: ${theme.colors.dark_blue};
`;
const DescriptionText = styled.p`
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: ${theme.colors.text.white_100};
`;
styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 30px;
    text-align: left;
    color: ${theme.colors.text.white_80};

    @media (max-width: 1028px) {
        font-size: 20px;
        line-height: 24px;
    }
    @media (max-width: 480px) {
        font-size: 14px;
        line-height: 16px;
    }
`;
styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
`;
styled.p`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
`;
styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 16px;
`;
styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
styled.div`
  width: 100%;

  div {
    div {
      &:focus,
      :hover,
      :active {
        outline-color: white;
        border-color: white !important;
      }
    }
  }

  #selectId,
  #selectAccess,
  #selectMyPlaylists,
  #selectAddVideo {
    background-color: transparent !important;

    cursor: pointer;
    .select__placeholder {
      font-weight: 400;
      font-size: 15px;
      line-height: 21px;
      color: ${theme.colors.text.white_30};
    }
    .select__control {
      background-color: transparent;
      border: 2px solid #62548b;
      border-radius: 10px;
    }
    .select__single-value {
      font-weight: 400;
      font-size: 17px;
      line-height: 140%;
      color: ${theme.colors.text.white_30};
    }
    .select__value-container {
      padding: 12px 16px;
    }
    .select__input-container {
      padding: 12px 10px 14px 16px;
    }

    .select__indicator-separator {
      display: none;
    }

    .select__menu {
      background-color: ${theme.colors.blue.blue_25};
      border-radius: 20px;
      z-index: 5;

      div {
        background-color: ${theme.colors.blue.blue_5};
        color: ${theme.colors.text.white_100};
        font-weight: 700;
        font-size: 17px;
        line-height: 140%;

        ::-webkit-scrollbar {
          width: 10px; /* ширина scrollbar */
        }
        ::-webkit-scrollbar-track {
          background: transparent; /* цвет дорожки */
        }
        ::-webkit-scrollbar-thumb {
          border-radius: 20px; /* закругления плашки */
          background-color: ${theme.colors.blue.blue_5}; /* цвет плашки */
        }

        div {
          padding: 15px 10px;
          cursor: pointer;
        }

        :hover {
          background-color: ${theme.colors.blue.blue_dark};
        }
      }
    }
  }
`;
styled.div`
  position: relative;
  width: 100%;
  display: grid;
  flex-direction: row;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  /* margin-bottom: 80px; */
  list-style: none;
  min-height: 300px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  margin-top: 40px;

  .MuiPaginationItem-root {
    color: ${theme.colors.White.white_100};
  }
  .Mui-selected {
    color: ${theme.colors.White.white_100};
    background: #17087b !important;
  }

  .MuiPaginationItem-text {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;

    text-align: center;
    white-space: nowrap;

    color: ${theme.colors.White.white_100};
  }
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    padding: 3px;
  }
  @media screen and (max-width: 360px) {
    & button {
      margin: 0;
    }
  }
`;
const normalize = Ae`
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    border: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  ol li,
  ul li {
    list-style: none;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: inherit;
    font-weight: inherit;
  }
  img {
    vertical-align: top;
  }
  html,
  body {
    font-size: 14px;
    line-height: 1;
    height: 100%;
  }
  input[type='text'],
  input[type='email'],
  input[type='tel'],
  input[type='number'],
  textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
  }
  input,
  button,
  textarea {
    font-family: inherit;
  }
  html {
    scroll-behavior: smooth;
  }

  .fp-watermark {
    display: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
  }
`;
$e`


  body {
    font-family: ${theme.fonts.nunito}, sans-serif;
    color: ${theme.colors.text.white_100};
    background: #0B002C;
    background-image: url("/images/blur-ellipses.svg");
    background-size: cover;
    hyphens: auto;
    overflow-wrap: anywhere;
    position: relative;

    width: 100%;
    
    ::-webkit-scrollbar {
      width: 10px;               /* ширина scrollbar */
    }
    ::-webkit-scrollbar-track {
      background: transparent;        /* цвет дорожки */
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 20px;       /* закругления плашки */
      background-color: ${theme.colors.blue.blue_5};    /* цвет плашки */
    }
    /* scrollbar-gutter: stable; */
    /* @media (max-width : 768px){

    ::-webkit-scrollbar {
      display: none;
    } */

    /* } */
  }

  /* normalize */
  ${normalize}
`;
const Wrapper$1 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: ${(props) => props.width};

  svg {
    display: block;
  }

  padding: ${(props) => props.variant === "withIcon" ? "10px" : "12px 30px"};

  @media screen and (max-width: 480px) {
    padding: ${(props) => props.variant === "withIcon" ? "2px" : "6px 15px"};
  }

  border-radius: 10px;
  border-width: 2px;
  border-style: solid;

  /* transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1); */

  ${(props) => {
  if (props.disabled) {
    return Ae`
        background-color: transparent;
        border-color: ${(props2) => props2.theme === "transparent" ? "transparent" : theme.colors.White.white_10};
        //color: ${theme.colors.White.white_10};
        cursor: auto;
        & p,
        path {
          color: inherit;
          // stroke: ${theme.colors.blue.blue_25};
        }
      `;
  }
  switch (props.theme) {
    case "white":
      return Ae`
          //border-color: ${theme.colors.White.white_100};
          //background-color: ${theme.colors.White.white_100};
          /* &:hover {
               border-color: ${theme.colors.White.white_80};
              background-color: ${theme.colors.White.white_80};
            } */
          &:active {
            //background-color: ${theme.colors.White.white_80};
          }
          & p {
            //color: ${theme.colors.blue.blue_dark};
          }
        `;
    case "red":
      return Ae`
          //border-color: ${theme.colors.red.red_light};
          //background-color: ${theme.colors.red.red_light};
          &:active {
            background-color: ${theme.colors.red.red_dark};
          }
          & p {
            color: ${theme.colors.blue.blue_dark};
          }
        `;
    case "black":
      return Ae`
          border-color: ${theme.colors.blue.blue_20};
          background-color: ${theme.colors.blue.blue_20};
          &:active {
            background-color: ${theme.colors.blue.blue_5};
          }
          & p {
            color: ${theme.colors.White.white_100};
          }
        `;
    case "transparent":
      return Ae`
          border-color: transparent;
          background-color: transparent;
          &:active {
            & p path,
            span {
              color: ${theme.colors.blue.blue_70};
              stroke: ${theme.colors.blue.blue_70};
            }
          }
          & p {
            color: ${theme.colors.White.white_100};
          }
        `;
    case "inline":
      return Ae`
          border-color: ${theme.colors.White.white_100};
          background-color: transparent;
          &:active {
            border-color: ${theme.colors.White.white_40};
          }
          & p {
            color: ${theme.colors.White.white_100};
          }
        `;
    default:
      return Ae`
          border-color: transparent;
          background-color: transparent;
          &:active {
            color: ${theme.colors.blue.blue_70};
            & p {
              color: ${theme.colors.blue.blue_70};
            }
          }
          & p {
            color: ${theme.colors.White.white_100};
          }
        `;
  }
}}
`;
const ButtonInnerText = styled(ButtonText)``;
const Button = reactExports.forwardRef(
  ({
    children,
    theme: theme2 = "black",
    variant = "default",
    width = "auto",
    type = "button",
    disabled = false,
    className,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      Wrapper$1,
      {
        theme: theme2,
        width,
        variant,
        type,
        disabled,
        className,
        ...props,
        ref,
        children: /* @__PURE__ */ jsx(ButtonInnerText, { children })
      }
    );
  }
);
Button.displayName = "Button";
const Button$1 = reactExports.memo(Button);
styled.div`
  position: relative;
  min-height: 345px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 30px;
  width: 100%;
`;
styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
styled.div`
  width: 77%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 75%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const VisibleAnswer = styled.button`
  //border-radius: 10px;
  //border-width: 2px;
  //border-style: solid;
  //display: flex;
  //align-items: center;
  //justify-content: center;
  //
  //user-select: none;
  //cursor: pointer;

  //font-weight: 700;
  //font-size: 17px;
  //line-height: 24px;
  //color: #F4F4F4;

  //padding: 12px 30px;

  //@media screen and (max-width: 480px) {
  //  padding: 6px 15px;
  //}
  @keyframes correct-animation {
    0% {
      background-color: #F4F4F4;
      border-color: #F4F4F4;
    }
    100% {
      background-color: #DDF4C7;
      border-color: #DDF4C7;
    }
  }

  @keyframes incorrect-animation {
    0% {
      background-color: #F4F4F4;
      border-color: #F4F4F4;
    }
    100% {
      border-color: #F4C7C7;
      background-color: #F4C7C7;
    }
  }

  ${({ answerType }) => {
  switch (answerType) {
    case "correct":
      return Ae`
          border-color: #DDF4C7;
          background-color: #DDF4C7;
          animation-name: correct-animation;
          /* &:active {
             
            animation-name: correct-animation;
            animation-duration: 0.2s;
            animation-iteration-count: 5;
            animation-timing-function: ease;
          } */
          &:active {
            animation-name: correct-animation;
            animation-duration: 0.2s;
            animation-iteration-count: 5;
            animation-timing-function: ease;
          }
        `;
    case "incorrect":
      return Ae`
          border-color: #F4C7C7;
          background-color: #F4C7C7;
          /* :active {
            
            animation-name: incorrect-animation;
            animation-duration: 0.2s;
            animation-iteration-count: 5;
            animation-timing-function: ease;
          } */
          &:active {
            animation-name: incorrect-animation;
            animation-duration: 0.2s;
            animation-iteration-count: 5;
            animation-timing-function: ease;
          }
        `;
    default:
      return Ae`
          border-color: #F4F4F4;
          background-color: #F4F4F4;
        `;
  }
}}
  &:hover {
    scale: 1.01;
    transition: scale 0.35s;
  }
  &:active {
    scale: 0.95;
    transition: 0.1s;
  }

  &:disabled {
    cursor: auto;

    :hover,
    :active {
      scale: 1;
    }
  }
`;
const QuestionHeader = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`;
styled(QuestionHeader)``;
styled.div`
  display: flex;
  gap: 20px;
  max-height: 42px;
  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;
styled(Button$1)`
  cursor: pointer;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: rgb(228, 228, 255);
  padding: 13px 39px;

  &:hover {
    scale: 1.03;
    transition: scale 0.5s;
  }
  &:active {
    scale: 0.95;
    transition: 0.2s;
  }

  &:disabled {
    opacity: 0.5;
    cursor: auto;
    background-color: #9197a3;
    
    :hover,
    :active {
      scale: 1;
    }
  }
`;
styled(Button$1)`
  padding: 8px 20px;
  height: 37px;
  margin-bottom: 30px;
  @media screen and (max-width: 1024px) {
    padding: 8px 10px;
  }
`;
const Question = ({ answers, correctAnswer, currentAnswer, question, goToTime, start }) => {
  const { setQuizAnswer, setActiveQuestionIndex, setQuizDone } = useActions();
  const [activeQuestionIndex, questions] = useAppSelector((state) => [
    state.quiz.activeQuestionIndex,
    state.quiz.questions
  ]);
  const isLastQuestion = activeQuestionIndex === questions.length - 1;
  const handleAnswer = (answer) => {
    if (!currentAnswer) {
      setQuizAnswer({ question, answer });
    }
  };
  const onNextButtonHandler = () => {
    if (!questions.filter((q2) => q2.answer === null).length) {
      if (isLastQuestion) {
        setQuizDone();
      }
    }
    questions.length > activeQuestionIndex + 1 && setActiveQuestionIndex(activeQuestionIndex + 1);
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "pb-[16px]", children: [
      /* @__PURE__ */ jsx("p", { className: "font-open-sans text-[16px] font-bold text-dark-blue", children: question }),
      /* @__PURE__ */ jsx("span", { className: "font-open-sans text-[14px] font-normal text-dark-blue", children: `Вопрос ${activeQuestionIndex + 1} из ${questions.length}` })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-[8px]", children: answers.map((answer) => /* @__PURE__ */ jsx(
        VisibleAnswer,
        {
          className: "rounded-[8px] bg-white-hover text-left px-[18px] py-[10px] font-open-sans text-[14px] font-normal text-dark-blue",
          answerType: currentAnswer === answer ? answer === correctAnswer ? "correct" : "incorrect" : void 0,
          onClick: () => handleAnswer(answer),
          disabled: !!currentAnswer,
          children: answer
        },
        answer
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "flex pt-[16px] justify-between", children: [
        /* @__PURE__ */ jsx("div", { children: currentAnswer && correctAnswer !== currentAnswer && /* @__PURE__ */ jsx("button", { className: "rounded-[10px] px-[18px] py-[6px] font-open-sans text-[14px] font-normal bg-white text-[#514DF7] border-[1px] border-[#514DF7]", onClick: () => goToTime(start), children: "Смотреть фрагмент с ответом" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-[12px]", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: `${!activeQuestionIndex ? "bg-[#514DF7] bg-opacity-65" : "bg-[#514DF7]"} px-[30px] py-[4px] rounded-[8px]`,
              onClick: () => {
                setActiveQuestionIndex(activeQuestionIndex - 1);
              },
              disabled: !activeQuestionIndex,
              children: /* @__PURE__ */ jsx(ArrowLeft, { stroke: `${activeQuestionIndex ? "#FFFFFF" : "#FFFFFF"}` })
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "bg-[#514DF7] px-[30px] py-[4px] rounded-[8px]",
              onClick: onNextButtonHandler,
              children: /* @__PURE__ */ jsx(ArrowRight, { stroke: "#FFFFFF" })
            }
          )
        ] })
      ] })
    ] })
  ] });
};
const data = [
  {
    chapter: {
      text: "получение запроса, проведение анализа",
      start: "00:00:00",
      title: ""
    },
    quiz: [
      {
        correctAnswer: "получение запроса, проведение анализа, разработку маркетинговой или другой стратегии, её внедрение, а затем оценку результатов и выводов с последующим повторением цикла",
        question: "Что включается в процесс анализа рынка?",
        wrongAnswers: [
          "получение запроса, проведение анализа, разработку маркетинговой или другой стратегии, её внедрение, а затем оценку результатов и выводов с последующим повторением цикла",
          "получение запроса, проведение анализа, разработку маркетинговой или другой стратегии, её внедрение",
          "разработку маркетинговой или другой стратегии, её внедрение, а затем оценку результатов и выводов с последующим повторением цикла"
        ]
      }
    ]
  },
  {
    chapter: {
      text: "анализ рынка в случае отсутствия аналитического отдела в компании",
      start: "00:00:29",
      title: ""
    },
    quiz: [
      {
        correctAnswer: "продакт-менеджер",
        question: "Кто обычно выполняет анализ рынка в случае отсутствия аналитического отдела в компании?",
        wrongAnswers: [
          "директор по развитию",
          "технический директор",
          "продакт-менеджер"
        ]
      }
    ]
  },
  {
    chapter: {
      text: "метод используется для анализа рынка",
      start: "00:00:57",
      title: ""
    },
    quiz: [
      {
        correctAnswer: "TAM-SAM-SOM",
        question: "Какой метод используется для анализа рынка в данном случае?",
        wrongAnswers: [
          "TAM-SAM-SOM",
          "PESTEL",
          "SWOT"
        ]
      }
    ]
  },
  {
    chapter: {
      text: "при анализе конкурентов",
      start: "00:02:53",
      title: ""
    },
    quiz: [
      {
        correctAnswer: "клиенты, продукты, ценообразование, маркетинговые каналы",
        question: "Что важно учитывать при анализе конкурентов?",
        wrongAnswers: [
          "клиенты, продукты, ценообразование, маркетинговые каналы",
          "тип продукта",
          "доходность"
        ]
      }
    ]
  }
];
const Quiz = ({ goToTime }) => {
  const [activeQuestionIndex, questions, done] = useAppSelector((state) => [
    state.quiz.activeQuestionIndex,
    state.quiz.questions,
    state.quiz.done
  ]);
  return /* @__PURE__ */ jsxs("div", { className: "mt-[75px] ml-[150px] w-[709px] p-[20px] border-white-active border-[1px] rounded-[12px] bg-white", children: [
    data && !done && /* @__PURE__ */ jsx(
      Question,
      {
        question: questions[activeQuestionIndex].question,
        answers: questions[activeQuestionIndex].answers,
        correctAnswer: questions[activeQuestionIndex].correctAnswer,
        currentAnswer: questions[activeQuestionIndex].answer,
        start: questions[activeQuestionIndex].start,
        goToTime
      }
    ),
    done && /* @__PURE__ */ jsx(Complete, {})
  ] });
};
const video = {
  "publicId": "c2bf1bff-13ec-4090-aa56-c50b5eb364da",
  "title": "Система. ПРО бизнес.",
  "videoId": "DmuB41GNl5U",
  "source": "YOUTUBE",
  "originLink": "https://www.youtube.com/watch?v=DmuB41GNl5U",
  "startsFrom": 0,
  "description": "Анализ. Когда и зачем анализировать рынок.",
  "thumbnailUrl": "https://i.ytimg.com/vi/DmuB41GNl5U/sddefault.jpg",
  "purpose": "PERSONAL",
  "quizIds": [
    "ac4f2bcd-6451-4eb0-828e-507ce3b2b181"
  ]
};
const playlistId = "c92ce130-e837-4db3-8278-638fca4b9f9a";
const QuizPage = () => {
  return (
    // <div className='w-[100vw] h-[100vh] bg-white-hover'>
    /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-white p-[10px]", children: video && /* @__PURE__ */ jsx("div", { className: "", children: video && video.quizIds.length > 0 ? /* @__PURE__ */ jsx(Quiz, { publicId: video.quizIds[0], playlistId, goToTime: () => {
    } }) : /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("span", { children: "Загрузка..." }) }) }) })
  );
};
const Tabs = ({ activeTab, onChange }) => {
  const tabsLabel = ["Все (4)", "Фрагменты (3)", "Видео (1)"];
  return /* @__PURE__ */ jsx("div", { className: "flex flex-col mb-[12px] w-[98%]", children: /* @__PURE__ */ jsx("div", { className: "flex border-white-active border-[1px] rounded-[12px] bg-white self-end", children: tabsLabel.map((tab, index2) => /* @__PURE__ */ jsx(
    "span",
    {
      className: `${activeTab === index2 ? "bg-[#514DF7] font-bold text-white" : "bg-white font-normal text-dark-blue"} cursor-pointer block pt-[10px] font-open-sans rounded-[12px] text-center w-[170px] h-[40px] text-[14px]`,
      onClick: () => onChange(index2),
      children: tab
    },
    index2
  )) }) });
};
const Toggle = ({ onChange, title = "" }) => {
  return /* @__PURE__ */ jsxs(reactExports.Fragment, { children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: "toogleA", className: "flex items-center cursor-pointer", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("input", { id: "toogleA", type: "checkbox", className: "sr-only", onChange }),
        /* @__PURE__ */ jsx("div", { className: "key w-[40px] h-[16px] bg-white-disabled rounded-full" }),
        /* @__PURE__ */ jsx("div", { className: "dot absolute w-[16px] h-[12px] bg-white rounded-full left-[4px] top-[2px] transition" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "ml-3 font-open-sans font-normal text-[12px] text-dark-blue", children: title })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
      input:checked ~ .dot {
        transform: translateX(100%);
        background-color: #FFFFFF;
      }
      input:checked ~ .key {
        background-color: #514DF7;
      }` })
  ] });
};
const useOutsideClick = (callback) => {
  const ref = reactExports.useRef(null);
  const handleClick = (event) => {
    if (ref.current && !event.composedPath().includes(ref.current)) {
      callback();
    }
  };
  reactExports.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);
  return ref;
};
const SuggestionsWrapper = styled.div`
    position: absolute;
    background-color: ${theme.colors.white};
    border: 1px solid ${theme.colors.white_default};
    border-radius: 10px;
    z-index: 1;
    max-height: 230px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 4px;
    }

    ::-webkit-scrollbar-track {
        margin-top: 16px;
        background: white;
    }

    ::-webkit-scrollbar-thumb {
        background: #D3DCE6;
        border-radius: 10px;
    }
`;
const SuggestionSearchWrapper = styled(SuggestionsWrapper)`
    top: 87px;
    width: 945px;
`;
const SuggestionsList = styled.ul``;
const SuggestionsItem = styled.li`
    padding: 12px 16px;
    cursor: pointer;
    background-color: ${(props) => props.selected ? theme.colors.white_hover : "white"};

    :hover {
        background-color: ${theme.colors.white_hover};
    }

    transition: background-color 0.3s ease;
`;
const SearchInput = ({ suggestionsList }) => {
  const [params, setParams] = useSearchParams();
  const search2 = reactExports.useRef(null);
  const [suggestions] = reactExports.useState(suggestionsList);
  const [selectedSuggestion, setSelectedSuggestion] = reactExports.useState(-1);
  const [open, setOpen] = reactExports.useState(false);
  const wrapperRef = useOutsideClick(() => {
    setOpen(false);
  });
  const onSearchHandler = () => {
    var _a;
    const value = (_a = search2.current) == null ? void 0 : _a.value;
    if (value) {
      pickSuggestion(value);
    }
  };
  const pickSuggestion = (value) => {
    search2.current && (search2.current.value = value);
    setOpen(false);
    setParams((prev2) => ({ ...prev2, search: value }));
  };
  const makeSearch = useDebounce(() => {
    var _a;
    const data2 = ((_a = search2.current) == null ? void 0 : _a.value) || "";
    if (data2) {
      setParams({ search: data2 });
    } else {
      setParams({});
    }
  }, 500);
  const onChange = reactExports.useCallback(async () => {
    makeSearch();
  }, []);
  const refs = reactExports.useMemo(
    () => suggestions.reduce((acc, item) => {
      acc[item] = reactExports.createRef();
      return acc;
    }, {}),
    [suggestions]
  );
  const scrollToRef = (value, block) => {
    const ref = refs[value].current;
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block });
    }
  };
  const onKeyDown = (e2) => {
    const searchInput = search2.current;
    if (selectedSuggestion < suggestions.length) {
      switch (e2.key) {
        case "Escape":
          setSelectedSuggestion(-1);
          setOpen(false);
          break;
        case "Enter":
          onSearchHandler();
          searchInput == null ? void 0 : searchInput.blur();
          break;
        case "ArrowUp":
          e2.preventDefault();
          if (selectedSuggestion > 0) {
            setSelectedSuggestion((prev2) => prev2 - 1);
            searchInput && (searchInput.value = suggestions[selectedSuggestion - 1]);
            scrollToRef(suggestions[selectedSuggestion - 1], "center");
          } else {
            setSelectedSuggestion(-1);
          }
          break;
        case "ArrowDown":
          e2.preventDefault();
          if (selectedSuggestion < suggestions.length - 1) {
            setSelectedSuggestion((prev2) => prev2 + 1);
            searchInput && (searchInput.value = suggestions[selectedSuggestion + 1]);
            scrollToRef(suggestions[selectedSuggestion + 1], "end");
          } else {
            setSelectedSuggestion(suggestions.length - 1);
          }
          break;
      }
    } else {
      setSelectedSuggestion(-1);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", ref: wrapperRef, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          ref: search2,
          onChange,
          onKeyDown,
          onFocus: () => setOpen(true),
          defaultValue: params.get("search") ?? "",
          placeholder: "Какие слова ищем в этом курсе?",
          className: "w-[945px] h-[40px] focus:outline-none focus:border-light-gray self-end pl-[16px] pr-[45px] pt-[7px] pb-[10px] border-[#EDEFF3] border-[1px] rounded-[9px] text-[16px] text-dark-blue"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute right-[2%] top-[20%]", children: /* @__PURE__ */ jsx(SearchIcon, {}) })
    ] }),
    suggestions.length > 0 && open && /* @__PURE__ */ jsx(SuggestionSearchWrapper, { children: /* @__PURE__ */ jsx(SuggestionsList, { children: suggestions.map((suggestion, i2) => /* @__PURE__ */ jsx(
      SuggestionsItem,
      {
        onClick: (e2) => {
          e2.stopPropagation();
          pickSuggestion(suggestion);
        },
        selected: selectedSuggestion === i2,
        ref: refs[suggestion],
        onMouseEnter: () => {
          setSelectedSuggestion(i2);
        },
        children: /* @__PURE__ */ jsx(LabelText, { dangerouslySetInnerHTML: { __html: highlightText(suggestion, search2.current.value) } })
      },
      suggestion
    )) }) })
  ] });
};
const highlightText = (text, search2) => {
  const regex = new RegExp(`(${search2})`, "gi");
  return text.replace(regex, "<span>$1</span>");
};
styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  //@media screen and (max-width: 768px) {
  //  justify-content: center;
  //}
`;
styled(SearchInput)`
  width: 100%;
  margin-bottom: 60px;

  @media screen and (max-width: 480px) {
    margin-bottom: 20px;
  }

  input {
    width: 100%;
  }
`;
styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const SearchVideoCardStyled = styled.div`
    width: 990px;
    height: 386px;
    border-radius: 12px;
    border: 1px solid #EDEFF3;
    padding: 15px;
    display: flex;
    gap: 20px;
    flex-direction: row;
    background-color: ${theme.colors.white};
    margin-bottom: 12px;

    //@media screen and (max-width: 768px) {
    //  flex-direction: column;
    //  align-items: center;
    //  justify-content: center;
    //}
    //@media screen and (max-width: 480px) {
    //  flex-direction: column;
    //  align-items: center;
    //  justify-content: center;
    //}
`;
const Header = styled.div`
  width: 368px;

  //@media screen and (max-width: 480px) {
  //  padding: 10px;
  //}
`;
const HeaderContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: 480px) {
    align-items: center;
    justify-content: center;
  }
`;
const Title = styled(DescriptionText)`
    //padding-left: 10px;
    white-space: nowrap; /*Запрещаем перенос строк*/
    overflow: hidden; /* Обрезаем все, что не помещается в область */
    text-overflow: ellipsis; /* Добавляем многоточие */
    hyphens: manual;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    color: #1F2D3D;
    padding-bottom: 6px;

    //@media (max-width: 1024px) {
    //  font-size: 20px;
    //}
    //@media (max-width: 480px) {
    //  font-size: 17px;
    //}
`;
const Main = styled.div`
  border-radius: 0px 0px 10px 10px;
  background: #ffffff;
  //width: 100%;
  /*max-width: 910px;
  padding: 40px 0; */
`;
styled.p`
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 17px;
  }
`;
styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 30px;
  width: 100%;
  border-radius: 10px;
  background: #210071;
  padding: 26px 30px;
  border: 1px solid transparent;
  &:hover {
    background-color: #371190;
    border: 1px solid #e4e4ff;
  }
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 480px) {
    padding: 13px 10px;
    gap: 15px;
  }
`;
const InfoText = styled(Text)`
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;

  @media (max-width: 1024px) {
    font-size: 16px;
    line-height: 28px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
    line-height: 16px;
  }
`;
styled(InfoText)`
  font-weight: 700;
`;
styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
`;
styled(Button$1)`
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  /* width: Hug (106px);
height: Hug (40px) */
  padding: 9px 20px 10px 20px;
  border-radius: 8px;
`;
styled.div`
position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-bottom: 20px;
  height: 200px;
  border-radius: 10px;
`;
var lib = {};
var slider = {};
var innerSlider = {};
var initialState = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var initialState2 = {
    animating: false,
    autoplaying: null,
    currentDirection: 0,
    currentLeft: null,
    currentSlide: 0,
    direction: 1,
    dragging: false,
    edgeDragged: false,
    initialized: false,
    lazyLoadedList: [],
    listHeight: null,
    listWidth: null,
    scrolling: false,
    slideCount: null,
    slideHeight: null,
    slideWidth: null,
    swipeLeft: null,
    swiped: false,
    // used by swipeEvent. differentites between touch and swipe.
    swiping: false,
    touchObject: {
      startX: 0,
      startY: 0,
      curX: 0,
      curY: 0
    },
    trackStyle: {},
    trackWidth: 0,
    targetSlide: 0
  };
  exports["default"] = initialState2;
})(initialState);
var FUNC_ERROR_TEXT = "Expected a function";
var NAN = 0 / 0;
var symbolTag = "[object Symbol]";
var reTrim = /^\s+|\s+$/g;
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
var reIsBinary = /^0b[01]+$/i;
var reIsOctal = /^0o[0-7]+$/i;
var freeParseInt = parseInt;
var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal || freeSelf || Function("return this")();
var objectProto = Object.prototype;
var objectToString = objectProto.toString;
var nativeMax = Math.max, nativeMin = Math.min;
var now = function() {
  return root.Date.now();
};
function debounce(func, wait, options) {
  var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
  if (typeof func != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = "maxWait" in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = "trailing" in options ? !!options.trailing : trailing;
  }
  function invokeFunc(time) {
    var args = lastArgs, thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(now());
  }
  function debounced() {
    var time = now(), isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
function isObject(value) {
  var type = typeof value;
  return !!value && (type == "object" || type == "function");
}
function isObjectLike(value) {
  return !!value && typeof value == "object";
}
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
function toNumber(value) {
  if (typeof value == "number") {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == "function" ? value.valueOf() : value;
    value = isObject(other) ? other + "" : other;
  }
  if (typeof value != "string") {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, "");
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
var lodash_debounce = debounce;
var classnames = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn2 = {}.hasOwnProperty;
    function classNames() {
      var classes = "";
      for (var i2 = 0; i2 < arguments.length; i2++) {
        var arg = arguments[i2];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes = "";
      for (var key in arg) {
        if (hasOwn2.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + " " + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames);
var classnamesExports = classnames.exports;
var innerSliderUtils = {};
var defaultProps = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react2 = _interopRequireDefault2(reactExports);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  var defaultProps2 = {
    accessibility: true,
    adaptiveHeight: false,
    afterChange: null,
    appendDots: function appendDots(dots2) {
      return /* @__PURE__ */ _react2["default"].createElement("ul", {
        style: {
          display: "block"
        }
      }, dots2);
    },
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3e3,
    beforeChange: null,
    centerMode: false,
    centerPadding: "50px",
    className: "",
    cssEase: "ease",
    customPaging: function customPaging(i2) {
      return /* @__PURE__ */ _react2["default"].createElement("button", null, i2 + 1);
    },
    dots: false,
    dotsClass: "slick-dots",
    draggable: true,
    easing: "linear",
    edgeFriction: 0.35,
    fade: false,
    focusOnSelect: false,
    infinite: true,
    initialSlide: 0,
    lazyLoad: null,
    nextArrow: null,
    onEdge: null,
    onInit: null,
    onLazyLoadError: null,
    onReInit: null,
    pauseOnDotsHover: false,
    pauseOnFocus: false,
    pauseOnHover: true,
    prevArrow: null,
    responsive: null,
    rows: 1,
    rtl: false,
    slide: "div",
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: true,
    swipeEvent: null,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false,
    waitForAnimate: true,
    asNavFor: null
  };
  exports["default"] = defaultProps2;
})(defaultProps);
Object.defineProperty(innerSliderUtils, "__esModule", {
  value: true
});
innerSliderUtils.checkSpecKeys = innerSliderUtils.checkNavigable = innerSliderUtils.changeSlide = innerSliderUtils.canUseDOM = innerSliderUtils.canGoNext = void 0;
innerSliderUtils.clamp = clamp;
innerSliderUtils.extractObject = void 0;
innerSliderUtils.filterSettings = filterSettings;
innerSliderUtils.validSettings = innerSliderUtils.swipeStart = innerSliderUtils.swipeMove = innerSliderUtils.swipeEnd = innerSliderUtils.slidesOnRight = innerSliderUtils.slidesOnLeft = innerSliderUtils.slideHandler = innerSliderUtils.siblingDirection = innerSliderUtils.safePreventDefault = innerSliderUtils.lazyStartIndex = innerSliderUtils.lazySlidesOnRight = innerSliderUtils.lazySlidesOnLeft = innerSliderUtils.lazyEndIndex = innerSliderUtils.keyHandler = innerSliderUtils.initializedState = innerSliderUtils.getWidth = innerSliderUtils.getTrackLeft = innerSliderUtils.getTrackCSS = innerSliderUtils.getTrackAnimateCSS = innerSliderUtils.getTotalSlides = innerSliderUtils.getSwipeDirection = innerSliderUtils.getSlideCount = innerSliderUtils.getRequiredLazySlides = innerSliderUtils.getPreClones = innerSliderUtils.getPostClones = innerSliderUtils.getOnDemandLazySlides = innerSliderUtils.getNavigableIndexes = innerSliderUtils.getHeight = void 0;
var _react$4 = _interopRequireDefault$4(reactExports);
var _defaultProps = _interopRequireDefault$4(defaultProps);
function _interopRequireDefault$4(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _typeof$4(o2) {
  "@babel/helpers - typeof";
  return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$4(o2);
}
function ownKeys$4(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$4(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$4(Object(t2), true).forEach(function(r3) {
      _defineProperty$4(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$4(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty$4(obj, key, value) {
  key = _toPropertyKey$4(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$4(t2) {
  var i2 = _toPrimitive$4(t2, "string");
  return "symbol" == _typeof$4(i2) ? i2 : String(i2);
}
function _toPrimitive$4(t2, r2) {
  if ("object" != _typeof$4(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != _typeof$4(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function clamp(number, lowerBound, upperBound) {
  return Math.max(lowerBound, Math.min(number, upperBound));
}
var safePreventDefault = innerSliderUtils.safePreventDefault = function safePreventDefault2(event) {
  var passiveEvents = ["onTouchStart", "onTouchMove", "onWheel"];
  if (!passiveEvents.includes(event._reactName)) {
    event.preventDefault();
  }
};
var getOnDemandLazySlides = innerSliderUtils.getOnDemandLazySlides = function getOnDemandLazySlides2(spec) {
  var onDemandSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    if (spec.lazyLoadedList.indexOf(slideIndex) < 0) {
      onDemandSlides.push(slideIndex);
    }
  }
  return onDemandSlides;
};
innerSliderUtils.getRequiredLazySlides = function getRequiredLazySlides(spec) {
  var requiredSlides = [];
  var startIndex = lazyStartIndex(spec);
  var endIndex = lazyEndIndex(spec);
  for (var slideIndex = startIndex; slideIndex < endIndex; slideIndex++) {
    requiredSlides.push(slideIndex);
  }
  return requiredSlides;
};
var lazyStartIndex = innerSliderUtils.lazyStartIndex = function lazyStartIndex2(spec) {
  return spec.currentSlide - lazySlidesOnLeft(spec);
};
var lazyEndIndex = innerSliderUtils.lazyEndIndex = function lazyEndIndex2(spec) {
  return spec.currentSlide + lazySlidesOnRight(spec);
};
var lazySlidesOnLeft = innerSliderUtils.lazySlidesOnLeft = function lazySlidesOnLeft2(spec) {
  return spec.centerMode ? Math.floor(spec.slidesToShow / 2) + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : 0;
};
var lazySlidesOnRight = innerSliderUtils.lazySlidesOnRight = function lazySlidesOnRight2(spec) {
  return spec.centerMode ? Math.floor((spec.slidesToShow - 1) / 2) + 1 + (parseInt(spec.centerPadding) > 0 ? 1 : 0) : spec.slidesToShow;
};
var getWidth = innerSliderUtils.getWidth = function getWidth2(elem) {
  return elem && elem.offsetWidth || 0;
};
var getHeight = innerSliderUtils.getHeight = function getHeight2(elem) {
  return elem && elem.offsetHeight || 0;
};
var getSwipeDirection = innerSliderUtils.getSwipeDirection = function getSwipeDirection2(touchObject) {
  var verticalSwiping = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var xDist, yDist, r2, swipeAngle;
  xDist = touchObject.startX - touchObject.curX;
  yDist = touchObject.startY - touchObject.curY;
  r2 = Math.atan2(yDist, xDist);
  swipeAngle = Math.round(r2 * 180 / Math.PI);
  if (swipeAngle < 0) {
    swipeAngle = 360 - Math.abs(swipeAngle);
  }
  if (swipeAngle <= 45 && swipeAngle >= 0 || swipeAngle <= 360 && swipeAngle >= 315) {
    return "left";
  }
  if (swipeAngle >= 135 && swipeAngle <= 225) {
    return "right";
  }
  if (verticalSwiping === true) {
    if (swipeAngle >= 35 && swipeAngle <= 135) {
      return "up";
    } else {
      return "down";
    }
  }
  return "vertical";
};
var canGoNext = innerSliderUtils.canGoNext = function canGoNext2(spec) {
  var canGo = true;
  if (!spec.infinite) {
    if (spec.centerMode && spec.currentSlide >= spec.slideCount - 1) {
      canGo = false;
    } else if (spec.slideCount <= spec.slidesToShow || spec.currentSlide >= spec.slideCount - spec.slidesToShow) {
      canGo = false;
    }
  }
  return canGo;
};
innerSliderUtils.extractObject = function extractObject(spec, keys) {
  var newObject = {};
  keys.forEach(function(key) {
    return newObject[key] = spec[key];
  });
  return newObject;
};
innerSliderUtils.initializedState = function initializedState(spec) {
  var slideCount = _react$4["default"].Children.count(spec.children);
  var listNode = spec.listRef;
  var listWidth = Math.ceil(getWidth(listNode));
  var trackNode = spec.trackRef && spec.trackRef.node;
  var trackWidth = Math.ceil(getWidth(trackNode));
  var slideWidth;
  if (!spec.vertical) {
    var centerPaddingAdj = spec.centerMode && parseInt(spec.centerPadding) * 2;
    if (typeof spec.centerPadding === "string" && spec.centerPadding.slice(-1) === "%") {
      centerPaddingAdj *= listWidth / 100;
    }
    slideWidth = Math.ceil((listWidth - centerPaddingAdj) / spec.slidesToShow);
  } else {
    slideWidth = listWidth;
  }
  var slideHeight = listNode && getHeight(listNode.querySelector('[data-index="0"]'));
  var listHeight = slideHeight * spec.slidesToShow;
  var currentSlide = spec.currentSlide === void 0 ? spec.initialSlide : spec.currentSlide;
  if (spec.rtl && spec.currentSlide === void 0) {
    currentSlide = slideCount - 1 - spec.initialSlide;
  }
  var lazyLoadedList = spec.lazyLoadedList || [];
  var slidesToLoad = getOnDemandLazySlides(_objectSpread$4(_objectSpread$4({}, spec), {}, {
    currentSlide,
    lazyLoadedList
  }));
  lazyLoadedList = lazyLoadedList.concat(slidesToLoad);
  var state = {
    slideCount,
    slideWidth,
    listWidth,
    trackWidth,
    currentSlide,
    slideHeight,
    listHeight,
    lazyLoadedList
  };
  if (spec.autoplaying === null && spec.autoplay) {
    state["autoplaying"] = "playing";
  }
  return state;
};
innerSliderUtils.slideHandler = function slideHandler(spec) {
  var waitForAnimate = spec.waitForAnimate, animating = spec.animating, fade = spec.fade, infinite = spec.infinite, index2 = spec.index, slideCount = spec.slideCount, lazyLoad = spec.lazyLoad, currentSlide = spec.currentSlide, centerMode = spec.centerMode, slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, useCSS = spec.useCSS;
  var lazyLoadedList = spec.lazyLoadedList;
  if (waitForAnimate && animating) return {};
  var animationSlide = index2, finalSlide, animationLeft, finalLeft;
  var state = {}, nextState = {};
  var targetSlide = infinite ? index2 : clamp(index2, 0, slideCount - 1);
  if (fade) {
    if (!infinite && (index2 < 0 || index2 >= slideCount)) return {};
    if (index2 < 0) {
      animationSlide = index2 + slideCount;
    } else if (index2 >= slideCount) {
      animationSlide = index2 - slideCount;
    }
    if (lazyLoad && lazyLoadedList.indexOf(animationSlide) < 0) {
      lazyLoadedList = lazyLoadedList.concat(animationSlide);
    }
    state = {
      animating: true,
      currentSlide: animationSlide,
      lazyLoadedList,
      targetSlide: animationSlide
    };
    nextState = {
      animating: false,
      targetSlide: animationSlide
    };
  } else {
    finalSlide = animationSlide;
    if (animationSlide < 0) {
      finalSlide = animationSlide + slideCount;
      if (!infinite) finalSlide = 0;
      else if (slideCount % slidesToScroll !== 0) finalSlide = slideCount - slideCount % slidesToScroll;
    } else if (!canGoNext(spec) && animationSlide > currentSlide) {
      animationSlide = finalSlide = currentSlide;
    } else if (centerMode && animationSlide >= slideCount) {
      animationSlide = infinite ? slideCount : slideCount - 1;
      finalSlide = infinite ? 0 : slideCount - 1;
    } else if (animationSlide >= slideCount) {
      finalSlide = animationSlide - slideCount;
      if (!infinite) finalSlide = slideCount - slidesToShow;
      else if (slideCount % slidesToScroll !== 0) finalSlide = 0;
    }
    if (!infinite && animationSlide + slidesToShow >= slideCount) {
      finalSlide = slideCount - slidesToShow;
    }
    animationLeft = getTrackLeft(_objectSpread$4(_objectSpread$4({}, spec), {}, {
      slideIndex: animationSlide
    }));
    finalLeft = getTrackLeft(_objectSpread$4(_objectSpread$4({}, spec), {}, {
      slideIndex: finalSlide
    }));
    if (!infinite) {
      if (animationLeft === finalLeft) animationSlide = finalSlide;
      animationLeft = finalLeft;
    }
    if (lazyLoad) {
      lazyLoadedList = lazyLoadedList.concat(getOnDemandLazySlides(_objectSpread$4(_objectSpread$4({}, spec), {}, {
        currentSlide: animationSlide
      })));
    }
    if (!useCSS) {
      state = {
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread$4(_objectSpread$4({}, spec), {}, {
          left: finalLeft
        })),
        lazyLoadedList,
        targetSlide
      };
    } else {
      state = {
        animating: true,
        currentSlide: finalSlide,
        trackStyle: getTrackAnimateCSS(_objectSpread$4(_objectSpread$4({}, spec), {}, {
          left: animationLeft
        })),
        lazyLoadedList,
        targetSlide
      };
      nextState = {
        animating: false,
        currentSlide: finalSlide,
        trackStyle: getTrackCSS(_objectSpread$4(_objectSpread$4({}, spec), {}, {
          left: finalLeft
        })),
        swipeLeft: null,
        targetSlide
      };
    }
  }
  return {
    state,
    nextState
  };
};
innerSliderUtils.changeSlide = function changeSlide(spec, options) {
  var indexOffset, previousInt, slideOffset, unevenOffset, targetSlide;
  var slidesToScroll = spec.slidesToScroll, slidesToShow = spec.slidesToShow, slideCount = spec.slideCount, currentSlide = spec.currentSlide, previousTargetSlide = spec.targetSlide, lazyLoad = spec.lazyLoad, infinite = spec.infinite;
  unevenOffset = slideCount % slidesToScroll !== 0;
  indexOffset = unevenOffset ? 0 : (slideCount - currentSlide) % slidesToScroll;
  if (options.message === "previous") {
    slideOffset = indexOffset === 0 ? slidesToScroll : slidesToShow - indexOffset;
    targetSlide = currentSlide - slideOffset;
    if (lazyLoad && !infinite) {
      previousInt = currentSlide - slideOffset;
      targetSlide = previousInt === -1 ? slideCount - 1 : previousInt;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide - slidesToScroll;
    }
  } else if (options.message === "next") {
    slideOffset = indexOffset === 0 ? slidesToScroll : indexOffset;
    targetSlide = currentSlide + slideOffset;
    if (lazyLoad && !infinite) {
      targetSlide = (currentSlide + slidesToScroll) % slideCount + indexOffset;
    }
    if (!infinite) {
      targetSlide = previousTargetSlide + slidesToScroll;
    }
  } else if (options.message === "dots") {
    targetSlide = options.index * options.slidesToScroll;
  } else if (options.message === "children") {
    targetSlide = options.index;
    if (infinite) {
      var direction = siblingDirection(_objectSpread$4(_objectSpread$4({}, spec), {}, {
        targetSlide
      }));
      if (targetSlide > options.currentSlide && direction === "left") {
        targetSlide = targetSlide - slideCount;
      } else if (targetSlide < options.currentSlide && direction === "right") {
        targetSlide = targetSlide + slideCount;
      }
    }
  } else if (options.message === "index") {
    targetSlide = Number(options.index);
  }
  return targetSlide;
};
innerSliderUtils.keyHandler = function keyHandler(e2, accessibility, rtl) {
  if (e2.target.tagName.match("TEXTAREA|INPUT|SELECT") || !accessibility) return "";
  if (e2.keyCode === 37) return rtl ? "next" : "previous";
  if (e2.keyCode === 39) return rtl ? "previous" : "next";
  return "";
};
innerSliderUtils.swipeStart = function swipeStart(e2, swipe, draggable) {
  e2.target.tagName === "IMG" && safePreventDefault(e2);
  if (!swipe || !draggable && e2.type.indexOf("mouse") !== -1) return "";
  return {
    dragging: true,
    touchObject: {
      startX: e2.touches ? e2.touches[0].pageX : e2.clientX,
      startY: e2.touches ? e2.touches[0].pageY : e2.clientY,
      curX: e2.touches ? e2.touches[0].pageX : e2.clientX,
      curY: e2.touches ? e2.touches[0].pageY : e2.clientY
    }
  };
};
innerSliderUtils.swipeMove = function swipeMove(e2, spec) {
  var scrolling = spec.scrolling, animating = spec.animating, vertical = spec.vertical, swipeToSlide = spec.swipeToSlide, verticalSwiping = spec.verticalSwiping, rtl = spec.rtl, currentSlide = spec.currentSlide, edgeFriction = spec.edgeFriction, edgeDragged = spec.edgeDragged, onEdge = spec.onEdge, swiped = spec.swiped, swiping = spec.swiping, slideCount = spec.slideCount, slidesToScroll = spec.slidesToScroll, infinite = spec.infinite, touchObject = spec.touchObject, swipeEvent = spec.swipeEvent, listHeight = spec.listHeight, listWidth = spec.listWidth;
  if (scrolling) return;
  if (animating) return safePreventDefault(e2);
  if (vertical && swipeToSlide && verticalSwiping) safePreventDefault(e2);
  var swipeLeft, state = {};
  var curLeft = getTrackLeft(spec);
  touchObject.curX = e2.touches ? e2.touches[0].pageX : e2.clientX;
  touchObject.curY = e2.touches ? e2.touches[0].pageY : e2.clientY;
  touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curX - touchObject.startX, 2)));
  var verticalSwipeLength = Math.round(Math.sqrt(Math.pow(touchObject.curY - touchObject.startY, 2)));
  if (!verticalSwiping && !swiping && verticalSwipeLength > 10) {
    return {
      scrolling: true
    };
  }
  if (verticalSwiping) touchObject.swipeLength = verticalSwipeLength;
  var positionOffset = (!rtl ? 1 : -1) * (touchObject.curX > touchObject.startX ? 1 : -1);
  if (verticalSwiping) positionOffset = touchObject.curY > touchObject.startY ? 1 : -1;
  var dotCount = Math.ceil(slideCount / slidesToScroll);
  var swipeDirection = getSwipeDirection(spec.touchObject, verticalSwiping);
  var touchSwipeLength = touchObject.swipeLength;
  if (!infinite) {
    if (currentSlide === 0 && (swipeDirection === "right" || swipeDirection === "down") || currentSlide + 1 >= dotCount && (swipeDirection === "left" || swipeDirection === "up") || !canGoNext(spec) && (swipeDirection === "left" || swipeDirection === "up")) {
      touchSwipeLength = touchObject.swipeLength * edgeFriction;
      if (edgeDragged === false && onEdge) {
        onEdge(swipeDirection);
        state["edgeDragged"] = true;
      }
    }
  }
  if (!swiped && swipeEvent) {
    swipeEvent(swipeDirection);
    state["swiped"] = true;
  }
  if (!vertical) {
    if (!rtl) {
      swipeLeft = curLeft + touchSwipeLength * positionOffset;
    } else {
      swipeLeft = curLeft - touchSwipeLength * positionOffset;
    }
  } else {
    swipeLeft = curLeft + touchSwipeLength * (listHeight / listWidth) * positionOffset;
  }
  if (verticalSwiping) {
    swipeLeft = curLeft + touchSwipeLength * positionOffset;
  }
  state = _objectSpread$4(_objectSpread$4({}, state), {}, {
    touchObject,
    swipeLeft,
    trackStyle: getTrackCSS(_objectSpread$4(_objectSpread$4({}, spec), {}, {
      left: swipeLeft
    }))
  });
  if (Math.abs(touchObject.curX - touchObject.startX) < Math.abs(touchObject.curY - touchObject.startY) * 0.8) {
    return state;
  }
  if (touchObject.swipeLength > 10) {
    state["swiping"] = true;
    safePreventDefault(e2);
  }
  return state;
};
innerSliderUtils.swipeEnd = function swipeEnd(e2, spec) {
  var dragging = spec.dragging, swipe = spec.swipe, touchObject = spec.touchObject, listWidth = spec.listWidth, touchThreshold = spec.touchThreshold, verticalSwiping = spec.verticalSwiping, listHeight = spec.listHeight, swipeToSlide = spec.swipeToSlide, scrolling = spec.scrolling, onSwipe = spec.onSwipe, targetSlide = spec.targetSlide, currentSlide = spec.currentSlide, infinite = spec.infinite;
  if (!dragging) {
    if (swipe) safePreventDefault(e2);
    return {};
  }
  var minSwipe = verticalSwiping ? listHeight / touchThreshold : listWidth / touchThreshold;
  var swipeDirection = getSwipeDirection(touchObject, verticalSwiping);
  var state = {
    dragging: false,
    edgeDragged: false,
    scrolling: false,
    swiping: false,
    swiped: false,
    swipeLeft: null,
    touchObject: {}
  };
  if (scrolling) {
    return state;
  }
  if (!touchObject.swipeLength) {
    return state;
  }
  if (touchObject.swipeLength > minSwipe) {
    safePreventDefault(e2);
    if (onSwipe) {
      onSwipe(swipeDirection);
    }
    var slideCount, newSlide;
    var activeSlide = infinite ? currentSlide : targetSlide;
    switch (swipeDirection) {
      case "left":
      case "up":
        newSlide = activeSlide + getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 0;
        break;
      case "right":
      case "down":
        newSlide = activeSlide - getSlideCount(spec);
        slideCount = swipeToSlide ? checkNavigable(spec, newSlide) : newSlide;
        state["currentDirection"] = 1;
        break;
      default:
        slideCount = activeSlide;
    }
    state["triggerSlideHandler"] = slideCount;
  } else {
    var currentLeft = getTrackLeft(spec);
    state["trackStyle"] = getTrackAnimateCSS(_objectSpread$4(_objectSpread$4({}, spec), {}, {
      left: currentLeft
    }));
  }
  return state;
};
var getNavigableIndexes = innerSliderUtils.getNavigableIndexes = function getNavigableIndexes2(spec) {
  var max = spec.infinite ? spec.slideCount * 2 : spec.slideCount;
  var breakpoint = spec.infinite ? spec.slidesToShow * -1 : 0;
  var counter = spec.infinite ? spec.slidesToShow * -1 : 0;
  var indexes = [];
  while (breakpoint < max) {
    indexes.push(breakpoint);
    breakpoint = counter + spec.slidesToScroll;
    counter += Math.min(spec.slidesToScroll, spec.slidesToShow);
  }
  return indexes;
};
var checkNavigable = innerSliderUtils.checkNavigable = function checkNavigable2(spec, index2) {
  var navigables = getNavigableIndexes(spec);
  var prevNavigable = 0;
  if (index2 > navigables[navigables.length - 1]) {
    index2 = navigables[navigables.length - 1];
  } else {
    for (var n2 in navigables) {
      if (index2 < navigables[n2]) {
        index2 = prevNavigable;
        break;
      }
      prevNavigable = navigables[n2];
    }
  }
  return index2;
};
var getSlideCount = innerSliderUtils.getSlideCount = function getSlideCount2(spec) {
  var centerOffset = spec.centerMode ? spec.slideWidth * Math.floor(spec.slidesToShow / 2) : 0;
  if (spec.swipeToSlide) {
    var swipedSlide;
    var slickList = spec.listRef;
    var slides = slickList.querySelectorAll && slickList.querySelectorAll(".slick-slide") || [];
    Array.from(slides).every(function(slide) {
      if (!spec.vertical) {
        if (slide.offsetLeft - centerOffset + getWidth(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      } else {
        if (slide.offsetTop + getHeight(slide) / 2 > spec.swipeLeft * -1) {
          swipedSlide = slide;
          return false;
        }
      }
      return true;
    });
    if (!swipedSlide) {
      return 0;
    }
    var currentIndex = spec.rtl === true ? spec.slideCount - spec.currentSlide : spec.currentSlide;
    var slidesTraversed = Math.abs(swipedSlide.dataset.index - currentIndex) || 1;
    return slidesTraversed;
  } else {
    return spec.slidesToScroll;
  }
};
var checkSpecKeys = innerSliderUtils.checkSpecKeys = function checkSpecKeys2(spec, keysArray) {
  return keysArray.reduce(function(value, key) {
    return value && spec.hasOwnProperty(key);
  }, true) ? null : console.error("Keys Missing:", spec);
};
var getTrackCSS = innerSliderUtils.getTrackCSS = function getTrackCSS2(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
  var trackWidth, trackHeight;
  var trackChildren = spec.slideCount + 2 * spec.slidesToShow;
  if (!spec.vertical) {
    trackWidth = getTotalSlides(spec) * spec.slideWidth;
  } else {
    trackHeight = trackChildren * spec.slideHeight;
  }
  var style = {
    opacity: 1,
    transition: "",
    WebkitTransition: ""
  };
  if (spec.useTransform) {
    var WebkitTransform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var transform = !spec.vertical ? "translate3d(" + spec.left + "px, 0px, 0px)" : "translate3d(0px, " + spec.left + "px, 0px)";
    var msTransform = !spec.vertical ? "translateX(" + spec.left + "px)" : "translateY(" + spec.left + "px)";
    style = _objectSpread$4(_objectSpread$4({}, style), {}, {
      WebkitTransform,
      transform,
      msTransform
    });
  } else {
    if (spec.vertical) {
      style["top"] = spec.left;
    } else {
      style["left"] = spec.left;
    }
  }
  if (spec.fade) style = {
    opacity: 1
  };
  if (trackWidth) style.width = trackWidth;
  if (trackHeight) style.height = trackHeight;
  if (window && !window.addEventListener && window.attachEvent) {
    if (!spec.vertical) {
      style.marginLeft = spec.left + "px";
    } else {
      style.marginTop = spec.left + "px";
    }
  }
  return style;
};
var getTrackAnimateCSS = innerSliderUtils.getTrackAnimateCSS = function getTrackAnimateCSS2(spec) {
  checkSpecKeys(spec, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
  var style = getTrackCSS(spec);
  if (spec.useTransform) {
    style.WebkitTransition = "-webkit-transform " + spec.speed + "ms " + spec.cssEase;
    style.transition = "transform " + spec.speed + "ms " + spec.cssEase;
  } else {
    if (spec.vertical) {
      style.transition = "top " + spec.speed + "ms " + spec.cssEase;
    } else {
      style.transition = "left " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getTrackLeft = innerSliderUtils.getTrackLeft = function getTrackLeft2(spec) {
  if (spec.unslick) {
    return 0;
  }
  checkSpecKeys(spec, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
  var slideIndex = spec.slideIndex, trackRef = spec.trackRef, infinite = spec.infinite, centerMode = spec.centerMode, slideCount = spec.slideCount, slidesToShow = spec.slidesToShow, slidesToScroll = spec.slidesToScroll, slideWidth = spec.slideWidth, listWidth = spec.listWidth, variableWidth = spec.variableWidth, slideHeight = spec.slideHeight, fade = spec.fade, vertical = spec.vertical;
  var slideOffset = 0;
  var targetLeft;
  var targetSlide;
  var verticalOffset = 0;
  if (fade || spec.slideCount === 1) {
    return 0;
  }
  var slidesToOffset = 0;
  if (infinite) {
    slidesToOffset = -getPreClones(spec);
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = -(slideIndex > slideCount ? slidesToShow - (slideIndex - slideCount) : slideCount % slidesToScroll);
    }
    if (centerMode) {
      slidesToOffset += parseInt(slidesToShow / 2);
    }
  } else {
    if (slideCount % slidesToScroll !== 0 && slideIndex + slidesToScroll > slideCount) {
      slidesToOffset = slidesToShow - slideCount % slidesToScroll;
    }
    if (centerMode) {
      slidesToOffset = parseInt(slidesToShow / 2);
    }
  }
  slideOffset = slidesToOffset * slideWidth;
  verticalOffset = slidesToOffset * slideHeight;
  if (!vertical) {
    targetLeft = slideIndex * slideWidth * -1 + slideOffset;
  } else {
    targetLeft = slideIndex * slideHeight * -1 + verticalOffset;
  }
  if (variableWidth === true) {
    var targetSlideIndex;
    var trackElem = trackRef && trackRef.node;
    targetSlideIndex = slideIndex + getPreClones(spec);
    targetSlide = trackElem && trackElem.childNodes[targetSlideIndex];
    targetLeft = targetSlide ? targetSlide.offsetLeft * -1 : 0;
    if (centerMode === true) {
      targetSlideIndex = infinite ? slideIndex + getPreClones(spec) : slideIndex;
      targetSlide = trackElem && trackElem.children[targetSlideIndex];
      targetLeft = 0;
      for (var slide = 0; slide < targetSlideIndex; slide++) {
        targetLeft -= trackElem && trackElem.children[slide] && trackElem.children[slide].offsetWidth;
      }
      targetLeft -= parseInt(spec.centerPadding);
      targetLeft += targetSlide && (listWidth - targetSlide.offsetWidth) / 2;
    }
  }
  return targetLeft;
};
var getPreClones = innerSliderUtils.getPreClones = function getPreClones2(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  if (spec.variableWidth) {
    return spec.slideCount;
  }
  return spec.slidesToShow + (spec.centerMode ? 1 : 0);
};
var getPostClones = innerSliderUtils.getPostClones = function getPostClones2(spec) {
  if (spec.unslick || !spec.infinite) {
    return 0;
  }
  return spec.slideCount;
};
var getTotalSlides = innerSliderUtils.getTotalSlides = function getTotalSlides2(spec) {
  return spec.slideCount === 1 ? 1 : getPreClones(spec) + spec.slideCount + getPostClones(spec);
};
var siblingDirection = innerSliderUtils.siblingDirection = function siblingDirection2(spec) {
  if (spec.targetSlide > spec.currentSlide) {
    if (spec.targetSlide > spec.currentSlide + slidesOnRight(spec)) {
      return "left";
    }
    return "right";
  } else {
    if (spec.targetSlide < spec.currentSlide - slidesOnLeft(spec)) {
      return "right";
    }
    return "left";
  }
};
var slidesOnRight = innerSliderUtils.slidesOnRight = function slidesOnRight2(_ref) {
  var slidesToShow = _ref.slidesToShow, centerMode = _ref.centerMode, rtl = _ref.rtl, centerPadding = _ref.centerPadding;
  if (centerMode) {
    var right = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) right += 1;
    if (rtl && slidesToShow % 2 === 0) right += 1;
    return right;
  }
  if (rtl) {
    return 0;
  }
  return slidesToShow - 1;
};
var slidesOnLeft = innerSliderUtils.slidesOnLeft = function slidesOnLeft2(_ref2) {
  var slidesToShow = _ref2.slidesToShow, centerMode = _ref2.centerMode, rtl = _ref2.rtl, centerPadding = _ref2.centerPadding;
  if (centerMode) {
    var left = (slidesToShow - 1) / 2 + 1;
    if (parseInt(centerPadding) > 0) left += 1;
    if (!rtl && slidesToShow % 2 === 0) left += 1;
    return left;
  }
  if (rtl) {
    return slidesToShow - 1;
  }
  return 0;
};
innerSliderUtils.canUseDOM = function canUseDOM2() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
};
var validSettings = innerSliderUtils.validSettings = Object.keys(_defaultProps["default"]);
function filterSettings(settings) {
  return validSettings.reduce(function(acc, settingName) {
    if (settings.hasOwnProperty(settingName)) {
      acc[settingName] = settings[settingName];
    }
    return acc;
  }, {});
}
var track = {};
Object.defineProperty(track, "__esModule", {
  value: true
});
track.Track = void 0;
var _react$3 = _interopRequireDefault$3(reactExports);
var _classnames$3 = _interopRequireDefault$3(classnamesExports);
var _innerSliderUtils$3 = innerSliderUtils;
function _interopRequireDefault$3(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _typeof$3(o2) {
  "@babel/helpers - typeof";
  return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$3(o2);
}
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
function _classCallCheck$3(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$3(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$3(descriptor.key), descriptor);
  }
}
function _createClass$3(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$3(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits$3(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$3(subClass, superClass);
}
function _setPrototypeOf$3(o2, p2) {
  _setPrototypeOf$3 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf$3(o2, p2);
}
function _createSuper$3(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$3();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$3(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$3(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$3(this, result);
  };
}
function _possibleConstructorReturn$3(self2, call) {
  if (call && (_typeof$3(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$3(self2);
}
function _assertThisInitialized$3(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct$3() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct$3 = function _isNativeReflectConstruct2() {
    return !!t2;
  })();
}
function _getPrototypeOf$3(o2) {
  _getPrototypeOf$3 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf$3(o2);
}
function ownKeys$3(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$3(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$3(Object(t2), true).forEach(function(r3) {
      _defineProperty$3(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$3(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty$3(obj, key, value) {
  key = _toPropertyKey$3(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey$3(t2) {
  var i2 = _toPrimitive$3(t2, "string");
  return "symbol" == _typeof$3(i2) ? i2 : String(i2);
}
function _toPrimitive$3(t2, r2) {
  if ("object" != _typeof$3(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != _typeof$3(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
var getSlideClasses = function getSlideClasses2(spec) {
  var slickActive, slickCenter, slickCloned;
  var centerOffset, index2;
  if (spec.rtl) {
    index2 = spec.slideCount - 1 - spec.index;
  } else {
    index2 = spec.index;
  }
  slickCloned = index2 < 0 || index2 >= spec.slideCount;
  if (spec.centerMode) {
    centerOffset = Math.floor(spec.slidesToShow / 2);
    slickCenter = (index2 - spec.currentSlide) % spec.slideCount === 0;
    if (index2 > spec.currentSlide - centerOffset - 1 && index2 <= spec.currentSlide + centerOffset) {
      slickActive = true;
    }
  } else {
    slickActive = spec.currentSlide <= index2 && index2 < spec.currentSlide + spec.slidesToShow;
  }
  var focusedSlide;
  if (spec.targetSlide < 0) {
    focusedSlide = spec.targetSlide + spec.slideCount;
  } else if (spec.targetSlide >= spec.slideCount) {
    focusedSlide = spec.targetSlide - spec.slideCount;
  } else {
    focusedSlide = spec.targetSlide;
  }
  var slickCurrent = index2 === focusedSlide;
  return {
    "slick-slide": true,
    "slick-active": slickActive,
    "slick-center": slickCenter,
    "slick-cloned": slickCloned,
    "slick-current": slickCurrent
    // dubious in case of RTL
  };
};
var getSlideStyle = function getSlideStyle2(spec) {
  var style = {};
  if (spec.variableWidth === void 0 || spec.variableWidth === false) {
    style.width = spec.slideWidth;
  }
  if (spec.fade) {
    style.position = "relative";
    if (spec.vertical) {
      style.top = -spec.index * parseInt(spec.slideHeight);
    } else {
      style.left = -spec.index * parseInt(spec.slideWidth);
    }
    style.opacity = spec.currentSlide === spec.index ? 1 : 0;
    style.zIndex = spec.currentSlide === spec.index ? 999 : 998;
    if (spec.useCSS) {
      style.transition = "opacity " + spec.speed + "ms " + spec.cssEase + ", visibility " + spec.speed + "ms " + spec.cssEase;
    }
  }
  return style;
};
var getKey = function getKey2(child, fallbackKey) {
  return child.key || fallbackKey;
};
var renderSlides = function renderSlides2(spec) {
  var key;
  var slides = [];
  var preCloneSlides = [];
  var postCloneSlides = [];
  var childrenCount = _react$3["default"].Children.count(spec.children);
  var startIndex = (0, _innerSliderUtils$3.lazyStartIndex)(spec);
  var endIndex = (0, _innerSliderUtils$3.lazyEndIndex)(spec);
  _react$3["default"].Children.forEach(spec.children, function(elem, index2) {
    var child;
    var childOnClickOptions = {
      message: "children",
      index: index2,
      slidesToScroll: spec.slidesToScroll,
      currentSlide: spec.currentSlide
    };
    if (!spec.lazyLoad || spec.lazyLoad && spec.lazyLoadedList.indexOf(index2) >= 0) {
      child = elem;
    } else {
      child = /* @__PURE__ */ _react$3["default"].createElement("div", null);
    }
    var childStyle = getSlideStyle(_objectSpread$3(_objectSpread$3({}, spec), {}, {
      index: index2
    }));
    var slideClass = child.props.className || "";
    var slideClasses = getSlideClasses(_objectSpread$3(_objectSpread$3({}, spec), {}, {
      index: index2
    }));
    slides.push(/* @__PURE__ */ _react$3["default"].cloneElement(child, {
      key: "original" + getKey(child, index2),
      "data-index": index2,
      className: (0, _classnames$3["default"])(slideClasses, slideClass),
      tabIndex: "-1",
      "aria-hidden": !slideClasses["slick-active"],
      style: _objectSpread$3(_objectSpread$3({
        outline: "none"
      }, child.props.style || {}), childStyle),
      onClick: function onClick(e2) {
        child.props && child.props.onClick && child.props.onClick(e2);
        if (spec.focusOnSelect) {
          spec.focusOnSelect(childOnClickOptions);
        }
      }
    }));
    if (spec.infinite && spec.fade === false) {
      var preCloneNo = childrenCount - index2;
      if (preCloneNo <= (0, _innerSliderUtils$3.getPreClones)(spec)) {
        key = -preCloneNo;
        if (key >= startIndex) {
          child = elem;
        }
        slideClasses = getSlideClasses(_objectSpread$3(_objectSpread$3({}, spec), {}, {
          index: key
        }));
        preCloneSlides.push(/* @__PURE__ */ _react$3["default"].cloneElement(child, {
          key: "precloned" + getKey(child, key),
          "data-index": key,
          tabIndex: "-1",
          className: (0, _classnames$3["default"])(slideClasses, slideClass),
          "aria-hidden": !slideClasses["slick-active"],
          style: _objectSpread$3(_objectSpread$3({}, child.props.style || {}), childStyle),
          onClick: function onClick(e2) {
            child.props && child.props.onClick && child.props.onClick(e2);
            if (spec.focusOnSelect) {
              spec.focusOnSelect(childOnClickOptions);
            }
          }
        }));
      }
      key = childrenCount + index2;
      if (key < endIndex) {
        child = elem;
      }
      slideClasses = getSlideClasses(_objectSpread$3(_objectSpread$3({}, spec), {}, {
        index: key
      }));
      postCloneSlides.push(/* @__PURE__ */ _react$3["default"].cloneElement(child, {
        key: "postcloned" + getKey(child, key),
        "data-index": key,
        tabIndex: "-1",
        className: (0, _classnames$3["default"])(slideClasses, slideClass),
        "aria-hidden": !slideClasses["slick-active"],
        style: _objectSpread$3(_objectSpread$3({}, child.props.style || {}), childStyle),
        onClick: function onClick(e2) {
          child.props && child.props.onClick && child.props.onClick(e2);
          if (spec.focusOnSelect) {
            spec.focusOnSelect(childOnClickOptions);
          }
        }
      }));
    }
  });
  if (spec.rtl) {
    return preCloneSlides.concat(slides, postCloneSlides).reverse();
  } else {
    return preCloneSlides.concat(slides, postCloneSlides);
  }
};
track.Track = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits$3(Track, _React$PureComponent);
  var _super = _createSuper$3(Track);
  function Track() {
    var _this;
    _classCallCheck$3(this, Track);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    _defineProperty$3(_assertThisInitialized$3(_this), "node", null);
    _defineProperty$3(_assertThisInitialized$3(_this), "handleRef", function(ref) {
      _this.node = ref;
    });
    return _this;
  }
  _createClass$3(Track, [{
    key: "render",
    value: function render() {
      var slides = renderSlides(this.props);
      var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave;
      var mouseEvents = {
        onMouseEnter,
        onMouseOver,
        onMouseLeave
      };
      return /* @__PURE__ */ _react$3["default"].createElement("div", _extends$2({
        ref: this.handleRef,
        className: "slick-track",
        style: this.props.trackStyle
      }, mouseEvents), slides);
    }
  }]);
  return Track;
}(_react$3["default"].PureComponent);
var dots = {};
function _typeof$2(o2) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$2(o2);
}
Object.defineProperty(dots, "__esModule", {
  value: true
});
dots.Dots = void 0;
var _react$2 = _interopRequireDefault$2(reactExports);
var _classnames$2 = _interopRequireDefault$2(classnamesExports);
var _innerSliderUtils$2 = innerSliderUtils;
function _interopRequireDefault$2(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function ownKeys$2(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$2(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$2(Object(t2), true).forEach(function(r3) {
      _defineProperty$2(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$2(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty$2(obj, key, value) {
  key = _toPropertyKey$2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck$2(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$2(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$2(descriptor.key), descriptor);
  }
}
function _createClass$2(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$2(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$2(t2) {
  var i2 = _toPrimitive$2(t2, "string");
  return "symbol" == _typeof$2(i2) ? i2 : String(i2);
}
function _toPrimitive$2(t2, r2) {
  if ("object" != _typeof$2(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != _typeof$2(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _inherits$2(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$2(subClass, superClass);
}
function _setPrototypeOf$2(o2, p2) {
  _setPrototypeOf$2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf$2(o2, p2);
}
function _createSuper$2(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$2();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$2(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$2(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$2(this, result);
  };
}
function _possibleConstructorReturn$2(self2, call) {
  if (call && (_typeof$2(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$2(self2);
}
function _assertThisInitialized$2(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct$2() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct2() {
    return !!t2;
  })();
}
function _getPrototypeOf$2(o2) {
  _getPrototypeOf$2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf$2(o2);
}
var getDotCount = function getDotCount2(spec) {
  var dots2;
  if (spec.infinite) {
    dots2 = Math.ceil(spec.slideCount / spec.slidesToScroll);
  } else {
    dots2 = Math.ceil((spec.slideCount - spec.slidesToShow) / spec.slidesToScroll) + 1;
  }
  return dots2;
};
dots.Dots = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits$2(Dots, _React$PureComponent);
  var _super = _createSuper$2(Dots);
  function Dots() {
    _classCallCheck$2(this, Dots);
    return _super.apply(this, arguments);
  }
  _createClass$2(Dots, [{
    key: "clickHandler",
    value: function clickHandler(options, e2) {
      e2.preventDefault();
      this.props.clickHandler(options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props, onMouseEnter = _this$props.onMouseEnter, onMouseOver = _this$props.onMouseOver, onMouseLeave = _this$props.onMouseLeave, infinite = _this$props.infinite, slidesToScroll = _this$props.slidesToScroll, slidesToShow = _this$props.slidesToShow, slideCount = _this$props.slideCount, currentSlide = _this$props.currentSlide;
      var dotCount = getDotCount({
        slideCount,
        slidesToScroll,
        slidesToShow,
        infinite
      });
      var mouseEvents = {
        onMouseEnter,
        onMouseOver,
        onMouseLeave
      };
      var dots2 = [];
      for (var i2 = 0; i2 < dotCount; i2++) {
        var _rightBound = (i2 + 1) * slidesToScroll - 1;
        var rightBound = infinite ? _rightBound : (0, _innerSliderUtils$2.clamp)(_rightBound, 0, slideCount - 1);
        var _leftBound = rightBound - (slidesToScroll - 1);
        var leftBound = infinite ? _leftBound : (0, _innerSliderUtils$2.clamp)(_leftBound, 0, slideCount - 1);
        var className = (0, _classnames$2["default"])({
          "slick-active": infinite ? currentSlide >= leftBound && currentSlide <= rightBound : currentSlide === leftBound
        });
        var dotOptions = {
          message: "dots",
          index: i2,
          slidesToScroll,
          currentSlide
        };
        var onClick = this.clickHandler.bind(this, dotOptions);
        dots2 = dots2.concat(/* @__PURE__ */ _react$2["default"].createElement("li", {
          key: i2,
          className
        }, /* @__PURE__ */ _react$2["default"].cloneElement(this.props.customPaging(i2), {
          onClick
        })));
      }
      return /* @__PURE__ */ _react$2["default"].cloneElement(this.props.appendDots(dots2), _objectSpread$2({
        className: this.props.dotsClass
      }, mouseEvents));
    }
  }]);
  return Dots;
}(_react$2["default"].PureComponent);
var arrows = {};
function _typeof$1(o2) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof$1(o2);
}
Object.defineProperty(arrows, "__esModule", {
  value: true
});
arrows.PrevArrow = arrows.NextArrow = void 0;
var _react$1 = _interopRequireDefault$1(reactExports);
var _classnames$1 = _interopRequireDefault$1(classnamesExports);
var _innerSliderUtils$1 = innerSliderUtils;
function _interopRequireDefault$1(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function ownKeys$1(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread$1(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys$1(Object(t2), true).forEach(function(r3) {
      _defineProperty$1(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys$1(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _defineProperty$1(obj, key, value) {
  key = _toPropertyKey$1(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _classCallCheck$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties$1(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey$1(descriptor.key), descriptor);
  }
}
function _createClass$1(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _toPropertyKey$1(t2) {
  var i2 = _toPrimitive$1(t2, "string");
  return "symbol" == _typeof$1(i2) ? i2 : String(i2);
}
function _toPrimitive$1(t2, r2) {
  if ("object" != _typeof$1(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != _typeof$1(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
function _inherits$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf$1(subClass, superClass);
}
function _setPrototypeOf$1(o2, p2) {
  _setPrototypeOf$1 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf$1(o2, p2);
}
function _createSuper$1(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct$1();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf$1(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf$1(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn$1(this, result);
  };
}
function _possibleConstructorReturn$1(self2, call) {
  if (call && (_typeof$1(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized$1(self2);
}
function _assertThisInitialized$1(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct$1() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct2() {
    return !!t2;
  })();
}
function _getPrototypeOf$1(o2) {
  _getPrototypeOf$1 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf$1(o2);
}
arrows.PrevArrow = /* @__PURE__ */ function(_React$PureComponent) {
  _inherits$1(PrevArrow, _React$PureComponent);
  var _super = _createSuper$1(PrevArrow);
  function PrevArrow() {
    _classCallCheck$1(this, PrevArrow);
    return _super.apply(this, arguments);
  }
  _createClass$1(PrevArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e2) {
      if (e2) {
        e2.preventDefault();
      }
      this.props.clickHandler(options, e2);
    }
  }, {
    key: "render",
    value: function render() {
      var prevClasses = {
        "slick-arrow": true,
        "slick-prev": true
      };
      var prevHandler = this.clickHandler.bind(this, {
        message: "previous"
      });
      if (!this.props.infinite && (this.props.currentSlide === 0 || this.props.slideCount <= this.props.slidesToShow)) {
        prevClasses["slick-disabled"] = true;
        prevHandler = null;
      }
      var prevArrowProps = {
        key: "0",
        "data-role": "none",
        className: (0, _classnames$1["default"])(prevClasses),
        style: {
          display: "block"
        },
        onClick: prevHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var prevArrow;
      if (this.props.prevArrow) {
        prevArrow = /* @__PURE__ */ _react$1["default"].cloneElement(this.props.prevArrow, _objectSpread$1(_objectSpread$1({}, prevArrowProps), customProps));
      } else {
        prevArrow = /* @__PURE__ */ _react$1["default"].createElement("button", _extends$1({
          key: "0",
          type: "button"
        }, prevArrowProps), " ", "Previous");
      }
      return prevArrow;
    }
  }]);
  return PrevArrow;
}(_react$1["default"].PureComponent);
arrows.NextArrow = /* @__PURE__ */ function(_React$PureComponent2) {
  _inherits$1(NextArrow, _React$PureComponent2);
  var _super2 = _createSuper$1(NextArrow);
  function NextArrow() {
    _classCallCheck$1(this, NextArrow);
    return _super2.apply(this, arguments);
  }
  _createClass$1(NextArrow, [{
    key: "clickHandler",
    value: function clickHandler(options, e2) {
      if (e2) {
        e2.preventDefault();
      }
      this.props.clickHandler(options, e2);
    }
  }, {
    key: "render",
    value: function render() {
      var nextClasses = {
        "slick-arrow": true,
        "slick-next": true
      };
      var nextHandler = this.clickHandler.bind(this, {
        message: "next"
      });
      if (!(0, _innerSliderUtils$1.canGoNext)(this.props)) {
        nextClasses["slick-disabled"] = true;
        nextHandler = null;
      }
      var nextArrowProps = {
        key: "1",
        "data-role": "none",
        className: (0, _classnames$1["default"])(nextClasses),
        style: {
          display: "block"
        },
        onClick: nextHandler
      };
      var customProps = {
        currentSlide: this.props.currentSlide,
        slideCount: this.props.slideCount
      };
      var nextArrow;
      if (this.props.nextArrow) {
        nextArrow = /* @__PURE__ */ _react$1["default"].cloneElement(this.props.nextArrow, _objectSpread$1(_objectSpread$1({}, nextArrowProps), customProps));
      } else {
        nextArrow = /* @__PURE__ */ _react$1["default"].createElement("button", _extends$1({
          key: "1",
          type: "button"
        }, nextArrowProps), " ", "Next");
      }
      return nextArrow;
    }
  }]);
  return NextArrow;
}(_react$1["default"].PureComponent);
var MapShim = function() {
  if (typeof Map !== "undefined") {
    return Map;
  }
  function getIndex(arr, key) {
    var result = -1;
    arr.some(function(entry, index2) {
      if (entry[0] === key) {
        result = index2;
        return true;
      }
      return false;
    });
    return result;
  }
  return (
    /** @class */
    function() {
      function class_1() {
        this.__entries__ = [];
      }
      Object.defineProperty(class_1.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: true,
        configurable: true
      });
      class_1.prototype.get = function(key) {
        var index2 = getIndex(this.__entries__, key);
        var entry = this.__entries__[index2];
        return entry && entry[1];
      };
      class_1.prototype.set = function(key, value) {
        var index2 = getIndex(this.__entries__, key);
        if (~index2) {
          this.__entries__[index2][1] = value;
        } else {
          this.__entries__.push([key, value]);
        }
      };
      class_1.prototype.delete = function(key) {
        var entries = this.__entries__;
        var index2 = getIndex(entries, key);
        if (~index2) {
          entries.splice(index2, 1);
        }
      };
      class_1.prototype.has = function(key) {
        return !!~getIndex(this.__entries__, key);
      };
      class_1.prototype.clear = function() {
        this.__entries__.splice(0);
      };
      class_1.prototype.forEach = function(callback, ctx) {
        if (ctx === void 0) {
          ctx = null;
        }
        for (var _i = 0, _a = this.__entries__; _i < _a.length; _i++) {
          var entry = _a[_i];
          callback.call(ctx, entry[1], entry[0]);
        }
      };
      return class_1;
    }()
  );
}();
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined" && window.document === document;
var global$1 = function() {
  if (typeof global !== "undefined" && global.Math === Math) {
    return global;
  }
  if (typeof self !== "undefined" && self.Math === Math) {
    return self;
  }
  if (typeof window !== "undefined" && window.Math === Math) {
    return window;
  }
  return Function("return this")();
}();
var requestAnimationFrame$1 = function() {
  if (typeof requestAnimationFrame === "function") {
    return requestAnimationFrame.bind(global$1);
  }
  return function(callback) {
    return setTimeout(function() {
      return callback(Date.now());
    }, 1e3 / 60);
  };
}();
var trailingTimeout = 2;
function throttle(callback, delay) {
  var leadingCall = false, trailingCall = false, lastCallTime = 0;
  function resolvePending() {
    if (leadingCall) {
      leadingCall = false;
      callback();
    }
    if (trailingCall) {
      proxy();
    }
  }
  function timeoutCallback() {
    requestAnimationFrame$1(resolvePending);
  }
  function proxy() {
    var timeStamp = Date.now();
    if (leadingCall) {
      if (timeStamp - lastCallTime < trailingTimeout) {
        return;
      }
      trailingCall = true;
    } else {
      leadingCall = true;
      trailingCall = false;
      setTimeout(timeoutCallback, delay);
    }
    lastCallTime = timeStamp;
  }
  return proxy;
}
var REFRESH_DELAY = 20;
var transitionKeys = ["top", "right", "bottom", "left", "width", "height", "size", "weight"];
var mutationObserverSupported = typeof MutationObserver !== "undefined";
var ResizeObserverController = (
  /** @class */
  function() {
    function ResizeObserverController2() {
      this.connected_ = false;
      this.mutationEventsAdded_ = false;
      this.mutationsObserver_ = null;
      this.observers_ = [];
      this.onTransitionEnd_ = this.onTransitionEnd_.bind(this);
      this.refresh = throttle(this.refresh.bind(this), REFRESH_DELAY);
    }
    ResizeObserverController2.prototype.addObserver = function(observer) {
      if (!~this.observers_.indexOf(observer)) {
        this.observers_.push(observer);
      }
      if (!this.connected_) {
        this.connect_();
      }
    };
    ResizeObserverController2.prototype.removeObserver = function(observer) {
      var observers2 = this.observers_;
      var index2 = observers2.indexOf(observer);
      if (~index2) {
        observers2.splice(index2, 1);
      }
      if (!observers2.length && this.connected_) {
        this.disconnect_();
      }
    };
    ResizeObserverController2.prototype.refresh = function() {
      var changesDetected = this.updateObservers_();
      if (changesDetected) {
        this.refresh();
      }
    };
    ResizeObserverController2.prototype.updateObservers_ = function() {
      var activeObservers = this.observers_.filter(function(observer) {
        return observer.gatherActive(), observer.hasActive();
      });
      activeObservers.forEach(function(observer) {
        return observer.broadcastActive();
      });
      return activeObservers.length > 0;
    };
    ResizeObserverController2.prototype.connect_ = function() {
      if (!isBrowser || this.connected_) {
        return;
      }
      document.addEventListener("transitionend", this.onTransitionEnd_);
      window.addEventListener("resize", this.refresh);
      if (mutationObserverSupported) {
        this.mutationsObserver_ = new MutationObserver(this.refresh);
        this.mutationsObserver_.observe(document, {
          attributes: true,
          childList: true,
          characterData: true,
          subtree: true
        });
      } else {
        document.addEventListener("DOMSubtreeModified", this.refresh);
        this.mutationEventsAdded_ = true;
      }
      this.connected_ = true;
    };
    ResizeObserverController2.prototype.disconnect_ = function() {
      if (!isBrowser || !this.connected_) {
        return;
      }
      document.removeEventListener("transitionend", this.onTransitionEnd_);
      window.removeEventListener("resize", this.refresh);
      if (this.mutationsObserver_) {
        this.mutationsObserver_.disconnect();
      }
      if (this.mutationEventsAdded_) {
        document.removeEventListener("DOMSubtreeModified", this.refresh);
      }
      this.mutationsObserver_ = null;
      this.mutationEventsAdded_ = false;
      this.connected_ = false;
    };
    ResizeObserverController2.prototype.onTransitionEnd_ = function(_a) {
      var _b = _a.propertyName, propertyName = _b === void 0 ? "" : _b;
      var isReflowProperty = transitionKeys.some(function(key) {
        return !!~propertyName.indexOf(key);
      });
      if (isReflowProperty) {
        this.refresh();
      }
    };
    ResizeObserverController2.getInstance = function() {
      if (!this.instance_) {
        this.instance_ = new ResizeObserverController2();
      }
      return this.instance_;
    };
    ResizeObserverController2.instance_ = null;
    return ResizeObserverController2;
  }()
);
var defineConfigurable = function(target, props) {
  for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
    var key = _a[_i];
    Object.defineProperty(target, key, {
      value: props[key],
      enumerable: false,
      writable: false,
      configurable: true
    });
  }
  return target;
};
var getWindowOf = function(target) {
  var ownerGlobal = target && target.ownerDocument && target.ownerDocument.defaultView;
  return ownerGlobal || global$1;
};
var emptyRect = createRectInit(0, 0, 0, 0);
function toFloat(value) {
  return parseFloat(value) || 0;
}
function getBordersSize(styles) {
  var positions = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    positions[_i - 1] = arguments[_i];
  }
  return positions.reduce(function(size, position2) {
    var value = styles["border-" + position2 + "-width"];
    return size + toFloat(value);
  }, 0);
}
function getPaddings(styles) {
  var positions = ["top", "right", "bottom", "left"];
  var paddings = {};
  for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
    var position2 = positions_1[_i];
    var value = styles["padding-" + position2];
    paddings[position2] = toFloat(value);
  }
  return paddings;
}
function getSVGContentRect(target) {
  var bbox = target.getBBox();
  return createRectInit(0, 0, bbox.width, bbox.height);
}
function getHTMLElementContentRect(target) {
  var clientWidth = target.clientWidth, clientHeight = target.clientHeight;
  if (!clientWidth && !clientHeight) {
    return emptyRect;
  }
  var styles = getWindowOf(target).getComputedStyle(target);
  var paddings = getPaddings(styles);
  var horizPad = paddings.left + paddings.right;
  var vertPad = paddings.top + paddings.bottom;
  var width = toFloat(styles.width), height = toFloat(styles.height);
  if (styles.boxSizing === "border-box") {
    if (Math.round(width + horizPad) !== clientWidth) {
      width -= getBordersSize(styles, "left", "right") + horizPad;
    }
    if (Math.round(height + vertPad) !== clientHeight) {
      height -= getBordersSize(styles, "top", "bottom") + vertPad;
    }
  }
  if (!isDocumentElement(target)) {
    var vertScrollbar = Math.round(width + horizPad) - clientWidth;
    var horizScrollbar = Math.round(height + vertPad) - clientHeight;
    if (Math.abs(vertScrollbar) !== 1) {
      width -= vertScrollbar;
    }
    if (Math.abs(horizScrollbar) !== 1) {
      height -= horizScrollbar;
    }
  }
  return createRectInit(paddings.left, paddings.top, width, height);
}
var isSVGGraphicsElement = function() {
  if (typeof SVGGraphicsElement !== "undefined") {
    return function(target) {
      return target instanceof getWindowOf(target).SVGGraphicsElement;
    };
  }
  return function(target) {
    return target instanceof getWindowOf(target).SVGElement && typeof target.getBBox === "function";
  };
}();
function isDocumentElement(target) {
  return target === getWindowOf(target).document.documentElement;
}
function getContentRect(target) {
  if (!isBrowser) {
    return emptyRect;
  }
  if (isSVGGraphicsElement(target)) {
    return getSVGContentRect(target);
  }
  return getHTMLElementContentRect(target);
}
function createReadOnlyRect(_a) {
  var x2 = _a.x, y2 = _a.y, width = _a.width, height = _a.height;
  var Constr = typeof DOMRectReadOnly !== "undefined" ? DOMRectReadOnly : Object;
  var rect = Object.create(Constr.prototype);
  defineConfigurable(rect, {
    x: x2,
    y: y2,
    width,
    height,
    top: y2,
    right: x2 + width,
    bottom: height + y2,
    left: x2
  });
  return rect;
}
function createRectInit(x2, y2, width, height) {
  return { x: x2, y: y2, width, height };
}
var ResizeObservation = (
  /** @class */
  function() {
    function ResizeObservation2(target) {
      this.broadcastWidth = 0;
      this.broadcastHeight = 0;
      this.contentRect_ = createRectInit(0, 0, 0, 0);
      this.target = target;
    }
    ResizeObservation2.prototype.isActive = function() {
      var rect = getContentRect(this.target);
      this.contentRect_ = rect;
      return rect.width !== this.broadcastWidth || rect.height !== this.broadcastHeight;
    };
    ResizeObservation2.prototype.broadcastRect = function() {
      var rect = this.contentRect_;
      this.broadcastWidth = rect.width;
      this.broadcastHeight = rect.height;
      return rect;
    };
    return ResizeObservation2;
  }()
);
var ResizeObserverEntry = (
  /** @class */
  /* @__PURE__ */ function() {
    function ResizeObserverEntry2(target, rectInit) {
      var contentRect = createReadOnlyRect(rectInit);
      defineConfigurable(this, { target, contentRect });
    }
    return ResizeObserverEntry2;
  }()
);
var ResizeObserverSPI = (
  /** @class */
  function() {
    function ResizeObserverSPI2(callback, controller, callbackCtx) {
      this.activeObservations_ = [];
      this.observations_ = new MapShim();
      if (typeof callback !== "function") {
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      }
      this.callback_ = callback;
      this.controller_ = controller;
      this.callbackCtx_ = callbackCtx;
    }
    ResizeObserverSPI2.prototype.observe = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (observations.has(target)) {
        return;
      }
      observations.set(target, new ResizeObservation(target));
      this.controller_.addObserver(this);
      this.controller_.refresh();
    };
    ResizeObserverSPI2.prototype.unobserve = function(target) {
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      if (typeof Element === "undefined" || !(Element instanceof Object)) {
        return;
      }
      if (!(target instanceof getWindowOf(target).Element)) {
        throw new TypeError('parameter 1 is not of type "Element".');
      }
      var observations = this.observations_;
      if (!observations.has(target)) {
        return;
      }
      observations.delete(target);
      if (!observations.size) {
        this.controller_.removeObserver(this);
      }
    };
    ResizeObserverSPI2.prototype.disconnect = function() {
      this.clearActive();
      this.observations_.clear();
      this.controller_.removeObserver(this);
    };
    ResizeObserverSPI2.prototype.gatherActive = function() {
      var _this = this;
      this.clearActive();
      this.observations_.forEach(function(observation) {
        if (observation.isActive()) {
          _this.activeObservations_.push(observation);
        }
      });
    };
    ResizeObserverSPI2.prototype.broadcastActive = function() {
      if (!this.hasActive()) {
        return;
      }
      var ctx = this.callbackCtx_;
      var entries = this.activeObservations_.map(function(observation) {
        return new ResizeObserverEntry(observation.target, observation.broadcastRect());
      });
      this.callback_.call(ctx, entries, ctx);
      this.clearActive();
    };
    ResizeObserverSPI2.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    };
    ResizeObserverSPI2.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    };
    return ResizeObserverSPI2;
  }()
);
var observers = typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : new MapShim();
var ResizeObserver = (
  /** @class */
  /* @__PURE__ */ function() {
    function ResizeObserver2(callback) {
      if (!(this instanceof ResizeObserver2)) {
        throw new TypeError("Cannot call a class as a function.");
      }
      if (!arguments.length) {
        throw new TypeError("1 argument required, but only 0 present.");
      }
      var controller = ResizeObserverController.getInstance();
      var observer = new ResizeObserverSPI(callback, controller, this);
      observers.set(this, observer);
    }
    return ResizeObserver2;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(method) {
  ResizeObserver.prototype[method] = function() {
    var _a;
    return (_a = observers.get(this))[method].apply(_a, arguments);
  };
});
var index = function() {
  if (typeof global$1.ResizeObserver !== "undefined") {
    return global$1.ResizeObserver;
  }
  return ResizeObserver;
}();
const ResizeObserver_es = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const require$$8 = /* @__PURE__ */ getAugmentedNamespace(ResizeObserver_es);
Object.defineProperty(innerSlider, "__esModule", {
  value: true
});
innerSlider.InnerSlider = void 0;
var _react = _interopRequireDefault(reactExports);
var _initialState = _interopRequireDefault(initialState);
var _lodash = _interopRequireDefault(lodash_debounce);
var _classnames = _interopRequireDefault(classnamesExports);
var _innerSliderUtils = innerSliderUtils;
var _track = track;
var _dots = dots;
var _arrows = arrows;
var _resizeObserverPolyfill = _interopRequireDefault(require$$8);
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { "default": obj };
}
function _typeof(o2) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o3) {
    return typeof o3;
  } : function(o3) {
    return o3 && "function" == typeof Symbol && o3.constructor === Symbol && o3 !== Symbol.prototype ? "symbol" : typeof o3;
  }, _typeof(o2);
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i2 = 1; i2 < arguments.length; i2++) {
      var source = arguments[i2];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys(e2, r2) {
  var t2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var o2 = Object.getOwnPropertySymbols(e2);
    r2 && (o2 = o2.filter(function(r3) {
      return Object.getOwnPropertyDescriptor(e2, r3).enumerable;
    })), t2.push.apply(t2, o2);
  }
  return t2;
}
function _objectSpread(e2) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var t2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? ownKeys(Object(t2), true).forEach(function(r3) {
      _defineProperty(e2, r3, t2[r3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys(Object(t2)).forEach(function(r3) {
      Object.defineProperty(e2, r3, Object.getOwnPropertyDescriptor(t2, r3));
    });
  }
  return e2;
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i2 = 0; i2 < props.length; i2++) {
    var descriptor = props[i2];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o3, p3) {
    o3.__proto__ = p3;
    return o3;
  };
  return _setPrototypeOf(o2, p2);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived), result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self2, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self2);
}
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function _isNativeReflectConstruct() {
  try {
    var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t3) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t2;
  })();
}
function _getPrototypeOf(o2) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o3) {
    return o3.__proto__ || Object.getPrototypeOf(o3);
  };
  return _getPrototypeOf(o2);
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(t2) {
  var i2 = _toPrimitive(t2, "string");
  return "symbol" == _typeof(i2) ? i2 : String(i2);
}
function _toPrimitive(t2, r2) {
  if ("object" != _typeof(t2) || !t2) return t2;
  var e2 = t2[Symbol.toPrimitive];
  if (void 0 !== e2) {
    var i2 = e2.call(t2, r2 || "default");
    if ("object" != _typeof(i2)) return i2;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r2 ? String : Number)(t2);
}
innerSlider.InnerSlider = /* @__PURE__ */ function(_React$Component) {
  _inherits(InnerSlider2, _React$Component);
  var _super = _createSuper(InnerSlider2);
  function InnerSlider2(props) {
    var _this;
    _classCallCheck(this, InnerSlider2);
    _this = _super.call(this, props);
    _defineProperty(_assertThisInitialized(_this), "listRefHandler", function(ref) {
      return _this.list = ref;
    });
    _defineProperty(_assertThisInitialized(_this), "trackRefHandler", function(ref) {
      return _this.track = ref;
    });
    _defineProperty(_assertThisInitialized(_this), "adaptHeight", function() {
      if (_this.props.adaptiveHeight && _this.list) {
        var elem = _this.list.querySelector('[data-index="'.concat(_this.state.currentSlide, '"]'));
        _this.list.style.height = (0, _innerSliderUtils.getHeight)(elem) + "px";
      }
    });
    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function() {
      _this.props.onInit && _this.props.onInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function(prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      var spec = _objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props);
      _this.updateState(spec, true, function() {
        _this.adaptHeight();
        _this.props.autoplay && _this.autoPlay("update");
      });
      if (_this.props.lazyLoad === "progressive") {
        _this.lazyLoadTimer = setInterval(_this.progressiveLazyLoad, 1e3);
      }
      _this.ro = new _resizeObserverPolyfill["default"](function() {
        if (_this.state.animating) {
          _this.onWindowResized(false);
          _this.callbackTimers.push(setTimeout(function() {
            return _this.onWindowResized();
          }, _this.props.speed));
        } else {
          _this.onWindowResized();
        }
      });
      _this.ro.observe(_this.list);
      document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), function(slide) {
        slide.onfocus = _this.props.pauseOnFocus ? _this.onSlideFocus : null;
        slide.onblur = _this.props.pauseOnFocus ? _this.onSlideBlur : null;
      });
      if (window.addEventListener) {
        window.addEventListener("resize", _this.onWindowResized);
      } else {
        window.attachEvent("onresize", _this.onWindowResized);
      }
    });
    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function() {
      if (_this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
      }
      if (_this.lazyLoadTimer) {
        clearInterval(_this.lazyLoadTimer);
      }
      if (_this.callbackTimers.length) {
        _this.callbackTimers.forEach(function(timer) {
          return clearTimeout(timer);
        });
        _this.callbackTimers = [];
      }
      if (window.addEventListener) {
        window.removeEventListener("resize", _this.onWindowResized);
      } else {
        window.detachEvent("onresize", _this.onWindowResized);
      }
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      _this.ro.disconnect();
    });
    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function(prevProps) {
      _this.checkImagesLoad();
      _this.props.onReInit && _this.props.onReInit();
      if (_this.props.lazyLoad) {
        var slidesToLoad = (0, _innerSliderUtils.getOnDemandLazySlides)(_objectSpread(_objectSpread({}, _this.props), _this.state));
        if (slidesToLoad.length > 0) {
          _this.setState(function(prevState) {
            return {
              lazyLoadedList: prevState.lazyLoadedList.concat(slidesToLoad)
            };
          });
          if (_this.props.onLazyLoad) {
            _this.props.onLazyLoad(slidesToLoad);
          }
        }
      }
      _this.adaptHeight();
      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);
      var setTrackStyle = _this.didPropsChange(prevProps);
      setTrackStyle && _this.updateState(spec, setTrackStyle, function() {
        if (_this.state.currentSlide >= _react["default"].Children.count(_this.props.children)) {
          _this.changeSlide({
            message: "index",
            index: _react["default"].Children.count(_this.props.children) - _this.props.slidesToShow,
            currentSlide: _this.state.currentSlide
          });
        }
        if (_this.props.autoplay) {
          _this.autoPlay("update");
        } else {
          _this.pause("paused");
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "onWindowResized", function(setTrackStyle) {
      if (_this.debouncedResize) _this.debouncedResize.cancel();
      _this.debouncedResize = (0, _lodash["default"])(function() {
        return _this.resizeWindow(setTrackStyle);
      }, 50);
      _this.debouncedResize();
    });
    _defineProperty(_assertThisInitialized(_this), "resizeWindow", function() {
      var setTrackStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
      var isTrackMounted = Boolean(_this.track && _this.track.node);
      if (!isTrackMounted) return;
      var spec = _objectSpread(_objectSpread({
        listRef: _this.list,
        trackRef: _this.track
      }, _this.props), _this.state);
      _this.updateState(spec, setTrackStyle, function() {
        if (_this.props.autoplay) _this.autoPlay("update");
        else _this.pause("paused");
      });
      _this.setState({
        animating: false
      });
      clearTimeout(_this.animationEndCallback);
      delete _this.animationEndCallback;
    });
    _defineProperty(_assertThisInitialized(_this), "updateState", function(spec, setTrackStyle, callback) {
      var updatedState = (0, _innerSliderUtils.initializedState)(spec);
      spec = _objectSpread(_objectSpread(_objectSpread({}, spec), updatedState), {}, {
        slideIndex: updatedState.currentSlide
      });
      var targetLeft = (0, _innerSliderUtils.getTrackLeft)(spec);
      spec = _objectSpread(_objectSpread({}, spec), {}, {
        left: targetLeft
      });
      var trackStyle = (0, _innerSliderUtils.getTrackCSS)(spec);
      if (setTrackStyle || _react["default"].Children.count(_this.props.children) !== _react["default"].Children.count(spec.children)) {
        updatedState["trackStyle"] = trackStyle;
      }
      _this.setState(updatedState, callback);
    });
    _defineProperty(_assertThisInitialized(_this), "ssrInit", function() {
      if (_this.props.variableWidth) {
        var _trackWidth = 0, _trackLeft = 0;
        var childrenWidths = [];
        var preClones = (0, _innerSliderUtils.getPreClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        var postClones = (0, _innerSliderUtils.getPostClones)(_objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
          slideCount: _this.props.children.length
        }));
        _this.props.children.forEach(function(child) {
          childrenWidths.push(child.props.style.width);
          _trackWidth += child.props.style.width;
        });
        for (var i2 = 0; i2 < preClones; i2++) {
          _trackLeft += childrenWidths[childrenWidths.length - 1 - i2];
          _trackWidth += childrenWidths[childrenWidths.length - 1 - i2];
        }
        for (var _i = 0; _i < postClones; _i++) {
          _trackWidth += childrenWidths[_i];
        }
        for (var _i2 = 0; _i2 < _this.state.currentSlide; _i2++) {
          _trackLeft += childrenWidths[_i2];
        }
        var _trackStyle = {
          width: _trackWidth + "px",
          left: -_trackLeft + "px"
        };
        if (_this.props.centerMode) {
          var currentWidth = "".concat(childrenWidths[_this.state.currentSlide], "px");
          _trackStyle.left = "calc(".concat(_trackStyle.left, " + (100% - ").concat(currentWidth, ") / 2 ) ");
        }
        return {
          trackStyle: _trackStyle
        };
      }
      var childrenCount = _react["default"].Children.count(_this.props.children);
      var spec = _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        slideCount: childrenCount
      });
      var slideCount = (0, _innerSliderUtils.getPreClones)(spec) + (0, _innerSliderUtils.getPostClones)(spec) + childrenCount;
      var trackWidth = 100 / _this.props.slidesToShow * slideCount;
      var slideWidth = 100 / slideCount;
      var trackLeft = -slideWidth * ((0, _innerSliderUtils.getPreClones)(spec) + _this.state.currentSlide) * trackWidth / 100;
      if (_this.props.centerMode) {
        trackLeft += (100 - slideWidth * trackWidth / 100) / 2;
      }
      var trackStyle = {
        width: trackWidth + "%",
        left: trackLeft + "%"
      };
      return {
        slideWidth: slideWidth + "%",
        trackStyle
      };
    });
    _defineProperty(_assertThisInitialized(_this), "checkImagesLoad", function() {
      var images = _this.list && _this.list.querySelectorAll && _this.list.querySelectorAll(".slick-slide img") || [];
      var imagesCount = images.length, loadedCount = 0;
      Array.prototype.forEach.call(images, function(image) {
        var handler = function handler2() {
          return ++loadedCount && loadedCount >= imagesCount && _this.onWindowResized();
        };
        if (!image.onclick) {
          image.onclick = function() {
            return image.parentNode.focus();
          };
        } else {
          var prevClickHandler = image.onclick;
          image.onclick = function(e2) {
            prevClickHandler(e2);
            image.parentNode.focus();
          };
        }
        if (!image.onload) {
          if (_this.props.lazyLoad) {
            image.onload = function() {
              _this.adaptHeight();
              _this.callbackTimers.push(setTimeout(_this.onWindowResized, _this.props.speed));
            };
          } else {
            image.onload = handler;
            image.onerror = function() {
              handler();
              _this.props.onLazyLoadError && _this.props.onLazyLoadError();
            };
          }
        }
      });
    });
    _defineProperty(_assertThisInitialized(_this), "progressiveLazyLoad", function() {
      var slidesToLoad = [];
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      for (var index2 = _this.state.currentSlide; index2 < _this.state.slideCount + (0, _innerSliderUtils.getPostClones)(spec); index2++) {
        if (_this.state.lazyLoadedList.indexOf(index2) < 0) {
          slidesToLoad.push(index2);
          break;
        }
      }
      for (var _index = _this.state.currentSlide - 1; _index >= -(0, _innerSliderUtils.getPreClones)(spec); _index--) {
        if (_this.state.lazyLoadedList.indexOf(_index) < 0) {
          slidesToLoad.push(_index);
          break;
        }
      }
      if (slidesToLoad.length > 0) {
        _this.setState(function(state) {
          return {
            lazyLoadedList: state.lazyLoadedList.concat(slidesToLoad)
          };
        });
        if (_this.props.onLazyLoad) {
          _this.props.onLazyLoad(slidesToLoad);
        }
      } else {
        if (_this.lazyLoadTimer) {
          clearInterval(_this.lazyLoadTimer);
          delete _this.lazyLoadTimer;
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "slideHandler", function(index2) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var _this$props = _this.props, asNavFor = _this$props.asNavFor, beforeChange = _this$props.beforeChange, onLazyLoad = _this$props.onLazyLoad, speed = _this$props.speed, afterChange = _this$props.afterChange;
      var currentSlide = _this.state.currentSlide;
      var _slideHandler = (0, _innerSliderUtils.slideHandler)(_objectSpread(_objectSpread(_objectSpread({
        index: index2
      }, _this.props), _this.state), {}, {
        trackRef: _this.track,
        useCSS: _this.props.useCSS && !dontAnimate
      })), state = _slideHandler.state, nextState = _slideHandler.nextState;
      if (!state) return;
      beforeChange && beforeChange(currentSlide, state.currentSlide);
      var slidesToLoad = state.lazyLoadedList.filter(function(value) {
        return _this.state.lazyLoadedList.indexOf(value) < 0;
      });
      onLazyLoad && slidesToLoad.length > 0 && onLazyLoad(slidesToLoad);
      if (!_this.props.waitForAnimate && _this.animationEndCallback) {
        clearTimeout(_this.animationEndCallback);
        afterChange && afterChange(currentSlide);
        delete _this.animationEndCallback;
      }
      _this.setState(state, function() {
        if (asNavFor && _this.asNavForIndex !== index2) {
          _this.asNavForIndex = index2;
          asNavFor.innerSlider.slideHandler(index2);
        }
        if (!nextState) return;
        _this.animationEndCallback = setTimeout(function() {
          var animating = nextState.animating, firstBatch = _objectWithoutProperties(nextState, ["animating"]);
          _this.setState(firstBatch, function() {
            _this.callbackTimers.push(setTimeout(function() {
              return _this.setState({
                animating
              });
            }, 10));
            afterChange && afterChange(state.currentSlide);
            delete _this.animationEndCallback;
          });
        }, speed);
      });
    });
    _defineProperty(_assertThisInitialized(_this), "changeSlide", function(options) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      var targetSlide = (0, _innerSliderUtils.changeSlide)(spec, options);
      if (targetSlide !== 0 && !targetSlide) return;
      if (dontAnimate === true) {
        _this.slideHandler(targetSlide, dontAnimate);
      } else {
        _this.slideHandler(targetSlide);
      }
      _this.props.autoplay && _this.autoPlay("update");
      if (_this.props.focusOnSelect) {
        var nodes = _this.list.querySelectorAll(".slick-current");
        nodes[0] && nodes[0].focus();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "clickHandler", function(e2) {
      if (_this.clickable === false) {
        e2.stopPropagation();
        e2.preventDefault();
      }
      _this.clickable = true;
    });
    _defineProperty(_assertThisInitialized(_this), "keyHandler", function(e2) {
      var dir = (0, _innerSliderUtils.keyHandler)(e2, _this.props.accessibility, _this.props.rtl);
      dir !== "" && _this.changeSlide({
        message: dir
      });
    });
    _defineProperty(_assertThisInitialized(_this), "selectHandler", function(options) {
      _this.changeSlide(options);
    });
    _defineProperty(_assertThisInitialized(_this), "disableBodyScroll", function() {
      var preventDefault = function preventDefault2(e2) {
        e2 = e2 || window.event;
        if (e2.preventDefault) e2.preventDefault();
        e2.returnValue = false;
      };
      window.ontouchmove = preventDefault;
    });
    _defineProperty(_assertThisInitialized(_this), "enableBodyScroll", function() {
      window.ontouchmove = null;
    });
    _defineProperty(_assertThisInitialized(_this), "swipeStart", function(e2) {
      if (_this.props.verticalSwiping) {
        _this.disableBodyScroll();
      }
      var state = (0, _innerSliderUtils.swipeStart)(e2, _this.props.swipe, _this.props.draggable);
      state !== "" && _this.setState(state);
    });
    _defineProperty(_assertThisInitialized(_this), "swipeMove", function(e2) {
      var state = (0, _innerSliderUtils.swipeMove)(e2, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      if (state["swiping"]) {
        _this.clickable = false;
      }
      _this.setState(state);
    });
    _defineProperty(_assertThisInitialized(_this), "swipeEnd", function(e2) {
      var state = (0, _innerSliderUtils.swipeEnd)(e2, _objectSpread(_objectSpread(_objectSpread({}, _this.props), _this.state), {}, {
        trackRef: _this.track,
        listRef: _this.list,
        slideIndex: _this.state.currentSlide
      }));
      if (!state) return;
      var triggerSlideHandler = state["triggerSlideHandler"];
      delete state["triggerSlideHandler"];
      _this.setState(state);
      if (triggerSlideHandler === void 0) return;
      _this.slideHandler(triggerSlideHandler);
      if (_this.props.verticalSwiping) {
        _this.enableBodyScroll();
      }
    });
    _defineProperty(_assertThisInitialized(_this), "touchEnd", function(e2) {
      _this.swipeEnd(e2);
      _this.clickable = true;
    });
    _defineProperty(_assertThisInitialized(_this), "slickPrev", function() {
      _this.callbackTimers.push(setTimeout(function() {
        return _this.changeSlide({
          message: "previous"
        });
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "slickNext", function() {
      _this.callbackTimers.push(setTimeout(function() {
        return _this.changeSlide({
          message: "next"
        });
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "slickGoTo", function(slide) {
      var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      slide = Number(slide);
      if (isNaN(slide)) return "";
      _this.callbackTimers.push(setTimeout(function() {
        return _this.changeSlide({
          message: "index",
          index: slide,
          currentSlide: _this.state.currentSlide
        }, dontAnimate);
      }, 0));
    });
    _defineProperty(_assertThisInitialized(_this), "play", function() {
      var nextIndex;
      if (_this.props.rtl) {
        nextIndex = _this.state.currentSlide - _this.props.slidesToScroll;
      } else {
        if ((0, _innerSliderUtils.canGoNext)(_objectSpread(_objectSpread({}, _this.props), _this.state))) {
          nextIndex = _this.state.currentSlide + _this.props.slidesToScroll;
        } else {
          return false;
        }
      }
      _this.slideHandler(nextIndex);
    });
    _defineProperty(_assertThisInitialized(_this), "autoPlay", function(playType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
      }
      var autoplaying = _this.state.autoplaying;
      if (playType === "update") {
        if (autoplaying === "hovered" || autoplaying === "focused" || autoplaying === "paused") {
          return;
        }
      } else if (playType === "leave") {
        if (autoplaying === "paused" || autoplaying === "focused") {
          return;
        }
      } else if (playType === "blur") {
        if (autoplaying === "paused" || autoplaying === "hovered") {
          return;
        }
      }
      _this.autoplayTimer = setInterval(_this.play, _this.props.autoplaySpeed + 50);
      _this.setState({
        autoplaying: "playing"
      });
    });
    _defineProperty(_assertThisInitialized(_this), "pause", function(pauseType) {
      if (_this.autoplayTimer) {
        clearInterval(_this.autoplayTimer);
        _this.autoplayTimer = null;
      }
      var autoplaying = _this.state.autoplaying;
      if (pauseType === "paused") {
        _this.setState({
          autoplaying: "paused"
        });
      } else if (pauseType === "focused") {
        if (autoplaying === "hovered" || autoplaying === "playing") {
          _this.setState({
            autoplaying: "focused"
          });
        }
      } else {
        if (autoplaying === "playing") {
          _this.setState({
            autoplaying: "hovered"
          });
        }
      }
    });
    _defineProperty(_assertThisInitialized(_this), "onDotsOver", function() {
      return _this.props.autoplay && _this.pause("hovered");
    });
    _defineProperty(_assertThisInitialized(_this), "onDotsLeave", function() {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });
    _defineProperty(_assertThisInitialized(_this), "onTrackOver", function() {
      return _this.props.autoplay && _this.pause("hovered");
    });
    _defineProperty(_assertThisInitialized(_this), "onTrackLeave", function() {
      return _this.props.autoplay && _this.state.autoplaying === "hovered" && _this.autoPlay("leave");
    });
    _defineProperty(_assertThisInitialized(_this), "onSlideFocus", function() {
      return _this.props.autoplay && _this.pause("focused");
    });
    _defineProperty(_assertThisInitialized(_this), "onSlideBlur", function() {
      return _this.props.autoplay && _this.state.autoplaying === "focused" && _this.autoPlay("blur");
    });
    _defineProperty(_assertThisInitialized(_this), "render", function() {
      var className = (0, _classnames["default"])("slick-slider", _this.props.className, {
        "slick-vertical": _this.props.vertical,
        "slick-initialized": true
      });
      var spec = _objectSpread(_objectSpread({}, _this.props), _this.state);
      var trackProps = (0, _innerSliderUtils.extractObject)(spec, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]);
      var pauseOnHover = _this.props.pauseOnHover;
      trackProps = _objectSpread(_objectSpread({}, trackProps), {}, {
        onMouseEnter: pauseOnHover ? _this.onTrackOver : null,
        onMouseLeave: pauseOnHover ? _this.onTrackLeave : null,
        onMouseOver: pauseOnHover ? _this.onTrackOver : null,
        focusOnSelect: _this.props.focusOnSelect && _this.clickable ? _this.selectHandler : null
      });
      var dots2;
      if (_this.props.dots === true && _this.state.slideCount >= _this.props.slidesToShow) {
        var dotProps = (0, _innerSliderUtils.extractObject)(spec, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]);
        var pauseOnDotsHover = _this.props.pauseOnDotsHover;
        dotProps = _objectSpread(_objectSpread({}, dotProps), {}, {
          clickHandler: _this.changeSlide,
          onMouseEnter: pauseOnDotsHover ? _this.onDotsLeave : null,
          onMouseOver: pauseOnDotsHover ? _this.onDotsOver : null,
          onMouseLeave: pauseOnDotsHover ? _this.onDotsLeave : null
        });
        dots2 = /* @__PURE__ */ _react["default"].createElement(_dots.Dots, dotProps);
      }
      var prevArrow, nextArrow;
      var arrowProps = (0, _innerSliderUtils.extractObject)(spec, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
      arrowProps.clickHandler = _this.changeSlide;
      if (_this.props.arrows) {
        prevArrow = /* @__PURE__ */ _react["default"].createElement(_arrows.PrevArrow, arrowProps);
        nextArrow = /* @__PURE__ */ _react["default"].createElement(_arrows.NextArrow, arrowProps);
      }
      var verticalHeightStyle = null;
      if (_this.props.vertical) {
        verticalHeightStyle = {
          height: _this.state.listHeight
        };
      }
      var centerPaddingStyle = null;
      if (_this.props.vertical === false) {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: "0px " + _this.props.centerPadding
          };
        }
      } else {
        if (_this.props.centerMode === true) {
          centerPaddingStyle = {
            padding: _this.props.centerPadding + " 0px"
          };
        }
      }
      var listStyle = _objectSpread(_objectSpread({}, verticalHeightStyle), centerPaddingStyle);
      var touchMove = _this.props.touchMove;
      var listProps = {
        className: "slick-list",
        style: listStyle,
        onClick: _this.clickHandler,
        onMouseDown: touchMove ? _this.swipeStart : null,
        onMouseMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onMouseUp: touchMove ? _this.swipeEnd : null,
        onMouseLeave: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onTouchStart: touchMove ? _this.swipeStart : null,
        onTouchMove: _this.state.dragging && touchMove ? _this.swipeMove : null,
        onTouchEnd: touchMove ? _this.touchEnd : null,
        onTouchCancel: _this.state.dragging && touchMove ? _this.swipeEnd : null,
        onKeyDown: _this.props.accessibility ? _this.keyHandler : null
      };
      var innerSliderProps = {
        className,
        dir: "ltr",
        style: _this.props.style
      };
      if (_this.props.unslick) {
        listProps = {
          className: "slick-list"
        };
        innerSliderProps = {
          className
        };
      }
      return /* @__PURE__ */ _react["default"].createElement("div", innerSliderProps, !_this.props.unslick ? prevArrow : "", /* @__PURE__ */ _react["default"].createElement("div", _extends({
        ref: _this.listRefHandler
      }, listProps), /* @__PURE__ */ _react["default"].createElement(_track.Track, _extends({
        ref: _this.trackRefHandler
      }, trackProps), _this.props.children)), !_this.props.unslick ? nextArrow : "", !_this.props.unslick ? dots2 : "");
    });
    _this.list = null;
    _this.track = null;
    _this.state = _objectSpread(_objectSpread({}, _initialState["default"]), {}, {
      currentSlide: _this.props.initialSlide,
      targetSlide: _this.props.initialSlide ? _this.props.initialSlide : 0,
      slideCount: _react["default"].Children.count(_this.props.children)
    });
    _this.callbackTimers = [];
    _this.clickable = true;
    _this.debouncedResize = null;
    var ssrState = _this.ssrInit();
    _this.state = _objectSpread(_objectSpread({}, _this.state), ssrState);
    return _this;
  }
  _createClass(InnerSlider2, [{
    key: "didPropsChange",
    value: function didPropsChange(prevProps) {
      var setTrackStyle = false;
      for (var _i3 = 0, _Object$keys = Object.keys(this.props); _i3 < _Object$keys.length; _i3++) {
        var key = _Object$keys[_i3];
        if (!prevProps.hasOwnProperty(key)) {
          setTrackStyle = true;
          break;
        }
        if (_typeof(prevProps[key]) === "object" || typeof prevProps[key] === "function" || isNaN(prevProps[key])) {
          continue;
        }
        if (prevProps[key] !== this.props[key]) {
          setTrackStyle = true;
          break;
        }
      }
      return setTrackStyle || _react["default"].Children.count(this.props.children) !== _react["default"].Children.count(prevProps.children);
    }
  }]);
  return InnerSlider2;
}(_react["default"].Component);
var camel2hyphen$1 = function(str) {
  return str.replace(/[A-Z]/g, function(match2) {
    return "-" + match2.toLowerCase();
  }).toLowerCase();
};
var camel2hyphen_1 = camel2hyphen$1;
var camel2hyphen = camel2hyphen_1;
var isDimension = function(feature) {
  var re2 = /[height|width]$/;
  return re2.test(feature);
};
var obj2mq = function(obj) {
  var mq = "";
  var features = Object.keys(obj);
  features.forEach(function(feature, index2) {
    var value = obj[feature];
    feature = camel2hyphen(feature);
    if (isDimension(feature) && typeof value === "number") {
      value = value + "px";
    }
    if (value === true) {
      mq += feature;
    } else if (value === false) {
      mq += "not " + feature;
    } else {
      mq += "(" + feature + ": " + value + ")";
    }
    if (index2 < features.length - 1) {
      mq += " and ";
    }
  });
  return mq;
};
var json2mq = function(query2) {
  var mq = "";
  if (typeof query2 === "string") {
    return query2;
  }
  if (query2 instanceof Array) {
    query2.forEach(function(q2, index2) {
      mq += obj2mq(q2);
      if (index2 < query2.length - 1) {
        mq += ", ";
      }
    });
    return mq;
  }
  return obj2mq(query2);
};
var json2mq_1 = json2mq;
var QueryHandler_1;
var hasRequiredQueryHandler;
function requireQueryHandler() {
  if (hasRequiredQueryHandler) return QueryHandler_1;
  hasRequiredQueryHandler = 1;
  function QueryHandler(options) {
    this.options = options;
    !options.deferSetup && this.setup();
  }
  QueryHandler.prototype = {
    constructor: QueryHandler,
    /**
     * coordinates setup of the handler
     *
     * @function
     */
    setup: function() {
      if (this.options.setup) {
        this.options.setup();
      }
      this.initialised = true;
    },
    /**
     * coordinates setup and triggering of the handler
     *
     * @function
     */
    on: function() {
      !this.initialised && this.setup();
      this.options.match && this.options.match();
    },
    /**
     * coordinates the unmatch event for the handler
     *
     * @function
     */
    off: function() {
      this.options.unmatch && this.options.unmatch();
    },
    /**
     * called when a handler is to be destroyed.
     * delegates to the destroy or unmatch callbacks, depending on availability.
     *
     * @function
     */
    destroy: function() {
      this.options.destroy ? this.options.destroy() : this.off();
    },
    /**
     * determines equality by reference.
     * if object is supplied compare options, if function, compare match callback
     *
     * @function
     * @param {object || function} [target] the target for comparison
     */
    equals: function(target) {
      return this.options === target || this.options.match === target;
    }
  };
  QueryHandler_1 = QueryHandler;
  return QueryHandler_1;
}
var Util;
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return Util;
  hasRequiredUtil = 1;
  function each(collection, fn2) {
    var i2 = 0, length2 = collection.length, cont;
    for (i2; i2 < length2; i2++) {
      cont = fn2(collection[i2], i2);
      if (cont === false) {
        break;
      }
    }
  }
  function isArray(target) {
    return Object.prototype.toString.apply(target) === "[object Array]";
  }
  function isFunction2(target) {
    return typeof target === "function";
  }
  Util = {
    isFunction: isFunction2,
    isArray,
    each
  };
  return Util;
}
var MediaQuery_1;
var hasRequiredMediaQuery;
function requireMediaQuery() {
  if (hasRequiredMediaQuery) return MediaQuery_1;
  hasRequiredMediaQuery = 1;
  var QueryHandler = requireQueryHandler();
  var each = requireUtil().each;
  function MediaQuery(query2, isUnconditional) {
    this.query = query2;
    this.isUnconditional = isUnconditional;
    this.handlers = [];
    this.mql = window.matchMedia(query2);
    var self2 = this;
    this.listener = function(mql) {
      self2.mql = mql.currentTarget || mql;
      self2.assess();
    };
    this.mql.addListener(this.listener);
  }
  MediaQuery.prototype = {
    constuctor: MediaQuery,
    /**
     * add a handler for this query, triggering if already active
     *
     * @param {object} handler
     * @param {function} handler.match callback for when query is activated
     * @param {function} [handler.unmatch] callback for when query is deactivated
     * @param {function} [handler.setup] callback for immediate execution when a query handler is registered
     * @param {boolean} [handler.deferSetup=false] should the setup callback be deferred until the first time the handler is matched?
     */
    addHandler: function(handler) {
      var qh2 = new QueryHandler(handler);
      this.handlers.push(qh2);
      this.matches() && qh2.on();
    },
    /**
     * removes the given handler from the collection, and calls it's destroy methods
     *
     * @param {object || function} handler the handler to remove
     */
    removeHandler: function(handler) {
      var handlers = this.handlers;
      each(handlers, function(h2, i2) {
        if (h2.equals(handler)) {
          h2.destroy();
          return !handlers.splice(i2, 1);
        }
      });
    },
    /**
     * Determine whether the media query should be considered a match
     *
     * @return {Boolean} true if media query can be considered a match, false otherwise
     */
    matches: function() {
      return this.mql.matches || this.isUnconditional;
    },
    /**
     * Clears all handlers and unbinds events
     */
    clear: function() {
      each(this.handlers, function(handler) {
        handler.destroy();
      });
      this.mql.removeListener(this.listener);
      this.handlers.length = 0;
    },
    /*
        * Assesses the query, turning on all handlers if it matches, turning them off if it doesn't match
        */
    assess: function() {
      var action = this.matches() ? "on" : "off";
      each(this.handlers, function(handler) {
        handler[action]();
      });
    }
  };
  MediaQuery_1 = MediaQuery;
  return MediaQuery_1;
}
var MediaQueryDispatch_1;
var hasRequiredMediaQueryDispatch;
function requireMediaQueryDispatch() {
  if (hasRequiredMediaQueryDispatch) return MediaQueryDispatch_1;
  hasRequiredMediaQueryDispatch = 1;
  var MediaQuery = requireMediaQuery();
  var Util2 = requireUtil();
  var each = Util2.each;
  var isFunction2 = Util2.isFunction;
  var isArray = Util2.isArray;
  function MediaQueryDispatch() {
    if (!window.matchMedia) {
      throw new Error("matchMedia not present, legacy browsers require a polyfill");
    }
    this.queries = {};
    this.browserIsIncapable = !window.matchMedia("only all").matches;
  }
  MediaQueryDispatch.prototype = {
    constructor: MediaQueryDispatch,
    /**
     * Registers a handler for the given media query
     *
     * @param {string} q the media query
     * @param {object || Array || Function} options either a single query handler object, a function, or an array of query handlers
     * @param {function} options.match fired when query matched
     * @param {function} [options.unmatch] fired when a query is no longer matched
     * @param {function} [options.setup] fired when handler first triggered
     * @param {boolean} [options.deferSetup=false] whether setup should be run immediately or deferred until query is first matched
     * @param {boolean} [shouldDegrade=false] whether this particular media query should always run on incapable browsers
     */
    register: function(q2, options, shouldDegrade) {
      var queries = this.queries, isUnconditional = shouldDegrade && this.browserIsIncapable;
      if (!queries[q2]) {
        queries[q2] = new MediaQuery(q2, isUnconditional);
      }
      if (isFunction2(options)) {
        options = { match: options };
      }
      if (!isArray(options)) {
        options = [options];
      }
      each(options, function(handler) {
        if (isFunction2(handler)) {
          handler = { match: handler };
        }
        queries[q2].addHandler(handler);
      });
      return this;
    },
    /**
     * unregisters a query and all it's handlers, or a specific handler for a query
     *
     * @param {string} q the media query to target
     * @param {object || function} [handler] specific handler to unregister
     */
    unregister: function(q2, handler) {
      var query2 = this.queries[q2];
      if (query2) {
        if (handler) {
          query2.removeHandler(handler);
        } else {
          query2.clear();
          delete this.queries[q2];
        }
      }
      return this;
    }
  };
  MediaQueryDispatch_1 = MediaQueryDispatch;
  return MediaQueryDispatch_1;
}
var src;
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  var MediaQueryDispatch = requireMediaQueryDispatch();
  src = new MediaQueryDispatch();
  return src;
}
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _react2 = _interopRequireDefault2(reactExports);
  var _innerSlider = innerSlider;
  var _json2mq = _interopRequireDefault2(json2mq_1);
  var _defaultProps2 = _interopRequireDefault2(defaultProps);
  var _innerSliderUtils2 = innerSliderUtils;
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  function _typeof2(o2) {
    "@babel/helpers - typeof";
    return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o22) {
      return typeof o22;
    } : function(o22) {
      return o22 && "function" == typeof Symbol && o22.constructor === Symbol && o22 !== Symbol.prototype ? "symbol" : typeof o22;
    }, _typeof2(o2);
  }
  function _extends2() {
    _extends2 = Object.assign ? Object.assign.bind() : function(target) {
      for (var i2 = 1; i2 < arguments.length; i2++) {
        var source = arguments[i2];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends2.apply(this, arguments);
  }
  function ownKeys2(e2, r2) {
    var t2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var o2 = Object.getOwnPropertySymbols(e2);
      r2 && (o2 = o2.filter(function(r22) {
        return Object.getOwnPropertyDescriptor(e2, r22).enumerable;
      })), t2.push.apply(t2, o2);
    }
    return t2;
  }
  function _objectSpread3(e2) {
    for (var r2 = 1; r2 < arguments.length; r2++) {
      var t2 = null != arguments[r2] ? arguments[r2] : {};
      r2 % 2 ? ownKeys2(Object(t2), true).forEach(function(r22) {
        _defineProperty2(e2, r22, t2[r22]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(t2)) : ownKeys2(Object(t2)).forEach(function(r22) {
        Object.defineProperty(e2, r22, Object.getOwnPropertyDescriptor(t2, r22));
      });
    }
    return e2;
  }
  function _classCallCheck2(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties2(target, props) {
    for (var i2 = 0; i2 < props.length; i2++) {
      var descriptor = props[i2];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey2(descriptor.key), descriptor);
    }
  }
  function _createClass2(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties2(Constructor.prototype, protoProps);
    Object.defineProperty(Constructor, "prototype", { writable: false });
    return Constructor;
  }
  function _inherits2(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
    Object.defineProperty(subClass, "prototype", { writable: false });
    if (superClass) _setPrototypeOf2(subClass, superClass);
  }
  function _setPrototypeOf2(o2, p2) {
    _setPrototypeOf2 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf22(o22, p22) {
      o22.__proto__ = p22;
      return o22;
    };
    return _setPrototypeOf2(o2, p2);
  }
  function _createSuper2(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct2();
    return function _createSuperInternal() {
      var Super = _getPrototypeOf2(Derived), result;
      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf2(this).constructor;
        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }
      return _possibleConstructorReturn2(this, result);
    };
  }
  function _possibleConstructorReturn2(self2, call) {
    if (call && (_typeof2(call) === "object" || typeof call === "function")) {
      return call;
    } else if (call !== void 0) {
      throw new TypeError("Derived constructors may only return object or undefined");
    }
    return _assertThisInitialized2(self2);
  }
  function _assertThisInitialized2(self2) {
    if (self2 === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self2;
  }
  function _isNativeReflectConstruct2() {
    try {
      var t2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (t22) {
    }
    return (_isNativeReflectConstruct2 = function _isNativeReflectConstruct22() {
      return !!t2;
    })();
  }
  function _getPrototypeOf2(o2) {
    _getPrototypeOf2 = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf22(o22) {
      return o22.__proto__ || Object.getPrototypeOf(o22);
    };
    return _getPrototypeOf2(o2);
  }
  function _defineProperty2(obj, key, value) {
    key = _toPropertyKey2(key);
    if (key in obj) {
      Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _toPropertyKey2(t2) {
    var i2 = _toPrimitive2(t2, "string");
    return "symbol" == _typeof2(i2) ? i2 : String(i2);
  }
  function _toPrimitive2(t2, r2) {
    if ("object" != _typeof2(t2) || !t2) return t2;
    var e2 = t2[Symbol.toPrimitive];
    if (void 0 !== e2) {
      var i2 = e2.call(t2, r2 || "default");
      if ("object" != _typeof2(i2)) return i2;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r2 ? String : Number)(t2);
  }
  var enquire = (0, _innerSliderUtils2.canUseDOM)() && requireSrc();
  exports["default"] = /* @__PURE__ */ function(_React$Component) {
    _inherits2(Slider2, _React$Component);
    var _super = _createSuper2(Slider2);
    function Slider2(props) {
      var _this;
      _classCallCheck2(this, Slider2);
      _this = _super.call(this, props);
      _defineProperty2(_assertThisInitialized2(_this), "innerSliderRefHandler", function(ref) {
        return _this.innerSlider = ref;
      });
      _defineProperty2(_assertThisInitialized2(_this), "slickPrev", function() {
        return _this.innerSlider.slickPrev();
      });
      _defineProperty2(_assertThisInitialized2(_this), "slickNext", function() {
        return _this.innerSlider.slickNext();
      });
      _defineProperty2(_assertThisInitialized2(_this), "slickGoTo", function(slide) {
        var dontAnimate = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
        return _this.innerSlider.slickGoTo(slide, dontAnimate);
      });
      _defineProperty2(_assertThisInitialized2(_this), "slickPause", function() {
        return _this.innerSlider.pause("paused");
      });
      _defineProperty2(_assertThisInitialized2(_this), "slickPlay", function() {
        return _this.innerSlider.autoPlay("play");
      });
      _this.state = {
        breakpoint: null
      };
      _this._responsiveMediaHandlers = [];
      return _this;
    }
    _createClass2(Slider2, [{
      key: "media",
      value: function media(query2, handler) {
        enquire.register(query2, handler);
        this._responsiveMediaHandlers.push({
          query: query2,
          handler
        });
      }
      // handles responsive breakpoints
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        var _this2 = this;
        if (this.props.responsive) {
          var breakpoints = this.props.responsive.map(function(breakpt) {
            return breakpt.breakpoint;
          });
          breakpoints.sort(function(x2, y2) {
            return x2 - y2;
          });
          breakpoints.forEach(function(breakpoint, index2) {
            var bQuery;
            if (index2 === 0) {
              bQuery = (0, _json2mq["default"])({
                minWidth: 0,
                maxWidth: breakpoint
              });
            } else {
              bQuery = (0, _json2mq["default"])({
                minWidth: breakpoints[index2 - 1] + 1,
                maxWidth: breakpoint
              });
            }
            (0, _innerSliderUtils2.canUseDOM)() && _this2.media(bQuery, function() {
              _this2.setState({
                breakpoint
              });
            });
          });
          var query2 = (0, _json2mq["default"])({
            minWidth: breakpoints.slice(-1)[0]
          });
          (0, _innerSliderUtils2.canUseDOM)() && this.media(query2, function() {
            _this2.setState({
              breakpoint: null
            });
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        this._responsiveMediaHandlers.forEach(function(obj) {
          enquire.unregister(obj.query, obj.handler);
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this3 = this;
        var settings;
        var newProps;
        if (this.state.breakpoint) {
          newProps = this.props.responsive.filter(function(resp) {
            return resp.breakpoint === _this3.state.breakpoint;
          });
          settings = newProps[0].settings === "unslick" ? "unslick" : _objectSpread3(_objectSpread3(_objectSpread3({}, _defaultProps2["default"]), this.props), newProps[0].settings);
        } else {
          settings = _objectSpread3(_objectSpread3({}, _defaultProps2["default"]), this.props);
        }
        if (settings.centerMode) {
          if (settings.slidesToScroll > 1 && false) {
            console.warn("slidesToScroll should be equal to 1 in centerMode, you are using ".concat(settings.slidesToScroll));
          }
          settings.slidesToScroll = 1;
        }
        if (settings.fade) {
          if (settings.slidesToShow > 1 && false) {
            console.warn("slidesToShow should be equal to 1 when fade is true, you're using ".concat(settings.slidesToShow));
          }
          if (settings.slidesToScroll > 1 && false) {
            console.warn("slidesToScroll should be equal to 1 when fade is true, you're using ".concat(settings.slidesToScroll));
          }
          settings.slidesToShow = 1;
          settings.slidesToScroll = 1;
        }
        var children = _react2["default"].Children.toArray(this.props.children);
        children = children.filter(function(child) {
          if (typeof child === "string") {
            return !!child.trim();
          }
          return !!child;
        });
        if (settings.variableWidth && (settings.rows > 1 || settings.slidesPerRow > 1)) {
          console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1");
          settings.variableWidth = false;
        }
        var newChildren = [];
        var currentWidth = null;
        for (var i2 = 0; i2 < children.length; i2 += settings.rows * settings.slidesPerRow) {
          var newSlide = [];
          for (var j2 = i2; j2 < i2 + settings.rows * settings.slidesPerRow; j2 += settings.slidesPerRow) {
            var row = [];
            for (var k2 = j2; k2 < j2 + settings.slidesPerRow; k2 += 1) {
              if (settings.variableWidth && children[k2].props.style) {
                currentWidth = children[k2].props.style.width;
              }
              if (k2 >= children.length) break;
              row.push(/* @__PURE__ */ _react2["default"].cloneElement(children[k2], {
                key: 100 * i2 + 10 * j2 + k2,
                tabIndex: -1,
                style: {
                  width: "".concat(100 / settings.slidesPerRow, "%"),
                  display: "inline-block"
                }
              }));
            }
            newSlide.push(/* @__PURE__ */ _react2["default"].createElement("div", {
              key: 10 * i2 + j2
            }, row));
          }
          if (settings.variableWidth) {
            newChildren.push(/* @__PURE__ */ _react2["default"].createElement("div", {
              key: i2,
              style: {
                width: currentWidth
              }
            }, newSlide));
          } else {
            newChildren.push(/* @__PURE__ */ _react2["default"].createElement("div", {
              key: i2
            }, newSlide));
          }
        }
        if (settings === "unslick") {
          var className = "regular slider " + (this.props.className || "");
          return /* @__PURE__ */ _react2["default"].createElement("div", {
            className
          }, children);
        } else if (newChildren.length <= settings.slidesToShow && !settings.infinite) {
          settings.unslick = true;
        }
        return /* @__PURE__ */ _react2["default"].createElement(_innerSlider.InnerSlider, _extends2({
          style: this.props.style,
          ref: this.innerSliderRefHandler
        }, (0, _innerSliderUtils2.filterSettings)(settings)), newChildren);
      }
    }]);
    return Slider2;
  }(_react2["default"].Component);
})(slider);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;
  var _slider = _interopRequireDefault2(slider);
  function _interopRequireDefault2(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }
  exports["default"] = _slider["default"];
})(lib);
const Slider = /* @__PURE__ */ getDefaultExportFromCjs(lib);
const SliderContainer = styled.div`
  background: #E6E6EA;
  max-width: 618px;
  //padding: 40px 0;

  //@media screen and (max-width: 1280px) {
  //  max-width: calc(100vw - 368px - 75px);
  //}
  //@media screen and (max-width: 768px) {
  //  max-width: calc(100vw - 40px);
  //}
`;
const Slide = styled.div`
   //padding-left: ${(props) => props.index === 0 ? "40px" : "20px"};

  //@media screen and (max-width: 768px) {
  //  padding-left: 20px;
  //}
  //@media screen and (max-width: 400px) {
  //  padding-left: 10px;
  //}
`;
const SliderStyled = styled(Slider)`
    /* .slick-slide {
        scale: 0.9;
        opacity: 0.8;
        
      }
      .slick-active,.slick-current ~ .slick-slide:nth-child(2) {
        scale: 1;
        opacity: 1;
        
      } */

    .slick-disabled {
        opacity: 0.6;
        background: hsla(0, 0%, 100%, 0.5);

        &:hover {
            background: hsla(0, 0%, 100%, 0.5);
            opacity: 0.6;
        }
    }

    .slick-prev,
    .slick-next {
        background: hsla(145, 100%, 98%, 0.8);
        top: 98px;
    }

    .slick-prev {
        left: 20px;
    }

    .slick-next {
        right: 20px;
    }

    //@media screen and (max-width: 768px) {
    //    .slick-prev {
    //        left: -5px;
    //    }
    //
    //    .slick-next {
    //        right: -5px;
    //    }
    //}
    //@media screen and (max-width: 360px) {
    //    .slick-prev {
    //        left: -10px;
    //    }
    //
    //    .slick-next {
    //        right: -10px;
    //    }
    //}
`;
const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;
const StyledLink = (props) => /* @__PURE__ */ jsx(LinkStyled, { ...props });
const FragmentCardStyled = styled.div`
    width: 236px;
    height: 224px;
    overflow: hidden;
    display: flex;
    padding: 8px;
    flex-direction: column;
    gap: 8px;
    border-radius: 8px;
    background-color: #E6E6EA;
`;
styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 140%;
  color: #e4e4ff;
  padding: 9px 12px;
  display: flex;
  background: rgba(23, 8, 123, 0.3);
  backdrop-filter: blur(5px);
  width: max-content;
  align-items: center;
  user-select: none;
  margin: 0 auto;
`;
const VideoImageWrapper = styled.div`
    background-image: url(${(props) => props.background_image});
    background-size: cover;
    background-position: center;
    height: 128px;
    border-radius: 12px;
`;
const Description = styled(LabelText)`
    color: rgb(39, 52, 68);
    font-family: Open Sans, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 120%;
    text-align: left;
`;
styled(LabelText)`
    color: rgb(22, 24, 24);
    font-family: "Open Sans",sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 140%;
    text-align: left;
`;
const FragmentCard = reactExports.memo(({ background_image, content = "", timeStamp }) => {
  return /* @__PURE__ */ jsxs(FragmentCardStyled, { children: [
    /* @__PURE__ */ jsx(VideoImageWrapper, { background_image }),
    /* @__PURE__ */ jsx("span", { className: "font-bold font-open-sans text-[16px] text-[#6F42C1]", children: timeStamp }),
    /* @__PURE__ */ jsx(Description, { dangerouslySetInnerHTML: { __html: content.slice(0, 55) + "..." } })
  ] });
});
const Wrapper = styled(Button$1)`
  width: 42px;
  height: 42px;
  z-index: 5;

  border-radius: 4px;
  background: hsla(0, 0%, 100%, 0.8);
  border: transparent;
  /* opacity: 0.8; */

  transition: all 0.3s ease;

  &:hover {
    background: hsla(0, 0%, 100%, 0.9);
  }
  &:active {
    background: hsla(0, 0%, 100%, 1.5);
    opacity: 1;
    scale: 0.9;
  }
  &:before {
    content: none;
  }
`;
const ArrowButton = ({ onClick, variant = "left", className }) => {
  return /* @__PURE__ */ jsx(Wrapper, { onClick, variant: "withIcon", className, children: variant === "right" ? /* @__PURE__ */ jsx(ArrowRight, { stroke: "#1F2D3D" }) : /* @__PURE__ */ jsx(ArrowLeft, { stroke: "#1F2D3D" }) });
};
const InnerSlider = ({ items }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    nextArrow: items.cues.length > 3 ? /* @__PURE__ */ jsx(ArrowButton, { variant: "right" }) : /* @__PURE__ */ jsx(Fragment, {}),
    prevArrow: /* @__PURE__ */ jsx(ArrowButton, {}),
    // centerPadding: '590px',
    // centerMode: true,
    variableWidth: true,
    accessibility: true,
    swipeToSlide: true,
    responsive: [
      //  {
      //    breakpoint: 1200,
      //    settings: {
      //      slidesToShow: 3,
      //    },
      //  },
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: items.cues.length > 1 ? 2 : 1,
      //     centerPadding: '10px',
      //     centerMode: true,
      //   },
      // },
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: items.cues.length > 1 ? 2 : 1,
      //     centerPadding: '10px',
      //     centerMode: true,
      //   },
      // },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: items.cues.length > 1 ? 2 : 1,
      //     centerPadding: '10px',
      //     centerMode: true,
      //   },
      // },
      // {
      //   breakpoint: 480,
      //   settings: {
      //     slidesToShow: 1,
      //     centerPadding: '10px',
      //     centerMode: true,
      //   },
      // },
      // {
      //   breakpoint: 410,
      //   settings: {
      //     centerPadding: '40px',
      //     slidesToShow: 1,
      //     centerMode: true,
      //   },
      // },
    ]
  };
  if (items.cues.length === 0) {
    return null;
  }
  console.log(items.cues);
  return /* @__PURE__ */ jsx(SliderContainer, { children: /* @__PURE__ */ jsx(SliderStyled, { ...settings, className: "slider", cssEase: "linear", children: items.cues.map(({ content, timestampLink, image }, i2) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(Slide, { index: i2, children: /* @__PURE__ */ jsx(StyledLink, { to: "/", state: { fromSearch: true }, children: /* @__PURE__ */ jsx(
    FragmentCard,
    {
      background_image: `https://visaver.online${image}`,
      timeStamp: secondsToTime(parseInt(timestampLink)),
      content
    }
  ) }) }) }, i2)) }) });
};
const SearchVideoCardWithScreenShot = ({ videoInfo }) => {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(SearchVideoCardStyled, { children: [
    /* @__PURE__ */ jsx(Header, { children: /* @__PURE__ */ jsx(HeaderContent, { children: /* @__PURE__ */ jsx(StyledLink, { to: `${videoInfo.originLink}`, children: /* @__PURE__ */ jsx(VideoCard, { video: videoInfo, iframeClassName: "w-[320px] h-[208px] rounded-[12px]" }) }) }) }),
    /* @__PURE__ */ jsxs(Main, { children: [
      /* @__PURE__ */ jsx(Title, { children: videoInfo.title }),
      /* @__PURE__ */ jsx("p", { className: "mb-[10px] font-bold font-open-sans text-[#000000] text-[16px]", children: "Подходящие фрагменты: 5" }),
      /* @__PURE__ */ jsx(InnerSlider, { items: videoInfo })
    ] })
  ] }) });
};
const ResultVideoInnerWithScreenShot = ({ search: search2 }) => {
  var _a;
  const [params] = useSearchParams();
  const { data: fragments } = playlistsAPI.useGetFullSearchQuery(
    { publicId: "59609dd8-7ef4-4080-9cb8-3c2cab266494", query: ((_a = search2.current) == null ? void 0 : _a.value) || params.get("search") || "" }
    // { skip: !params.get('search') },
  );
  console.log(fragments);
  return /* @__PURE__ */ jsx("div", { children: fragments && fragments.map((fragment, i2) => /* @__PURE__ */ jsx(SearchVideoCardWithScreenShot, { videoInfo: fragment }, i2)) });
};
const SearchVideoCard = ({ video: video2 }) => {
  const { data: data2 } = useGetMovieByIdQuery({ id: video2.publicId });
  if (!data2) return null;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: "cursor-pointer p-[15px] mb-[12px] flex gap-[20px] bg-white border-[1px] border-[#EDEFF3] rounded-[12px] w-[967px] h-[240px]",
      children: [
        /* @__PURE__ */ jsx(VideoCard, { video: data2, iframeClassName: "w-[320px] h-[208px] rounded-[12px]" }),
        /* @__PURE__ */ jsxs("p", { className: "font-open-sans font-normal text-[14px] text-indigo", children: [
          /* @__PURE__ */ jsx("p", { className: "font-open-sans font-bold text-[14px] text-indigo pt-[30px]", children: data2.title }),
          /* @__PURE__ */ jsx("p", { children: data2.description.slice(0, 550) })
        ] })
      ]
    }
  ) });
};
const backIcon = "data:image/svg+xml,%3csvg%20width='18'%20height='28'%20viewBox='0%200%2018%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M2%2014L1.49321%2013.4471L0.89008%2014L1.49321%2014.5529L2%2014ZM17%2014.75C17.4142%2014.75%2017.75%2014.4142%2017.75%2014C17.75%2013.5858%2017.4142%2013.25%2017%2013.25V14.75ZM7.49321%207.94713L1.49321%2013.4471L2.50679%2014.5529L8.50679%209.05287L7.49321%207.94713ZM1.49321%2014.5529L7.49321%2020.0529L8.50679%2018.9471L2.50679%2013.4471L1.49321%2014.5529ZM2%2014.75H17V13.25H2V14.75Z'%20fill='black'/%3e%3c/svg%3e";
const SearchResultPage = () => {
  const [params, setParams] = useSearchParams();
  const [isChecked] = reactExports.useState(false);
  const [activeTab, setActiveTab] = reactExports.useState(0);
  const search2 = reactExports.useRef(null);
  const { data: playlists2 } = playlistsAPI.useGetMyPlaylistsQuery({});
  const videos = playlists2 == null ? void 0 : playlists2.results[0].videos;
  console.log(videos);
  const makeSearch = useDebounce(() => {
    var _a;
    const data2 = ((_a = search2.current) == null ? void 0 : _a.value) || "";
    if (data2) {
      setParams({ search: data2 });
    } else {
      setParams({});
    }
  }, 500);
  const onSearch = () => {
    makeSearch();
  };
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs("div", { className: "flex gap-[5px] pb-[12px]", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "hover:bg-white-hover pl-3 w-[45px] h-[40px] rounded-[9px] border-[#EDEFF3] border-[1px]",
          children: /* @__PURE__ */ jsx("img", { src: backIcon, alt: "backIcon" })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            ref: search2,
            onChange: onSearch,
            defaultValue: params.get("search") ?? "",
            placeholder: "Какие слова ищем в этом курсе?",
            className: "w-[940px] h-[40px] focus:outline-none focus:border-light-gray self-end pl-[16px] pr-[45px] pt-[7px] pb-[10px] border-[#EDEFF3] border-[1px] rounded-[9px] text-[16px] text-dark-blue"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute right-[2%] top-[20%]", children: /* @__PURE__ */ jsx(SearchIcon, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(Toggle, { title: "Искать по точному совпадению", checked: isChecked, onChange: () => {
      } }) }),
      /* @__PURE__ */ jsx(Tabs, { activeTab, onChange: (index2) => setActiveTab(index2) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "relative flex flex-col h-[412px] scroll-bar overflow-y-scroll", children: activeTab === 0 ? /* @__PURE__ */ jsxs("div", { children: [
      videos && !params.get("search") && videos.map((video2) => /* @__PURE__ */ jsx(
        SearchVideoCard,
        {
          video: video2
        },
        video2.publicId
      )),
      /* @__PURE__ */ jsx(ResultVideoInnerWithScreenShot, { search: search2 })
    ] }) : activeTab === 1 ? /* @__PURE__ */ jsx(ResultVideoInnerWithScreenShot, { search: search2 }) : activeTab === 2 ? /* @__PURE__ */ jsx(Fragment, { children: videos && (videos == null ? void 0 : videos.map((video2) => /* @__PURE__ */ jsx(
      SearchVideoCard,
      {
        video: video2
      },
      video2.publicId
    ))) }) : /* @__PURE__ */ jsx(Fragment, {}) })
  ] });
};
const SearchLayout = () => {
  return /* @__PURE__ */ jsx("div", { className: "w-[100vw] h-[100vh] bg-white-hover", children: /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-[14px] w-full h-full bg-white", children: /* @__PURE__ */ jsx(SearchResultPage, {}) }) });
};
const App = () => {
  return /* @__PURE__ */ jsxs(Routes, { children: [
    /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(VideoLayout, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "quiz", element: /* @__PURE__ */ jsx(QuizPage, {}) }),
    /* @__PURE__ */ jsx(Route, { path: "search", element: /* @__PURE__ */ jsx(SearchLayout, {}), children: /* @__PURE__ */ jsx(Route, { index: true, element: /* @__PURE__ */ jsx(SearchResultPage, {}) }) })
  ] });
};
const rootElement = document.getElementById("root");
if (rootElement) {
  const root2 = client.createRoot(rootElement);
  root2.render(
    /* @__PURE__ */ jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(App, {}) }) }) })
  );
} else {
  console.error("Root element not found");
}
//# sourceMappingURL=index-B2RrzH4-.js.map
