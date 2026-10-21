(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
  "object" == typeof document ? document.currentScript : void 0,
  39590,
  (t) => {
    "use strict";
    var i = t.i(43476),
      e = t.i(88653),
      a = t.i(46932);
    t.s([
      "CopiedStamp",
      0,
      function ({ stamp: t }) {
        return (0, i.jsx)(e.f, {
          children:
            t > 0
              ? (0, i.jsx)(
                  a.f.span,
                  {
                    "aria-hidden": !0,
                    initial: { scale: 2.6, opacity: 0, rotate: -26 },
                    animate: { scale: 1, opacity: 1, rotate: -9 },
                    exit: {
                      opacity: 0,
                      scale: 0.92,
                      transition: { duration: 0.25 },
                    },
                    transition: { type: "spring", stiffness: 520, damping: 19 },
                    className:
                      "stamp pointer-events-none absolute right-10 top-1/2 -mt-5 border-[3px] border-double border-dacity bg-black/80 px-3 py-1 text-lg font-black uppercase tracking-[0.25em] text-dacity",
                    children: "Copied",
                  },
                  t
                )
              : null,
        });
      },
    ]);
  },
  61203,
  function (t) {
    t.n(t.i(39590));
  },
]);
