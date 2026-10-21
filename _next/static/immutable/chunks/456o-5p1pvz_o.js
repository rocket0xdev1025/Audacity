(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    88653,
    (t) => {
      var e = t.i(43476),
        i = t.i(71645),
        s = t.i(31178),
        n = t.i(47414),
        r = t.i(74008),
        o = t.i(21476),
        a = t.i(72846),
        l = i,
        h = t.i(37806);
      function u(t, e) {
        if ("function" == typeof t) return t(e);
        null != t && (t.current = e);
      }
      class d extends l.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (
            (0, a.f)(e) &&
            t.isPresent &&
            !this.props.isPresent &&
            !1 !== this.props.pop
          ) {
            let t = e.offsetParent,
              i = ((0, a.f)(t) && t.offsetWidth) || 0,
              s = ((0, a.f)(t) && t.offsetHeight) || 0,
              n = getComputedStyle(e),
              r = this.props.sizeRef.current;
            (r.height = parseFloat(n.height)),
              (r.width = parseFloat(n.width)),
              (r.top = e.offsetTop),
              (r.left = e.offsetLeft),
              (r.right = i - r.width - r.left),
              (r.bottom = s - r.height - r.top),
              (r.direction = n.direction);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function c({
        children: t,
        isPresent: s,
        anchorX: n,
        anchorY: r,
        root: o,
        pop: a,
      }) {
        let p = (0, l.useId)(),
          m = (0, l.useRef)(null),
          f = (0, l.useRef)({
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            direction: "ltr",
          }),
          { nonce: g } = (0, l.useContext)(h.f),
          y = (function (...t) {
            return i.useCallback(
              (function (...t) {
                return (e) => {
                  let i = !1,
                    s = t.map((t) => {
                      let s = u(t, e);
                      return i || "function" != typeof s || (i = !0), s;
                    });
                  if (i)
                    return () => {
                      for (let e = 0; e < s.length; e++) {
                        let i = s[e];
                        "function" == typeof i ? i() : u(t[e], null);
                      }
                    };
                };
              })(...t),
              t
            );
          })(m, !1 !== a ? t.props?.ref ?? t?.ref : void 0);
        return (
          (0, l.useInsertionEffect)(() => {
            let {
              width: t,
              height: e,
              top: i,
              left: l,
              right: h,
              bottom: u,
              direction: d,
            } = f.current;
            if (s || !1 === a || !m.current || !t || !e) return;
            let c = "rtl" === d,
              y =
                "left" === n
                  ? c
                    ? `right: ${h}`
                    : `left: ${l}`
                  : c
                  ? `left: ${l}`
                  : `right: ${h}`,
              v = "bottom" === r ? `bottom: ${u}` : `top: ${i}`,
              x = m.current;
            x.dataset.motionPopId = p;
            let w = x.ownerDocument,
              T = w.createElement("style");
            g && (T.nonce = g);
            let b = o ?? w.head;
            return (
              b.appendChild(T),
              T.sheet &&
                T.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${e}px !important;
            ${y}px !important;
            ${v}px !important;
          }
        `),
              () => {
                m.current?.removeAttribute("data-motion-pop-id"),
                  b.contains(T) && b.removeChild(T);
              }
            );
          }, [s]),
          (0, e.jsx)(d, {
            isPresent: s,
            childRef: m,
            sizeRef: f,
            pop: a,
            children: !1 === a ? t : l.cloneElement(t, { ref: y }),
          })
        );
      }
      let p = ({
        children: t,
        initial: s,
        isPresent: a,
        onExitComplete: l,
        custom: h,
        presenceAffectsLayout: u,
        mode: d,
        anchorX: p,
        anchorY: f,
        root: g,
      }) => {
        let y = (0, n.f)(m),
          v = (0, i.useId)(),
          x = (0, i.useRef)(a),
          w = (0, i.useRef)(l);
        (0, r.f)(() => {
          (x.current = a), (w.current = l);
        });
        let T = !0,
          b = (0, i.useMemo)(
            () => (
              (T = !1),
              {
                id: v,
                initial: s,
                isPresent: a,
                custom: h,
                onExitComplete: (t) => {
                  for (let e of (y.set(t, !0), y.values())) if (!e) return;
                  l && l();
                },
                register: (t) => (
                  y.set(t, !1),
                  () => {
                    y.delete(t), x.current || y.size || w.current?.();
                  }
                ),
              }
            ),
            [a, y, l]
          );
        return (
          u && T && (b = { ...b }),
          (0, i.useMemo)(() => {
            y.forEach((t, e) => y.set(e, !1));
          }, [a]),
          i.useEffect(() => {
            a || y.size || !l || l();
          }, [a]),
          (t = (0, e.jsx)(c, {
            pop: "popLayout" === d,
            isPresent: a,
            anchorX: p,
            anchorY: f,
            root: g,
            children: t,
          })),
          (0, e.jsx)(o.f.Provider, { value: b, children: t })
        );
      };
      function m() {
        return new Map();
      }
      var f = t.i(64978);
      let g = (t) => t.key || "";
      function y(t) {
        let e = [];
        return (
          i.Children.forEach(t, (t) => {
            (0, i.isValidElement)(t) && e.push(t);
          }),
          e
        );
      }
      t.s(
        [
          "f",
          0,
          ({
            children: t,
            custom: o,
            initial: a = !0,
            onExitComplete: l,
            presenceAffectsLayout: h = !0,
            mode: u = "sync",
            propagate: d = !1,
            anchorX: c = "left",
            anchorY: m = "top",
            root: v,
          }) => {
            let [x, w] = (0, f.f)(d),
              T = (0, i.useMemo)(() => y(t), [t]),
              b = d && !x ? [] : T.map(g),
              S = (0, i.useRef)(!0),
              P = (0, n.f)(() => new Map()),
              A = (0, i.useRef)(new Set()),
              [E, M] = (0, i.useState)(T),
              [V, C] = (0, i.useState)(T);
            (0, r.f)(() => {
              !d || x || V.length || w?.();
            }, [x, d, V.length, w]),
              (0, r.f)(() => {
                S.current = !1;
                for (let t = 0; t < V.length; t++) {
                  let e = g(V[t]);
                  b.includes(e)
                    ? (P.delete(e), A.current.delete(e))
                    : !0 !== P.get(e) && P.set(e, !1);
                }
              }, [V, b.length, b.join("-")]);
            let k = [];
            if (T !== E) {
              let t = [...T],
                e = 0;
              for (let i of V) {
                let s = b.indexOf(g(i));
                -1 === s
                  ? (t.splice(e++, 0, i), k.push(i))
                  : (e = s + k.length + 1);
              }
              return (
                k.every((t) => P.get(g(t))) ? (t = T) : "wait" === u && (t = k),
                C(y(t)),
                M(T),
                null
              );
            }
            let { forceRender: D } = (0, i.useContext)(s.f);
            return (0, e.jsx)(e.Fragment, {
              children: V.map((t) => {
                let i = g(t),
                  s = (!d || !!x) && (T === V || b.includes(i));
                return (0, e.jsx)(
                  p,
                  {
                    isPresent: s,
                    initial: (!S.current || !!a) && void 0,
                    custom: o,
                    presenceAffectsLayout: h,
                    mode: u,
                    root: v,
                    onExitComplete: s
                      ? void 0
                      : () => {
                          if (A.current.has(i) || !P.has(i)) return;
                          A.current.add(i), P.set(i, !0);
                          let t = !0;
                          P.forEach((e) => {
                            e || (t = !1);
                          }),
                            t && (D?.(), M([]), d && w?.(), l && l());
                        },
                    anchorX: c,
                    anchorY: m,
                    children: t,
                  },
                  i
                );
              }),
            });
          },
        ],
        88653
      );
    },
    31178,
    47414,
    74008,
    21476,
    72846,
    37806,
    64978,
    49652,
    46932,
    (t) => {
      let e, i, s;
      var n = t.i(71645);
      let r = (0, n.createContext)({});
      function o(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
      t.s(["f", 0, r], 31178), t.s(["f", 0, o], 47414);
      let a = "u" > typeof window ? n.useLayoutEffect : n.useEffect;
      t.s(["f", 0, a], 74008);
      let l = (0, n.createContext)(null);
      t.s(["f", 0, l], 21476);
      let h = (t) => "object" == typeof t && null !== t;
      function u(t) {
        return h(t) && "offsetHeight" in t && !("ownerSVGElement" in t);
      }
      t.s(["f", 0, u], 72846);
      let d = (0, n.createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
      function c(t = !0) {
        let e = (0, n.useContext)(l);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: s, register: r } = e,
          o = (0, n.useId)();
        (0, n.useEffect)(() => {
          if (t) return r(o);
        }, [t]);
        let a = (0, n.useCallback)(() => t && s && s(o), [o, s, t]);
        return !i && s ? [!1, a] : [!0];
      }
      t.s(["f", 0, d], 37806), t.s(["f", 0, c], 64978);
      let p = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "scaleZ",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        m = new Set([...p, "pathRotation"]),
        f = (t, e, i) => (i > e ? e : i < t ? t : i),
        g = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        y = { ...g, transform: (t) => f(0, 1, t) },
        v = { ...g, default: 1 },
        x = (t) => Math.round(1e5 * t) / 1e5,
        w = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        T =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        b = (t, e) => (i) =>
          !!(
            ("string" == typeof i && T.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        S = (t, e, i) => (s) => {
          if ("string" != typeof s) return s;
          let [n, r, o, a] = s.match(w);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        P = { ...g, transform: (t) => Math.round(f(0, 255, t)) },
        A = {
          test: b("rgb", "red"),
          parse: S("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: s = 1 }) =>
            "rgba(" +
            P.transform(t) +
            ", " +
            P.transform(e) +
            ", " +
            P.transform(i) +
            ", " +
            x(y.transform(s)) +
            ")",
        },
        E = {
          test: b("#"),
          parse: function (t) {
            let e = "",
              i = "",
              s = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (s = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (s = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (s += s),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: A.transform,
        },
        M = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        V = M("deg"),
        C = M("%"),
        k = M("px"),
        D = M("vh"),
        R = M("vw"),
        L = {
          ...C,
          parse: (t) => C.parse(t) / 100,
          transform: (t) => C.transform(100 * t),
        },
        j = {
          test: b("hsl", "hue"),
          parse: S("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: s = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            C.transform(x(e)) +
            ", " +
            C.transform(x(i)) +
            ", " +
            x(y.transform(s)) +
            ")",
        },
        F = {
          test: (t) => A.test(t) || E.test(t) || j.test(t),
          parse: (t) =>
            A.test(t) ? A.parse(t) : j.test(t) ? j.parse(t) : E.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? A.transform(t)
              : j.transform(t),
          getAnimatableNone: (t) => {
            let e = F.parse(t);
            return (e.alpha = 0), F.transform(e);
          },
        },
        B = new RegExp(w.source),
        I = RegExp(
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu
            .source,
          "i"
        ),
        O = "number",
        U = "color",
        $ =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
      function W(t) {
        let e = t.toString(),
          i = [],
          s = { color: [], number: [], var: [] },
          n = [],
          r = 0,
          o = e
            .replace(
              $,
              (t) => (
                F.test(t)
                  ? (s.color.push(r), n.push(U), i.push(F.parse(t)))
                  : t.startsWith("var(")
                  ? (s.var.push(r), n.push("var"), i.push(t))
                  : (s.number.push(r), n.push(O), i.push(parseFloat(t))),
                ++r,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: s, types: n };
      }
      function N({ split: t, types: e }) {
        let i = t.length;
        return (s) => {
          let n = "";
          for (let r = 0; r < i; r++)
            if (((n += t[r]), void 0 !== s[r])) {
              let t = e[r];
              t === O
                ? (n += x(s[r]))
                : t === U
                ? (n += F.transform(s[r]))
                : (n += s[r]);
            }
          return n;
        };
      }
      let z = {
          test: function (t) {
            return isNaN(t) && "string" == typeof t && (B.test(t) || I.test(t));
          },
          parse: function (t) {
            return W(t).values;
          },
          createTransformer: function (t) {
            return N(W(t));
          },
          getAnimatableNone: function (t) {
            let e = W(t);
            return N(e)(
              e.values.map((t, i) =>
                ((t, e) =>
                  "number" == typeof t
                    ? e?.trim().endsWith("/")
                      ? t
                      : 0
                    : "number" == typeof t
                    ? 0
                    : F.test(t)
                    ? F.getAnimatableNone(t)
                    : t)(t, e.split[i])
              )
            );
          },
        },
        Y = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function X(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [s] = i.match(w) || [];
        if (!s) return t;
        let n = i.replace(s, ""),
          r = +!!Y.has(e);
        return s !== i && (r *= 100), e + "(" + r + n + ")";
      }
      let H = /\b([a-z-]*)\(.*?\)/gu,
        K = {
          ...z,
          getAnimatableNone: (t) => {
            let e = t.match(H);
            return e ? e.map(X).join(" ") : t;
          },
        },
        _ = {
          ...z,
          getAnimatableNone: (t) => {
            let e = z.parse(t);
            return z.createTransformer(t)(
              e.map((t) =>
                "number" == typeof t
                  ? 0
                  : "object" == typeof t
                  ? { ...t, alpha: 1 }
                  : t
              )
            );
          },
        },
        G = { ...g, transform: Math.round },
        q = {
          borderWidth: k,
          borderTopWidth: k,
          borderRightWidth: k,
          borderBottomWidth: k,
          borderLeftWidth: k,
          borderRadius: k,
          borderTopLeftRadius: k,
          borderTopRightRadius: k,
          borderBottomRightRadius: k,
          borderBottomLeftRadius: k,
          width: k,
          maxWidth: k,
          height: k,
          maxHeight: k,
          top: k,
          right: k,
          bottom: k,
          left: k,
          inset: k,
          insetBlock: k,
          insetBlockStart: k,
          insetBlockEnd: k,
          insetInline: k,
          insetInlineStart: k,
          insetInlineEnd: k,
          padding: k,
          paddingTop: k,
          paddingRight: k,
          paddingBottom: k,
          paddingLeft: k,
          paddingBlock: k,
          paddingBlockStart: k,
          paddingBlockEnd: k,
          paddingInline: k,
          paddingInlineStart: k,
          paddingInlineEnd: k,
          margin: k,
          marginTop: k,
          marginRight: k,
          marginBottom: k,
          marginLeft: k,
          marginBlock: k,
          marginBlockStart: k,
          marginBlockEnd: k,
          marginInline: k,
          marginInlineStart: k,
          marginInlineEnd: k,
          fontSize: k,
          backgroundPositionX: k,
          backgroundPositionY: k,
          rotate: V,
          pathRotation: V,
          rotateX: V,
          rotateY: V,
          rotateZ: V,
          scale: v,
          scaleX: v,
          scaleY: v,
          scaleZ: v,
          skew: V,
          skewX: V,
          skewY: V,
          distance: k,
          translateX: k,
          translateY: k,
          translateZ: k,
          x: k,
          y: k,
          z: k,
          perspective: k,
          transformPerspective: k,
          opacity: y,
          originX: L,
          originY: L,
          originZ: k,
          zIndex: G,
          fillOpacity: y,
          strokeOpacity: y,
          numOctaves: G,
        },
        Z = {
          ...q,
          color: F,
          backgroundColor: F,
          outlineColor: F,
          fill: F,
          stroke: F,
          borderColor: F,
          borderTopColor: F,
          borderRightColor: F,
          borderBottomColor: F,
          borderLeftColor: F,
          filter: K,
          WebkitFilter: K,
          mask: _,
          WebkitMask: _,
        },
        J = (t) => Z[t],
        Q = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        tt = () => ({ x: Q(), y: Q() }),
        te = () => ({ min: 0, max: 0 }),
        ti = () => ({ x: te(), y: te() }),
        ts = (t) => !!(t && t.getVelocity),
        tn = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...p,
        ]),
        tr = [g, k, C, V, R, D, { test: (t) => "auto" === t, parse: (t) => t }],
        to = (t) => tr.find((e) => e.test(t)),
        ta = () => {},
        tl = () => {},
        th = (t) => (e) => "string" == typeof e && e.startsWith(t),
        tu = th("--"),
        td = th("var(--"),
        tc = (t) => !!td(t) && tp.test(t.split("/*")[0].trim()),
        tp =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
      function tm(t) {
        return "string" == typeof t && t.split("/*")[0].includes("var(--");
      }
      let tf = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        tg = new Set([K, _]);
      function ty(t, e) {
        let i = J(t);
        return (
          tg.has(i) || (i = z),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let tv = (t) => (180 * t) / Math.PI,
        tx = (t) => tT(tv(Math.atan2(t[1], t[0]))),
        tw = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scaleZ: () => 1,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: tx,
          rotateZ: tx,
          skewX: (t) => tv(Math.atan(t[1])),
          skewY: (t) => tv(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        tT = (t) => ((t %= 360) < 0 && (t += 360), t),
        tb = (t) => Math.hypot(t[0], t[1]),
        tS = (t) => Math.hypot(t[4], t[5]),
        tP = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: tb,
          scaleY: tS,
          scaleZ: (t) => Math.hypot(t[8], t[9], t[10]),
          scale: (t) => (tb(t) + tS(t)) / 2,
          rotateX: (t) => tT(tv(Math.atan2(t[6], t[5]))),
          rotateY: (t) => tT(tv(Math.atan2(-t[2], t[0]))),
          rotateZ: tx,
          rotate: tx,
          skewX: (t) => tv(Math.atan(t[4])),
          skewY: (t) => tv(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function tA(t) {
        return +!!t.includes("scale");
      }
      function tE(t, e) {
        let i, s;
        if (!t || "none" === t) return tA(e);
        let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (n) (i = tP), (s = n);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (i = tw), (s = e);
        }
        if (!s) return tA(e);
        let r = i[e],
          o = s[1].split(",").map(tM);
        return "function" == typeof r ? r(o) : o[r];
      }
      function tM(t) {
        return parseFloat(t.trim());
      }
      let tV = (t) => t === g || t === k,
        tC = new Set(["x", "y", "z"]),
        tk = p.filter((t) => !tC.has(t)),
        tD = new Set(["bottom", "right"]);
      function tR(t, e, i, s, n, r) {
        let o = parseFloat(t);
        if (!isNaN(o)) return o;
        let { min: a, max: l } = e()[i],
          h = l - a;
        return "border-box" === r ? h : h - parseFloat(s) - parseFloat(n);
      }
      let tL = {
        width: (
          {
            width: t,
            paddingLeft: e = "0",
            paddingRight: i = "0",
            boxSizing: s,
          },
          n
        ) => tR(t, n, "x", e, i, s),
        height: (
          {
            height: t,
            paddingTop: e = "0",
            paddingBottom: i = "0",
            boxSizing: s,
          },
          n
        ) => tR(t, n, "y", e, i, s),
        top: ({ top: t }) => parseFloat(t),
        left: ({ left: t }) => parseFloat(t),
        bottom: ({ top: t }, e) => {
          let { y: i } = e();
          return parseFloat(t) + (i.max - i.min);
        },
        right: ({ left: t }, e) => {
          let { x: i } = e();
          return parseFloat(t) + (i.max - i.min);
        },
        x: ({ transform: t }) => tE(t, "x"),
        y: ({ transform: t }) => tE(t, "y"),
      };
      (tL.translateX = tL.x), (tL.translateY = tL.y);
      let tj = (t) => t,
        tF = {},
        tB = [
          "setup",
          "read",
          "resolveKeyframes",
          "preUpdate",
          "update",
          "preRender",
          "render",
          "postRender",
        ];
      function tI(t, e, i = { delta: 0, timestamp: 0, isProcessing: !1 }) {
        let s = !1,
          n = !0,
          r = () => (s = !0),
          o = tB.reduce(
            (t, e) => (
              (t[e] = (function (t) {
                let e = new Set(),
                  i = new Set(),
                  s = !1,
                  n = !1,
                  r = new Set(),
                  o = { delta: 0, timestamp: 0, isProcessing: !1 };
                function a(e) {
                  r.has(e) && (i.add(e), t()), e(o);
                }
                let l = {
                  schedule: (t, n = !1, o = !1) => {
                    let a = o && s ? e : i;
                    return n && r.add(t), a.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), r.delete(t);
                  },
                  process: (t) => {
                    if (((o = t), s)) {
                      n = !0;
                      return;
                    }
                    s = !0;
                    let r = e;
                    (e = i),
                      (i = r),
                      e.forEach(a),
                      e.clear(),
                      (s = !1),
                      n && ((n = !1), l.process(t));
                  },
                };
                return l;
              })(r)),
              t
            ),
            {}
          ),
          {
            setup: a,
            read: l,
            resolveKeyframes: h,
            preUpdate: u,
            update: d,
            preRender: c,
            render: p,
            postRender: m,
          } = o,
          f = () => {
            let r = tF.useManualTiming,
              o = r ? i.timestamp : performance.now();
            (s = !1),
              r ||
                (i.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(o - i.timestamp, 40), 1)),
              (i.timestamp = o),
              (i.isProcessing = !0),
              a.process(i),
              l.process(i),
              h.process(i),
              u.process(i),
              d.process(i),
              c.process(i),
              p.process(i),
              m.process(i),
              (i.isProcessing = !1),
              s && e && ((n = !1), t(f));
          };
        return {
          schedule: tB.reduce((e, r) => {
            let a = o[r];
            return (
              (e[r] = (e, r = !1, o = !1) => (
                !s && ((s = !0), (n = !0), i.isProcessing || t(f)),
                a.schedule(e, r, o)
              )),
              e
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < tB.length; e++) o[tB[e]].cancel(t);
          },
          state: i,
          steps: o,
        };
      }
      let tO = { delta: 0, timestamp: 0, isProcessing: !1 },
        {
          schedule: tU,
          cancel: t$,
          steps: tW,
        } = tI(
          "u" > typeof requestAnimationFrame ? requestAnimationFrame : tj,
          !0,
          tO
        ),
        tN = new Set(),
        tz = !1,
        tY = !1,
        tX = !1;
      function tH() {
        if (tY) {
          let t = [],
            e = new Set(),
            i = new Set();
          tN.forEach((s) => {
            s.needsMeasurement &&
              (t.push(s), e.add(s.element), tD.has(s.name) && i.add(s.element));
          });
          let s = new Map();
          i.forEach((t) => {
            let e,
              i =
                ((e = []),
                tk.forEach((i) => {
                  let s = t.getValue(i);
                  if (void 0 !== s) {
                    let t = s.get(),
                      n = +!!i.startsWith("scale");
                    if (t === n) return;
                    e.push([i, t]), s.set(n);
                  }
                }),
                e);
            i.length && (s.set(t, i), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = s.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tY = !1), (tz = !1), tN.forEach((t) => t.complete(tX)), tN.clear();
      }
      function tK() {
        tN.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tY = !0);
        });
      }
      class t_ {
        constructor(t, e, i, s, n, r = !1) {
          (this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = s),
            (this.element = n),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.state = "scheduled"),
            this.isAsync
              ? (tN.add(this),
                tz || ((tz = !0), tU.read(tK), tU.resolveKeyframes(tH)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: s,
          } = this;
          if (null === t[0]) {
            let n = s?.get(),
              r = t[t.length - 1];
            if (void 0 !== n) t[0] = n;
            else if (i && e) {
              let s = (function (t, e, i) {
                if ("string" == typeof t) {
                  if (
                    /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t) ||
                    /^0[^.\s]+$/u.test(t)
                  )
                    return parseFloat(t);
                  if (!z.test(t) && z.test(i)) return ty(e, i);
                }
                return t ?? void 0;
              })(i.readValue(e, r), e, r);
              void 0 !== s && (t[0] = s);
            }
            void 0 === t[0] && (t[0] = r), s && void 0 === n && s.set(t[0]);
          }
          for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          (this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            tN.delete(this);
        }
        cancel() {
          "scheduled" === this.state &&
            (tN.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      let tG = new Set(["auto", "none", "0"]);
      class tq extends t_ {
        constructor(t, e, i, s, n) {
          super(t, e, i, s, n, !0);
        }
        scheduleResolve() {
          if (
            this.canReadNow() &&
            (this.readKeyframes(), !this.needsMeasurement)
          )
            return this.complete();
          super.scheduleResolve();
        }
        canReadNow() {
          let { unresolvedKeyframes: t, element: e, motionValue: i } = this,
            s = t[0] ?? i?.get();
          if (!e?.current || void 0 === s) return !1;
          for (let e = 0; e < t.length; e++) if (tm(e ? t[e] : s)) return !1;
          return !0;
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let s = t[i];
            if ("string" == typeof s && tc((s = s.trim()))) {
              let n = (function t(e, i, s = 1) {
                tl(
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
                );
                let [n, r] = (function (t) {
                  let e = tf.exec(t);
                  if (!e) return [,];
                  let [, i, s, n] = e;
                  return [`--${i ?? s}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(i).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
                    ? parseFloat(t)
                    : t;
                }
                return tc(r) ? t(r, i, s + 1) : r;
              })(s, e.current);
              void 0 !== n && (t[i] = n),
                i === t.length - 1 && (this.finalKeyframe = s);
            }
          }
          if ((this.resolveNoneKeyframes(), !tn.has(i) || 2 !== t.length))
            return;
          let [s, n] = t;
          if ("number" == typeof s && "number" == typeof n) return;
          let r = to(s),
            o = to(n);
          if (tm(s) !== tm(n) && tL[i]) {
            this.needsMeasurement = !0;
            return;
          }
          if (r !== o)
            if (tV(r) && tV(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else tL[i] && (this.needsMeasurement = !0);
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++)
            (null === t[e] ||
              (function (t) {
                if ("number" == typeof t) return 0 === t;
                if (null === t) return !0;
                return "none" === t || "0" === t || /^0[^.\s]+$/u.test(t);
              })(t[e])) &&
              i.push(e);
          i.length &&
            (function (t, e, i) {
              let s,
                n = 0;
              for (; n < t.length && !s; ) {
                let e = t[n];
                "string" == typeof e &&
                  !tG.has(e) &&
                  (function (t) {
                    let e = t.toString();
                    return B.test(e) || I.test(e);
                  })(e) &&
                  (s = t[n]),
                  n++;
              }
              if (s && i) for (let n of e) t[n] !== s && (t[n] = ty(i, s));
            })(t, i, e);
        }
        measure() {
          let { element: t, name: e } = this;
          return tL[e](window.getComputedStyle(t.current), () =>
            t.measureViewportBox()
          );
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = this.measure()),
            (e[0] = this.measuredOrigin);
          let s = e[e.length - 1];
          void 0 !== s && this.motionValue?.jump(s, !1);
        }
        measureEndState() {
          let { element: t, unresolvedKeyframes: e } = this;
          if (!t || !t.current) return;
          this.motionValue?.jump(this.measuredOrigin, !1);
          let i = e.length - 1,
            s = e[i];
          (e[i] = this.measure()),
            null !== s &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = s),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let tZ = (t) => 1e3 * t;
      function tJ(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function tQ(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class t0 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return tJ(this.subscriptions, t), () => this.remove(t);
        }
        remove(t) {
          tQ(this.subscriptions, t);
        }
        notify(t, e, i) {
          let s = this.subscriptions.length;
          if (s)
            if (1 === s) this.subscriptions[0](t, e, i);
            else
              for (let n = 0; n < s; n++) {
                let s = this.subscriptions[n];
                s && s(t, e, i);
              }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      function t1(t, e, i) {
        e.startsWith("--") ? t.style.setProperty(e, i) : (t.style[e] = i);
      }
      function t2(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let t3 = {};
      function t5(t, e) {
        let i = t2(t);
        return () => t3[e] ?? i();
      }
      let t4 = t5(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
        t9 = (t) => null !== t;
      function t6(t, { repeat: e, repeatType: i = "loop" }, s, n = 1) {
        let r = t.filter(t9),
          o = n < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : r.length - 1;
        return o && void 0 !== s ? s : r[o];
      }
      class t7 {
        constructor() {
          this.isResolved = !1;
        }
        get finished() {
          return (
            this._finished ||
              (this._finished = this.isResolved
                ? Promise.resolve()
                : new Promise((t) => {
                    this._resolve = t;
                  })),
            this._finished
          );
        }
        updateFinished() {
          (this._finished = this._resolve = void 0), (this.isResolved = !1);
        }
        notifyFinished() {
          (this.isResolved = !0), this._resolve?.();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      function t8() {
        e = void 0;
      }
      let et = {
        now: () => (
          void 0 === e &&
            et.set(
              tO.isProcessing || tF.useManualTiming
                ? tO.timestamp
                : performance.now()
            ),
          e
        ),
        set: (t) => {
          (e = t), queueMicrotask(t8);
        },
      };
      function ee(t, e) {
        return {
          kind: t,
          animation: e,
          timestamp: et.now(),
          frameTimestamp: tO.timestamp,
          frameIsProcessing: tO.isProcessing,
        };
      }
      function ei(t, e, i) {
        let s = globalThis.__MOTION_INSPECT__;
        if (s)
          try {
            s({ ...ee("animation-start", t), options: i ? { ...e, ...i } : e });
          } catch {}
      }
      let es = (t) => Array.isArray(t) && "number" == typeof t[0],
        en = t5(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        er = (t, e, i = 10) => {
          let s = "",
            n = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < n; e++)
            s += Math.round(1e4 * t(e / (n - 1))) / 1e4 + ", ";
          return `linear(${s.substring(0, s.length - 2)})`;
        },
        eo = ([t, e, i, s]) => `cubic-bezier(${t}, ${e}, ${i}, ${s})`,
        ea = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: eo([0, 0.65, 0.55, 1]),
          circOut: eo([0.55, 0, 1, 0.45]),
          backIn: eo([0.31, 0.01, 0.66, -0.59]),
          backOut: eo([0.33, 1.53, 0.69, 0.99]),
        };
      function el(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class eh extends t7 {
        constructor(t) {
          if (
            (super(),
            (this.finishedTime = null),
            (this.isStopped = !1),
            (this.manualStartTime = null),
            !t)
          )
            return;
          let {
            element: e,
            name: i,
            keyframes: s,
            pseudoElement: n,
            allowFlatten: r = !1,
            finalKeyframe: o,
            onComplete: a,
          } = t;
          (this.isPseudoElement = !!n),
            (this.allowFlatten = r),
            (this.options = t),
            tl(t.type);
          let l = (function ({ type: t, ...e }) {
            return el(t) && en()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          (this.animation = (function (
            t,
            e,
            i,
            {
              delay: s = 0,
              duration: n = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a = "easeOut",
              times: l,
            } = {},
            h
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let d = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? en()
                    ? er(e, i)
                    : "ease-out"
                  : es(e)
                  ? eo(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || ea.easeOut)
                  : ea[e];
            })(a, n);
            Array.isArray(d) && (u.easing = d);
            let c = {
              delay: s,
              duration: n,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: r + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            };
            return h && (c.pseudoElement = h), t.animate(u, c);
          })(e, i, s, l, n)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !n)) {
                let t = t6(s, this.options, o, this.speed);
                this.updateMotionValue && this.updateMotionValue(t),
                  t1(e, i, t),
                  this.animation.cancel();
              }
              a?.(), this.notifyFinished();
            }),
            ei(this, t, l);
        }
        play() {
          this.isStopped ||
            ((this.manualStartTime = null),
            this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          let t = this.options?.element;
          !this.isPseudoElement &&
            t?.isConnected &&
            this.animation.commitStyles?.();
        }
        get duration() {
          return (
            Number(this.animation.effect?.getComputedTiming?.().duration || 0) /
            1e3
          );
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + t / 1e3;
        }
        get time() {
          return (Number(this.animation.currentTime) || 0) / 1e3;
        }
        set time(t) {
          let e = null !== this.finishedTime;
          (this.manualStartTime = null),
            (this.finishedTime = null),
            (this.animation.currentTime = tZ(t)),
            e && this.animation.pause();
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t);
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return this.manualStartTime ?? Number(this.animation.startTime);
        }
        set startTime(t) {
          this.manualStartTime = this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, onAttach: e, observe: i }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && t4())
            ? ((this.animation.timeline = t), e?.(this.animation), tj)
            : i(this);
        }
      }
      let eu = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        ed = new WeakMap(),
        { schedule: ec } = tI(queueMicrotask, !1),
        ep = (t, e) => (e ? (1e3 / e) * t : 0),
        em;
      class ef {
        constructor(t, e = {}) {
          (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t) => {
              let e = et.now();
              if (
                (this.updatedAt !== e && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.notifyChange(), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = et.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = !isNaN(parseFloat(this.current)));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          var i;
          return "change" === t
            ? this.onChangeSubscribe(e)
            : ((i = this.events)[t] || (i[t] = new t0())).add(e);
        }
        onChangeSubscribe(t) {
          let { events: e } = this;
          return (
            e.change || this.changeSubscriber
              ? (e.change ||
                  ((e.change = new t0()),
                  e.change.add(this.changeSubscriber),
                  (this.changeSubscriber = void 0)),
                e.change.add(t))
              : (this.changeSubscriber = t),
            () => {
              this.changeSubscriber === t
                ? (this.changeSubscriber = void 0)
                : e.change?.remove(t),
                this.stopIfUnobserved();
            }
          );
        }
        stopIfUnobserved() {
          tU.read(() => {
            this.changeSubscriber ||
              this.events.change?.getSize() ||
              this.stop();
          });
        }
        clearListeners() {
          for (let t in ((this.changeSubscriber = void 0), this.events))
            this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t) {
          this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        dirty() {
          this.notifyChange();
        }
        notifyChange() {
          let { current: t, changeSubscriber: e } = this;
          e ? e(t) : this.events.change?.notify(t);
        }
        addDependent(t) {
          this.dependents || (this.dependents = new Set()),
            this.dependents.add(t);
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          em && em.push(this);
          let t = this.animation?.liveValue?.();
          return void 0 === t ? this.current : t;
        }
        getCurrent() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          let t = et.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            t - this.updatedAt > 30
          )
            return 0;
          let e = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return ep(
            parseFloat(this.current) - parseFloat(this.prevFrameValue),
            e
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              let i;
              this.hasAnimated = !0;
              let s = !1;
              (i = t(() => {
                (s = !0),
                  this.events.animationComplete?.notify(),
                  this.animation === i && this.clearAnimation(),
                  e();
              })),
                s || (this.animation = i),
                this.events.animationStart?.notify();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          this.animation = void 0;
        }
        destroy() {
          this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function eg(t, e) {
        return new ef(t, e);
      }
      let ey = new WeakMap();
      function ev(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function ex(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let ew = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        eT = ["initial", ...ew];
      function eb(t) {
        if (ev(t.animate)) return !0;
        for (let e = 0; e < eT.length; e++) if (ex(t[eT[e]])) return !0;
        return !1;
      }
      function eS(t) {
        return !!(eb(t) || t.variants);
      }
      let eP = { current: null },
        eA = { current: !1 },
        eE = "u" > typeof window,
        eM = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        eV = {};
      class eC {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: s,
            skipAnimations: n,
            blockInitialAnimation: r,
            visualState: o,
          },
          a = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.shouldSkipAnimations = !1),
            (this.values = new Map()),
            (this.KeyframeResolver = t_),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.hasBeenMounted = !1),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = et.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), tU.render(this.render, !1, !0));
            });
          let { latestValues: l, renderState: h } = o;
          (this.latestValues = l),
            (this.baseTarget = { ...l }),
            (this.initialValues = e.initial ? { ...l } : {}),
            (this.renderState = h),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = s),
            (this.skipAnimationsConfig = n),
            (this.options = a),
            (this.blockInitialAnimation = !!r),
            (this.isControllingVariants = eb(e)),
            (this.isVariantNode = eS(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...d } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in d) {
            let e = d[t];
            void 0 !== l[t] && ts(e) && e.set(l[t]);
          }
        }
        mount(t) {
          if (this.hasBeenMounted)
            for (let t in this.initialValues)
              this.values.get(t)?.jump(this.initialValues[t]),
                (this.latestValues[t] = this.initialValues[t]);
          if (
            ((this.current = t),
            ey.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.isVariantNode && !this.isControllingVariants)
          ) {
            let t = this;
            do t = !1 !== t.props.inherit && t.parent;
            while (t && !t.isVariantNode);
            if (t) {
              let { variantChildren: e } = t;
              e.add(this), (this.removeFromVariantTree = () => e.delete(this));
            }
          }
          this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            "never" === this.reducedMotionConfig
              ? (this.shouldReduceMotion = !1)
              : "always" === this.reducedMotionConfig
              ? (this.shouldReduceMotion = !0)
              : (eA.current ||
                  (function () {
                    if (((eA.current = !0), eE))
                      if (window.matchMedia) {
                        let t = window.matchMedia("(prefers-reduced-motion)"),
                          e = () => (eP.current = t.matches);
                        t.addEventListener("change", e), e();
                      } else eP.current = !1;
                  })(),
                (this.shouldReduceMotion = eP.current)),
            (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext),
            (this.hasBeenMounted = !0);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          t$(this.notifyUpdate),
          t$(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent?.removeChild(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        addChild(t) {
          this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(t);
        }
        removeChild(t) {
          this.children.delete(t),
            this.enteringChildren && this.enteringChildren.delete(t);
        }
        bindToMotionValue(t, e) {
          let i;
          if (
            (this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)(),
            e.accelerate && eu.has(t) && this.current instanceof HTMLElement)
          ) {
            let {
                factory: i,
                keyframes: s,
                times: n,
                ease: r,
                duration: o,
              } = e.accelerate,
              a = new eh({
                element: this.current,
                name: t,
                keyframes: s,
                times: n,
                ease: r,
                duration: tZ(o),
              }),
              l = i(a);
            this.valueSubscriptions.set(t, () => {
              l(), a.cancel();
            });
            return;
          }
          let s = m.has(t);
          s && this.onBindTransform && this.onBindTransform();
          let n = e.on("change", (e) => {
            (this.latestValues[t] = e),
              this.props.onUpdate && tU.preRender(this.notifyUpdate),
              s &&
                (this.projection && (this.projection.isTransformDirty = !0),
                ed.get(this.current)?.check()),
              this.scheduleRender();
          });
          "u" > typeof window &&
            window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), i && i();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            t.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in eV) {
            let e = eV[t];
            if (!e) continue;
            let { isEnabled: i, Feature: s } = e;
            if (
              (!this.features[t] &&
                s &&
                i(this.props) &&
                (this.features[t] = new s(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : ti();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          let { transformTemplate: i, onUpdate: s } = this.props;
          (t.transformTemplate || i) && this.scheduleRender(),
            ((t.transformTemplate && !i) || (t.onUpdate && !s)) &&
              ed.get(this.current)?.demote(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < eM.length; e++) {
            let i = eM[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let s in e) {
              let n = e[s],
                r = i[s];
              if (ts(n)) t.addValue(s, n);
              else if (ts(r)) t.addValue(s, eg(n, { owner: t }));
              else if (r !== n)
                if (t.hasValue(s)) {
                  let e = t.getValue(s);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(s);
                  t.addValue(s, eg(void 0 !== e ? e : n, { owner: t }));
                }
            }
            for (let s in i) void 0 === e[s] && t.removeValue(s);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps || {}, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        addValue(t, e) {
          let i = this.values.get(t);
          if (e !== i) {
            i && this.removeValue(t),
              this.bindToMotionValue(t, e),
              this.values.set(t, e);
            let s = e.get();
            void 0 !== s && (this.latestValues[t] = s);
          }
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = eg(e ?? this.getDefaultValue?.(t), { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          if (null != i) {
            let s, n;
            "string" == typeof i &&
            ((s = i),
            /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(s) ||
              ((n = i), /^0[^.\s]+$/u.test(n)))
              ? (i = parseFloat(i))
              : "number" != typeof i &&
                !z.test(i) &&
                z.test(e) &&
                (i = ty(t, e)),
              this.setBaseTarget(t, ts(i) ? i.get() : i);
          }
          return ts(i) ? i.get() : i;
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new t0()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
        scheduleRenderMicrotask() {
          ec.render(this.render);
        }
      }
      class ek extends eC {
        constructor() {
          super(...arguments), (this.KeyframeResolver = tq);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          let i = t.style;
          return i ? i[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          ts(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      function eD(t) {
        return t.replace(/([A-Z])/g, (t) => `-${t.toLowerCase()}`);
      }
      let eR = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        eL = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        ej = p.length;
      function eF(t, e, i) {
        let s = "",
          n = !0;
        for (let r = 0; r < ej; r++) {
          let o = p[r],
            a = t[o];
          if (void 0 === a) continue;
          let l = !0;
          if ("number" == typeof a) l = a === +!!o.startsWith("scale");
          else {
            let t = parseFloat(a);
            l = o.startsWith("scale") ? 1 === t : 0 === t;
          }
          if (!l || i) {
            let t = eR(a, q[o]);
            if (!l) {
              n = !1;
              let e = eL[o] || o;
              s += `${e}(${t}) `;
            }
            i && (e[o] = t);
          }
        }
        let r = t.pathRotation;
        return (
          r && ((n = !1), (s += `rotate(${eR(r, q.pathRotation)}) `)),
          (s = s.trim()),
          i ? (s = i(e, n ? "" : s)) : n && (s = "none"),
          s
        );
      }
      function eB(t, e, i) {
        let { style: s, vars: n, transformOrigin: r } = t,
          o = !1,
          a = !1;
        for (let t in e) {
          let i = e[t];
          if (m.has(t)) {
            o = !0;
            continue;
          }
          if (tu(t)) {
            n[t] = i;
            continue;
          }
          {
            let e = eR(i, q[t]);
            t.startsWith("origin") ? ((a = !0), (r[t] = e)) : (s[t] = e);
          }
        }
        if (
          (!e.transform &&
            (o || i
              ? (s.transform = eF(e, t.transform, i))
              : s.transform && (s.transform = "none")),
          a)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = r;
          s.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      let eI = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        eO = { offset: "strokeDashoffset", array: "strokeDasharray" },
        eU = [
          "transform",
          "opacity",
          "clipPath",
          "filter",
          "offsetDistance",
          "offsetPath",
          "offsetRotate",
          "offsetAnchor",
        ];
      function e$(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: s,
          pathLength: n,
          pathSpacing: r = 1,
          pathOffset: o = 0,
          ...a
        },
        l,
        h,
        u
      ) {
        if ((eB(t, a, h), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: c } = t;
        for (let t of eU) void 0 !== d[t] && ((c[t] = d[t]), delete d[t]);
        (c.transform || d.transformOrigin) &&
          ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
          delete d.transformOrigin),
          c.transform &&
            ((c.transformBox = u?.transformBox ?? "fill-box"),
            delete d.transformBox),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== s && (d.scale = s),
          void 0 !== n &&
            (function (t, e, i = 1, s = 0, n = !0) {
              t.pathLength = 1;
              let r = n ? eI : eO;
              (t[r.offset] = `${-s}`), (t[r.array] = `${e} ${i}`);
            })(d, n, r, o, !1);
      }
      let eW = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]),
        eN = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function ez(t, { style: e, vars: i }, s, n) {
        let r,
          o = t.style;
        for (r in e) o[r] = e[r];
        for (r in (n?.applyProjectionStyles(o, s), i)) o.setProperty(r, i[r]);
      }
      let eY = {};
      function eX(t, { layout: e, layoutId: i }) {
        return (
          m.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!eY[t] || "opacity" === t))
        );
      }
      function eH(t, e, i) {
        let s = t.style,
          n = e?.style,
          r = {};
        if (!s) return r;
        for (let e in s)
          (ts(s[e]) ||
            (n && ts(n[e])) ||
            eX(e, t) ||
            i?.getValue(e)?.liveStyle !== void 0) &&
            (r[e] = s[e]);
        return r;
      }
      function eK(t, e, i) {
        let s = eH(t, e, i);
        for (let i in t)
          "children" !== i &&
            (ts(t[i]) || ts(e[i])) &&
            (s[
              -1 !== p.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return s;
      }
      class e_ extends ek {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = ti);
        }
        getBaseTargetFromProps(t, e) {
          return m.has(e) ? super.getBaseTargetFromProps(t, e) ?? tA(e) : t[e];
        }
        getDefaultValue(t) {
          return m.has(t) ? this.latestValues[t] ?? tA(t) : void 0;
        }
        readValueFromInstance(t, e) {
          if (m.has(e)) {
            let t = J(e);
            return (t && t.default) || 0;
          }
          if (eU.includes(e)) {
            let i = getComputedStyle(t)[e];
            if ("string" == typeof i && i) return i.trim();
          }
          return (e = eW.has(e) ? e : eD(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eK(t, e, i);
        }
        build(t, e, i) {
          e$(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, s) {
          for (let i in (ez(t, e, void 0, s), e.attrs))
            t.setAttribute(eW.has(i) ? i : eD(i), e.attrs[i]);
        }
        mount(t) {
          (this.isSVGTag = eN(t.tagName)), super.mount(t);
        }
      }
      function eG({ top: t, left: e, right: i, bottom: s }) {
        return { x: { min: e, max: i }, y: { min: t, max: s } };
      }
      let eq = (t, e, i) => t + (e - t) * i;
      function eZ(t) {
        return void 0 === t || 1 === t;
      }
      function eJ({ scale: t, scaleX: e, scaleY: i }) {
        return !eZ(t) || !eZ(e) || !eZ(i);
      }
      function eQ(t) {
        return (
          eJ(t) ||
          e0(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function e0(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function e1(t, e, i, s, n) {
        return void 0 !== n && (t = s + n * (t - s)), s + i * (t - s) + e;
      }
      function e2(t, e = 0, i = 1, s, n) {
        (t.min = e1(t.min, e, i, s, n)), (t.max = e1(t.max, e, i, s, n));
      }
      function e3(t, { x: e, y: i }) {
        e2(t.x, e.translate, e.scale, e.originPoint),
          e2(t.y, i.translate, i.scale, i.originPoint);
      }
      function e5(t, e) {
        (t.min += e), (t.max += e);
      }
      function e4(t, e, i, s, n = 0.5) {
        let r = eq(t.min, t.max, n);
        e2(t, e, i, r, s);
      }
      function e9(t, e) {
        return "string" == typeof t
          ? (parseFloat(t) / 100) * (e.max - e.min)
          : t;
      }
      function e6(t, e, i) {
        let s = i ?? t;
        e4(t.x, e9(e.x, s.x), e.scaleX, e.scale, e.originX),
          e4(t.y, e9(e.y, s.y), e.scaleY, e.scale, e.originY);
      }
      function e7(t, e) {
        return eG(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              s = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: s.y, right: s.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      class e8 extends ek {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = ez);
        }
        mount(t) {
          tl(t.style), super.mount(t);
        }
        readValueFromInstance(t, e) {
          if (m.has(e))
            return this.projection?.isProjecting
              ? tA(e)
              : ((t, e) => {
                  let { transform: i = "none" } = getComputedStyle(t);
                  return tE(i, e);
                })(t, e);
          {
            let i = window.getComputedStyle(t),
              s = (tu(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof s ? s.trim() : s;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return e7(t, e);
        }
        build(t, e, i) {
          eB(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eH(t, e, i);
        }
      }
      let it = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function ie(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (it.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var ii = t.i(43476);
      let is = (0, n.createContext)({ strict: !1 }),
        ir = (0, n.createContext)({});
      function io(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let ia = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function il(t, e, i) {
        for (let s in e) ts(e[s]) || eX(s, i) || (t[s] = e[s]);
      }
      let ih = () => ({ ...ia(), attrs: {} }),
        iu = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "propagate",
          "ignoreStrict",
          "viewport",
        ]);
      function id(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          iu.has(t)
        );
      }
      function ic(t) {
        return ts(t) ? t.get() : t;
      }
      function ip(t, e, i, s) {
        let n = (e) => {
          let n;
          return "function" == typeof e
            ? e(
                void 0 !== i ? i : t.custom,
                ...((n = [{}, {}]),
                s?.values.forEach((t, e) => {
                  (n[0][e] = t.get()), (n[1][e] = t.getVelocity());
                }),
                n)
              )
            : e;
        };
        return (
          "string" == typeof (e = n(e)) && (e = t.variants && t.variants[e]),
          n(e)
        );
      }
      let im = (t) => (e, i) => {
          let s = (0, n.useContext)(ir),
            r = (0, n.useContext)(l),
            a = () =>
              (function (
                { scrapeMotionValuesFromProps: t, createRenderState: e },
                i,
                s,
                n
              ) {
                return {
                  latestValues: (function (t, e, i, s) {
                    let n = {},
                      r = s(t, {});
                    for (let t in r) n[t] = ic(r[t]);
                    let { initial: o, animate: a } = t,
                      l = eb(t),
                      h = eS(t);
                    e &&
                      h &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let u = !!i && !1 === i.initial,
                      d = (u = u || !1 === o) ? a : o;
                    if (d && "boolean" != typeof d && !ev(d)) {
                      let e = Array.isArray(d) ? d : [d];
                      for (let i = 0; i < e.length; i++) {
                        let s = ip(t, e[i]);
                        if (s) {
                          let { transitionEnd: t, transition: e, ...i } = s;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = u ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (n[t] = e);
                          }
                          for (let e in t) n[e] = t[e];
                        }
                      }
                    }
                    return n;
                  })(i, s, n, t),
                  renderState: e(),
                };
              })(t, e, s, r);
          return i ? a() : o(a);
        },
        ig = im({ scrapeMotionValuesFromProps: eH, createRenderState: ia }),
        iy = im({ scrapeMotionValuesFromProps: eK, createRenderState: ih }),
        iv = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        ix = !1;
      function iw() {
        return (
          !(function () {
            if (ix) return;
            let t = {};
            for (let e in iv)
              t[e] = { isEnabled: (t) => iv[e].some((e) => !!t[e]) };
            (eV = t), (ix = !0);
          })(),
          eV
        );
      }
      let iT = Symbol.for("motionComponentSymbol"),
        ib = "data-" + eD("framerAppearId"),
        iS = (0, n.createContext)({});
      function iP(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      function iA(t, { forwardMotionProps: e = !1, type: i } = {}, s, o) {
        s &&
          (function (t) {
            let e = iw();
            for (let i in t) e[i] = { ...e[i], ...t[i] };
            eV = e;
          })(s);
        let h = i ? "svg" === i : ie(t),
          u = h ? iy : ig;
        function c(i, s) {
          var c;
          let p,
            m,
            f,
            g = {
              ...(0, n.useContext)(d),
              ...i,
              layoutId: (function ({ layoutId: t }) {
                let e = (0, n.useContext)(r).id;
                return e && void 0 !== t ? e + "-" + t : t;
              })(i),
            },
            { isStatic: y, isValidProp: v } = g,
            x = (function (t) {
              let { initial: e, animate: i } = (function (t, e) {
                if (eb(t)) {
                  let { initial: e, animate: i } = t;
                  return {
                    initial: !1 === e || ex(e) ? e : void 0,
                    animate: ex(i) ? i : void 0,
                  };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, n.useContext)(ir));
              return (0, n.useMemo)(
                () => ({ initial: e, animate: i }),
                [io(e), io(i)]
              );
            })(i),
            w = u(i, y);
          if (!y && "u" > typeof window) {
            (0, n.useContext)(is).strict;
            let e = (function (t) {
              let { drag: e, layout: i } = iw();
              if (!e && !i) return {};
              let s = { ...e, ...i };
              return {
                MeasureLayout:
                  e?.isEnabled(t) || i?.isEnabled(t) ? s.MeasureLayout : void 0,
                ProjectionNode: s.ProjectionNode,
              };
            })(g);
            (p = e.MeasureLayout),
              (x.visualElement = (function (t, e, i, s, r, o) {
                let { visualElement: h } = (0, n.useContext)(ir),
                  u = (0, n.useContext)(is),
                  c = (0, n.useContext)(l),
                  p = (0, n.useContext)(d),
                  m = p.reducedMotion,
                  f = p.skipAnimations,
                  g = (0, n.useRef)(null),
                  y = (0, n.useRef)(!1);
                (s = s || u.renderer),
                  !g.current &&
                    s &&
                    ((g.current = s(t, {
                      visualState: e,
                      parent: h,
                      props: i,
                      presenceContext: c,
                      blockInitialAnimation: !!c && !1 === c.initial,
                      reducedMotionConfig: m,
                      skipAnimations: f,
                      isSVG: o,
                    })),
                    y.current &&
                      g.current &&
                      (g.current.manuallyAnimateOnMount = !0));
                let v = g.current,
                  x = (0, n.useContext)(iS);
                v &&
                  !v.projection &&
                  r &&
                  ("html" === v.type || "svg" === v.type) &&
                  (function (t, e, i, s) {
                    let {
                      layoutId: n,
                      layout: r,
                      drag: o,
                      dragConstraints: a,
                      layoutScroll: l,
                      layoutRoot: h,
                      layoutAnchor: u,
                      layoutCrossfade: d,
                    } = e;
                    (t.projection = new i(
                      t.latestValues,
                      e["data-framer-portal-id"]
                        ? void 0
                        : (function t(e) {
                            if (e)
                              return !1 !== e.options.allowProjection
                                ? e.projection
                                : t(e.parent);
                          })(t.parent)
                    )),
                      t.projection.setOptions({
                        layoutId: n,
                        layout: r,
                        alwaysMeasureLayout: !!o || (a && iP(a)),
                        visualElement: t,
                        animationType: "string" == typeof r ? r : "both",
                        initialPromotionConfig: s,
                        crossfade: d,
                        layoutScroll: l,
                        layoutRoot: h,
                        layoutAnchor: u,
                      });
                  })(g.current, i, r, x);
                let w = (0, n.useRef)(!1);
                (0, n.useInsertionEffect)(() => {
                  v && w.current && v.update(i, c);
                });
                let T = i[ib],
                  b = (0, n.useRef)(
                    !!T &&
                      "u" > typeof window &&
                      !window.MotionHandoffIsComplete?.(T) &&
                      window.MotionHasOptimisedAnimation?.(T)
                  );
                return (
                  a(() => {
                    y.current &&
                      v &&
                      (v.animationState?.animateChanges(),
                      (v.enteringChildren = void 0));
                  }, []),
                  a(() => {
                    (y.current = !0),
                      v &&
                        ((w.current = !0),
                        (window.MotionIsMounted = !0),
                        v.updateFeatures(),
                        v.scheduleRenderMicrotask(),
                        b.current &&
                          v.animationState &&
                          v.animationState.animateChanges());
                  }),
                  (0, n.useEffect)(() => {
                    v &&
                      (!b.current &&
                        v.animationState &&
                        v.animationState.animateChanges(),
                      b.current &&
                        (queueMicrotask(() => {
                          window.MotionHandoffMarkAsComplete?.(T);
                        }),
                        (b.current = !1)),
                      (v.enteringChildren = void 0));
                  }),
                  v
                );
              })(t, w, g, o, e.ProjectionNode, h));
          }
          return (0, ii.jsxs)(ir.Provider, {
            value: x,
            children: [
              p && x.visualElement
                ? (0, ii.jsx)(p, { visualElement: x.visualElement, ...g })
                : null,
              (function (t, e, i, { latestValues: s }, r, o = !1, a, l) {
                let h = (
                    a ?? ie(t)
                      ? function (t, e, i, s) {
                          let r = (0, n.useMemo)(() => {
                            let i = ih();
                            return (
                              e$(i, e, eN(s), t.transformTemplate, t.style),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            il(e, t.style, t), (r.style = { ...e, ...r.style });
                          }
                          return r;
                        }
                      : function (t, e) {
                          let i,
                            s,
                            r = {},
                            o =
                              ((i = t.style || {}),
                              il((s = {}), i, t),
                              Object.assign(
                                s,
                                (function ({ transformTemplate: t }, e) {
                                  return (0, n.useMemo)(() => {
                                    let i = ia();
                                    return (
                                      eB(i, e, t),
                                      Object.assign({}, i.vars, i.style)
                                    );
                                  }, [e]);
                                })(t, e)
                              ),
                              s);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((r.draggable = !1),
                              (o.userSelect =
                                o.WebkitUserSelect =
                                o.WebkitTouchCallout =
                                  "none"),
                              (o.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = o),
                            r
                          );
                        }
                  )(e, s, r, t),
                  u = (function (t, e, i, s) {
                    let n = {};
                    for (let r in t)
                      ("values" !== r || "object" != typeof t.values) &&
                        !ts(t[r]) &&
                        ((r.startsWith("on") ? !id(r) : s?.(r) ?? !id(r)) ||
                          (!0 === i && id(r)) ||
                          (!e && !id(r)) ||
                          (t.draggable && r.startsWith("onDrag"))) &&
                        (n[r] = t[r]);
                    return n;
                  })(e, "string" == typeof t, o, l),
                  d = t !== n.Fragment ? { ...u, ...h, ref: i } : {},
                  { children: c } = e,
                  p = (0, n.useMemo)(() => (ts(c) ? c.get() : c), [c]);
                return (0, n.createElement)(t, { ...d, children: p });
              })(
                t,
                i,
                ((c = x.visualElement),
                (m = (0, n.useRef)(s)),
                (0, n.useInsertionEffect)(() => {
                  m.current = s;
                }),
                (f = (0, n.useRef)(null)),
                (0, n.useCallback)(
                  (t) => {
                    t && w.onMount?.(t), c && (t ? c.mount(t) : c.unmount());
                    let e = m.current;
                    if ("function" == typeof e)
                      if (t) {
                        let i = e(t);
                        "function" == typeof i && (f.current = i);
                      } else
                        f.current ? (f.current(), (f.current = null)) : e(t);
                    else e && (e.current = t);
                  },
                  [c]
                )),
                w,
                y,
                e,
                h,
                v
              ),
            ],
          });
        }
        c.displayName = `motion.${
          "string" == typeof t ? t : `create(${t.displayName ?? t.name ?? ""})`
        }`;
        let p = (0, n.forwardRef)(c);
        return (p[iT] = t), p;
      }
      class iE {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      function iM(t, e, i) {
        return ip(t.getProps(), e, i, t);
      }
      let iV = (t, e) => ("exit" === e ? t.presenceContext?.custom : void 0);
      function iC(t, e) {
        if (t?.inherit && e) {
          let { inherit: i, ...s } = t;
          return { ...e, ...s };
        }
        return t;
      }
      function ik(t, e) {
        let i = t?.[e] ?? t?.default ?? t;
        return i !== t ? iC(i, t) : i;
      }
      function iD(t, e) {
        let i = t.getValue("willChange");
        if (ts(i) && i.add) return i.add(e);
        if (!i && tF.WillChange) {
          let i = new tF.WillChange("auto");
          t.addValue("willChange", i), i.add(e);
        }
      }
      let iR = (...t) => t.reduce((t, e) => (i) => e(t(i)));
      function iL(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function ij(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let iF = (t, e, i) => {
          let s = t * t,
            n = i * (e * e - s) + s;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        iB = [E, A, j];
      function iI(t) {
        let e = iB.find((e) => e.test(t));
        if (!e)
          return (
            ta(
              `'${t}' is not an animatable color. Use the equivalent color code instead.`
            ),
            !1
          );
        let i = e.parse(t);
        return (
          e === j &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: s }) {
              (t /= 360), (i /= 100);
              let n = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let s = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - s;
                (n = iL(a, s, t + 1 / 3)),
                  (r = iL(a, s, t)),
                  (o = iL(a, s, t - 1 / 3));
              } else n = r = o = i;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: s,
              };
            })(i)),
          i
        );
      }
      let iO = (t, e) => {
          let i = iI(t),
            s = iI(e);
          if (!i || !s) return ij(t, e);
          let n = { ...i };
          return (t) => (
            (n.red = iF(i.red, s.red, t)),
            (n.green = iF(i.green, s.green, t)),
            (n.blue = iF(i.blue, s.blue, t)),
            (n.alpha = eq(i.alpha, s.alpha, t)),
            A.transform(n)
          );
        },
        iU = new Set(["none", "hidden"]);
      function i$(t, e) {
        return (i) => eq(t, e, i);
      }
      function iW(t) {
        return "number" == typeof t
          ? i$
          : "string" == typeof t
          ? tc(t)
            ? ij
            : F.test(t)
            ? iO
            : iY
          : Array.isArray(t)
          ? iN
          : "object" == typeof t
          ? F.test(t)
            ? iO
            : iz
          : ij;
      }
      function iN(t, e) {
        let i = [...t],
          s = i.length,
          n = t.map((t, i) => iW(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < s; e++) i[e] = n[e](t);
          return i;
        };
      }
      function iz(t, e) {
        let i = { ...t, ...e },
          s = {};
        for (let n in i)
          void 0 !== t[n] && void 0 !== e[n] && (s[n] = iW(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in s) i[e] = s[e](t);
          return i;
        };
      }
      let iY = (t, e) => {
          let i = z.createTransformer(e),
            s = W(t),
            n = W(e);
          if (
            !(
              s.indexes.var.length === n.indexes.var.length &&
              s.indexes.color.length === n.indexes.color.length &&
              s.indexes.number.length >= n.indexes.number.length
            )
          )
            return (
              ta(
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              ij(t, e)
            );
          if (
            (iU.has(t) && !n.values.length) ||
            (iU.has(e) && !s.values.length)
          )
            return iU.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t);
          return iR(
            iN(
              (function (t, e) {
                let i = [],
                  s = { color: 0, var: 0, number: 0 };
                for (let n = 0; n < e.values.length; n++) {
                  let r = e.types[n],
                    o = t.indexes[r][s[r]],
                    a = t.values[o] ?? 0;
                  (i[n] = a), s[r]++;
                }
                return i;
              })(s, n),
              n.values
            ),
            i
          );
        },
        iX = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
      function iH(t, e, i) {
        if (
          "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
        )
          return eq(t, e, i);
        if ("string" == typeof t && "string" == typeof e) {
          let i = (function (t, e) {
            let i = iX.exec(t);
            if (!i) return;
            let s = iX.exec(e);
            if (!s || i[2] !== s[2]) return;
            let n = i[2],
              r = parseFloat(i[1]),
              o = parseFloat(s[1]);
            return (t) => x(eq(r, o, t)) + n;
          })(t, e);
          if (i) return i;
        }
        return iW(t)(t, e);
      }
      let iK = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: (t = !0) => tU.update(e, t),
          stop: () => t$(e),
          now: () => (tO.isProcessing ? tO.timestamp : et.now()),
        };
      };
      function i_(t, e = 50, i = 2e4, s) {
        let n = 0,
          r = t.next(n);
        for (s?.push(r.value); !r.done && n < i; )
          (n += e), (r = t.next(n)), s?.push(r.value);
        return n >= i ? 1 / 0 : n;
      }
      let iG = 0.01,
        iq = 2,
        iZ = 0.005,
        iJ = 0.5,
        iQ = (t) => (t < 0 ? 1 / Math.max(1 + t, 0.05) : Math.max(1 - t, 0.05));
      function i0(t, e) {
        if (!(t > 1)) return 1;
        let i = Math.sqrt(t * t - 1),
          s = t - i,
          n = t + i,
          r = 2 * i * Math.exp(-e) * (1 + e);
        return (
          i2(
            (t) => n * Math.exp(-s * t) - s * Math.exp(-n * t) - r,
            (t) => Math.exp(-n * t) - Math.exp(-s * t),
            e
          ) / e
        );
      }
      function i1(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      function i2(t, e, i) {
        let s = i;
        for (let i = 1; i < 12; i++) s -= t(s) / e(s);
        return s;
      }
      let i3 = (t, e) => (e ? t >= 0 : t > 0) && t < 1 / 0;
      function i5(t, e) {
        if (i3(t, e)) return t;
      }
      function i4(t = 0.3, e = 0.3) {
        let i,
          s,
          n,
          r =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          o = r.keyframes[0],
          a = r.keyframes[r.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: h,
            damping: u,
            mass: d,
            duration: c,
            isResolvedFromDuration: p,
            isTimeDefined: m,
          } = (function (t) {
            let e = i5(t.stiffness),
              i = i5(t.damping, !0),
              s = i5(t.mass),
              n = {
                ...t,
                stiffness: e ?? 100,
                damping: i ?? 10,
                mass: s ?? 1,
                isResolvedFromDuration: !1,
                isTimeDefined:
                  (e ?? i ?? s) === void 0 &&
                  (void 0 !== t.duration || void 0 !== t.bounce),
              };
            if (n.isTimeDefined) {
              if (t.visualDuration) {
                let e = iQ(t.bounce || 0),
                  i =
                    ((2 * Math.PI) / (1.2 * t.visualDuration)) *
                    i0(e, (2 * Math.PI) / 1.2);
                (n.stiffness = i * i),
                  (n.damping = 2 * e * Math.sqrt(n.stiffness));
              } else
                Object.assign(
                  n,
                  (function ({ duration: t = 800, bounce: e = 0.3 }) {
                    let i, s;
                    ta(tZ(10));
                    let n = iQ(e);
                    (t = f(0.01, 10, t / 1e3)),
                      n < 1
                        ? ((i = (e) => {
                            let i = e * n,
                              s = i * t;
                            return 0.001 - (i / i1(e, n)) * Math.exp(-s);
                          }),
                          (s = (e) => {
                            let s = e * n * t,
                              r = n * n * e * e * t,
                              o = Math.exp(-s),
                              a = i1(e * e, n);
                            return (
                              (-((-i(e) + 0.001 > 0 ? -1 : 1) * r) * o) / a
                            );
                          }))
                        : ((i = (e) => -0.001 + Math.exp(-e * t) * (e * t + 1)),
                          (s = (e) => -(t * t * e * Math.exp(-e * t))));
                    let r = i2(i, s, 5 / t),
                      o = r * i0(n, r * t),
                      a = o * o;
                    return {
                      stiffness: a,
                      damping: 2 * n * Math.sqrt(a),
                      duration: tZ(t),
                    };
                  })(n)
                ),
                  (n.isResolvedFromDuration = !0);
              (i3(n.stiffness) && i3(n.damping, !0)) ||
                ((n.stiffness = 100), (n.damping = 10));
            }
            return n;
          })({ ...r }),
          g = (t) => (m ? 0 : -(t / 1e3)),
          y = u / (2 * Math.sqrt(h * d)),
          v = Math.sqrt(h / d) / 1e3,
          x = y * v,
          w = {
            target: a,
            delta: a - o,
            velocity: g(r.velocity || 0) || 0,
            restSpeed: 0,
            restDelta: 0,
          },
          T = () => {
            let t = 5 > Math.abs(w.delta);
            (w.restSpeed = r.restSpeed || (t ? iG : iq)),
              (w.restDelta = r.restDelta || (t ? iZ : iJ));
          };
        if ((T(), y < 1)) {
          let t = i1(v, y),
            e = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
          n = () => {
            (e.A = (w.velocity + x * w.delta) / t),
              (e.sinC = x * e.A + w.delta * t),
              (e.cosC = x * w.delta - e.A * t);
          };
          let r = (i) => {
            i !== e.t &&
              ((e.t = i),
              (e.env = Math.exp(-x * i)),
              (e.sin = Math.sin(t * i)),
              (e.cos = Math.cos(t * i)));
          };
          (i = (t) => (
            r(t), w.target - e.env * (e.A * e.sin + w.delta * e.cos)
          )),
            (s = (t) => (r(t), e.env * (e.sinC * e.sin + e.cosC * e.cos)));
        } else if (1 === y) {
          i = (t) =>
            w.target -
            Math.exp(-v * t) * (w.delta + (w.velocity + v * w.delta) * t);
          let t = { C: 0 };
          (n = () => {
            t.C = w.velocity + v * w.delta;
          }),
            (s = (e) => Math.exp(-v * e) * (v * t.C * e - w.velocity));
        } else {
          let t = v * Math.sqrt(y * y - 1),
            e = x - t,
            r = x + t,
            o = m ? 1 / 0 : 300 / t,
            a = (t, e) => Math.exp(e > o ? -t * o - x * (e - o) : -t * e),
            l = { S: 0, F: 0 };
          (n = () => {
            let e = (w.velocity + x * w.delta) / t;
            (l.S = (w.delta + e) / 2), (l.F = (w.delta - e) / 2);
          }),
            (i = (t) => w.target - l.S * a(e, t) - l.F * a(r, t)),
            (s = (t) => e * l.S * a(e, t) + r * l.F * a(r, t));
        }
        n();
        let b = (p && c) || null,
          S = {
            calculatedDuration: b,
            retarget: (t, e) => {
              (w.target = t[t.length - 1]),
                (w.delta = w.target - t[0]),
                (w.velocity = g(e)),
                (r.restSpeed && r.restDelta) || T(),
                (S.calculatedDuration = b),
                (l.done = !1),
                n();
            },
            velocity: (t) => tZ(s(t)),
            next: (t) => {
              let e = i(t);
              return (
                p
                  ? (l.done = t >= c)
                  : (l.done =
                      Math.abs(tZ(s(t))) <= w.restSpeed &&
                      Math.abs(w.target - e) <= w.restDelta),
                (l.value = l.done ? w.target : e),
                l
              );
            },
            toString: () => {
              let t = Math.min(i_(S), 2e4),
                e = er((e) => S.next(t * e).value, t, 30);
              return t + "ms " + e;
            },
            toTransition: () => {},
          };
        return S;
      }
      function i9({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: s = 325,
        bounceDamping: n = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let d,
          c,
          p = t[0],
          m = { done: !1, value: p },
          f = i * e,
          g = p + f,
          y = void 0 === o ? g : o(g);
        y !== g && (f = y - p);
        let v = (t) => -f * Math.exp(-t / s),
          x = (t) => {
            let e = v(t);
            (m.done = Math.abs(e) <= h), (m.value = m.done ? y : y + e);
          },
          w = (t) => {
            let e;
            if ((e = m.value) < a || e > l) {
              var i;
              (d = t),
                (c = i4({
                  keyframes: [
                    m.value,
                    ((i = m.value),
                    void 0 === a
                      ? l
                      : void 0 === l || Math.abs(a - i) < Math.abs(l - i)
                      ? a
                      : l),
                  ],
                  velocity: (-v(t) / s) * 1e3,
                  damping: n,
                  stiffness: r,
                  restDelta: h,
                  restSpeed: u,
                }));
            }
          };
        return (
          w(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), x(t), w(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || x(t), m);
            },
          }
        );
      }
      i4.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let { keyframes: s, velocity: n } = t,
            r = s && s[s.length - 1] - s[0],
            o = i({
              ...t,
              velocity: n && r ? (n * e) / r : n,
              keyframes: [0, e],
            }),
            a = Math.min(i_(o), 2e4);
          return {
            type: "keyframes",
            ease: (t) => o.next(a * t).value / e,
            duration: a / 1e3,
          };
        })(t, 100, i4);
        return (
          (t.ease = e.ease),
          (t.duration = tZ(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
      let i6 = (t, e, i) => t * (3 * (1 - t) * ((1 - t) * e + t * i) + t * t);
      function i7(t, e, i, s) {
        return t === e && i === s
          ? tj
          : (n) => {
              let r = 0,
                o = 1,
                a = n;
              for (let e = 0; ; e++) {
                (a >= r && a <= o) || (a = (r + o) / 2);
                let s = i6(a, t, i) - n;
                if (s * s < 1e-28 || 40 === e) break;
                s > 0 ? (o = a) : (r = a),
                  (a -= (1e-7 * s) / (i6(a + 1e-7, t, i) - n - s));
              }
              return i6(a, e, s);
            };
      }
      let i8 = i7(0.42, 0, 1, 1),
        st = i7(0, 0, 0.58, 1),
        se = i7(0.42, 0, 0.58, 1),
        si = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        ss = (t) => (e) => 1 - t(1 - e),
        sn = i7(0.33, 1.53, 0.69, 0.99),
        sr = ss(sn),
        so = si(sr),
        sa = (t) =>
          t >= 1
            ? 1
            : (t *= 2) < 1
            ? 0.5 * sr(t)
            : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        sl = (t) => 1 - Math.sin(Math.acos(t)),
        sh = ss(sl),
        su = si(sl),
        sd = {
          linear: tj,
          easeIn: i8,
          easeInOut: se,
          easeOut: st,
          circIn: sl,
          circInOut: su,
          circOut: sh,
          backIn: sr,
          backInOut: so,
          backOut: sn,
          anticipate: sa,
        },
        sc = (t) => {
          if (es(t)) {
            tl(t.length);
            let [e, i, s, n] = t;
            return i7(e, i, s, n);
          }
          return "string" == typeof t
            ? (tl(sd[t], `Invalid easing type '${t}'`), sd[t])
            : t;
        },
        sp = (t, e, i) => {
          let s = e - t;
          return s ? (i - t) / s : 1;
        };
      function sm(t) {
        let e = [0];
        return (
          !(function (t, e) {
            let i = t[t.length - 1];
            for (let s = 1; s <= e; s++) {
              let n = sp(0, e, s);
              t.push(eq(i, 1, n));
            }
          })(e, t.length - 1),
          e
        );
      }
      function sf({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: s = "easeInOut",
      }) {
        var n;
        let r =
            Array.isArray(s) && "number" != typeof s[0]
              ? s.map(sc)
              : sc(s) || se,
          o = { done: !1, value: e[0] };
        if (
          2 === e.length &&
          !Array.isArray(r) &&
          (!i || 2 !== i.length || (0 === i[0] && 1 === i[1]))
        ) {
          let [i, s] = e,
            n = i === s ? void 0 : (tF.mix || iH)(i, s);
          return {
            calculatedDuration: t,
            next: (e) => (
              (o.value = n ? n(r(t > 0 ? f(0, 1, e / t) : 1)) : s),
              (o.done = e >= t),
              o
            ),
          };
        }
        let a = (function (t, e, { clamp: i = !0, ease: s, mixer: n } = {}) {
          let r = t.length;
          if ((tl(e.length), 1 === r)) return () => e[0];
          if (2 === r && e[0] === e[1]) return () => e[1];
          let o = t[0] === t[1];
          t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
          let a = (function (t, e, i) {
              let s = [],
                n = i || tF.mix || iH,
                r = t.length - 1;
              for (let i = 0; i < r; i++) {
                let r = n(t[i], t[i + 1]);
                e && (r = iR(Array.isArray(e) ? e[i] || tj : e, r)), s.push(r);
              }
              return s;
            })(e, s, n),
            l = a.length,
            h = (i) => {
              if (o && i < t[0]) return e[0];
              let s = 0;
              if (l > 1) for (; s < t.length - 2 && !(i < t[s + 1]); s++);
              let n = sp(t[s], t[s + 1], i);
              return a[s](n);
            };
          return i ? (e) => h(f(t[0], t[r - 1], e)) : h;
        })(
          ((n = i && i.length === e.length ? i : sm(e)), n.map((e) => e * t)),
          e,
          {
            ease: Array.isArray(r)
              ? r
              : e.map(() => r || se).splice(0, e.length - 1),
          }
        );
        return {
          calculatedDuration: t,
          next: (e) => ((o.value = a(e)), (o.done = e >= t), o),
        };
      }
      let sg = { decay: i9, inertia: i9, tween: sf, keyframes: sf, spring: i4 };
      function sy(t) {
        "string" == typeof t.type && (t.type = sg[t.type]);
      }
      let sv = (t, e) => (e - t > 40 && !tF.useManualTiming ? e : t),
        sx = (t) => t / 100,
        sw = (t) => Math.round(1e4 * t) / 1e4;
      class sT extends t7 {
        constructor(t) {
          super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.delayState = { done: !1, value: void 0 }),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              t && t.updatedAt !== et.now() && this.tick(et.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.());
            }),
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause(),
            ei(this, this.options);
        }
        initAnimation() {
          let { options: t } = this;
          sy(t);
          let {
              type: e = sf,
              repeat: i = 0,
              repeatDelay: s = 0,
              repeatType: n,
              velocity: r = 0,
            } = t,
            { keyframes: o } = t,
            a = e || sf;
          a !== sf &&
            "number" != typeof o[0] &&
            ((this.mixKeyframes = iR(sx, iH(o[0], o[1]))), (o = [0, 100]));
          let l = a(o === t.keyframes ? t : { ...t, keyframes: o });
          "mirror" === n &&
            (this.mirroredGenerator = a({
              ...t,
              keyframes: [...o].reverse(),
              velocity: -r,
            })),
            null === l.calculatedDuration && (l.calculatedDuration = i_(l));
          let { calculatedDuration: h } = l;
          (this.calculatedDuration = h),
            (this.resolvedDuration = h + s),
            (this.totalDuration = this.resolvedDuration * (i + 1) - s),
            (this.generator = l);
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let { generator: i, totalDuration: s, calculatedDuration: n } = this;
          if (null === this.startTime) return i.next(0);
          let {
            delay: r = 0,
            keyframes: o,
            type: a,
            onUpdate: l,
            finalKeyframe: h,
          } = this.options;
          this.startTime === this.pendingStartTime &&
            (this.startTime = sv(this.startTime, t)),
            (this.pendingStartTime = void 0),
            this.speed > 0
              ? (this.startTime = Math.min(this.startTime, t))
              : this.speed < 0 &&
                (this.startTime = Math.min(t - s / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t);
          let u = this.currentTime - r * (this.playbackSpeed >= 0 ? 1 : -1),
            d = this.playbackSpeed >= 0 ? u < 0 : u > s;
          (this.currentTime = Math.max(u, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = s);
          let c = this.generate(this.currentTime, d),
            { done: p } = c;
          d ||
            null === n ||
            (p =
              this.playbackSpeed >= 0
                ? this.currentTime >= s
                : this.currentTime <= 0);
          let m =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && p));
          return (
            m && a !== i9 && (c.value = t6(o, this.options, h, this.speed)),
            l && l(c.value),
            m && this.finish(),
            c
          );
        }
        at(t) {
          return this.holdTime ?? sw((t - this.startTime) * this.playbackSpeed);
        }
        sampleAt(t, e) {
          let { options: i, totalDuration: s } = this,
            n = this.at(t) - (i.delay || 0);
          return n >= s && i.type !== i9
            ? t6(i.keyframes, i, e ? void 0 : i.finalKeyframe)
            : this.generate(Math.max(n, 0), n < 0).value;
        }
        generate(t, e) {
          let i,
            {
              generator: s,
              totalDuration: n,
              mixKeyframes: r,
              mirroredGenerator: o,
              resolvedDuration: a,
            } = this,
            {
              keyframes: l,
              repeat: h,
              repeatType: u,
              repeatDelay: d,
            } = this.options,
            c = t,
            p = s;
          if (h) {
            let e = Math.min(t, n) / a,
              i = Math.floor(e),
              s = e % 1;
            !s && e >= 1 && (s = 1),
              1 === s && i--,
              (i = Math.min(i, h + 1)) % 2 &&
                ("reverse" === u
                  ? ((s = 1 - s), d && (s -= d / a))
                  : "mirror" === u && (p = o)),
              (c = f(0, 1, s) * a);
          }
          return (
            e
              ? ((this.delayState.value = l[0]), (i = this.delayState))
              : (i = p.next(c)),
            r && !e && (i.value = r(i.value)),
            i
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return this.calculatedDuration / 1e3;
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + t / 1e3;
        }
        get time() {
          return this.currentTime / 1e3;
        }
        set time(t) {
          (t = tZ(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver
              ? this.driver.start(!1)
              : ((this.startTime = 0),
                (this.state = "paused"),
                (this.holdTime = t),
                this.tick(t));
        }
        getGeneratorVelocity() {
          return (function (t, e, i = 0) {
            var s, n;
            let r;
            return e <= 0
              ? i
              : t.velocity
              ? t.velocity(e)
              : ((s = (e) => t.next(e).value),
                (n = t.next(e).value),
                ep(n - s((r = Math.max(e - 5, 0))), e - r));
          })(this.generator, this.currentTime, this.options.velocity);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          let e = this.playbackSpeed !== t;
          e && this.driver && this.updateTime(et.now()),
            (this.playbackSpeed = t),
            e && this.driver && (this.time = this.currentTime / 1e3);
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = iK, startTime: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.();
          let i = this.driver.now();
          "finished" === this.state
            ? (this.updateFinished(), (this.startTime = i))
            : null !== this.holdTime
            ? (this.startTime = i - this.holdTime / (this.playbackSpeed || 1))
            : this.startTime ||
              (this.startTime = e ?? (this.pendingStartTime = i)),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          (this.state = "paused"),
            this.updateTime(et.now()),
            (this.holdTime = this.currentTime);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.();
        }
        cancel() {
          (this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null);
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
      let sb = { anticipate: sa, backInOut: so, circInOut: su };
      class sS extends eh {
        constructor(t) {
          "string" == typeof t.ease && t.ease in sb && (t.ease = sb[t.ease]),
            sy(t),
            super(t),
            void 0 !== t.startTime &&
              !1 !== t.autoplay &&
              (this.startTime = t.startTime),
            (this.options = t);
        }
        elapsed() {
          return "running" === this.state
            ? (et.now() - this.startTime) * this.speed
            : 1e3 * this.time;
        }
        sample(t) {
          if (!this.sampler) {
            let {
              motionValue: t,
              onUpdate: e,
              onComplete: i,
              onPlay: s,
              onStop: n,
              element: r,
              ...o
            } = this.options;
            (this.sampler = new sT({ ...o, autoplay: !1 })),
              this.sampler.stop();
          }
          return this.sampler.sample(Math.max(0, t)).value;
        }
        liveValue() {
          let { state: t } = this;
          if ("running" === t || "paused" === t)
            return this.sample(this.elapsed());
        }
        updateMotionValue(t) {
          let { motionValue: e, element: i, name: s } = this.options;
          if (!e) return;
          if (void 0 !== t) return void e.set(t);
          let { speed: n } = this,
            r = this.elapsed(),
            o = "running" === this.state && n ? f(0, 10, r) : 0,
            a = this.sample(r);
          i && s && t1(i, s, a),
            e.setWithVelocity(
              this.sample(r - o * Math.sign(n)),
              a,
              o / Math.abs(n || 1)
            );
        }
      }
      let sP = (t, e) =>
        "zIndex" !== e &&
        !!(
          "number" == typeof t ||
          Array.isArray(t) ||
          ("string" == typeof t &&
            (z.test(t) || "0" === t) &&
            !t.startsWith("url("))
        );
      function sA(t) {
        (t.duration = 0), (t.type = "keyframes");
      }
      let sE = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        sM = new Set([
          "color",
          "backgroundColor",
          "outlineColor",
          "fill",
          "stroke",
          "borderColor",
          "borderTopColor",
          "borderRightColor",
          "borderBottomColor",
          "borderLeftColor",
        ]),
        sV = t2(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
        sC = (t, e) => t - e,
        sk = (t, e, i) => {
          let s = [];
          for (let n = 0; n <= i; n++) s.push(eq(t, e, n / i));
          return s;
        },
        sD = (t, e) =>
          t.latestValues ? t.latestValues[e] : t.getValue(e)?.get();
      class sR extends sT {
        constructor(t) {
          let e = t.motionValue.owner.current,
            { driver: i = iK } = t,
            s = (function (t) {
              let e = t.motionValue.owner,
                { onUpdate: i, transformTemplate: s } = e.getProps();
              return (
                !t.isHandoff &&
                !i &&
                !t.hasOnUpdate &&
                !s &&
                "inertia" !== t.type &&
                "none" === (sD(e, "transform") || "none") &&
                !sD(e, "pathRotation") &&
                !e.projection?.isProjecting()
              );
            })(t);
          (t.driver = (t) => {
            let s = i(t);
            return {
              js: s,
              now: s.now,
              start: (t = !0) => {
                let i = ed.get(e);
                !i || i.isJS ? s.start(t) : i.schedule(!1, !t);
              },
              stop: () => {
                s.stop();
                let t = ed.get(e);
                t?.schedule(!t.isFinishing);
              },
            };
          }),
            super(t),
            (this.canAccelerate = s);
          let { stop: n } = this;
          this.stop = () => {
            this.isAccelerated() && this.sync(), n();
          };
        }
        get group() {
          let t;
          return (t = this.options.motionValue.owner.current), ed.get(t);
        }
        get js() {
          return this.driver?.js;
        }
        get name() {
          return this.options.name;
        }
        timing() {
          let { startTime: t, speed: e, totalDuration: i } = this,
            { delay: s = 0, repeatType: n } = this.options;
          return null !== this.holdTime
            ? [1 / 0, 0]
            : 1 / 0 === i
            ? [
                t + s / e,
                (this.resolvedDuration * ("loop" === n ? 1 : 2)) / e || 1,
              ]
            : [t + (s + i) / e, 0];
        }
        isAccelerated() {
          let { group: t, state: e } = this;
          return (
            t?.tracks.has(this) &&
            !t.isJS &&
            this.canAccelerate &&
            ("running" === e || "paused" === e)
          );
        }
        liveValue() {
          return this.isAccelerated() ? this.sampleAt(et.now()) : void 0;
        }
        tween() {
          let {
              keyframes: t,
              type: e,
              ease: i,
              times: s,
              repeat: n,
              delay: r = 0,
            } = this.options,
            o = es(i)
              ? eo(i)
              : /^(linear|ease(In|Out|InOut))$/.test(i) && ea[i];
          if (
            o &&
            !n &&
            !s &&
            2 === t.length &&
            e === sf &&
            null === this.holdTime
          ) {
            let t = this.startTime + r / this.speed;
            return [t, t + this.resolvedDuration / this.speed, o];
          }
        }
        boundaries(t, e) {
          let {
              startTime: i,
              speed: s,
              resolvedDuration: n,
              options: r,
            } = this,
            {
              delay: o = 0,
              repeat: a = 0,
              repeatDelay: l = 0,
              repeatType: h,
              times: u,
              keyframes: d,
              type: c,
            } = r,
            p = (c || sf) === sf ? u || sm(d) : [0, 1],
            m = i + o / s,
            f = [];
          if (null !== this.holdTime || !(n > 0)) return f;
          for (
            let i = Math.max(0, Math.floor(((t - m) * s) / n));
            i <= a;
            i++
          ) {
            let r = m + (i * n) / s;
            if (r > e) break;
            for (let o of p) {
              let a =
                r + ((i % 2 && h && "loop" !== h ? 1 - o : o) * (n - l)) / s;
              a > t && a < e && f.push(a);
            }
          }
          return f;
        }
        numberAt(t) {
          return parseFloat(this.sampleAt(t, !0));
        }
        sync() {
          let t = et.now();
          this.options.motionValue.setWithVelocity(
            this.sampleAt(t - 10, !0),
            this.sampleAt(t, !0),
            10
          );
        }
        play() {
          var t;
          let e, i, s, n, r, o, a, l, h, u, d, c, m, f, g, y, v, x, w, T;
          this.isStopped ||
            ((
              this.group ||
              ((e = (t = this.options.motionValue.owner).current),
              (i = new Set()),
              (s = new Map()),
              (n = {}),
              (r = []),
              (o = new Map()),
              (a = []),
              (l = !1),
              (h = !1),
              (u = !1),
              (d = -1 / 0),
              (c = (t) => {
                for (let e of i) if (e.name === t) return !0;
              }),
              (m = (e, i) => {
                let o = {};
                for (let a of void 0 === e ? p : r) {
                  let r = s.get(a),
                    l =
                      void 0 === e
                        ? sD(t, a)
                        : r
                        ? r.sampleAt(i > e && !r.timing()[1] ? i : e)
                        : n[a];
                  void 0 !== l && (o[a] = l);
                }
                return o;
              }),
              (f = (t = m()) => {
                e.style.transform = eF(t, {});
              }),
              (g = (t = !0) => {
                t && f(), a.forEach(({ animation: t }) => t.cancel()), (a = []);
              }),
              (y = (t, e, i = 1 / 0) => {
                let s = { animation: t, offset: e, end: i };
                (t.startTime = et.now() + e),
                  i < 1 / 0 &&
                    (t.onfinish = () => {
                      (s.isDone = !0),
                        a.some((t) => 1 / 0 === t.end) &&
                          (t.cancel(), (a = a.filter((t) => t !== s))),
                        T.schedule(!1);
                    }),
                  (t.oncancel = () => a.includes(s) && T.demote()),
                  a.push(s);
              }),
              (v = (t, e, i) => {
                let s = (e, i) => Math.abs(t(i) - t(e)),
                  n = s(e, i);
                for (; i - e > 0.01; ) {
                  let t = (e + i) / 2;
                  s(e, t) > s(t, i) ? (i = t) : (e = t);
                }
                return s(e, i) > n / 2 ? [e, i] : [];
              }),
              (x = (t, i, s, n = { fill: "both" }, r, o) => {
                let a = t.flatMap((t) => t.boundaries(i, s)),
                  l =
                    o ||
                    ((t, e, i, s) => {
                      let n,
                        r,
                        o = Math.min(200, Math.max(2, Math.ceil((i - e) / 10)));
                      if (4 * s.length > o) return;
                      let a = sk(e, i, o).concat(s).sort(sC);
                      for (let e of t) {
                        let t = a.map((t) => e.numberAt(t)),
                          [i] = t,
                          s = t[t.length - 1] - i,
                          o = t.map((t) => (s ? (t - i) / s : t - i));
                        if (s)
                          if (n) {
                            if (
                              o.some((t, e) => !(0.001 >= Math.abs(t - n[e])))
                            )
                              return;
                          } else (n = o), (r = (t) => (e.numberAt(t) - i) / s);
                        else if (o.some((t) => !(0.001 >= Math.abs(t)))) return;
                      }
                      if (
                        !n ||
                        n.every((t, s) => 0.001 >= Math.abs(t - sp(e, i, a[s])))
                      )
                        return "linear";
                      let l = [],
                        h = (t, s = r(t)) =>
                          l.push(sw(s) + " " + sw(100 * sp(e, i, t)) + "%");
                      return (
                        n.forEach((t, e) => {
                          e &&
                            Math.abs(t - n[e - 1]) > 0.2 &&
                            v(r, a[e - 1], a[e]).forEach((t) => h(t)),
                            h(a[e], t);
                        }),
                        "linear(" + l + ")"
                      );
                    })(t, i, s, a),
                  h = l
                    ? [i, s]
                    : ((t, e, i, s) => {
                        let n = [e],
                          r = (e, i, s) => {
                            if (
                              i - e < 1 ||
                              t.every(
                                (t) =>
                                  !(
                                    Math.abs(
                                      t.numberAt((e + i) / 2) -
                                        (t.numberAt(e) + t.numberAt(i)) / 2
                                    ) >
                                    (t.name.startsWith("scale") ? 0.001 : 0.1)
                                  )
                              )
                            )
                              n.push(i);
                            else if (s < 4)
                              r(e, (e + i) / 2, s + 1),
                                r((e + i) / 2, i, s + 1);
                            else {
                              for (let s of t)
                                n.push(...v((t) => s.numberAt(t), e, i));
                              n.push(i);
                            }
                          },
                          o = sk(e, i, Math.ceil((i - e) / 100));
                        for (let t of s) o.push(t, Math.min(t + 0.01, i));
                        let a = e;
                        for (let t of o.sort(sC)) t > a && r(a, t, 0), (a = t);
                        return n.sort(sC);
                      })(t, i, s, a),
                  u = h.map((t) =>
                    ((t, e) => {
                      let i = "",
                        s = m(t, e);
                      for (let t in s)
                        i += (eL[t] || t) + "(" + eR(s[t], q[t]) + ") ";
                      return i || "none";
                    })(t, r)
                  ),
                  d = { transform: u };
                return (
                  l || (d.offset = h.map((t) => sp(i, s, t))),
                  u.every((t) => t === u[0]) && (f(m(i, r)), (d = null)),
                  e.animate(d, { ...n, duration: s - i, easing: l || "linear" })
                );
              }),
              (w = () => {
                let c = et.now();
                if (
                  (T.isJS ||
                    ((T.isFinishing = !0),
                    i.forEach((e) => {
                      let [i, s] = e.timing();
                      "running" === e.state &&
                        e.speed > 0 &&
                        !s &&
                        i <= c + 1 &&
                        (e.complete(),
                        (n[e.name] = sD(t, e.name)),
                        o.has(e) || (l = !0));
                    }),
                    (T.isFinishing = !1)),
                  (h = !1),
                  i.forEach(({ state: t }, e) => {
                    ("idle" === t || "finished" === t) && i.delete(e);
                  }),
                  !i.size)
                ) {
                  ed.delete(e), T.isJS || g();
                  return;
                }
                for (let t of i) if (!t.canAccelerate) return T.demote(!0);
                T.isJS &&
                  ((T.isJS = !1), (l = !0), i.forEach((t) => t.js?.stop()));
                let m = l,
                  f = u;
                if (
                  ((l = u = !1),
                  m ||
                    !((t) => {
                      let e,
                        s = 0;
                      for (let n of i) {
                        let i = o.get(n);
                        if (!i) return !1;
                        let [r, a, l] = i,
                          h = n.at(t),
                          u = 1 / 0 === n.timing()[0];
                        if (l) {
                          if (u && h === r) continue;
                          return !1;
                        }
                        let d = (h - r) / a,
                          c = u ? 0 : n.speed / a;
                        if (void 0 === e) (e = d), (s = c);
                        else if (Math.abs(d - e) > 1 || c !== s) return !1;
                      }
                      if (void 0 === e) return !0;
                      if (!a.length) return !1;
                      for (let { offset: t, end: i, isDone: s } of a) {
                        let n = e - t;
                        if (i < 1 / 0 && (s ? n < i - 1 : n < 0 || n >= i))
                          return !1;
                      }
                      for (let { animation: i, offset: n, isDone: r } of a) {
                        if (r) continue;
                        let o = e - n;
                        s
                          ? ((i.playbackRate = s), (i.startTime = t - o / s))
                          : (i.pause(), (i.currentTime = o));
                      }
                      return !0;
                    })(c))
                ) {
                  if (f) {
                    if (c - d < 100) return T.demote();
                    d = c;
                  }
                  if (
                    !((l) => {
                      let h = l,
                        u = 0,
                        d = 0,
                        c = [],
                        m = [],
                        f = new Set();
                      for (let t of (s.clear(), (o = new Map()), i)) {
                        s.set(t.name, t);
                        let [e, i] = t.timing(),
                          n = 1 / 0 === e;
                        if ((o.set(t, [t.at(l), t.speed, n]), n)) {
                          t.sync();
                          continue;
                        }
                        if (t.speed < 0) return;
                        if (i) {
                          if (u) {
                            let t = (e - d) / i;
                            if (
                              Math.abs(i - u) > 1 ||
                              Math.abs(t - Math.round(t)) * u > 1
                            )
                              return;
                          } else (u = i), (d = e);
                          m.push(t);
                        } else f.add(e);
                        c.push(t), (h = Math.max(h, e));
                      }
                      (n = {}),
                        (r = p.filter((e) => {
                          if (s.has(e)) return !0;
                          let i = (n[e] = sD(t, e));
                          return (
                            void 0 !== i &&
                            parseFloat(i) !== +!!e.startsWith("scale")
                          );
                        })),
                        g(!1);
                      let v =
                        !u &&
                        ((t) => {
                          let e;
                          for (let i of t) {
                            let t = i.tween();
                            if (
                              !t ||
                              e?.some((e, i) =>
                                i < 2 ? Math.abs(t[i] - e) > 1 : t[i] !== e
                              )
                            )
                              return;
                            e = t;
                          }
                          return e;
                        })(c);
                      try {
                        if (v && v[1] > l) {
                          let [t, e, i] = v;
                          y(x(c, t, e, void 0, void 0, i), t - l, e - t);
                        } else
                          h > l &&
                            (y(x(c, l, h), 0, h - l),
                            f.forEach(
                              (t) =>
                                t < h - 1 &&
                                y(
                                  e.animate(null, { duration: t - l }),
                                  0,
                                  t - l
                                )
                            ));
                        if (u) {
                          let t = d + Math.floor((h - d) / u) * u;
                          y(
                            x(
                              m,
                              t,
                              t + u,
                              {
                                iterations: 1 / 0,
                                iterationStart: (h - t) / u,
                                fill: "forwards",
                              },
                              h
                            ),
                            h - l
                          );
                        }
                      } catch {
                        return;
                      }
                      return a.length || g(), !0;
                    })(c)
                  )
                    return T.demote();
                }
              }),
              (T = {
                tracks: i,
                isJS: !1,
                isFinishing: !1,
                schedule(t, e) {
                  l || (l = t),
                    u || (u = !!e),
                    h ||
                      ((h = !0),
                      tO.isProcessing
                        ? tU.render(w, !1, !0)
                        : queueMicrotask(w));
                },
                check() {
                  if (!T.isJS) {
                    for (let e in n)
                      if (sD(t, e) !== n[e] && !c(e)) return T.schedule(!0, !0);
                  }
                },
                demote(t) {
                  T.isJS ||
                    (i.forEach((e) => {
                      e.isAccelerated() && e.sync(),
                        t || (e.canAccelerate = !1);
                    }),
                    (T.isJS = !0),
                    (o = new Map()),
                    g(),
                    i.forEach((t) => "running" === t.state && t.js?.start()));
                },
              }),
              ed.set(e, T),
              T)
            ).tracks.add(this),
            super.play());
        }
        pause() {
          super.pause(),
            this.isAccelerated() && (this.sync(), this.group.schedule(!1));
        }
        complete() {
          super.complete();
          let { group: t } = this;
          t && !t.isJS && this.canAccelerate && this.tick(et.now());
        }
        get time() {
          return this.isAccelerated()
            ? f(
                0,
                this.totalDuration,
                this.at(et.now()) - (this.options.delay || 0)
              ) / 1e3
            : super.time;
        }
        set time(t) {
          super.time = t;
        }
        attachTimeline(t) {
          return (
            (this.canAccelerate = !1),
            this.group?.demote(!0),
            super.attachTimeline(t)
          );
        }
      }
      class sL extends t7 {
        constructor(t) {
          super(),
            (this.stop = () => {
              this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel();
            }),
            (this.createdAt = et.now());
          let { keyframes: e, name: i, motionValue: s, element: n } = t;
          t.autoplay ?? (t.autoplay = !0),
            t.delay ?? (t.delay = 0),
            t.type ?? (t.type = "keyframes"),
            t.repeat ?? (t.repeat = 0),
            t.repeatDelay ?? (t.repeatDelay = 0),
            t.repeatType ?? (t.repeatType = "loop");
          let r = n?.KeyframeResolver || t_;
          (this.keyframeResolver = new r(
            e,
            (e, i, s) => this.onKeyframesResolved(e, i, t, !s),
            i,
            s,
            n
          )),
            this.keyframeResolver?.scheduleResolve();
        }
        onKeyframesResolved(t, e, i, s) {
          let n;
          this.keyframeResolver = void 0;
          let {
            name: r,
            type: o,
            velocity: a,
            delay: l,
            isHandoff: h,
            onUpdate: u,
          } = i;
          this.resolvedAt = et.now();
          let d = !0;
          !(function (t, e, i, s) {
            let n = t[0];
            if (null === n) return !1;
            if ("display" === e || "visibility" === e) return !0;
            let r = t[t.length - 1],
              o = sP(n, e),
              a = sP(r, e);
            return o && a
              ? (function (t) {
                  let e = t[0];
                  if (1 === t.length) return !0;
                  for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
                })(t) ||
                  (("spring" === i || el(i)) && s)
              : (o !== a &&
                  ta(
                    `You are trying to animate ${e} from "${n}" to "${r}". "${
                      o ? r : n
                    }" is not an animatable value.`
                  ),
                !1);
          })(t, r, o, a) &&
            ((d = !1),
            (tF.instantAnimations || !l) && u?.(t6(t, i, e)),
            (t[0] = t[t.length - 1]),
            sA(i),
            (i.repeat = 0));
          let { onComplete: c } = i;
          (i.finalKeyframe = e),
            (i.keyframes = t),
            (i.onComplete = () => {
              c?.(), this.notifyFinished();
            });
          let m =
              d &&
              !h &&
              (function (t) {
                let {
                  motionValue: e,
                  name: i,
                  repeatDelay: s,
                  repeatType: n,
                  damping: r,
                  type: o,
                  keyframes: a,
                } = t;
                if (!i || !(eu.has(i) || sM.has(i))) return !1;
                let l = e?.owner?.current;
                if (!(l instanceof HTMLElement) && !(l instanceof SVGElement))
                  return !1;
                let { onUpdate: h, transformTemplate: u } = e.owner.getProps();
                return (
                  sV() &&
                  (eu.has(i) ||
                    (sM.has(i) &&
                      (function (t) {
                        for (let e = 0; e < t.length; e++)
                          if ("string" == typeof t[e] && sE.test(t[e]))
                            return !0;
                        return !1;
                      })(a))) &&
                  ("transform" !== i || !u) &&
                  !h &&
                  !s &&
                  "mirror" !== n &&
                  0 !== r &&
                  "inertia" !== o
                );
              })(i),
            f =
              !m &&
              (({ name: t, motionValue: e }) =>
                t &&
                p.includes(t) &&
                e?.owner?.current instanceof HTMLElement &&
                sV() &&
                en())(i);
          if (
            (s &&
              (m || f || this.resolvedAt !== this.createdAt) &&
              (i.startTime ??
                (i.startTime = sv(this.createdAt, this.resolvedAt))),
            m)
          ) {
            i.element = i.motionValue?.owner?.current;
            try {
              n = new sS(i);
            } catch {
              n = new sT(i);
            }
          } else n = f ? new sR(i) : new sT(i);
          this.pendingTimeline &&
            ((this.stopTimeline = n.attachTimeline(this.pendingTimeline)),
            (this.pendingTimeline = void 0)),
            (this._animation = n);
        }
        get finished() {
          return this._animation ? this._animation.finished : super.finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        liveValue() {
          return this._animation?.liveValue?.();
        }
        get animation() {
          return (
            this._animation ||
              (this.keyframeResolver?.resume(),
              (tX = !0),
              tK(),
              tH(),
              (tX = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel();
        }
      }
      let sj = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        sF = { type: "keyframes", duration: 0.8 },
        sB = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        sI = new Set([
          "when",
          "delay",
          "delayChildren",
          "staggerChildren",
          "staggerDirection",
          "repeat",
          "repeatType",
          "repeatDelay",
          "from",
          "elapsed",
        ]),
        sO =
          (t, e, i, s = {}, n, r) =>
          (o) => {
            let a = ik(s, t) || {},
              l = a.delay || s.delay || 0,
              { elapsed: h = 0 } = s;
            h -= tZ(l);
            let u = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -h,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: r ? void 0 : n,
              hasOnUpdate: !!a.onUpdate,
            };
            !(function (t) {
              for (let e in t) if (!sI.has(e)) return !0;
              return !1;
            })(a) &&
              Object.assign(
                u,
                ((t, { keyframes: e }) =>
                  e.length > 2
                    ? sF
                    : m.has(t)
                    ? t.startsWith("scale")
                      ? {
                          type: "spring",
                          stiffness: 550,
                          damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                          restSpeed: 10,
                        }
                      : sj
                    : sB)(t, u)
              ),
              u.duration && (u.duration = tZ(u.duration)),
              u.repeatDelay && (u.repeatDelay = tZ(u.repeatDelay)),
              void 0 !== u.from && (u.keyframes[0] = u.from);
            let d = !1;
            if (
              ((!1 !== u.type && (0 !== u.duration || u.repeatDelay)) ||
                (sA(u), 0 === u.delay && (d = !0)),
              (tF.instantAnimations ||
                tF.skipAnimations ||
                n?.shouldSkipAnimations ||
                a.skipAnimations) &&
                ((d = !0), sA(u), (u.delay = 0)),
              (u.allowFlatten = !a.type && !a.ease),
              d && !r && void 0 !== e.get())
            ) {
              let t = t6(u.keyframes, a);
              if (void 0 !== t)
                return void tU.update(() => {
                  u.onUpdate(t), u.onComplete();
                });
            }
            return a.isSync ? new sT(u) : new sL(u);
          },
        sU = "u" > typeof window;
      function s$(t, e, { delay: i = 0, transitionOverride: s, type: n } = {}) {
        let { transition: r, transitionEnd: o, ...a } = e,
          l = t.getDefaultTransition();
        r = r ? iC(r, l) : l;
        let h = r?.reduceMotion,
          u = r?.skipAnimations;
        s && (r = s);
        let d = [],
          c = n && t.animationState?.getState()[n],
          p = r?.path;
        for (let e in (p && p.animateVisualElement(t, a, r, i, d), a)) {
          let s = t.getValue(e, t.latestValues[e] ?? null),
            n = a[e];
          if (
            void 0 === n ||
            (c &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let s = i in t && !e[i];
                return (e[i] = !1), s;
              })(c, e))
          )
            continue;
          let o = { delay: i, ...ik(r || {}, e) };
          u && (o.skipAnimations = !0);
          let l = s.get();
          if (
            void 0 !== l &&
            !s.isAnimating() &&
            !Array.isArray(n) &&
            n === l &&
            !o.velocity
          ) {
            tU.update(() => s.set(n));
            continue;
          }
          let p = !1;
          if (sU && window.MotionHandoffAnimation) {
            let i = t.props[ib];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, tU);
              null !== t && ((o.startTime = t), (p = !0));
            }
          }
          iD(t, e);
          let m = h ?? t.shouldReduceMotion;
          s.start(sO(e, s, n, m && tn.has(e) ? { type: !1 } : o, t, p));
          let f = s.animation;
          f && d.push(f);
        }
        if (o) {
          let e = () =>
            tU.update(() => {
              o &&
                (function (t, e) {
                  let {
                    transitionEnd: i = {},
                    transition: s = {},
                    ...n
                  } = iM(t, e) || {};
                  for (let e in (n = { ...n, ...i })) {
                    var r;
                    let i = Array.isArray((r = n[e]))
                      ? r[r.length - 1] || 0
                      : r;
                    t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, eg(i));
                  }
                })(t, o);
            });
          d.length ? Promise.all(d).then(e) : e();
        }
        return d;
      }
      function sW(t, e, i, s = 0, n = 1) {
        let r = Array.from(t)
            .sort((t, e) => t.sortNodePosition(e))
            .indexOf(e),
          o = t.size,
          a = (o - 1) * s;
        return "function" == typeof i ? i(r, o) : 1 === n ? r * s : a - r * s;
      }
      function sN(t, e, i = {}) {
        let s = iM(t, e, iV(t, i.type)),
          n =
            i.transitionOverride ||
            (s?.transition ?? (t.getDefaultTransition() || {})),
          r = () => Promise.all(s ? s$(t, s, i) : []),
          o = (s = 0) => {
            let { variantChildren: r } = t,
              {
                delayChildren: o = 0,
                staggerChildren: a,
                staggerDirection: l,
              } = n,
              h = [];
            return (
              r?.forEach((t) => {
                t.notify("AnimationStart", e),
                  h.push(
                    sN(t, e, {
                      ...i,
                      delay:
                        s +
                        ("function" == typeof o ? 0 : o) +
                        sW(r, t, o, a, l),
                    }).then(() => t.notify("AnimationComplete", e))
                  );
              }),
              Promise.all(h)
            );
          },
          { when: a } = n;
        return a
          ? "beforeChildren" === a
            ? r().then(() => o())
            : o().then(r)
          : Promise.all([r(), o(i.delay)]);
      }
      function sz(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let s = 0; s < i; s++) if (e[s] !== t[s]) return !1;
        return !0;
      }
      let sY = [...ew].reverse();
      function sX() {
        let t = {};
        for (let e of ew)
          t[e] = {
            isActive: "animate" === e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {},
          };
        return t;
      }
      let sH = 0;
      function sK(t) {
        return [t("x"), t("y")];
      }
      function s_(t, e, i, s = { passive: !0 }) {
        return (
          t.addEventListener(e, i, s), () => t.removeEventListener(e, i, s)
        );
      }
      let sG = { x: !1, y: !1 };
      function sq(t) {
        return t.max - t.min;
      }
      function sZ(t, e, i, s = 0.5) {
        (t.origin = s),
          (t.originPoint = eq(e.min, e.max, t.origin)),
          (t.scale = sq(i) / sq(e)),
          (t.translate = eq(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function sJ(t, e, i, s) {
        sZ(t.x, e.x, i.x, s ? s.originX : void 0),
          sZ(t.y, e.y, i.y, s ? s.originY : void 0);
      }
      function sQ(t, e, i, s = 0) {
        (t.min = (s ? eq(i.min, i.max, s) : i.min) + e.min),
          (t.max = t.min + sq(e));
      }
      function s0(t, e, i, s = 0) {
        let n = s ? eq(i.min, i.max, s) : i.min;
        (t.min = e.min - n), (t.max = t.min + sq(e));
      }
      function s1(t, e, i, s) {
        s0(t.x, e.x, i.x, s?.x), s0(t.y, e.y, i.y, s?.y);
      }
      function s2(t) {
        return h(t) && "ownerSVGElement" in t;
      }
      function s3(t, e, i) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let s = document;
          e && (s = e.current);
          let n = i?.[t] ?? s.querySelectorAll(t);
          return n ? Array.from(n) : [];
        }
        return Array.from(t).filter((t) => null != t);
      }
      t.s(["f", 0, s3], 49652);
      let s5 = new WeakMap(),
        s4 = (t, e, i) => (s, n) =>
          n && n[0]
            ? n[0][t + "Size"]
            : s2(s) && "getBBox" in s
            ? s.getBBox()[e]
            : s[i],
        s9 = s4("inline", "width", "offsetWidth"),
        s6 = s4("block", "height", "offsetHeight");
      function s7({ target: t, borderBoxSize: e }) {
        s5.get(t)?.forEach((i) => {
          i(t, {
            get width() {
              return s9(t, e);
            },
            get height() {
              return s6(t, e);
            },
          });
        });
      }
      function s8(t) {
        t.forEach(s7);
      }
      let nt = new Set();
      function ne(t, e) {
        let n;
        return "function" == typeof t
          ? (nt.add(t),
            s ||
              ((s = () => {
                let t = {
                  get width() {
                    return window.innerWidth;
                  },
                  get height() {
                    return window.innerHeight;
                  },
                };
                nt.forEach((e) => e(t));
              }),
              window.addEventListener("resize", s)),
            () => {
              nt.delete(t),
                nt.size ||
                  "function" != typeof s ||
                  (window.removeEventListener("resize", s), (s = void 0));
            })
          : (!i && "u" > typeof ResizeObserver && (i = new ResizeObserver(s8)),
            (n = s3(t)).forEach((t) => {
              let s = s5.get(t);
              s || ((s = new Set()), s5.set(t, s)), s.add(e), i?.observe(t);
            }),
            () => {
              n.forEach((t) => {
                let s = s5.get(t);
                s?.delete(e), s?.size || i?.unobserve(t);
              });
            });
      }
      let ni = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        ns = new Set(["INPUT", "SELECT", "TEXTAREA"]),
        nn = (t) =>
          "mouse" === t.pointerType
            ? "number" != typeof t.button || t.button <= 0
            : !1 !== t.isPrimary;
      function nr(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      function no(t, e, i, s) {
        return s_(t, e, (t) => nn(t) && i(t, nr(t)), s);
      }
      let na = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        nl = (t, e) => Math.abs(t - e),
        nh = new Set(["auto", "scroll"]);
      class nu {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: s = window,
            dragSnapToOrigin: n = !1,
            distanceThreshold: r = 3,
            element: o,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.lastRawMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.scrollPositions = new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (t) => {
              this.handleScroll(t.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(window);
            }),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              (this.hasPendingMove = !1),
                this.lastRawMoveEventInfo &&
                  (this.lastMoveEventInfo = nd(
                    this.lastRawMoveEventInfo,
                    this.transformPagePoint
                  ));
              let i = np(this.lastMoveEventInfo, this.history),
                s = null !== this.startEvent,
                n =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(nl(t.x, e.x) ** 2 + nl(t.y, e.y) ** 2) >=
                    this.distanceThreshold);
              if (!s && !n) return;
              let { point: r } = i;
              this.history.push({ ...r, timestamp: et.now() });
              let { onStart: o, onMove: a } = this.handlers;
              s ||
                (o && o(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                a && a(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastRawMoveEventInfo = e),
                (this.lastMoveEventInfo = nd(e, this.transformPagePoint)),
                (this.hasPendingMove = !0),
                tU.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.hasPendingMove && this.updatePoint(), this.end();
              let {
                onEnd: i,
                onSessionEnd: s,
                resumeAnimation: n,
              } = this.handlers;
              if (
                ((this.dragSnapToOrigin || !this.startEvent) && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = np(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : nd(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), s && s(t, r);
            }),
            !nn(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.distanceThreshold = r),
            (this.contextWindow = s || window);
          let a = nd(nr(t), this.transformPagePoint),
            { point: l } = a,
            { timestamp: h } = tO;
          this.history = [{ ...l, timestamp: h }];
          let { onSessionStart: u } = e;
          u && u(t, np(a, this.history));
          let d = { passive: !0, capture: !0 };
          (this.removeListeners = iR(
            no(this.contextWindow, "pointermove", this.handlePointerMove, d),
            no(this.contextWindow, "pointerup", this.handlePointerUp, d),
            no(this.contextWindow, "pointercancel", this.handlePointerUp, d)
          )),
            o && this.startScrollTracking(o);
        }
        startScrollTracking(t) {
          let e = t.parentElement;
          for (; e; ) {
            let t = getComputedStyle(e);
            (nh.has(t.overflowX) || nh.has(t.overflowY)) &&
              this.scrollPositions.set(e, { x: e.scrollLeft, y: e.scrollTop }),
              (e = e.parentElement);
          }
          this.scrollPositions.set(window, {
            x: window.scrollX,
            y: window.scrollY,
          }),
            window.addEventListener("scroll", this.onElementScroll, {
              capture: !0,
            }),
            window.addEventListener("scroll", this.onWindowScroll),
            (this.removeScrollListeners = () => {
              window.removeEventListener("scroll", this.onElementScroll, {
                capture: !0,
              }),
                window.removeEventListener("scroll", this.onWindowScroll);
            });
        }
        handleScroll(t) {
          let e = this.scrollPositions.get(t);
          if (!e) return;
          let i = t === window,
            s = i
              ? { x: window.scrollX, y: window.scrollY }
              : { x: t.scrollLeft, y: t.scrollTop },
            n = { x: s.x - e.x, y: s.y - e.y };
          (0 !== n.x || 0 !== n.y) &&
            (i
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += n.x),
                (this.lastMoveEventInfo.point.y += n.y))
              : this.history.length > 0 &&
                ((this.history[0].x -= n.x), (this.history[0].y -= n.y)),
            this.scrollPositions.set(t, s),
            tU.update(this.updatePoint, !0));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            t$(this.updatePoint);
        }
      }
      function nd(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function nc(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function np({ point: t }, e) {
        return {
          point: t,
          delta: nc(t, nm(e)),
          offset: nc(t, e[0]),
          velocity: (function (t) {
            if (t.length < 2) return { x: 0, y: 0 };
            let e = t.length - 1,
              i = null,
              s = nm(t);
            for (
              ;
              e >= 0 && ((i = t[e]), !(s.timestamp - i.timestamp > tZ(0.1)));

            )
              e--;
            if (!i) return { x: 0, y: 0 };
            i === t[0] &&
              t.length > 2 &&
              s.timestamp - i.timestamp > 2 * tZ(0.1) &&
              (i = t[1]);
            let n = (s.timestamp - i.timestamp) / 1e3;
            if (0 === n) return { x: 0, y: 0 };
            let r = { x: (s.x - i.x) / n, y: (s.y - i.y) / n };
            return 1 / 0 === r.x && (r.x = 0), 1 / 0 === r.y && (r.y = 0), r;
          })(e),
        };
      }
      function nm(t) {
        return t[t.length - 1];
      }
      function nf(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function ng(t, e) {
        let i = e.min - t.min,
          s = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, s] = [s, i]), { min: i, max: s }
        );
      }
      function ny(t, e, i) {
        return { min: nv(t, e), max: nv(t, i) };
      }
      function nv(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let nx = new WeakMap();
      class nw {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = ti()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
          let { presenceContext: s } = this.visualElement;
          if (s && !1 === s.isPresent) return;
          let n = (t) => {
              e && this.snapToCursor(t), this.stopAnimation();
            },
            r = (t, e) => {
              let {
                drag: i,
                dragPropagation: s,
                onDragStart: n,
              } = this.getProps();
              if (
                i &&
                !s &&
                (this.openDragLock && this.openDragLock(),
                (this.openDragLock = (function (t) {
                  if ("x" === t || "y" === t)
                    if (sG[t]) return null;
                    else
                      return (
                        (sG[t] = !0),
                        () => {
                          sG[t] = !1;
                        }
                      );
                  return sG.x || sG.y
                    ? null
                    : ((sG.x = sG.y = !0),
                      () => {
                        sG.x = sG.y = !1;
                      });
                })(i)),
                !this.openDragLock)
              )
                return;
              (this.latestPointerEvent = t),
                (this.latestPanInfo = e),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                sK((t) => {
                  let e = this.getAxisMotionValue(t).get() || 0;
                  if (C.test(e)) {
                    let { projection: i } = this.visualElement;
                    if (i && i.layout) {
                      let s = i.layout.layoutBox[t];
                      s && (e = sq(s) * (parseFloat(e) / 100));
                    }
                  }
                  this.originPoint[t] = e;
                }),
                n && tU.update(() => n(t, e), !1, !0),
                iD(this.visualElement, "transform");
              let { animationState: r } = this.visualElement;
              r && r.setActive("whileDrag", !0);
            },
            o = (t, e) => {
              (this.latestPointerEvent = t), (this.latestPanInfo = e);
              let {
                dragPropagation: i,
                dragDirectionLock: s,
                onDirectionLock: n,
                onDrag: r,
              } = this.getProps();
              if (!i && !this.openDragLock) return;
              let { offset: o } = e;
              if (s && null === this.currentDirection) {
                (this.currentDirection = (function (t, e = 10) {
                  let i = null;
                  return (
                    Math.abs(t.y) > e
                      ? (i = "y")
                      : Math.abs(t.x) > e && (i = "x"),
                    i
                  );
                })(o)),
                  null !== this.currentDirection &&
                    n &&
                    n(this.currentDirection);
                return;
              }
              this.updateAxis("x", e.point, o),
                this.updateAxis("y", e.point, o),
                this.visualElement.render(),
                r && tU.update(() => r(t, e), !1, !0);
            },
            a = (t, e) => {
              (this.latestPointerEvent = t),
                (this.latestPanInfo = e),
                this.stop(t, e),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null);
            },
            l = () => {
              let { dragSnapToOrigin: t } = this.getProps();
              (t || this.constraints) && this.startAnimation({ x: 0, y: 0 });
            },
            { dragSnapToOrigin: h } = this.getProps();
          this.panSession = new nu(
            t,
            {
              onSessionStart: n,
              onStart: r,
              onMove: o,
              onSessionEnd: a,
              resumeAnimation: l,
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: h,
              distanceThreshold: i,
              contextWindow: na(this.visualElement),
              element: this.visualElement.current,
            }
          );
        }
        stop(t, e) {
          let i = t || this.latestPointerEvent,
            s = e || this.latestPanInfo,
            n = this.isDragging;
          if ((this.cancel(), !n || !s || !i)) return;
          let { velocity: r } = s;
          this.startAnimation(r);
          let { onDragEnd: o } = this.getProps();
          o && tU.postRender(() => o(i, s));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1), this.endPanSession();
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        endPanSession() {
          this.panSession && this.panSession.end(), (this.panSession = void 0);
        }
        updateAxis(t, e, i) {
          let { drag: s } = this.getProps();
          if (!i || !nb(t, s, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, s) {
              return (
                void 0 !== e && t < e
                  ? (t = s ? eq(e, t, s.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = s ? eq(i, t, s.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            n.set(r);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            s = this.constraints;
          t && iP(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: s, right: n }
              ) {
                return { x: nf(t.x, i, n), y: nf(t.y, e, s) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: ny(t, "left", "right"), y: ny(t, "top", "bottom") }
              );
            })(e)),
            s !== this.constraints &&
              !iP(t) &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              sK((t) => {
                var e, s;
                let n;
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] =
                    ((e = i.layoutBox[t]),
                    (s = this.constraints[t]),
                    (n = {}),
                    void 0 !== s.min && (n.min = s.min - e.min),
                    void 0 !== s.max && (n.max = s.max - e.min),
                    n));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !iP(e)) return !1;
          let s = e.current;
          tl();
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          n.root && ((n.root.scroll = void 0), n.root.updateScroll());
          let r = (function (t, e, i) {
              let s = e7(t, i),
                { scroll: n } = e;
              return n && (e5(s.x, n.offset.x), e5(s.y, n.offset.y)), s;
            })(s, n.root, this.visualElement.getTransformPagePoint()),
            o =
              ((t = n.layout.layoutBox), { x: ng(t.x, r.x), y: ng(t.y, r.y) });
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = eG(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: s,
              dragTransition: n,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            sK((o) => {
              if (!nb(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              (!0 === r || r === o) && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: s ? 200 : 1e6,
                bounceDamping: s ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            iD(this.visualElement, t),
            i.start(sO(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          sK((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`;
          return (
            this.visualElement.getProps()[e] ||
            this.visualElement.getValue(
              t,
              this.visualElement.latestValues[t] ?? 0
            )
          );
        }
        snapToCursor({ clientX: t, clientY: e }) {
          let { drag: i } = this.getProps(),
            s = { x: t, y: e },
            n = this.visualElement.getTransformPagePoint()?.(s) || s,
            r = this.visualElement.measureViewportBox();
          sK((t) => {
            if (!nb(t, i, this.currentDirection)) return;
            let e = this.getAxisMotionValue(t),
              { min: s, max: o } = r[t];
            e.set((e.get() || 0) + n[t] - eq(s, o, 0.5));
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!iP(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let s = this.constraints,
            n = { x: 0, y: 0 };
          sK((t) => {
            var e, i;
            let r,
              o,
              a,
              l = this.getAxisMotionValue(t).get();
            n[t] =
              ((e = { min: l, max: l }),
              (i = s[t]),
              (r = 0.5),
              (o = sq(e)),
              (a = sq(i)) > o
                ? (r = sp(i.min, i.max - o, e.min))
                : o > a && (r = sp(e.min, e.max - a, i.min)),
              f(0, 1, r));
          });
          let { transformTemplate: r } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = r ? r({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            (this.constraints = !1),
            this.resolveConstraints(),
            sK((e) => {
              let i = this.getAxisMotionValue(e);
              if (!nb(e, t, null) || !i.get()) return;
              let { min: s, max: r } = this.constraints[e];
              i.set(eq(s, r, n[e]));
            }),
            this.visualElement.render();
        }
        addListeners() {
          let t;
          if (!this.visualElement.current) return;
          nx.set(this.visualElement, this);
          let e = this.visualElement.current,
            i = no(e, "pointerdown", (t) => {
              let { drag: i, dragListener: s = !0 } = this.getProps(),
                n = t.target,
                r =
                  n !== e && (ns.has(n.tagName) || !0 === n.isContentEditable);
              i && s && !r && this.start(t);
            }),
            s = () => {
              var i, s, n;
              let r,
                o,
                { dragConstraints: a } = this.getProps();
              iP(a) &&
                a.current &&
                ((this.constraints = this.resolveRefConstraints()),
                t ||
                  ((i = e),
                  (s = a.current),
                  (r = ne(
                    i,
                    nT((n = () => this.scalePositionWithinConstraints()))
                  )),
                  (o = ne(s, nT(n))),
                  (t = () => {
                    r(), o();
                  })));
            },
            { projection: n } = this.visualElement,
            r = n.addEventListener("measure", s);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            tU.read(s);
          let o = s_(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            a = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (sK((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            o(), i(), r(), a && a(), t && t();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: s = !1,
              dragConstraints: n = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: s,
            dragConstraints: n,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function nT(t) {
        let e = !0;
        return () => {
          if (e) {
            e = !1;
            return;
          }
          t();
        };
      }
      function nb(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      let nS = (t) => (e, i) => {
          t && tU.update(() => t(e, i), !1, !0);
        },
        nP = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      var nA = n;
      let nE = !1;
      class nM extends nA.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: s,
            } = this.props,
            { projection: n } = t;
          n &&
            (e.group && e.group.add(n),
            i && i.register && s && i.register(n),
            nE && n.root.didUpdate(),
            n.addEventListener("animationComplete", () => {
              this.safeToRemove();
            }),
            n.setOptions({
              ...n.options,
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            })),
            (nP.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: s,
              isPresent: n,
            } = this.props,
            { projection: r } = i;
          return (
            r &&
              ((r.isPresent = n),
              t.layoutDependency !== e &&
                r.setOptions({ ...r.options, layoutDependency: e }),
              (nE = !0),
              s || t.layoutDependency !== e || void 0 === e || t.isPresent !== n
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent !== n &&
                (n
                  ? r.promote()
                  : r.relegate() ||
                    tU.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { visualElement: t, layoutAnchor: e } = this.props,
            { projection: i } = t;
          i &&
            ((i.options.layoutAnchor = e),
            i.root.didUpdate(),
            ec.postRender(() => {
              !i.currentAnimation && i.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: s } = t;
          (nE = !0),
            s &&
              (s.scheduleCheckAfterUnmount(),
              e && e.group && e.group.remove(s),
              i && i.deregister && i.deregister(s));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nV(t) {
        let [e, i] = c(),
          s = (0, nA.useContext)(r);
        return (0, ii.jsx)(nM, {
          ...t,
          layoutGroup: s,
          switchLayoutGroup: (0, nA.useContext)(iS),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let nC = [
          "borderTopLeftRadius",
          "borderTopRightRadius",
          "borderBottomRightRadius",
          "borderBottomLeftRadius",
        ],
        nk = (t) => ("number" == typeof t ? t : parseFloat(t)),
        nD = nC.length,
        nR = (t) => "number" == typeof t || k.test(t);
      function nL(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nj = nB(0, 0.5, sh),
        nF = nB(0.5, 0.95, tj);
      function nB(t, e, i) {
        return (s) => (s < t ? 0 : s > e ? 1 : i(sp(t, e, s)));
      }
      function nI(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nO(t, e) {
        nI(t.x, e.x), nI(t.y, e.y);
      }
      function nU(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function n$(t, e, i, s, n) {
        return (
          (t -= e),
          (t = s + (1 / i) * (t - s)),
          void 0 !== n && (t = s + (1 / n) * (t - s)),
          t
        );
      }
      function nW(t, e, [i, s, n], r, o) {
        !(function (t, e = 0, i = 1, s = 0.5, n, r = t, o = t) {
          if (
            (C.test(e) &&
              ((e = parseFloat(e)), (e = eq(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = eq(r.min, r.max, s);
          t === r && (a -= e),
            (t.min = n$(t.min, e, i, a, n)),
            (t.max = n$(t.max, e, i, a, n));
        })(t, e[i], e[s], e[n], e.scale, r, o);
      }
      let nN = ["x", "scaleX", "originX"],
        nz = ["y", "scaleY", "originY"];
      function nY(t, e, i, s) {
        nW(t.x, e, nN, i ? i.x : void 0, s ? s.x : void 0),
          nW(t.y, e, nz, i ? i.y : void 0, s ? s.y : void 0);
      }
      function nX(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nH(t) {
        return nX(t.x) && nX(t.y);
      }
      function nK(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function n_(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function nG(t, e) {
        return n_(t.x, e.x) && n_(t.y, e.y);
      }
      function nq(t) {
        return sq(t.x) / sq(t.y);
      }
      function nZ(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nJ {
        constructor() {
          this.members = [];
        }
        add(t) {
          tJ(this.members, t);
          for (let e = this.members.length - 1; e >= 0; e--) {
            let i = this.members[e];
            if (i === t || i === this.lead || i === this.prevLead) continue;
            let s = i.instance;
            (s && !1 !== s.isConnected) ||
              i.snapshot ||
              (tQ(this.members, i), i.unmount());
          }
          t.scheduleRender();
        }
        remove(t) {
          if (
            (tQ(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          for (let e = this.members.indexOf(t) - 1; e >= 0; e--) {
            let t = this.members[e];
            if (!1 !== t.isPresent && t.instance?.isConnected !== !1)
              return this.promote(t), !0;
          }
          return !1;
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.updateSnapshot(), t.scheduleRender();
            let { layoutDependency: s } = i.options,
              { layoutDependency: n } = t.options;
            (void 0 === s || s !== n) &&
              ((t.resumeFrom = i),
              e && (i.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root?.isUpdating && (t.isLayoutDirty = !0)),
              !1 === t.options.crossfade && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            t.options.onExitComplete?.(),
              t.resumingFrom?.options.onExitComplete?.();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => t.instance && t.scheduleRender(!1));
        }
        removeLeadSnapshot() {
          this.lead?.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function nQ(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let n0 = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t)
              if (!k.test(t)) return t;
              else t = parseFloat(t);
            let i = nQ(t, e.target.x),
              s = nQ(t, e.target.y);
            return `${i}% ${s}%`;
          },
        },
        n1 = {
          borderRadius: { ...n0, applyTo: [...nC] },
          borderTopLeftRadius: n0,
          borderTopRightRadius: n0,
          borderBottomLeftRadius: n0,
          borderBottomRightRadius: n0,
          boxShadow: {
            correct: (t, { treeScale: e, projectionDelta: i }) => {
              let s = z.parse(t);
              if (s.length > 5) return t;
              let n = z.createTransformer(t),
                r = +("number" != typeof s[0]),
                o = i.x.scale * e.x,
                a = i.y.scale * e.y;
              (s[0 + r] /= o), (s[1 + r] /= a);
              let l = eq(o, a, 0.5);
              return (
                "number" == typeof s[2 + r] && (s[2 + r] /= l),
                "number" == typeof s[3 + r] && (s[3 + r] /= l),
                n(s)
              );
            },
          },
        },
        n2 = (t, e) => t.depth - e.depth;
      class n3 {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          tJ(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          tQ(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(n2),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      Object.assign(eY, { ...n1, ...eY });
      let n5 = ["", "X", "Y", "Z"],
        n4 = 0;
      function n9(t, e, i, s) {
        let { latestValues: n } = e;
        n[t] && ((i[t] = n[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
      }
      let n6 = ({ instance: t }) => t && ed.get(t)?.demote();
      function n7({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: s,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            (this.id = n4++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  this.nodes.forEach(re),
                  this.nodes.forEach(rd),
                  this.nodes.forEach(rc),
                  this.nodes.forEach(ri);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new n3());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new t0()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            (this.isSVG = s2(e) && !(s2(e) && "svg" === e.tagName)),
              (this.instance = e);
            let { layoutId: i, layout: s, visualElement: n } = this.options;
            if (
              (n && !n.current && n.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (s || i) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let i,
                s = 0,
                n = () => (this.root.updateBlockedByResize = !1);
              tU.read(() => {
                s = window.innerWidth;
              }),
                t(e, () => {
                  let t = window.innerWidth;
                  if (t !== s) {
                    let e, r;
                    (s = t),
                      (this.root.updateBlockedByResize = !0),
                      i && i(),
                      (e = et.now()),
                      (r = ({ timestamp: t }) => {
                        let i = t - e;
                        i >= 250 && (t$(r), n());
                      }),
                      tU.setup(r, !0),
                      (i = () => t$(r)),
                      nP.hasAnimatedSinceResize &&
                        ((nP.hasAnimatedSinceResize = !1),
                        this.nodes.forEach(ru));
                  }
                });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                n &&
                (i || s) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: s,
                  }) => {
                    if (this.isAnimationBlocked) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        n.getDefaultTransition() ||
                        rv,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = n.getProps(),
                      l = !this.targetLayout || !nG(this.targetLayout, s),
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0));
                      let e = { ...ik(r, "layout"), onPlay: o, onComplete: a };
                      (n.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, h, e.path);
                    } else
                      e || ru(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = s;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              t$(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(rp),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let s = i.props[ib];
                  if (window.MotionHasOptimisedAnimation(s, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      s,
                      "transform",
                      tU,
                      !(t || i)
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            n6(this), (this.isLayoutDirty = !0);
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                n6(e),
                ("string" == typeof e.latestValues.x ||
                  "string" == typeof e.latestValues.y) &&
                  (e.isLayoutDirty = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1),
                e.isAnimationBlocked &&
                  (e.dragSnapshot || (e.dragSnapshot = e.measure()),
                  (this.dragAncestor = e));
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let s = this.getTransformTemplate();
            (this.prevTransformTemplateValue = s
              ? s(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              let t = this.updateBlockedByResize;
              this.unblockUpdate(),
                (this.updateBlockedByResize = !1),
                this.clearAllSnapshots(),
                t && this.nodes.forEach(rr),
                this.nodes.forEach(rn);
              return;
            }
            if (this.animationId <= this.animationCommitId)
              return void this.nodes.forEach(ro);
            (this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(ra),
                  this.nodes.forEach(rl),
                  this.nodes.forEach(rh),
                  this.nodes.forEach(n8),
                  this.nodes.forEach(rt))
                : this.nodes.forEach(ro),
              this.clearAllSnapshots();
            let t = et.now();
            (tO.delta = f(0, 1e3 / 60, t - tO.timestamp)),
              (tO.timestamp = t),
              (tO.isProcessing = !0),
              tW.update.process(tO),
              tW.preRender.process(tO),
              tW.render.process(tO),
              (tO.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ec.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(rs), this.sharedNodes.forEach(rm);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tU.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tU.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot &&
              this.instance &&
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                sq(this.snapshot.measuredBox.x) ||
                sq(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              this.layoutCorrected || (this.layoutCorrected = ti()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e && this.instance)
            ) {
              let e = s(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
              this.isLayoutDirty ||
              this.shouldResetTransform ||
              this.options.alwaysMeasureLayout;
            t && n6(this);
            let e = this.projectionDelta && !nH(this.projectionDelta),
              i = this.getTransformTemplate(),
              s = i ? i(this.latestValues, "") : void 0,
              r = s !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || eQ(this.latestValues) || r) &&
              (n(this.instance, s),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              s = this.removeElementScroll(i);
            return (
              t && (s = this.removeTransform(s)),
              rT((e = s).x),
              rT(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: s,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return ti();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(rS))) {
              let { scroll: t } = this.root;
              t && (e5(e.x, t.offset.x), e5(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = ti();
            if ((nO(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let s = this.path[i],
                { scroll: n, options: r } = s;
              s !== this.root &&
                n &&
                r.layoutScroll &&
                (n.wasRoot && nO(e, t),
                e5(e.x, n.offset.x),
                e5(e.y, n.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1, i) {
            let s = i || ti();
            nO(s, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              !e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                (e5(s.x, -i.scroll.offset.x), e5(s.y, -i.scroll.offset.y)),
                eQ(i.latestValues) &&
                  e6(s, i.latestValues, i.layout?.layoutBox);
            }
            return (
              eQ(this.latestValues) &&
                e6(s, this.latestValues, this.layout?.layoutBox),
              s
            );
          }
          removeTransform(t) {
            let e = ti();
            nO(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i,
                s = this.path[t];
              eQ(s.latestValues) &&
                (s.instance &&
                  (eJ(s.latestValues) && s.updateSnapshot(),
                  nO((i = ti()), s.measurePageBox())),
                nY(e, s.latestValues, s.snapshot?.layoutBox, i));
            }
            return eQ(this.latestValues) && nY(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tO.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            let i = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (i && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: s, layoutId: n } = this.options;
            if (!this.layout || !(s || n)) return;
            this.resolvedRelativeTargetAt = tO.timestamp;
            let r = this.getClosestProjectingParent();
            if (
              (this.targetDelta ||
                this.relativeTarget ||
                (!1 !== this.options.layoutAnchor && r && r.layout
                  ? this.createRelativeTarget(
                      r,
                      this.layout.layoutBox,
                      r.layout.layoutBox
                    )
                  : this.removeRelativeTarget()),
              this.relativeTarget || this.targetDelta)
            ) {
              if (
                (this.target ||
                  ((this.target = ti()), (this.targetWithTransforms = ti())),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.relativeParent &&
                  this.relativeParent.target)
              ) {
                var o, a, l, h;
                this.forceRelativeParentToResolveTarget(),
                  (o = this.target),
                  (a = this.relativeTarget),
                  (l = this.relativeParent.target),
                  (h = this.options.layoutAnchor || void 0),
                  sQ(o.x, a.x, l.x, h?.x),
                  sQ(o.y, a.y, l.y, h?.y);
              } else
                this.targetDelta
                  ? (this.resumingFrom
                      ? this.applyTransform(
                          this.layout.layoutBox,
                          !1,
                          this.target
                        )
                      : nO(this.target, this.layout.layoutBox),
                    e3(this.target, this.targetDelta))
                  : nO(this.target, this.layout.layoutBox);
              this.attemptToResolveRelativeTarget &&
                ((this.attemptToResolveRelativeTarget = !1),
                !1 !== this.options.layoutAnchor &&
                r &&
                !!r.resumingFrom == !!this.resumingFrom &&
                !r.options.layoutScroll &&
                r.target &&
                1 !== this.animationProgress
                  ? this.createRelativeTarget(r, this.target, r.target)
                  : (this.relativeParent = this.relativeTarget = void 0));
            }
          }
          getClosestProjectingParent() {
            if (
              !(
                !this.parent ||
                eJ(this.parent.latestValues) ||
                e0(this.parent.latestValues)
              )
            )
              if (this.parent.isProjecting()) return this.parent;
              else return this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          createRelativeTarget(t, e, i) {
            (this.relativeParent = t),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = ti()),
              (this.relativeTargetOrigin = ti()),
              s1(
                this.relativeTargetOrigin,
                e,
                i,
                this.options.layoutAnchor || void 0
              ),
              nO(this.relativeTarget, this.relativeTargetOrigin);
          }
          removeRelativeTarget() {
            this.relativeParent = this.relativeTarget = void 0;
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (i = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === tO.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: s, layoutId: n } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(s || n))
            )
              return;
            nO(this.layoutCorrected, this.layout.layoutBox);
            let r = this.treeScale.x,
              o = this.treeScale.y;
            !(function (t, e, i, s = !1) {
              let n,
                r,
                o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (n = i[a]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (s &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      (e5(t.x, -n.scroll.offset.x),
                      e5(t.y, -n.scroll.offset.y)),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), e3(t, r)),
                    s &&
                      eQ(n.latestValues) &&
                      e6(t, n.latestValues, n.layout?.layoutBox));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = ti()));
            let { target: a } = t;
            if (!a) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nU(this.prevProjectionDelta.x, this.projectionDelta.x),
                nU(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              sJ(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues
              ),
              (this.treeScale.x === r &&
                this.treeScale.y === o &&
                nZ(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nZ(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", a));
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = tt()),
              (this.projectionDelta = tt()),
              (this.projectionDeltaWithTransform = tt());
          }
          setAnimationOrigin(t, e = !1, i) {
            let s,
              n = this.snapshot,
              r = n ? n.latestValues : {},
              o = { ...this.latestValues },
              a = tt();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let l = ti(),
              h =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              d = !u || u.members.length <= 1,
              c = !!(
                h &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(ry)
              );
            this.animationProgress = 0;
            let p = i?.interpolateProjection(t);
            (this.mixTargetDelta = (e) => {
              let i = e / 1e3,
                n = p?.(i);
              if (
                (n
                  ? ((a.x.translate = n.x),
                    (a.x.scale = eq(t.x.scale, 1, i)),
                    (a.x.origin = t.x.origin),
                    (a.x.originPoint = t.x.originPoint),
                    (a.y.translate = n.y),
                    (a.y.scale = eq(t.y.scale, 1, i)),
                    (a.y.origin = t.y.origin),
                    (a.y.originPoint = t.y.originPoint))
                  : (rf(a.x, t.x, i), rf(a.y, t.y, i)),
                this.setTargetDelta(a),
                this.relativeTarget &&
                  this.relativeTargetOrigin &&
                  this.layout &&
                  this.relativeParent &&
                  this.relativeParent.layout)
              ) {
                var u, m, f, g, y, v;
                s1(
                  l,
                  this.layout.layoutBox,
                  this.relativeParent.layout.layoutBox,
                  this.options.layoutAnchor || void 0
                ),
                  (f = this.relativeTarget),
                  (g = this.relativeTargetOrigin),
                  (y = l),
                  (v = i),
                  rg(f.x, g.x, y.x, v),
                  rg(f.y, g.y, y.y, v),
                  s &&
                    ((u = this.relativeTarget),
                    (m = s),
                    nK(u.x, m.x) && nK(u.y, m.y)) &&
                    (this.isProjectionDirty = !1),
                  s || (s = ti()),
                  nO(s, this.relativeTarget);
              }
              h &&
                ((this.animationValues = o),
                (function (t, e, i, s, n, r) {
                  n
                    ? ((t.opacity = eq(0, i.opacity ?? 1, nj(s))),
                      (t.opacityExit = eq(e.opacity ?? 1, 0, nF(s))))
                    : r && (t.opacity = eq(e.opacity ?? 1, i.opacity ?? 1, s));
                  for (let n = 0; n < nD; n++) {
                    let r = nC[n],
                      o = nL(e, r),
                      a = nL(i, r);
                    (void 0 !== o || void 0 !== a) &&
                      (o || (o = 0),
                      a || (a = 0),
                      0 === o || 0 === a || nR(o) === nR(a)
                        ? ((t[r] = Math.max(eq(nk(o), nk(a), s), 0)),
                          (C.test(a) || C.test(o)) && (t[r] += "%"))
                        : (t[r] = a));
                  }
                  (e.rotate || i.rotate) &&
                    (t.rotate = eq(e.rotate || 0, i.rotate || 0, s));
                })(o, r, this.latestValues, i, c, d)),
                n &&
                  void 0 !== n.rotate &&
                  (this.animationValues || (this.animationValues = o),
                  (this.animationValues.pathRotation = n.rotate)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                (this.animationProgress = i);
            }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(),
              this.resumingFrom?.currentAnimation?.stop(),
              this.pendingAnimation &&
                (t$(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tU.update(() => {
                var e, i, s;
                let n;
                (nP.hasAnimatedSinceResize = !0),
                  this.motionValue || (this.motionValue = eg(0)),
                  this.motionValue.jump(0, !1),
                  (this.currentAnimation =
                    ((e = this.motionValue),
                    (i = [0, 1e3]),
                    (s = {
                      ...t,
                      velocity: 0,
                      isSync: !0,
                      onUpdate: (e) => {
                        this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                      },
                      onComplete: () => {
                        t.onComplete && t.onComplete(),
                          this.completeAnimation();
                      },
                    }),
                    (n = ts(e) ? e : eg(e)).start(sO("", n, i, s)),
                    n.animation)),
                  (function (t, e) {
                    let i = globalThis.__MOTION_INSPECT__;
                    if (i)
                      try {
                        i({ ...ee("layout-animation-start", t), node: e });
                      } catch {}
                  })(this.currentAnimation, this),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              { targetWithTransforms: e, layout: i, latestValues: s } = t,
              { target: n } = t;
            if (e && n && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                rb(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                n = this.target || ti();
                let e = sq(this.layout.layoutBox.x);
                (n.x.min = t.target.x.min), (n.x.max = n.x.min + e);
                let i = sq(this.layout.layoutBox.y);
                (n.y.min = t.target.y.min), (n.y.max = n.y.min + i);
              }
              nO(e, n),
                e6(e, s),
                sJ(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  s
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nJ()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let s = this.getStack();
            s && s.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let s = {};
            i.z && n9("z", t, s, this.animationValues);
            for (let e = 0; e < n5.length; e++)
              n9(`rotate${n5[e]}`, t, s, this.animationValues),
                n9(`skew${n5[e]}`, t, s, this.animationValues);
            for (let e in (t.render(), s))
              t.setStaticValue(e, s[e]),
                this.animationValues && (this.animationValues[e] = s[e]);
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            let i = this.getTransformTemplate();
            if (this.needsReset) {
              (this.needsReset = !1),
                (t.visibility = ""),
                (t.opacity = ""),
                (t.pointerEvents = ic(e?.pointerEvents) || ""),
                (t.transform = i ? i(this.latestValues, "") : "none");
              return;
            }
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              this.options.layoutId &&
                ((t.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (t.pointerEvents = ic(e?.pointerEvents) || "")),
                this.hasProjected &&
                  !eQ(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1));
              return;
            }
            t.visibility = "";
            let n = s.animationValues || s.latestValues;
            this.applyTransformsToTarget();
            let r = (function (t, e, i) {
              let s = "",
                n = t.x.translate / e.x,
                r = t.y.translate / e.y,
                o = i?.z || 0;
              if (
                ((n || r || o) && (s = `translate3d(${n}px, ${r}px, ${o}px) `),
                (1 !== e.x || 1 !== e.y) &&
                  (s += `scale(${1 / e.x}, ${1 / e.y}) `),
                i)
              ) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  pathRotation: n,
                  rotateX: r,
                  rotateY: o,
                  skewX: a,
                  skewY: l,
                } = i;
                t && (s = `perspective(${t}px) ${s}`),
                  e && (s += `rotate(${e}deg) `),
                  n && (s += `rotate(${n}deg) `),
                  r && (s += `rotateX(${r}deg) `),
                  o && (s += `rotateY(${o}deg) `),
                  a && (s += `skewX(${a}deg) `),
                  l && (s += `skewY(${l}deg) `);
              }
              let a = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return (
                (1 !== a || 1 !== l) && (s += `scale(${a}, ${l})`), s || "none"
              );
            })(this.projectionDeltaWithTransform, this.treeScale, n);
            i && (r = i(n, r)), (t.transform = r);
            let { x: o, y: a } = this.projectionDelta;
            for (let e in ((t.transformOrigin = `${100 * o.origin}% ${
              100 * a.origin
            }% 0`),
            s.animationValues
              ? (t.opacity =
                  s === this
                    ? n.opacity ?? this.latestValues.opacity ?? 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : n.opacityExit)
              : (t.opacity =
                  s === this
                    ? void 0 !== n.opacity
                      ? n.opacity
                      : ""
                    : void 0 !== n.opacityExit
                    ? n.opacityExit
                    : 0),
            eY)) {
              if (void 0 === n[e]) continue;
              let { correct: i, applyTo: o, isCSSVariable: a } = eY[e],
                l = "none" === r ? n[e] : i(n[e], s);
              if (o) {
                let e = o.length;
                for (let i = 0; i < e; i++) t[o[i]] = l;
              } else
                a
                  ? (this.options.visualElement.renderState.vars[e] = l)
                  : (t[e] = l);
            }
            this.options.layoutId &&
              (t.pointerEvents =
                s === this ? ic(e?.pointerEvents) || "" : "none");
          }
          clearSnapshot() {
            this.resumeFrom =
              this.snapshot =
              this.dragSnapshot =
              this.dragAncestor =
                void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(rn),
              this.root.sharedNodes.clear();
          }
        };
      }
      function n8(t) {
        t.updateLayout(),
          (function (t) {
            let { snapshot: e, dragAncestor: i } = t,
              s = i?.layout;
            if (!e || !s || t.resumeFrom || t.isAnimationBlocked) return;
            let n = i.dragSnapshot;
            sK((t) =>
              e5(e.layoutBox[t], s.layoutBox[t].min - n.layoutBox[t].min)
            );
          })(t);
      }
      function rt(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: s } = t.layout,
            { animationType: n } = t.options,
            r = e.source !== t.layout.source;
          if ("size" === n)
            sK((t) => {
              let s = r ? e.measuredBox[t] : e.layoutBox[t],
                n = sq(s);
              (s.min = i[t].min), (s.max = s.min + n);
            });
          else if ("x" === n || "y" === n) {
            let t = "x" === n ? "y" : "x";
            nI(r ? e.measuredBox[t] : e.layoutBox[t], i[t]);
          } else
            rb(n, e.layoutBox, i) &&
              sK((s) => {
                let n = r ? e.measuredBox[s] : e.layoutBox[s],
                  o = sq(i[s]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[s].max = t.relativeTarget[s].min + o));
              });
          let o = tt();
          sJ(o, i, e.layoutBox);
          let a = tt();
          r
            ? sJ(a, t.applyTransform(s, !0), e.measuredBox)
            : sJ(a, i, e.layoutBox);
          let l = !nH(o),
            h = !1;
          if (!t.resumeFrom) {
            let s = t.getClosestProjectingParent();
            if (s && !s.resumeFrom) {
              let { snapshot: n, layout: r } = s;
              if (n && r) {
                let o = t.options.layoutAnchor || void 0,
                  a = ti();
                s1(a, e.layoutBox, n.layoutBox, o);
                let l = ti();
                s1(l, i, r.layoutBox, o),
                  nG(a, l) || (h = !0),
                  s.options.layoutRoot &&
                    ((t.relativeTarget = l),
                    (t.relativeTargetOrigin = a),
                    (t.relativeParent = s));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function re(t) {
        t.parent &&
          (t.isProjecting() ||
            (t.isProjectionDirty = t.parent.isProjectionDirty),
          t.isSharedProjectionDirty ||
            (t.isSharedProjectionDirty = !!(
              t.isProjectionDirty ||
              t.parent.isProjectionDirty ||
              t.parent.isSharedProjectionDirty
            )),
          t.isTransformDirty ||
            (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function ri(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function rs(t) {
        t.clearSnapshot();
      }
      function rn(t) {
        t.clearMeasurements();
      }
      function rr(t) {
        (t.isLayoutDirty = !0), t.updateLayout();
      }
      function ro(t) {
        t.isLayoutDirty = !1;
      }
      function ra(t) {
        t.isAnimationBlocked &&
          t.layout &&
          !t.isLayoutDirty &&
          ((t.snapshot = t.dragSnapshot || t.layout), (t.isLayoutDirty = !0));
      }
      function rl(t) {
        t.relativeTarget &&
          t.relativeParent?.isLayoutDirty &&
          (t.currentAnimation
            ? (t.isLayoutDirty = !0)
            : ((t.targetDelta = void 0), t.removeRelativeTarget()));
      }
      function rh(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function ru(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function rd(t) {
        t.resolveTargetDelta();
      }
      function rc(t) {
        t.calcProjection();
      }
      function rp(t) {
        t.resetSkewAndRotation();
      }
      function rm(t) {
        t.removeLeadSnapshot();
      }
      function rf(t, e, i) {
        (t.translate = eq(e.translate, 0, i)),
          (t.scale = eq(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function rg(t, e, i, s) {
        (t.min = eq(e.min, i.min, s)), (t.max = eq(e.max, i.max, s));
      }
      function ry(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let rv = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rx = (t) =>
          "u" > typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        rw = rx("applewebkit/") && !rx("chrome/") ? Math.round : tj;
      function rT(t) {
        (t.min = rw(t.min)), (t.max = rw(t.max));
      }
      function rb(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nq(e) - nq(i))))
        );
      }
      function rS(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let rP = n7({
          attachResizeListener: (t, e) => s_(t, "resize", e),
          measureScroll: () => ({
            x:
              document.documentElement.scrollLeft ||
              document.body?.scrollLeft ||
              0,
            y:
              document.documentElement.scrollTop ||
              document.body?.scrollTop ||
              0,
          }),
          checkIsScrollRoot: () => !0,
        }),
        rA = { current: void 0 },
        rE = n7({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!rA.current) {
              let t = new rP({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (rA.current = t);
            }
            return rA.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function rM(t, e) {
        let i = s3(t),
          s = new AbortController();
        return [i, { passive: !0, ...e, signal: s.signal }, () => s.abort()];
      }
      function rV(t, e, i) {
        let { props: s } = t;
        t.animationState &&
          s.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let n = s["onHover" + i];
        n && tU.postRender(() => n(e, nr(e)));
      }
      let rC = (t, e) => !!e && (t === e || rC(t, e.parentElement)),
        rk = new WeakSet();
      function rD(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function rR(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      function rL(t) {
        return nn(t) && !(sG.x || sG.y);
      }
      let rj = new WeakSet();
      function rF(t, e, i) {
        let { props: s } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          s.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let n = s["onTap" + ("End" === i ? "" : i)];
        n && tU.postRender(() => n(e, nr(e)));
      }
      let rB = new WeakMap(),
        rI = new WeakMap(),
        rO = (t) => {
          let e = rB.get(t.target);
          e && e(t);
        },
        rU = (t) => {
          t.forEach(rO);
        },
        r$ = { some: 0, all: 1 },
        rW = (function (t, e) {
          if ("u" < typeof Proxy) return iA;
          let i = new Map(),
            s = (i, s) => iA(i, s, t, e);
          return new Proxy((t, e) => s(t, e), {
            get: (n, r) =>
              "create" === r
                ? s
                : (i.has(r) || i.set(r, iA(r, void 0, t, e)), i.get(r)),
          });
        })(
          {
            animation: {
              Feature: class extends iE {
                constructor(t) {
                  super(t),
                    t.animationState ||
                      (t.animationState = (function (t) {
                        let e = (e) =>
                            Promise.all(
                              e.map(({ animation: e, options: i }) =>
                                (function (t, e, i = {}) {
                                  return (
                                    t.notify("AnimationStart", e),
                                    (Array.isArray(e)
                                      ? Promise.all(e.map((e) => sN(t, e, i)))
                                      : "string" == typeof e
                                      ? sN(t, e, i)
                                      : Promise.all(
                                          s$(t, iM(t, e, i.custom), i)
                                        )
                                    ).then(() => {
                                      t.notify("AnimationComplete", e);
                                    })
                                  );
                                })(t, e, i)
                              )
                            ),
                          i = sX(),
                          s = !0,
                          n = !1;
                        function r(r) {
                          let {
                              props: o,
                              parent: a,
                              manuallyAnimateOnMount: l,
                            } = t,
                            h = s || n,
                            u = [],
                            d = new Set(),
                            c = {},
                            p = 1 / 0,
                            m = t;
                          do m = !1 !== m.props.inherit && m.parent;
                          while (m && !m.isControllingVariants);
                          if (
                            (sY.forEach((e, s) => {
                              var n, f;
                              let g = i[e],
                                y = o[e],
                                v = m && m.props[e],
                                x =
                                  void 0 !== y
                                    ? y
                                    : ex(v) || !1 === v
                                    ? v
                                    : void 0,
                                w = ex(x),
                                T = e === r ? g.isActive : null;
                              !1 === T && (p = s);
                              let b = w && void 0 === y && !(h && l);
                              if (
                                ((g.protectedKeys = { ...c }),
                                (!g.isActive && null === T) ||
                                  (!x && !g.prevProp) ||
                                  ev(x) ||
                                  "boolean" == typeof x)
                              )
                                return;
                              if ("exit" === e && g.isActive && !0 !== T) {
                                c = { ...c, ...g.prevResolvedValues };
                                return;
                              }
                              let S =
                                  ((n = g.prevProp),
                                  "string" == typeof (f = x)
                                    ? f !== n
                                    : !!Array.isArray(f) && !sz(f, n)),
                                P = S || (w && ((T && !b) || s > p)),
                                A = !1,
                                E = Array.isArray(x) ? x : [x],
                                M = {};
                              if (!1 !== T)
                                for (let i of E) {
                                  let {
                                    transition: s,
                                    transitionEnd: n,
                                    ...r
                                  } = iM(t, i, iV(t, e)) || {};
                                  M = { ...M, ...r, ...n };
                                }
                              let { prevResolvedValues: V } = g;
                              for (let e in { ...V, ...M }) {
                                if (e in c) continue;
                                let i = M[e],
                                  s = V[e],
                                  n =
                                    Array.isArray(i) && Array.isArray(s)
                                      ? !sz(i, s) || S
                                      : i !== s;
                                if (n && null == i) d.add(e);
                                else if (n || (void 0 !== i && d.has(e))) {
                                  (P = !0),
                                    d.delete(e) && (A = !0),
                                    (g.needsAnimating[e] = !0);
                                  let i = t.getValue(e);
                                  i && (i.liveStyle = !1);
                                } else g.protectedKeys[e] = !0;
                              }
                              if (
                                ((g.prevProp = x),
                                (g.prevResolvedValues = M),
                                g.isActive && (c = { ...c, ...M }),
                                P && (!(b && S) || A))
                              )
                                for (let i of E) {
                                  let s = { type: e };
                                  if (
                                    "string" == typeof i &&
                                    h &&
                                    l &&
                                    a?.enteringChildren
                                  ) {
                                    let e = iM(a, i)?.transition?.delayChildren;
                                    s.delay = sW(a.enteringChildren, t, e);
                                  }
                                  u.push({ animation: i, options: s });
                                }
                            }),
                            d.size)
                          ) {
                            let { initial: e } = o,
                              i = {},
                              s =
                                "boolean" != typeof e &&
                                iM(
                                  t,
                                  Array.isArray(e) ? e[0] : e,
                                  t.presenceContext?.custom
                                );
                            s && s.transition && (i.transition = s.transition),
                              d.forEach((n) => {
                                let r = t.getValue(n);
                                r && (r.liveStyle = !0);
                                let a = s && !Array.isArray(e) ? s[n] : void 0,
                                  l = t.getBaseTargetFromProps(o, n);
                                i[n] =
                                  (void 0 !== a
                                    ? a
                                    : void 0 === l || ts(l)
                                    ? void 0 === t.initialValues[n]
                                      ? t.baseTarget[n]
                                      : void 0
                                    : l) ?? null;
                              }),
                              u.push({ animation: i });
                          }
                          let f =
                            (h && t.blockInitialAnimation) ||
                            (s &&
                              !l &&
                              (!1 === o.initial || o.initial === o.animate));
                          return (
                            (s = n = !1),
                            !f && u.length ? e(u) : Promise.resolve()
                          );
                        }
                        return {
                          animateChanges: r,
                          setActive: function (e, s) {
                            if (i[e].isActive === s) return Promise.resolve();
                            t.variantChildren?.forEach((t) =>
                              t.animationState?.setActive(e, s)
                            ),
                              (i[e].isActive = s);
                            let n = r(e);
                            for (let t in i) i[t].protectedKeys = {};
                            return n;
                          },
                          setAnimateFunction: (i) => {
                            e = i(t);
                          },
                          getState: () => i,
                          reset: () => {
                            (i = sX()), (n = !0);
                          },
                        };
                      })(t));
                }
                updateAnimationControlsSubscription() {
                  let { animate: t } = this.node.getProps();
                  ev(t) && (this.unmountControls = t.subscribe(this.node));
                }
                mount() {
                  this.updateAnimationControlsSubscription();
                }
                update() {
                  let { animate: t } = this.node.getProps(),
                    { animate: e } = this.node.prevProps || {};
                  t !== e && this.updateAnimationControlsSubscription();
                }
                unmount() {
                  this.node.animationState.reset(), this.unmountControls?.();
                }
              },
            },
            exit: {
              Feature: class extends iE {
                constructor() {
                  super(...arguments), (this.id = sH++);
                }
                update() {
                  let {
                    presenceContext: t,
                    prevPresenceContext: e,
                    animationState: i,
                  } = this.node;
                  if (!t || !i) return;
                  let { isPresent: s, onExitComplete: n } = t,
                    r = e?.isPresent;
                  if (s === r) return;
                  if (s && !1 === r) {
                    if (!0 === this.exit) {
                      let { initial: t } = this.node.getProps();
                      if (t && !Array.isArray(t)) {
                        let {
                          transition: e,
                          transitionEnd: i,
                          ...s
                        } = iM(this.node, t) || {};
                        for (let t in s) this.node.getValue(t)?.jump(s[t]);
                      }
                      (this.node.blockInitialAnimation = !1),
                        i.reset(),
                        i.animateChanges();
                    } else i.setActive("exit", !1);
                    this.exit = void 0;
                    return;
                  }
                  let o = (this.exit = i.setActive("exit", !s));
                  n &&
                    !s &&
                    o.then(() => {
                      this.exit === o && ((this.exit = !0), n(this.id));
                    });
                }
                mount() {
                  let { register: t, onExitComplete: e } =
                    this.node.presenceContext || {};
                  e && e(this.id), t && (this.unmount = t(this.id));
                }
                unmount() {}
              },
            },
            inView: {
              Feature: class extends iE {
                constructor() {
                  super(...arguments),
                    (this.hasEnteredView = !1),
                    (this.isInView = !1);
                }
                startObserver() {
                  var t;
                  let e;
                  this.stopObserver?.();
                  let { viewport: i = {} } = this.node.getProps(),
                    { root: s, margin: n, amount: r = "some", once: o } = i,
                    a = {
                      root: s ? s.current : void 0,
                      rootMargin: n,
                      threshold: "number" == typeof r ? r : r$[r],
                    },
                    l = (t) => {
                      let { isIntersecting: e } = t;
                      if (
                        this.isInView === e ||
                        ((this.isInView = e), o && !e && this.hasEnteredView)
                      )
                        return;
                      e && (this.hasEnteredView = !0),
                        this.node.animationState &&
                          this.node.animationState.setActive("whileInView", e);
                      let { onViewportEnter: i, onViewportLeave: s } =
                          this.node.getProps(),
                        n = e ? i : s;
                      n && n(t);
                    };
                  this.stopObserver =
                    ((t = this.node.current),
                    (e = (function ({ root: t, ...e }) {
                      let i = t || document;
                      rI.has(i) || rI.set(i, {});
                      let s = rI.get(i),
                        n = JSON.stringify(e);
                      return (
                        s[n] ||
                          (s[n] = new IntersectionObserver(rU, {
                            root: t,
                            ...e,
                          })),
                        s[n]
                      );
                    })(a)),
                    rB.set(t, l),
                    e.observe(t),
                    () => {
                      rB.delete(t), e.unobserve(t);
                    });
                }
                mount() {
                  this.startObserver();
                }
                update() {
                  if ("u" < typeof IntersectionObserver) return;
                  let { props: t, prevProps: e } = this.node;
                  ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (i) => t[i] !== e[i];
                    })(t, e)
                  ) && this.startObserver();
                }
                unmount() {
                  this.stopObserver?.(),
                    (this.hasEnteredView = !1),
                    (this.isInView = !1);
                }
              },
            },
            tap: {
              Feature: class extends iE {
                mount() {
                  let { current: t } = this.node;
                  if (!t) return;
                  let { globalTapTarget: e, propagate: i } = this.node.props;
                  this.unmount = (function (t, e, i = {}) {
                    let [s, n, r] = rM(t, i),
                      o = (t) => {
                        let s = t.currentTarget;
                        if (!rL(t) || rj.has(t)) return;
                        rk.add(s), i.stopPropagation && rj.add(t);
                        let r = e(s, t),
                          o = { ...n, capture: !0 },
                          a = (t, e) => {
                            window.removeEventListener("pointerup", l, o),
                              window.removeEventListener("pointercancel", h, o),
                              rk.has(s) && rk.delete(s),
                              rL(t) &&
                                "function" == typeof r &&
                                r(t, { success: e });
                          },
                          l = (t) => {
                            a(
                              t,
                              s === window ||
                                s === document ||
                                i.useGlobalTarget ||
                                rC(s, t.target)
                            );
                          },
                          h = (t) => {
                            a(t, !1);
                          };
                        window.addEventListener("pointerup", l, o),
                          window.addEventListener("pointercancel", h, o);
                      };
                    return (
                      s.forEach((t) => {
                        ((i.useGlobalTarget ? window : t).addEventListener(
                          "pointerdown",
                          o,
                          n
                        ),
                        u(t)) &&
                          (t.addEventListener("focus", (t) =>
                            ((t, e) => {
                              let i = t.currentTarget;
                              if (!i) return;
                              let s = rD(() => {
                                if (rk.has(i)) return;
                                rR(i, "down");
                                let t = rD(() => {
                                  rR(i, "up");
                                });
                                i.addEventListener("keyup", t, e),
                                  i.addEventListener(
                                    "blur",
                                    () => rR(i, "cancel"),
                                    e
                                  );
                              });
                              i.addEventListener("keydown", s, e),
                                i.addEventListener(
                                  "blur",
                                  () => i.removeEventListener("keydown", s),
                                  e
                                );
                            })(t, n)
                          ),
                          ni.has(t.tagName) ||
                            !0 === t.isContentEditable ||
                            t.hasAttribute("tabindex") ||
                            (t.tabIndex = 0));
                      }),
                      r
                    );
                  })(
                    t,
                    (t, e) => (
                      rF(this.node, e, "Start"),
                      (t, { success: e }) =>
                        rF(this.node, t, e ? "End" : "Cancel")
                    ),
                    { useGlobalTarget: e, stopPropagation: i?.tap === !1 }
                  );
                }
                unmount() {}
              },
            },
            focus: {
              Feature: class extends iE {
                constructor() {
                  super(...arguments), (this.isActive = !1);
                }
                onFocus() {
                  let t = !1;
                  try {
                    t = this.node.current.matches(":focus-visible");
                  } catch (e) {
                    t = !0;
                  }
                  t &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !0),
                    (this.isActive = !0));
                }
                onBlur() {
                  this.isActive &&
                    this.node.animationState &&
                    (this.node.animationState.setActive("whileFocus", !1),
                    (this.isActive = !1));
                }
                mount() {
                  this.unmount = iR(
                    s_(this.node.current, "focus", () => this.onFocus()),
                    s_(this.node.current, "blur", () => this.onBlur())
                  );
                }
                unmount() {}
              },
            },
            hover: {
              Feature: class extends iE {
                mount() {
                  let { current: t } = this.node;
                  t &&
                    (this.unmount = (function (t, e, i = {}) {
                      let [s, n, r] = rM(t, i);
                      return (
                        s.forEach((t) => {
                          let i,
                            s = !1,
                            r = !1,
                            o = (e) => {
                              i && (i(e), (i = void 0)),
                                t.removeEventListener("pointerleave", l);
                            },
                            a = (t) => {
                              (s = !1),
                                window.removeEventListener("pointerup", a),
                                window.removeEventListener("pointercancel", a),
                                r && ((r = !1), o(t));
                            },
                            l = (t) => {
                              if ("touch" !== t.pointerType) {
                                if (s) {
                                  r = !0;
                                  return;
                                }
                                o(t);
                              }
                            };
                          t.addEventListener(
                            "pointerenter",
                            (s) => {
                              if ("touch" === s.pointerType || sG.x || sG.y)
                                return;
                              r = !1;
                              let o = e(t, s);
                              "function" == typeof o &&
                                ((i = o),
                                t.addEventListener("pointerleave", l, n));
                            },
                            n
                          ),
                            t.addEventListener(
                              "pointerdown",
                              () => {
                                (s = !0),
                                  window.addEventListener("pointerup", a, n),
                                  window.addEventListener(
                                    "pointercancel",
                                    a,
                                    n
                                  );
                              },
                              n
                            );
                        }),
                        r
                      );
                    })(
                      t,
                      (t, e) => (
                        rV(this.node, e, "Start"),
                        (t) => rV(this.node, t, "End")
                      )
                    ));
                }
                unmount() {}
              },
            },
            pan: {
              Feature: class extends iE {
                constructor() {
                  super(...arguments), (this.removePointerDownListener = tj);
                }
                onPointerDown(t) {
                  this.session = new nu(t, this.createPanHandlers(), {
                    transformPagePoint: this.node.getTransformPagePoint(),
                    contextWindow: na(this.node),
                  });
                }
                createPanHandlers() {
                  let {
                    onPanSessionStart: t,
                    onPanStart: e,
                    onPan: i,
                    onPanEnd: s,
                  } = this.node.getProps();
                  return {
                    onSessionStart: nS(t),
                    onStart: nS(e),
                    onMove: nS(i),
                    onEnd: (t, e) => {
                      delete this.session, s && tU.postRender(() => s(t, e));
                    },
                  };
                }
                mount() {
                  this.removePointerDownListener = no(
                    this.node.current,
                    "pointerdown",
                    (t) => this.onPointerDown(t)
                  );
                }
                update() {
                  this.session &&
                    this.session.updateHandlers(this.createPanHandlers());
                }
                unmount() {
                  this.removePointerDownListener(),
                    this.session && this.session.end();
                }
              },
            },
            drag: {
              Feature: class extends iE {
                constructor(t) {
                  super(t),
                    (this.removeGroupControls = tj),
                    (this.removeListeners = tj),
                    (this.controls = new nw(t));
                }
                mount() {
                  let { dragControls: t } = this.node.getProps();
                  t && (this.removeGroupControls = t.subscribe(this.controls)),
                    (this.removeListeners = this.controls.addListeners() || tj);
                }
                update() {
                  let { dragControls: t } = this.node.getProps(),
                    { dragControls: e } = this.node.prevProps || {};
                  t !== e &&
                    (this.removeGroupControls(),
                    t &&
                      (this.removeGroupControls = t.subscribe(this.controls)));
                }
                unmount() {
                  this.removeGroupControls(),
                    this.removeListeners(),
                    this.controls.isDragging || this.controls.endPanSession();
                }
              },
              ProjectionNode: rE,
              MeasureLayout: nV,
            },
            layout: { ProjectionNode: rE, MeasureLayout: nV },
          },
          (t, e) =>
            e.isSVG ?? ie(t)
              ? new e_(e)
              : new e8(e, { allowProjection: t !== n.Fragment })
        );
      t.s(["f", 0, rW], 46932);
    },
  ]);
})();
