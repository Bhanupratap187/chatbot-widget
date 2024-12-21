import vr, { useState as se, useRef as Ne, useEffect as Se } from "react";
import { FaRobot as yr } from "react-icons/fa6";
import { MessageSquare as Lr, Power as Ur, X as Vr, Send as zr } from "lucide-react";
function Jr(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var _e = { exports: {} }, Ee = {};
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
function Kr() {
  if (rr) return Ee;
  rr = 1;
  var n = vr, u = Symbol.for("react.element"), d = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, h = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(p, y, g) {
    var f, _ = {}, k = null, W = null;
    g !== void 0 && (k = "" + g), y.key !== void 0 && (k = "" + y.key), y.ref !== void 0 && (W = y.ref);
    for (f in y) c.call(y, f) && !l.hasOwnProperty(f) && (_[f] = y[f]);
    if (p && p.defaultProps) for (f in y = p.defaultProps, y) _[f] === void 0 && (_[f] = y[f]);
    return { $$typeof: u, type: p, key: k, ref: W, props: _, _owner: h.current };
  }
  return Ee.Fragment = d, Ee.jsx = E, Ee.jsxs = E, Ee;
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
function Br() {
  return tr || (tr = 1, process.env.NODE_ENV !== "production" && function() {
    var n = vr, u = Symbol.for("react.element"), d = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), p = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), L = Symbol.iterator, F = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = L && e[L] || e[F];
      return typeof r == "function" ? r : null;
    }
    var U = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), v = 1; v < r; v++)
          o[v - 1] = arguments[v];
        x("error", e, o);
      }
    }
    function x(e, r, o) {
      {
        var v = U.ReactDebugCurrentFrame, I = v.getStackAddendum();
        I !== "" && (r += "%s", o = o.concat([I]));
        var N = o.map(function(j) {
          return String(j);
        });
        N.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, N);
      }
    }
    var Y = !1, i = !1, te = !1, ye = !1, he = !1, ce;
    ce = Symbol.for("react.module.reference");
    function me(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === l || he || e === h || e === g || e === f || ye || e === W || Y || i || te || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === _ || e.$$typeof === E || e.$$typeof === p || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function ue(e, r, o) {
      var v = e.displayName;
      if (v)
        return v;
      var I = r.displayName || r.name || "";
      return I !== "" ? o + "(" + I + ")" : o;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function X(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case h:
          return "StrictMode";
        case g:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var r = e;
            return le(r) + ".Consumer";
          case E:
            var o = e;
            return le(o._context) + ".Provider";
          case y:
            return ue(e, e.render, "ForwardRef");
          case _:
            var v = e.displayName || null;
            return v !== null ? v : X(e.type) || "Memo";
          case k: {
            var I = e, N = I._payload, j = I._init;
            try {
              return X(j(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, ne = 0, Z, re, ae, fe, t, s, w;
    function R() {
    }
    R.__reactDisabledLog = !0;
    function m() {
      {
        if (ne === 0) {
          Z = console.log, re = console.info, ae = console.warn, fe = console.error, t = console.group, s = console.groupCollapsed, w = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: R,
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
            log: G({}, e, {
              value: Z
            }),
            info: G({}, e, {
              value: re
            }),
            warn: G({}, e, {
              value: ae
            }),
            error: G({}, e, {
              value: fe
            }),
            group: G({}, e, {
              value: t
            }),
            groupCollapsed: G({}, e, {
              value: s
            }),
            groupEnd: G({}, e, {
              value: w
            })
          });
        }
        ne < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var b = U.ReactCurrentDispatcher, T;
    function S(e, r, o) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (I) {
            var v = I.stack.trim().match(/\n( *(at )?)/);
            T = v && v[1] || "";
          }
        return `
` + T + e;
      }
    }
    var A = !1, O;
    {
      var K = typeof WeakMap == "function" ? WeakMap : Map;
      O = new K();
    }
    function a(e, r) {
      if (!e || A)
        return "";
      {
        var o = O.get(e);
        if (o !== void 0)
          return o;
      }
      var v;
      A = !0;
      var I = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = b.current, b.current = null, m();
      try {
        if (r) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (H) {
              v = H;
            }
            Reflect.construct(e, [], j);
          } else {
            try {
              j.call();
            } catch (H) {
              v = H;
            }
            e.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            v = H;
          }
          e();
        }
      } catch (H) {
        if (H && v && typeof H.stack == "string") {
          for (var C = H.stack.split(`
`), B = v.stack.split(`
`), V = C.length - 1, J = B.length - 1; V >= 1 && J >= 0 && C[V] !== B[J]; )
            J--;
          for (; V >= 1 && J >= 0; V--, J--)
            if (C[V] !== B[J]) {
              if (V !== 1 || J !== 1)
                do
                  if (V--, J--, J < 0 || C[V] !== B[J]) {
                    var ee = `
` + C[V].replace(" at new ", " at ");
                    return e.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", e.displayName)), typeof e == "function" && O.set(e, ee), ee;
                  }
                while (V >= 1 && J >= 0);
              break;
            }
        }
      } finally {
        A = !1, b.current = N, P(), Error.prepareStackTrace = I;
      }
      var ve = e ? e.displayName || e.name : "", ie = ve ? S(ve) : "";
      return typeof e == "function" && O.set(e, ie), ie;
    }
    function Q(e, r, o) {
      return a(e, !1);
    }
    function de(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function oe(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return a(e, de(e));
      if (typeof e == "string")
        return S(e);
      switch (e) {
        case g:
          return S("Suspense");
        case f:
          return S("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Q(e.render);
          case _:
            return oe(e.type, r, o);
          case k: {
            var v = e, I = v._payload, N = v._init;
            try {
              return oe(N(I), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ge = Object.prototype.hasOwnProperty, Le = {}, Ue = U.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var r = e._owner, o = oe(e.type, e._source, r ? r.type : null);
        Ue.setExtraStackFrame(o);
      } else
        Ue.setExtraStackFrame(null);
    }
    function Er(e, r, o, v, I) {
      {
        var N = Function.call.bind(ge);
        for (var j in e)
          if (N(e, j)) {
            var C = void 0;
            try {
              if (typeof e[j] != "function") {
                var B = Error((v || "React class") + ": " + o + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              C = e[j](r, j, v, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              C = V;
            }
            C && !(C instanceof Error) && (Re(I), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", o, j, typeof C), Re(null)), C instanceof Error && !(C.message in Le) && (Le[C.message] = !0, Re(I), q("Failed %s type: %s", o, C.message), Re(null));
          }
      }
    }
    var Tr = Array.isArray;
    function Ce(e) {
      return Tr(e);
    }
    function Rr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function _r(e) {
      try {
        return Ve(e), !1;
      } catch {
        return !0;
      }
    }
    function Ve(e) {
      return "" + e;
    }
    function ze(e) {
      if (_r(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Rr(e)), Ve(e);
    }
    var be = U.ReactCurrentOwner, xr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Je, Ke, Pe;
    Pe = {};
    function wr(e) {
      if (ge.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Sr(e) {
      if (ge.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Or(e, r) {
      if (typeof e.ref == "string" && be.current && r && be.current.stateNode !== r) {
        var o = X(be.current.type);
        Pe[o] || (q('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', X(be.current.type), e.ref), Pe[o] = !0);
      }
    }
    function Cr(e, r) {
      {
        var o = function() {
          Je || (Je = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Pr(e, r) {
      {
        var o = function() {
          Ke || (Ke = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var jr = function(e, r, o, v, I, N, j) {
      var C = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: u,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
        props: j,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return C._store = {}, Object.defineProperty(C._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(C, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(C, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: I
      }), Object.freeze && (Object.freeze(C.props), Object.freeze(C)), C;
    };
    function Ar(e, r, o, v, I) {
      {
        var N, j = {}, C = null, B = null;
        o !== void 0 && (ze(o), C = "" + o), Sr(r) && (ze(r.key), C = "" + r.key), wr(r) && (B = r.ref, Or(r, I));
        for (N in r)
          ge.call(r, N) && !xr.hasOwnProperty(N) && (j[N] = r[N]);
        if (e && e.defaultProps) {
          var V = e.defaultProps;
          for (N in V)
            j[N] === void 0 && (j[N] = V[N]);
        }
        if (C || B) {
          var J = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          C && Cr(j, J), B && Pr(j, J);
        }
        return jr(e, C, B, I, v, be.current, j);
      }
    }
    var je = U.ReactCurrentOwner, Be = U.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var r = e._owner, o = oe(e.type, e._source, r ? r.type : null);
        Be.setExtraStackFrame(o);
      } else
        Be.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function ke(e) {
      return typeof e == "object" && e !== null && e.$$typeof === u;
    }
    function Xe() {
      {
        if (je.current) {
          var e = X(je.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function kr(e) {
      return "";
    }
    var Ge = {};
    function Ir(e) {
      {
        var r = Xe();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function He(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Ir(r);
        if (Ge[o])
          return;
        Ge[o] = !0;
        var v = "";
        e && e._owner && e._owner !== je.current && (v = " It was passed a child from " + X(e._owner.type) + "."), pe(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, v), pe(null);
      }
    }
    function Ze(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var o = 0; o < e.length; o++) {
            var v = e[o];
            ke(v) && He(v, r);
          }
        else if (ke(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = z(e);
          if (typeof I == "function" && I !== e.entries)
            for (var N = I.call(e), j; !(j = N.next()).done; )
              ke(j.value) && He(j.value, r);
        }
      }
    }
    function $r(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          o = r.propTypes;
        else
          return;
        if (o) {
          var v = X(r);
          Er(o, e.props, "prop", v, e);
        } else if (r.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var I = X(r);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Mr(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var v = r[o];
          if (v !== "children" && v !== "key") {
            pe(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    var Qe = {};
    function er(e, r, o, v, I, N) {
      {
        var j = me(e);
        if (!j) {
          var C = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (C += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = kr();
          B ? C += B : C += Xe();
          var V;
          e === null ? V = "null" : Ce(e) ? V = "array" : e !== void 0 && e.$$typeof === u ? (V = "<" + (X(e.type) || "Unknown") + " />", C = " Did you accidentally export a JSX literal instead of a component?") : V = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, C);
        }
        var J = Ar(e, r, o, I, N);
        if (J == null)
          return J;
        if (j) {
          var ee = r.children;
          if (ee !== void 0)
            if (v)
              if (Ce(ee)) {
                for (var ve = 0; ve < ee.length; ve++)
                  Ze(ee[ve], e);
                Object.freeze && Object.freeze(ee);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ze(ee, e);
        }
        if (ge.call(r, "key")) {
          var ie = X(e), H = Object.keys(r).filter(function(qr) {
            return qr !== "key";
          }), Ie = H.length > 0 ? "{key: someKey, " + H.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Qe[ie + Ie]) {
            var Nr = H.length > 0 ? "{" + H.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ie, ie, Nr, ie), Qe[ie + Ie] = !0;
          }
        }
        return e === c ? Mr(J) : $r(J), J;
      }
    }
    function Dr(e, r, o) {
      return er(e, r, o, !0);
    }
    function Wr(e, r, o) {
      return er(e, r, o, !1);
    }
    var Fr = Wr, Yr = Dr;
    Te.Fragment = c, Te.jsx = Fr, Te.jsxs = Yr;
  }()), Te;
}
var nr;
function Xr() {
  return nr || (nr = 1, process.env.NODE_ENV === "production" ? _e.exports = Kr() : _e.exports = Br()), _e.exports;
}
var D = Xr(), xe = { exports: {} }, we = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function Gr() {
  if (ar) return $;
  ar = 1;
  var n = typeof Symbol == "function" && Symbol.for, u = n ? Symbol.for("react.element") : 60103, d = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, h = n ? Symbol.for("react.strict_mode") : 60108, l = n ? Symbol.for("react.profiler") : 60114, E = n ? Symbol.for("react.provider") : 60109, p = n ? Symbol.for("react.context") : 60110, y = n ? Symbol.for("react.async_mode") : 60111, g = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, _ = n ? Symbol.for("react.suspense") : 60113, k = n ? Symbol.for("react.suspense_list") : 60120, W = n ? Symbol.for("react.memo") : 60115, L = n ? Symbol.for("react.lazy") : 60116, F = n ? Symbol.for("react.block") : 60121, z = n ? Symbol.for("react.fundamental") : 60117, U = n ? Symbol.for("react.responder") : 60118, q = n ? Symbol.for("react.scope") : 60119;
  function x(i) {
    if (typeof i == "object" && i !== null) {
      var te = i.$$typeof;
      switch (te) {
        case u:
          switch (i = i.type, i) {
            case y:
            case g:
            case c:
            case l:
            case h:
            case _:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case p:
                case f:
                case L:
                case W:
                case E:
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
    return x(i) === g;
  }
  return $.AsyncMode = y, $.ConcurrentMode = g, $.ContextConsumer = p, $.ContextProvider = E, $.Element = u, $.ForwardRef = f, $.Fragment = c, $.Lazy = L, $.Memo = W, $.Portal = d, $.Profiler = l, $.StrictMode = h, $.Suspense = _, $.isAsyncMode = function(i) {
    return Y(i) || x(i) === y;
  }, $.isConcurrentMode = Y, $.isContextConsumer = function(i) {
    return x(i) === p;
  }, $.isContextProvider = function(i) {
    return x(i) === E;
  }, $.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === u;
  }, $.isForwardRef = function(i) {
    return x(i) === f;
  }, $.isFragment = function(i) {
    return x(i) === c;
  }, $.isLazy = function(i) {
    return x(i) === L;
  }, $.isMemo = function(i) {
    return x(i) === W;
  }, $.isPortal = function(i) {
    return x(i) === d;
  }, $.isProfiler = function(i) {
    return x(i) === l;
  }, $.isStrictMode = function(i) {
    return x(i) === h;
  }, $.isSuspense = function(i) {
    return x(i) === _;
  }, $.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === c || i === g || i === l || i === h || i === _ || i === k || typeof i == "object" && i !== null && (i.$$typeof === L || i.$$typeof === W || i.$$typeof === E || i.$$typeof === p || i.$$typeof === f || i.$$typeof === z || i.$$typeof === U || i.$$typeof === q || i.$$typeof === F);
  }, $.typeOf = x, $;
}
var M = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function Hr() {
  return or || (or = 1, process.env.NODE_ENV !== "production" && function() {
    var n = typeof Symbol == "function" && Symbol.for, u = n ? Symbol.for("react.element") : 60103, d = n ? Symbol.for("react.portal") : 60106, c = n ? Symbol.for("react.fragment") : 60107, h = n ? Symbol.for("react.strict_mode") : 60108, l = n ? Symbol.for("react.profiler") : 60114, E = n ? Symbol.for("react.provider") : 60109, p = n ? Symbol.for("react.context") : 60110, y = n ? Symbol.for("react.async_mode") : 60111, g = n ? Symbol.for("react.concurrent_mode") : 60111, f = n ? Symbol.for("react.forward_ref") : 60112, _ = n ? Symbol.for("react.suspense") : 60113, k = n ? Symbol.for("react.suspense_list") : 60120, W = n ? Symbol.for("react.memo") : 60115, L = n ? Symbol.for("react.lazy") : 60116, F = n ? Symbol.for("react.block") : 60121, z = n ? Symbol.for("react.fundamental") : 60117, U = n ? Symbol.for("react.responder") : 60118, q = n ? Symbol.for("react.scope") : 60119;
    function x(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === c || a === g || a === l || a === h || a === _ || a === k || typeof a == "object" && a !== null && (a.$$typeof === L || a.$$typeof === W || a.$$typeof === E || a.$$typeof === p || a.$$typeof === f || a.$$typeof === z || a.$$typeof === U || a.$$typeof === q || a.$$typeof === F);
    }
    function Y(a) {
      if (typeof a == "object" && a !== null) {
        var Q = a.$$typeof;
        switch (Q) {
          case u:
            var de = a.type;
            switch (de) {
              case y:
              case g:
              case c:
              case l:
              case h:
              case _:
                return de;
              default:
                var oe = de && de.$$typeof;
                switch (oe) {
                  case p:
                  case f:
                  case L:
                  case W:
                  case E:
                    return oe;
                  default:
                    return Q;
                }
            }
          case d:
            return Q;
        }
      }
    }
    var i = y, te = g, ye = p, he = E, ce = u, me = f, ue = c, le = L, X = W, G = d, ne = l, Z = h, re = _, ae = !1;
    function fe(a) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(a) || Y(a) === y;
    }
    function t(a) {
      return Y(a) === g;
    }
    function s(a) {
      return Y(a) === p;
    }
    function w(a) {
      return Y(a) === E;
    }
    function R(a) {
      return typeof a == "object" && a !== null && a.$$typeof === u;
    }
    function m(a) {
      return Y(a) === f;
    }
    function P(a) {
      return Y(a) === c;
    }
    function b(a) {
      return Y(a) === L;
    }
    function T(a) {
      return Y(a) === W;
    }
    function S(a) {
      return Y(a) === d;
    }
    function A(a) {
      return Y(a) === l;
    }
    function O(a) {
      return Y(a) === h;
    }
    function K(a) {
      return Y(a) === _;
    }
    M.AsyncMode = i, M.ConcurrentMode = te, M.ContextConsumer = ye, M.ContextProvider = he, M.Element = ce, M.ForwardRef = me, M.Fragment = ue, M.Lazy = le, M.Memo = X, M.Portal = G, M.Profiler = ne, M.StrictMode = Z, M.Suspense = re, M.isAsyncMode = fe, M.isConcurrentMode = t, M.isContextConsumer = s, M.isContextProvider = w, M.isElement = R, M.isForwardRef = m, M.isFragment = P, M.isLazy = b, M.isMemo = T, M.isPortal = S, M.isProfiler = A, M.isStrictMode = O, M.isSuspense = K, M.isValidElementType = x, M.typeOf = Y;
  }()), M;
}
var ir;
function hr() {
  return ir || (ir = 1, process.env.NODE_ENV === "production" ? we.exports = Gr() : we.exports = Hr()), we.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var $e, sr;
function Zr() {
  if (sr) return $e;
  sr = 1;
  var n = Object.getOwnPropertySymbols, u = Object.prototype.hasOwnProperty, d = Object.prototype.propertyIsEnumerable;
  function c(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function h() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var E = {}, p = 0; p < 10; p++)
        E["_" + String.fromCharCode(p)] = p;
      var y = Object.getOwnPropertyNames(E).map(function(f) {
        return E[f];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        g[f] = f;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return $e = h() ? Object.assign : function(l, E) {
    for (var p, y = c(l), g, f = 1; f < arguments.length; f++) {
      p = Object(arguments[f]);
      for (var _ in p)
        u.call(p, _) && (y[_] = p[_]);
      if (n) {
        g = n(p);
        for (var k = 0; k < g.length; k++)
          d.call(p, g[k]) && (y[g[k]] = p[g[k]]);
      }
    }
    return y;
  }, $e;
}
var Me, cr;
function qe() {
  if (cr) return Me;
  cr = 1;
  var n = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Me = n, Me;
}
var De, ur;
function mr() {
  return ur || (ur = 1, De = Function.call.bind(Object.prototype.hasOwnProperty)), De;
}
var We, lr;
function Qr() {
  if (lr) return We;
  lr = 1;
  var n = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var u = /* @__PURE__ */ qe(), d = {}, c = /* @__PURE__ */ mr();
    n = function(l) {
      var E = "Warning: " + l;
      typeof console < "u" && console.error(E);
      try {
        throw new Error(E);
      } catch {
      }
    };
  }
  function h(l, E, p, y, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in l)
        if (c(l, f)) {
          var _;
          try {
            if (typeof l[f] != "function") {
              var k = Error(
                (y || "React class") + ": " + p + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw k.name = "Invariant Violation", k;
            }
            _ = l[f](E, f, y, p, null, u);
          } catch (L) {
            _ = L;
          }
          if (_ && !(_ instanceof Error) && n(
            (y || "React class") + ": type specification of " + p + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in d)) {
            d[_.message] = !0;
            var W = g ? g() : "";
            n(
              "Failed " + p + " type: " + _.message + (W ?? "")
            );
          }
        }
    }
  }
  return h.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (d = {});
  }, We = h, We;
}
var Fe, fr;
function et() {
  if (fr) return Fe;
  fr = 1;
  var n = hr(), u = Zr(), d = /* @__PURE__ */ qe(), c = /* @__PURE__ */ mr(), h = /* @__PURE__ */ Qr(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(p) {
    var y = "Warning: " + p;
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  });
  function E() {
    return null;
  }
  return Fe = function(p, y) {
    var g = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function _(t) {
      var s = t && (g && t[g] || t[f]);
      if (typeof s == "function")
        return s;
    }
    var k = "<<anonymous>>", W = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: q(),
      arrayOf: x,
      element: Y(),
      elementType: i(),
      instanceOf: te,
      node: me(),
      objectOf: he,
      oneOf: ye,
      oneOfType: ce,
      shape: le,
      exact: X
    };
    function L(t, s) {
      return t === s ? t !== 0 || 1 / t === 1 / s : t !== t && s !== s;
    }
    function F(t, s) {
      this.message = t, this.data = s && typeof s == "object" ? s : {}, this.stack = "";
    }
    F.prototype = Error.prototype;
    function z(t) {
      if (process.env.NODE_ENV !== "production")
        var s = {}, w = 0;
      function R(P, b, T, S, A, O, K) {
        if (S = S || k, O = O || T, K !== d) {
          if (y) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = S + ":" + T;
            !s[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            w < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + O + "` prop on `" + S + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), s[Q] = !0, w++);
          }
        }
        return b[T] == null ? P ? b[T] === null ? new F("The " + A + " `" + O + "` is marked as required " + ("in `" + S + "`, but its value is `null`.")) : new F("The " + A + " `" + O + "` is marked as required in " + ("`" + S + "`, but its value is `undefined`.")) : null : t(b, T, S, A, O);
      }
      var m = R.bind(null, !1);
      return m.isRequired = R.bind(null, !0), m;
    }
    function U(t) {
      function s(w, R, m, P, b, T) {
        var S = w[R], A = Z(S);
        if (A !== t) {
          var O = re(S);
          return new F(
            "Invalid " + P + " `" + b + "` of type " + ("`" + O + "` supplied to `" + m + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return z(s);
    }
    function q() {
      return z(E);
    }
    function x(t) {
      function s(w, R, m, P, b) {
        if (typeof t != "function")
          return new F("Property `" + b + "` of component `" + m + "` has invalid PropType notation inside arrayOf.");
        var T = w[R];
        if (!Array.isArray(T)) {
          var S = Z(T);
          return new F("Invalid " + P + " `" + b + "` of type " + ("`" + S + "` supplied to `" + m + "`, expected an array."));
        }
        for (var A = 0; A < T.length; A++) {
          var O = t(T, A, m, P, b + "[" + A + "]", d);
          if (O instanceof Error)
            return O;
        }
        return null;
      }
      return z(s);
    }
    function Y() {
      function t(s, w, R, m, P) {
        var b = s[w];
        if (!p(b)) {
          var T = Z(b);
          return new F("Invalid " + m + " `" + P + "` of type " + ("`" + T + "` supplied to `" + R + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(t);
    }
    function i() {
      function t(s, w, R, m, P) {
        var b = s[w];
        if (!n.isValidElementType(b)) {
          var T = Z(b);
          return new F("Invalid " + m + " `" + P + "` of type " + ("`" + T + "` supplied to `" + R + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(t);
    }
    function te(t) {
      function s(w, R, m, P, b) {
        if (!(w[R] instanceof t)) {
          var T = t.name || k, S = fe(w[R]);
          return new F("Invalid " + P + " `" + b + "` of type " + ("`" + S + "` supplied to `" + m + "`, expected ") + ("instance of `" + T + "`."));
        }
        return null;
      }
      return z(s);
    }
    function ye(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), E;
      function s(w, R, m, P, b) {
        for (var T = w[R], S = 0; S < t.length; S++)
          if (L(T, t[S]))
            return null;
        var A = JSON.stringify(t, function(K, a) {
          var Q = re(a);
          return Q === "symbol" ? String(a) : a;
        });
        return new F("Invalid " + P + " `" + b + "` of value `" + String(T) + "` " + ("supplied to `" + m + "`, expected one of " + A + "."));
      }
      return z(s);
    }
    function he(t) {
      function s(w, R, m, P, b) {
        if (typeof t != "function")
          return new F("Property `" + b + "` of component `" + m + "` has invalid PropType notation inside objectOf.");
        var T = w[R], S = Z(T);
        if (S !== "object")
          return new F("Invalid " + P + " `" + b + "` of type " + ("`" + S + "` supplied to `" + m + "`, expected an object."));
        for (var A in T)
          if (c(T, A)) {
            var O = t(T, A, m, P, b + "." + A, d);
            if (O instanceof Error)
              return O;
          }
        return null;
      }
      return z(s);
    }
    function ce(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      for (var s = 0; s < t.length; s++) {
        var w = t[s];
        if (typeof w != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(w) + " at index " + s + "."
          ), E;
      }
      function R(m, P, b, T, S) {
        for (var A = [], O = 0; O < t.length; O++) {
          var K = t[O], a = K(m, P, b, T, S, d);
          if (a == null)
            return null;
          a.data && c(a.data, "expectedType") && A.push(a.data.expectedType);
        }
        var Q = A.length > 0 ? ", expected one of type [" + A.join(", ") + "]" : "";
        return new F("Invalid " + T + " `" + S + "` supplied to " + ("`" + b + "`" + Q + "."));
      }
      return z(R);
    }
    function me() {
      function t(s, w, R, m, P) {
        return G(s[w]) ? null : new F("Invalid " + m + " `" + P + "` supplied to " + ("`" + R + "`, expected a ReactNode."));
      }
      return z(t);
    }
    function ue(t, s, w, R, m) {
      return new F(
        (t || "React class") + ": " + s + " type `" + w + "." + R + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + m + "`."
      );
    }
    function le(t) {
      function s(w, R, m, P, b) {
        var T = w[R], S = Z(T);
        if (S !== "object")
          return new F("Invalid " + P + " `" + b + "` of type `" + S + "` " + ("supplied to `" + m + "`, expected `object`."));
        for (var A in t) {
          var O = t[A];
          if (typeof O != "function")
            return ue(m, P, b, A, re(O));
          var K = O(T, A, m, P, b + "." + A, d);
          if (K)
            return K;
        }
        return null;
      }
      return z(s);
    }
    function X(t) {
      function s(w, R, m, P, b) {
        var T = w[R], S = Z(T);
        if (S !== "object")
          return new F("Invalid " + P + " `" + b + "` of type `" + S + "` " + ("supplied to `" + m + "`, expected `object`."));
        var A = u({}, w[R], t);
        for (var O in A) {
          var K = t[O];
          if (c(t, O) && typeof K != "function")
            return ue(m, P, b, O, re(K));
          if (!K)
            return new F(
              "Invalid " + P + " `" + b + "` key `" + O + "` supplied to `" + m + "`.\nBad object: " + JSON.stringify(w[R], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var a = K(T, O, m, P, b + "." + O, d);
          if (a)
            return a;
        }
        return null;
      }
      return z(s);
    }
    function G(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(G);
          if (t === null || p(t))
            return !0;
          var s = _(t);
          if (s) {
            var w = s.call(t), R;
            if (s !== t.entries) {
              for (; !(R = w.next()).done; )
                if (!G(R.value))
                  return !1;
            } else
              for (; !(R = w.next()).done; ) {
                var m = R.value;
                if (m && !G(m[1]))
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
    function ae(t) {
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
      return !t.constructor || !t.constructor.name ? k : t.constructor.name;
    }
    return W.checkPropTypes = h, W.resetWarningCache = h.resetWarningCache, W.PropTypes = W, W;
  }, Fe;
}
var Ye, dr;
function rt() {
  if (dr) return Ye;
  dr = 1;
  var n = /* @__PURE__ */ qe();
  function u() {
  }
  function d() {
  }
  return d.resetWarningCache = u, Ye = function() {
    function c(E, p, y, g, f, _) {
      if (_ !== n) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    c.isRequired = c;
    function h() {
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
      arrayOf: h,
      element: c,
      elementType: c,
      instanceOf: h,
      node: c,
      objectOf: h,
      oneOf: h,
      oneOfType: h,
      shape: h,
      exact: h,
      checkPropTypes: d,
      resetWarningCache: u
    };
    return l.PropTypes = l, l;
  }, Ye;
}
var pr;
function tt() {
  if (pr) return xe.exports;
  if (pr = 1, process.env.NODE_ENV !== "production") {
    var n = hr(), u = !0;
    xe.exports = /* @__PURE__ */ et()(n.isElement, u);
  } else
    xe.exports = /* @__PURE__ */ rt()();
  return xe.exports;
}
var nt = /* @__PURE__ */ tt();
const Oe = /* @__PURE__ */ Jr(nt);
class at {
  constructor(u, d) {
    this.apiKey = u, this.handlers = d, this.ws = null, this.reconnectAttempts = 0, this.maxReconnectAttempts = 3, this.baseReconnectDelay = 1e3, this.isConnecting = !1, this.inactivityTimeout = null, this.manuallyEnded = !1, this.resetInactivityTimer();
  }
  connect() {
    this.isConnecting || (this.manuallyEnded = !1, console.log("Connecting to WebSocket..."), this.ws = new WebSocket(`ws://localhost:3333/ws?apiKey=${this.apiKey}`), this.ws.onopen = () => {
      var u, d;
      console.log("WebSocket connected"), this.isConnecting = !1, this.reconnectAttempts = 0, (d = (u = this.handlers).onConnect) == null || d.call(u);
    }, this.ws.onmessage = (u) => {
      var d, c, h, l, E, p, y, g;
      try {
        const f = JSON.parse(u.data);
        switch (f.event) {
          case "ready":
            console.log("Ready event received"), (c = (d = this.handlers).onReady) == null || c.call(d);
            break;
          case "typing":
            console.log("Typing event received"), (l = (h = this.handlers).onTyping) == null || l.call(h, f.data.status);
            break;
          case "assistant_message":
            console.log("Assistant message received"), (p = (E = this.handlers).onMessage) == null || p.call(E, f.data.assistant_text);
            break;
          default:
            console.warn("Unknown event received:", f.event);
        }
      } catch (f) {
        console.error("Message parsing error:", f), (g = (y = this.handlers).onError) == null || g.call(y, f);
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
    var d, c, h;
    if (this.resetInactivityTimer(), ((d = this.ws) == null ? void 0 : d.readyState) === WebSocket.OPEN) {
      const l = {
        event: "user_message",
        data: {
          user_text: u
        }
      };
      console.log("Sending message:", l), this.ws.send(JSON.stringify(l)), (h = (c = this.handlers).onLocalMessage) == null || h.call(c, u);
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
const ot = (n, u = 30) => {
  const [d, c] = se(""), h = Ne(null);
  return Se(() => {
    let l = 0;
    const E = setInterval(() => {
      l < n.length ? (c(n.substring(0, l + 1)), l++, h.current && h.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })) : clearInterval(E);
    }, u);
    return () => clearInterval(E);
  }, [n, u]), { displayedText: d, containerRef: h };
}, gr = ({ message: n, type: u }) => {
  const { displayedText: d, containerRef: c } = ot(
    u === "assistant" ? n : ""
  );
  return /* @__PURE__ */ D.jsxs(
    "div",
    {
      ref: c,
      className: `flex ${u === "user" ? "justify-end" : "justify-start"} items-end gap-2`,
      children: [
        u === "assistant" && /* @__PURE__ */ D.jsx("div", { className: "h-8 w-8 flex items-center justify-center rounded-full bg-purple-600", children: /* @__PURE__ */ D.jsx(yr, { className: "w-5 h-5 text-white" }) }),
        /* @__PURE__ */ D.jsx(
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
gr.propTypes = {
  message: Oe.string.isRequired,
  type: Oe.string.isRequired
};
const it = () => /* @__PURE__ */ D.jsxs("div", { className: "flex gap-2 py-3 px-2 max-w-[80%] bg-gray-100 rounded-lg rounded-bl-none w-24", children: [
  /* @__PURE__ */ D.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.3s]" }),
  /* @__PURE__ */ D.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.15s]" }),
  /* @__PURE__ */ D.jsx("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce" })
] }), br = ({ apiKey: n }) => {
  const [u, d] = se(!1), [c, h] = se([]), [l, E] = se(""), [p, y] = se(!1), [g, f] = se(!1), [_, k] = se(!1), W = Ne(null), L = Ne(null);
  Se(() => (L.current = new at(n, {
    onConnect: () => f(!0),
    onDisconnect: () => f(!1),
    onTyping: () => y(!0),
    onMessage: (x) => {
      y(!1), h((Y) => [
        ...Y,
        { role: "assistant", content: x }
      ]);
    },
    onLocalMessage: (x) => {
      h((Y) => [...Y, { role: "user", content: x }]);
    }
  }), () => {
    var x;
    return (x = L.current) == null ? void 0 : x.disconnect();
  }), [n]), Se(() => {
    u && !g && (L.current.manuallyEnded = !1, L.current.connect());
  }, [u, g]), Se(() => {
    W.current && (W.current.scrollTop = W.current.scrollHeight);
  }, [c, p]);
  const F = (x) => {
    if (x.preventDefault(), !(!l.trim() || !g))
      try {
        L.current.sendMessage(l), E("");
      } catch (Y) {
        console.error("Failed to send message:", Y);
      }
  };
  br.propTypes = {
    apiKey: Oe.string.isRequired
  };
  const z = (x) => {
    x.key === "Enter" && !x.shiftKey && (x.preventDefault(), F(x));
  }, U = () => {
    u || k(!1), d(!u);
  }, q = () => {
    d(!1), L.current.disconnect(!0), h([]), f(!1), k(!0);
  };
  return /* @__PURE__ */ D.jsxs("div", { className: "fixed bottom-4 right-4 z-[1000]", children: [
    " ",
    /* @__PURE__ */ D.jsx(
      "button",
      {
        onClick: U,
        className: `${u ? "hidden" : "flex"} items-center justify-center w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all duration-200 fixed bottom-4 right-4`,
        children: /* @__PURE__ */ D.jsx(Lr, { className: "w-6 h-6" })
      }
    ),
    /* @__PURE__ */ D.jsxs(
      "div",
      {
        className: `${u ? "scale-100 opacity-100" : "scale-0 opacity-0"} origin-bottom-right transition-all duration-200 w-[400px] h-[600px] bg-white rounded-lg shadow-xl flex flex-col`,
        children: [
          /* @__PURE__ */ D.jsxs("div", { className: "bg-purple-600 p-4 rounded-t-lg flex items-center justify-between", children: [
            /* @__PURE__ */ D.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ D.jsx("div", { className: "h-7 w-7 flex items-center justify-center rounded-full bg-white", children: /* @__PURE__ */ D.jsx(yr, { className: "w-5 h-5 text-purple-600" }) }),
              /* @__PURE__ */ D.jsx("h2", { className: "text-white text-lg font-semibold", children: "Chatbot" })
            ] }),
            /* @__PURE__ */ D.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ D.jsx(
                "button",
                {
                  onClick: q,
                  className: "text-white hover:text-red-200 transition-colors",
                  title: "End Chat",
                  children: /* @__PURE__ */ D.jsx(Ur, { className: "w-6 h-6" })
                }
              ),
              /* @__PURE__ */ D.jsx(
                "button",
                {
                  onClick: () => d(!1),
                  className: "text-white hover:text-purple-200 transition-colors",
                  children: /* @__PURE__ */ D.jsx(Vr, { className: "w-6 h-6" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ D.jsxs(
            "div",
            {
              ref: W,
              className: "flex-1 overflow-y-auto p-4 space-y-4",
              children: [
                c.map((x, Y) => /* @__PURE__ */ D.jsx(
                  gr,
                  {
                    message: x.content,
                    type: x.role === "user" ? "user" : "assistant"
                  },
                  Y
                )),
                p && /* @__PURE__ */ D.jsx(it, {})
              ]
            }
          ),
          /* @__PURE__ */ D.jsx(
            "form",
            {
              onSubmit: F,
              className: "p-4 border-t",
              children: /* @__PURE__ */ D.jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ D.jsx(
                  "textarea",
                  {
                    value: l,
                    onChange: (x) => E(x.target.value),
                    onKeyDown: z,
                    placeholder: "Type a message...",
                    className: "flex-1 resize-none p-2 border rounded-lg focus:outline-none focus:border-purple-600 max-h-32",
                    rows: "1"
                  }
                ),
                /* @__PURE__ */ D.jsx(
                  "button",
                  {
                    type: "submit",
                    disabled: !g,
                    className: "p-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
                    onClick: F,
                    children: /* @__PURE__ */ D.jsx(zr, { className: "w-5 h-5" })
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
  apiKey: Oe.string.isRequired
};
export {
  br as default
};
