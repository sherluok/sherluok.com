import { style } from '@vanilla-extract/css';

export const body = style({
  minHeight: `100dvh`,
  display: 'grid',
  gridTemplateRows: `minmax(0, 1fr) auto`,
});

export const main = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
