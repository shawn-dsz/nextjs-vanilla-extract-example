import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const root = style({
  padding: vars.space.large,
});

export const background = styleVariants(vars.color, (background) => ({
  background,
}));

export const foreground = styleVariants({
  red: { color: vars.color.red },
  aqua: { color: vars.color.aqua },
});

export type Background = keyof typeof background;
