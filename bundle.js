/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  "use strict";
  var t = ["end", "kết thúc"],
    r = [
      "detected video in your stream belonging to someone else",
      "chúng tôi phát hiện video trong sự kiện phát trực tiếp của bạn thuộc về người khác",
    ];
  function e(t) {
    return (
      (e =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      e(t)
    );
  }
  function n() {
    n = function () {
      return r;
    };
    var t,
      r = {},
      o = Object.prototype,
      i = o.hasOwnProperty,
      a =
        Object.defineProperty ||
        function (t, r, e) {
          t[r] = e.value;
        },
      c = "function" == typeof Symbol ? Symbol : {},
      u = c.iterator || "@@iterator",
      l = c.asyncIterator || "@@asyncIterator",
      f = c.toStringTag || "@@toStringTag";
    function s(t, r, e) {
      return (
        Object.defineProperty(t, r, {
          value: e,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        }),
        t[r]
      );
    }
    try {
      s({}, "");
    } catch (t) {
      s = function (t, r, e) {
        return (t[r] = e);
      };
    }
    function h(t, r, e, n) {
      var o = r && r.prototype instanceof w ? r : w,
        i = Object.create(o.prototype),
        c = new T(n || []);
      return a(i, "_invoke", { value: S(t, e, c) }), i;
    }
    function p(t, r, e) {
      try {
        return { type: "normal", arg: t.call(r, e) };
      } catch (t) {
        return { type: "throw", arg: t };
      }
    }
    r.wrap = h;
    var y = "suspendedStart",
      v = "suspendedYield",
      d = "executing",
      g = "completed",
      m = {};
    function w() {}
    function b() {}
    function L() {}
    var E = {};
    s(E, u, function () {
      return this;
    });
    var x = Object.getPrototypeOf,
      _ = x && x(x(I([])));
    _ && _ !== o && i.call(_, u) && (E = _);
    var k = (L.prototype = w.prototype = Object.create(E));
    function O(t) {
      ["next", "throw", "return"].forEach(function (r) {
        s(t, r, function (t) {
          return this._invoke(r, t);
        });
      });
    }
    function j(t, r) {
      function n(o, a, c, u) {
        var l = p(t[o], t, a);
        if ("throw" !== l.type) {
          var f = l.arg,
            s = f.value;
          return s && "object" == e(s) && i.call(s, "__await")
            ? r.resolve(s.__await).then(
                function (t) {
                  n("next", t, c, u);
                },
                function (t) {
                  n("throw", t, c, u);
                }
              )
            : r.resolve(s).then(
                function (t) {
                  (f.value = t), c(f);
                },
                function (t) {
                  return n("throw", t, c, u);
                }
              );
        }
        u(l.arg);
      }
      var o;
      a(this, "_invoke", {
        value: function (t, e) {
          function i() {
            return new r(function (r, o) {
              n(t, e, r, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        },
      });
    }
    function S(r, e, n) {
      var o = y;
      return function (i, a) {
        if (o === d) throw new Error("Generator is already running");
        if (o === g) {
          if ("throw" === i) throw a;
          return { value: t, done: !0 };
        }
        for (n.method = i, n.arg = a; ; ) {
          var c = n.delegate;
          if (c) {
            var u = N(c, n);
            if (u) {
              if (u === m) continue;
              return u;
            }
          }
          if ("next" === n.method) n.sent = n._sent = n.arg;
          else if ("throw" === n.method) {
            if (o === y) throw ((o = g), n.arg);
            n.dispatchException(n.arg);
          } else "return" === n.method && n.abrupt("return", n.arg);
          o = d;
          var l = p(r, e, n);
          if ("normal" === l.type) {
            if (((o = n.done ? g : v), l.arg === m)) continue;
            return { value: l.arg, done: n.done };
          }
          "throw" === l.type &&
            ((o = g), (n.method = "throw"), (n.arg = l.arg));
        }
      };
    }
    function N(r, e) {
      var n = e.method,
        o = r.iterator[n];
      if (o === t)
        return (
          (e.delegate = null),
          ("throw" === n &&
            r.iterator.return &&
            ((e.method = "return"),
            (e.arg = t),
            N(r, e),
            "throw" === e.method)) ||
            ("return" !== n &&
              ((e.method = "throw"),
              (e.arg = new TypeError(
                "The iterator does not provide a '" + n + "' method"
              )))),
          m
        );
      var i = p(o, r.iterator, e.arg);
      if ("throw" === i.type)
        return (e.method = "throw"), (e.arg = i.arg), (e.delegate = null), m;
      var a = i.arg;
      return a
        ? a.done
          ? ((e[r.resultName] = a.value),
            (e.next = r.nextLoc),
            "return" !== e.method && ((e.method = "next"), (e.arg = t)),
            (e.delegate = null),
            m)
          : a
        : ((e.method = "throw"),
          (e.arg = new TypeError("iterator result is not an object")),
          (e.delegate = null),
          m);
    }
    function P(t) {
      var r = { tryLoc: t[0] };
      1 in t && (r.catchLoc = t[1]),
        2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
        this.tryEntries.push(r);
    }
    function G(t) {
      var r = t.completion || {};
      (r.type = "normal"), delete r.arg, (t.completion = r);
    }
    function T(t) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        t.forEach(P, this),
        this.reset(!0);
    }
    function I(r) {
      if (r || "" === r) {
        var n = r[u];
        if (n) return n.call(r);
        if ("function" == typeof r.next) return r;
        if (!isNaN(r.length)) {
          var o = -1,
            a = function e() {
              for (; ++o < r.length; )
                if (i.call(r, o)) return (e.value = r[o]), (e.done = !1), e;
              return (e.value = t), (e.done = !0), e;
            };
          return (a.next = a);
        }
      }
      throw new TypeError(e(r) + " is not iterable");
    }
    return (
      (b.prototype = L),
      a(k, "constructor", { value: L, configurable: !0 }),
      a(L, "constructor", { value: b, configurable: !0 }),
      (b.displayName = s(L, f, "GeneratorFunction")),
      (r.isGeneratorFunction = function (t) {
        var r = "function" == typeof t && t.constructor;
        return (
          !!r && (r === b || "GeneratorFunction" === (r.displayName || r.name))
        );
      }),
      (r.mark = function (t) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(t, L)
            : ((t.__proto__ = L), s(t, f, "GeneratorFunction")),
          (t.prototype = Object.create(k)),
          t
        );
      }),
      (r.awrap = function (t) {
        return { __await: t };
      }),
      O(j.prototype),
      s(j.prototype, l, function () {
        return this;
      }),
      (r.AsyncIterator = j),
      (r.async = function (t, e, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new j(h(t, e, n, o), i);
        return r.isGeneratorFunction(e)
          ? a
          : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
      }),
      O(k),
      s(k, f, "Generator"),
      s(k, u, function () {
        return this;
      }),
      s(k, "toString", function () {
        return "[object Generator]";
      }),
      (r.keys = function (t) {
        var r = Object(t),
          e = [];
        for (var n in r) e.push(n);
        return (
          e.reverse(),
          function t() {
            for (; e.length; ) {
              var n = e.pop();
              if (n in r) return (t.value = n), (t.done = !1), t;
            }
            return (t.done = !0), t;
          }
        );
      }),
      (r.values = I),
      (T.prototype = {
        constructor: T,
        reset: function (r) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = t),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = t),
            this.tryEntries.forEach(G),
            !r)
          )
            for (var e in this)
              "t" === e.charAt(0) &&
                i.call(this, e) &&
                !isNaN(+e.slice(1)) &&
                (this[e] = t);
        },
        stop: function () {
          this.done = !0;
          var t = this.tryEntries[0].completion;
          if ("throw" === t.type) throw t.arg;
          return this.rval;
        },
        dispatchException: function (r) {
          if (this.done) throw r;
          var e = this;
          function n(n, o) {
            return (
              (c.type = "throw"),
              (c.arg = r),
              (e.next = n),
              o && ((e.method = "next"), (e.arg = t)),
              !!o
            );
          }
          for (var o = this.tryEntries.length - 1; o >= 0; --o) {
            var a = this.tryEntries[o],
              c = a.completion;
            if ("root" === a.tryLoc) return n("end");
            if (a.tryLoc <= this.prev) {
              var u = i.call(a, "catchLoc"),
                l = i.call(a, "finallyLoc");
              if (u && l) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
              } else if (u) {
                if (this.prev < a.catchLoc) return n(a.catchLoc, !0);
              } else {
                if (!l)
                  throw new Error("try statement without catch or finally");
                if (this.prev < a.finallyLoc) return n(a.finallyLoc);
              }
            }
          }
        },
        abrupt: function (t, r) {
          for (var e = this.tryEntries.length - 1; e >= 0; --e) {
            var n = this.tryEntries[e];
            if (
              n.tryLoc <= this.prev &&
              i.call(n, "finallyLoc") &&
              this.prev < n.finallyLoc
            ) {
              var o = n;
              break;
            }
          }
          o &&
            ("break" === t || "continue" === t) &&
            o.tryLoc <= r &&
            r <= o.finallyLoc &&
            (o = null);
          var a = o ? o.completion : {};
          return (
            (a.type = t),
            (a.arg = r),
            o
              ? ((this.method = "next"), (this.next = o.finallyLoc), m)
              : this.complete(a)
          );
        },
        complete: function (t, r) {
          if ("throw" === t.type) throw t.arg;
          return (
            "break" === t.type || "continue" === t.type
              ? (this.next = t.arg)
              : "return" === t.type
              ? ((this.rval = this.arg = t.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === t.type && r && (this.next = r),
            m
          );
        },
        finish: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.finallyLoc === t)
              return this.complete(e.completion, e.afterLoc), G(e), m;
          }
        },
        catch: function (t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var e = this.tryEntries[r];
            if (e.tryLoc === t) {
              var n = e.completion;
              if ("throw" === n.type) {
                var o = n.arg;
                G(e);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (r, e, n) {
          return (
            (this.delegate = { iterator: I(r), resultName: e, nextLoc: n }),
            "next" === this.method && (this.arg = t),
            m
          );
        },
      }),
      r
    );
  }
  function o(t, r, e, n, o, i, a) {
    try {
      var c = t[i](a),
        u = c.value;
    } catch (t) {
      return void e(t);
    }
    c.done ? r(u) : Promise.resolve(u).then(n, o);
  }
  var i = function (t, r) {
      var e = t.toLowerCase();
      return r.some(function (t) {
        return e.includes(t.toLowerCase());
      });
    },
    a = function () {
      var e;
      console.log("running");
      var n = document.getElementById("detail"),
        o =
          null !== (e = null == n ? void 0 : n.innerHTML) && void 0 !== e
            ? e
            : "";
      if (i(o, r)) {
        var a = document.getElementById("end-stream-button");
        null == a || a.click();
        var c = document.getElementsByClassName("ytcp-confirmation-dialog");
        Array.from(c).forEach(function (r) {
          var e;
          (e = r.innerHTML), i(e, t) && r.click();
        });
      }
    },
    c = function () {
      return setInterval(a, 1e4);
    };
  chrome.storage.onChanged.addListener(function (t) {
    t.autoEnd.newValue ? c() : window.location.reload();
  }),
    (function () {
      var t,
        r =
          ((t = n().mark(function t() {
            return n().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), chrome.storage.local.get();
                  case 2:
                    t.sent.autoEnd && c();
                  case 5:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, i) {
              var a = t.apply(r, e);
              function c(t) {
                o(a, n, i, c, u, "next", t);
              }
              function u(t) {
                o(a, n, i, c, u, "throw", t);
              }
              c(void 0);
            });
          });
      return function () {
        return r.apply(this, arguments);
      };
    })()();
})();