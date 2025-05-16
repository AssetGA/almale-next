// horizontalLoop.js
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export function horizontalLoop(items, config = {}) {
  items = gsap.utils.toArray(items);

  let {
    center,
    speed = 1,
    draggable = false,
    dragSpeed = 0.3,
    snap = 1,
    onChange,
    paused,
  } = config;

  let wrapWidth = 0;
  let startX = 0;
  let animation;
  let proxy = document.createElement("div");
  let wrap = gsap.utils.wrap(0, 1);
  let ratio;
  let snapPoints = [];

  const spacing = center ? 0.5 : 0;
  const totalWidth = items.length * (1 + spacing);

  items.forEach((item, i) => {
    gsap.set(item, {
      xPercent: center ? -50 : 0,
      x: `${i * 100 * (1 + spacing)}%`,
    });
  });

  function build() {
    wrapWidth = items.length * (1 + spacing);
    ratio = 1 / wrapWidth;
    snapPoints = items.map((_, i) => i / items.length);

    animation = gsap.to(items, {
      xPercent: `-=${items.length * 100 * (1 + spacing)}`,
      ease: "none",
      duration: totalWidth / speed,
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100 * (1 + spacing), 0),
      },
    });

    if (!paused) {
      animation.play();
    } else {
      animation.pause();
    }
  }

  function scrollTo(index, vars = {}) {
    let current = wrap(animation.progress());
    let snapped = snapPoints[index];

    let dif = snapped - current;
    if (dif > 0.5) {
      dif -= 1;
    } else if (dif < -0.5) {
      dif += 1;
    }

    let newProgress = current + dif;
    gsap.to(proxy, {
      duration: vars.duration || 1,
      ease: vars.ease || "power3.inOut",
      progress: newProgress,
      onUpdate: () => {
        animation.progress(wrap(proxy));
      },
    });

    onChange && onChange(items[index], index);
  }

  function next(vars = {}) {
    scrollTo((findIndex() + 1) % items.length, vars);
  }

  function previous(vars = {}) {
    scrollTo((findIndex() - 1 + items.length) % items.length, vars);
  }

  function findIndex() {
    let progress = wrap(animation.progress());
    let closest = snapPoints.reduce(
      (a, b, i) => {
        return Math.abs(b - progress) < Math.abs(a.value - progress)
          ? { value: b, index: i }
          : a;
      },
      { value: Infinity, index: -1 }
    );

    return closest.index;
  }

  if (draggable) {
    Draggable.create(proxy, {
      type: "x",
      trigger: items[0].parentNode,
      onDrag: function () {
        animation.progress(wrap(startX + (this.x / this.width) * dragSpeed));
      },
      onThrowUpdate: function () {
        animation.progress(wrap(startX + (this.x / this.width) * dragSpeed));
      },
      inertia: true,
      onPress: function () {
        startX = animation.progress();
      },
      snap: {
        x: (value) =>
          (Math.round((value / this.width) * items.length) * this.width) /
          items.length,
      },
    });
  }

  build();

  return {
    next,
    previous,
    toIndex: scrollTo,
  };
}
