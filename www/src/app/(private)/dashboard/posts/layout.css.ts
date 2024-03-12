import { style } from '@vanilla-extract/css';
import { vars } from '^/style/vars.css';

export const container = style({
  display: 'grid',
  gridTemplateRows: `minmax(0, 1fr)`,
  gridTemplateColumns: `minmax(10rem, auto) minmax(0, 1fr)`,
  gap: 1,
});

export const postList = style({
  background: vars.defaultBackground,
  padding: `1rem`,
});
