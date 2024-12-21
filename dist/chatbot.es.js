import { useState as ze, useRef as ot, useEffect as kr } from "https://esm.sh/react@18.2.0";
function Rn(f) {
  return f && f.__esModule && Object.prototype.hasOwnProperty.call(f, "default") ? f.default : f;
}
var Sr = { exports: {} }, tr = {}, Or = { exports: {} }, U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var At;
function Tn() {
  if (At) return U;
  At = 1;
  var f = Symbol.for("react.element"), s = Symbol.for("react.portal"), E = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), $ = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), M = Symbol.iterator;
  function V(n) {
    return n === null || typeof n != "object" ? null : (n = M && n[M] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var L = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, H = Object.assign, B = {};
  function J(n, i, y) {
    this.props = n, this.context = i, this.refs = B, this.updater = y || L;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(n, i) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, i, "setState");
  }, J.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function te() {
  }
  te.prototype = J.prototype;
  function G(n, i, y) {
    this.props = n, this.context = i, this.refs = B, this.updater = y || L;
  }
  var F = G.prototype = new te();
  F.constructor = G, H(F, J.prototype), F.isPureReactComponent = !0;
  var W = Array.isArray, d = Object.prototype.hasOwnProperty, oe = { current: null }, _e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Re(n, i, y) {
    var v, _ = {}, R = null, T = null;
    if (i != null) for (v in i.ref !== void 0 && (T = i.ref), i.key !== void 0 && (R = "" + i.key), i) d.call(i, v) && !_e.hasOwnProperty(v) && (_[v] = i[v]);
    var C = arguments.length - 2;
    if (C === 1) _.children = y;
    else if (1 < C) {
      for (var O = Array(C), j = 0; j < C; j++) O[j] = arguments[j + 2];
      _.children = O;
    }
    if (n && n.defaultProps) for (v in C = n.defaultProps, C) _[v] === void 0 && (_[v] = C[v]);
    return { $$typeof: f, type: n, key: R, ref: T, props: _, _owner: oe.current };
  }
  function Te(n, i) {
    return { $$typeof: f, type: n.type, key: i, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function we(n) {
    return typeof n == "object" && n !== null && n.$$typeof === f;
  }
  function Oe(n) {
    var i = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(y) {
      return i[y];
    });
  }
  var Ce = /\/+/g;
  function de(n, i) {
    return typeof n == "object" && n !== null && n.key != null ? Oe("" + n.key) : i.toString(36);
  }
  function fe(n, i, y, v, _) {
    var R = typeof n;
    (R === "undefined" || R === "boolean") && (n = null);
    var T = !1;
    if (n === null) T = !0;
    else switch (R) {
      case "string":
      case "number":
        T = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case f:
          case s:
            T = !0;
        }
    }
    if (T) return T = n, _ = _(T), n = v === "" ? "." + de(T, 0) : v, W(_) ? (y = "", n != null && (y = n.replace(Ce, "$&/") + "/"), fe(_, i, y, "", function(j) {
      return j;
    })) : _ != null && (we(_) && (_ = Te(_, y + (!_.key || T && T.key === _.key ? "" : ("" + _.key).replace(Ce, "$&/") + "/") + n)), i.push(_)), 1;
    if (T = 0, v = v === "" ? "." : v + ":", W(n)) for (var C = 0; C < n.length; C++) {
      R = n[C];
      var O = v + de(R, C);
      T += fe(R, i, y, O, _);
    }
    else if (O = V(n), typeof O == "function") for (n = O.call(n), C = 0; !(R = n.next()).done; ) R = R.value, O = v + de(R, C++), T += fe(R, i, y, O, _);
    else if (R === "object") throw i = String(n), Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
    return T;
  }
  function le(n, i, y) {
    if (n == null) return n;
    var v = [], _ = 0;
    return fe(n, v, "", "", function(R) {
      return i.call(y, R, _++);
    }), v;
  }
  function ue(n) {
    if (n._status === -1) {
      var i = n._result;
      i = i(), i.then(function(y) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = y);
      }, function(y) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = y);
      }), n._status === -1 && (n._status = 0, n._result = i);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var S = { current: null }, be = { transition: null }, Se = { ReactCurrentDispatcher: S, ReactCurrentBatchConfig: be, ReactCurrentOwner: oe };
  function c() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return U.Children = { map: le, forEach: function(n, i, y) {
    le(n, function() {
      i.apply(this, arguments);
    }, y);
  }, count: function(n) {
    var i = 0;
    return le(n, function() {
      i++;
    }), i;
  }, toArray: function(n) {
    return le(n, function(i) {
      return i;
    }) || [];
  }, only: function(n) {
    if (!we(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, U.Component = J, U.Fragment = E, U.Profiler = x, U.PureComponent = G, U.StrictMode = m, U.Suspense = k, U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, U.act = c, U.cloneElement = function(n, i, y) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var v = H({}, n.props), _ = n.key, R = n.ref, T = n._owner;
    if (i != null) {
      if (i.ref !== void 0 && (R = i.ref, T = oe.current), i.key !== void 0 && (_ = "" + i.key), n.type && n.type.defaultProps) var C = n.type.defaultProps;
      for (O in i) d.call(i, O) && !_e.hasOwnProperty(O) && (v[O] = i[O] === void 0 && C !== void 0 ? C[O] : i[O]);
    }
    var O = arguments.length - 2;
    if (O === 1) v.children = y;
    else if (1 < O) {
      C = Array(O);
      for (var j = 0; j < O; j++) C[j] = arguments[j + 2];
      v.children = C;
    }
    return { $$typeof: f, type: n.type, key: _, ref: R, props: v, _owner: T };
  }, U.createContext = function(n) {
    return n = { $$typeof: $, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: g, _context: n }, n.Consumer = n;
  }, U.createElement = Re, U.createFactory = function(n) {
    var i = Re.bind(null, n);
    return i.type = n, i;
  }, U.createRef = function() {
    return { current: null };
  }, U.forwardRef = function(n) {
    return { $$typeof: P, render: n };
  }, U.isValidElement = we, U.lazy = function(n) {
    return { $$typeof: b, _payload: { _status: -1, _result: n }, _init: ue };
  }, U.memo = function(n, i) {
    return { $$typeof: A, type: n, compare: i === void 0 ? null : i };
  }, U.startTransition = function(n) {
    var i = be.transition;
    be.transition = {};
    try {
      n();
    } finally {
      be.transition = i;
    }
  }, U.unstable_act = c, U.useCallback = function(n, i) {
    return S.current.useCallback(n, i);
  }, U.useContext = function(n) {
    return S.current.useContext(n);
  }, U.useDebugValue = function() {
  }, U.useDeferredValue = function(n) {
    return S.current.useDeferredValue(n);
  }, U.useEffect = function(n, i) {
    return S.current.useEffect(n, i);
  }, U.useId = function() {
    return S.current.useId();
  }, U.useImperativeHandle = function(n, i, y) {
    return S.current.useImperativeHandle(n, i, y);
  }, U.useInsertionEffect = function(n, i) {
    return S.current.useInsertionEffect(n, i);
  }, U.useLayoutEffect = function(n, i) {
    return S.current.useLayoutEffect(n, i);
  }, U.useMemo = function(n, i) {
    return S.current.useMemo(n, i);
  }, U.useReducer = function(n, i, y) {
    return S.current.useReducer(n, i, y);
  }, U.useRef = function(n) {
    return S.current.useRef(n);
  }, U.useState = function(n) {
    return S.current.useState(n);
  }, U.useSyncExternalStore = function(n, i, y) {
    return S.current.useSyncExternalStore(n, i, y);
  }, U.useTransition = function() {
    return S.current.useTransition();
  }, U.version = "18.3.1", U;
}
var ar = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ar.exports;
var It;
function wn() {
  return It || (It = 1, function(f, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var E = "18.3.1", m = Symbol.for("react.element"), x = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), $ = Symbol.for("react.strict_mode"), P = Symbol.for("react.profiler"), k = Symbol.for("react.provider"), A = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), V = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), H = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), J = Symbol.iterator, te = "@@iterator";
      function G(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = J && e[J] || e[te];
        return typeof r == "function" ? r : null;
      }
      var F = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, W = {
        transition: null
      }, d = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, oe = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, _e = {}, Re = null;
      function Te(e) {
        Re = e;
      }
      _e.setExtraStackFrame = function(e) {
        Re = e;
      }, _e.getCurrentStack = null, _e.getStackAddendum = function() {
        var e = "";
        Re && (e += Re);
        var r = _e.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var we = !1, Oe = !1, Ce = !1, de = !1, fe = !1, le = {
        ReactCurrentDispatcher: F,
        ReactCurrentBatchConfig: W,
        ReactCurrentOwner: oe
      };
      le.ReactDebugCurrentFrame = _e, le.ReactCurrentActQueue = d;
      function ue(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          be("warn", e, a);
        }
      }
      function S(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          be("error", e, a);
        }
      }
      function be(e, r, a) {
        {
          var o = le.ReactDebugCurrentFrame, p = o.getStackAddendum();
          p !== "" && (r += "%s", a = a.concat([p]));
          var I = a.map(function(w) {
            return String(w);
          });
          I.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, I);
        }
      }
      var Se = {};
      function c(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", p = o + "." + r;
          if (Se[p])
            return;
          S("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Se[p] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          c(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          c(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          c(e, "setState");
        }
      }, i = Object.assign, y = {};
      Object.freeze(y);
      function v(e, r, a) {
        this.props = e, this.context = r, this.refs = y, this.updater = a || n;
      }
      v.prototype.isReactComponent = {}, v.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, v.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var _ = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, R = function(e, r) {
          Object.defineProperty(v.prototype, e, {
            get: function() {
              ue("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var T in _)
          _.hasOwnProperty(T) && R(T, _[T]);
      }
      function C() {
      }
      C.prototype = v.prototype;
      function O(e, r, a) {
        this.props = e, this.context = r, this.refs = y, this.updater = a || n;
      }
      var j = O.prototype = new C();
      j.constructor = O, i(j, v.prototype), j.isPureReactComponent = !0;
      function ve() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var h = Array.isArray;
      function ye(e) {
        return h(e);
      }
      function Ae(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function xe(e) {
        try {
          return Ie(e), !1;
        } catch {
          return !0;
        }
      }
      function Ie(e) {
        return "" + e;
      }
      function Ne(e) {
        if (xe(e))
          return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ae(e)), Ie(e);
      }
      function sr(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var p = r.displayName || r.name || "";
        return p !== "" ? a + "(" + p + ")" : a;
      }
      function Le(e) {
        return e.displayName || "Context";
      }
      function Pe(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case g:
            return "Fragment";
          case x:
            return "Portal";
          case P:
            return "Profiler";
          case $:
            return "StrictMode";
          case M:
            return "Suspense";
          case V:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case A:
              var r = e;
              return Le(r) + ".Consumer";
            case k:
              var a = e;
              return Le(a._context) + ".Provider";
            case b:
              return sr(e, e.render, "ForwardRef");
            case L:
              var o = e.displayName || null;
              return o !== null ? o : Pe(e.type) || "Memo";
            case H: {
              var p = e, I = p._payload, w = p._init;
              try {
                return Pe(w(I));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var We = Object.prototype.hasOwnProperty, Be = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, ur, cr, Ke;
      Ke = {};
      function Xe(e) {
        if (We.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function $e(e) {
        if (We.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Ar(e, r) {
        var a = function() {
          ur || (ur = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function fr(e, r) {
        var a = function() {
          cr || (cr = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function lr(e) {
        if (typeof e.ref == "string" && oe.current && e.__self && oe.current.stateNode !== e.__self) {
          var r = Pe(oe.current.type);
          Ke[r] || (S('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ke[r] = !0);
        }
      }
      var Ye = function(e, r, a, o, p, I, w) {
        var N = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: m,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: w,
          // Record the component responsible for creating this element.
          _owner: I
        };
        return N._store = {}, Object.defineProperty(N._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(N, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(N, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
      };
      function Ir(e, r, a) {
        var o, p = {}, I = null, w = null, N = null, z = null;
        if (r != null) {
          Xe(r) && (w = r.ref, lr(r)), $e(r) && (Ne(r.key), I = "" + r.key), N = r.__self === void 0 ? null : r.__self, z = r.__source === void 0 ? null : r.__source;
          for (o in r)
            We.call(r, o) && !Be.hasOwnProperty(o) && (p[o] = r[o]);
        }
        var re = arguments.length - 2;
        if (re === 1)
          p.children = a;
        else if (re > 1) {
          for (var ne = Array(re), ae = 0; ae < re; ae++)
            ne[ae] = arguments[ae + 2];
          Object.freeze && Object.freeze(ne), p.children = ne;
        }
        if (e && e.defaultProps) {
          var se = e.defaultProps;
          for (o in se)
            p[o] === void 0 && (p[o] = se[o]);
        }
        if (I || w) {
          var pe = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          I && Ar(p, pe), w && fr(p, pe);
        }
        return Ye(e, I, w, N, z, oe.current, p);
      }
      function $r(e, r) {
        var a = Ye(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Dr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, p = i({}, e.props), I = e.key, w = e.ref, N = e._self, z = e._source, re = e._owner;
        if (r != null) {
          Xe(r) && (w = r.ref, re = oe.current), $e(r) && (Ne(r.key), I = "" + r.key);
          var ne;
          e.type && e.type.defaultProps && (ne = e.type.defaultProps);
          for (o in r)
            We.call(r, o) && !Be.hasOwnProperty(o) && (r[o] === void 0 && ne !== void 0 ? p[o] = ne[o] : p[o] = r[o]);
        }
        var ae = arguments.length - 2;
        if (ae === 1)
          p.children = a;
        else if (ae > 1) {
          for (var se = Array(ae), pe = 0; pe < ae; pe++)
            se[pe] = arguments[pe + 2];
          p.children = se;
        }
        return Ye(e.type, I, w, N, z, re, p);
      }
      function De(e) {
        return typeof e == "object" && e !== null && e.$$typeof === m;
      }
      var dr = ".", Mr = ":";
      function Fr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(p) {
          return a[p];
        });
        return "$" + o;
      }
      var He = !1, pr = /\/+/g;
      function ke(e) {
        return e.replace(pr, "$&/");
      }
      function Ue(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Ne(e.key), Fr("" + e.key)) : r.toString(36);
      }
      function Me(e, r, a, o, p) {
        var I = typeof e;
        (I === "undefined" || I === "boolean") && (e = null);
        var w = !1;
        if (e === null)
          w = !0;
        else
          switch (I) {
            case "string":
            case "number":
              w = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case m:
                case x:
                  w = !0;
              }
          }
        if (w) {
          var N = e, z = p(N), re = o === "" ? dr + Ue(N, 0) : o;
          if (ye(z)) {
            var ne = "";
            re != null && (ne = ke(re) + "/"), Me(z, r, ne, "", function(En) {
              return En;
            });
          } else z != null && (De(z) && (z.key && (!N || N.key !== z.key) && Ne(z.key), z = $r(
            z,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (z.key && (!N || N.key !== z.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              ke("" + z.key) + "/"
            ) : "") + re
          )), r.push(z));
          return 1;
        }
        var ae, se, pe = 0, me = o === "" ? dr : o + Mr;
        if (ye(e))
          for (var Cr = 0; Cr < e.length; Cr++)
            ae = e[Cr], se = me + Ue(ae, Cr), pe += Me(ae, r, a, se, p);
        else {
          var Qr = G(e);
          if (typeof Qr == "function") {
            var xt = e;
            Qr === xt.entries && (He || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), He = !0);
            for (var bn = Qr.call(xt), kt, _n = 0; !(kt = bn.next()).done; )
              ae = kt.value, se = me + Ue(ae, _n++), pe += Me(ae, r, a, se, p);
          } else if (I === "object") {
            var jt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (jt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : jt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return pe;
      }
      function Ve(e, r, a) {
        if (e == null)
          return e;
        var o = [], p = 0;
        return Me(e, o, "", "", function(I) {
          return r.call(a, I, p++);
        }), o;
      }
      function Nr(e) {
        var r = 0;
        return Ve(e, function() {
          r++;
        }), r;
      }
      function vr(e, r, a) {
        Ve(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function Lr(e) {
        return Ve(e, function(r) {
          return r;
        }) || [];
      }
      function yr(e) {
        if (!De(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function hr(e) {
        var r = {
          $$typeof: A,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: k,
          _context: r
        };
        var a = !1, o = !1, p = !1;
        {
          var I = {
            $$typeof: A,
            _context: r
          };
          Object.defineProperties(I, {
            Provider: {
              get: function() {
                return o || (o = !0, S("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(w) {
                r.Provider = w;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(w) {
                r._currentValue = w;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(w) {
                r._currentValue2 = w;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(w) {
                r._threadCount = w;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, S("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(w) {
                p || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", w), p = !0);
              }
            }
          }), r.Consumer = I;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var qe = -1, Qe = 0, Ze = 1, mr = 2;
      function Wr(e) {
        if (e._status === qe) {
          var r = e._result, a = r();
          if (a.then(function(I) {
            if (e._status === Qe || e._status === qe) {
              var w = e;
              w._status = Ze, w._result = I;
            }
          }, function(I) {
            if (e._status === Qe || e._status === qe) {
              var w = e;
              w._status = mr, w._result = I;
            }
          }), e._status === qe) {
            var o = e;
            o._status = Qe, o._result = a;
          }
        }
        if (e._status === Ze) {
          var p = e._result;
          return p === void 0 && S(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, p), "default" in p || S(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, p), p.default;
        } else
          throw e._result;
      }
      function Yr(e) {
        var r = {
          // We use these fields to store the result.
          _status: qe,
          _result: e
        }, a = {
          $$typeof: H,
          _payload: r,
          _init: Wr
        };
        {
          var o, p;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(I) {
                S("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = I, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(I) {
                S("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = I, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Ur(e) {
        e != null && e.$$typeof === L ? S("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? S("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && S("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && S("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: b,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var gr;
      gr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === g || e === P || fe || e === $ || e === M || e === V || de || e === B || we || Oe || Ce || typeof e == "object" && e !== null && (e.$$typeof === H || e.$$typeof === L || e.$$typeof === k || e.$$typeof === A || e.$$typeof === b || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === gr || e.getModuleId !== void 0));
      }
      function u(e, r) {
        t(e) || S("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: L,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(p) {
              o = p, !e.name && !e.displayName && (e.displayName = p);
            }
          });
        }
        return a;
      }
      function l() {
        var e = F.current;
        return e === null && S(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function D(e) {
        var r = l();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? S("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && S("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function K(e) {
        var r = l();
        return r.useState(e);
      }
      function ee(e, r, a) {
        var o = l();
        return o.useReducer(e, r, a);
      }
      function q(e) {
        var r = l();
        return r.useRef(e);
      }
      function Y(e, r) {
        var a = l();
        return a.useEffect(e, r);
      }
      function he(e, r) {
        var a = l();
        return a.useInsertionEffect(e, r);
      }
      function ie(e, r) {
        var a = l();
        return a.useLayoutEffect(e, r);
      }
      function ce(e, r) {
        var a = l();
        return a.useCallback(e, r);
      }
      function Ee(e, r) {
        var a = l();
        return a.useMemo(e, r);
      }
      function Fe(e, r, a) {
        var o = l();
        return o.useImperativeHandle(e, r, a);
      }
      function je(e, r) {
        {
          var a = l();
          return a.useDebugValue(e, r);
        }
      }
      function ge() {
        var e = l();
        return e.useTransition();
      }
      function er(e) {
        var r = l();
        return r.useDeferredValue(e);
      }
      function Vr() {
        var e = l();
        return e.useId();
      }
      function qr(e, r, a) {
        var o = l();
        return o.useSyncExternalStore(e, r, a);
      }
      var rr = 0, ut, ct, ft, lt, dt, pt, vt;
      function yt() {
      }
      yt.__reactDisabledLog = !0;
      function en() {
        {
          if (rr === 0) {
            ut = console.log, ct = console.info, ft = console.warn, lt = console.error, dt = console.group, pt = console.groupCollapsed, vt = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: yt,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          rr++;
        }
      }
      function rn() {
        {
          if (rr--, rr === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: i({}, e, {
                value: ut
              }),
              info: i({}, e, {
                value: ct
              }),
              warn: i({}, e, {
                value: ft
              }),
              error: i({}, e, {
                value: lt
              }),
              group: i({}, e, {
                value: dt
              }),
              groupCollapsed: i({}, e, {
                value: pt
              }),
              groupEnd: i({}, e, {
                value: vt
              })
            });
          }
          rr < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var zr = le.ReactCurrentDispatcher, Br;
      function br(e, r, a) {
        {
          if (Br === void 0)
            try {
              throw Error();
            } catch (p) {
              var o = p.stack.trim().match(/\n( *(at )?)/);
              Br = o && o[1] || "";
            }
          return `
` + Br + e;
        }
      }
      var Kr = !1, _r;
      {
        var tn = typeof WeakMap == "function" ? WeakMap : Map;
        _r = new tn();
      }
      function ht(e, r) {
        if (!e || Kr)
          return "";
        {
          var a = _r.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Kr = !0;
        var p = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var I;
        I = zr.current, zr.current = null, en();
        try {
          if (r) {
            var w = function() {
              throw Error();
            };
            if (Object.defineProperty(w.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(w, []);
              } catch (me) {
                o = me;
              }
              Reflect.construct(e, [], w);
            } else {
              try {
                w.call();
              } catch (me) {
                o = me;
              }
              e.call(w.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (me) {
              o = me;
            }
            e();
          }
        } catch (me) {
          if (me && o && typeof me.stack == "string") {
            for (var N = me.stack.split(`
`), z = o.stack.split(`
`), re = N.length - 1, ne = z.length - 1; re >= 1 && ne >= 0 && N[re] !== z[ne]; )
              ne--;
            for (; re >= 1 && ne >= 0; re--, ne--)
              if (N[re] !== z[ne]) {
                if (re !== 1 || ne !== 1)
                  do
                    if (re--, ne--, ne < 0 || N[re] !== z[ne]) {
                      var ae = `
` + N[re].replace(" at new ", " at ");
                      return e.displayName && ae.includes("<anonymous>") && (ae = ae.replace("<anonymous>", e.displayName)), typeof e == "function" && _r.set(e, ae), ae;
                    }
                  while (re >= 1 && ne >= 0);
                break;
              }
          }
        } finally {
          Kr = !1, zr.current = I, rn(), Error.prepareStackTrace = p;
        }
        var se = e ? e.displayName || e.name : "", pe = se ? br(se) : "";
        return typeof e == "function" && _r.set(e, pe), pe;
      }
      function nn(e, r, a) {
        return ht(e, !1);
      }
      function an(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function Er(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return ht(e, an(e));
        if (typeof e == "string")
          return br(e);
        switch (e) {
          case M:
            return br("Suspense");
          case V:
            return br("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case b:
              return nn(e.render);
            case L:
              return Er(e.type, r, a);
            case H: {
              var o = e, p = o._payload, I = o._init;
              try {
                return Er(I(p), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var mt = {}, gt = le.ReactDebugCurrentFrame;
      function Rr(e) {
        if (e) {
          var r = e._owner, a = Er(e.type, e._source, r ? r.type : null);
          gt.setExtraStackFrame(a);
        } else
          gt.setExtraStackFrame(null);
      }
      function on(e, r, a, o, p) {
        {
          var I = Function.call.bind(We);
          for (var w in e)
            if (I(e, w)) {
              var N = void 0;
              try {
                if (typeof e[w] != "function") {
                  var z = Error((o || "React class") + ": " + a + " type `" + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[w] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw z.name = "Invariant Violation", z;
                }
                N = e[w](r, w, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (re) {
                N = re;
              }
              N && !(N instanceof Error) && (Rr(p), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, w, typeof N), Rr(null)), N instanceof Error && !(N.message in mt) && (mt[N.message] = !0, Rr(p), S("Failed %s type: %s", a, N.message), Rr(null));
            }
        }
      }
      function Ge(e) {
        if (e) {
          var r = e._owner, a = Er(e.type, e._source, r ? r.type : null);
          Te(a);
        } else
          Te(null);
      }
      var Hr;
      Hr = !1;
      function bt() {
        if (oe.current) {
          var e = Pe(oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function sn(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function un(e) {
        return e != null ? sn(e.__source) : "";
      }
      var _t = {};
      function cn(e) {
        var r = bt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function Et(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = cn(r);
          if (!_t[a]) {
            _t[a] = !0;
            var o = "";
            e && e._owner && e._owner !== oe.current && (o = " It was passed a child from " + Pe(e._owner.type) + "."), Ge(e), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ge(null);
          }
        }
      }
      function Rt(e, r) {
        if (typeof e == "object") {
          if (ye(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              De(o) && Et(o, r);
            }
          else if (De(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var p = G(e);
            if (typeof p == "function" && p !== e.entries)
              for (var I = p.call(e), w; !(w = I.next()).done; )
                De(w.value) && Et(w.value, r);
          }
        }
      }
      function Tt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === L))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = Pe(r);
            on(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Hr) {
            Hr = !0;
            var p = Pe(r);
            S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function fn(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ge(e), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ge(null);
              break;
            }
          }
          e.ref !== null && (Ge(e), S("Invalid attribute `ref` supplied to `React.Fragment`."), Ge(null));
        }
      }
      function wt(e, r, a) {
        var o = t(e);
        if (!o) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = un(r);
          I ? p += I : p += bt();
          var w;
          e === null ? w = "null" : ye(e) ? w = "array" : e !== void 0 && e.$$typeof === m ? (w = "<" + (Pe(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, S("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, p);
        }
        var N = Ir.apply(this, arguments);
        if (N == null)
          return N;
        if (o)
          for (var z = 2; z < arguments.length; z++)
            Rt(arguments[z], e);
        return e === g ? fn(N) : Tt(N), N;
      }
      var Ct = !1;
      function ln(e) {
        var r = wt.bind(null, e);
        return r.type = e, Ct || (Ct = !0, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function dn(e, r, a) {
        for (var o = Dr.apply(this, arguments), p = 2; p < arguments.length; p++)
          Rt(arguments[p], o.type);
        return Tt(o), o;
      }
      function pn(e, r) {
        var a = W.transition;
        W.transition = {};
        var o = W.transition;
        W.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (W.transition = a, a === null && o._updatedFibers) {
            var p = o._updatedFibers.size;
            p > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var St = !1, Tr = null;
      function vn(e) {
        if (Tr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = f && f[r];
            Tr = a.call(f, "timers").setImmediate;
          } catch {
            Tr = function(p) {
              St === !1 && (St = !0, typeof MessageChannel > "u" && S("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var I = new MessageChannel();
              I.port1.onmessage = p, I.port2.postMessage(void 0);
            };
          }
        return Tr(e);
      }
      var Je = 0, Ot = !1;
      function Pt(e) {
        {
          var r = Je;
          Je++, d.current === null && (d.current = []);
          var a = d.isBatchingLegacy, o;
          try {
            if (d.isBatchingLegacy = !0, o = e(), !a && d.didScheduleLegacyUpdate) {
              var p = d.current;
              p !== null && (d.didScheduleLegacyUpdate = !1, Xr(p));
            }
          } catch (se) {
            throw wr(r), se;
          } finally {
            d.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var I = o, w = !1, N = {
              then: function(se, pe) {
                w = !0, I.then(function(me) {
                  wr(r), Je === 0 ? Gr(me, se, pe) : se(me);
                }, function(me) {
                  wr(r), pe(me);
                });
              }
            };
            return !Ot && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              w || (Ot = !0, S("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), N;
          } else {
            var z = o;
            if (wr(r), Je === 0) {
              var re = d.current;
              re !== null && (Xr(re), d.current = null);
              var ne = {
                then: function(se, pe) {
                  d.current === null ? (d.current = [], Gr(z, se, pe)) : se(z);
                }
              };
              return ne;
            } else {
              var ae = {
                then: function(se, pe) {
                  se(z);
                }
              };
              return ae;
            }
          }
        }
      }
      function wr(e) {
        e !== Je - 1 && S("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Je = e;
      }
      function Gr(e, r, a) {
        {
          var o = d.current;
          if (o !== null)
            try {
              Xr(o), vn(function() {
                o.length === 0 ? (d.current = null, r(e)) : Gr(e, r, a);
              });
            } catch (p) {
              a(p);
            }
          else
            r(e);
        }
      }
      var Jr = !1;
      function Xr(e) {
        if (!Jr) {
          Jr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Jr = !1;
          }
        }
      }
      var yn = wt, hn = dn, mn = ln, gn = {
        map: Ve,
        forEach: vr,
        count: Nr,
        toArray: Lr,
        only: yr
      };
      s.Children = gn, s.Component = v, s.Fragment = g, s.Profiler = P, s.PureComponent = O, s.StrictMode = $, s.Suspense = M, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = le, s.act = Pt, s.cloneElement = hn, s.createContext = hr, s.createElement = yn, s.createFactory = mn, s.createRef = ve, s.forwardRef = Ur, s.isValidElement = De, s.lazy = Yr, s.memo = u, s.startTransition = pn, s.unstable_act = Pt, s.useCallback = ce, s.useContext = D, s.useDebugValue = je, s.useDeferredValue = er, s.useEffect = Y, s.useId = Vr, s.useImperativeHandle = Fe, s.useInsertionEffect = he, s.useLayoutEffect = ie, s.useMemo = Ee, s.useReducer = ee, s.useRef = q, s.useState = K, s.useSyncExternalStore = qr, s.useTransition = ge, s.version = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ar, ar.exports)), ar.exports;
}
var $t;
function it() {
  return $t || ($t = 1, process.env.NODE_ENV === "production" ? Or.exports = Tn() : Or.exports = wn()), Or.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dt;
function Cn() {
  if (Dt) return tr;
  Dt = 1;
  var f = it(), s = Symbol.for("react.element"), E = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, x = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function $(P, k, A) {
    var b, M = {}, V = null, L = null;
    A !== void 0 && (V = "" + A), k.key !== void 0 && (V = "" + k.key), k.ref !== void 0 && (L = k.ref);
    for (b in k) m.call(k, b) && !g.hasOwnProperty(b) && (M[b] = k[b]);
    if (P && P.defaultProps) for (b in k = P.defaultProps, k) M[b] === void 0 && (M[b] = k[b]);
    return { $$typeof: s, type: P, key: V, ref: L, props: M, _owner: x.current };
  }
  return tr.Fragment = E, tr.jsx = $, tr.jsxs = $, tr;
}
var nr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mt;
function Sn() {
  return Mt || (Mt = 1, process.env.NODE_ENV !== "production" && function() {
    var f = it(), s = Symbol.for("react.element"), E = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), P = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), A = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), H = Symbol.iterator, B = "@@iterator";
    function J(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = H && t[H] || t[B];
      return typeof u == "function" ? u : null;
    }
    var te = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function G(t) {
      {
        for (var u = arguments.length, l = new Array(u > 1 ? u - 1 : 0), D = 1; D < u; D++)
          l[D - 1] = arguments[D];
        F("error", t, l);
      }
    }
    function F(t, u, l) {
      {
        var D = te.ReactDebugCurrentFrame, K = D.getStackAddendum();
        K !== "" && (u += "%s", l = l.concat([K]));
        var ee = l.map(function(q) {
          return String(q);
        });
        ee.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, ee);
      }
    }
    var W = !1, d = !1, oe = !1, _e = !1, Re = !1, Te;
    Te = Symbol.for("react.module.reference");
    function we(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === m || t === g || Re || t === x || t === A || t === b || _e || t === L || W || d || oe || typeof t == "object" && t !== null && (t.$$typeof === V || t.$$typeof === M || t.$$typeof === $ || t.$$typeof === P || t.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Te || t.getModuleId !== void 0));
    }
    function Oe(t, u, l) {
      var D = t.displayName;
      if (D)
        return D;
      var K = u.displayName || u.name || "";
      return K !== "" ? l + "(" + K + ")" : l;
    }
    function Ce(t) {
      return t.displayName || "Context";
    }
    function de(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && G("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case m:
          return "Fragment";
        case E:
          return "Portal";
        case g:
          return "Profiler";
        case x:
          return "StrictMode";
        case A:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case P:
            var u = t;
            return Ce(u) + ".Consumer";
          case $:
            var l = t;
            return Ce(l._context) + ".Provider";
          case k:
            return Oe(t, t.render, "ForwardRef");
          case M:
            var D = t.displayName || null;
            return D !== null ? D : de(t.type) || "Memo";
          case V: {
            var K = t, ee = K._payload, q = K._init;
            try {
              return de(q(ee));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var fe = Object.assign, le = 0, ue, S, be, Se, c, n, i;
    function y() {
    }
    y.__reactDisabledLog = !0;
    function v() {
      {
        if (le === 0) {
          ue = console.log, S = console.info, be = console.warn, Se = console.error, c = console.group, n = console.groupCollapsed, i = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: y,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        le++;
      }
    }
    function _() {
      {
        if (le--, le === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: fe({}, t, {
              value: ue
            }),
            info: fe({}, t, {
              value: S
            }),
            warn: fe({}, t, {
              value: be
            }),
            error: fe({}, t, {
              value: Se
            }),
            group: fe({}, t, {
              value: c
            }),
            groupCollapsed: fe({}, t, {
              value: n
            }),
            groupEnd: fe({}, t, {
              value: i
            })
          });
        }
        le < 0 && G("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var R = te.ReactCurrentDispatcher, T;
    function C(t, u, l) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (K) {
            var D = K.stack.trim().match(/\n( *(at )?)/);
            T = D && D[1] || "";
          }
        return `
` + T + t;
      }
    }
    var O = !1, j;
    {
      var ve = typeof WeakMap == "function" ? WeakMap : Map;
      j = new ve();
    }
    function h(t, u) {
      if (!t || O)
        return "";
      {
        var l = j.get(t);
        if (l !== void 0)
          return l;
      }
      var D;
      O = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ee;
      ee = R.current, R.current = null, v();
      try {
        if (u) {
          var q = function() {
            throw Error();
          };
          if (Object.defineProperty(q.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(q, []);
            } catch (ge) {
              D = ge;
            }
            Reflect.construct(t, [], q);
          } else {
            try {
              q.call();
            } catch (ge) {
              D = ge;
            }
            t.call(q.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            D = ge;
          }
          t();
        }
      } catch (ge) {
        if (ge && D && typeof ge.stack == "string") {
          for (var Y = ge.stack.split(`
`), he = D.stack.split(`
`), ie = Y.length - 1, ce = he.length - 1; ie >= 1 && ce >= 0 && Y[ie] !== he[ce]; )
            ce--;
          for (; ie >= 1 && ce >= 0; ie--, ce--)
            if (Y[ie] !== he[ce]) {
              if (ie !== 1 || ce !== 1)
                do
                  if (ie--, ce--, ce < 0 || Y[ie] !== he[ce]) {
                    var Ee = `
` + Y[ie].replace(" at new ", " at ");
                    return t.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", t.displayName)), typeof t == "function" && j.set(t, Ee), Ee;
                  }
                while (ie >= 1 && ce >= 0);
              break;
            }
        }
      } finally {
        O = !1, R.current = ee, _(), Error.prepareStackTrace = K;
      }
      var Fe = t ? t.displayName || t.name : "", je = Fe ? C(Fe) : "";
      return typeof t == "function" && j.set(t, je), je;
    }
    function ye(t, u, l) {
      return h(t, !1);
    }
    function Ae(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function xe(t, u, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return h(t, Ae(t));
      if (typeof t == "string")
        return C(t);
      switch (t) {
        case A:
          return C("Suspense");
        case b:
          return C("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case k:
            return ye(t.render);
          case M:
            return xe(t.type, u, l);
          case V: {
            var D = t, K = D._payload, ee = D._init;
            try {
              return xe(ee(K), u, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Ie = Object.prototype.hasOwnProperty, Ne = {}, sr = te.ReactDebugCurrentFrame;
    function Le(t) {
      if (t) {
        var u = t._owner, l = xe(t.type, t._source, u ? u.type : null);
        sr.setExtraStackFrame(l);
      } else
        sr.setExtraStackFrame(null);
    }
    function Pe(t, u, l, D, K) {
      {
        var ee = Function.call.bind(Ie);
        for (var q in t)
          if (ee(t, q)) {
            var Y = void 0;
            try {
              if (typeof t[q] != "function") {
                var he = Error((D || "React class") + ": " + l + " type `" + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[q] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw he.name = "Invariant Violation", he;
              }
              Y = t[q](u, q, D, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ie) {
              Y = ie;
            }
            Y && !(Y instanceof Error) && (Le(K), G("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", D || "React class", l, q, typeof Y), Le(null)), Y instanceof Error && !(Y.message in Ne) && (Ne[Y.message] = !0, Le(K), G("Failed %s type: %s", l, Y.message), Le(null));
          }
      }
    }
    var We = Array.isArray;
    function Be(t) {
      return We(t);
    }
    function ur(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, l = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function cr(t) {
      try {
        return Ke(t), !1;
      } catch {
        return !0;
      }
    }
    function Ke(t) {
      return "" + t;
    }
    function Xe(t) {
      if (cr(t))
        return G("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(t)), Ke(t);
    }
    var $e = te.ReactCurrentOwner, Ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, fr, lr, Ye;
    Ye = {};
    function Ir(t) {
      if (Ie.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function $r(t) {
      if (Ie.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Dr(t, u) {
      if (typeof t.ref == "string" && $e.current && u && $e.current.stateNode !== u) {
        var l = de($e.current.type);
        Ye[l] || (G('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', de($e.current.type), t.ref), Ye[l] = !0);
      }
    }
    function De(t, u) {
      {
        var l = function() {
          fr || (fr = !0, G("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function dr(t, u) {
      {
        var l = function() {
          lr || (lr = !0, G("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Mr = function(t, u, l, D, K, ee, q) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: l,
        props: q,
        // Record the component responsible for creating this element.
        _owner: ee
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function Fr(t, u, l, D, K) {
      {
        var ee, q = {}, Y = null, he = null;
        l !== void 0 && (Xe(l), Y = "" + l), $r(u) && (Xe(u.key), Y = "" + u.key), Ir(u) && (he = u.ref, Dr(u, K));
        for (ee in u)
          Ie.call(u, ee) && !Ar.hasOwnProperty(ee) && (q[ee] = u[ee]);
        if (t && t.defaultProps) {
          var ie = t.defaultProps;
          for (ee in ie)
            q[ee] === void 0 && (q[ee] = ie[ee]);
        }
        if (Y || he) {
          var ce = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          Y && De(q, ce), he && dr(q, ce);
        }
        return Mr(t, Y, he, K, D, $e.current, q);
      }
    }
    var He = te.ReactCurrentOwner, pr = te.ReactDebugCurrentFrame;
    function ke(t) {
      if (t) {
        var u = t._owner, l = xe(t.type, t._source, u ? u.type : null);
        pr.setExtraStackFrame(l);
      } else
        pr.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function Me(t) {
      return typeof t == "object" && t !== null && t.$$typeof === s;
    }
    function Ve() {
      {
        if (He.current) {
          var t = de(He.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Nr(t) {
      return "";
    }
    var vr = {};
    function Lr(t) {
      {
        var u = Ve();
        if (!u) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (u = `

Check the top-level render call using <` + l + ">.");
        }
        return u;
      }
    }
    function yr(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = Lr(u);
        if (vr[l])
          return;
        vr[l] = !0;
        var D = "";
        t && t._owner && t._owner !== He.current && (D = " It was passed a child from " + de(t._owner.type) + "."), ke(t), G('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, D), ke(null);
      }
    }
    function hr(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Be(t))
          for (var l = 0; l < t.length; l++) {
            var D = t[l];
            Me(D) && yr(D, u);
          }
        else if (Me(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var K = J(t);
          if (typeof K == "function" && K !== t.entries)
            for (var ee = K.call(t), q; !(q = ee.next()).done; )
              Me(q.value) && yr(q.value, u);
        }
      }
    }
    function qe(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var l;
        if (typeof u == "function")
          l = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === M))
          l = u.propTypes;
        else
          return;
        if (l) {
          var D = de(u);
          Pe(l, t.props, "prop", D, t);
        } else if (u.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var K = de(u);
          G("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && G("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qe(t) {
      {
        for (var u = Object.keys(t.props), l = 0; l < u.length; l++) {
          var D = u[l];
          if (D !== "children" && D !== "key") {
            ke(t), G("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", D), ke(null);
            break;
          }
        }
        t.ref !== null && (ke(t), G("Invalid attribute `ref` supplied to `React.Fragment`."), ke(null));
      }
    }
    var Ze = {};
    function mr(t, u, l, D, K, ee) {
      {
        var q = we(t);
        if (!q) {
          var Y = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var he = Nr();
          he ? Y += he : Y += Ve();
          var ie;
          t === null ? ie = "null" : Be(t) ? ie = "array" : t !== void 0 && t.$$typeof === s ? (ie = "<" + (de(t.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : ie = typeof t, G("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ie, Y);
        }
        var ce = Fr(t, u, l, K, ee);
        if (ce == null)
          return ce;
        if (q) {
          var Ee = u.children;
          if (Ee !== void 0)
            if (D)
              if (Be(Ee)) {
                for (var Fe = 0; Fe < Ee.length; Fe++)
                  hr(Ee[Fe], t);
                Object.freeze && Object.freeze(Ee);
              } else
                G("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              hr(Ee, t);
        }
        if (Ie.call(u, "key")) {
          var je = de(t), ge = Object.keys(u).filter(function(qr) {
            return qr !== "key";
          }), er = ge.length > 0 ? "{key: someKey, " + ge.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ze[je + er]) {
            var Vr = ge.length > 0 ? "{" + ge.join(": ..., ") + ": ...}" : "{}";
            G(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, er, je, Vr, je), Ze[je + er] = !0;
          }
        }
        return t === m ? Qe(ce) : qe(ce), ce;
      }
    }
    function Wr(t, u, l) {
      return mr(t, u, l, !0);
    }
    function Yr(t, u, l) {
      return mr(t, u, l, !1);
    }
    var Ur = Yr, gr = Wr;
    nr.Fragment = m, nr.jsx = Ur, nr.jsxs = gr;
  }()), nr;
}
var Ft;
function On() {
  return Ft || (Ft = 1, process.env.NODE_ENV === "production" ? Sr.exports = Cn() : Sr.exports = Sn()), Sr.exports;
}
var Z = On(), Pr = { exports: {} }, xr = { exports: {} }, X = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nt;
function Pn() {
  if (Nt) return X;
  Nt = 1;
  var f = typeof Symbol == "function" && Symbol.for, s = f ? Symbol.for("react.element") : 60103, E = f ? Symbol.for("react.portal") : 60106, m = f ? Symbol.for("react.fragment") : 60107, x = f ? Symbol.for("react.strict_mode") : 60108, g = f ? Symbol.for("react.profiler") : 60114, $ = f ? Symbol.for("react.provider") : 60109, P = f ? Symbol.for("react.context") : 60110, k = f ? Symbol.for("react.async_mode") : 60111, A = f ? Symbol.for("react.concurrent_mode") : 60111, b = f ? Symbol.for("react.forward_ref") : 60112, M = f ? Symbol.for("react.suspense") : 60113, V = f ? Symbol.for("react.suspense_list") : 60120, L = f ? Symbol.for("react.memo") : 60115, H = f ? Symbol.for("react.lazy") : 60116, B = f ? Symbol.for("react.block") : 60121, J = f ? Symbol.for("react.fundamental") : 60117, te = f ? Symbol.for("react.responder") : 60118, G = f ? Symbol.for("react.scope") : 60119;
  function F(d) {
    if (typeof d == "object" && d !== null) {
      var oe = d.$$typeof;
      switch (oe) {
        case s:
          switch (d = d.type, d) {
            case k:
            case A:
            case m:
            case g:
            case x:
            case M:
              return d;
            default:
              switch (d = d && d.$$typeof, d) {
                case P:
                case b:
                case H:
                case L:
                case $:
                  return d;
                default:
                  return oe;
              }
          }
        case E:
          return oe;
      }
    }
  }
  function W(d) {
    return F(d) === A;
  }
  return X.AsyncMode = k, X.ConcurrentMode = A, X.ContextConsumer = P, X.ContextProvider = $, X.Element = s, X.ForwardRef = b, X.Fragment = m, X.Lazy = H, X.Memo = L, X.Portal = E, X.Profiler = g, X.StrictMode = x, X.Suspense = M, X.isAsyncMode = function(d) {
    return W(d) || F(d) === k;
  }, X.isConcurrentMode = W, X.isContextConsumer = function(d) {
    return F(d) === P;
  }, X.isContextProvider = function(d) {
    return F(d) === $;
  }, X.isElement = function(d) {
    return typeof d == "object" && d !== null && d.$$typeof === s;
  }, X.isForwardRef = function(d) {
    return F(d) === b;
  }, X.isFragment = function(d) {
    return F(d) === m;
  }, X.isLazy = function(d) {
    return F(d) === H;
  }, X.isMemo = function(d) {
    return F(d) === L;
  }, X.isPortal = function(d) {
    return F(d) === E;
  }, X.isProfiler = function(d) {
    return F(d) === g;
  }, X.isStrictMode = function(d) {
    return F(d) === x;
  }, X.isSuspense = function(d) {
    return F(d) === M;
  }, X.isValidElementType = function(d) {
    return typeof d == "string" || typeof d == "function" || d === m || d === A || d === g || d === x || d === M || d === V || typeof d == "object" && d !== null && (d.$$typeof === H || d.$$typeof === L || d.$$typeof === $ || d.$$typeof === P || d.$$typeof === b || d.$$typeof === J || d.$$typeof === te || d.$$typeof === G || d.$$typeof === B);
  }, X.typeOf = F, X;
}
var Q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function xn() {
  return Lt || (Lt = 1, process.env.NODE_ENV !== "production" && function() {
    var f = typeof Symbol == "function" && Symbol.for, s = f ? Symbol.for("react.element") : 60103, E = f ? Symbol.for("react.portal") : 60106, m = f ? Symbol.for("react.fragment") : 60107, x = f ? Symbol.for("react.strict_mode") : 60108, g = f ? Symbol.for("react.profiler") : 60114, $ = f ? Symbol.for("react.provider") : 60109, P = f ? Symbol.for("react.context") : 60110, k = f ? Symbol.for("react.async_mode") : 60111, A = f ? Symbol.for("react.concurrent_mode") : 60111, b = f ? Symbol.for("react.forward_ref") : 60112, M = f ? Symbol.for("react.suspense") : 60113, V = f ? Symbol.for("react.suspense_list") : 60120, L = f ? Symbol.for("react.memo") : 60115, H = f ? Symbol.for("react.lazy") : 60116, B = f ? Symbol.for("react.block") : 60121, J = f ? Symbol.for("react.fundamental") : 60117, te = f ? Symbol.for("react.responder") : 60118, G = f ? Symbol.for("react.scope") : 60119;
    function F(h) {
      return typeof h == "string" || typeof h == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      h === m || h === A || h === g || h === x || h === M || h === V || typeof h == "object" && h !== null && (h.$$typeof === H || h.$$typeof === L || h.$$typeof === $ || h.$$typeof === P || h.$$typeof === b || h.$$typeof === J || h.$$typeof === te || h.$$typeof === G || h.$$typeof === B);
    }
    function W(h) {
      if (typeof h == "object" && h !== null) {
        var ye = h.$$typeof;
        switch (ye) {
          case s:
            var Ae = h.type;
            switch (Ae) {
              case k:
              case A:
              case m:
              case g:
              case x:
              case M:
                return Ae;
              default:
                var xe = Ae && Ae.$$typeof;
                switch (xe) {
                  case P:
                  case b:
                  case H:
                  case L:
                  case $:
                    return xe;
                  default:
                    return ye;
                }
            }
          case E:
            return ye;
        }
      }
    }
    var d = k, oe = A, _e = P, Re = $, Te = s, we = b, Oe = m, Ce = H, de = L, fe = E, le = g, ue = x, S = M, be = !1;
    function Se(h) {
      return be || (be = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), c(h) || W(h) === k;
    }
    function c(h) {
      return W(h) === A;
    }
    function n(h) {
      return W(h) === P;
    }
    function i(h) {
      return W(h) === $;
    }
    function y(h) {
      return typeof h == "object" && h !== null && h.$$typeof === s;
    }
    function v(h) {
      return W(h) === b;
    }
    function _(h) {
      return W(h) === m;
    }
    function R(h) {
      return W(h) === H;
    }
    function T(h) {
      return W(h) === L;
    }
    function C(h) {
      return W(h) === E;
    }
    function O(h) {
      return W(h) === g;
    }
    function j(h) {
      return W(h) === x;
    }
    function ve(h) {
      return W(h) === M;
    }
    Q.AsyncMode = d, Q.ConcurrentMode = oe, Q.ContextConsumer = _e, Q.ContextProvider = Re, Q.Element = Te, Q.ForwardRef = we, Q.Fragment = Oe, Q.Lazy = Ce, Q.Memo = de, Q.Portal = fe, Q.Profiler = le, Q.StrictMode = ue, Q.Suspense = S, Q.isAsyncMode = Se, Q.isConcurrentMode = c, Q.isContextConsumer = n, Q.isContextProvider = i, Q.isElement = y, Q.isForwardRef = v, Q.isFragment = _, Q.isLazy = R, Q.isMemo = T, Q.isPortal = C, Q.isProfiler = O, Q.isStrictMode = j, Q.isSuspense = ve, Q.isValidElementType = F, Q.typeOf = W;
  }()), Q;
}
var Wt;
function Ht() {
  return Wt || (Wt = 1, process.env.NODE_ENV === "production" ? xr.exports = Pn() : xr.exports = xn()), xr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Zr, Yt;
function kn() {
  if (Yt) return Zr;
  Yt = 1;
  var f = Object.getOwnPropertySymbols, s = Object.prototype.hasOwnProperty, E = Object.prototype.propertyIsEnumerable;
  function m(g) {
    if (g == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(g);
  }
  function x() {
    try {
      if (!Object.assign)
        return !1;
      var g = new String("abc");
      if (g[5] = "de", Object.getOwnPropertyNames(g)[0] === "5")
        return !1;
      for (var $ = {}, P = 0; P < 10; P++)
        $["_" + String.fromCharCode(P)] = P;
      var k = Object.getOwnPropertyNames($).map(function(b) {
        return $[b];
      });
      if (k.join("") !== "0123456789")
        return !1;
      var A = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(b) {
        A[b] = b;
      }), Object.keys(Object.assign({}, A)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Zr = x() ? Object.assign : function(g, $) {
    for (var P, k = m(g), A, b = 1; b < arguments.length; b++) {
      P = Object(arguments[b]);
      for (var M in P)
        s.call(P, M) && (k[M] = P[M]);
      if (f) {
        A = f(P);
        for (var V = 0; V < A.length; V++)
          E.call(P, A[V]) && (k[A[V]] = P[A[V]]);
      }
    }
    return k;
  }, Zr;
}
var et, Ut;
function st() {
  if (Ut) return et;
  Ut = 1;
  var f = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return et = f, et;
}
var rt, Vt;
function Gt() {
  return Vt || (Vt = 1, rt = Function.call.bind(Object.prototype.hasOwnProperty)), rt;
}
var tt, qt;
function jn() {
  if (qt) return tt;
  qt = 1;
  var f = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var s = /* @__PURE__ */ st(), E = {}, m = /* @__PURE__ */ Gt();
    f = function(g) {
      var $ = "Warning: " + g;
      typeof console < "u" && console.error($);
      try {
        throw new Error($);
      } catch {
      }
    };
  }
  function x(g, $, P, k, A) {
    if (process.env.NODE_ENV !== "production") {
      for (var b in g)
        if (m(g, b)) {
          var M;
          try {
            if (typeof g[b] != "function") {
              var V = Error(
                (k || "React class") + ": " + P + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw V.name = "Invariant Violation", V;
            }
            M = g[b]($, b, k, P, null, s);
          } catch (H) {
            M = H;
          }
          if (M && !(M instanceof Error) && f(
            (k || "React class") + ": type specification of " + P + " `" + b + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof M + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), M instanceof Error && !(M.message in E)) {
            E[M.message] = !0;
            var L = A ? A() : "";
            f(
              "Failed " + P + " type: " + M.message + (L ?? "")
            );
          }
        }
    }
  }
  return x.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (E = {});
  }, tt = x, tt;
}
var nt, zt;
function An() {
  if (zt) return nt;
  zt = 1;
  var f = Ht(), s = kn(), E = /* @__PURE__ */ st(), m = /* @__PURE__ */ Gt(), x = /* @__PURE__ */ jn(), g = function() {
  };
  process.env.NODE_ENV !== "production" && (g = function(P) {
    var k = "Warning: " + P;
    typeof console < "u" && console.error(k);
    try {
      throw new Error(k);
    } catch {
    }
  });
  function $() {
    return null;
  }
  return nt = function(P, k) {
    var A = typeof Symbol == "function" && Symbol.iterator, b = "@@iterator";
    function M(c) {
      var n = c && (A && c[A] || c[b]);
      if (typeof n == "function")
        return n;
    }
    var V = "<<anonymous>>", L = {
      array: te("array"),
      bigint: te("bigint"),
      bool: te("boolean"),
      func: te("function"),
      number: te("number"),
      object: te("object"),
      string: te("string"),
      symbol: te("symbol"),
      any: G(),
      arrayOf: F,
      element: W(),
      elementType: d(),
      instanceOf: oe,
      node: we(),
      objectOf: Re,
      oneOf: _e,
      oneOfType: Te,
      shape: Ce,
      exact: de
    };
    function H(c, n) {
      return c === n ? c !== 0 || 1 / c === 1 / n : c !== c && n !== n;
    }
    function B(c, n) {
      this.message = c, this.data = n && typeof n == "object" ? n : {}, this.stack = "";
    }
    B.prototype = Error.prototype;
    function J(c) {
      if (process.env.NODE_ENV !== "production")
        var n = {}, i = 0;
      function y(_, R, T, C, O, j, ve) {
        if (C = C || V, j = j || T, ve !== E) {
          if (k) {
            var h = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw h.name = "Invariant Violation", h;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = C + ":" + T;
            !n[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            i < 3 && (g(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + C + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), n[ye] = !0, i++);
          }
        }
        return R[T] == null ? _ ? R[T] === null ? new B("The " + O + " `" + j + "` is marked as required " + ("in `" + C + "`, but its value is `null`.")) : new B("The " + O + " `" + j + "` is marked as required in " + ("`" + C + "`, but its value is `undefined`.")) : null : c(R, T, C, O, j);
      }
      var v = y.bind(null, !1);
      return v.isRequired = y.bind(null, !0), v;
    }
    function te(c) {
      function n(i, y, v, _, R, T) {
        var C = i[y], O = ue(C);
        if (O !== c) {
          var j = S(C);
          return new B(
            "Invalid " + _ + " `" + R + "` of type " + ("`" + j + "` supplied to `" + v + "`, expected ") + ("`" + c + "`."),
            { expectedType: c }
          );
        }
        return null;
      }
      return J(n);
    }
    function G() {
      return J($);
    }
    function F(c) {
      function n(i, y, v, _, R) {
        if (typeof c != "function")
          return new B("Property `" + R + "` of component `" + v + "` has invalid PropType notation inside arrayOf.");
        var T = i[y];
        if (!Array.isArray(T)) {
          var C = ue(T);
          return new B("Invalid " + _ + " `" + R + "` of type " + ("`" + C + "` supplied to `" + v + "`, expected an array."));
        }
        for (var O = 0; O < T.length; O++) {
          var j = c(T, O, v, _, R + "[" + O + "]", E);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return J(n);
    }
    function W() {
      function c(n, i, y, v, _) {
        var R = n[i];
        if (!P(R)) {
          var T = ue(R);
          return new B("Invalid " + v + " `" + _ + "` of type " + ("`" + T + "` supplied to `" + y + "`, expected a single ReactElement."));
        }
        return null;
      }
      return J(c);
    }
    function d() {
      function c(n, i, y, v, _) {
        var R = n[i];
        if (!f.isValidElementType(R)) {
          var T = ue(R);
          return new B("Invalid " + v + " `" + _ + "` of type " + ("`" + T + "` supplied to `" + y + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return J(c);
    }
    function oe(c) {
      function n(i, y, v, _, R) {
        if (!(i[y] instanceof c)) {
          var T = c.name || V, C = Se(i[y]);
          return new B("Invalid " + _ + " `" + R + "` of type " + ("`" + C + "` supplied to `" + v + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return J(n);
    }
    function _e(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? g(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : g("Invalid argument supplied to oneOf, expected an array.")), $;
      function n(i, y, v, _, R) {
        for (var T = i[y], C = 0; C < c.length; C++)
          if (H(T, c[C]))
            return null;
        var O = JSON.stringify(c, function(ve, h) {
          var ye = S(h);
          return ye === "symbol" ? String(h) : h;
        });
        return new B("Invalid " + _ + " `" + R + "` of value `" + String(T) + "` " + ("supplied to `" + v + "`, expected one of " + O + "."));
      }
      return J(n);
    }
    function Re(c) {
      function n(i, y, v, _, R) {
        if (typeof c != "function")
          return new B("Property `" + R + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var T = i[y], C = ue(T);
        if (C !== "object")
          return new B("Invalid " + _ + " `" + R + "` of type " + ("`" + C + "` supplied to `" + v + "`, expected an object."));
        for (var O in T)
          if (m(T, O)) {
            var j = c(T, O, v, _, R + "." + O, E);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return J(n);
    }
    function Te(c) {
      if (!Array.isArray(c))
        return process.env.NODE_ENV !== "production" && g("Invalid argument supplied to oneOfType, expected an instance of array."), $;
      for (var n = 0; n < c.length; n++) {
        var i = c[n];
        if (typeof i != "function")
          return g(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + be(i) + " at index " + n + "."
          ), $;
      }
      function y(v, _, R, T, C) {
        for (var O = [], j = 0; j < c.length; j++) {
          var ve = c[j], h = ve(v, _, R, T, C, E);
          if (h == null)
            return null;
          h.data && m(h.data, "expectedType") && O.push(h.data.expectedType);
        }
        var ye = O.length > 0 ? ", expected one of type [" + O.join(", ") + "]" : "";
        return new B("Invalid " + T + " `" + C + "` supplied to " + ("`" + R + "`" + ye + "."));
      }
      return J(y);
    }
    function we() {
      function c(n, i, y, v, _) {
        return fe(n[i]) ? null : new B("Invalid " + v + " `" + _ + "` supplied to " + ("`" + y + "`, expected a ReactNode."));
      }
      return J(c);
    }
    function Oe(c, n, i, y, v) {
      return new B(
        (c || "React class") + ": " + n + " type `" + i + "." + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + v + "`."
      );
    }
    function Ce(c) {
      function n(i, y, v, _, R) {
        var T = i[y], C = ue(T);
        if (C !== "object")
          return new B("Invalid " + _ + " `" + R + "` of type `" + C + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var O in c) {
          var j = c[O];
          if (typeof j != "function")
            return Oe(v, _, R, O, S(j));
          var ve = j(T, O, v, _, R + "." + O, E);
          if (ve)
            return ve;
        }
        return null;
      }
      return J(n);
    }
    function de(c) {
      function n(i, y, v, _, R) {
        var T = i[y], C = ue(T);
        if (C !== "object")
          return new B("Invalid " + _ + " `" + R + "` of type `" + C + "` " + ("supplied to `" + v + "`, expected `object`."));
        var O = s({}, i[y], c);
        for (var j in O) {
          var ve = c[j];
          if (m(c, j) && typeof ve != "function")
            return Oe(v, _, R, j, S(ve));
          if (!ve)
            return new B(
              "Invalid " + _ + " `" + R + "` key `" + j + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(i[y], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(c), null, "  ")
            );
          var h = ve(T, j, v, _, R + "." + j, E);
          if (h)
            return h;
        }
        return null;
      }
      return J(n);
    }
    function fe(c) {
      switch (typeof c) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !c;
        case "object":
          if (Array.isArray(c))
            return c.every(fe);
          if (c === null || P(c))
            return !0;
          var n = M(c);
          if (n) {
            var i = n.call(c), y;
            if (n !== c.entries) {
              for (; !(y = i.next()).done; )
                if (!fe(y.value))
                  return !1;
            } else
              for (; !(y = i.next()).done; ) {
                var v = y.value;
                if (v && !fe(v[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(c, n) {
      return c === "symbol" ? !0 : n ? n["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && n instanceof Symbol : !1;
    }
    function ue(c) {
      var n = typeof c;
      return Array.isArray(c) ? "array" : c instanceof RegExp ? "object" : le(n, c) ? "symbol" : n;
    }
    function S(c) {
      if (typeof c > "u" || c === null)
        return "" + c;
      var n = ue(c);
      if (n === "object") {
        if (c instanceof Date)
          return "date";
        if (c instanceof RegExp)
          return "regexp";
      }
      return n;
    }
    function be(c) {
      var n = S(c);
      switch (n) {
        case "array":
        case "object":
          return "an " + n;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + n;
        default:
          return n;
      }
    }
    function Se(c) {
      return !c.constructor || !c.constructor.name ? V : c.constructor.name;
    }
    return L.checkPropTypes = x, L.resetWarningCache = x.resetWarningCache, L.PropTypes = L, L;
  }, nt;
}
var at, Bt;
function In() {
  if (Bt) return at;
  Bt = 1;
  var f = /* @__PURE__ */ st();
  function s() {
  }
  function E() {
  }
  return E.resetWarningCache = s, at = function() {
    function m($, P, k, A, b, M) {
      if (M !== f) {
        var V = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw V.name = "Invariant Violation", V;
      }
    }
    m.isRequired = m;
    function x() {
      return m;
    }
    var g = {
      array: m,
      bigint: m,
      bool: m,
      func: m,
      number: m,
      object: m,
      string: m,
      symbol: m,
      any: m,
      arrayOf: x,
      element: m,
      elementType: m,
      instanceOf: x,
      node: m,
      objectOf: x,
      oneOf: x,
      oneOfType: x,
      shape: x,
      exact: x,
      checkPropTypes: E,
      resetWarningCache: s
    };
    return g.PropTypes = g, g;
  }, at;
}
var Kt;
function $n() {
  if (Kt) return Pr.exports;
  if (Kt = 1, process.env.NODE_ENV !== "production") {
    var f = Ht(), s = !0;
    Pr.exports = /* @__PURE__ */ An()(f.isElement, s);
  } else
    Pr.exports = /* @__PURE__ */ In()();
  return Pr.exports;
}
var Dn = /* @__PURE__ */ $n();
const jr = /* @__PURE__ */ Rn(Dn);
class Mn {
  constructor(s, E) {
    this.apiKey = s, this.handlers = E, this.ws = null, this.reconnectAttempts = 0, this.maxReconnectAttempts = 3, this.baseReconnectDelay = 1e3, this.isConnecting = !1, this.inactivityTimeout = null, this.manuallyEnded = !1, this.resetInactivityTimer();
  }
  connect() {
    this.isConnecting || (this.manuallyEnded = !1, console.log("Connecting to WebSocket..."), this.ws = new WebSocket(`ws://localhost:3333/ws?apiKey=${this.apiKey}`), this.ws.onopen = () => {
      var s, E;
      console.log("WebSocket connected"), this.isConnecting = !1, this.reconnectAttempts = 0, (E = (s = this.handlers).onConnect) == null || E.call(s);
    }, this.ws.onmessage = (s) => {
      var E, m, x, g, $, P, k, A;
      try {
        const b = JSON.parse(s.data);
        switch (b.event) {
          case "ready":
            console.log("Ready event received"), (m = (E = this.handlers).onReady) == null || m.call(E);
            break;
          case "typing":
            console.log("Typing event received"), (g = (x = this.handlers).onTyping) == null || g.call(x, b.data.status);
            break;
          case "assistant_message":
            console.log("Assistant message received"), (P = ($ = this.handlers).onMessage) == null || P.call($, b.data.assistant_text);
            break;
          default:
            console.warn("Unknown event received:", b.event);
        }
      } catch (b) {
        console.error("Message parsing error:", b), (A = (k = this.handlers).onError) == null || A.call(k, b);
      }
    }, this.ws.onclose = () => {
      console.log("WebSocket closed"), this.isConnecting = !1, this.handleReconnect();
    }, this.ws.onerror = (s) => {
      var E, m;
      console.error("WebSocket error:", s), (m = (E = this.handlers).onError) == null || m.call(E, s);
    });
  }
  resetInactivityTimer() {
    this.inactivityTimeout && clearTimeout(this.inactivityTimeout), this.inactivityTimeout = setTimeout(() => {
      console.log("Connection closed due to inactivity"), this.disconnect();
    }, 12e4);
  }
  sendMessage(s) {
    var E, m, x;
    if (this.resetInactivityTimer(), ((E = this.ws) == null ? void 0 : E.readyState) === WebSocket.OPEN) {
      const g = {
        event: "user_message",
        data: {
          user_text: s
        }
      };
      console.log("Sending message:", g), this.ws.send(JSON.stringify(g)), (x = (m = this.handlers).onLocalMessage) == null || x.call(m, s);
    } else
      throw new Error("WebSocket is not connected");
  }
  handleReconnect() {
    var E, m;
    if (this.manuallyEnded) {
      console.log("Manual disconnect - skipping reconnect");
      return;
    }
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      (m = (E = this.handlers).onError) == null || m.call(E, new Error("Max reconnection attempts reached"));
      return;
    }
    const s = this.baseReconnectDelay * Math.pow(2, this.reconnectAttempts);
    this.reconnectAttempts++, console.log(
      `Attempting to reconnect in ${s}ms (attempt ${this.reconnectAttempts})`
    ), setTimeout(() => this.connect(), s);
  }
  disconnect(s = !1) {
    s && (this.manuallyEnded = !0), this.inactivityTimeout && clearTimeout(this.inactivityTimeout), this.ws && (console.log("Disconnecting WebSocket"), this.ws.close(), this.ws = null);
  }
}
var or = it();
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fn = (f) => f.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Jt = (...f) => f.filter((s, E, m) => !!s && s.trim() !== "" && m.indexOf(s) === E).join(" ").trim();
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Nn = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ln = or.forwardRef(
  ({
    color: f = "currentColor",
    size: s = 24,
    strokeWidth: E = 2,
    absoluteStrokeWidth: m,
    className: x = "",
    children: g,
    iconNode: $,
    ...P
  }, k) => or.createElement(
    "svg",
    {
      ref: k,
      ...Nn,
      width: s,
      height: s,
      stroke: f,
      strokeWidth: m ? Number(E) * 24 / Number(s) : E,
      className: Jt("lucide", x),
      ...P
    },
    [
      ...$.map(([A, b]) => or.createElement(A, b)),
      ...Array.isArray(g) ? g : [g]
    ]
  )
);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ir = (f, s) => {
  const E = or.forwardRef(
    ({ className: m, ...x }, g) => or.createElement(Ln, {
      ref: g,
      iconNode: s,
      className: Jt(`lucide-${Fn(f)}`, m),
      ...x
    })
  );
  return E.displayName = `${f}`, E;
};
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xt = ir("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Wn = ir("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yn = ir("Power", [
  ["path", { d: "M12 2v10", key: "mnfbl" }],
  ["path", { d: "M18.4 6.6a9 9 0 1 1-12.77.04", key: "obofu9" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Un = ir("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]);
/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vn = ir("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), qn = (f, s = 30) => {
  const [E, m] = ze(""), x = ot(null);
  return kr(() => {
    let g = 0;
    const $ = setInterval(() => {
      g < f.length ? (m(f.substring(0, g + 1)), g++, x.current && x.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })) : clearInterval($);
    }, s);
    return () => clearInterval($);
  }, [f, s]), { displayedText: E, containerRef: x };
}, Qt = ({ message: f, type: s }) => {
  const { displayedText: E, containerRef: m } = qn(
    s === "assistant" ? f : ""
  );
  return /* @__PURE__ */ Z.jsxs(
    "div",
    {
      ref: m,
      className: `flex ${s === "user" ? "justify-end" : "justify-start"} items-end gap-2`,
      children: [
        s === "assistant" && /* @__PURE__ */ Z.jsx("div", { className: "h-8 w-8 flex items-center justify-center rounded-full bg-purple-600", children: /* @__PURE__ */ Z.jsx(Xt, { className: "w-5 h-5 text-white" }) }),
        /* @__PURE__ */ Z.jsx(
          "div",
          {
            className: `max-w-[80%] p-3 rounded-lg ${s === "user" ? "bg-purple-600 text-white rounded-br-none font-semibold text-sm" : "bg-gray-100 text-gray-800 rounded-bl-none font-semibold text-sm"}`,
            children: s === "assistant" ? E : f
          }
        )
      ]
    }
  );
};
Qt.propTypes = {
  message: jr.string.isRequired,
  type: jr.string.isRequired
};
const zn = () => /* @__PURE__ */ Z.jsxs("div", { className: "flex gap-2 py-3 px-2 max-w-[80%] bg-gray-100 rounded-lg rounded-bl-none w-24", children: [
  /* @__PURE__ */ Z.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.3s]" }),
  /* @__PURE__ */ Z.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.15s]" }),
  /* @__PURE__ */ Z.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce" })
] }), Zt = ({ apiKey: f }) => {
  const [s, E] = ze(!1), [m, x] = ze([]), [g, $] = ze(""), [P, k] = ze(!1), [A, b] = ze(!1), [M, V] = ze(!1), L = ot(null), H = ot(null);
  kr(() => (H.current = new Mn(f, {
    onConnect: () => b(!0),
    onDisconnect: () => b(!1),
    onTyping: () => k(!0),
    onMessage: (F) => {
      k(!1), x((W) => [
        ...W,
        { role: "assistant", content: F }
      ]);
    },
    onLocalMessage: (F) => {
      x((W) => [...W, { role: "user", content: F }]);
    }
  }), () => {
    var F;
    return (F = H.current) == null ? void 0 : F.disconnect();
  }), [f]), kr(() => {
    s && !A && (H.current.manuallyEnded = !1, H.current.connect());
  }, [s, A]), kr(() => {
    L.current && (L.current.scrollTop = L.current.scrollHeight);
  }, [m, P]);
  const B = (F) => {
    if (F.preventDefault(), !(!g.trim() || !A))
      try {
        H.current.sendMessage(g), $("");
      } catch (W) {
        console.error("Failed to send message:", W);
      }
  };
  Zt.propTypes = {
    apiKey: jr.string.isRequired
  };
  const J = (F) => {
    F.key === "Enter" && !F.shiftKey && (F.preventDefault(), B(F));
  }, te = () => {
    s || V(!1), E(!s);
  }, G = () => {
    E(!1), H.current.disconnect(!0), x([]), b(!1), V(!0);
  };
  return /* @__PURE__ */ Z.jsxs("div", { className: "fixed bottom-4 right-4 z-[1000]", children: [
    " ",
    /* @__PURE__ */ Z.jsx(
      "button",
      {
        onClick: te,
        className: `${s ? "hidden" : "flex"} items-center justify-center w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all duration-200 fixed bottom-4 right-4`,
        children: /* @__PURE__ */ Z.jsx(Wn, { className: "w-6 h-6" })
      }
    ),
    /* @__PURE__ */ Z.jsxs(
      "div",
      {
        className: `${s ? "scale-100 opacity-100" : "scale-0 opacity-0"} origin-bottom-right transition-all duration-200 w-[400px] h-[600px] bg-white rounded-lg shadow-xl flex flex-col`,
        children: [
          /* @__PURE__ */ Z.jsxs("div", { className: "bg-purple-600 p-4 rounded-t-lg flex items-center justify-between", children: [
            /* @__PURE__ */ Z.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ Z.jsx("div", { className: "h-7 w-7 flex items-center justify-center rounded-full bg-white", children: /* @__PURE__ */ Z.jsx(Xt, { className: "w-5 h-5 text-purple-600" }) }),
              /* @__PURE__ */ Z.jsx("h2", { className: "text-white text-lg font-semibold", children: "Chatbot" })
            ] }),
            /* @__PURE__ */ Z.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ Z.jsx(
                "button",
                {
                  onClick: G,
                  className: "text-white hover:text-red-200 transition-colors",
                  title: "End Chat",
                  children: /* @__PURE__ */ Z.jsx(Yn, { className: "w-6 h-6" })
                }
              ),
              /* @__PURE__ */ Z.jsx(
                "button",
                {
                  onClick: () => E(!1),
                  className: "text-white hover:text-purple-200 transition-colors",
                  children: /* @__PURE__ */ Z.jsx(Vn, { className: "w-6 h-6" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ Z.jsxs(
            "div",
            {
              ref: L,
              className: "flex-1 overflow-y-auto p-4 space-y-4",
              children: [
                m.map((F, W) => /* @__PURE__ */ Z.jsx(
                  Qt,
                  {
                    message: F.content,
                    type: F.role === "user" ? "user" : "assistant"
                  },
                  W
                )),
                P && /* @__PURE__ */ Z.jsx(zn, {})
              ]
            }
          ),
          /* @__PURE__ */ Z.jsx(
            "form",
            {
              onSubmit: B,
              className: "p-4 border-t",
              children: /* @__PURE__ */ Z.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ Z.jsx(
                  "textarea",
                  {
                    value: g,
                    onChange: (F) => $(F.target.value),
                    onKeyDown: J,
                    placeholder: "Type a message...",
                    className: "flex-1 resize-none p-2 border rounded-lg focus:outline-none focus:border-purple-600 max-h-32",
                    rows: "1"
                  }
                ),
                /* @__PURE__ */ Z.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: !A,
                    className: "p-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
                    onClick: B,
                    children: /* @__PURE__ */ Z.jsx(Un, { className: "w-5 h-5" })
                  }
                )
              ] })
            }
          )
        ]
      }
    )
  ] });
};
Zt.propTypes = {
  apiKey: jr.string.isRequired
};
export {
  Zt as default
};
