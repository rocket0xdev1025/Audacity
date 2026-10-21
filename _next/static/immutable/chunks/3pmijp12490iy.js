(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  [
    85878,
    (e) => {
      var a = e.i(43476),
        t = e.i(70703),
        i = e.i(98194),
        s = e.i(18566),
        n = e.i(71645),
        r = e.i(8803),
        l = e.i(66065),
        o = e.i(94409),
        c = e.i(76525),
        d = e.i(24639);
      let p = (0, t.default)(() => e.A(83289).then((e) => e.NavMenu), {
        loadableGenerated: { modules: [44985] },
        ssr: !1,
      });
      e.s([
        "Nav",
        0,
        function () {
          let e = "/" === (0, s.usePathname)(),
            t = (a) => (e ? a : `/${a}`),
            [h, u] = (0, n.useState)(!1),
            [m, g] = (0, n.useState)(null),
            [x, f] = (0, n.useState)(null),
            b = (0, n.useRef)({}),
            w = (0, n.useRef)(null),
            y = (0, n.useRef)(null),
            k = x ?? m;
          (0, n.useEffect)(() => {
            let e = ["#top", ...r.C.map((e) => e.href)]
                .map((e) => document.querySelector(e))
                .filter((e) => !!e),
              a = new IntersectionObserver(
                (e) => {
                  for (let a of e)
                    a.isIntersecting &&
                      g("top" === a.target.id ? null : `#${a.target.id}`);
                },
                { rootMargin: "-45% 0px -50% 0px" }
              );
            return e.forEach((e) => a.observe(e)), () => a.disconnect();
          }, []),
            (0, n.useLayoutEffect)(() => {
              let e = w.current;
              if (!e) return;
              let a = k ? b.current[k] : null;
              if (!a) {
                e.style.opacity = "0";
                return;
              }
              (e.style.opacity = "1"),
                (e.style.width = `${a.offsetWidth}px`),
                (e.style.transform = `translate3d(${a.offsetLeft}px, -50%, 0) skewX(-12deg)`);
            }, [k]),
            (0, n.useEffect)(
              () =>
                (0, o.V)(() => {
                  let e =
                    document.documentElement.scrollHeight - window.innerHeight;
                  y.current &&
                    (y.current.style.transform = `scaleX(${
                      e > 0 ? o.v.y / e : 0
                    })`);
                }),
              []
            );
          let v = (a) => (t) => {
            e && (t.preventDefault(), h && (u(!1), (0, o.i)(!1)), (0, o.u)(a));
          };
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)("header", {
                className:
                  "fixed inset-x-0 top-0 z-50 border-b border-fog/10 bg-black",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex items-center justify-between gap-3 px-4 py-3 md:gap-6 md:px-10 md:py-4",
                    children: [
                      (0, a.jsx)("a", {
                        href: e ? "#top" : "/",
                        onClick: v("#top"),
                        "aria-label": e
                          ? "DacityCoin, back to top"
                          : "DacityCoin home",
                        className: "shrink-0",
                        children: (0, a.jsx)(i.default, {
                          src: "/logo/logo-full.svg",
                          alt: "DacityCoin",
                          width: 4035,
                          height: 849,
                          unoptimized: !0,
                          preload: !0,
                          className: "h-7 w-auto md:h-9",
                        }),
                      }),
                      (0, a.jsxs)("nav", {
                        "aria-label": "Main",
                        className: "relative hidden items-center lg:flex",
                        onMouseLeave: () => f(null),
                        children: [
                          (0, a.jsx)("span", {
                            ref: w,
                            "aria-hidden": !0,
                            className:
                              "absolute left-0 top-1/2 h-8 bg-dacity opacity-0 transition-[transform,width,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
                          }),
                          r.C.map((e) =>
                            (0, a.jsx)(
                              "a",
                              {
                                ref: (a) => {
                                  b.current[e.href] = a;
                                },
                                href: t(e.href),
                                onClick: v(e.href),
                                onMouseEnter: () => f(e.href),
                                "aria-current": m === e.href ? "true" : void 0,
                                className: `relative px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.22em] transition-colors duration-200 ${
                                  k === e.href ? "text-black" : "text-fog"
                                }`,
                                children: e.label,
                              },
                              e.href
                            )
                          ),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, a.jsx)(c.f, {
                            href: l.f.links.pumpfun,
                            size: "sm",
                            locked: !l.f.launched,
                            children: l.f.launched
                              ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    "Buy",
                                    (0, a.jsxs)("span", {
                                      className: "hidden sm:inline",
                                      children: [" ", l.f.ticker],
                                    }),
                                  ],
                                })
                              : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "sm:hidden",
                                      children: (0, a.jsx)(d.f, {}),
                                    }),
                                    (0, a.jsx)("span", {
                                      className: "hidden sm:inline",
                                      children: (0, a.jsx)(d.f, {
                                        prefix: "Live in ",
                                      }),
                                    }),
                                  ],
                                }),
                          }),
                          (0, a.jsxs)("button", {
                            type: "button",
                            onClick: () => {
                              (0, o.i)(!h), u(!h);
                            },
                            "aria-expanded": h,
                            "aria-controls": "mobile-menu",
                            "aria-label": h ? "Close menu" : "Open menu",
                            className:
                              "flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden",
                            children: [
                              (0, a.jsx)("span", {
                                className: `h-0.5 w-6 bg-fog transition-transform duration-300 ${
                                  h ? "translate-y-1 rotate-45" : ""
                                }`,
                              }),
                              (0, a.jsx)("span", {
                                className: `h-0.5 w-6 bg-dacity transition-transform duration-300 ${
                                  h ? "-translate-y-1 -rotate-45" : ""
                                }`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("span", {
                    ref: y,
                    "aria-hidden": !0,
                    className:
                      "absolute inset-x-0 bottom-0 h-[2px] origin-left bg-dacity shadow-[0_0_10px_#ff008c]",
                    style: { transform: "scaleX(0)" },
                  }),
                ],
              }),
              (0, a.jsx)(p, { open: h, toHref: t, go: v }),
            ],
          });
        },
      ]);
    },
    21466,
    (e) => {
      var a = e.i(43476),
        t = e.i(98194),
        i = e.i(88653),
        s = e.i(46932),
        n = e.i(71645);
      let r = {
        lifeinvader: "/images/stream/apps/lifeinvader-icon.png",
        snapmatic: "/images/stream/apps/snapmatic-icon.png",
        bleeter: "/images/stream/apps/bleeter-icon.png",
      };
      function l({ app: e }) {
        return "lifeinvader" === e
          ? (0, a.jsx)(t.default, {
              src: "/images/stream/apps/lifeinvader-logo.png",
              alt: "Lifeinvader",
              width: 360,
              height: 93,
              className: "h-[20px] w-auto",
            })
          : "snapmatic" === e
          ? (0, a.jsx)("span", {
              className:
                "text-[12px] font-black tracking-[0.02em] text-[#ffb347]",
              children: "Snapmatic",
            })
          : (0, a.jsx)("span", {
              className:
                "text-[12px] font-black tracking-[0.02em] text-[#4cc274]",
              children: "Bleeter",
            });
      }
      function o() {
        return (0, a.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: "h-[15px] w-[15px]",
          "aria-hidden": !0,
          children: (0, a.jsx)("path", {
            d: "M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
          }),
        });
      }
      function c() {
        return (0, a.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: "h-[15px] w-[15px]",
          "aria-hidden": !0,
          children: (0, a.jsx)("path", {
            d: "M4 5h16v11H9l-5 4z",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinejoin: "round",
          }),
        });
      }
      let d = { lifeinvader: "Stalk", snapmatic: "", bleeter: "Rebleet" },
        p = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/New_York",
          hour: "numeric",
          minute: "2-digit",
        });
      function h({ now: e }) {
        return (0, a.jsxs)("div", {
          className:
            "flex items-center justify-between px-6 pb-0.5 pt-3 text-[12px] font-bold",
          children: [
            (0, a.jsxs)("span", {
              className: "flex items-center gap-2",
              children: [
                (0, a.jsx)("span", {
                  className: "flex items-end gap-[2px]",
                  "aria-hidden": !0,
                  children: [4, 6, 8, 10].map((e, t) =>
                    (0, a.jsx)(
                      "i",
                      {
                        className: `block w-[3px] rounded-[1px] bg-fog ${
                          3 === t ? "opacity-40" : ""
                        }`,
                        style: { height: e },
                      },
                      e
                    )
                  ),
                }),
                "Whiz",
              ],
            }),
            (0, a.jsx)("span", {
              className: "tabular-nums",
              children: e ? p.format(e) : "",
            }),
            (0, a.jsxs)("span", {
              className: "flex items-center gap-1.5",
              children: [
                "87%",
                (0, a.jsx)("span", {
                  className:
                    "relative inline-block h-[11px] w-[22px] rounded-[3px] border border-fog/70",
                  "aria-hidden": !0,
                  children: (0, a.jsx)("span", {
                    className:
                      "absolute inset-[1.5px] right-[4px] rounded-[1.5px] bg-fog",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      let u = (e) =>
        `flex shrink-0 gap-3.5 rounded-[18px] border px-4 py-3 backdrop-blur-xl ${
          e
            ? "border-dacity/70 bg-[#2a1622]/85 shadow-[0_0_0_1px_rgba(255,0,140,0.35),0_12px_34px_rgba(255,0,140,0.22)]"
            : "border-white/[0.07] bg-[#26262c]/75 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
        }`;
      function m({ note: e, at: i, now: s }) {
        let n;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("span", {
              className:
                "relative h-[42px] w-[42px] shrink-0 overflow-hidden rounded-[11px] shadow-[0_4px_10px_rgba(0,0,0,0.35)]",
              children: (0, a.jsx)(t.default, {
                src: r[e.app],
                alt: "",
                fill: !0,
                sizes: "84px",
                className: "object-cover",
              }),
            }),
            (0, a.jsxs)("div", {
              className: "min-w-0 flex-1",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex h-[20px] items-center justify-between",
                  children: [
                    (0, a.jsx)(l, { app: e.app }),
                    (0, a.jsxs)("span", {
                      className:
                        "flex items-center gap-2.5 text-[11px] font-bold text-fog/50",
                      children: [
                        "snapmatic" === e.app
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [(0, a.jsx)(c, {}), (0, a.jsx)(o, {})],
                            })
                          : null,
                        s
                          ? (n = Math.floor((s - i) / 6e4)) < 1
                            ? "now"
                            : `${n} min ago`
                          : "",
                      ],
                    }),
                  ],
                }),
                "snapmatic" === e.app
                  ? (0, a.jsxs)("p", {
                      className:
                        "mt-1.5 flex items-center gap-2 text-[14px] font-black",
                      children: [
                        (0, a.jsx)("span", {
                          className:
                            "flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[#ffb347] text-[10px] font-black text-black",
                          children: e.name.slice(0, 1),
                        }),
                        (0, a.jsx)("span", {
                          className: "truncate",
                          children: e.handle.replace(/^@/, ""),
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "shrink-0 rounded-full border border-fog/60 px-2 py-[1px] text-[10px] font-bold text-fog/90",
                          children: "Follow",
                        }),
                      ],
                    })
                  : (0, a.jsxs)("p", {
                      className: "mt-1 truncate text-[14px] font-black",
                      children: [
                        e.name,
                        (0, a.jsx)("span", {
                          className: "ml-1.5 font-semibold text-fog/45",
                          children: e.handle,
                        }),
                      ],
                    }),
                (0, a.jsx)("p", {
                  className:
                    "mt-0.5 line-clamp-2 text-[15.5px] font-semibold leading-snug text-fog/90",
                  children: e.text,
                }),
                (0, a.jsxs)("p", {
                  className:
                    "mt-1 flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em]",
                  children: [
                    e.place
                      ? (0, a.jsx)("span", {
                          className: "text-dacity",
                          children: e.place,
                        })
                      : null,
                    d[e.app]
                      ? (0, a.jsx)("span", {
                          className:
                            "lifeinvader" === e.app
                              ? "text-[#ff4a4a]"
                              : "text-[#4cc274]",
                          children: d[e.app],
                        })
                      : null,
                  ],
                }),
              ],
            }),
            e.selfie
              ? (0, a.jsx)("span", {
                  className:
                    "relative h-20 w-16 shrink-0 overflow-hidden rounded-[10px]",
                  children: (0, a.jsx)(t.default, {
                    src: e.selfie,
                    alt: `${e.name}'s Snapmatic`,
                    fill: !0,
                    sizes: "128px",
                    className: "object-cover",
                  }),
                })
              : null,
          ],
        });
      }
      e.s([
        "_",
        0,
        m,
        "Q",
        0,
        function ({ notes: e, now: r }) {
          let [l, o] = (0, n.useState)([]),
            c = (0, n.useRef)(0),
            d = (0, n.useRef)(0);
          return (
            (0, n.useEffect)(() => {
              if (!e.length) return;
              c.current = Math.floor(Date.now() / 7e3) % e.length;
              let a = (a) => {
                  let t = e[c.current % e.length];
                  (c.current += 1), (d.current += 1);
                  let i = { note: t, at: a, key: d.current };
                  o((e) => [i, ...e].slice(0, 6));
                },
                t = window.setTimeout(() => {
                  let e = Date.now();
                  for (let t = 5; t >= 0; t--) a(e - (t + 1) * 95e3);
                }, 0),
                i = window.setInterval(() => a(Date.now()), 7e3);
              return () => {
                window.clearTimeout(t), window.clearInterval(i);
              };
            }, [e]),
            (0, a.jsxs)("div", {
              className:
                "relative flex h-full flex-col overflow-hidden rounded-[30px] border border-white/[0.08] bg-[radial-gradient(120%_80%_at_20%_0%,#3a0c26_0%,#120810_45%,#07070a_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.6)]",
              children: [
                (0, a.jsx)(h, { now: r }),
                (0, a.jsxs)("div", {
                  className: "flex items-center gap-3 px-6 pb-3 pt-2",
                  children: [
                    (0, a.jsx)(t.default, {
                      src: "/images/stream/apps/ifruit-logo.png",
                      alt: "iFruit",
                      width: 128,
                      height: 128,
                      className: "h-8 w-8",
                    }),
                    (0, a.jsxs)("p", {
                      className:
                        "min-w-0 truncate text-[20px] font-black leading-none tracking-[-0.02em]",
                      children: [
                        "iFruit ",
                        (0, a.jsx)("span", {
                          className: "font-semibold text-fog/50",
                          children: "· Notifications",
                        }),
                        (0, a.jsx)("span", {
                          className:
                            "ml-3 text-[12px] font-semibold tracking-normal text-fog/45",
                          children: "Vice City, Leonida",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("span", {
                      className:
                        "ml-auto flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-fog/70",
                      children: [
                        (0, a.jsx)("span", {
                          className: "blink h-1.5 w-1.5 rounded-full bg-dacity",
                        }),
                        "Live",
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("ul", {
                  className:
                    "relative flex min-h-0 flex-1 flex-col gap-2 overflow-hidden px-4",
                  style: {
                    WebkitMaskImage:
                      "linear-gradient(to bottom, #000 78%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, #000 78%, transparent 100%)",
                  },
                  children: (0, a.jsx)(i.f, {
                    initial: !1,
                    children: l.map(({ note: e, at: t, key: i }, n) =>
                      (0, a.jsx)(
                        s.f.li,
                        {
                          layout: !0,
                          initial: { opacity: 0, y: -40, scale: 0.94 },
                          animate: { opacity: 1, y: 0, scale: 1 },
                          exit: {
                            opacity: 0,
                            scale: 0.96,
                            transition: { duration: 0.3 },
                          },
                          transition: {
                            type: "spring",
                            stiffness: 320,
                            damping: 30,
                          },
                          className: u(0 === n),
                          children: (0, a.jsx)(m, { note: e, at: t, now: r }),
                        },
                        i
                      )
                    ),
                  }),
                }),
              ],
            })
          );
        },
        "d",
        0,
        u,
      ]);
    },
    76525,
    (e) => {
      var a = e.i(43476),
        t = e.i(16480);
      let i = {
          pink: "bg-dacity text-black hover:bg-fog",
          outline:
            "border border-fog/40 text-fog hover:border-dacity hover:bg-dacity hover:text-black",
          ghost: "text-fog hover:text-dacity",
          black: "bg-black text-fog hover:bg-fog hover:text-black",
        },
        s = {
          pink: "bg-dacity text-black",
          outline: "border border-fog/25 text-fog/50",
          ghost: "text-fog/50",
          black: "bg-black text-fog/50",
        },
        n = {
          sm: "h-9 px-3.5 text-[10px] md:text-[11px]",
          md: "h-12 px-5 text-xs md:text-sm",
          lg: "h-14 px-7 text-sm md:text-base",
        };
      e.s([
        "f",
        0,
        function ({
          href: e,
          children: r,
          variant: l = "pink",
          size: o = "md",
          external: c = !0,
          icon: d = !0,
          locked: p = !1,
          className: h = "",
        }) {
          return p
            ? (0, a.jsx)("span", {
                role: "link",
                "aria-disabled": "true",
                className: `inline-flex -skew-x-[10deg] cursor-not-allowed select-none items-center justify-center font-black uppercase tracking-[0.14em] ${s[l]} ${n[o]} ${h}`,
                children: (0, a.jsxs)("span", {
                  className:
                    "inline-flex skew-x-[10deg] items-center gap-2 whitespace-nowrap",
                  children: [r, (0, a.jsx)(t.F, { className: "h-3.5 w-3.5" })],
                }),
              })
            : (0, a.jsx)("a", {
                href: e,
                target: c ? "_blank" : void 0,
                rel: c ? "noopener noreferrer" : void 0,
                className: `group inline-flex -skew-x-[10deg] items-center justify-center font-black uppercase tracking-[0.14em] transition-colors duration-200 ${i[l]} ${n[o]} ${h}`,
                children: (0, a.jsxs)("span", {
                  className:
                    "inline-flex skew-x-[10deg] items-center gap-2 whitespace-nowrap",
                  children: [
                    r,
                    d
                      ? (0, a.jsx)(t.S, {
                          className:
                            "h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
                        })
                      : null,
                  ],
                }),
              });
        },
      ]);
    },
    68055,
    (e) => {
      var a = e.i(43476);
      let t = {
        pink: "bg-dacity text-black shadow-[3px_3px_0_#000]",
        black:
          "bg-black text-dacity ring-1 ring-dacity shadow-[3px_3px_0_#ff008c]",
        white: "bg-fog text-black shadow-[3px_3px_0_#ff008c]",
      };
      e.s([
        "f",
        0,
        function ({
          children: e,
          tone: i = "pink",
          rotate: s = -6,
          className: n = "",
        }) {
          return (0, a.jsx)("span", {
            className: `inline-flex items-center whitespace-nowrap px-2.5 py-1 text-[10px] font-black uppercase leading-none tracking-[0.18em] md:text-xs ${t[i]} ${n}`,
            style: { rotate: `${s}deg` },
            children: e,
          });
        },
      ]);
    },
    8803,
    (e) => {
      e.s([
        "g",
        0,
        [
          {
            n: "01",
            title: "Get a wallet",
            text: "Phantom or Solflare. Write the seed phrase on paper and keep it off your iFruit.",
            image: "/images/buy-cap.jpg",
          },
          {
            n: "02",
            title: "Load SOL",
            text: "Buy SOL on an exchange and send it to your wallet. That's the fuel.",
            image: "/images/buy-vending.jpg",
          },
          {
            n: "03",
            title: "Find the runway",
            text: "Open pump.fun and paste the contract address from this site.",
            image: "/images/buy-seaplane.jpg",
          },
          {
            n: "04",
            title: "Board",
            text: "Swap SOL for $AUDACITY. Welcome to the crew.",
            image: "/images/buy-speedboat.jpg",
          },
        ],
        "j",
        0,
        [
          {
            id: "lucia",
            name: "Lucia Caminos",
            role: "Wing walker",
            home: "Vice Beach",
            image: "/images/crew-vee.jpg",
            bio: "Her father taught her to fight as soon as she could walk. Now she walks the top wing at 3,000 ft.",
            sticker: "ALT 3,000 FT",
            stats: [
              { label: "Nerve", value: 99 },
              { label: "Speed", value: 72 },
              { label: "Altitude", value: 97 },
            ],
          },
          {
            id: "raul",
            name: "Raul Bautista",
            role: "Stunt pilot",
            home: "Vice City International",
            image: "/images/crew-rook-cockpit.jpg",
            bio: "A seasoned bank robber who likes big risks. Flies the Western Duster under the causeway, VCPD stopped writing it down.",
            sticker: "UNDER, NOT OVER",
            stats: [
              { label: "Nerve", value: 94 },
              { label: "Speed", value: 96 },
              { label: "Altitude", value: 90 },
            ],
          },
          {
            id: "real-dimez",
            name: "Real Dimez",
            role: "Freestyle moto",
            home: "Downtown Vice City",
            image: "/images/crew-marlo-moto.jpg",
            bio: "Bae-Luxe and Roxy, friends since high school and signed to Only Raw Records. They jump their Sanchez bikes roof to roof.",
            sticker: "ROOF TO ROOF",
            stats: [
              { label: "Nerve", value: 93 },
              { label: "Speed", value: 88 },
              { label: "Altitude", value: 71 },
            ],
          },
          {
            id: "jason",
            name: "Jason Duval",
            role: "Street driver",
            home: "Leonida Keys",
            image: "/images/crew-jason-drift.jpg",
            bio: "Grew up around grifters and crooks and just wants an easy life. Lucia Caminos rides shotgun when she's off the wing.",
            sticker: "NO BRAKES",
            stats: [
              { label: "Nerve", value: 96 },
              { label: "Speed", value: 97 },
              { label: "Altitude", value: 35 },
            ],
          },
          {
            id: "boobie",
            name: "Boobie Ike",
            role: "Backer",
            home: "Vice City",
            image: "/images/crew-nova-wingsuit.jpg",
            bio: "Vice City legend with real estate and a recording studio. He pays for the wingsuit jumps over the big letters.",
            sticker: "100% SEND",
            stats: [
              { label: "Nerve", value: 100 },
              { label: "Speed", value: 84 },
              { label: "Altitude", value: 99 },
            ],
          },
        ],
        "J",
        0,
        [
          {
            src: "/images/hero-1.jpg",
            alt: "The pink DacityCoin Western Duster with a wing walker trailing pink smoke over Vice Beach",
            focus: "68% 45%",
            focusMobile: "69% 50%",
          },
          {
            src: "/images/hero-heli.jpg",
            alt: "A DacityCoin Buckingham Maverick trailing pink smoke past a Vice City tower at sunset",
            focus: "62% 42%",
            focusMobile: "58% 45%",
          },
        ],
        "u",
        0,
        [
          {
            id: "dc1",
            name: "Western Duster",
            short: "Duster",
            type: "Stunt biplane",
            image: "/images/hangar-dc1-sprunk.jpg",
            focus: "70% 55%",
            line: "Pink and black with Sprunk on the nose. The smoke system stays armed.",
            crew: "Raul Bautista / Lucia Caminos",
            specs: [
              { label: "Top speed", value: 290, max: 400, unit: "km/h" },
              { label: "Max altitude", value: 14e3, max: 16e3, unit: "ft" },
              { label: "G-load", text: "+6 / -4" },
            ],
          },
          {
            id: "razor",
            name: "Mammoth Dodo",
            short: "Dodo",
            type: "Stunt seaplane",
            image: "/images/hangar-razor-water.jpg",
            focus: "80% 60%",
            line: "Lands on the water off Key Lento and drags our banner down the long bridge.",
            crew: "Raul Bautista",
            specs: [
              { label: "Top speed", value: 260, max: 400, unit: "km/h" },
              { label: "Max altitude", value: 12e3, max: 16e3, unit: "ft" },
              { label: "Runway", text: "Any bay" },
            ],
          },
          {
            id: "nightrunner",
            name: "Grotti Cheetah",
            short: "Cheetah",
            type: "Sports car",
            image: "/images/hangar-nightrunner-drift.jpg",
            focus: "62% 45%",
            line: "Parks on helipads. Leaves sideways.",
            crew: "Jason Duval",
            specs: [
              { label: "Top speed", value: 340, max: 400, unit: "km/h" },
              {
                label: "Max altitude",
                value: 1020,
                max: 16e3,
                unit: "ft",
                note: "helipad, Downtown Vice City",
              },
              { label: "0-100", text: "2.6 s" },
            ],
          },
          {
            id: "skyhammer",
            name: "Buckingham Maverick",
            short: "Maverick",
            type: "Stunt helicopter",
            image: "/images/hangar-skyhammer-heli.jpg",
            focus: "57% 45%",
            line: "Boobie Ike's ride to the top. Hovers over the Venetian Islands like it pays rent there.",
            crew: "Boobie Ike",
            specs: [
              { label: "Top speed", value: 310, max: 400, unit: "km/h" },
              { label: "Max altitude", value: 15e3, max: 16e3, unit: "ft" },
              { label: "Hover limit", text: "None" },
            ],
          },
          {
            id: "volt",
            name: "Maibatsu Sanchez",
            short: "Sanchez",
            type: "Freestyle motocross",
            image: "/images/hangar-volt-crew.jpg",
            focus: "53% 50%",
            line: "Roof to roof. No runway needed.",
            crew: "Real Dimez",
            specs: [
              { label: "Top speed", value: 150, max: 400, unit: "km/h" },
              {
                label: "Max altitude",
                value: 640,
                max: 16e3,
                unit: "ft",
                note: "rooftop, Downtown Vice City",
              },
              { label: "Air time", text: "4.2 s" },
            ],
          },
        ],
        "k",
        0,
        {
          text: "Every city has rules. Vice City has Officer Méndez, and he knows our tail number by heart. We still fly under the causeway with Lucia Caminos on the top wing and the smoke on. Nobody asked for a crypto ad over Vice Beach. We put one up there anyway. That's the audacity.",
          highlight: ["causeway", "anyway.", "audacity."],
        },
        "Q",
        0,
        [
          {
            n: "01",
            title: "Pre-flight",
            status: "complete",
            items: [
              "Spotted in the launch trailer",
              "dacitycoins.com live",
              "@TheDacityCoin open",
              "Smoke system armed",
            ],
          },
          {
            n: "02",
            title: "Takeoff",
            status: "complete",
            items: [
              "Fair launch on pump.fun",
              "Boarding is open",
              "First smoke over Vice Beach",
              "The crew starts posting",
            ],
          },
          {
            n: "03",
            title: "Altitude",
            status: "active",
            items: [
              "Bonding curve done. Mission passed",
              "Live on Jupiter and DEX Screener",
              "A run for every crew member",
              "The hangar opens on Telegram",
            ],
          },
          {
            n: "04",
            title: "November 19",
            status: "standby",
            items: [
              "Leonida opens",
              "Wing walker over Vice Beach on release day",
              "Find us in the game",
              "Whatever the crew dares next",
            ],
          },
        ],
        "C",
        0,
        [
          { label: "Crew", href: "#crew" },
          { label: "Hangar", href: "#hangar" },
          { label: "Reel", href: "#reel" },
          { label: "Missions", href: "#missions" },
          { label: "How to buy", href: "#buy" },
        ],
        "b",
        0,
        [
          {
            id: "vice-city",
            region: "Vice City",
            title: "Air race",
            image: "/images/postcards/dacity-vice-city.jpg",
            text: "Raul Bautista takes the Duster against a Weazel News Maverick from Vice Beach to the causeway and back. Lowest pass wins, VCPD keeps score.",
            when: "Fridays, golden hour",
            crew: "Raul Bautista, Lucia Caminos on the wing",
            ride: "Western Duster",
            stat: "ALT 50 FT",
            pin: [690, 600],
          },
          {
            id: "ambrosia",
            region: "Ambrosia",
            title: "Sugar run",
            image: "/images/postcards/dacity-ambrosia.jpg",
            text: "Jason Duval takes the Cheetah past the Allied Crystal stacks with the windows down. Lucia Caminos says the air tastes like candy.",
            when: "Wednesdays, sunset",
            crew: "Jason Duval, Lucia Caminos",
            ride: "Grotti Cheetah",
            stat: "340 KM/H",
            pin: [600, 420],
          },
          {
            id: "mount-kalaga",
            region: "Mount Kalaga",
            title: "Rapids run",
            image: "/images/postcards/dacity-mount-kalaga.jpg",
            text: "Down the Kalaga rapids on anything that floats. Boobie Ike sends the Maverick for whoever wants to drop in.",
            when: "Tuesdays, early",
            crew: "Boobie Ike",
            ride: "Maverick drop",
            stat: "CLASS V",
            pin: [430, 225],
          },
          {
            id: "port-gellhorn",
            region: "Port Gellhorn",
            title: "Train race",
            image: "/images/postcards/dacity-port-gellhorn.jpg",
            text: "Real Dimez race the night freight out of Port Gellhorn on Maibatsu Sanchez bikes. The train has never won.",
            when: "Thursdays, 23:00",
            crew: "Real Dimez",
            ride: "Maibatsu Sanchez",
            stat: "TRAIN: 0 WINS",
            pin: [215, 345],
          },
          {
            id: "grassrivers",
            region: "Grassrivers",
            title: "Swamp race",
            image: "/images/postcards/dacity-grassrivers.jpg",
            text: "Airboats flat out through the Grassrivers. The gators get front row seats and they never pay.",
            when: "Sundays, sunrise",
            crew: "Open entry",
            ride: "Anything with a fan on the back",
            stat: "98 KM/H",
            pin: [450, 950],
          },
          {
            id: "leonida-keys",
            region: "Leonida Keys",
            title: "Bar hop",
            image: "/images/postcards/dacity-leonida-keys.jpg",
            text: "Seaplane down the Keys, one Sprunk at every dock. Last one to the end of the bridge buys the next round.",
            when: "Saturdays, noon",
            crew: "Raul Bautista and whoever fits",
            ride: "Mammoth Dodo",
            stat: "6 DOCKS",
            pin: [470, 1130],
          },
        ],
        "F",
        0,
        [
          {
            src: "/images/reel-a-biplane.jpg",
            cat: "Air",
            caption: "The Duster over Vice Beach",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-k-walker.jpg",
            cat: "Air",
            caption: "Lucia Caminos on the top wing",
            w: 1080,
            h: 1350,
          },
          {
            src: "/images/reel-r-speedboat.jpg",
            cat: "Water",
            caption: "Golden hour run past the Vice City skyline",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-i-moto.jpg",
            cat: "Street",
            caption: "The Sanchez crew rolls out",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-b-skyhammer.jpg",
            cat: "Sky",
            caption: "A Maverick over Vice City",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-n-ground-crew.jpg",
            cat: "Air",
            caption: "Low pass over the ground crew",
            w: 1080,
            h: 1350,
          },
          {
            src: "/images/reel-q-heli-night.jpg",
            cat: "Sky",
            caption: "Climbing out over Vice City at night",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-p-vending.jpg",
            cat: "Air",
            caption: "Hangar fuel: Sprunk or eCola",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-e-scooter.jpg",
            cat: "Street",
            caption: "Port Gellhorn traffic, iguana included",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-d-seaplane.jpg",
            cat: "Water",
            caption: "Banner run over the Leonida Keys",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-t-jason-lucia.jpg",
            cat: "Street",
            caption: "Jason Duval and Lucia Caminos, parked for once",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-f-sign.jpg",
            cat: "Sky",
            caption: "Wingsuits over the big letters",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-m-wheelie.jpg",
            cat: "Street",
            caption: "Real Dimez, front wheel optional",
            w: 1080,
            h: 1350,
          },
          {
            src: "/images/reel-s-beach-flag.jpg",
            cat: "Water",
            caption: "Flag day on Vice Beach",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-h-hangar.jpg",
            cat: "Air",
            caption: "The Duster in the hangar, Sprunk on the nose",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-c-drop.jpg",
            cat: "Sky",
            caption: "Parachute drop from the Maverick",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-o-pisswasser.jpg",
            cat: "Air",
            caption: "Pißwasser for the crew, Sprunk for the pilot",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-u-parachute-night.jpg",
            cat: "Sky",
            caption: "Night drop over Vice City",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-g-mud.jpg",
            cat: "Street",
            caption: "Grassrivers mud bog",
            w: 1600,
            h: 900,
          },
          {
            src: "/images/reel-l-scooter-rider.jpg",
            cat: "Street",
            caption: "9 km/h and no brakes",
            w: 1080,
            h: 1350,
          },
        ],
        "D",
        0,
        ["Air", "Water", "Street", "Sky"],
      ]);
    },
    94409,
    (e) => {
      let a = { y: 0, velocity: 0, lenis: null },
        t = new Set(),
        i = null;
      async function s(t) {
        let { gsap: s, ScrollTrigger: n } = await e.A(56409),
          r = "#top" === t ? 0 : t,
          l = () => {
            let e = a.lenis;
            e
              ? e.scrollTo(r, { immediate: !0, force: !0 })
              : "number" == typeof r
              ? window.scrollTo(0, r)
              : document.querySelector(r)?.scrollIntoView(),
              n.update();
          };
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
          return void l();
        let o =
          (i ||
            ((i = document.createElement("div")).setAttribute(
              "aria-hidden",
              "true"
            ),
            Object.assign(i.style, {
              position: "fixed",
              inset: "0",
              zIndex: "95",
              background: "#000",
              opacity: "0",
              pointerEvents: "none",
            }),
            document.body.appendChild(i)),
          i);
        s.timeline()
          .to(o, { opacity: 1, duration: 0.22, ease: "power2.in" })
          .add(l)
          .to(o, { opacity: 0, duration: 0.45, ease: "power2.out" }, "+=0.08");
      }
      e.s([
        "K",
        0,
        function () {
          t.forEach((e) => e());
        },
        "u",
        0,
        s,
        "i",
        0,
        function (e) {
          let t = a.lenis;
          t && (e ? t.stop() : t.start()),
            document.documentElement.classList.toggle("scroll-locked", e);
        },
        "V",
        0,
        function (e) {
          return (
            t.add(e),
            () => {
              t.delete(e);
            }
          );
        },
        "v",
        0,
        a,
      ]);
    },
    98194,
    (e) => {
      var a = e.i(85437);
      e.s(["default", () => a.Image]);
    },
  ],
  83289,
  (e) => {
    e.v((a) =>
      Promise.all(
        ["static/immutable/chunks/0zvgedxna35gm.js"].map((a) => e.l(a))
      ).then(() => a(44985))
    );
  },
  73668,
  (e) => {
    e.v((a) =>
      Promise.all(
        ["static/immutable/chunks/0rgfsj2lwc2q5.js"].map((a) => e.l(a))
      ).then(() => a(61203))
    );
  },
  56409,
  (e) => {
    e.v((a) =>
      Promise.all(
        ["static/immutable/chunks/08f6vovs56a8b.js"].map((a) => e.l(a))
      ).then(() => a(4219))
    );
  },
  18566,
  (e, a, t) => {
    a.exports = e.r(76562);
  },
]);
