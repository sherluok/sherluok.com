import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateRows: `minmax(0, 1fr)`,
  gridTemplateColumns: `1fr 1fr`,
  gap: 1,
});
