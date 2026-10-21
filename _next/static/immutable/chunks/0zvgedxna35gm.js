(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  35282,
  (e) => {
    "use strict";
    var i = e.i(43476),
      a = e.i(88653),
      l = e.i(46932),
      n = e.i(8803),
      t = e.i(66065),
      c = e.i(76525),
      s = e.i(10723),
      o = e.i(24639);
    e.s([
      "NavMenu",
      0,
      function ({ open: e, toHref: r, go: f }) {
        return (0, i.jsx)(a.f, {
          children: e
            ? (0, i.jsxs)(l.f.div, {
                id: "mobile-menu",
                initial: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                animate: {
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                },
                exit: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
                transition: { duration: 0.6, ease: [0.7, 0, 0.2, 1] },
                className:
                  "fixed inset-0 z-40 flex flex-col justify-between bg-black px-4 pb-8 pt-24 lg:hidden",
                children: [
                  (0, i.jsx)("nav", {
                    "aria-label": "Mobile",
                    className: "flex flex-col",
                    children: n.C.map((e, a) =>
                      (0, i.jsx)(
                        l.f.a,
                        {
                          href: r(e.href),
                          onClick: f(e.href),
                          initial: { x: -40, opacity: 0 },
                          animate: { x: 0, opacity: 1 },
                          transition: {
                            delay: 0.15 + 0.05 * a,
                            duration: 0.5,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          className:
                            "border-b border-fog/10 py-3 text-4xl font-black uppercase tracking-[-0.03em] text-fog active:text-dacity",
                          children: e.label,
                        },
                        e.href
                      )
                    ),
                  }),
                  (0, i.jsxs)("div", {
                    className: "space-y-3",
                    children: [
                      (0, i.jsx)(c.f, {
                        href: t.f.links.pumpfun,
                        locked: !t.f.launched,
                        className: "w-full",
                        children: t.f.launched
                          ? `Buy ${t.f.ticker}`
                          : (0, i.jsx)(o.f, { prefix: "Live in " }),
                      }),
                      (0, i.jsx)(s.ContractBar, {}),
                    ],
                  }),
                ],
              })
            : null,
        });
      },
    ]);
  },
  44985,
  function (e) {
    e.n(e.i(35282));
  },
]);
