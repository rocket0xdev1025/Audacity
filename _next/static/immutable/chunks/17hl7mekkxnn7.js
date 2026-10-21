(() => {
  "use strict";
  (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([
    "object" == typeof document ? document.currentScript : void 0,
    9148,
    (e) => {
      var t = e.i(43476),
        i = e.i(71645);
      e.i(65506);
      var s = e.i(40462);
      e.s(
        [
          "Cursor",
          0,
          function () {
            let e = (function (e, t = !1) {
                let s = (0, i.useCallback)(
                  (t) => {
                    let i = window.matchMedia(e);
                    return (
                      i.addEventListener("change", t),
                      () => i.removeEventListener("change", t)
                    );
                  },
                  [e]
                );
                return (0, i.useSyncExternalStore)(
                  s,
                  () => window.matchMedia(e).matches,
                  () => t
                );
              })("(hover: hover) and (pointer: fine)"),
              a = (0, i.useRef)(null),
              [n, r] = (0, i.useState)("default"),
              [l, o] = (0, i.useState)("");
            return ((0, i.useEffect)(() => {
              let t = a.current;
              if (!e || !t) return;
              let i = document.documentElement;
              i.classList.add("has-cursor");
              let n = !1,
                l = (e) => {
                  (t.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`),
                    n || (s.f.to(t, { autoAlpha: 1, duration: 0.2 }), (n = !0));
                },
                c = (e) => {
                  let t = e.target;
                  if (!t?.closest) return;
                  let i = t.closest("[data-cursor]");
                  if (i) {
                    r("view"), o(i.dataset.cursorLabel ?? "");
                    return;
                  }
                  if (t.closest("a, button, [role='button'], label")) {
                    r("link"), o("");
                    return;
                  }
                  if ("IMG" === t.tagName) {
                    r("view"), o("");
                    return;
                  }
                  r("default"), o("");
                },
                d = () => {
                  s.f.to(t, { autoAlpha: 0, duration: 0.2 }), (n = !1);
                };
              return (
                window.addEventListener("pointermove", l, { passive: !0 }),
                document.addEventListener("pointerover", c, { passive: !0 }),
                i.addEventListener("pointerleave", d),
                () => {
                  i.classList.remove("has-cursor"),
                    window.removeEventListener("pointermove", l),
                    document.removeEventListener("pointerover", c),
                    i.removeEventListener("pointerleave", d);
                }
              );
            }, [e]),
            e)
              ? (0, t.jsx)("div", {
                  ref: a,
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none fixed left-0 top-0 z-[120] opacity-0",
                  children: (0, t.jsx)("div", {
                    className: "cursor-ball",
                    "data-mode": n,
                    children:
                      "view" === n && l
                        ? (0, t.jsx)("span", { children: l })
                        : null,
                  }),
                })
              : null;
          },
        ],
        9148
      );
    },
    2564,
    (e) => {
      var t = e.i(43476),
        i = e.i(71645);
      e.i(65506);
      var s = e.i(40462),
        a = e.i(65747);
      e.s([
        "f",
        0,
        function ({
          text: e,
          className: n = "",
          distance: r = 30,
          reverse: l = !1,
          tone: o = "fog",
        }) {
          let c = (0, i.useRef)(null);
          return (
            (0, a.f)(
              () => {
                s.f.fromTo(
                  c.current,
                  { xPercent: l ? -r : 0 },
                  {
                    xPercent: l ? 0 : -r,
                    ease: "none",
                    scrollTrigger: {
                      trigger: c.current,
                      start: "top bottom",
                      end: "bottom top",
                      scrub: !0,
                    },
                  }
                );
              },
              { scope: c }
            ),
            (0, t.jsx)("div", {
              ref: c,
              "aria-hidden": !0,
              className: `pointer-events-none select-none whitespace-nowrap font-black uppercase leading-[0.8] tracking-[-0.04em] ${
                "pink" === o
                  ? "text-outline-pink"
                  : "black" === o
                  ? "text-outline-black"
                  : "text-outline"
              } ${n}`,
              children: Array.from({ length: 4 }, () => `${e} • `).join(""),
            })
          );
        },
      ]);
    },
    91879,
    (e) => {
      var t = e.i(43476),
        i = e.i(71645),
        s = e.i(94409);
      e.s([
        "SmokeTrail",
        0,
        function () {
          let e = (0, i.useRef)(null);
          return (
            (0, i.useEffect)(() => {
              let t = e.current;
              if (
                !t ||
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              )
                return;
              let i = t.getContext("2d");
              if (!i) return;
              let a = window.innerWidth < 768 ? 80 : 170,
                n = 0,
                r = 0,
                l = () => {
                  (n = window.innerWidth),
                    (r = window.innerHeight),
                    (t.width = Math.ceil(0.5 * n)),
                    (t.height = Math.ceil(0.5 * r));
                };
              l(), window.addEventListener("resize", l);
              let o = document.createElement("canvas");
              o.width = o.height = 128;
              let c = o.getContext("2d");
              if (c) {
                let e = c.createRadialGradient(64, 64, 0, 64, 64, 64);
                e.addColorStop(0, "rgba(255,0,140,0.85)"),
                  e.addColorStop(0.4, "rgba(255,0,140,0.38)"),
                  e.addColorStop(1, "rgba(255,0,140,0)"),
                  (c.fillStyle = e),
                  c.fillRect(0, 0, 128, 128);
              }
              let d = [],
                h = 0,
                m = !1,
                p = 0,
                u = s.v.y,
                x = -1,
                f = -1,
                g = (e, t) => {
                  d.push({
                    x: e + (Math.random() - 0.5) * 14,
                    y: t + (Math.random() - 0.5) * 14,
                    vx: (Math.random() - 0.5) * 40,
                    vy: -10 - 25 * Math.random(),
                    r: 10 + 16 * Math.random(),
                    grow: 40 + 60 * Math.random(),
                    life: 0,
                    max: 1.4 + 1.3 * Math.random(),
                    alpha: 0.16 + 0.16 * Math.random(),
                  }),
                    d.length > a && d.splice(0, d.length - a);
                },
                v = (e) => {
                  let a = Math.min(0.05, (e - p) / 1e3);
                  p = e;
                  let n = s.v.y - u;
                  (u = s.v.y), i.clearRect(0, 0, t.width, t.height);
                  for (let e = d.length - 1; e >= 0; e--) {
                    let t = d[e];
                    if (((t.life += a), t.life >= t.max)) {
                      d.splice(e, 1);
                      continue;
                    }
                    let s = t.life / t.max;
                    (t.x += t.vx * a),
                      (t.y += t.vy * a - n),
                      (t.vx *= 0.985),
                      (t.r += t.grow * a),
                      (i.globalAlpha =
                        t.alpha *
                        (s < 0.12 ? s / 0.12 : 1 - (s - 0.12) / 0.88));
                    let r = 2 * t.r * 0.5;
                    i.drawImage(o, (t.x - t.r) * 0.5, (t.y - t.r) * 0.5, r, r);
                  }
                  (i.globalAlpha = 1),
                    d.length ? (h = requestAnimationFrame(v)) : (m = !1);
                },
                b = (0, s.V)(() => {
                  let e;
                  if (document.hidden) return;
                  let t = Math.abs(s.v.velocity);
                  if (t < 0.6) return;
                  let [i, a] =
                    ((e = s.v.y),
                    [
                      n * (0.5 + 0.4 * Math.sin(0.0016 * e)),
                      r * (0.55 + 0.25 * Math.sin(0.001 * e + 1.2)),
                    ]);
                  x < 0 && ((x = i), (f = a));
                  let l = Math.min(6, Math.ceil(t / 8));
                  for (let e = 1; e <= l; e++) {
                    let t = e / l;
                    g(x + (i - x) * t, f + (a - f) * t);
                  }
                  (x = i),
                    (f = a),
                    m ||
                      ((m = !0),
                      (p = performance.now()),
                      (u = s.v.y),
                      (h = requestAnimationFrame(v)));
                });
              return () => {
                b(),
                  cancelAnimationFrame(h),
                  window.removeEventListener("resize", l);
              };
            }, []),
            (0, t.jsx)("canvas", {
              ref: e,
              "aria-hidden": !0,
              className:
                "pointer-events-none fixed inset-0 z-[45] h-full w-full mix-blend-screen",
            })
          );
        },
      ]);
    },
    77482,
    (e) => {
      var t = e.i(43476);
      let i = [
        { top: 8, w: 22, d: 1.9, delay: 0 },
        { top: 17, w: 34, d: 1.3, delay: 0.6 },
        { top: 26, w: 18, d: 2.4, delay: 1.1 },
        { top: 37, w: 40, d: 1.1, delay: 0.2 },
        { top: 45, w: 26, d: 2.1, delay: 1.6 },
        { top: 54, w: 30, d: 1.5, delay: 0.9 },
        { top: 63, w: 20, d: 2.7, delay: 0.4 },
        { top: 71, w: 38, d: 1.2, delay: 1.9 },
        { top: 80, w: 24, d: 1.8, delay: 1.3 },
        { top: 91, w: 32, d: 1.4, delay: 0.7 },
      ];
      e.s([
        "f",
        0,
        function ({ dark: e = !1, className: s = "" }) {
          return (0, t.jsx)("div", {
            "aria-hidden": !0,
            className: `pointer-events-none absolute inset-0 overflow-hidden ${s}`,
            children: i.map((i, s) =>
              (0, t.jsx)(
                "span",
                {
                  className: `speedline ${e ? "is-dark" : ""}`,
                  style: {
                    top: `${i.top}%`,
                    width: `${i.w}%`,
                    animationDuration: `${i.d}s`,
                    animationDelay: `${i.delay}s`,
                  },
                },
                s
              )
            ),
          });
        },
      ]);
    },
    66120,
    (e) => {
      var t = e.i(43476),
        i = "1.3.27";
      function s(e, t, i) {
        return Math.max(e, Math.min(t, i));
      }
      var a = class {
          isRunning = !1;
          value = 0;
          from = 0;
          to = 0;
          currentTime = 0;
          lerp;
          duration;
          easing;
          onUpdate;
          advance(e) {
            if (!this.isRunning) return;
            let t = !1;
            if (this.duration && this.easing) {
              this.currentTime += e;
              let i = s(0, this.currentTime / this.duration, 1),
                a = (t = i >= 1) ? 1 : this.easing(i);
              this.value = this.from + (this.to - this.from) * a;
            } else if (this.lerp) {
              var i, a, n, r;
              (this.value =
                ((i = this.value),
                (a = this.to),
                (n = 60 * this.lerp),
                (1 - (r = 1 - Math.exp(-n * e))) * i + r * a)),
                Math.round(this.value) === Math.round(this.to) &&
                  ((this.value = this.to), (t = !0));
            } else (this.value = this.to), (t = !0);
            t && this.stop(), this.onUpdate?.(this.value, t);
          }
          stop() {
            this.isRunning = !1;
          }
          fromTo(
            e,
            t,
            { lerp: i, duration: s, easing: a, onStart: n, onUpdate: r }
          ) {
            (this.from = this.value = e),
              (this.to = t),
              (this.lerp = i),
              (this.duration = s),
              (this.easing = a),
              (this.currentTime = 0),
              (this.isRunning = !0),
              n?.(),
              (this.onUpdate = r);
          }
        },
        n = class {
          width = 0;
          height = 0;
          scrollHeight = 0;
          scrollWidth = 0;
          debouncedResize;
          wrapperResizeObserver;
          contentResizeObserver;
          constructor(e, t, { autoResize: i = !0, debounce: s = 250 } = {}) {
            if (((this.wrapper = e), (this.content = t), i)) {
              var a;
              let e;
              (this.debouncedResize =
                ((a = this.resize),
                function (...t) {
                  clearTimeout(e),
                    (e = setTimeout(() => {
                      (e = void 0), a.apply(this, t);
                    }, s));
                })),
                this.wrapper instanceof Window
                  ? window.addEventListener("resize", this.debouncedResize)
                  : ((this.wrapperResizeObserver = new ResizeObserver(
                      this.debouncedResize
                    )),
                    this.wrapperResizeObserver.observe(this.wrapper)),
                (this.contentResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.contentResizeObserver.observe(this.content);
            }
            this.resize();
          }
          destroy() {
            this.wrapperResizeObserver?.disconnect(),
              this.contentResizeObserver?.disconnect(),
              this.wrapper === window &&
                this.debouncedResize &&
                window.removeEventListener("resize", this.debouncedResize);
          }
          resize = () => {
            this.onWrapperResize(), this.onContentResize();
          };
          onWrapperResize = () => {
            this.wrapper instanceof Window
              ? ((this.width = window.innerWidth),
                (this.height = window.innerHeight))
              : ((this.width = this.wrapper.clientWidth),
                (this.height = this.wrapper.clientHeight));
          };
          onContentResize = () => {
            this.wrapper instanceof Window
              ? ((this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth))
              : ((this.scrollHeight = this.wrapper.scrollHeight),
                (this.scrollWidth = this.wrapper.scrollWidth));
          };
          get limit() {
            return {
              x: this.scrollWidth - this.width,
              y: this.scrollHeight - this.height,
            };
          }
        },
        r = class {
          events = {};
          emit(e, ...t) {
            let i = this.events[e] || [];
            for (let e = 0, s = i.length; e < s; e++) i[e]?.(...t);
          }
          on(e, t) {
            return (
              this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
              () => {
                this.events[e] = this.events[e]?.filter((e) => t !== e);
              }
            );
          }
          off(e, t) {
            this.events[e] = this.events[e]?.filter((e) => t !== e);
          }
          destroy() {
            this.events = {};
          }
        };
      let l = 100 / 6,
        o = { passive: !1 };
      function c(e, t) {
        return 1 === e ? l : 2 === e ? t : 1;
      }
      var d = class {
        touchStart = { x: 0, y: 0 };
        lastDelta = { x: 0, y: 0 };
        window = { width: 0, height: 0 };
        emitter = new r();
        constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
          (this.element = e),
            (this.options = t),
            window.addEventListener("resize", this.onWindowResize),
            this.onWindowResize(),
            this.element.addEventListener("wheel", this.onWheel, o),
            this.element.addEventListener("touchstart", this.onTouchStart, o),
            this.element.addEventListener("touchmove", this.onTouchMove, o),
            this.element.addEventListener("touchend", this.onTouchEnd, o);
        }
        on(e, t) {
          return this.emitter.on(e, t);
        }
        destroy() {
          this.emitter.destroy(),
            window.removeEventListener("resize", this.onWindowResize),
            this.element.removeEventListener("wheel", this.onWheel, o),
            this.element.removeEventListener(
              "touchstart",
              this.onTouchStart,
              o
            ),
            this.element.removeEventListener("touchmove", this.onTouchMove, o),
            this.element.removeEventListener("touchend", this.onTouchEnd, o);
        }
        onTouchStart = (e) => {
          let { clientX: t, clientY: i } = e.targetTouches
            ? e.targetTouches[0]
            : e;
          (this.touchStart.x = t),
            (this.touchStart.y = i),
            (this.lastDelta = { x: 0, y: 0 }),
            this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
        };
        onTouchMove = (e) => {
          let { clientX: t, clientY: i } = e.targetTouches
              ? e.targetTouches[0]
              : e,
            s = -(t - this.touchStart.x) * this.options.touchMultiplier,
            a = -(i - this.touchStart.y) * this.options.touchMultiplier;
          (this.touchStart.x = t),
            (this.touchStart.y = i),
            (this.lastDelta = { x: s, y: a }),
            this.emitter.emit("scroll", { deltaX: s, deltaY: a, event: e });
        };
        onTouchEnd = (e) => {
          this.emitter.emit("scroll", {
            deltaX: this.lastDelta.x,
            deltaY: this.lastDelta.y,
            event: e,
          });
        };
        onWheel = (e) => {
          let { deltaX: t, deltaY: i, deltaMode: s } = e,
            a = c(s, this.window.width),
            n = c(s, this.window.height);
          (t *= a),
            (i *= n),
            (t *= this.options.wheelMultiplier),
            (i *= this.options.wheelMultiplier),
            this.emitter.emit("scroll", { deltaX: t, deltaY: i, event: e });
        };
        onWindowResize = () => {
          this.window = {
            width: window.innerWidth,
            height: window.innerHeight,
          };
        };
      };
      let h = (e) => Math.min(1, 1.001 - 2 ** (-10 * e));
      var m = class {
          _isScrolling = !1;
          _isStopped = !1;
          _isLocked = !1;
          _preventNextNativeScrollEvent = !1;
          _resetVelocityTimeout = null;
          _rafId = null;
          _isDraggingSelection = !1;
          reducedMotionMediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
          );
          isTouching;
          isIos;
          time = 0;
          userData = {};
          lastVelocity = 0;
          velocity = 0;
          direction = 0;
          options;
          targetScroll;
          animatedScroll;
          animate = new a();
          emitter = new r();
          dimensions;
          virtualScroll;
          constructor({
            wrapper: e = window,
            content: t = document.documentElement,
            eventsTarget: s = e,
            smoothWheel: a = !0,
            syncTouch: r = !1,
            syncTouchLerp: l = 0.075,
            touchInertiaExponent: o = 1.7,
            duration: c,
            easing: m,
            lerp: p = 0.1,
            infinite: u = !1,
            orientation: x = "vertical",
            gestureOrientation: f = "horizontal" === x ? "both" : "vertical",
            touchMultiplier: g = 1,
            wheelMultiplier: v = 1,
            autoResize: b = !0,
            prevent: w,
            virtualScroll: y,
            overscroll: j = !0,
            autoRaf: N = !1,
            anchors: k = !1,
            autoToggle: S = !1,
            allowNestedScroll: E = !1,
            __experimental__naiveDimensions: T = !1,
            naiveDimensions: M = T,
            stopInertiaOnNavigate: L = !1,
            respectReducedMotion: z = !0,
          } = {}) {
            (window.lenisVersion = i),
              window.lenis || (window.lenis = {}),
              (window.lenis.version = i),
              "horizontal" === x && (window.lenis.horizontal = !0),
              !0 === r && (window.lenis.touch = !0),
              (this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
              (e && e !== document.documentElement) || (e = window),
              "number" == typeof c && "function" != typeof m
                ? (m = h)
                : "function" == typeof m && "number" != typeof c && (c = 1),
              (this.options = {
                wrapper: e,
                content: t,
                eventsTarget: s,
                smoothWheel: a,
                syncTouch: r,
                syncTouchLerp: l,
                touchInertiaExponent: o,
                duration: c,
                easing: m,
                lerp: p,
                infinite: u,
                gestureOrientation: f,
                orientation: x,
                touchMultiplier: g,
                wheelMultiplier: v,
                autoResize: b,
                prevent: w,
                virtualScroll: y,
                overscroll: j,
                autoRaf: N,
                anchors: k,
                autoToggle: S,
                allowNestedScroll: E,
                naiveDimensions: M,
                stopInertiaOnNavigate: L,
                respectReducedMotion: z,
              }),
              (this.dimensions = new n(e, t, { autoResize: b })),
              this.updateClassName(),
              (this.targetScroll = this.animatedScroll = this.actualScroll),
              this.options.wrapper.addEventListener(
                "scroll",
                this.onNativeScroll
              ),
              this.options.wrapper.addEventListener(
                "scrollend",
                this.onScrollEnd,
                { capture: !0 }
              ),
              (this.options.anchors || this.options.stopInertiaOnNavigate) &&
                this.options.wrapper.addEventListener("click", this.onClick),
              this.options.wrapper.addEventListener(
                "pointerdown",
                this.onPointerDown
              ),
              (this.virtualScroll = new d(s, {
                touchMultiplier: g,
                wheelMultiplier: v,
              })),
              this.virtualScroll.on("scroll", this.onVirtualScroll),
              this.options.autoToggle &&
                (this.checkOverflow(),
                this.rootElement.addEventListener(
                  "transitionend",
                  this.onTransitionEnd
                )),
              this.options.autoRaf &&
                (this._rafId = requestAnimationFrame(this.raf));
          }
          destroy() {
            this.emitter.destroy(),
              null !== this._resetVelocityTimeout &&
                (clearTimeout(this._resetVelocityTimeout),
                (this._resetVelocityTimeout = null)),
              this.options.wrapper.removeEventListener(
                "scroll",
                this.onNativeScroll
              ),
              this.options.wrapper.removeEventListener(
                "scrollend",
                this.onScrollEnd,
                { capture: !0 }
              ),
              this.options.wrapper.removeEventListener(
                "pointerdown",
                this.onPointerDown
              ),
              (this.options.anchors || this.options.stopInertiaOnNavigate) &&
                this.options.wrapper.removeEventListener("click", this.onClick),
              this.virtualScroll.destroy(),
              this.dimensions.destroy(),
              this.cleanUpClassName(),
              this._rafId && cancelAnimationFrame(this._rafId);
          }
          on(e, t) {
            return this.emitter.on(e, t);
          }
          off(e, t) {
            return this.emitter.off(e, t);
          }
          onScrollEnd = (e) => {
            e instanceof CustomEvent ||
              ("smooth" !== this.isScrolling && !1 !== this.isScrolling) ||
              e.stopPropagation();
          };
          dispatchScrollendEvent = () => {
            this.options.wrapper.dispatchEvent(
              new CustomEvent("scrollend", {
                bubbles: this.options.wrapper === window,
                detail: { lenisScrollEnd: !0 },
              })
            );
          };
          get overflow() {
            let e = this.isHorizontal ? "overflow-x" : "overflow-y";
            return getComputedStyle(this.rootElement)[e];
          }
          checkOverflow() {
            ["hidden", "clip"].includes(this.overflow)
              ? this.internalStop()
              : this.internalStart();
          }
          onTransitionEnd = (e) => {
            e.propertyName?.includes("overflow") &&
              e.target === this.rootElement &&
              this.checkOverflow();
          };
          setScroll(e) {
            this.isHorizontal
              ? this.options.wrapper.scrollTo({ left: e, behavior: "instant" })
              : this.options.wrapper.scrollTo({ top: e, behavior: "instant" });
          }
          onClick = (e) => {
            let t = e
                .composedPath()
                .filter((e) => e instanceof HTMLAnchorElement && e.href)
                .map((e) => new URL(e.href)),
              i = new URL(window.location.href);
            if (this.options.anchors) {
              let e = t.find(
                (e) => i.host === e.host && i.pathname === e.pathname && e.hash
              );
              if (e) {
                let t =
                    "object" == typeof this.options.anchors &&
                    this.options.anchors
                      ? this.options.anchors
                      : void 0,
                  i = decodeURIComponent(e.hash);
                this.scrollTo(i, t);
                return;
              }
            }
            if (
              this.options.stopInertiaOnNavigate &&
              t.some((e) => i.host === e.host && i.pathname !== e.pathname)
            )
              return void this.reset();
          };
          onPointerDown = (e) => {
            1 === e.button && this.reset();
          };
          isTouchOnSelectionHandle(e) {
            let t = window.getSelection();
            if (!t || t.isCollapsed || 0 === t.rangeCount) return !1;
            let i = e.targetTouches[0] ?? e.changedTouches[0];
            if (!i) return !1;
            let s = t.getRangeAt(0).getClientRects();
            if (0 === s.length) return !1;
            let a = s[0],
              n = s[s.length - 1],
              r = 40 >= Math.hypot(i.clientX - a.left, i.clientY - a.top),
              l = 40 >= Math.hypot(i.clientX - n.right, i.clientY - n.bottom);
            return r || l;
          }
          onVirtualScroll = (e) => {
            if (
              "function" == typeof this.options.virtualScroll &&
              !1 === this.options.virtualScroll(e)
            )
              return;
            let { deltaX: t, deltaY: i, event: s } = e;
            if (
              (this.emitter.emit("virtual-scroll", {
                deltaX: t,
                deltaY: i,
                event: s,
              }),
              s.ctrlKey || s.lenisStopPropagation)
            )
              return;
            let a = s.type.includes("touch"),
              n = s.type.includes("wheel");
            if (
              a &&
              this.isIos &&
              ("touchstart" === s.type &&
                (this._isDraggingSelection = this.isTouchOnSelectionHandle(s)),
              this._isDraggingSelection)
            ) {
              "touchend" === s.type && (this._isDraggingSelection = !1);
              return;
            }
            this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
            let r = 0 === t && 0 === i;
            if (
              this.options.syncTouch &&
              a &&
              "touchstart" === s.type &&
              r &&
              !this.isStopped &&
              !this.isLocked
            )
              return void this.reset();
            let l =
              ("vertical" === this.options.gestureOrientation && 0 === i) ||
              ("horizontal" === this.options.gestureOrientation && 0 === t);
            if (r || l) return;
            let o = s.composedPath();
            o = o.slice(0, o.indexOf(this.rootElement));
            let c = this.options.prevent,
              d = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
            if (
              o.find(
                (e) =>
                  e instanceof HTMLElement &&
                  (("function" == typeof c && c?.(e)) ||
                    e.hasAttribute?.("data-lenis-prevent") ||
                    ("vertical" === d &&
                      e.hasAttribute?.("data-lenis-prevent-vertical")) ||
                    ("horizontal" === d &&
                      e.hasAttribute?.("data-lenis-prevent-horizontal")) ||
                    (a && e.hasAttribute?.("data-lenis-prevent-touch")) ||
                    (n && e.hasAttribute?.("data-lenis-prevent-wheel")) ||
                    (this.options.allowNestedScroll &&
                      this.hasNestedScroll(e, { deltaX: t, deltaY: i })))
              )
            )
              return;
            if (this.isStopped || this.isLocked) {
              s.cancelable && s.preventDefault();
              return;
            }
            if (
              !(
                (this.options.syncTouch && a) ||
                (this.options.smoothWheel && n)
              )
            ) {
              (this.isScrolling = "native"),
                this.animate.stop(),
                (s.lenisStopPropagation = !0);
              return;
            }
            let h = i;
            "both" === this.options.gestureOrientation
              ? (h = Math.abs(i) > Math.abs(t) ? i : t)
              : "horizontal" === this.options.gestureOrientation && (h = t),
              (!this.options.overscroll ||
                this.options.infinite ||
                (this.options.wrapper !== window &&
                  this.limit > 0 &&
                  ((this.animatedScroll > 0 &&
                    this.animatedScroll < this.limit) ||
                    (0 === this.animatedScroll && i > 0) ||
                    (this.animatedScroll === this.limit && i < 0)))) &&
                (s.lenisStopPropagation = !0),
              s.cancelable && s.preventDefault();
            let m = a && this.options.syncTouch,
              p = a && "touchend" === s.type;
            p &&
              (h =
                Math.sign(h) *
                Math.abs(this.velocity) ** this.options.touchInertiaExponent),
              this.scrollTo(this.targetScroll + h, {
                programmatic: !1,
                ...(m
                  ? { lerp: p ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }),
              });
          };
          resize() {
            this.dimensions.resize(),
              (this.animatedScroll = this.targetScroll = this.actualScroll),
              this.emit();
          }
          emit() {
            this.emitter.emit("scroll", this);
          }
          onNativeScroll = () => {
            if (
              (null !== this._resetVelocityTimeout &&
                (clearTimeout(this._resetVelocityTimeout),
                (this._resetVelocityTimeout = null)),
              this._preventNextNativeScrollEvent)
            ) {
              this._preventNextNativeScrollEvent = !1;
              return;
            }
            if (!1 === this.isScrolling || "native" === this.isScrolling) {
              let e = this.animatedScroll;
              (this.animatedScroll = this.targetScroll = this.actualScroll),
                (this.lastVelocity = this.velocity),
                (this.velocity = this.animatedScroll - e),
                (this.direction = Math.sign(this.animatedScroll - e)),
                this.isStopped || (this.isScrolling = "native"),
                this.emit(),
                0 !== this.velocity &&
                  (this._resetVelocityTimeout = setTimeout(() => {
                    (this.lastVelocity = this.velocity),
                      (this.velocity = 0),
                      (this.isScrolling = !1),
                      this.emit();
                  }, 400));
            }
          };
          reset() {
            (this.isLocked = !1),
              (this.isScrolling = !1),
              (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity = 0),
              this.animate.stop();
          }
          start() {
            if (this.isStopped) {
              if (this.options.autoToggle)
                return void this.rootElement.style.removeProperty("overflow");
              this.internalStart();
            }
          }
          internalStart() {
            this.isStopped &&
              (this.reset(), (this.isStopped = !1), this.emit());
          }
          stop() {
            if (!this.isStopped) {
              if (this.options.autoToggle)
                return void this.rootElement.style.setProperty(
                  "overflow",
                  "clip"
                );
              this.internalStop();
            }
          }
          internalStop() {
            this.isStopped ||
              (this.reset(), (this.isStopped = !0), this.emit());
          }
          raf = (e) => {
            let t = e - (this.time || e);
            (this.time = e),
              this.animate.advance(0.001 * t),
              this.options.autoRaf &&
                (this._rafId = requestAnimationFrame(this.raf));
          };
          scrollTo(
            e,
            {
              offset: t = 0,
              immediate: i = !1,
              lock: a = !1,
              programmatic: n = !0,
              lerp: r = n ? this.options.lerp : void 0,
              duration: l = n ? this.options.duration : void 0,
              easing: o = n ? this.options.easing : void 0,
              onStart: c,
              onComplete: d,
              force: m = !1,
              userData: p,
            } = {}
          ) {
            if (
              (this.prefersReducedMotion &&
                (n ? (i = !0) : ((r = 1), (l = void 0), (o = void 0))),
              (this.isStopped || this.isLocked) && !m)
            )
              return;
            let u = e,
              x = t;
            if (
              "string" == typeof u &&
              ["top", "left", "start", "#"].includes(u)
            )
              u = 0;
            else if (
              "string" == typeof u &&
              ["bottom", "right", "end"].includes(u)
            )
              u = this.limit;
            else {
              let e = null;
              if (
                ("string" == typeof u
                  ? (e = u.startsWith("#")
                      ? document.getElementById(u.slice(1))
                      : document.querySelector(u)) ||
                    ("#top" === u
                      ? (u = 0)
                      : console.warn("Lenis: Target not found", u))
                  : u instanceof Element && (e = u),
                e)
              ) {
                if (this.options.wrapper !== window) {
                  let e = this.rootElement.getBoundingClientRect();
                  x -= this.isHorizontal ? e.left : e.top;
                }
                let t = e.getBoundingClientRect(),
                  i = getComputedStyle(e),
                  s = this.isHorizontal
                    ? Number.parseFloat(i.scrollMarginLeft)
                    : Number.parseFloat(i.scrollMarginTop),
                  a = getComputedStyle(this.rootElement),
                  n = this.isHorizontal
                    ? Number.parseFloat(a.scrollPaddingLeft)
                    : Number.parseFloat(a.scrollPaddingTop);
                u =
                  (this.isHorizontal ? t.left : t.top) +
                  this.animatedScroll -
                  (Number.isNaN(s) ? 0 : s) -
                  (Number.isNaN(n) ? 0 : n);
              }
            }
            if ("number" == typeof u) {
              if (((u += x), this.options.infinite)) {
                if (n) {
                  this.targetScroll = this.animatedScroll = this.scroll;
                  let e = u - this.animatedScroll;
                  e > this.limit / 2
                    ? (u -= this.limit)
                    : e < -this.limit / 2 && (u += this.limit);
                }
              } else u = s(0, u, this.limit);
              if (u === this.targetScroll) {
                c?.(this), d?.(this);
                return;
              }
              if (((this.userData = p ?? {}), i)) {
                (this.animatedScroll = this.targetScroll = u),
                  this.setScroll(this.scroll),
                  this.reset(),
                  this.preventNextNativeScrollEvent(),
                  this.emit(),
                  d?.(this),
                  (this.userData = {}),
                  requestAnimationFrame(() => {
                    this.dispatchScrollendEvent();
                  });
                return;
              }
              n || (this.targetScroll = u),
                "number" == typeof l && "function" != typeof o
                  ? (o = h)
                  : "function" == typeof o && "number" != typeof l && (l = 1),
                this.animate.fromTo(this.animatedScroll, u, {
                  duration: l,
                  easing: o,
                  lerp: r,
                  onStart: () => {
                    a && (this.isLocked = !0),
                      (this.isScrolling = "smooth"),
                      c?.(this);
                  },
                  onUpdate: (e, t) => {
                    (this.isScrolling = "smooth"),
                      (this.lastVelocity = this.velocity),
                      (this.velocity = e - this.animatedScroll),
                      (this.direction = Math.sign(this.velocity)),
                      (this.animatedScroll = e),
                      this.setScroll(this.scroll),
                      n && (this.targetScroll = e),
                      t || this.emit(),
                      t &&
                        (this.reset(),
                        this.emit(),
                        d?.(this),
                        (this.userData = {}),
                        requestAnimationFrame(() => {
                          this.dispatchScrollendEvent();
                        }),
                        this.preventNextNativeScrollEvent());
                  },
                });
            }
          }
          preventNextNativeScrollEvent() {
            (this._preventNextNativeScrollEvent = !0),
              requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1;
              });
          }
          hasNestedScroll(e, { deltaX: t, deltaY: i }) {
            let s,
              a,
              n,
              r,
              l,
              o,
              c,
              d,
              h,
              m,
              p,
              u,
              x,
              f,
              g,
              v,
              b = Date.now();
            e._lenis || (e._lenis = {});
            let w = e._lenis;
            if (b - (w.time ?? 0) > 2e3) {
              w.time = Date.now();
              let t = window.getComputedStyle(e);
              if (
                ((w.computedStyle = t),
                (s = ["auto", "overlay", "scroll"].includes(t.overflowX)),
                (a = ["auto", "overlay", "scroll"].includes(t.overflowY)),
                (l = ["auto"].includes(t.overscrollBehaviorX)),
                (o = ["auto"].includes(t.overscrollBehaviorY)),
                (w.hasOverflowX = s),
                (w.hasOverflowY = a),
                !(s || a))
              )
                return !1;
              (c = e.scrollWidth),
                (d = e.scrollHeight),
                (h = e.clientWidth),
                (m = e.clientHeight),
                (n = c > h),
                (r = d > m),
                (w.isScrollableX = n),
                (w.isScrollableY = r),
                (w.scrollWidth = c),
                (w.scrollHeight = d),
                (w.clientWidth = h),
                (w.clientHeight = m),
                (w.hasOverscrollBehaviorX = l),
                (w.hasOverscrollBehaviorY = o);
            } else
              (n = w.isScrollableX),
                (r = w.isScrollableY),
                (s = w.hasOverflowX),
                (a = w.hasOverflowY),
                (c = w.scrollWidth),
                (d = w.scrollHeight),
                (h = w.clientWidth),
                (m = w.clientHeight),
                (l = w.hasOverscrollBehaviorX),
                (o = w.hasOverscrollBehaviorY);
            if (!((s && n) || (a && r))) return !1;
            let y = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
            if ("horizontal" === y)
              (p = Math.round(e.scrollLeft)),
                (u = c - h),
                (x = t),
                (f = s),
                (g = n),
                (v = l);
            else {
              if ("vertical" !== y) return !1;
              (p = Math.round(e.scrollTop)),
                (u = d - m),
                (x = i),
                (f = a),
                (g = r),
                (v = o);
            }
            return (
              (!v && (p >= u || p <= 0)) || ((x > 0 ? p < u : p > 0) && f && g)
            );
          }
          get rootElement() {
            return this.options.wrapper === window
              ? document.documentElement
              : this.options.wrapper;
          }
          get limit() {
            return this.options.naiveDimensions
              ? this.isHorizontal
                ? this.rootElement.scrollWidth - this.rootElement.clientWidth
                : this.rootElement.scrollHeight - this.rootElement.clientHeight
              : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
          }
          get isHorizontal() {
            return "horizontal" === this.options.orientation;
          }
          get actualScroll() {
            let e = this.options.wrapper;
            return this.isHorizontal
              ? e.scrollX ?? e.scrollLeft
              : e.scrollY ?? e.scrollTop;
          }
          get scroll() {
            var e;
            return this.options.infinite
              ? ((this.animatedScroll % (e = this.limit)) + e) % e
              : this.animatedScroll;
          }
          get progress() {
            return 0 === this.limit ? 1 : this.scroll / this.limit;
          }
          get isScrolling() {
            return this._isScrolling;
          }
          set isScrolling(e) {
            this._isScrolling !== e &&
              ((this._isScrolling = e), this.updateClassName());
          }
          get isStopped() {
            return this._isStopped;
          }
          set isStopped(e) {
            this._isStopped !== e &&
              ((this._isStopped = e), this.updateClassName());
          }
          get isLocked() {
            return this._isLocked;
          }
          set isLocked(e) {
            this._isLocked !== e &&
              ((this._isLocked = e), this.updateClassName());
          }
          get isSmooth() {
            return "smooth" === this.isScrolling;
          }
          get prefersReducedMotion() {
            return (
              this.options.respectReducedMotion &&
              this.reducedMotionMediaQuery.matches
            );
          }
          get className() {
            let e = "lenis";
            return (
              this.options.autoToggle && (e += " lenis-autoToggle"),
              this.isStopped && (e += " lenis-stopped"),
              this.isLocked && (e += " lenis-locked"),
              this.isScrolling && (e += " lenis-scrolling"),
              "smooth" === this.isScrolling && (e += " lenis-smooth"),
              e
            );
          }
          updateClassName() {
            this.cleanUpClassName(),
              this.className.split(" ").forEach((e) => {
                this.rootElement.classList.add(e);
              });
          }
          cleanUpClassName() {
            for (let e of Array.from(this.rootElement.classList))
              ("lenis" === e || e.startsWith("lenis-")) &&
                this.rootElement.classList.remove(e);
          }
        },
        p = e.i(71645);
      e.i(65506);
      var u = e.i(40462),
        x = e.i(83495),
        f = e.i(94409);
      let g = (0, p.createContext)(null);
      e.s(
        [
          "Providers",
          0,
          function ({ children: e }) {
            let [i, s] = (0, p.useState)(!1),
              a = (0, p.useRef)(!1),
              n = (0, p.useCallback)(() => {
                (a.current = !0), s(!0);
              }, []);
            (0, p.useEffect)(() => {
              if (
                ("scrollRestoration" in history &&
                  (history.scrollRestoration = "manual"),
                window.scrollTo(0, 0),
                x.f.config({ ignoreMobileResize: !0 }),
                window.matchMedia("(prefers-reduced-motion: reduce)").matches)
              ) {
                let e = window.scrollY,
                  t = () => {
                    let t = window.scrollY;
                    (f.v.velocity = t - e), (f.v.y = t), (e = t), (0, f.K)();
                  };
                return (
                  window.addEventListener("scroll", t, { passive: !0 }),
                  () => window.removeEventListener("scroll", t)
                );
              }
              let e = new m({ lerp: 0.085 });
              (f.v.lenis = e),
                a.current || e.stop(),
                e.on("scroll", (e) => {
                  (f.v.y = e.scroll),
                    (f.v.velocity = e.velocity),
                    x.f.update(),
                    (0, f.K)();
                });
              let t = (t) => e.raf(1e3 * t);
              return (
                u.f.ticker.add(t),
                u.f.ticker.lagSmoothing(0),
                () => {
                  u.f.ticker.remove(t), e.destroy(), (f.v.lenis = null);
                }
              );
            }, []),
              (0, p.useEffect)(() => {
                if (!i) return;
                (0, f.i)(!1);
                let e = () => x.f.refresh();
                document.fonts?.ready.then(e);
                let t = window.setTimeout(() => {
                  e();
                  let t = window.location.hash.slice(1);
                  t && document.getElementById(t) && (0, f.u)(`#${t}`);
                }, 400);
                return () => window.clearTimeout(t);
              }, [i]);
            let r = (0, p.useMemo)(() => ({ ready: i, markReady: n }), [i, n]);
            return (0, t.jsx)(g.Provider, { value: r, children: e });
          },
          "useSite",
          0,
          function () {
            let e = (0, p.useContext)(g);
            if (!e) throw Error("useSite must be used inside <Providers>");
            return e;
          },
        ],
        66120
      );
    },
    87018,
    (e) => {
      var t = e.i(43476),
        i = e.i(98194),
        s = e.i(46932),
        a = e.i(71645),
        n = e.i(60029),
        r = e.i(68055),
        l = e.i(8803);
      e.i(65506);
      var o = e.i(40462),
        c = e.i(65747);
      function d({ label: e, value: i, delay: a }) {
        return (0, t.jsxs)("div", {
          className: "grid grid-cols-[68px_1fr_26px] items-center gap-3",
          children: [
            (0, t.jsx)("dt", {
              className:
                "text-[9px] font-semibold uppercase tracking-[0.3em] text-fog/60",
              children: e,
            }),
            (0, t.jsx)("dd", {
              className: "h-1.5 overflow-hidden bg-fog/10",
              children: (0, t.jsx)(s.f.span, {
                className: "block h-full origin-left bg-dacity",
                variants: {
                  hidden: { scaleX: 0 },
                  show: {
                    scaleX: i / 100,
                    transition: {
                      duration: 1.3,
                      delay: a,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  },
                },
              }),
            }),
            (0, t.jsx)("dd", {
              className: "text-right text-xs font-black tabular-nums",
              children: i,
            }),
          ],
        });
      }
      function h({ c: e, i: a }) {
        return (0, t.jsxs)("article", {
          className:
            "ca-hover group @container relative aspect-[4/5] w-full shrink-0 overflow-hidden bg-graphite md:aspect-auto md:h-[78svh] md:max-h-[760px] md:min-h-[500px] md:w-[min(31vw,460px)]",
          "data-cursor": "view",
          "data-cursor-label": e.name,
          children: [
            (0, t.jsx)(i.default, {
              src: e.image,
              alt: `${e.name}, ${e.role.toLowerCase()}`,
              fill: !0,
              sizes: "(min-width: 768px) 31vw, 82vw",
              className:
                "ca-target object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105",
            }),
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              className:
                "absolute inset-x-0 bottom-0 h-[68%] bg-gradient-to-t from-black via-black/80 to-transparent",
            }),
            (0, t.jsxs)("span", {
              className:
                "absolute left-4 top-4 text-[11px] font-black tabular-nums tracking-[0.2em]",
              children: [
                String(a + 1).padStart(2, "0"),
                (0, t.jsxs)("span", {
                  className: "text-fog/50",
                  children: [" / ", String(l.j.length).padStart(2, "0")],
                }),
              ],
            }),
            (0, t.jsx)(r.f, {
              className: "absolute right-4 top-4",
              rotate: a % 2 ? 5 : -6,
              tone: a % 2 ? "white" : "pink",
              children: e.sticker,
            }),
            (0, t.jsxs)("div", {
              className: "absolute inset-x-0 bottom-0 p-5 md:p-6",
              children: [
                (0, t.jsxs)("p", {
                  className: "eyebrow text-dacity",
                  children: [e.role, " / ", e.home],
                }),
                (0, t.jsx)("h3", {
                  className:
                    "mt-1 -skew-x-6 text-[min(16cqw,6rem)] font-black uppercase leading-[0.82] tracking-[-0.06em]",
                  children: e.name
                    .split(" ")
                    .map((e) =>
                      (0, t.jsx)("span", { className: "block", children: e }, e)
                    ),
                }),
                (0, t.jsx)("p", {
                  className: "mt-3 text-xs text-fog/60",
                  children: e.bio,
                }),
                (0, t.jsx)(s.f.dl, {
                  className: "mt-4 grid gap-2",
                  initial: "hidden",
                  whileInView: "show",
                  viewport: { once: !0, amount: 0.5 },
                  children: e.stats.map((e, i) =>
                    (0, t.jsx)(
                      d,
                      { label: e.label, value: e.value, delay: 0.1 + 0.12 * i },
                      e.label
                    )
                  ),
                }),
              ],
            }),
          ],
        });
      }
      e.s([
        "Crew",
        0,
        function () {
          let e = (0, a.useRef)(null),
            i = (0, a.useRef)(null);
          return (
            (0, c.f)(
              () => {
                let t = o.f.matchMedia();
                return (
                  t.add("(min-width: 768px)", () => {
                    let e = i.current;
                    if (!e) return;
                    let t = () =>
                      Math.max(0, e.scrollWidth - window.innerWidth);
                    o.f
                      .timeline({
                        scrollTrigger: {
                          trigger: ".crew-pin",
                          start: "top top",
                          end: () => `+=${t()}`,
                          pin: !0,
                          scrub: 0.8,
                          invalidateOnRefresh: !0,
                        },
                      })
                      .to(e, { x: () => -t(), ease: "none" }, 0)
                      .to(".crew-outline", { xPercent: -30, ease: "none" }, 0);
                  }),
                  t.add("(max-width: 767px)", () => {
                    o.f.to(".crew-outline", {
                      xPercent: -30,
                      ease: "none",
                      scrollTrigger: {
                        trigger: e.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: !0,
                      },
                    });
                  }),
                  () => t.revert()
                );
              },
              { scope: e }
            ),
            (0, t.jsx)("section", {
              ref: e,
              id: "crew",
              className: "relative bg-black",
              children: (0, t.jsxs)("div", {
                className:
                  "crew-pin relative overflow-hidden py-20 md:flex md:h-svh md:items-center md:py-0",
                children: [
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "crew-outline text-outline pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 whitespace-nowrap text-[30vw] font-black uppercase leading-none tracking-[-0.05em] md:text-[24vw]",
                    children: "The crew • The crew • The crew •",
                  }),
                  (0, t.jsxs)("div", {
                    ref: i,
                    className:
                      "relative flex flex-col gap-4 px-4 md:w-max md:flex-row md:gap-6 md:px-10",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "mb-4 flex shrink-0 flex-col justify-center md:mb-0 md:w-[min(36vw,560px)] md:pr-10",
                        children: [
                          (0, t.jsx)(n.Eyebrow, {
                            className: "text-fog/80",
                            children: "The crew / 05 locals",
                          }),
                          (0, t.jsxs)("h2", {
                            className:
                              "mt-4 text-[clamp(3rem,7.5vw,8rem)] font-black uppercase leading-[0.84] tracking-[-0.05em]",
                            children: [
                              "Five locals.",
                              (0, t.jsx)("br", {}),
                              (0, t.jsx)("span", {
                                className: "text-dacity",
                                children: "One plane.",
                              }),
                            ],
                          }),
                          (0, t.jsx)("p", {
                            className: "mt-6 max-w-sm text-base text-fog/75",
                            children:
                              "Lucia Caminos walks the wing, Raul Bautista flies it and Boobie Ike pays for the smoke. Jason Duval and Real Dimez find other ways down.",
                          }),
                          (0, t.jsx)("p", {
                            className:
                              "eyebrow mt-8 hidden text-dacity md:block",
                            children: "Keep scrolling →",
                          }),
                        ],
                      }),
                      l.j.map((e, i) => (0, t.jsx)(h, { c: e, i: i }, e.id)),
                      (0, t.jsx)("div", {
                        "aria-hidden": !0,
                        className: "hidden w-4 shrink-0 md:block",
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
      ]);
    },
    83426,
    (e) => {
      var t = e.i(43476),
        i = e.i(98194),
        s = e.i(88653),
        a = e.i(46932),
        n = e.i(87652),
        r = e.i(71645),
        l = e.i(77482);
      e.i(65506);
      var o = e.i(40462);
      function c({
        value: e,
        run: i = !0,
        duration: s = 1.4,
        format: a = (e) => Math.round(e).toLocaleString("en-US"),
      }) {
        let n = (0, r.useRef)(null),
          l = (0, r.useRef)(a);
        return (
          (0, r.useEffect)(() => {
            if (!i || !n.current) return;
            let t = { v: 0 },
              a = n.current,
              r = l.current;
            a.textContent = r(0);
            let c = o.f.to(t, {
              v: e,
              duration: s,
              ease: "power3.out",
              onUpdate: () => {
                a.textContent = r(t.v);
              },
            });
            return () => {
              c.kill(), (a.textContent = r(e));
            };
          }, [e, i, s]),
          (0, t.jsx)("span", { ref: n, children: a(e) })
        );
      }
      var d = e.i(60029),
        h = e.i(16480),
        m = e.i(8803);
      let p = m.u.length;
      function u({ index: e, run: i }) {
        let s = m.u[e];
        return (0, t.jsxs)("div", {
          className: "border border-dacity/40 bg-black/75 backdrop-blur-md",
          children: [
            (0, t.jsxs)("div", {
              className:
                "flex items-center justify-between border-b border-fog/10 px-4 py-2.5",
              children: [
                (0, t.jsxs)("span", {
                  className:
                    "flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] text-dacity",
                  children: [
                    (0, t.jsx)("span", {
                      className: "blink h-2 w-2 rounded-full bg-dacity",
                    }),
                    "Telemetry / Live",
                  ],
                }),
                (0, t.jsxs)("span", {
                  className:
                    "text-[10px] font-semibold uppercase tracking-[0.25em] text-fog/50",
                  children: ["Callsign ", s.short],
                }),
              ],
            }),
            (0, t.jsxs)("dl", {
              className: "divide-y divide-fog/10 px-4",
              children: [
                s.specs.map((e) =>
                  (0, t.jsxs)(
                    "div",
                    {
                      className: "py-2 md:py-2.5",
                      children: [
                        (0, t.jsxs)("div", {
                          className:
                            "flex items-baseline justify-between gap-4",
                          children: [
                            (0, t.jsx)("dt", {
                              className:
                                "text-[10px] font-semibold uppercase tracking-[0.3em] text-fog/60",
                              children: e.label,
                            }),
                            (0, t.jsx)("dd", {
                              className:
                                "text-right text-lg font-black tabular-nums leading-none md:text-xl",
                              children:
                                void 0 !== e.value
                                  ? (0, t.jsxs)(t.Fragment, {
                                      children: [
                                        (0, t.jsx)(
                                          c,
                                          { value: e.value, run: i },
                                          `${s.id}-${e.label}`
                                        ),
                                        (0, t.jsx)("span", {
                                          className:
                                            "ml-1 text-[11px] font-semibold uppercase text-fog/60",
                                          children: e.unit,
                                        }),
                                      ],
                                    })
                                  : e.text,
                            }),
                          ],
                        }),
                        void 0 !== e.value && e.max
                          ? (0, t.jsx)("div", {
                              className: "mt-2 hidden h-1 bg-fog/10 md:block",
                              children: (0, t.jsx)(
                                a.f.div,
                                {
                                  className: "h-full origin-left bg-dacity",
                                  initial: { scaleX: 0 },
                                  animate: {
                                    scaleX: i
                                      ? Math.max(0.01, e.value / e.max)
                                      : 0,
                                  },
                                  transition: {
                                    duration: 1.2,
                                    ease: [0.16, 1, 0.3, 1],
                                  },
                                },
                                `${s.id}-${e.label}-bar`
                              ),
                            })
                          : null,
                        e.note
                          ? (0, t.jsx)("p", {
                              className:
                                "mt-1 hidden text-right text-[10px] italic text-fog/50 md:block",
                              children: e.note,
                            })
                          : null,
                      ],
                    },
                    e.label
                  )
                ),
                (0, t.jsxs)("div", {
                  className: "flex items-center justify-between py-2 md:py-2.5",
                  children: [
                    (0, t.jsx)("dt", {
                      className:
                        "text-[10px] font-semibold uppercase tracking-[0.3em] text-fog/60",
                      children: "Smoke color",
                    }),
                    (0, t.jsxs)("dd", {
                      className: "flex items-center gap-2 text-sm font-black",
                      children: [
                        (0, t.jsx)("span", {
                          className:
                            "h-3.5 w-3.5 bg-dacity shadow-[0_0_12px_#ff008c]",
                        }),
                        "#FF008C",
                      ],
                    }),
                  ],
                }),
                (0, t.jsxs)("div", {
                  className: "flex items-center justify-between py-2 md:py-2.5",
                  children: [
                    (0, t.jsx)("dt", {
                      className:
                        "text-[10px] font-semibold uppercase tracking-[0.3em] text-fog/60",
                      children: "Crew",
                    }),
                    (0, t.jsx)("dd", {
                      className: "text-sm font-black uppercase",
                      children: s.crew,
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      e.s(
        [
          "Hangar",
          0,
          function () {
            let e = (0, r.useRef)(null),
              c = (0, r.useRef)([]),
              [{ index: x, dir: f }, g] = (0, r.useState)({ index: 0, dir: 1 }),
              v = (0, r.useRef)(10),
              b = (0, r.useRef)(!0),
              w = (0, r.useRef)(null),
              y = (0, n.f)(e, { amount: 0.35 }),
              j = (0, n.f)(e, { amount: 0.35, once: !0 }),
              N = m.u[x],
              k = (0, r.useCallback)((e) => {
                g((t) => ({ index: (t.index + e + p) % p, dir: e }));
              }, []);
            return (
              (0, r.useEffect)(() => {
                if (b.current) {
                  b.current = !1;
                  return;
                }
                let t = c.current[x];
                if (!t) return;
                (v.current += 1), (t.style.zIndex = String(v.current));
                let i = t.querySelector(".hg-img"),
                  s = o.f.timeline();
                return (
                  s
                    .fromTo(
                      t,
                      {
                        clipPath:
                          f > 0
                            ? "polygon(118% 0%, 140% 0%, 140% 100%, 100% 100%)"
                            : "polygon(-40% 0%, 0% 0%, -18% 100%, -40% 100%)",
                      },
                      {
                        clipPath:
                          f > 0
                            ? "polygon(0% 0%, 140% 0%, 140% 100%, -18% 100%)"
                            : "polygon(-40% 0%, 118% 0%, 100% 100%, -40% 100%)",
                        duration: 1.05,
                        ease: "expo.inOut",
                      }
                    )
                    .fromTo(
                      i,
                      { scale: 1.25, xPercent: 6 * f },
                      {
                        scale: 1,
                        xPercent: 0,
                        duration: 1.5,
                        ease: "expo.out",
                      },
                      0.1
                    )
                    .fromTo(
                      e.current?.querySelector(".hg-lines") ?? [],
                      { autoAlpha: 0 },
                      { autoAlpha: 1, duration: 0.25, yoyo: !0, repeat: 1 },
                      0.2
                    ),
                  () => {
                    s.progress(1);
                  }
                );
              }, [x, f]),
              (0, r.useEffect)(() => {
                if (!y) return;
                let e = (e) => {
                  "ArrowRight" === e.key && k(1),
                    "ArrowLeft" === e.key && k(-1);
                };
                return (
                  window.addEventListener("keydown", e),
                  () => window.removeEventListener("keydown", e)
                );
              }, [y, k]),
              (0, t.jsxs)("section", {
                ref: e,
                id: "hangar",
                "aria-roledescription": "carousel",
                "aria-label": "The Hangar",
                className:
                  "cut-top-r relative h-svh min-h-[680px] overflow-hidden bg-black",
                style: { touchAction: "pan-y" },
                onPointerDown: (e) => {
                  w.current = e.clientX;
                },
                onPointerUp: (e) => {
                  if (null === w.current) return;
                  let t = e.clientX - w.current;
                  (w.current = null), Math.abs(t) > 60 && k(t < 0 ? 1 : -1);
                },
                children: [
                  (0, t.jsx)("div", {
                    className: "absolute inset-0 isolate",
                    children: m.u.map((e, s) =>
                      (0, t.jsx)(
                        "div",
                        {
                          ref: (e) => {
                            c.current[s] = e;
                          },
                          className: `absolute inset-0 overflow-hidden ${
                            0 === s ? "z-[1]" : "z-0"
                          }`,
                          "aria-hidden": s !== x,
                          children: (0, t.jsx)(i.default, {
                            src: e.image,
                            alt: `${e.name}, ${e.type.toLowerCase()}`,
                            fill: !0,
                            sizes: "100vw",
                            className: "hg-img object-cover",
                            style: { objectPosition: e.focus ?? "50% 50%" },
                          }),
                        },
                        e.id
                      )
                    ),
                  }),
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30",
                  }),
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "absolute inset-0 hidden bg-gradient-to-r from-black/80 via-black/20 to-transparent md:block",
                  }),
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className: "hg-lines invisible absolute inset-0",
                    children: (0, t.jsx)(l.f, {}),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "relative z-10 flex h-full flex-col justify-between px-4 pb-6 pt-[calc(var(--cut)+2rem)] md:px-10 md:pb-10 md:pt-[calc(var(--cut)+1rem)]",
                    children: [
                      (0, t.jsxs)("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                          (0, t.jsx)(d.Eyebrow, {
                            className: "text-fog/80",
                            children: "The hangar",
                          }),
                          (0, t.jsxs)("p", {
                            className:
                              "text-xs font-black tabular-nums tracking-[0.2em]",
                            children: [
                              String(x + 1).padStart(2, "0"),
                              " ",
                              (0, t.jsxs)("span", {
                                className: "text-fog/40",
                                children: ["/ ", String(p).padStart(2, "0")],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "grid gap-5 md:grid-cols-[1fr_380px] md:items-end md:gap-10",
                        children: [
                          (0, t.jsxs)("div", {
                            children: [
                              (0, t.jsx)(s.f, {
                                mode: "wait",
                                children: (0, t.jsxs)(
                                  a.f.div,
                                  {
                                    initial: {
                                      opacity: 0,
                                      x: 50 * f,
                                      skewX: -8,
                                    },
                                    animate: { opacity: 1, x: 0, skewX: 0 },
                                    exit: { opacity: 0, x: -50 * f },
                                    transition: {
                                      duration: 0.5,
                                      ease: [0.16, 1, 0.3, 1],
                                    },
                                    "aria-live": "polite",
                                    children: [
                                      (0, t.jsx)("p", {
                                        className:
                                          "eyebrow inline-block bg-black px-2 py-1 text-dacity",
                                        children: N.type,
                                      }),
                                      (0, t.jsx)("h2", {
                                        className:
                                          "mt-2 text-[clamp(2.8rem,8.5vw,8.5rem)] font-black uppercase leading-[0.85] tracking-[-0.05em]",
                                        children: N.name,
                                      }),
                                      (0, t.jsx)("p", {
                                        className:
                                          "mt-3 max-w-md text-sm text-fog/80 md:text-base",
                                        children: N.line,
                                      }),
                                    ],
                                  },
                                  N.id
                                ),
                              }),
                              (0, t.jsxs)("div", {
                                className: "mt-6 flex items-center gap-3",
                                children: [
                                  (0, t.jsx)("button", {
                                    type: "button",
                                    onClick: () => k(-1),
                                    "aria-label": "Previous machine",
                                    className:
                                      "flex h-12 w-12 -skew-x-[10deg] items-center justify-center border border-fog/30 transition-colors hover:border-dacity hover:bg-dacity hover:text-black",
                                    children: (0, t.jsx)(h.u, {
                                      className: "h-5 w-5 skew-x-[10deg]",
                                    }),
                                  }),
                                  (0, t.jsx)("button", {
                                    type: "button",
                                    onClick: () => k(1),
                                    "aria-label": "Next machine",
                                    className:
                                      "flex h-12 w-12 -skew-x-[10deg] items-center justify-center bg-dacity text-black transition-colors hover:bg-fog",
                                    children: (0, t.jsx)(h.G, {
                                      className: "h-5 w-5 skew-x-[10deg]",
                                    }),
                                  }),
                                  (0, t.jsx)("div", {
                                    className: "ml-2 hidden gap-1 sm:flex",
                                    children: m.u.map((e, i) =>
                                      (0, t.jsx)(
                                        "button",
                                        {
                                          type: "button",
                                          onClick: () => {
                                            i !== x &&
                                              g({
                                                index: i,
                                                dir: i > x ? 1 : -1,
                                              });
                                          },
                                          "aria-label": `Show ${e.name}`,
                                          "aria-current": i === x,
                                          className: `px-2.5 py-2 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${
                                            i === x
                                              ? "text-dacity"
                                              : "text-fog/45 hover:text-fog"
                                          }`,
                                          children: e.short,
                                        },
                                        e.id
                                      )
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, t.jsx)(u, { index: x, run: j }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            );
          },
        ],
        83426
      );
    },
    36181,
    (e) => {
      var t = e.i(43476),
        i = e.i(98194),
        s = e.i(71645),
        a = e.i(66120),
        n = e.i(77482),
        r = e.i(88653),
        l = e.i(46932),
        o = e.i(87652),
        c = e.i(68055),
        d = e.i(8803);
      function h(e, t) {
        e.current = Date.now() + t;
      }
      function m({ p: e, n: s }) {
        return (0, t.jsxs)("div", {
          className:
            "w-[210px] overflow-hidden border border-dacity/60 bg-black shadow-[6px_6px_0_#ff008c]",
          children: [
            (0, t.jsx)("div", {
              className: "relative aspect-[2554/1701] bg-graphite",
              children: (0, t.jsx)(i.default, {
                src: e.image,
                alt: `${e.title} in ${e.region}`,
                fill: !0,
                sizes: "(min-width: 1024px) 300px, 100vw",
                className: "object-cover",
              }),
            }),
            (0, t.jsxs)("div", {
              className: "p-3",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center justify-between gap-3",
                  children: [
                    (0, t.jsxs)("p", {
                      className:
                        "text-[10px] font-black uppercase tracking-[0.22em] text-dacity",
                      children: [
                        "Stop ",
                        String(s + 1).padStart(2, "0"),
                        " / ",
                        e.region,
                      ],
                    }),
                    (0, t.jsx)(c.f, { rotate: -3, children: e.stat }),
                  ],
                }),
                (0, t.jsx)("p", {
                  className:
                    "mt-1.5 text-xl font-black uppercase leading-none tracking-[-0.03em]",
                  children: e.title,
                }),
                (0, t.jsx)("p", {
                  className: "mt-1.5 text-xs leading-relaxed text-fog/85",
                  children: e.text,
                }),
                (0, t.jsxs)("dl", {
                  className:
                    "mt-2 grid grid-cols-[44px_1fr] gap-x-2 gap-y-0.5 text-[11px]",
                  children: [
                    (0, t.jsx)("dt", {
                      className:
                        "font-semibold uppercase tracking-[0.15em] text-fog/50",
                      children: "When",
                    }),
                    (0, t.jsx)("dd", {
                      className: "font-semibold text-fog",
                      children: e.when,
                    }),
                    (0, t.jsx)("dt", {
                      className:
                        "font-semibold uppercase tracking-[0.15em] text-fog/50",
                      children: "Crew",
                    }),
                    (0, t.jsx)("dd", {
                      className: "font-semibold text-fog",
                      children: e.crew,
                    }),
                    (0, t.jsx)("dt", {
                      className:
                        "font-semibold uppercase tracking-[0.15em] text-fog/50",
                      children: "Ride",
                    }),
                    (0, t.jsx)("dd", {
                      className: "font-semibold text-fog",
                      children: e.ride,
                    }),
                  ],
                }),
              ],
            }),
            (0, t.jsx)(l.f.span, {
              "aria-hidden": !0,
              className: "block h-1 origin-left bg-dacity",
              initial: { scaleX: 0 },
              animate: { scaleX: 1 },
              transition: { duration: 6, ease: "linear" },
            }),
          ],
        });
      }
      function p({ ready: e, children: i }) {
        let a = (0, s.useRef)(null),
          n = (0, o.f)(a, { amount: 0.25 }),
          [c, u] = (0, s.useState)(0),
          x = (0, s.useRef)(0);
        (0, s.useEffect)(() => {
          if (!e || !n) return;
          let t = window.setInterval(() => {
            Date.now() < x.current || u((e) => (e + 1) % d.b.length);
          }, 6e3);
          return () => window.clearInterval(t);
        }, [e, n]);
        let f = (e) => {
            h(x, 15e3), u(e);
          },
          g = d.b[c],
          v = g.pin[0] / 1e3 > 0.5,
          b = (0, s.useRef)(null);
        return (0, t.jsxs)("div", {
          ref: a,
          className: "relative",
          children: [
            (0, t.jsxs)("div", {
              className: "mb-3 flex items-center justify-between gap-3",
              children: [
                (0, t.jsxs)("p", {
                  className:
                    "flex items-center gap-2 bg-black/75 px-2.5 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-fog backdrop-blur-sm",
                  children: [
                    (0, t.jsx)("span", {
                      className: "blink h-2 w-2 rounded-full bg-dacity",
                    }),
                    "Visit Leonida ",
                    (0, t.jsx)("span", {
                      className: "text-dacity",
                      children: "/ The Dacity tour",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "flex items-center gap-1.5",
                  children: d.b.map((e, i) =>
                    (0, t.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: () => f(i),
                        "aria-label": `Show ${e.title} in ${e.region}`,
                        "aria-current": i === c,
                        className: `h-1.5 transition-all duration-500 ${
                          i === c
                            ? "w-6 bg-dacity"
                            : "w-2.5 bg-fog/30 hover:bg-fog/60"
                        }`,
                      },
                      e.id
                    )
                  ),
                }),
              ],
            }),
            (0, t.jsxs)("div", {
              ref: b,
              className: "lm-map relative aspect-[1000/1274] w-full",
              children: [
                (0, t.jsx)("div", {
                  className: "absolute inset-0",
                  children: i,
                }),
                d.b.map((e, i) => {
                  let s,
                    a,
                    n = i === c;
                  return (0, t.jsxs)(
                    "button",
                    {
                      type: "button",
                      onClick: () => f(i),
                      "aria-label": `${e.title} in ${e.region}`,
                      "aria-pressed": n,
                      className:
                        "group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center p-1",
                      style:
                        ((s = e.pin[0]),
                        (a = e.pin[1]),
                        {
                          left: `${(s / 1e3) * 100}%`,
                          top: `${(a / 1274) * 100}%`,
                        }),
                      children: [
                        (0, t.jsxs)("span", {
                          className:
                            "relative flex h-5 w-5 items-center justify-center",
                          children: [
                            n
                              ? (0, t.jsx)("span", {
                                  className:
                                    "absolute inset-0 animate-ping rounded-full bg-dacity",
                                })
                              : null,
                            (0, t.jsx)("span", {
                              className: `relative rounded-full border-2 border-white bg-dacity transition-all duration-500 group-hover:scale-125 ${
                                n ? "h-5 w-5" : "h-3 w-3"
                              }`,
                            }),
                          ],
                        }),
                        (0, t.jsx)("span", {
                          className: `mt-1 whitespace-nowrap text-[10px] font-black uppercase tracking-[0.15em] [text-shadow:0_0_4px_#000,0_0_8px_#000] transition-colors ${
                            n ? "text-dacity" : "text-fog/80"
                          }`,
                          children: e.region,
                        }),
                      ],
                    },
                    e.id
                  );
                }),
                (0, t.jsx)(r.f, {
                  mode: "wait",
                  children: (0, t.jsx)(
                    "div",
                    {
                      className: "pointer-events-none absolute inset-y-0 z-20",
                      style: { left: `${(g.pin[0] / 1e3) * 100}%` },
                      children: (0, t.jsx)(l.f.div, {
                        ref: (e) => {
                          let t = b.current;
                          if (!e || !t) return;
                          let i = (g.pin[1] / 1274) * t.clientHeight;
                          e.style.top = `${Math.min(
                            Math.max(i - e.offsetHeight / 2, 0),
                            t.clientHeight - e.offsetHeight
                          )}px`;
                        },
                        initial: { opacity: 0, scale: 0.7, rotate: v ? 3 : -3 },
                        animate: { opacity: 1, scale: 1, rotate: 0 },
                        exit: {
                          opacity: 0,
                          scale: 0.9,
                          transition: { duration: 0.25 },
                        },
                        transition: {
                          type: "spring",
                          stiffness: 260,
                          damping: 24,
                        },
                        className: `pointer-events-auto absolute ${
                          v ? "right-7" : "left-7"
                        }`,
                        style: {
                          transformOrigin: `${v ? "right" : "left"} center`,
                        },
                        onMouseEnter: () => h(x, 6e4),
                        onMouseLeave: () => h(x, 4e3),
                        children: (0, t.jsx)(m, { p: g, n: c }),
                      }),
                    },
                    g.id
                  ),
                }),
              ],
            }),
          ],
        });
      }
      var u = e.i(76525),
        x = e.i(24639),
        f = e.i(10723);
      function g({ className: e = "" }) {
        return (0, t.jsxs)("div", {
          className: `relative flex max-w-[520px] items-center gap-3 overflow-hidden bg-dacity p-2.5 pr-4 text-black [clip-path:polygon(0_0,calc(100%-14px)_0,100%_14px,100%_100%,0_100%)] [text-shadow:none] md:gap-4 md:p-3 md:pr-5 ${e}`,
          children: [
            (0, t.jsx)("div", {
              "aria-hidden": !0,
              className: "pointer-events-none absolute inset-0 overflow-hidden",
              children: (0, t.jsx)("div", {
                className:
                  "stream-sheen absolute -left-1/2 top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-white/40 to-transparent",
              }),
            }),
            (0, t.jsx)("div", {
              className:
                "relative w-[112px] shrink-0 overflow-hidden rounded-[3px] shadow-[0_6px_18px_rgba(0,0,0,0.35)] md:w-[148px]",
              style: { aspectRatio: "1200 / 776" },
              children: (0, t.jsx)(i.default, {
                src: "/images/stream/launch-trailer-rockstar.jpg",
                alt: "Rockstar Games' Grand Theft Auto VI Launch Trailer on YouTube, showing the pink DacityCoin stunt plane with a wing walker",
                fill: !0,
                sizes: "296px",
                className: "object-cover",
              }),
            }),
            (0, t.jsxs)("div", {
              className: "relative min-w-0",
              children: [
                (0, t.jsxs)("p", {
                  className:
                    "flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] md:text-[10px]",
                  children: [
                    (0, t.jsx)("span", {
                      className: "blink h-1.5 w-1.5 rounded-full bg-black",
                    }),
                    "New here?",
                  ],
                }),
                (0, t.jsx)("p", {
                  className:
                    "mt-1 text-[13px] font-black uppercase leading-[1.02] tracking-[-0.02em] md:text-[15px]",
                  children:
                    "GTA VI showed a crypto coin in its launch trailer.",
                }),
                (0, t.jsxs)("p", {
                  className:
                    "mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1",
                  children: [
                    (0, t.jsx)("span", {
                      className:
                        "inline-block -rotate-3 bg-black px-1.5 py-0.5 text-[11px] font-black uppercase text-dacity md:text-xs",
                      children: "That's us.",
                    }),
                    (0, t.jsx)("span", {
                      className:
                        "text-[11px] font-bold leading-tight text-black/75 md:text-xs",
                      children: "The pink plane over Vice Beach.",
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      e.i(65506);
      var v = e.i(40462),
        b = e.i(65747),
        w = e.i(66065);
      let y = "audacity".split(""),
        j = ["ALT 3,000 FT", "SMOKE #FF008C"];
      e.s(
        [
          "Hero",
          0,
          function ({ children: e }) {
            let { ready: r } = (0, a.useSite)(),
              l = (0, s.useRef)(null),
              [o, h] = (0, s.useState)(0);
            return (
              (0, s.useEffect)(() => {
                if (!r || d.J.length < 2) return;
                let e = window.setInterval(
                  () => h((e) => (e + 1) % d.J.length),
                  6500
                );
                return () => window.clearInterval(e);
              }, [r]),
              (0, b.f)(
                () => {
                  r &&
                    v.f
                      .timeline({ delay: 0.15 })
                      .from(
                        ".hero-img",
                        { scale: 1.08, duration: 1.8, ease: "power3.out" },
                        0
                      )
                      .from(
                        ".hero-char",
                        {
                          yPercent: 120,
                          rotate: 10,
                          duration: 1.1,
                          ease: "expo.out",
                          stagger: 0.045,
                        },
                        0.1
                      )
                      .from(
                        ".hero-fade",
                        {
                          y: 22,
                          autoAlpha: 0,
                          duration: 0.8,
                          ease: "power3.out",
                          stagger: 0.07,
                        },
                        0.35
                      )
                      .from(
                        ".hero-panel",
                        {
                          x: 60,
                          autoAlpha: 0,
                          duration: 1.1,
                          ease: "expo.out",
                        },
                        0.3
                      )
                      .from(
                        ".hero-sticker",
                        {
                          scale: 0,
                          rotate: -40,
                          duration: 0.6,
                          ease: "back.out(2.4)",
                        },
                        0.9
                      );
                },
                { scope: l, dependencies: [r] }
              ),
              (0, t.jsxs)("section", {
                ref: l,
                id: "top",
                className:
                  "relative min-h-svh overflow-hidden bg-black lg:h-svh lg:min-h-[720px]",
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "hero-media absolute inset-0 lg:right-auto lg:w-[80%]",
                    children: (0, t.jsx)("div", {
                      className:
                        "hero-fade-right absolute inset-0 overflow-hidden",
                      children: (0, t.jsx)("div", {
                        className: "drift absolute inset-0",
                        children: d.J.map((e, s) =>
                          0 === s || r
                            ? (0, t.jsx)(
                                "div",
                                {
                                  "aria-hidden": s !== o,
                                  className: `absolute inset-0 transition-opacity duration-[1400ms] ease-out ${
                                    s === o ? "opacity-100" : "opacity-0"
                                  }`,
                                  children: (0, t.jsx)(i.default, {
                                    src: e.src,
                                    alt: e.alt,
                                    fill: !0,
                                    preload: 0 === s,
                                    fetchPriority: 0 === s ? "high" : "low",
                                    sizes: "(min-width: 1024px) 80vw, 100vw",
                                    className:
                                      "hero-img object-cover [object-position:var(--fm)] lg:[object-position:var(--fd)]",
                                    style: {
                                      "--fm": e.focusMobile,
                                      "--fd": e.focus,
                                    },
                                  }),
                                },
                                e.src
                              )
                            : null
                        ),
                      }),
                    }),
                  }),
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/90 lg:hidden",
                  }),
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "absolute inset-y-0 left-0 hidden w-[60%] bg-gradient-to-r from-black/80 via-black/30 to-transparent lg:block",
                  }),
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent",
                  }),
                  (0, t.jsx)(n.f, { className: "hidden opacity-25 lg:block" }),
                  (0, t.jsx)("div", {
                    className:
                      "hero-sticker pointer-events-none absolute left-[38%] top-[17%] z-[1] hidden lg:block",
                    children: (0, t.jsx)(
                      c.f,
                      {
                        rotate: -8,
                        className:
                          "animate-[pop_0.5s_cubic-bezier(0.34,1.56,0.64,1)]",
                        children: j[o] ?? j[0],
                      },
                      o
                    ),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "relative grid min-h-svh grid-cols-1 content-end gap-10 px-4 pb-10 pt-[calc(53px+2.5rem)] md:px-10 lg:h-full lg:min-h-0 lg:grid-cols-2 lg:content-stretch lg:gap-12 lg:pb-10 lg:pt-[calc(69px+1.5rem)]",
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "flex min-w-0 flex-col justify-end lg:justify-center [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]",
                        children: [
                          (0, t.jsxs)("h1", {
                            "aria-label": `${w.f.name}, ${w.f.ticker} on Solana: audacity`,
                            children: [
                              (0, t.jsxs)("span", {
                                className:
                                  "hero-fade block text-[11px] font-black uppercase tracking-[0.28em] text-fog lg:text-dacity",
                                children: [
                                  w.f.name,
                                  " · ",
                                  w.f.ticker,
                                  " on Solana",
                                ],
                              }),
                              " ",
                              (0, t.jsx)("span", {
                                className: "mt-2 block",
                                children: (0, t.jsx)("span", {
                                  "aria-hidden": !0,
                                  className:
                                    "aud -mx-[0.1em] -mb-[0.2em] -mt-[0.2em] flex overflow-hidden px-[0.1em] pb-[0.28em] pt-[0.2em] text-[20vw] leading-[0.8] text-dacity lg:text-[clamp(4.5rem,9.5vw,10rem)]",
                                  children: y.map((e, i) =>
                                    (0, t.jsx)(
                                      "span",
                                      {
                                        className: "hero-char inline-block",
                                        children: e,
                                      },
                                      i
                                    )
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (0, t.jsxs)("div", {
                            className: "hero-fade mt-4",
                            children: [
                              (0, t.jsx)("p", {
                                className:
                                  "text-3xl font-black uppercase leading-none tracking-[-0.03em] md:text-5xl",
                                children: "Spotted over Vice Beach.",
                              }),
                              (0, t.jsx)("p", {
                                className:
                                  "mt-3 max-w-md text-sm font-semibold text-fog/90 md:text-base",
                                children:
                                  "Jason Duval, Lucia Caminos: the plane has two seats.",
                              }),
                            ],
                          }),
                          (0, t.jsx)(g, { className: "hero-fade mt-5" }),
                          (0, t.jsx)("div", {
                            className:
                              "hero-fade mt-6 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap",
                            children: (0, t.jsx)(u.f, {
                              href: w.f.links.pumpfun,
                              locked: !w.f.launched,
                              className: "col-span-2 sm:col-span-1",
                              children: w.f.launched
                                ? "Buy on pump.fun"
                                : (0, t.jsx)(x.f, { prefix: "Live in " }),
                            }),
                          }),
                          (0, t.jsx)(f.ContractBar, {
                            className: "hero-fade mt-3 w-full max-w-[520px]",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className:
                          "hero-panel hidden min-h-0 min-w-0 items-center justify-center lg:flex",
                        children: (0, t.jsx)("div", {
                          className:
                            "hero-panel-inner w-full lg:w-[min(100%,calc((100svh-190px)*0.785))]",
                          children: (0, t.jsx)(p, { ready: r, children: e }),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            );
          },
        ],
        36181
      );
    },
    89165,
    (e) => {
      var t = e.i(43476),
        i = e.i(98194),
        s = e.i(46932),
        a = e.i(77482),
        n = e.i(76525),
        r = e.i(24639),
        l = e.i(10723),
        o = e.i(60029),
        c = e.i(8803),
        d = e.i(66065);
      e.s([
        "HowToBuy",
        0,
        function () {
          return (0, t.jsxs)("section", {
            id: "buy",
            className:
              "cut-both relative overflow-hidden bg-dacity py-[calc(var(--cut)+4rem)] text-black md:py-[calc(var(--cut)+5rem)]",
            children: [
              (0, t.jsx)(a.f, { dark: !0, className: "opacity-60" }),
              (0, t.jsxs)("div", {
                className: "relative px-4 md:px-10",
                children: [
                  (0, t.jsx)(o.SectionHead, {
                    eyebrow: "How to buy",
                    eyebrowClassName: "font-semibold",
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        "Boarding in",
                        (0, t.jsx)("br", {}),
                        (0, t.jsx)("span", {
                          className: "text-outline-black",
                          children: "four steps.",
                        }),
                      ],
                    }),
                    sub: (0, t.jsxs)(t.Fragment, {
                      children: [
                        "Boarding is open. The only real contract address is on dacitycoins.com, anyone DMing you a different one is not us.",
                        " ",
                        (0, t.jsx)("a", {
                          href: "/how-to-buy",
                          className:
                            "font-semibold underline underline-offset-4 transition-opacity hover:opacity-60",
                          children: "Step by step guide",
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("ol", {
                    className:
                      "mt-12 grid gap-3 sm:grid-cols-2 md:mt-16 lg:grid-cols-4 lg:gap-4",
                    children: c.g.map((e, a) =>
                      (0, t.jsxs)(
                        s.f.li,
                        {
                          initial: {
                            opacity: 0,
                            y: 40,
                            rotate: a % 2 ? 2 : -2,
                          },
                          whileInView: { opacity: 1, y: 0, rotate: 0 },
                          viewport: { once: !0, amount: 0.3 },
                          transition: {
                            duration: 0.7,
                            delay: 0.08 * a,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          className:
                            "ca-hover group relative flex flex-col bg-black p-4 text-fog md:p-5",
                          children: [
                            (0, t.jsx)("div", {
                              className:
                                "relative aspect-[4/3] overflow-hidden bg-graphite",
                              children: (0, t.jsx)(i.default, {
                                src: e.image,
                                alt: "",
                                fill: !0,
                                sizes:
                                  "(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw",
                                className:
                                  "ca-target object-cover transition-transform duration-700 group-hover:scale-105",
                              }),
                            }),
                            (0, t.jsx)("span", {
                              className:
                                "mt-4 text-7xl font-black leading-none tracking-[-0.06em] text-dacity md:text-8xl",
                              children: e.n,
                            }),
                            (0, t.jsx)("h3", {
                              className:
                                "mt-3 text-2xl font-black uppercase tracking-[-0.03em]",
                              children: e.title,
                            }),
                            (0, t.jsx)("p", {
                              className:
                                "mt-2 text-sm leading-relaxed text-fog/70",
                              children: e.text,
                            }),
                          ],
                        },
                        e.n
                      )
                    ),
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "mt-8 grid gap-3 md:mt-10 md:grid-cols-[auto_1fr] md:items-center md:gap-6",
                    children: [
                      (0, t.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: (0, t.jsx)(n.f, {
                          href: d.f.links.pumpfun,
                          variant: "black",
                          locked: !d.f.launched,
                          children: d.f.launched
                            ? "Buy on pump.fun"
                            : (0, t.jsx)(r.f, { prefix: "Live in " }),
                        }),
                      }),
                      (0, t.jsx)(l.ContractBar, { className: "md:max-w-xl" }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
      ]);
    },
    4576,
    (e) => {
      var t = e.i(43476),
        i = e.i(98194),
        s = e.i(71645),
        a = e.i(66120);
      e.i(65506);
      var n = e.i(40462),
        r = e.i(65747),
        l = e.i(94409);
      e.s([
        "Loader",
        0,
        function () {
          let { markReady: e } = (0, a.useSite)(),
            [o, c] = (0, s.useState)(!1),
            d = (0, s.useRef)(null),
            h = (0, s.useRef)(null);
          return ((0, r.f)(
            () => {
              (0, l.i)(!0);
              let t = window.matchMedia(
                  "(prefers-reduced-motion: reduce)"
                ).matches,
                i = { v: 0 },
                s = () => {
                  h.current &&
                    (h.current.textContent = String(Math.round(i.v)).padStart(
                      3,
                      "0"
                    ));
                },
                a = n.f.timeline({ onComplete: () => c(!0) });
              t
                ? a
                    .set(i, { v: 100, onComplete: s })
                    .call(e)
                    .to(d.current, { autoAlpha: 0, duration: 0.3 })
                : a
                    .fromTo(
                      ".ld-glow",
                      { scale: 0.6, autoAlpha: 0 },
                      {
                        scale: 1,
                        autoAlpha: 1,
                        duration: 1.2,
                        ease: "power2.out",
                      },
                      0
                    )
                    .fromTo(
                      ".ld-icon",
                      { clipPath: "inset(100% 0% 0% 0%)", scale: 0.94 },
                      {
                        clipPath: "inset(0% 0% 0% 0%)",
                        scale: 1,
                        duration: 0.9,
                        ease: "expo.out",
                      },
                      0.1
                    )
                    .from(
                      ".ld-tag",
                      { autoAlpha: 0, y: 8, duration: 0.6, ease: "power3.out" },
                      0.45
                    )
                    .fromTo(
                      ".ld-bar",
                      { scaleX: 0 },
                      { scaleX: 1, duration: 1.3, ease: "power2.inOut" },
                      0.3
                    )
                    .to(
                      i,
                      {
                        v: 100,
                        duration: 1.3,
                        ease: "power2.inOut",
                        onUpdate: s,
                      },
                      0.3
                    )
                    .call(e, [], "+=0.1")
                    .to(
                      d.current,
                      {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% -20%)",
                        duration: 0.95,
                        ease: "expo.inOut",
                      },
                      "<"
                    );
            },
            { scope: d }
          ),
          o)
            ? null
            : (0, t.jsxs)("div", {
                ref: d,
                "aria-hidden": !0,
                className:
                  "loader fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black",
                style: {
                  clipPath: "polygon(0% 0%, 100% 0%, 100% 120%, 0% 100%)",
                },
                children: [
                  (0, t.jsx)("div", {
                    className:
                      "ld-glow absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0",
                    style: {
                      background:
                        "radial-gradient(circle, rgba(255,0,140,0.32) 0%, rgba(255,0,140,0.08) 45%, rgba(255,0,140,0) 70%)",
                    },
                  }),
                  (0, t.jsxs)("div", {
                    className: "relative flex flex-col items-center",
                    children: [
                      (0, t.jsx)(i.default, {
                        src: "/logo/icon.svg",
                        alt: "",
                        width: 3381,
                        height: 2643,
                        unoptimized: !0,
                        preload: !0,
                        className: "ld-icon h-auto w-24 md:w-28",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "ld-tag mt-7 text-[11px] font-black uppercase tracking-[0.4em] text-fog",
                        children: "Smoke on",
                      }),
                      (0, t.jsxs)("div", {
                        className: "mt-6 flex items-center gap-3",
                        children: [
                          (0, t.jsx)("span", {
                            className:
                              "relative block h-px w-40 overflow-hidden bg-fog/15 md:w-52",
                            children: (0, t.jsx)("span", {
                              className:
                                "ld-bar absolute inset-0 origin-left bg-dacity",
                            }),
                          }),
                          (0, t.jsx)("span", {
                            ref: h,
                            className:
                              "w-8 text-right text-[11px] font-bold tabular-nums tracking-[0.15em] text-dacity",
                            children: "000",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              });
        },
      ]);
    },
    24694,
    (e) => {
      var t = e.i(43476),
        i = e.i(98194),
        s = e.i(71645),
        a = e.i(60029),
        n = e.i(68055),
        r = e.i(8803);
      e.i(65506);
      var l = e.i(40462),
        o = e.i(65747);
      let c = r.k.text.split(" ");
      e.s([
        "Manifesto",
        0,
        function () {
          let e = (0, s.useRef)(null);
          return (
            (0, o.f)(
              () => {
                l.f
                  .timeline({
                    scrollTrigger: {
                      trigger: ".mf-pin",
                      start: "top top",
                      end: "+=220%",
                      pin: !0,
                      scrub: 0.6,
                    },
                  })
                  .fromTo(
                    ".mf-img",
                    { scale: 1.05 },
                    { scale: 1.35, ease: "none", duration: 1 },
                    0
                  )
                  .fromTo(
                    ".mf-word",
                    { opacity: 0.14 },
                    {
                      opacity: 1,
                      ease: "none",
                      stagger: 0.8 / c.length,
                      duration: 0.2,
                    },
                    0
                  )
                  .fromTo(
                    ".mf-hot",
                    { color: "#e6e6e6" },
                    { color: "#ff008c", ease: "none", duration: 0.05 },
                    ">-0.05"
                  )
                  .from(
                    ".mf-sign",
                    { autoAlpha: 0, y: 20, duration: 0.1 },
                    ">"
                  );
              },
              { scope: e }
            ),
            (0, t.jsx)("section", {
              ref: e,
              id: "manifesto",
              className: "relative bg-black",
              children: (0, t.jsxs)("div", {
                className:
                  "mf-pin relative h-svh min-h-[560px] overflow-hidden",
                children: [
                  (0, t.jsx)("div", {
                    className: "absolute inset-0",
                    children: (0, t.jsx)(i.default, {
                      src: "/images/manifesto-heli-night.jpg",
                      alt: "Someone climbing out of a DacityCoin helicopter over Vice City at night",
                      fill: !0,
                      sizes: "100vw",
                      className: "mf-img object-cover object-[70%_40%]",
                    }),
                  }),
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className: "absolute inset-0 bg-black/70",
                  }),
                  (0, t.jsx)("div", {
                    "aria-hidden": !0,
                    className:
                      "absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent",
                  }),
                  (0, t.jsxs)("div", {
                    className:
                      "relative z-10 flex h-full flex-col justify-center px-4 md:px-10",
                    children: [
                      (0, t.jsx)(a.Eyebrow, {
                        className: "text-fog/80",
                        children: "The manifesto / File 001",
                      }),
                      (0, t.jsx)("p", {
                        className:
                          "mt-6 max-w-6xl text-[clamp(1.55rem,3.7vw,3.5rem)] font-black leading-[1.04] tracking-[-0.03em]",
                        children: c.map((e, i) => {
                          let s = r.k.highlight.includes(e),
                            a = e.startsWith("audacity");
                          return (0, t.jsxs)(
                            "span",
                            {
                              className: `mf-word ${s ? "mf-hot" : ""} ${
                                a ? "aud" : ""
                              }`,
                              children: [e, " "],
                            },
                            i
                          );
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "mf-sign mt-8 flex flex-wrap items-center gap-4",
                        children: [
                          (0, t.jsx)(n.f, {
                            rotate: -5,
                            children: "No brakes",
                          }),
                          (0, t.jsx)("span", {
                            className: "eyebrow text-fog/70",
                            children: "Signed, the crew",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        },
      ]);
    },
    18677,
    (e) => {
      var t = e.i(43476),
        i = e.i(46932),
        s = e.i(2564),
        a = e.i(60029),
        n = e.i(8803);
      function r({ status: e }) {
        return "complete" === e
          ? (0, t.jsx)(i.f.span, {
              variants: {
                hidden: { scale: 2.6, opacity: 0, rotate: -30 },
                show: {
                  scale: 1,
                  opacity: 1,
                  rotate: -12,
                  transition: {
                    type: "spring",
                    stiffness: 420,
                    damping: 17,
                    delay: 0.55,
                  },
                },
              },
              className:
                "stamp inline-block border-[3px] border-double border-dacity px-3 py-1 text-xl font-black uppercase tracking-[0.25em] text-dacity md:text-2xl",
              children: "Complete",
            })
          : "active" === e
          ? (0, t.jsxs)("span", {
              className:
                "inline-flex items-center gap-2 bg-dacity px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-black",
              children: [
                (0, t.jsx)("span", {
                  className: "blink h-2 w-2 rounded-full bg-black",
                }),
                "In flight",
              ],
            })
          : (0, t.jsx)("span", {
              className:
                "inline-flex items-center border border-fog/25 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-fog/50",
              children: "Standby",
            });
      }
      e.s([
        "Missions",
        0,
        function () {
          return (0, t.jsxs)("section", {
            id: "missions",
            className: "relative overflow-hidden bg-black py-24 md:py-36",
            children: [
              (0, t.jsx)(s.f, {
                text: "Full send",
                className:
                  "absolute bottom-6 left-0 text-[26vw] md:text-[18vw]",
                reverse: !0,
                distance: 25,
              }),
              (0, t.jsxs)("div", {
                className: "relative px-4 md:px-10",
                children: [
                  (0, t.jsx)(a.SectionHead, {
                    eyebrow: "Missions / Flight plan",
                    title: (0, t.jsxs)(t.Fragment, {
                      children: [
                        "The flight",
                        (0, t.jsx)("br", {}),
                        "plan",
                        (0, t.jsx)("span", {
                          className: "text-dacity",
                          children: ".",
                        }),
                      ],
                    }),
                    sub: "We don't do price talk. We do the next stunt.",
                  }),
                  (0, t.jsx)("ol", {
                    className:
                      "mt-12 grid gap-3 md:mt-16 md:grid-cols-2 md:gap-4",
                    children: n.Q.map((e, s) =>
                      (0, t.jsxs)(
                        i.f.li,
                        {
                          initial: "hidden",
                          whileInView: "show",
                          viewport: { once: !0, amount: 0.4 },
                          variants: {
                            hidden: { opacity: 0, y: 40 },
                            show: {
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.7,
                                delay: (s % 2) * 0.1,
                                ease: [0.16, 1, 0.3, 1],
                              },
                            },
                          },
                          className: `relative overflow-hidden p-6 md:p-8 ${
                            "standby" === e.status
                              ? "bg-graphite/60"
                              : "bg-graphite"
                          } [clip-path:polygon(0_0,calc(100%-28px)_0,100%_28px,100%_100%,0_100%)]`,
                          children: [
                            (0, t.jsx)("span", {
                              "aria-hidden": !0,
                              className: `pointer-events-none absolute -right-2 -top-6 text-[9rem] font-black leading-none tracking-[-0.06em] md:text-[11rem] ${
                                "standby" === e.status
                                  ? "text-outline"
                                  : "text-outline-pink"
                              }`,
                              children: e.n,
                            }),
                            (0, t.jsxs)("p", {
                              className: "eyebrow relative text-fog/60",
                              children: ["Mission ", e.n],
                            }),
                            (0, t.jsx)("h3", {
                              className:
                                "relative mt-2 max-w-[80%] text-4xl font-black uppercase leading-[0.9] tracking-[-0.04em] md:text-5xl",
                              children: e.title,
                            }),
                            (0, t.jsx)("ul", {
                              className: "relative mt-6 space-y-2.5",
                              children: e.items.map((i) =>
                                (0, t.jsxs)(
                                  "li",
                                  {
                                    className:
                                      "flex items-start gap-3 text-sm md:text-base",
                                    children: [
                                      (0, t.jsx)("span", {
                                        "aria-hidden": !0,
                                        className: `mt-1.5 h-2.5 w-2.5 shrink-0 ${
                                          "complete" === e.status
                                            ? "bg-dacity"
                                            : "active" === e.status
                                            ? "border-2 border-dacity"
                                            : "border border-fog/30"
                                        }`,
                                      }),
                                      (0, t.jsx)("span", {
                                        className:
                                          "standby" === e.status
                                            ? "text-fog/55"
                                            : "text-fog/90",
                                        children: i,
                                      }),
                                    ],
                                  },
                                  i
                                )
                              ),
                            }),
                            (0, t.jsx)("div", {
                              className: "relative mt-8",
                              children: (0, t.jsx)(r, { status: e.status }),
                            }),
                          ],
                        },
                        e.n
                      )
                    ),
                  }),
                ],
              }),
            ],
          });
        },
      ]);
    },
    77243,
    (e) => {
      var t = e.i(43476),
        i = e.i(98194),
        s = e.i(88653),
        a = e.i(46932),
        n = e.i(71645),
        r = e.i(21466);
      e.s([
        "Notifications",
        0,
        function ({ notes: e }) {
          let [l, o] = (0, n.useState)([]),
            [c, d] = (0, n.useState)(null),
            h = (0, n.useRef)(0),
            m = (0, n.useRef)(0);
          return (
            (0, n.useEffect)(() => {
              if (!e.length) return;
              h.current = Math.floor(Date.now() / 6e3) % e.length;
              let t = (t) => {
                  let i = e[h.current % e.length];
                  (h.current += 1), (m.current += 1);
                  let s = { note: i, at: t, key: m.current };
                  o((e) => [s, ...e].slice(0, 3));
                },
                i = window.setTimeout(() => {
                  let e = Date.now();
                  d(e);
                  for (let i = 2; i >= 0; i--) t(e - (i + 1) * 95e3);
                }, 0),
                s = window.setInterval(() => {
                  let e = Date.now();
                  d(e), t(e);
                }, 6e3);
              return () => {
                window.clearTimeout(i), window.clearInterval(s);
              };
            }, [e]),
            (0, t.jsxs)("section", {
              "aria-label": "Notifications from Leonida",
              className:
                "relative bg-black px-4 pb-2 pt-10 md:px-10 md:pb-4 md:pt-14",
              children: [
                (0, t.jsxs)("div", {
                  className: "flex items-center gap-3",
                  children: [
                    (0, t.jsx)(i.default, {
                      src: "/images/stream/apps/ifruit-logo.png",
                      alt: "iFruit",
                      width: 128,
                      height: 128,
                      className: "h-7 w-7",
                    }),
                    (0, t.jsxs)("p", {
                      className:
                        "min-w-0 truncate text-base font-black leading-none tracking-[-0.02em] md:text-lg",
                      children: [
                        "iFruit ",
                        (0, t.jsx)("span", {
                          className: "font-semibold text-fog/50",
                          children: "· Notifications",
                        }),
                        (0, t.jsx)("span", {
                          className:
                            "ml-3 hidden text-xs font-semibold tracking-normal text-fog/45 sm:inline",
                          children: "Vice City, Leonida",
                        }),
                      ],
                    }),
                    (0, t.jsxs)("span", {
                      className:
                        "ml-auto flex shrink-0 items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-fog/70",
                      children: [
                        (0, t.jsx)("span", {
                          className: "blink h-1.5 w-1.5 rounded-full bg-dacity",
                        }),
                        "Live",
                      ],
                    }),
                  ],
                }),
                (0, t.jsx)("ul", {
                  className:
                    "mt-5 grid min-h-[268px] content-start gap-2 md:min-h-[132px] md:grid-cols-3 md:gap-3",
                  children: (0, t.jsx)(s.f, {
                    initial: !1,
                    mode: "popLayout",
                    children: l.map(({ note: e, at: i, key: s }, n) =>
                      (0, t.jsx)(
                        a.f.li,
                        {
                          layout: !0,
                          initial: { opacity: 0, x: -40, scale: 0.96 },
                          animate: { opacity: 1, x: 0, scale: 1 },
                          exit: {
                            opacity: 0,
                            scale: 0.96,
                            transition: { duration: 0.25 },
                          },
                          transition: {
                            type: "spring",
                            stiffness: 320,
                            damping: 32,
                          },
                          className: `${(0, r.d)(0 === n)} ${
                            n > 1 ? "hidden md:flex" : ""
                          }`,
                          children: (0, t.jsx)(r._, { note: e, at: i, now: c }),
                        },
                        s
                      )
                    ),
                  }),
                }),
              ],
            })
          );
        },
      ]);
    },
    38683,
    (e) => {
      var t = e.i(43476),
        i = e.i(98194),
        s = e.i(88653),
        a = e.i(46932),
        n = e.i(71645),
        r = e.i(2564);
      function l({ cat: e, className: i = "h-3.5 w-3.5" }) {
        let s = {
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: 2.2,
          strokeLinecap: "square",
          className: i,
          "aria-hidden": !0,
        };
        switch (e) {
          case "Air":
            return (0, t.jsx)("svg", {
              ...s,
              children: (0, t.jsx)("path", {
                d: "M2 13h20M12 13l-3 7h3l4-7M12 13 9 4h3l4 9M3 10l1 3",
              }),
            });
          case "Water":
            return (0, t.jsx)("svg", {
              ...s,
              children: (0, t.jsx)("path", {
                d: "M2 9c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2M2 16c2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 2 5 2",
              }),
            });
          case "Street":
            return (0, t.jsxs)("svg", {
              ...s,
              children: [
                (0, t.jsx)("circle", { cx: "12", cy: "12", r: "8" }),
                (0, t.jsx)("circle", { cx: "12", cy: "12", r: "2.5" }),
                (0, t.jsx)("path", {
                  d: "M12 4v5.5M12 14.5V20M4 12h5.5M14.5 12H20",
                }),
              ],
            });
          case "Sky":
            return (0, t.jsx)("svg", {
              ...s,
              children: (0, t.jsx)("path", {
                d: "M3 11a9 7 0 0 1 18 0zM3 11l9 9 9-9M12 11v9",
              }),
            });
        }
      }
      var o = e.i(60029),
        c = e.i(16480),
        d = e.i(8803),
        h = e.i(94409);
      function m({ items: e, index: r, onClose: o, onStep: d }) {
        let p = e[r],
          u = (0, n.useRef)(null),
          x = (0, n.useRef)(null),
          f = (0, n.useRef)(!1);
        return (
          (0, n.useEffect)(() => {
            (0, h.i)(!0), u.current?.focus();
            let e = (e) => {
              "Escape" === e.key && o(),
                "ArrowRight" === e.key && d(1),
                "ArrowLeft" === e.key && d(-1);
            };
            return (
              window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e), (0, h.i)(!1);
              }
            );
          }, [o, d]),
          (0, t.jsxs)(a.f.div, {
            role: "dialog",
            "aria-modal": "true",
            "aria-label": p.caption,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className:
              "fixed inset-0 z-[90] flex flex-col bg-black/95 backdrop-blur-sm",
            onClick: () => {
              if (f.current) {
                f.current = !1;
                return;
              }
              o();
            },
            onPointerDown: (e) => {
              x.current = e.clientX;
            },
            onPointerUp: (e) => {
              if (null === x.current) return;
              let t = e.clientX - x.current;
              (x.current = null),
                Math.abs(t) > 60 && ((f.current = !0), d(t < 0 ? 1 : -1));
            },
            style: { touchAction: "pan-y" },
            children: [
              (0, t.jsxs)("div", {
                className:
                  "flex items-center justify-between px-4 py-4 md:px-10",
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, t.jsxs)("p", {
                    className:
                      "text-xs font-black tabular-nums tracking-[0.2em]",
                    children: [
                      String(r + 1).padStart(2, "0"),
                      " ",
                      (0, t.jsxs)("span", {
                        className: "text-fog/40",
                        children: ["/ ", String(e.length).padStart(2, "0")],
                      }),
                    ],
                  }),
                  (0, t.jsx)("button", {
                    ref: u,
                    type: "button",
                    onClick: o,
                    "aria-label": "Close",
                    className:
                      "flex h-11 w-11 items-center justify-center bg-dacity text-black transition-colors hover:bg-fog",
                    children: (0, t.jsx)(c.U, {}),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "relative flex-1",
                children: [
                  (0, t.jsx)(s.f, {
                    mode: "wait",
                    children: (0, t.jsx)(
                      a.f.div,
                      {
                        initial: { opacity: 0, scale: 0.96 },
                        animate: { opacity: 1, scale: 1 },
                        exit: { opacity: 0, scale: 1.02 },
                        transition: { duration: 0.3 },
                        className:
                          "absolute inset-4 md:inset-x-24 md:inset-y-2",
                        children: (0, t.jsx)(i.default, {
                          src: p.src,
                          alt: p.caption,
                          fill: !0,
                          sizes: "100vw",
                          className: "object-contain",
                        }),
                      },
                      p.src
                    ),
                  }),
                  (0, t.jsx)("button", {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation(), d(-1);
                    },
                    "aria-label": "Previous",
                    className:
                      "absolute left-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-fog/30 bg-black/60 transition-colors hover:border-dacity hover:text-dacity md:flex",
                    children: (0, t.jsx)(c.u, { className: "h-5 w-5" }),
                  }),
                  (0, t.jsx)("button", {
                    type: "button",
                    onClick: (e) => {
                      e.stopPropagation(), d(1);
                    },
                    "aria-label": "Next",
                    className:
                      "absolute right-3 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center border border-fog/30 bg-black/60 transition-colors hover:border-dacity hover:text-dacity md:flex",
                    children: (0, t.jsx)(c.G, { className: "h-5 w-5" }),
                  }),
                ],
              }),
              (0, t.jsxs)("div", {
                className: "flex items-center gap-3 px-4 py-5 md:px-10",
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, t.jsxs)("span", {
                    className:
                      "flex items-center gap-1.5 bg-dacity px-2 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black",
                    children: [
                      (0, t.jsx)(l, { cat: p.cat, className: "h-3 w-3" }),
                      p.cat,
                    ],
                  }),
                  (0, t.jsx)("p", {
                    className: "text-sm font-semibold md:text-base",
                    children: p.caption,
                  }),
                ],
              }),
            ],
          })
        );
      }
      e.s(
        [
          "StuntReel",
          0,
          function () {
            let [e, c] = (0, n.useState)("All"),
              [h, p] = (0, n.useState)(null),
              u = (0, n.useMemo)(
                () => ("All" === e ? d.F : d.F.filter((t) => t.cat === e)),
                [e]
              ),
              x = (0, n.useCallback)(() => p(null), []),
              f = (0, n.useCallback)(
                (e) =>
                  p((t) => (null === t ? t : (t + e + u.length) % u.length)),
                [u.length]
              );
            return (0, t.jsxs)("section", {
              id: "reel",
              className: "relative overflow-hidden bg-black py-24 md:py-36",
              children: [
                (0, t.jsx)(r.f, {
                  text: "100% send",
                  className:
                    "absolute left-0 top-10 text-[26vw] md:top-4 md:text-[18vw]",
                  distance: 25,
                }),
                (0, t.jsxs)("div", {
                  className:
                    "relative flex flex-col gap-8 px-4 md:flex-row md:items-end md:justify-between md:px-10",
                  children: [
                    (0, t.jsx)(o.SectionHead, {
                      eyebrow: "Stunt reel / Shot on location",
                      title: (0, t.jsxs)(t.Fragment, {
                        children: [
                          "Stunt",
                          (0, t.jsx)("br", {}),
                          "reel",
                          (0, t.jsx)("span", {
                            className: "text-dacity",
                            children: ".",
                          }),
                        ],
                      }),
                      sub: "Snapmatics from 3,000 ft and lower. Tap one.",
                    }),
                    (0, t.jsx)("div", {
                      className: "flex flex-wrap gap-2 md:justify-end",
                      role: "tablist",
                      "aria-label": "Filter the reel",
                      children: ["All", ...d.D].map((i) =>
                        (0, t.jsx)(
                          "button",
                          {
                            type: "button",
                            role: "tab",
                            "aria-selected": e === i,
                            onClick: () => c(i),
                            className: `flex -skew-x-[10deg] items-center border px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.18em] transition-colors ${
                              e === i
                                ? "border-dacity bg-dacity text-black"
                                : "border-fog/25 text-fog/80 hover:border-dacity hover:text-dacity"
                            }`,
                            children: (0, t.jsxs)("span", {
                              className:
                                "flex skew-x-[10deg] items-center gap-2",
                              children: [
                                "All" !== i ? (0, t.jsx)(l, { cat: i }) : null,
                                i,
                              ],
                            }),
                          },
                          i
                        )
                      ),
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "relative mt-12 columns-2 gap-2 px-2 md:mt-16 md:columns-3 md:gap-3 md:px-10 lg:columns-4",
                  children: (0, t.jsx)(s.f, {
                    mode: "popLayout",
                    children: u.map((e, s) =>
                      (0, t.jsxs)(
                        a.f.button,
                        {
                          type: "button",
                          layout: !0,
                          initial: { opacity: 0, scale: 0.94 },
                          animate: { opacity: 1, scale: 1 },
                          exit: { opacity: 0, scale: 0.94 },
                          transition: {
                            duration: 0.35,
                            ease: [0.16, 1, 0.3, 1],
                          },
                          onClick: () => p(s),
                          "aria-label": `Open: ${e.caption}`,
                          "data-cursor": "view",
                          "data-cursor-label": "View",
                          className:
                            "ca-hover group relative mb-2 block w-full break-inside-avoid overflow-hidden bg-graphite md:mb-3",
                          children: [
                            (0, t.jsx)(i.default, {
                              src: e.src,
                              alt: e.caption,
                              width: e.w,
                              height: e.h,
                              sizes:
                                "(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw",
                              className:
                                "ca-target h-auto w-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105",
                            }),
                            (0, t.jsxs)("span", {
                              className:
                                "absolute left-2 top-2 flex items-center gap-1 bg-black/70 px-1.5 py-1 text-[9px] font-black uppercase tracking-[0.2em] text-dacity backdrop-blur-sm",
                              children: [
                                (0, t.jsx)(l, {
                                  cat: e.cat,
                                  className: "h-3 w-3",
                                }),
                                e.cat,
                              ],
                            }),
                            (0, t.jsx)("span", {
                              className:
                                "absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/90 to-transparent p-3 pt-8 text-left text-xs font-semibold transition-transform duration-500 group-hover:translate-y-0",
                              children: e.caption,
                            }),
                          ],
                        },
                        e.src
                      )
                    ),
                  }),
                }),
                (0, t.jsx)(s.f, {
                  children:
                    null !== h && u[h]
                      ? (0, t.jsx)(m, {
                          items: u,
                          index: h,
                          onClose: x,
                          onStep: f,
                        })
                      : null,
                }),
              ],
            });
          },
        ],
        38683
      );
    },
    60029,
    (e) => {
      var t = e.i(43476),
        i = e.i(46932);
      function s({ children: e, className: i = "", as: a = "p" }) {
        return (0, t.jsxs)(a, {
          className: `eyebrow flex items-center gap-3 ${i}`,
          children: [
            (0, t.jsx)("span", {
              "aria-hidden": !0,
              className: "h-px w-8 shrink-0 bg-dacity",
            }),
            e,
          ],
        });
      }
      let a = [0.16, 1, 0.3, 1];
      e.s([
        "Eyebrow",
        0,
        s,
        "SectionHead",
        0,
        function ({
          eyebrow: e,
          title: n,
          sub: r,
          className: l = "",
          titleClassName: o = "",
          eyebrowClassName: c = "",
        }) {
          return (0, t.jsxs)(i.f.header, {
            initial: "hidden",
            whileInView: "show",
            viewport: { once: !0, amount: 0.3 },
            className: l,
            children: [
              (0, t.jsx)(s, { className: c, children: e }),
              (0, t.jsx)("div", {
                className: "overflow-hidden pb-[0.06em]",
                children: (0, t.jsx)(i.f.h2, {
                  variants: {
                    hidden: { y: "100%", skewY: 7 },
                    show: {
                      y: "0%",
                      skewY: 0,
                      transition: { duration: 0.9, ease: a },
                    },
                  },
                  className: `mt-4 text-[clamp(2.9rem,11vw,9.5rem)] font-black uppercase leading-[0.84] tracking-[-0.045em] ${o}`,
                  children: n,
                }),
              }),
              r
                ? (0, t.jsx)(i.f.p, {
                    variants: {
                      hidden: { opacity: 0, y: 16 },
                      show: {
                        opacity: 0.75,
                        y: 0,
                        transition: { duration: 0.7, delay: 0.15, ease: a },
                      },
                    },
                    className:
                      "mt-5 max-w-xl text-base leading-relaxed md:text-lg",
                    children: r,
                  })
                : null,
            ],
          });
        },
      ]);
    },
    16563,
    (e) => {
      var t = e.i(43476),
        i = e.i(71645);
      e.i(65506);
      var s = e.i(40462),
        a = e.i(65747),
        n = e.i(94409);
      e.s([
        "Marquee",
        0,
        function ({
          items: e,
          direction: r = -1,
          duration: l = 34,
          className: o = "",
          itemClassName: c = "",
          separatorClassName: d = "",
        }) {
          let h = (0, i.useRef)(null);
          (0, a.f)(
            () => {
              if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
                return;
              let e = s.f.fromTo(
                h.current,
                { xPercent: r < 0 ? 0 : -50 },
                {
                  xPercent: r < 0 ? -50 : 0,
                  duration: l,
                  ease: "none",
                  repeat: -1,
                }
              );
              return (0, n.V)(() => {
                let t = n.v.velocity,
                  i = 1 + Math.min(Math.abs(t) / 10, 4);
                s.f.to(e, {
                  timeScale: (t < 0 ? -1 : 1) * i,
                  duration: 0.35,
                  overwrite: !0,
                });
              });
            },
            { scope: h }
          );
          let m = (i) =>
            (0, t.jsx)(
              "div",
              {
                className: "flex shrink-0 items-center",
                "aria-hidden": i > 0,
                children: Array.from({ length: 3 }).flatMap((i, s) =>
                  e.map((e, i) =>
                    (0, t.jsxs)(
                      "span",
                      {
                        className: "flex items-center",
                        children: [
                          (0, t.jsx)("span", {
                            className:
                              "audacity" === e ? `aud ${c}` : `uppercase ${c}`,
                            children: e,
                          }),
                          (0, t.jsx)("span", {
                            className: `mx-5 md:mx-8 ${d}`,
                            children: "•",
                          }),
                        ],
                      },
                      `${s}-${i}`
                    )
                  )
                ),
              },
              i
            );
          return (0, t.jsx)("div", {
            className: `overflow-hidden ${o}`,
            children: (0, t.jsxs)("div", {
              ref: h,
              className: "flex w-max will-change-transform",
              children: [m(0), m(1)],
            }),
          });
        },
      ]);
    },
    87652,
    (e) => {
      var t = e.i(71645),
        i = e.i(49652);
      let s = { some: 0, all: 1 };
      e.s(
        [
          "f",
          0,
          function (
            e,
            {
              root: a,
              margin: n,
              amount: r,
              once: l = !1,
              initial: o = !1,
            } = {}
          ) {
            let [c, d] = (0, t.useState)(o);
            return (
              (0, t.useEffect)(() => {
                if (!e.current || (l && c)) return;
                let t = {
                  root: (a && a.current) || void 0,
                  margin: n,
                  amount: r,
                };
                return (function (
                  e,
                  t,
                  { root: a, margin: n, amount: r = "some" } = {}
                ) {
                  let l = (0, i.f)(e),
                    o = new WeakMap(),
                    c = new IntersectionObserver(
                      (e) => {
                        e.forEach((e) => {
                          let i = o.get(e.target);
                          if (!!i !== e.isIntersecting)
                            if (e.isIntersecting) {
                              let i = t(e.target, e);
                              "function" == typeof i
                                ? o.set(e.target, i)
                                : c.unobserve(e.target);
                            } else
                              "function" == typeof i &&
                                (i(e), o.delete(e.target));
                        });
                      },
                      {
                        root: a,
                        rootMargin: n,
                        threshold: "number" == typeof r ? r : s[r],
                      }
                    );
                  return l.forEach((e) => c.observe(e)), () => c.disconnect();
                })(e.current, () => (d(!0), l ? void 0 : () => d(!1)), t);
              }, [a, e, n, l, r]),
              c
            );
          },
        ],
        87652
      );
    },
    40462,
    (e) => {
      var t = e.i(89970);
      e.s(["f", () => t.f]);
    },
  ]);
})();
