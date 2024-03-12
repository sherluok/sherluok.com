import { style } from '@vanilla-extract/css';

export const container = style({

});

export const table = style({
  display: 'grid',
  gridTemplateColumns: `auto minmax(0, 1fr) auto auto`,
  background: 'red',
  padding: 1,
  gap: 1,
  margin: 32,
});

export const row = style({
  gridColumn: `1 / -1`,
  display: 'grid',
  gridTemplateColumns: `subgrid`,
});

export const cell = style({
  background: 'white',
  padding: '4px 12px',
});
