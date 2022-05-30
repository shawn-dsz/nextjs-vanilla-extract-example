import { style } from '@vanilla-extract/css';
import { vars } from './theme.css';

export const root = style({
  padding: vars.space.large,
});

export const background = style({
  background: vars.color.pink,
});

export const foreground = style({
  color: vars.color.blue,
});
