import { Spring, createSpringConfig } from './tokens';

/**
 * Анимация для элемента списка при наведении
 */
export const listCellHoverAnimation = {
  initial: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    scale: 1,
    transformOrigin: 'center',
  },
  hover: {
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
    scale: 1.005,
    transformOrigin: 'center',
  },
  transition: createSpringConfig({
    stiffness: Spring.Stiffness.Medium,
    damping: Spring.Damping.Medium,
    mass: Spring.Mass.Default
  }).transition
};

/**
 * Анимация для элемента списка при нажатии
 */
export const listCellTapAnimation = {
  initial: {
    scale: 1,
    transformOrigin: 'center',
  },
  tap: {
    scale: 0.98,
    transformOrigin: 'center',
  },
  transition: createSpringConfig({
    stiffness: Spring.Stiffness.Firm,
    damping: Spring.Damping.High,
    mass: Spring.Mass.Default
  }).transition
};

/**
 * Анимация радиокнопки при выборе
 */
export const radioAnimation = {
  initial: {
    scale: 0,
  },
  checked: {
    scale: 1,
  },
  transition: createSpringConfig({
    stiffness: Spring.Stiffness.Firm,
    damping: Spring.Damping.Medium,
    mass: Spring.Mass.Low
  }).transition
};

/**
 * Анимация для правой части (аватара) при наведении
 */
export const avatarAnimation = {
  initial: {
    scale: 1,
    rotate: 0,
  },
  hover: {
    scale: 1.05,
    rotate: 5,
  },
  transition: createSpringConfig({
    stiffness: Spring.Stiffness.Medium,
    damping: Spring.Damping.Medium,
    mass: Spring.Mass.Low
  }).transition
};
