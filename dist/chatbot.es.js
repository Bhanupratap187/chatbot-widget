import vr, { useState as se, useRef as Ne, useEffect as Se } from "react";
function qr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var we = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Ur() {
  if (rr) return Ee;
  rr = 1;
  var n = vr, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, g = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(v, h, b) {
    var f, R = {}, I = null, W = null;
    b !== void 0 && (I = "" + b), h.key !== void 0 && (I = "" + h.key), h.ref !== void 0 && (W = h.ref);
    for (f in h) c.call(h, f) && !l.hasOwnProperty(f) && (R[f] = h[f]);
    if (v && v.defaultProps) for (f in h = v.defaultProps, h) R[f] === void 0 && (R[f] = h[f]);
    return { $$typeof: u, type: v, key: I, ref: W, props: R, _owner: g.current };
  }
  return Ee.Fragment = d, Ee.jsx = T, Ee.jsxs = T, Ee;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr;
function Vr() {
  return tr || (tr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = vr, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), v = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), q = Symbol.iterator, F = "@@iterator";
    function B(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = q && e[q] || e[F];
      return typeof r == "function" ? r : null;
    }
    var U = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), y = 1; y < r; y++)
          a[y - 1] = arguments[y];
        _("error", e, a);
      }
    }
    function _(e, r, a) {
      {
        var y = U.ReactDebugCurrentFrame, M = y.getStackAddendum();
        M !== "" && (r += "%s", a = a.concat([M]));
        var N = a.map(function(k) {
          return String(k);
        });
        N.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, N);
      }
    }
    var Y = !1, i = !1, te = !1, ye = !1, he = !1, ce;
    ce = Symbol.for("react.module.reference");
    function ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === l || he || e === g || e === b || e === f || ye || e === W || Y || i || te || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === R || e.$$typeof === T || e.$$typeof === v || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function ue(e, r, a) {
      var y = e.displayName;
      if (y)
        return y;
      var M = r.displayName || r.name || "";
      return M !== "" ? a + "(" + M + ")" : a;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function H(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case d:
          return "Portal";
        case l:
          return "Profiler";
        case g:
          return "StrictMode";
        case b:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var r = e;
            return le(r) + ".Consumer";
          case T:
            var a = e;
            return le(a._context) + ".Provider";
          case h:
            return ue(e, e.render, "ForwardRef");
          case R:
            var y = e.displayName || null;
            return y !== null ? y : H(e.type) || "Memo";
          case I: {
            var M = e, N = M._payload, k = M._init;
            try {
              return H(k(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, ne = 0, Z, re, oe, fe, t, s, S;
    function w() {
    }
    w.__reactDisabledLog = !0;
    function m() {
      {
        if (ne === 0) {
          Z = console.log, re = console.info, oe = console.warn, fe = console.error, t = console.group, s = console.groupCollapsed, S = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: w,
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
        ne++;
      }
    }
    function P() {
      {
        if (ne--, ne === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: Z
            }),
            info: X({}, e, {
              value: re
            }),
            warn: X({}, e, {
              value: oe
            }),
            error: X({}, e, {
              value: fe
            }),
            group: X({}, e, {
              value: t
            }),
            groupCollapsed: X({}, e, {
              value: s
            }),
            groupEnd: X({}, e, {
              value: S
            })
          });
        }
        ne < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var E = U.ReactCurrentDispatcher, x;
    function j(e, r, a) {
      {
        if (x === void 0)
          try {
            throw Error();
          } catch (M) {
            var y = M.stack.trim().match(/\n( *(at )?)/);
            x = y && y[1] || "";
          }
        return `
` + x + e;
      }
    }
    var A = !1, C;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      C = new J();
    }
    function o(e, r) {
      if (!e || A)
        return "";
      {
        var a = C.get(e);
        if (a !== void 0)
          return a;
      }
      var y;
      A = !0;
      var M = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = E.current, E.current = null, m();
      try {
        if (r) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (G) {
              y = G;
            }
            Reflect.construct(e, [], k);
          } else {
            try {
              k.call();
            } catch (G) {
              y = G;
            }
            e.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            y = G;
          }
          e();
        }
      } catch (G) {
        if (G && y && typeof G.stack == "string") {
          for (var O = G.stack.split(`
`), K = y.stack.split(`
`), V = O.length - 1, z = K.length - 1; V >= 1 && z >= 0 && O[V] !== K[z]; )
            z--;
          for (; V >= 1 && z >= 0; V--, z--)
            if (O[V] !== K[z]) {
              if (V !== 1 || z !== 1)
                do
                  if (V--, z--, z < 0 || O[V] !== K[z]) {
                    var ee = `
` + O[V].replace(" at new ", " at ");
                    return e.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", e.displayName)), typeof e == "function" && C.set(e, ee), ee;
                  }
                while (V >= 1 && z >= 0);
              break;
            }
        }
      } finally {
        A = !1, E.current = N, P(), Error.prepareStackTrace = M;
      }
      var ve = e ? e.displayName || e.name : "", ie = ve ? j(ve) : "";
      return typeof e == "function" && C.set(e, ie), ie;
    }
    function Q(e, r, a) {
      return o(e, !1);
    }
    function de(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return o(e, de(e));
      if (typeof e == "string")
        return j(e);
      switch (e) {
        case b:
          return j("Suspense");
        case f:
          return j("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return Q(e.render);
          case R:
            return ae(e.type, r, a);
          case I: {
            var y = e, M = y._payload, N = y._init;
            try {
              return ae(N(M), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, qe = {}, Ue = U.ReactDebugCurrentFrame;
    function xe(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        Ue.setExtraStackFrame(a);
      } else
        Ue.setExtraStackFrame(null);
    }
    function Er(e, r, a, y, M) {
      {
        var N = Function.call.bind(me);
        for (var k in e)
          if (N(e, k)) {
            var O = void 0;
            try {
              if (typeof e[k] != "function") {
                var K = Error((y || "React class") + ": " + a + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              O = e[k](r, k, y, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              O = V;
            }
            O && !(O instanceof Error) && (xe(M), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", y || "React class", a, k, typeof O), xe(null)), O instanceof Error && !(O.message in qe) && (qe[O.message] = !0, xe(M), L("Failed %s type: %s", a, O.message), xe(null));
          }
      }
    }
    var Tr = Array.isArray;
    function Ce(e) {
      return Tr(e);
    }
    function xr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function wr(e) {
      try {
        return Ve(e), !1;
      } catch {
        return !0;
      }
    }
    function Ve(e) {
      return "" + e;
    }
    function Be(e) {
      if (wr(e))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(e)), Ve(e);
    }
    var be = U.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ze, Je, Oe;
    Oe = {};
    function _r(e) {
      if (me.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Sr(e) {
      if (me.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function jr(e, r) {
      if (typeof e.ref == "string" && be.current && r && be.current.stateNode !== r) {
        var a = H(be.current.type);
        Oe[a] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', H(be.current.type), e.ref), Oe[a] = !0);
      }
    }
    function Cr(e, r) {
      {
        var a = function() {
          ze || (ze = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function Or(e, r) {
      {
        var a = function() {
          Je || (Je = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var Pr = function(e, r, a, y, M, N, k) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: k,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: M
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function kr(e, r, a, y, M) {
      {
        var N, k = {}, O = null, K = null;
        a !== void 0 && (Be(a), O = "" + a), Sr(r) && (Be(r.key), O = "" + r.key), _r(r) && (K = r.ref, jr(r, M));
        for (N in r)
          me.call(r, N) && !Rr.hasOwnProperty(N) && (k[N] = r[N]);
        if (e && e.defaultProps) {
          var V = e.defaultProps;
          for (N in V)
            k[N] === void 0 && (k[N] = V[N]);
        }
        if (O || K) {
          var z = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          O && Cr(k, z), K && Or(k, z);
        }
        return Pr(e, O, K, M, y, be.current, k);
      }
    }
    var Pe = U.ReactCurrentOwner, Ke = U.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var r = e._owner, a = ae(e.type, e._source, r ? r.type : null);
        Ke.setExtraStackFrame(a);
      } else
        Ke.setExtraStackFrame(null);
    }
    var ke;
    ke = !1;
    function Ae(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function He() {
      {
        if (Pe.current) {
          var e = H(Pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ar(e) {
      return "";
    }
    var Xe = {};
    function Ir(e) {
      {
        var r = He();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function Ge(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = Ir(r);
        if (Xe[a])
          return;
        Xe[a] = !0;
        var y = "";
        e && e._owner && e._owner !== Pe.current && (y = " It was passed a child from " + H(e._owner.type) + "."), pe(e), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, y), pe(null);
      }
    }
    function Ze(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var a = 0; a < e.length; a++) {
            var y = e[a];
            Ae(y) && Ge(y, r);
          }
        else if (Ae(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var M = B(e);
          if (typeof M == "function" && M !== e.entries)
            for (var N = M.call(e), k; !(k = N.next()).done; )
              Ae(k.value) && Ge(k.value, r);
        }
      }
    }
    function Mr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          a = r.propTypes;
        else
          return;
        if (a) {
          var y = H(r);
          Er(a, e.props, "prop", y, e);
        } else if (r.PropTypes !== void 0 && !ke) {
          ke = !0;
          var M = H(r);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", M || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $r(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var y = r[a];
          if (y !== "children" && y !== "key") {
            pe(e), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", y), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), L("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var Qe = {};
    function er(e, r, a, y, M, N) {
      {
        var k = ge(e);
        if (!k) {
          var O = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Ar();
          K ? O += K : O += He();
          var V;
          e === null ? V = "null" : Ce(e) ? V = "array" : e !== void 0 && e.$$typeof === u ? (V = "<" + (H(e.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : V = typeof e, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, O);
        }
        var z = kr(e, r, a, M, N);
        if (z == null)
          return z;
        if (k) {
          var ee = r.children;
          if (ee !== void 0)
            if (y)
              if (Ce(ee)) {
                for (var ve = 0; ve < ee.length; ve++)
                  Ze(ee[ve], e);
                Object.freeze && Object.freeze(ee);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ze(ee, e);
        }
        if (me.call(r, "key")) {
          var ie = H(e), G = Object.keys(r).filter(function(Lr) {
            return Lr !== "key";
          }), Ie = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qe[ie + Ie]) {
            var Nr = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            L(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ie, ie, Nr, ie), Qe[ie + Ie] = !0;
          }
        }
        return e === c ? $r(z) : Mr(z), z;
      }
    }
    function Dr(e, r, a) {
      return er(e, r, a, !0);
    }
    function Wr(e, r, a) {
      return er(e, r, a, !1);
    }
    var Fr = Wr, Yr = Dr;
    Te.Fragment = c, Te.jsx = Fr, Te.jsxs = Yr;
  }()), Te;
}
var nr;
function Br() {
  return nr || (nr = 1, process.env.NODE_ENV === "production" ? we.exports = Ur() : we.exports = Vr()), we.exports;
}
var p = Br(), Re = { exports: {} }, _e = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function zr() {
  if (or) return $;
  or = 1;
  var n = typeof Symbol == "function" && Symbol.for, u = n ? Symbol.for("react.element") : 60103, d = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, g = n ? Symbol.for("react.strict_mode") : 60108, l = n ? Symbol.for("react.profiler") : 60114, T = n ? Symbol.for("react.provider") : 60109, v = n ? Symbol.for("react.context") : 60110, h = n ? Symbol.for("react.async_mode") : 60111, b = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, R = n ? Symbol.for("react.suspense") : 60113, I = n ? Symbol.for("react.suspense_list") : 60120, W = n ? Symbol.for("react.memo") : 60115, q = n ? Symbol.for("react.lazy") : 60116, F = n ? Symbol.for("react.block") : 60121, B = n ? Symbol.for("react.fundamental") : 60117, U = n ? Symbol.for("react.responder") : 60118, L = n ? Symbol.for("react.scope") : 60119;
  function _(i) {
    if (typeof i == "object" && i !== null) {
      var te = i.$$typeof;
      switch (te) {
        case u:
          switch (i = i.type, i) {
            case h:
            case b:
            case c:
            case l:
            case g:
            case R:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case v:
                case f:
                case q:
                case W:
                case T:
                  return i;
                default:
                  return te;
              }
          }
        case d:
          return te;
      }
    }
  }
  function Y(i) {
    return _(i) === b;
  }
  return $.AsyncMode = h, $.ConcurrentMode = b, $.ContextConsumer = v, $.ContextProvider = T, $.Element = u, $.ForwardRef = f, $.Fragment = c, $.Lazy = q, $.Memo = W, $.Portal = d, $.Profiler = l, $.StrictMode = g, $.Suspense = R, $.isAsyncMode = function(i) {
    return Y(i) || _(i) === h;
  }, $.isConcurrentMode = Y, $.isContextConsumer = function(i) {
    return _(i) === v;
  }, $.isContextProvider = function(i) {
    return _(i) === T;
  }, $.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === u;
  }, $.isForwardRef = function(i) {
    return _(i) === f;
  }, $.isFragment = function(i) {
    return _(i) === c;
  }, $.isLazy = function(i) {
    return _(i) === q;
  }, $.isMemo = function(i) {
    return _(i) === W;
  }, $.isPortal = function(i) {
    return _(i) === d;
  }, $.isProfiler = function(i) {
    return _(i) === l;
  }, $.isStrictMode = function(i) {
    return _(i) === g;
  }, $.isSuspense = function(i) {
    return _(i) === R;
  }, $.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === c || i === b || i === l || i === g || i === R || i === I || typeof i == "object" && i !== null && (i.$$typeof === q || i.$$typeof === W || i.$$typeof === T || i.$$typeof === v || i.$$typeof === f || i.$$typeof === B || i.$$typeof === U || i.$$typeof === L || i.$$typeof === F);
  }, $.typeOf = _, $;
}
var D = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function Jr() {
  return ar || (ar = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, u = n ? Symbol.for("react.element") : 60103, d = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, g = n ? Symbol.for("react.strict_mode") : 60108, l = n ? Symbol.for("react.profiler") : 60114, T = n ? Symbol.for("react.provider") : 60109, v = n ? Symbol.for("react.context") : 60110, h = n ? Symbol.for("react.async_mode") : 60111, b = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, R = n ? Symbol.for("react.suspense") : 60113, I = n ? Symbol.for("react.suspense_list") : 60120, W = n ? Symbol.for("react.memo") : 60115, q = n ? Symbol.for("react.lazy") : 60116, F = n ? Symbol.for("react.block") : 60121, B = n ? Symbol.for("react.fundamental") : 60117, U = n ? Symbol.for("react.responder") : 60118, L = n ? Symbol.for("react.scope") : 60119;
    function _(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === c || o === b || o === l || o === g || o === R || o === I || typeof o == "object" && o !== null && (o.$$typeof === q || o.$$typeof === W || o.$$typeof === T || o.$$typeof === v || o.$$typeof === f || o.$$typeof === B || o.$$typeof === U || o.$$typeof === L || o.$$typeof === F);
    }
    function Y(o) {
      if (typeof o == "object" && o !== null) {
        var Q = o.$$typeof;
        switch (Q) {
          case u:
            var de = o.type;
            switch (de) {
              case h:
              case b:
              case c:
              case l:
              case g:
              case R:
                return de;
              default:
                var ae = de && de.$$typeof;
                switch (ae) {
                  case v:
                  case f:
                  case q:
                  case W:
                  case T:
                    return ae;
                  default:
                    return Q;
                }
            }
          case d:
            return Q;
        }
      }
    }
    var i = h, te = b, ye = v, he = T, ce = u, ge = f, ue = c, le = q, H = W, X = d, ne = l, Z = g, re = R, oe = !1;
    function fe(o) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(o) || Y(o) === h;
    }
    function t(o) {
      return Y(o) === b;
    }
    function s(o) {
      return Y(o) === v;
    }
    function S(o) {
      return Y(o) === T;
    }
    function w(o) {
      return typeof o == "object" && o !== null && o.$$typeof === u;
    }
    function m(o) {
      return Y(o) === f;
    }
    function P(o) {
      return Y(o) === c;
    }
    function E(o) {
      return Y(o) === q;
    }
    function x(o) {
      return Y(o) === W;
    }
    function j(o) {
      return Y(o) === d;
    }
    function A(o) {
      return Y(o) === l;
    }
    function C(o) {
      return Y(o) === g;
    }
    function J(o) {
      return Y(o) === R;
    }
    D.AsyncMode = i, D.ConcurrentMode = te, D.ContextConsumer = ye, D.ContextProvider = he, D.Element = ce, D.ForwardRef = ge, D.Fragment = ue, D.Lazy = le, D.Memo = H, D.Portal = X, D.Profiler = ne, D.StrictMode = Z, D.Suspense = re, D.isAsyncMode = fe, D.isConcurrentMode = t, D.isContextConsumer = s, D.isContextProvider = S, D.isElement = w, D.isForwardRef = m, D.isFragment = P, D.isLazy = E, D.isMemo = x, D.isPortal = j, D.isProfiler = A, D.isStrictMode = C, D.isSuspense = J, D.isValidElementType = _, D.typeOf = Y;
  }()), D;
}
var ir;
function yr() {
  return ir || (ir = 1, process.env.NODE_ENV === "production" ? _e.exports = zr() : _e.exports = Jr()), _e.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Me, sr;
function Kr() {
  if (sr) return Me;
  sr = 1;
  var n = Object.getOwnPropertySymbols, u = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
  function c(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function g() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var T = {}, v = 0; v < 10; v++)
        T["_" + String.fromCharCode(v)] = v;
      var h = Object.getOwnPropertyNames(T).map(function(f) {
        return T[f];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var b = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        b[f] = f;
      }), Object.keys(Object.assign({}, b)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Me = g() ? Object.assign : function(l, T) {
    for (var v, h = c(l), b, f = 1; f < arguments.length; f++) {
      v = Object(arguments[f]);
      for (var R in v)
        u.call(v, R) && (h[R] = v[R]);
      if (n) {
        b = n(v);
        for (var I = 0; I < b.length; I++)
          d.call(v, b[I]) && (h[b[I]] = v[b[I]]);
      }
    }
    return h;
  }, Me;
}
var $e, cr;
function Le() {
  if (cr) return $e;
  cr = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $e = n, $e;
}
var De, ur;
function hr() {
  return ur || (ur = 1, De = Function.call.bind(Object.prototype.hasOwnProperty)), De;
}
var We, lr;
function Hr() {
  if (lr) return We;
  lr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var u = /* @__PURE__ */ Le(), d = {}, c = /* @__PURE__ */ hr();
    n = function(l) {
      var T = "Warning: " + l;
      typeof console < "u" && console.error(T);
      try {
        throw new Error(T);
      } catch {
      }
    };
  }
  function g(l, T, v, h, b) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in l)
        if (c(l, f)) {
          var R;
          try {
            if (typeof l[f] != "function") {
              var I = Error(
                (h || "React class") + ": " + v + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw I.name = "Invariant Violation", I;
            }
            R = l[f](T, f, h, v, null, u);
          } catch (q) {
            R = q;
          }
          if (R && !(R instanceof Error) && n(
            (h || "React class") + ": type specification of " + v + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof R + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), R instanceof Error && !(R.message in d)) {
            d[R.message] = !0;
            var W = b ? b() : "";
            n(
              "Failed " + v + " type: " + R.message + (W ?? "")
            );
          }
        }
    }
  }
  return g.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (d = {});
  }, We = g, We;
}
var Fe, fr;
function Xr() {
  if (fr) return Fe;
  fr = 1;
  var n = yr(), u = Kr(), d = /* @__PURE__ */ Le(), c = /* @__PURE__ */ hr(), g = /* @__PURE__ */ Hr(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(v) {
    var h = "Warning: " + v;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function T() {
    return null;
  }
  return Fe = function(v, h) {
    var b = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function R(t) {
      var s = t && (b && t[b] || t[f]);
      if (typeof s == "function")
        return s;
    }
    var I = "<<anonymous>>", W = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: L(),
      arrayOf: _,
      element: Y(),
      elementType: i(),
      instanceOf: te,
      node: ge(),
      objectOf: he,
      oneOf: ye,
      oneOfType: ce,
      shape: le,
      exact: H
    };
    function q(t, s) {
      return t === s ? t !== 0 || 1 / t === 1 / s : t !== t && s !== s;
    }
    function F(t, s) {
      this.message = t, this.data = s && typeof s == "object" ? s : {}, this.stack = "";
    }
    F.prototype = Error.prototype;
    function B(t) {
      if (process.env.NODE_ENV !== "production")
        var s = {}, S = 0;
      function w(P, E, x, j, A, C, J) {
        if (j = j || I, C = C || x, J !== d) {
          if (h) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = j + ":" + x;
            !s[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            S < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + C + "` prop on `" + j + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), s[Q] = !0, S++);
          }
        }
        return E[x] == null ? P ? E[x] === null ? new F("The " + A + " `" + C + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new F("The " + A + " `" + C + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : t(E, x, j, A, C);
      }
      var m = w.bind(null, !1);
      return m.isRequired = w.bind(null, !0), m;
    }
    function U(t) {
      function s(S, w, m, P, E, x) {
        var j = S[w], A = Z(j);
        if (A !== t) {
          var C = re(j);
          return new F(
            "Invalid " + P + " `" + E + "` of type " + ("`" + C + "` supplied to `" + m + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return B(s);
    }
    function L() {
      return B(T);
    }
    function _(t) {
      function s(S, w, m, P, E) {
        if (typeof t != "function")
          return new F("Property `" + E + "` of component `" + m + "` has invalid PropType notation inside arrayOf.");
        var x = S[w];
        if (!Array.isArray(x)) {
          var j = Z(x);
          return new F("Invalid " + P + " `" + E + "` of type " + ("`" + j + "` supplied to `" + m + "`, expected an array."));
        }
        for (var A = 0; A < x.length; A++) {
          var C = t(x, A, m, P, E + "[" + A + "]", d);
          if (C instanceof Error)
            return C;
        }
        return null;
      }
      return B(s);
    }
    function Y() {
      function t(s, S, w, m, P) {
        var E = s[S];
        if (!v(E)) {
          var x = Z(E);
          return new F("Invalid " + m + " `" + P + "` of type " + ("`" + x + "` supplied to `" + w + "`, expected a single ReactElement."));
        }
        return null;
      }
      return B(t);
    }
    function i() {
      function t(s, S, w, m, P) {
        var E = s[S];
        if (!n.isValidElementType(E)) {
          var x = Z(E);
          return new F("Invalid " + m + " `" + P + "` of type " + ("`" + x + "` supplied to `" + w + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return B(t);
    }
    function te(t) {
      function s(S, w, m, P, E) {
        if (!(S[w] instanceof t)) {
          var x = t.name || I, j = fe(S[w]);
          return new F("Invalid " + P + " `" + E + "` of type " + ("`" + j + "` supplied to `" + m + "`, expected ") + ("instance of `" + x + "`."));
        }
        return null;
      }
      return B(s);
    }
    function ye(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), T;
      function s(S, w, m, P, E) {
        for (var x = S[w], j = 0; j < t.length; j++)
          if (q(x, t[j]))
            return null;
        var A = JSON.stringify(t, function(J, o) {
          var Q = re(o);
          return Q === "symbol" ? String(o) : o;
        });
        return new F("Invalid " + P + " `" + E + "` of value `" + String(x) + "` " + ("supplied to `" + m + "`, expected one of " + A + "."));
      }
      return B(s);
    }
    function he(t) {
      function s(S, w, m, P, E) {
        if (typeof t != "function")
          return new F("Property `" + E + "` of component `" + m + "` has invalid PropType notation inside objectOf.");
        var x = S[w], j = Z(x);
        if (j !== "object")
          return new F("Invalid " + P + " `" + E + "` of type " + ("`" + j + "` supplied to `" + m + "`, expected an object."));
        for (var A in x)
          if (c(x, A)) {
            var C = t(x, A, m, P, E + "." + A, d);
            if (C instanceof Error)
              return C;
          }
        return null;
      }
      return B(s);
    }
    function ce(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), T;
      for (var s = 0; s < t.length; s++) {
        var S = t[s];
        if (typeof S != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(S) + " at index " + s + "."
          ), T;
      }
      function w(m, P, E, x, j) {
        for (var A = [], C = 0; C < t.length; C++) {
          var J = t[C], o = J(m, P, E, x, j, d);
          if (o == null)
            return null;
          o.data && c(o.data, "expectedType") && A.push(o.data.expectedType);
        }
        var Q = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new F("Invalid " + x + " `" + j + "` supplied to " + ("`" + E + "`" + Q + "."));
      }
      return B(w);
    }
    function ge() {
      function t(s, S, w, m, P) {
        return X(s[S]) ? null : new F("Invalid " + m + " `" + P + "` supplied to " + ("`" + w + "`, expected a ReactNode."));
      }
      return B(t);
    }
    function ue(t, s, S, w, m) {
      return new F(
        (t || "React class") + ": " + s + " type `" + S + "." + w + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + m + "`."
      );
    }
    function le(t) {
      function s(S, w, m, P, E) {
        var x = S[w], j = Z(x);
        if (j !== "object")
          return new F("Invalid " + P + " `" + E + "` of type `" + j + "` " + ("supplied to `" + m + "`, expected `object`."));
        for (var A in t) {
          var C = t[A];
          if (typeof C != "function")
            return ue(m, P, E, A, re(C));
          var J = C(x, A, m, P, E + "." + A, d);
          if (J)
            return J;
        }
        return null;
      }
      return B(s);
    }
    function H(t) {
      function s(S, w, m, P, E) {
        var x = S[w], j = Z(x);
        if (j !== "object")
          return new F("Invalid " + P + " `" + E + "` of type `" + j + "` " + ("supplied to `" + m + "`, expected `object`."));
        var A = u({}, S[w], t);
        for (var C in A) {
          var J = t[C];
          if (c(t, C) && typeof J != "function")
            return ue(m, P, E, C, re(J));
          if (!J)
            return new F(
              "Invalid " + P + " `" + E + "` key `" + C + "` supplied to `" + m + "`.\nBad object: " + JSON.stringify(S[w], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var o = J(x, C, m, P, E + "." + C, d);
          if (o)
            return o;
        }
        return null;
      }
      return B(s);
    }
    function X(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(X);
          if (t === null || v(t))
            return !0;
          var s = R(t);
          if (s) {
            var S = s.call(t), w;
            if (s !== t.entries) {
              for (; !(w = S.next()).done; )
                if (!X(w.value))
                  return !1;
            } else
              for (; !(w = S.next()).done; ) {
                var m = w.value;
                if (m && !X(m[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(t, s) {
      return t === "symbol" ? !0 : s ? s["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && s instanceof Symbol : !1;
    }
    function Z(t) {
      var s = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : ne(s, t) ? "symbol" : s;
    }
    function re(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var s = Z(t);
      if (s === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return s;
    }
    function oe(t) {
      var s = re(t);
      switch (s) {
        case "array":
        case "object":
          return "an " + s;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + s;
        default:
          return s;
      }
    }
    function fe(t) {
      return !t.constructor || !t.constructor.name ? I : t.constructor.name;
    }
    return W.checkPropTypes = g, W.resetWarningCache = g.resetWarningCache, W.PropTypes = W, W;
  }, Fe;
}
var Ye, dr;
function Gr() {
  if (dr) return Ye;
  dr = 1;
  var n = /* @__PURE__ */ Le();
  function u() {
  }
  function d() {
  }
  return d.resetWarningCache = u, Ye = function() {
    function c(T, v, h, b, f, R) {
      if (R !== n) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
      }
    }
    c.isRequired = c;
    function g() {
      return c;
    }
    var l = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: g,
      element: c,
      elementType: c,
      instanceOf: g,
      node: c,
      objectOf: g,
      oneOf: g,
      oneOfType: g,
      shape: g,
      exact: g,
      checkPropTypes: d,
      resetWarningCache: u
    };
    return l.PropTypes = l, l;
  }, Ye;
}
var pr;
function Zr() {
  if (pr) return Re.exports;
  if (pr = 1, process.env.NODE_ENV !== "production") {
    var n = yr(), u = !0;
    Re.exports = /* @__PURE__ */ Xr()(n.isElement, u);
  } else
    Re.exports = /* @__PURE__ */ Gr()();
  return Re.exports;
}
var Qr = /* @__PURE__ */ Zr();
const je = /* @__PURE__ */ qr(Qr);
class et {
  constructor(u, d) {
    this.apiKey = u, this.handlers = d, this.ws = null, this.reconnectAttempts = 0, this.maxReconnectAttempts = 3, this.baseReconnectDelay = 1e3, this.isConnecting = !1, this.inactivityTimeout = null, this.manuallyEnded = !1, this.resetInactivityTimer();
  }
  connect() {
    this.isConnecting || (this.manuallyEnded = !1, console.log("Connecting to WebSocket..."), this.ws = new WebSocket(`ws://localhost:3333/ws?apiKey=${this.apiKey}`), this.ws.onopen = () => {
      var u, d;
      console.log("WebSocket connected"), this.isConnecting = !1, this.reconnectAttempts = 0, (d = (u = this.handlers).onConnect) == null || d.call(u);
    }, this.ws.onmessage = (u) => {
      var d, c, g, l, T, v, h, b;
      try {
        const f = JSON.parse(u.data);
        switch (f.event) {
          case "ready":
            console.log("Ready event received"), (c = (d = this.handlers).onReady) == null || c.call(d);
            break;
          case "typing":
            console.log("Typing event received"), (l = (g = this.handlers).onTyping) == null || l.call(g, f.data.status);
            break;
          case "assistant_message":
            console.log("Assistant message received"), (v = (T = this.handlers).onMessage) == null || v.call(T, f.data.assistant_text);
            break;
          default:
            console.warn("Unknown event received:", f.event);
        }
      } catch (f) {
        console.error("Message parsing error:", f), (b = (h = this.handlers).onError) == null || b.call(h, f);
      }
    }, this.ws.onclose = () => {
      console.log("WebSocket closed"), this.isConnecting = !1, this.handleReconnect();
    }, this.ws.onerror = (u) => {
      var d, c;
      console.error("WebSocket error:", u), (c = (d = this.handlers).onError) == null || c.call(d, u);
    });
  }
  resetInactivityTimer() {
    this.inactivityTimeout && clearTimeout(this.inactivityTimeout), this.inactivityTimeout = setTimeout(() => {
      console.log("Connection closed due to inactivity"), this.disconnect();
    }, 12e4);
  }
  sendMessage(u) {
    var d, c, g;
    if (this.resetInactivityTimer(), ((d = this.ws) == null ? void 0 : d.readyState) === WebSocket.OPEN) {
      const l = {
        event: "user_message",
        data: {
          user_text: u
        }
      };
      console.log("Sending message:", l), this.ws.send(JSON.stringify(l)), (g = (c = this.handlers).onLocalMessage) == null || g.call(c, u);
    } else
      throw new Error("WebSocket is not connected");
  }
  handleReconnect() {
    var d, c;
    if (this.manuallyEnded) {
      console.log("Manual disconnect - skipping reconnect");
      return;
    }
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      (c = (d = this.handlers).onError) == null || c.call(d, new Error("Max reconnection attempts reached"));
      return;
    }
    const u = this.baseReconnectDelay * Math.pow(2, this.reconnectAttempts);
    this.reconnectAttempts++, console.log(
      `Attempting to reconnect in ${u}ms (attempt ${this.reconnectAttempts})`
    ), setTimeout(() => this.connect(), u);
  }
  disconnect(u = !1) {
    u && (this.manuallyEnded = !0), this.inactivityTimeout && clearTimeout(this.inactivityTimeout), this.ws && (console.log("Disconnecting WebSocket"), this.ws.close(), this.ws = null);
  }
}
const rt = () => /* @__PURE__ */ p.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: /* @__PURE__ */ p.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), tt = () => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ p.jsx("path", { d: "m22 2-7 20-4-9-9-4Z" }),
      /* @__PURE__ */ p.jsx("path", { d: "M22 2 11 13" })
    ]
  }
), nt = () => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ p.jsx("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ p.jsx("path", { d: "m6 6 12 12" })
    ]
  }
), ot = () => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ p.jsx("path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }),
      /* @__PURE__ */ p.jsx("path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }),
      /* @__PURE__ */ p.jsx("path", { d: "M12 2v4" })
    ]
  }
), gr = () => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    children: [
      /* @__PURE__ */ p.jsx("path", { d: "M12 8V4H8" }),
      /* @__PURE__ */ p.jsx(
        "rect",
        {
          width: "16",
          height: "12",
          x: "4",
          y: "8",
          rx: "2"
        }
      ),
      /* @__PURE__ */ p.jsx("path", { d: "M2 14h2" }),
      /* @__PURE__ */ p.jsx("path", { d: "M20 14h2" }),
      /* @__PURE__ */ p.jsx("path", { d: "M15 13v2" }),
      /* @__PURE__ */ p.jsx("path", { d: "M9 13v2" })
    ]
  }
), at = (n, u = 30) => {
  const [d, c] = se(""), g = Ne(null);
  return Se(() => {
    let l = 0;
    const T = setInterval(() => {
      l < n.length ? (c(n.substring(0, l + 1)), l++, g.current && g.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })) : clearInterval(T);
    }, u);
    return () => clearInterval(T);
  }, [n, u]), { displayedText: d, containerRef: g };
}, mr = ({ message: n, type: u }) => {
  const { displayedText: d, containerRef: c } = at(
    u === "assistant" ? n : ""
  );
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      ref: c,
      className: `flex ${u === "user" ? "justify-end" : "justify-start"} items-end gap-2`,
      children: [
        u === "assistant" && /* @__PURE__ */ p.jsx("div", { className: "h-8 w-8 flex items-center justify-center rounded-full bg-purple-600", children: /* @__PURE__ */ p.jsx(gr, { className: "w-5 h-5 text-white" }) }),
        /* @__PURE__ */ p.jsx(
          "div",
          {
            className: `max-w-[80%] p-3 rounded-lg ${u === "user" ? "bg-purple-600 text-white rounded-br-none font-semibold text-sm" : "bg-gray-100 text-gray-800 rounded-bl-none font-semibold text-sm"}`,
            children: u === "assistant" ? d : n
          }
        )
      ]
    }
  );
};
mr.propTypes = {
  message: je.string.isRequired,
  type: je.string.isRequired
};
const it = () => /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2 py-3 px-2 max-w-[80%] bg-gray-100 rounded-lg rounded-bl-none w-24", children: [
  /* @__PURE__ */ p.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.3s]" }),
  /* @__PURE__ */ p.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.15s]" }),
  /* @__PURE__ */ p.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce" })
] }), br = ({ apiKey: n }) => {
  const [u, d] = se(!1), [c, g] = se([]), [l, T] = se(""), [v, h] = se(!1), [b, f] = se(!1), [R, I] = se(!1), W = Ne(null), q = Ne(null);
  Se(() => (q.current = new et(n, {
    onConnect: () => f(!0),
    onDisconnect: () => f(!1),
    onTyping: () => h(!0),
    onMessage: (_) => {
      h(!1), g((Y) => [
        ...Y,
        { role: "assistant", content: _ }
      ]);
    },
    onLocalMessage: (_) => {
      g((Y) => [...Y, { role: "user", content: _ }]);
    }
  }), () => {
    var _;
    return (_ = q.current) == null ? void 0 : _.disconnect();
  }), [n]), Se(() => {
    u && !b && (q.current.manuallyEnded = !1, q.current.connect());
  }, [u, b]), Se(() => {
    W.current && (W.current.scrollTop = W.current.scrollHeight);
  }, [c, v]);
  const F = (_) => {
    if (_.preventDefault(), !(!l.trim() || !b))
      try {
        q.current.sendMessage(l), T("");
      } catch (Y) {
        console.error("Failed to send message:", Y);
      }
  };
  br.propTypes = {
    apiKey: je.string.isRequired
  };
  const B = (_) => {
    _.key === "Enter" && !_.shiftKey && (_.preventDefault(), F(_));
  }, U = () => {
    u || I(!1), d(!u);
  }, L = () => {
    d(!1), q.current.disconnect(!0), g([]), f(!1), I(!0);
  };
  return /* @__PURE__ */ p.jsxs("div", { className: "fixed bottom-4 right-4 z-[1000]", children: [
    " ",
    /* @__PURE__ */ p.jsx(
      "button",
      {
        onClick: U,
        className: `${u ? "hidden" : "flex"} items-center justify-center w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all duration-200 fixed bottom-4 right-4`,
        children: /* @__PURE__ */ p.jsx(rt, { className: "w-6 h-6" })
      }
    ),
    /* @__PURE__ */ p.jsxs(
      "div",
      {
        className: `${u ? "scale-100 opacity-100" : "scale-0 opacity-0"} origin-bottom-right transition-all duration-200 w-[400px] h-[600px] bg-white rounded-lg shadow-xl flex flex-col`,
        children: [
          /* @__PURE__ */ p.jsxs("div", { className: "bg-purple-600 p-4 rounded-t-lg flex items-center justify-between", children: [
            /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ p.jsx("div", { className: "h-7 w-7 flex items-center justify-center rounded-full bg-white", children: /* @__PURE__ */ p.jsx(gr, { className: "w-5 h-5 text-purple-600" }) }),
              /* @__PURE__ */ p.jsx("h2", { className: "text-white text-lg font-semibold", children: "Chatbot" })
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ p.jsx(
                "button",
                {
                  onClick: L,
                  className: "text-white hover:text-red-200 transition-colors",
                  title: "End Chat",
                  children: /* @__PURE__ */ p.jsx(ot, { className: "w-6 h-6" })
                }
              ),
              /* @__PURE__ */ p.jsx(
                "button",
                {
                  onClick: () => d(!1),
                  className: "text-white hover:text-purple-200 transition-colors",
                  children: /* @__PURE__ */ p.jsx(nt, { className: "w-6 h-6" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ p.jsxs(
            "div",
            {
              ref: W,
              className: "flex-1 overflow-y-auto p-4 space-y-4",
              children: [
                c.map((_, Y) => /* @__PURE__ */ p.jsx(
                  mr,
                  {
                    message: _.content,
                    type: _.role === "user" ? "user" : "assistant"
                  },
                  Y
                )),
                v && /* @__PURE__ */ p.jsx(it, {})
              ]
            }
          ),
          /* @__PURE__ */ p.jsx(
            "form",
            {
              onSubmit: F,
              className: "p-4 border-t",
              children: /* @__PURE__ */ p.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ p.jsx(
                  "textarea",
                  {
                    value: l,
                    onChange: (_) => T(_.target.value),
                    onKeyDown: B,
                    placeholder: "Type a message...",
                    className: "flex-1 resize-none p-2 border rounded-lg focus:outline-none focus:border-purple-600 max-h-32",
                    rows: "1"
                  }
                ),
                /* @__PURE__ */ p.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: !b,
                    className: "p-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
                    onClick: F,
                    children: /* @__PURE__ */ p.jsx(tt, { className: "w-5 h-5" })
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
br.propTypes = {
  apiKey: je.string.isRequired
};
export {
  br as default
};
