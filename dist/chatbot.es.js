import { jsx as m, jsxs as W } from "react/jsx-runtime";
import { useState as F, useRef as de, useEffect as X } from "react";
function Ae(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var H = { exports: {} }, J = { exports: {} }, S = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function Me() {
  if (he) return S;
  he = 1;
  var t = typeof Symbol == "function" && Symbol.for, i = t ? Symbol.for("react.element") : 60103, c = t ? Symbol.for("react.portal") : 60106, s = t ? Symbol.for("react.fragment") : 60107, d = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, b = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, C = t ? Symbol.for("react.async_mode") : 60111, w = t ? Symbol.for("react.concurrent_mode") : 60111, u = t ? Symbol.for("react.forward_ref") : 60112, P = t ? Symbol.for("react.suspense") : 60113, k = t ? Symbol.for("react.suspense_list") : 60120, M = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, _ = t ? Symbol.for("react.block") : 60121, j = t ? Symbol.for("react.fundamental") : 60117, N = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
  function y(n) {
    if (typeof n == "object" && n !== null) {
      var L = n.$$typeof;
      switch (L) {
        case i:
          switch (n = n.type, n) {
            case C:
            case w:
            case s:
            case a:
            case d:
            case P:
              return n;
            default:
              switch (n = n && n.$$typeof, n) {
                case l:
                case u:
                case I:
                case M:
                case b:
                  return n;
                default:
                  return L;
              }
          }
        case c:
          return L;
      }
    }
  }
  function A(n) {
    return y(n) === w;
  }
  return S.AsyncMode = C, S.ConcurrentMode = w, S.ContextConsumer = l, S.ContextProvider = b, S.Element = i, S.ForwardRef = u, S.Fragment = s, S.Lazy = I, S.Memo = M, S.Portal = c, S.Profiler = a, S.StrictMode = d, S.Suspense = P, S.isAsyncMode = function(n) {
    return A(n) || y(n) === C;
  }, S.isConcurrentMode = A, S.isContextConsumer = function(n) {
    return y(n) === l;
  }, S.isContextProvider = function(n) {
    return y(n) === b;
  }, S.isElement = function(n) {
    return typeof n == "object" && n !== null && n.$$typeof === i;
  }, S.isForwardRef = function(n) {
    return y(n) === u;
  }, S.isFragment = function(n) {
    return y(n) === s;
  }, S.isLazy = function(n) {
    return y(n) === I;
  }, S.isMemo = function(n) {
    return y(n) === M;
  }, S.isPortal = function(n) {
    return y(n) === c;
  }, S.isProfiler = function(n) {
    return y(n) === a;
  }, S.isStrictMode = function(n) {
    return y(n) === d;
  }, S.isSuspense = function(n) {
    return y(n) === P;
  }, S.isValidElementType = function(n) {
    return typeof n == "string" || typeof n == "function" || n === s || n === w || n === a || n === d || n === P || n === k || typeof n == "object" && n !== null && (n.$$typeof === I || n.$$typeof === M || n.$$typeof === b || n.$$typeof === l || n.$$typeof === u || n.$$typeof === j || n.$$typeof === N || n.$$typeof === z || n.$$typeof === _);
  }, S.typeOf = y, S;
}
var R = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ve;
function ke() {
  return ve || (ve = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, i = t ? Symbol.for("react.element") : 60103, c = t ? Symbol.for("react.portal") : 60106, s = t ? Symbol.for("react.fragment") : 60107, d = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, b = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, C = t ? Symbol.for("react.async_mode") : 60111, w = t ? Symbol.for("react.concurrent_mode") : 60111, u = t ? Symbol.for("react.forward_ref") : 60112, P = t ? Symbol.for("react.suspense") : 60113, k = t ? Symbol.for("react.suspense_list") : 60120, M = t ? Symbol.for("react.memo") : 60115, I = t ? Symbol.for("react.lazy") : 60116, _ = t ? Symbol.for("react.block") : 60121, j = t ? Symbol.for("react.fundamental") : 60117, N = t ? Symbol.for("react.responder") : 60118, z = t ? Symbol.for("react.scope") : 60119;
    function y(r) {
      return typeof r == "string" || typeof r == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      r === s || r === w || r === a || r === d || r === P || r === k || typeof r == "object" && r !== null && (r.$$typeof === I || r.$$typeof === M || r.$$typeof === b || r.$$typeof === l || r.$$typeof === u || r.$$typeof === j || r.$$typeof === N || r.$$typeof === z || r.$$typeof === _);
    }
    function A(r) {
      if (typeof r == "object" && r !== null) {
        var D = r.$$typeof;
        switch (D) {
          case i:
            var V = r.type;
            switch (V) {
              case C:
              case w:
              case s:
              case a:
              case d:
              case P:
                return V;
              default:
                var ye = V && V.$$typeof;
                switch (ye) {
                  case l:
                  case u:
                  case I:
                  case M:
                  case b:
                    return ye;
                  default:
                    return D;
                }
            }
          case c:
            return D;
        }
      }
    }
    var n = C, L = w, G = l, Q = b, ee = i, te = u, B = s, re = I, ne = M, U = c, oe = a, q = d, Y = P, K = !1;
    function ie(r) {
      return K || (K = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), e(r) || A(r) === C;
    }
    function e(r) {
      return A(r) === w;
    }
    function o(r) {
      return A(r) === l;
    }
    function g(r) {
      return A(r) === b;
    }
    function h(r) {
      return typeof r == "object" && r !== null && r.$$typeof === i;
    }
    function f(r) {
      return A(r) === u;
    }
    function T(r) {
      return A(r) === s;
    }
    function p(r) {
      return A(r) === I;
    }
    function v(r) {
      return A(r) === M;
    }
    function E(r) {
      return A(r) === c;
    }
    function O(r) {
      return A(r) === a;
    }
    function x(r) {
      return A(r) === d;
    }
    function $(r) {
      return A(r) === P;
    }
    R.AsyncMode = n, R.ConcurrentMode = L, R.ContextConsumer = G, R.ContextProvider = Q, R.Element = ee, R.ForwardRef = te, R.Fragment = B, R.Lazy = re, R.Memo = ne, R.Portal = U, R.Profiler = oe, R.StrictMode = q, R.Suspense = Y, R.isAsyncMode = ie, R.isConcurrentMode = e, R.isContextConsumer = o, R.isContextProvider = g, R.isElement = h, R.isForwardRef = f, R.isFragment = T, R.isLazy = p, R.isMemo = v, R.isPortal = E, R.isProfiler = O, R.isStrictMode = x, R.isSuspense = $, R.isValidElementType = y, R.typeOf = A;
  }()), R;
}
var me;
function Re() {
  return me || (me = 1, process.env.NODE_ENV === "production" ? J.exports = Me() : J.exports = ke()), J.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var se, ge;
function Ie() {
  if (ge) return se;
  ge = 1;
  var t = Object.getOwnPropertySymbols, i = Object.prototype.hasOwnProperty, c = Object.prototype.propertyIsEnumerable;
  function s(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function d() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var b = {}, l = 0; l < 10; l++)
        b["_" + String.fromCharCode(l)] = l;
      var C = Object.getOwnPropertyNames(b).map(function(u) {
        return b[u];
      });
      if (C.join("") !== "0123456789")
        return !1;
      var w = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        w[u] = u;
      }), Object.keys(Object.assign({}, w)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return se = d() ? Object.assign : function(a, b) {
    for (var l, C = s(a), w, u = 1; u < arguments.length; u++) {
      l = Object(arguments[u]);
      for (var P in l)
        i.call(l, P) && (C[P] = l[P]);
      if (t) {
        w = t(l);
        for (var k = 0; k < w.length; k++)
          c.call(l, w[k]) && (C[w[k]] = l[w[k]]);
      }
    }
    return C;
  }, se;
}
var ae, be;
function pe() {
  if (be) return ae;
  be = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ae = t, ae;
}
var ce, we;
function Ce() {
  return we || (we = 1, ce = Function.call.bind(Object.prototype.hasOwnProperty)), ce;
}
var ue, Te;
function je() {
  if (Te) return ue;
  Te = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var i = /* @__PURE__ */ pe(), c = {}, s = /* @__PURE__ */ Ce();
    t = function(a) {
      var b = "Warning: " + a;
      typeof console < "u" && console.error(b);
      try {
        throw new Error(b);
      } catch {
      }
    };
  }
  function d(a, b, l, C, w) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (s(a, u)) {
          var P;
          try {
            if (typeof a[u] != "function") {
              var k = Error(
                (C || "React class") + ": " + l + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw k.name = "Invariant Violation", k;
            }
            P = a[u](b, u, C, l, null, i);
          } catch (I) {
            P = I;
          }
          if (P && !(P instanceof Error) && t(
            (C || "React class") + ": type specification of " + l + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof P + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), P instanceof Error && !(P.message in c)) {
            c[P.message] = !0;
            var M = w ? w() : "";
            t(
              "Failed " + l + " type: " + P.message + (M ?? "")
            );
          }
        }
    }
  }
  return d.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (c = {});
  }, ue = d, ue;
}
var le, Ee;
function $e() {
  if (Ee) return le;
  Ee = 1;
  var t = Re(), i = Ie(), c = /* @__PURE__ */ pe(), s = /* @__PURE__ */ Ce(), d = /* @__PURE__ */ je(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(l) {
    var C = "Warning: " + l;
    typeof console < "u" && console.error(C);
    try {
      throw new Error(C);
    } catch {
    }
  });
  function b() {
    return null;
  }
  return le = function(l, C) {
    var w = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function P(e) {
      var o = e && (w && e[w] || e[u]);
      if (typeof o == "function")
        return o;
    }
    var k = "<<anonymous>>", M = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: z(),
      arrayOf: y,
      element: A(),
      elementType: n(),
      instanceOf: L,
      node: te(),
      objectOf: Q,
      oneOf: G,
      oneOfType: ee,
      shape: re,
      exact: ne
    };
    function I(e, o) {
      return e === o ? e !== 0 || 1 / e === 1 / o : e !== e && o !== o;
    }
    function _(e, o) {
      this.message = e, this.data = o && typeof o == "object" ? o : {}, this.stack = "";
    }
    _.prototype = Error.prototype;
    function j(e) {
      if (process.env.NODE_ENV !== "production")
        var o = {}, g = 0;
      function h(T, p, v, E, O, x, $) {
        if (E = E || k, x = x || v, $ !== c) {
          if (C) {
            var r = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw r.name = "Invariant Violation", r;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var D = E + ":" + v;
            !o[D] && // Avoid spamming the console because they are often not actionable except for lib authors
            g < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + x + "` prop on `" + E + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), o[D] = !0, g++);
          }
        }
        return p[v] == null ? T ? p[v] === null ? new _("The " + O + " `" + x + "` is marked as required " + ("in `" + E + "`, but its value is `null`.")) : new _("The " + O + " `" + x + "` is marked as required in " + ("`" + E + "`, but its value is `undefined`.")) : null : e(p, v, E, O, x);
      }
      var f = h.bind(null, !1);
      return f.isRequired = h.bind(null, !0), f;
    }
    function N(e) {
      function o(g, h, f, T, p, v) {
        var E = g[h], O = q(E);
        if (O !== e) {
          var x = Y(E);
          return new _(
            "Invalid " + T + " `" + p + "` of type " + ("`" + x + "` supplied to `" + f + "`, expected ") + ("`" + e + "`."),
            { expectedType: e }
          );
        }
        return null;
      }
      return j(o);
    }
    function z() {
      return j(b);
    }
    function y(e) {
      function o(g, h, f, T, p) {
        if (typeof e != "function")
          return new _("Property `" + p + "` of component `" + f + "` has invalid PropType notation inside arrayOf.");
        var v = g[h];
        if (!Array.isArray(v)) {
          var E = q(v);
          return new _("Invalid " + T + " `" + p + "` of type " + ("`" + E + "` supplied to `" + f + "`, expected an array."));
        }
        for (var O = 0; O < v.length; O++) {
          var x = e(v, O, f, T, p + "[" + O + "]", c);
          if (x instanceof Error)
            return x;
        }
        return null;
      }
      return j(o);
    }
    function A() {
      function e(o, g, h, f, T) {
        var p = o[g];
        if (!l(p)) {
          var v = q(p);
          return new _("Invalid " + f + " `" + T + "` of type " + ("`" + v + "` supplied to `" + h + "`, expected a single ReactElement."));
        }
        return null;
      }
      return j(e);
    }
    function n() {
      function e(o, g, h, f, T) {
        var p = o[g];
        if (!t.isValidElementType(p)) {
          var v = q(p);
          return new _("Invalid " + f + " `" + T + "` of type " + ("`" + v + "` supplied to `" + h + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return j(e);
    }
    function L(e) {
      function o(g, h, f, T, p) {
        if (!(g[h] instanceof e)) {
          var v = e.name || k, E = ie(g[h]);
          return new _("Invalid " + T + " `" + p + "` of type " + ("`" + E + "` supplied to `" + f + "`, expected ") + ("instance of `" + v + "`."));
        }
        return null;
      }
      return j(o);
    }
    function G(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), b;
      function o(g, h, f, T, p) {
        for (var v = g[h], E = 0; E < e.length; E++)
          if (I(v, e[E]))
            return null;
        var O = JSON.stringify(e, function($, r) {
          var D = Y(r);
          return D === "symbol" ? String(r) : r;
        });
        return new _("Invalid " + T + " `" + p + "` of value `" + String(v) + "` " + ("supplied to `" + f + "`, expected one of " + O + "."));
      }
      return j(o);
    }
    function Q(e) {
      function o(g, h, f, T, p) {
        if (typeof e != "function")
          return new _("Property `" + p + "` of component `" + f + "` has invalid PropType notation inside objectOf.");
        var v = g[h], E = q(v);
        if (E !== "object")
          return new _("Invalid " + T + " `" + p + "` of type " + ("`" + E + "` supplied to `" + f + "`, expected an object."));
        for (var O in v)
          if (s(v, O)) {
            var x = e(v, O, f, T, p + "." + O, c);
            if (x instanceof Error)
              return x;
          }
        return null;
      }
      return j(o);
    }
    function ee(e) {
      if (!Array.isArray(e))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), b;
      for (var o = 0; o < e.length; o++) {
        var g = e[o];
        if (typeof g != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + K(g) + " at index " + o + "."
          ), b;
      }
      function h(f, T, p, v, E) {
        for (var O = [], x = 0; x < e.length; x++) {
          var $ = e[x], r = $(f, T, p, v, E, c);
          if (r == null)
            return null;
          r.data && s(r.data, "expectedType") && O.push(r.data.expectedType);
        }
        var D = O.length > 0 ? ", expected one of type [" + O.join(", ") + "]" : "";
        return new _("Invalid " + v + " `" + E + "` supplied to " + ("`" + p + "`" + D + "."));
      }
      return j(h);
    }
    function te() {
      function e(o, g, h, f, T) {
        return U(o[g]) ? null : new _("Invalid " + f + " `" + T + "` supplied to " + ("`" + h + "`, expected a ReactNode."));
      }
      return j(e);
    }
    function B(e, o, g, h, f) {
      return new _(
        (e || "React class") + ": " + o + " type `" + g + "." + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + f + "`."
      );
    }
    function re(e) {
      function o(g, h, f, T, p) {
        var v = g[h], E = q(v);
        if (E !== "object")
          return new _("Invalid " + T + " `" + p + "` of type `" + E + "` " + ("supplied to `" + f + "`, expected `object`."));
        for (var O in e) {
          var x = e[O];
          if (typeof x != "function")
            return B(f, T, p, O, Y(x));
          var $ = x(v, O, f, T, p + "." + O, c);
          if ($)
            return $;
        }
        return null;
      }
      return j(o);
    }
    function ne(e) {
      function o(g, h, f, T, p) {
        var v = g[h], E = q(v);
        if (E !== "object")
          return new _("Invalid " + T + " `" + p + "` of type `" + E + "` " + ("supplied to `" + f + "`, expected `object`."));
        var O = i({}, g[h], e);
        for (var x in O) {
          var $ = e[x];
          if (s(e, x) && typeof $ != "function")
            return B(f, T, p, x, Y($));
          if (!$)
            return new _(
              "Invalid " + T + " `" + p + "` key `" + x + "` supplied to `" + f + "`.\nBad object: " + JSON.stringify(g[h], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(e), null, "  ")
            );
          var r = $(v, x, f, T, p + "." + x, c);
          if (r)
            return r;
        }
        return null;
      }
      return j(o);
    }
    function U(e) {
      switch (typeof e) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !e;
        case "object":
          if (Array.isArray(e))
            return e.every(U);
          if (e === null || l(e))
            return !0;
          var o = P(e);
          if (o) {
            var g = o.call(e), h;
            if (o !== e.entries) {
              for (; !(h = g.next()).done; )
                if (!U(h.value))
                  return !1;
            } else
              for (; !(h = g.next()).done; ) {
                var f = h.value;
                if (f && !U(f[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function oe(e, o) {
      return e === "symbol" ? !0 : o ? o["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && o instanceof Symbol : !1;
    }
    function q(e) {
      var o = typeof e;
      return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : oe(o, e) ? "symbol" : o;
    }
    function Y(e) {
      if (typeof e > "u" || e === null)
        return "" + e;
      var o = q(e);
      if (o === "object") {
        if (e instanceof Date)
          return "date";
        if (e instanceof RegExp)
          return "regexp";
      }
      return o;
    }
    function K(e) {
      var o = Y(e);
      switch (o) {
        case "array":
        case "object":
          return "an " + o;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + o;
        default:
          return o;
      }
    }
    function ie(e) {
      return !e.constructor || !e.constructor.name ? k : e.constructor.name;
    }
    return M.checkPropTypes = d, M.resetWarningCache = d.resetWarningCache, M.PropTypes = M, M;
  }, le;
}
var fe, xe;
function Ne() {
  if (xe) return fe;
  xe = 1;
  var t = /* @__PURE__ */ pe();
  function i() {
  }
  function c() {
  }
  return c.resetWarningCache = i, fe = function() {
    function s(b, l, C, w, u, P) {
      if (P !== t) {
        var k = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw k.name = "Invariant Violation", k;
      }
    }
    s.isRequired = s;
    function d() {
      return s;
    }
    var a = {
      array: s,
      bigint: s,
      bool: s,
      func: s,
      number: s,
      object: s,
      string: s,
      symbol: s,
      any: s,
      arrayOf: d,
      element: s,
      elementType: s,
      instanceOf: d,
      node: s,
      objectOf: d,
      oneOf: d,
      oneOfType: d,
      shape: d,
      exact: d,
      checkPropTypes: c,
      resetWarningCache: i
    };
    return a.PropTypes = a, a;
  }, fe;
}
var Se;
function We() {
  if (Se) return H.exports;
  if (Se = 1, process.env.NODE_ENV !== "production") {
    var t = Re(), i = !0;
    H.exports = /* @__PURE__ */ $e()(t.isElement, i);
  } else
    H.exports = /* @__PURE__ */ Ne()();
  return H.exports;
}
var qe = /* @__PURE__ */ We();
const Z = /* @__PURE__ */ Ae(qe);
class De {
  constructor(i, c) {
    this.apiKey = i, this.handlers = c, this.ws = null, this.reconnectAttempts = 0, this.maxReconnectAttempts = 3, this.baseReconnectDelay = 1e3, this.isConnecting = !1, this.inactivityTimeout = null, this.manuallyEnded = !1, this.resetInactivityTimer();
  }
  connect() {
    this.isConnecting || (this.manuallyEnded = !1, console.log("Connecting to WebSocket..."), this.ws = new WebSocket(`ws://localhost:3333/ws?apiKey=${this.apiKey}`), this.ws.onopen = () => {
      var i, c;
      console.log("WebSocket connected"), this.isConnecting = !1, this.reconnectAttempts = 0, (c = (i = this.handlers).onConnect) == null || c.call(i);
    }, this.ws.onmessage = (i) => {
      var c, s, d, a, b, l, C, w;
      try {
        const u = JSON.parse(i.data);
        switch (u.event) {
          case "ready":
            console.log("Ready event received"), (s = (c = this.handlers).onReady) == null || s.call(c);
            break;
          case "typing":
            console.log("Typing event received"), (a = (d = this.handlers).onTyping) == null || a.call(d, u.data.status);
            break;
          case "assistant_message":
            console.log("Assistant message received"), (l = (b = this.handlers).onMessage) == null || l.call(b, u.data.assistant_text);
            break;
          default:
            console.warn("Unknown event received:", u.event);
        }
      } catch (u) {
        console.error("Message parsing error:", u), (w = (C = this.handlers).onError) == null || w.call(C, u);
      }
    }, this.ws.onclose = () => {
      console.log("WebSocket closed"), this.isConnecting = !1, this.handleReconnect();
    }, this.ws.onerror = (i) => {
      var c, s;
      console.error("WebSocket error:", i), (s = (c = this.handlers).onError) == null || s.call(c, i);
    });
  }
  resetInactivityTimer() {
    this.inactivityTimeout && clearTimeout(this.inactivityTimeout), this.inactivityTimeout = setTimeout(() => {
      console.log("Connection closed due to inactivity"), this.disconnect();
    }, 12e4);
  }
  sendMessage(i) {
    var c, s, d;
    if (this.resetInactivityTimer(), ((c = this.ws) == null ? void 0 : c.readyState) === WebSocket.OPEN) {
      const a = {
        event: "user_message",
        data: {
          user_text: i
        }
      };
      console.log("Sending message:", a), this.ws.send(JSON.stringify(a)), (d = (s = this.handlers).onLocalMessage) == null || d.call(s, i);
    } else
      throw new Error("WebSocket is not connected");
  }
  handleReconnect() {
    var c, s;
    if (this.manuallyEnded) {
      console.log("Manual disconnect - skipping reconnect");
      return;
    }
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      (s = (c = this.handlers).onError) == null || s.call(c, new Error("Max reconnection attempts reached"));
      return;
    }
    const i = this.baseReconnectDelay * Math.pow(2, this.reconnectAttempts);
    this.reconnectAttempts++, console.log(
      `Attempting to reconnect in ${i}ms (attempt ${this.reconnectAttempts})`
    ), setTimeout(() => this.connect(), i);
  }
  disconnect(i = !1) {
    i && (this.manuallyEnded = !0), this.inactivityTimeout && clearTimeout(this.inactivityTimeout), this.ws && (console.log("Disconnecting WebSocket"), this.ws.close(), this.ws = null);
  }
}
const Le = () => /* @__PURE__ */ m(
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
    children: /* @__PURE__ */ m("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
  }
), Ye = () => /* @__PURE__ */ W(
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
      /* @__PURE__ */ m("path", { d: "m22 2-7 20-4-9-9-4Z" }),
      /* @__PURE__ */ m("path", { d: "M22 2 11 13" })
    ]
  }
), Fe = () => /* @__PURE__ */ W(
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
      /* @__PURE__ */ m("path", { d: "M18 6 6 18" }),
      /* @__PURE__ */ m("path", { d: "m6 6 12 12" })
    ]
  }
), ze = () => /* @__PURE__ */ W(
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
      /* @__PURE__ */ m("path", { d: "M18.36 6.64A9 9 0 0 1 20.77 15" }),
      /* @__PURE__ */ m("path", { d: "M6.16 6.16a9 9 0 1 0 12.68 12.68" }),
      /* @__PURE__ */ m("path", { d: "M12 2v4" })
    ]
  }
), Oe = () => /* @__PURE__ */ W(
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
      /* @__PURE__ */ m("path", { d: "M12 8V4H8" }),
      /* @__PURE__ */ m(
        "rect",
        {
          width: "16",
          height: "12",
          x: "4",
          y: "8",
          rx: "2"
        }
      ),
      /* @__PURE__ */ m("path", { d: "M2 14h2" }),
      /* @__PURE__ */ m("path", { d: "M20 14h2" }),
      /* @__PURE__ */ m("path", { d: "M15 13v2" }),
      /* @__PURE__ */ m("path", { d: "M9 13v2" })
    ]
  }
), Ue = (t, i = 30) => {
  const [c, s] = F(""), d = de(null);
  return X(() => {
    let a = 0;
    const b = setInterval(() => {
      a < t.length ? (s(t.substring(0, a + 1)), a++, d.current && d.current.scrollIntoView({
        behavior: "smooth",
        block: "end"
      })) : clearInterval(b);
    }, i);
    return () => clearInterval(b);
  }, [t, i]), { displayedText: c, containerRef: d };
}, Pe = ({ message: t, type: i }) => {
  const { displayedText: c, containerRef: s } = Ue(
    i === "assistant" ? t : ""
  );
  return /* @__PURE__ */ W(
    "div",
    {
      ref: s,
      className: `flex ${i === "user" ? "justify-end" : "justify-start"} items-end gap-2`,
      children: [
        i === "assistant" && /* @__PURE__ */ m("div", { className: "h-8 w-8 flex items-center justify-center rounded-full bg-purple-600", children: /* @__PURE__ */ m(Oe, { className: "w-5 h-5 text-white" }) }),
        /* @__PURE__ */ m(
          "div",
          {
            className: `max-w-[80%] p-3 rounded-lg ${i === "user" ? "bg-purple-600 text-white rounded-br-none font-semibold text-sm" : "bg-gray-100 text-gray-800 rounded-bl-none font-semibold text-sm"}`,
            children: i === "assistant" ? c : t
          }
        )
      ]
    }
  );
};
Pe.propTypes = {
  message: Z.string.isRequired,
  type: Z.string.isRequired
};
const Be = () => /* @__PURE__ */ W("div", { className: "flex gap-2 py-3 px-2 max-w-[80%] bg-gray-100 rounded-lg rounded-bl-none w-24", children: [
  /* @__PURE__ */ m("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.3s]" }),
  /* @__PURE__ */ m("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce [animation-delay:-0.15s]" }),
  /* @__PURE__ */ m("div", { className: "w-2 h-2 rounded-full bg-gray-500 animate-bounce" })
] }), _e = ({ apiKey: t }) => {
  const [i, c] = F(!1), [s, d] = F([]), [a, b] = F(""), [l, C] = F(!1), [w, u] = F(!1), [P, k] = F(!1), M = de(null), I = de(null);
  X(() => (I.current = new De(t, {
    onConnect: () => u(!0),
    onDisconnect: () => u(!1),
    onTyping: () => C(!0),
    onMessage: (y) => {
      C(!1), d((A) => [
        ...A,
        { role: "assistant", content: y }
      ]);
    },
    onLocalMessage: (y) => {
      d((A) => [...A, { role: "user", content: y }]);
    }
  }), () => {
    var y;
    return (y = I.current) == null ? void 0 : y.disconnect();
  }), [t]), X(() => {
    i && !w && (I.current.manuallyEnded = !1, I.current.connect());
  }, [i, w]), X(() => {
    M.current && (M.current.scrollTop = M.current.scrollHeight);
  }, [s, l]);
  const _ = (y) => {
    if (y.preventDefault(), !(!a.trim() || !w))
      try {
        I.current.sendMessage(a), b("");
      } catch (A) {
        console.error("Failed to send message:", A);
      }
  };
  _e.propTypes = {
    apiKey: Z.string.isRequired
  };
  const j = (y) => {
    y.key === "Enter" && !y.shiftKey && (y.preventDefault(), _(y));
  };
  return /* @__PURE__ */ W("div", { className: "fixed bottom-4 right-4 z-[1000]", children: [
    " ",
    /* @__PURE__ */ m(
      "button",
      {
        onClick: () => {
          i || k(!1), c(!i);
        },
        className: `${i ? "hidden" : "flex"} items-center justify-center w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-lg transition-all duration-200 fixed bottom-4 right-4`,
        children: /* @__PURE__ */ m(Le, { className: "w-6 h-6" })
      }
    ),
    /* @__PURE__ */ W(
      "div",
      {
        className: `${i ? "scale-100 opacity-100" : "scale-0 opacity-0"} origin-bottom-right transition-all duration-200 w-[400px] h-[600px] bg-white rounded-lg shadow-xl flex flex-col`,
        children: [
          /* @__PURE__ */ W("div", { className: "bg-purple-600 p-4 rounded-t-lg flex items-center justify-between", children: [
            /* @__PURE__ */ W("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ m("div", { className: "h-7 w-7 flex items-center justify-center rounded-full bg-white", children: /* @__PURE__ */ m(Oe, { className: "w-5 h-5 text-purple-600" }) }),
              /* @__PURE__ */ m("h2", { className: "text-white text-lg font-semibold", children: "Chatbot" })
            ] }),
            /* @__PURE__ */ W("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ m(
                "button",
                {
                  onClick: () => {
                    c(!1), I.current.disconnect(!0), d([]), u(!1), k(!0);
                  },
                  className: "text-white hover:text-red-200 transition-colors",
                  title: "End Chat",
                  children: /* @__PURE__ */ m(ze, { className: "w-6 h-6" })
                }
              ),
              /* @__PURE__ */ m(
                "button",
                {
                  onClick: () => c(!1),
                  className: "text-white hover:text-purple-200 transition-colors",
                  children: /* @__PURE__ */ m(Fe, { className: "w-6 h-6" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ W(
            "div",
            {
              ref: M,
              className: "flex-1 overflow-y-auto p-4 space-y-4",
              children: [
                s.map((y, A) => /* @__PURE__ */ m(
                  Pe,
                  {
                    message: y.content,
                    type: y.role === "user" ? "user" : "assistant"
                  },
                  A
                )),
                l && /* @__PURE__ */ m(Be, {})
              ]
            }
          ),
          /* @__PURE__ */ m(
            "form",
            {
              onSubmit: _,
              className: "p-4 border-t",
              children: /* @__PURE__ */ W("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ m(
                  "textarea",
                  {
                    value: a,
                    onChange: (y) => b(y.target.value),
                    onKeyDown: j,
                    placeholder: "Type a message...",
                    className: "flex-1 resize-none p-2 border rounded-lg focus:outline-none focus:border-purple-600 max-h-32",
                    rows: "1"
                  }
                ),
                /* @__PURE__ */ m(
                  "button",
                  {
                    type: "submit",
                    disabled: !w,
                    className: "p-2 text-white bg-purple-600 rounded-lg hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors",
                    onClick: _,
                    children: /* @__PURE__ */ m(Ye, { className: "w-5 h-5" })
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
_e.propTypes = {
  apiKey: Z.string.isRequired
};
export {
  _e as default
};
