import random from '../random';
import getColor from '../getColor';
import isMobile from '../isMobile';
import { useEffect, useState } from 'react';

export interface BackgroundConfig {
  blur: number;
  minSize: number;
  maxSize: number;
  count: number;
  opacity: number;
  animate: boolean;
}

export interface Dot {
  bounce: number;
  color: { color: number; opacity: number };
  left: number;
  opacity: number;
  size: number;
  speed: number;
  top: number;
  xPace: number;
  yPace: number;
}

let physics = false;

export const togglePhysics = () => {
  physics = !physics;
};

export const getCurrentPhysicsValue = () => physics;

const useBackgroundAnimation = (
  config: BackgroundConfig
): HTMLCanvasElement => {
  let { width, height } = document.body.getBoundingClientRect();
  const [renderer] = useState(() => {
    const dots = _getDots(config);
    const { PIXI } = window as any;
    const renderer = PIXI.autoDetectRenderer(width, height, {
      antialias: true,
      autoResize: true,
      transparent: true,
    });
    const stage = new PIXI.Container();
    stage.filters = [new PIXI.filters.BlurFilter(config.blur)];
    const graphics = dots.map(dot => {
      const radius = dot.size / 2;
      const graphics = new PIXI.Graphics();
      graphics.position.set(dot.left, dot.top);
      graphics
        .beginFill(dot.color.color, dot.color.opacity)
        .drawCircle(0, 0, radius)
        .endFill();
      stage.addChild(graphics);
      return graphics;
    });
    renderer.render(stage);

    if (config.animate) {
      _animate(diff => {
        dots.forEach((dot, index) => {
          //-- update dot positions
          dot.left -= dot.xPace;
          if (dot.left < -dot.size) dot.left = width + dot.size;
          if (dot.left > width + dot.size) dot.left = -dot.size;
          //-- apply gravity
          if (physics) {
            if (dot.top > height - dot.size * 0.5) {
              if (dot.speed > 0) dot.speed = -Math.abs(dot.speed) * dot.bounce;
              else dot.speed = Math.min(dot.speed, -5);
              dot.top += dot.speed;
            } else {
              dot.top += dot.speed;
              dot.speed += 8 * (diff / 1000);
            }
          } else {
            dot.speed = 0;
            dot.top += dot.yPace;
            if (dot.top > height + dot.size && dot.xPace > 0)
              dot.top = -dot.size;
            else if (dot.top < -dot.size && dot.yPace < 0)
              dot.top = height + dot.size;
          }
          //-- update graphics per new dot settings
          graphics[index].setTransform(dot.left, dot.top);
        });
        renderer.render(stage);
      });
    }

    return renderer;
  });

  useEffect(() => {
    const handler = () => {
      const rect = document.body.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      renderer.resize(width, height);
    };
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return renderer.view as HTMLCanvasElement;
};

export default useBackgroundAnimation;

// Utility methods

const _getDot = (
  config: BackgroundConfig,
  width: number,
  height: number,
  percent: number
): Dot => {
  const size = random(config.minSize * percent, config.maxSize * percent);
  const left = random(-size, width + size);
  const top = random(-size, height + size);
  const xPace = random(40, 125) / 100;
  const yPace = random(-40, 40) / 100;
  const opacity = (random(1, 5) / 20) * config.opacity;
  const hue = (Math.random() * 10 + 185) / 360;
  const saturation = Math.random() * 0.25 + 0.75;
  const lightness = Math.random() * 0.5 + 0.5;
  const color = getColor(hue, saturation, lightness, opacity);
  const speed = 0;
  const bounce = random(50, 90) / 100;
  return { bounce, color, left, opacity, size, speed, top, xPace, yPace };
};

const _getDots = (config: BackgroundConfig): Array<Dot> => {
  const { width, height } = document.body.getBoundingClientRect();
  const area = width * height;
  const percent = area / (2560 * 1400);
  return Array(Math.round(config.count * percent))
    .fill(0)
    .map(() => _getDot(config, width, height, percent));
};

const _animate = (callback: (diff: number) => void): void => {
  let lastFrame = new Date().valueOf();
  let framePasses = 0;
  let tooSlowForAnimation = false;

  const checkFramerate = () => {
    if (tooSlowForAnimation) return true;

    const now = new Date().valueOf();
    if (now - lastFrame > 42) --framePasses;
    else ++framePasses;

    if (framePasses < -10) {
      tooSlowForAnimation = true;
    }

    lastFrame = now;
    return false;
  };

  const step = () => {
    const diff = Math.min(new Date().valueOf() - lastFrame, 42);
    if (checkFramerate()) return;
    callback(diff);
    if (!isMobile) requestAnimationFrame(step);
  };

  step();
};
