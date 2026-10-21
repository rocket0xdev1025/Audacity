(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    10723,
    (e) => {
      var t = e.i(43476),
        r = e.i(70703),
        n = e.i(71645),
        o = e.i(66065),
        i = e.i(24639),
        a = e.i(16480);
      let l = (0, r.default)(() => e.A(73668).then((e) => e.CopiedStamp), {
        loadableGenerated: { modules: [61203] },
        ssr: !1,
      });
      async function s(e) {
        try {
          await navigator.clipboard.writeText(e);
        } catch {
          let t = document.createElement("textarea");
          (t.value = e),
            t.setAttribute("readonly", ""),
            (t.style.position = "fixed"),
            (t.style.opacity = "0"),
            document.body.appendChild(t),
            t.select(),
            document.execCommand("copy"),
            t.remove();
        }
      }
      e.s([
        "ContractBar",
        0,
        function ({ className: e = "" }) {
          let r = o.f.contractAddress,
            [u, d] = (0, n.useState)(0),
            c = (0, n.useRef)(void 0);
          if (
            ((0, n.useEffect)(() => () => window.clearTimeout(c.current), []),
            !o.f.launched)
          )
            return (0, t.jsx)("div", {
              className: `relative ${e}`,
              children: (0, t.jsxs)("div", {
                className:
                  "flex w-full cursor-not-allowed select-none items-center gap-3 border border-fog/15 bg-black/70 py-2 pl-2 pr-3 backdrop-blur-md",
                children: [
                  (0, t.jsx)("span", {
                    className:
                      "shrink-0 bg-dacity px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black",
                    children: "CA",
                  }),
                  (0, t.jsx)("span", {
                    className:
                      "min-w-0 flex-1 truncate text-xs font-semibold tracking-wide text-fog/70 md:text-[13px]",
                    children: (0, t.jsx)(i.f, {
                      prefix: "Contract address drops in ",
                      done: "Contract address dropping now",
                    }),
                  }),
                  (0, t.jsx)(a.F, {
                    className: "h-3.5 w-3.5 shrink-0 text-fog/50",
                  }),
                ],
              }),
            });
          let f = async () => {
            await s(r),
              d((e) => e + 1),
              window.clearTimeout(c.current),
              (c.current = window.setTimeout(() => d(0), 1700));
          };
          return (0, t.jsxs)("div", {
            className: `relative ${e}`,
            children: [
              (0, t.jsxs)("button", {
                type: "button",
                onClick: f,
                "aria-label": `Copy contract address ${r}`,
                className:
                  "group flex w-full items-center gap-3 border border-fog/15 bg-black/70 py-2 pl-2 pr-3 text-left backdrop-blur-md transition-colors hover:border-dacity",
                children: [
                  (0, t.jsx)("span", {
                    className:
                      "shrink-0 bg-dacity px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black",
                    children: "CA",
                  }),
                  (0, t.jsxs)("span", {
                    className:
                      "min-w-0 flex-1 truncate text-xs font-semibold tracking-wide text-fog/90 md:text-[13px]",
                    children: [
                      (0, t.jsx)("span", {
                        className: "md:hidden",
                        children: `${r.slice(0, 6)}…${r.slice(-6)}`,
                      }),
                      (0, t.jsx)("span", {
                        className: "hidden md:inline",
                        children: r,
                      }),
                    ],
                  }),
                  (0, t.jsxs)("span", {
                    className:
                      "flex shrink-0 items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-fog/60 transition-colors group-hover:text-dacity",
                    children: [(0, t.jsx)(a.D, {}), "Copy"],
                  }),
                ],
              }),
              (0, t.jsx)(l, { stamp: u }),
              (0, t.jsx)("span", {
                className: "sr-only",
                "aria-live": "polite",
                children: u > 0 ? "Contract address copied" : "",
              }),
            ],
          });
        },
      ]);
    },
    24639,
    (e) => {
      let t;
      var r = e.i(43476),
        n = e.i(71645);
      let o = Date.parse(e.i(66065).f.launchAt),
        i = null,
        a = !1,
        l = new Set();
      function s() {
        (i = Date.now()),
          l.forEach((e) => e()),
          i >= o &&
            (function () {
              if (a) return;
              a = !0;
              let e = async () => {
                try {
                  let e = await fetch(window.location.pathname, {
                      cache: "no-store",
                    }),
                    t = await e.text();
                  if (e.ok && t.length > 1e3 && !t.includes("data-prelaunch"))
                    return void window.location.reload();
                } catch {}
                window.setTimeout(e, 4e3);
              };
              window.setTimeout(e, 1e3 + 3e3 * Math.random());
            })();
      }
      function u(e) {
        return (
          l.add(e),
          void 0 === t && (s(), (t = window.setInterval(s, 1e3))),
          () => {
            l.delete(e), l.size || (window.clearInterval(t), (t = void 0));
          }
        );
      }
      e.s([
        "f",
        0,
        function ({ prefix: e = "", done: t = "Boarding now" }) {
          let a,
            l,
            s,
            d,
            c = (0, n.useSyncExternalStore)(
              u,
              () => i,
              () => null
            ),
            f =
              null === c
                ? `${e}--:--`
                : c >= o
                ? t
                : `${e}${
                    ((l = Math.floor(
                      (a = Math.max(0, Math.ceil((o - c) / 1e3))) / 3600
                    )),
                    (s = String(Math.floor((a % 3600) / 60)).padStart(2, "0")),
                    (d = String(a % 60).padStart(2, "0")),
                    l > 0 ? `${l}:${s}:${d}` : `${s}:${d}`)
                  }`;
          return (0, r.jsx)("span", {
            "data-prelaunch": !0,
            className: "tabular-nums",
            children: f,
          });
        },
      ]);
    },
    16480,
    (e) => {
      var t = e.i(43476);
      e.s([
        "u",
        0,
        ({ className: e = "h-4 w-4" }) =>
          (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.4",
            strokeLinecap: "square",
            className: e,
            "aria-hidden": !0,
            children: (0, t.jsx)("path", { d: "M20 12H5M11 6l-6 6 6 6" }),
          }),
        "G",
        0,
        ({ className: e = "h-4 w-4" }) =>
          (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.4",
            strokeLinecap: "square",
            className: e,
            "aria-hidden": !0,
            children: (0, t.jsx)("path", { d: "M4 12h15M13 6l6 6-6 6" }),
          }),
        "S",
        0,
        ({ className: e = "h-4 w-4" }) =>
          (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.4",
            strokeLinecap: "square",
            className: e,
            "aria-hidden": !0,
            children: (0, t.jsx)("path", { d: "M7 17 17 7M8 7h9v9" }),
          }),
        "U",
        0,
        ({ className: e = "h-5 w-5" }) =>
          (0, t.jsx)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.4",
            strokeLinecap: "square",
            className: e,
            "aria-hidden": !0,
            children: (0, t.jsx)("path", { d: "M5 5l14 14M19 5 5 19" }),
          }),
        "D",
        0,
        ({ className: e = "h-3.5 w-3.5" }) =>
          (0, t.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            className: e,
            "aria-hidden": !0,
            children: [
              (0, t.jsx)("rect", { x: "8", y: "8", width: "12", height: "12" }),
              (0, t.jsx)("path", { d: "M16 8V4H4v12h4" }),
            ],
          }),
        "F",
        0,
        ({ className: e = "h-3.5 w-3.5" }) =>
          (0, t.jsxs)("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.4",
            className: e,
            "aria-hidden": !0,
            children: [
              (0, t.jsx)("rect", {
                x: "5",
                y: "11",
                width: "14",
                height: "10",
              }),
              (0, t.jsx)("path", { d: "M8 11V7a4 4 0 0 1 8 0v4" }),
            ],
          }),
      ]);
    },
    66065,
    (e) => {
      let t,
        r = "HJS1ncCpUDfzXNpM8MwnTHisdPrBqMCbnrQ2nsL8pump",
        n = "DwaDMcQErLtMoqWZzjxxaXewN7YCVV5CBhFsBfYU7geD",
        o = "9nxBcB5yJEP1emiXDoXju6WQLcwY4gvgUJSfafm2vvfz",
        i = "H9HHyRmRmqJkyGRahvUtpTXjXvgWpHo4K2RYA4ocHLMM",
        a = (e) => `https://solscan.io/account/${e}`,
        l = {
          name: "Dacity Coin",
          ticker: "$AUDACITY",
          url: "https://dacitycoins.com",
          contractAddress: r,
          supply: "1,000,000,000",
          launched: !0,
          launchLabel: "Live on pump.fun since 16 Oct 2026",
          launchedAt: "2026-10-16T21:24:00Z",
          launchAt: "2026-10-16T21:20:00Z",
          checkedOn: "2026-10-17",
          devWallet: {
            address: n,
            share: "3.42%",
            amount: "34,199,203",
            solscan: a(n),
          },
          lock: {
            provider: "Jupiter Lock",
            share: "18.37%",
            amount: "183,694,539",
            dailyUnlock: "6,123,151",
            escrow: o,
            recipient: i,
            cliff: "2026-11-19",
            end: "2026-12-19",
            vestingDays: 30,
            links: {
              jupiter: `https://lock.jup.ag/escrow/${o}`,
              solscan: a(o),
              recipient: a(i),
            },
          },
          links: {
            pumpfun: `https://pump.fun/coin/${r}`,
            jupiter: `https://jup.ag/swap/SOL-${r}`,
            chart: `https://dexscreener.com/solana/${r}`,
            solscan: ((t = r), `https://solscan.io/token/${t}`),
            x: "https://x.com/TheDacityCoin",
            xHandle: "@TheDacityCoin",
            xChat:
              "https://x.com/i/chat/group_join/g2112297128844251255/9v4DJ9mp5A",
            telegram: null,
            telegramHandle: "Opens soon",
            discord: null,
          },
          verification: { google: "", bing: "" },
          year: 2026,
        };
      l.links.x,
        l.links.pumpfun,
        l.links.chart,
        l.links.solscan,
        e.s(["f", 0, l]);
    },
    85437,
    (e, t, r) => {
      e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "Image", {
          enumerable: !0,
          get: function () {
            return x;
          },
        });
      let n = e.r(55682),
        o = e.r(90809),
        i = e.r(43476),
        a = o._(e.r(71645)),
        l = n._(e.r(74080)),
        s = n._(e.r(25633)),
        u = e.r(8927),
        d = e.r(65856),
        c = e.r(49381),
        f = n._(e.r(1948)),
        p = e.r(18581);
      function m(e, t, r, n, o, i, a) {
        let l = e?.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), r?.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                n?.current && n.current(e);
              }
            }));
      }
      function h(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let g = "u" < typeof window ? a.useEffect : a.useLayoutEffect,
        y = (0, a.forwardRef)(
          (
            {
              src: e,
              srcSet: t,
              sizes: r,
              height: n,
              width: o,
              decoding: l,
              className: s,
              style: u,
              fetchPriority: d,
              placeholder: c,
              loading: f,
              unoptimized: y,
              fill: b,
              onLoadRef: x,
              onLoadingCompleteRef: w,
              setBlurComplete: v,
              setShowAltText: j,
              sizesInput: _,
              onLoad: P,
              onError: C,
              ...S
            },
            k
          ) => {
            let M = (0, a.useRef)(!1),
              O = (0, a.useRef)(null);
            g(() => {
              let { current: e } = M,
                { current: t } = O;
              e ||
                null === t ||
                (C && (t.src = t.src),
                t.complete && m(t, c, x, w, v, y, _),
                (M.current = !0));
            }, [e, c, x, w, C, y, _]);
            let $ = (0, p.useMergedRef)(k, O);
            return (0, i.jsx)("img", {
              ...S,
              ...h(d),
              loading: f,
              width: o,
              height: n,
              decoding: l,
              "data-nimg": b ? "fill" : "1",
              className: s,
              style: u,
              sizes: r,
              srcSet: t,
              src: e,
              ref: $,
              onLoad: (e) => {
                m(e.currentTarget, c, x, w, v, y, _);
              },
              onError: (e) => {
                j(!0), "empty" !== c && v(!0), C && C(e);
              },
            });
          }
        );
      function b({ isAppRouter: e, imgAttributes: t }) {
        let r = {
          as: "image",
          imageSrcSet: t.srcSet,
          imageSizes: t.sizes,
          crossOrigin: t.crossOrigin,
          referrerPolicy: t.referrerPolicy,
          ...h(t.fetchPriority),
        };
        return e && l.default.preload
          ? (l.default.preload(t.src, r), null)
          : (0, i.jsx)(s.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: t.srcSet ? void 0 : t.src, ...r },
                "__nimg-" + t.src + t.srcSet + t.sizes
              ),
            });
      }
      let x = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(d.RouterContext),
          n = (0, c.useImageConfig)(),
          { onLoad: o, onLoadingComplete: l } = e,
          s = (0, a.useRef)(o);
        (0, a.useEffect)(() => {
          s.current = o;
        }, [o]);
        let p = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          p.current = l;
        }, [l]);
        let [m, h] = (0, a.useState)(!1),
          [g, x] = (0, a.useState)(!1),
          { props: w, meta: v } = (0, u.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: n,
            blurComplete: m,
            showAltText: g,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(y, {
              ...w,
              unoptimized: v.unoptimized,
              placeholder: v.placeholder,
              fill: v.fill,
              onLoadRef: s,
              onLoadingCompleteRef: p,
              setBlurComplete: h,
              setShowAltText: x,
              sizesInput: e.sizes,
              ref: t,
            }),
            v.preload
              ? (0, i.jsx)(b, { isAppRouter: !r, imgAttributes: w })
              : null,
          ],
        });
      });
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    49381,
    (e, t, r) => {
      e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "useImageConfig", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = e.r(71645),
        o = e.r(87690),
        i = e.r(18556),
        a = {
          deviceSizes: [640, 828, 1080, 1280, 1600, 1920, 2560],
          imageSizes: [32, 48, 64, 96, 128, 256, 384],
          qualities: [75],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        };
      function l() {
        let e = (0, n.useContext)(i.ImageConfigContext);
        return (0, o.prepareImageConfig)(a, e);
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    18581,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = e.r(71645);
      function o(e, t) {
        let r = (0, n.useRef)(null),
          o = (0, n.useRef)(null);
        return (0, n.useCallback)(
          (n) => {
            if (null === n) {
              let e = r.current;
              e && ((r.current = null), e());
              let t = o.current;
              t && ((o.current = null), t());
            } else e && (r.current = i(e, n)), t && (o.current = i(t, n));
          },
          [e, t]
        );
      }
      function i(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    90317,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = {
        bindSnapshot: function () {
          return d;
        },
        createAsyncLocalStorage: function () {
          return s;
        },
        createSnapshot: function () {
          return c;
        },
        getOrCreateGlobalAsyncLocalStorage: function () {
          return u;
        },
      };
      for (var o in n)
        Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
      let i = Error(
        "Invariant: AsyncLocalStorage accessed in runtime where it is not available"
      );
      class a {
        disable() {
          throw i;
        }
        getStore() {}
        run() {
          throw i;
        }
        exit() {
          throw i;
        }
        enterWith() {
          throw i;
        }
        static bind(e) {
          return e;
        }
      }
      let l = "u" > typeof globalThis && globalThis.AsyncLocalStorage;
      function s() {
        return l ? new l() : new a();
      }
      function u(e) {
        let t = Symbol.for(`@next/${e}@16.4.2`),
          r = globalThis;
        return (r[t] ??= s());
      }
      function d(e) {
        return l ? l.bind(e) : a.bind(e);
      }
      function c() {
        return l
          ? l.snapshot()
          : function (e, ...t) {
              return e(...t);
            };
      }
    },
    42344,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "workAsyncStorageInstance", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (0, e.r(90317).getOrCreateGlobalAsyncLocalStorage)(
        "work-async-storage"
      );
    },
    63599,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "workAsyncStorage", {
          enumerable: !0,
          get: function () {
            return n.workAsyncStorageInstance;
          },
        });
      let n = e.r(42344);
    },
    70703,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = e.r(55682)._(e.r(69093));
      function o(e, t) {
        let r = {};
        "function" == typeof e && (r.loader = e);
        let o = { ...r, ...t };
        return (0, n.default)({ ...o, modules: o.loadableGenerated?.modules });
      }
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    9885,
    (e, t, r) => {
      function n(e) {
        return e
          .split("/")
          .map((e) => encodeURIComponent(e))
          .join("/");
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "encodeURIPath", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    70965,
    (e, t, r) => {
      function n(e, t) {
        let r = e || 75;
        return t?.qualities?.length
          ? t.qualities.reduce(
              (e, t) => (Math.abs(t - r) < Math.abs(e - r) ? t : e),
              t.qualities[0]
            )
          : r;
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "findClosestQuality", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8927,
    (e, t, r) => {
      e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = e.r(43369),
        o = e.r(88143),
        i = ["-moz-initial", "fill", "none", "scale-down", void 0];
      function a(e) {
        return void 0 !== e.default;
      }
      function l(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : 0 / 0
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : 0 / 0;
      }
      function s(
        {
          src: e,
          sizes: t,
          unoptimized: r = !1,
          priority: u = !1,
          preload: d = !1,
          loading: c,
          className: f,
          quality: p,
          width: m,
          height: h,
          fill: g = !1,
          style: y,
          overrideSrc: b,
          onLoad: x,
          onLoadingComplete: w,
          placeholder: v = "empty",
          blurDataURL: j,
          fetchPriority: _,
          decoding: P = "async",
          layout: C,
          objectFit: S,
          objectPosition: k,
          lazyBoundary: M,
          lazyRoot: O,
          ...$
        },
        R
      ) {
        var A;
        let I,
          E,
          { imgConf: L, showAltText: T, blurComplete: B, defaultLoader: D } = R;
        if (void 0 === D)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let z = $.loader || D;
        delete $.loader, delete $.srcSet;
        let N = "__next_img_default" in z;
        if (N) {
          if ("custom" === L.loader)
            throw Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`);
        } else {
          let e = z;
          z = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (C) {
          "fill" === C && (g = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          e && (y = { ...y, ...e });
          let r = { responsive: "100vw", fill: "100vw" }[C];
          r && !t && (t = r);
        }
        let U = "",
          W = l(m),
          q = l(h);
        if ((A = e) && "object" == typeof A && (a(A) || void 0 !== A.src)) {
          let t = a(e) ? e.default : e;
          if (!t.src)
            throw Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(
                t
              )}`
            );
          if (!t.height || !t.width)
            throw Error(
              `An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(
                t
              )}`
            );
          if (
            ((I = t.blurWidth),
            (E = t.blurHeight),
            (j = j || t.blurDataURL),
            (U = t.src),
            !g)
          )
            if (W || q) {
              if (W && !q) {
                let e = W / t.width;
                q = Math.round(t.height * e);
              } else if (!W && q) {
                let e = q / t.height;
                W = Math.round(t.width * e);
              }
            } else (W = t.width), (q = t.height);
        }
        let F = !u && !d && ("lazy" === c || void 0 === c);
        (!(e = "string" == typeof e ? e : U) ||
          e.startsWith("data:") ||
          e.startsWith("blob:")) &&
          ((r = !0), (F = !1)),
          L.unoptimized && (r = !0),
          N &&
            !L.dangerouslyAllowSVG &&
            e.split("?", 1)[0].endsWith(".svg") &&
            (r = !0);
        let G = l(p),
          H = Object.assign(
            g
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: S,
                  objectPosition: k,
                }
              : {},
            T ? {} : { color: "transparent" },
            y
          ),
          V =
            B || "empty" === v
              ? null
              : "blur" === v
              ? `url("data:image/svg+xml;charset=utf-8,${(0, o.getImageBlurSvg)(
                  {
                    widthInt: W,
                    heightInt: q,
                    blurWidth: I,
                    blurHeight: E,
                    blurDataURL: j || "",
                    objectFit: H.objectFit,
                  }
                )}")`
              : `url("${v}")`,
          J = i.includes(H.objectFit)
            ? "fill" === H.objectFit
              ? "100% 100%"
              : "cover"
            : H.objectFit,
          X = V
            ? {
                backgroundSize: J,
                backgroundPosition: H.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V,
              }
            : {},
          Y = (function ({
            config: e,
            src: t,
            unoptimized: r,
            width: o,
            quality: i,
            sizes: a,
            loader: l,
          }) {
            if (r) {
              if (t.startsWith("/") && !t.startsWith("//")) {
                let e = (0, n.getDeploymentId)();
                if (
                  t.includes("/_next/static/immutable") &&
                  !(0, n.getAssetToken)()
                )
                  e = void 0;
                else if (e) {
                  let r = t.indexOf("?");
                  if (-1 !== r) {
                    let n = new URLSearchParams(t.slice(r + 1));
                    n.get("dpl") ||
                      (n.append("dpl", e),
                      (t = t.slice(0, r) + "?" + n.toString()));
                  } else t += `?dpl=${e}`;
                }
              }
              return { src: t, srcSet: void 0, sizes: void 0 };
            }
            let { widths: s, kind: u } = (function (
                { deviceSizes: e, allSizes: t },
                r,
                n
              ) {
                if (n) {
                  let r = /(^|\s)(1?\d?\d)vw/g,
                    o = [];
                  for (let e; (e = r.exec(n)); ) o.push(parseInt(e[2]));
                  if (o.length) {
                    let r = 0.01 * Math.min(...o);
                    return {
                      widths: t.filter((t) => t >= e[0] * r),
                      kind: "w",
                    };
                  }
                  return { widths: t, kind: "w" };
                }
                return "number" != typeof r
                  ? { widths: e, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [r, 2 * r].map(
                            (e) => t.find((t) => t >= e) || t[t.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(e, o, a),
              d = s.length - 1;
            return {
              sizes: a || "w" !== u ? a : "100vw",
              srcSet: s
                .map(
                  (r, n) =>
                    `${l({ config: e, src: t, quality: i, width: r })} ${
                      "w" === u ? r : n + 1
                    }${u}`
                )
                .join(", "),
              src: l({ config: e, src: t, quality: i, width: s[d] }),
            };
          })({
            config: L,
            src: e,
            unoptimized: r,
            width: W,
            quality: G,
            sizes: t,
            loader: z,
          }),
          Q = F ? "lazy" : c;
        return {
          props: {
            ...$,
            loading: Q,
            fetchPriority: _,
            width: W,
            height: q,
            decoding: P,
            className: f,
            style: { ...H, ...X },
            sizes: Y.sizes,
            srcSet: Y.srcSet,
            src: b || Y.src,
          },
          meta: { unoptimized: r, preload: d || u, placeholder: v, fill: g },
        };
      }
    },
    25633,
    (e, t, r) => {
      e.i(47167), Object.defineProperty(r, "__esModule", { value: !0 });
      var n = {
        default: function () {
          return h;
        },
        defaultHead: function () {
          return c;
        },
      };
      for (var o in n)
        Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
      let i = e.r(55682),
        a = e.r(90809),
        l = e.r(43476),
        s = a._(e.r(71645)),
        u = i._(e.r(98879)),
        d = e.r(42732);
      function c() {
        return [
          (0, l.jsx)("meta", { charSet: "utf-8" }, "charset"),
          (0, l.jsx)(
            "meta",
            { name: "viewport", content: "width=device-width" },
            "viewport"
          ),
        ];
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === s.default.Fragment
          ? e.concat(
              s.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e) {
        let t, r, n, o;
        return e
          .reduce(f, [])
          .reverse()
          .concat(c().reverse())
          .filter(
            ((t = new Set()),
            (r = new Set()),
            (n = new Set()),
            (o = {}),
            (e) => {
              let i = !0,
                a = !1;
              if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? (i = !1) : t.add(r);
              }
              switch (e.type) {
                case "title":
                case "base":
                  r.has(e.type) ? (i = !1) : r.add(e.type);
                  break;
                case "meta":
                  for (let t = 0, r = p.length; t < r; t++) {
                    let r = p[t];
                    if (e.props.hasOwnProperty(r))
                      if ("charSet" === r) n.has(r) ? (i = !1) : n.add(r);
                      else {
                        let t = e.props[r],
                          n = o[r] || new Set();
                        ("name" !== r || !a) && n.has(t)
                          ? (i = !1)
                          : (n.add(t), (o[r] = n));
                      }
                  }
              }
              return i;
            })
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            return s.default.cloneElement(e, { key: r });
          });
      }
      let h = function ({ children: e }) {
        let t = (0, s.useContext)(d.HeadManagerContext);
        return (0, l.jsx)(u.default, {
          reduceComponentsToState: m,
          headManager: t,
          children: e,
        });
      };
      ("function" == typeof r.default ||
        ("object" == typeof r.default && null !== r.default)) &&
        void 0 === r.default.__esModule &&
        (Object.defineProperty(r.default, "__esModule", { value: !0 }),
        Object.assign(r.default, r),
        (t.exports = r.default));
    },
    88143,
    (e, t, r) => {
      function n({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: o,
        blurDataURL: i,
        objectFit: a,
      }) {
        let l = r ? 40 * r : e,
          s = o ? 40 * o : t,
          u = l && s ? `viewBox='0 0 ${l} ${s}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${
          u
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none"
        }' style='filter: url(%23b);' href='${i}'/%3E%3C/svg%3E`;
      }
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    18556,
    (e, t, r) => {
      e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = e.r(55682)._(e.r(71645)),
        o = e.r(87690),
        i = n.default.createContext(o.imageConfigDefault);
    },
    87690,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = {
        VALID_LOADERS: function () {
          return i;
        },
        imageConfigDefault: function () {
          return u;
        },
        prepareImageConfig: function () {
          return s;
        },
      };
      for (var o in n)
        Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
      let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        a = {},
        l = new WeakMap();
      function s(e, t) {
        let r = e ?? a,
          n = t ?? a,
          o = l.get(r);
        if (o) {
          let e = o.get(n);
          if (e) return e;
        }
        let i = e || t || u,
          s = [...i.deviceSizes].sort((e, t) => e - t),
          d = [...i.imageSizes],
          c = {
            deviceSizes: s,
            imageSizes: d,
            allSizes: [...s, ...d].sort((e, t) => e - t),
            qualities:
              void 0 === i.qualities
                ? void 0
                : [...i.qualities].sort((e, t) => e - t),
            path: i.path,
            loader: i.loader,
            dangerouslyAllowSVG: i.dangerouslyAllowSVG,
            unoptimized: i.unoptimized,
            domains: i.domains,
            remotePatterns: i.remotePatterns,
            localPatterns:
              "u" < typeof window && void 0 !== t
                ? t.localPatterns
                : i.localPatterns,
            output: i.output,
          };
        return o || ((o = new WeakMap()), l.set(r, o)), o.set(n, c), c;
      }
      let u = {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [32, 48, 64, 96, 128, 256, 384],
        path: "/_next/image",
        loader: "default",
        loaderFile: "",
        domains: [],
        disableStaticImages: !1,
        minimumCacheTTL: 14400,
        formats: ["image/webp"],
        maximumDiskCacheSize: void 0,
        maximumRedirects: 3,
        maximumResponseBody: 5e7,
        dangerouslyAllowLocalIP: !1,
        dangerouslyAllowSVG: !1,
        contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
        contentDispositionType: "attachment",
        localPatterns: void 0,
        remotePatterns: [],
        qualities: [75],
        unoptimized: !0,
        customCacheHandler: !1,
      };
    },
    1948,
    (e, t, r) => {
      e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = e.r(70965),
        o = e.r(43369);
      function i({ config: e, src: t, width: r, quality: a }) {
        let l = (0, o.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//"))
          if (t.includes("/_next/static/immutable") && !(0, o.getAssetToken)())
            l = void 0;
          else {
            let e = t.indexOf("?");
            if (-1 !== e) {
              let r = new URLSearchParams(t.slice(e + 1)),
                n = r.get("dpl");
              if (n) {
                (l = n), r.delete("dpl");
                let o = r.toString();
                t = t.slice(0, e) + (o ? "?" + o : "");
              }
            }
          }
        if (
          t.startsWith("/") &&
          t.includes("?") &&
          e.localPatterns?.length === 1 &&
          "**" === e.localPatterns[0].pathname &&
          "" === e.localPatterns[0].search
        )
          throw Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`);
        let s = (0, n.findClosestQuality)(a, e);
        return t;
      }
      i.__next_img_default = !0;
      let a = i;
    },
    67585,
    (e, t, r) => {
      e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "BailoutToCSRForNextDynamic", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = e.r(71645),
        o = e.r(74080);
      e.r(32061);
      let i = e
        .r(49354)
        .createReactBrowserBailoutReason.bind(null, "next/dynamic");
      function a({ children: e }) {
        return (0, n.use)((0, o.browser)(i)), e;
      }
    },
    69093,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let n = e.r(43476),
        o = e.r(71645),
        i = e.r(67585),
        a = e.r(52157);
      function l(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      let s = {
          loader: () => Promise.resolve(l(() => null)),
          loading: null,
          ssr: !0,
        },
        u = function (e) {
          let t = { ...s, ...e },
            r = (0, o.lazy)(() => t.loader().then(l)),
            u = t.loading;
          function d(e) {
            let l = u
                ? (0, n.jsx)(u, { isLoading: !0, pastDelay: !0, error: null })
                : null,
              s = !t.ssr || !!t.loading,
              d = s ? o.Suspense : o.Fragment,
              c = t.ssr
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      "u" < typeof window
                        ? (0, n.jsx)(a.PreloadChunks, { moduleIds: t.modules })
                        : null,
                      (0, n.jsx)(r, { ...e }),
                    ],
                  })
                : (0, n.jsx)(i.BailoutToCSRForNextDynamic, {
                    children: (0, n.jsx)(r, { ...e }),
                  });
            return (0, n.jsx)(d, {
              ...(s ? { fallback: l } : {}),
              children: c,
            });
          }
          return (d.displayName = "LoadableComponent"), d;
        };
    },
    52157,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "PreloadChunks", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = e.r(43476),
        o = e.r(74080),
        i = e.r(63599),
        a = e.r(9885),
        l = e.r(43369);
      function s({ moduleIds: e }) {
        if ("u" > typeof window) return null;
        let t = i.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let r = [];
        if (t.reactLoadableManifest && e) {
          let n = t.reactLoadableManifest;
          for (let t of e) {
            if (!n[t]) continue;
            let e = n[t].files;
            r.push(...e);
          }
        }
        if (0 === r.length) return null;
        let u = (0, l.getAssetTokenQuery)();
        return (0, n.jsx)(n.Fragment, {
          children: r.map((e) => {
            let r = `${t.assetPrefix}/_next/${(0, a.encodeURIPath)(e)}${u}`;
            return e.endsWith(".css")
              ? (0, n.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    href: r,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce,
                  },
                  e
                )
              : ((0, o.preload)(r, {
                  as: "script",
                  fetchPriority: "low",
                  nonce: t.nonce,
                }),
                null);
          }),
        });
      }
    },
    49354,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 });
      var n = {
        createReactBrowserBailoutReason: function () {
          return a;
        },
        getReactBrowserBailoutReason: function () {
          return l;
        },
        isNextBrowserBailoutError: function () {
          return s;
        },
      };
      for (var o in n)
        Object.defineProperty(r, o, { enumerable: !0, get: n[o] });
      let i = Symbol.for("next.browser-bailout-reason");
      function a(e) {
        return { $$typeof: i, reason: e };
      }
      function l(e) {
        let t = e?.cause;
        return t?.$$typeof === i ? t.reason : void 0;
      }
      function s(e) {
        return void 0 !== l(e);
      }
    },
    65856,
    (e, t, r) => {
      e.i(47167),
        Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = e.r(55682)._(e.r(71645)).default.createContext(null);
    },
    98879,
    (e, t, r) => {
      Object.defineProperty(r, "__esModule", { value: !0 }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = e.r(71645),
        o = "u" < typeof window,
        i = o ? () => {} : n.useLayoutEffect,
        a = o ? () => {} : n.useEffect;
      function l(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function l() {
          if (t && t.mountedInstances) {
            let e = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(e));
          }
        }
        return (
          o && (t?.mountedInstances?.add(e.children), l()),
          i(
            () => (
              t?.mountedInstances?.add(e.children),
              () => {
                t?.mountedInstances?.delete(e.children);
              }
            )
          ),
          i(
            () => (
              t && (t._pendingUpdate = l),
              () => {
                t && (t._pendingUpdate = l);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
  ]);
})();
