import { createVar, globalStyle, style } from '@vanilla-extract/css';
import { vars } from '^/style/vars.css';

const textColor = createVar();
const linkColor = createVar();
const borderColor = createVar();
const groupBackground = createVar();

export const container = style({
  minHeight: `100dvh`,
  margin: 0,
  padding: 0,
  background: vars.defaultBackground,
  color: vars.primaryTextColor,
});

export const main = style({
  maxWidth: `1200px`,
  minHeight: `100dvh`,
  boxSizing: 'border-box',
  padding: `4rem`,

  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gridAutoRows: `minmax(200px, auto)`,
  alignContent: 'start',
  gap: `2rem`,
  marginInline: 'auto',
});

export const header = style({
  gridColumn: '1 / -1',
  paddingBlock: `4rem`,
});

export const title = style({
  textAlign: 'center',
  fontSize: `5rem`,
  fontWeight: 900,
  fontFamily: 'serif',
});

export const sherluok = style({
  fontSize: `5rem`,
  textTransform: 'uppercase',
});

export const dotcom = style({
  fontSize: `3rem`,
  textTransform: 'uppercase',
});

export const group = style({
  border: `1px solid ${vars.primaryTextColor}`,
  padding: `1.5rem 2rem`,
  display: 'grid',
  gridTemplateRows: 'auto minmax(0, 1fr)',
  gap: `.5rem`,
  overflow: 'clip',
});

export const group1x2 = style([group, {
  gridColumnEnd: `span 1`,
  gridRowEnd: `span 2`,
}]);

export const group2x1 = style([group, {
  gridColumnEnd: `span 2`,
  gridRowEnd: `span 1`,
}]);

export const group2x2 = style([group, {
  gridColumnEnd: `span 2`,
  gridRowEnd: `span 2`,
}]);

export const group2x3 = style([group, {
  gridColumnEnd: `span 2`,
  gridRowEnd: `span 2`,
}]);

export const group3x1 = style([group, {
  gridColumnEnd: `span 3`,
  gridRowEnd: `span 1`,
}]);

export const group3x2 = style([group, {
  gridColumnEnd: `span 3`,
  gridRowEnd: `span 2`,
}]);

export const groupHeader = style({
  display: 'flex',
});

export const groupTitle = style({
  fontWeight: 800,
});

export const groupItemList = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const groupItem = style({
  lineHeight: 1.5,
});

export const img = style({
  width: `100%`,
  objectFit: `cover`,
});

globalStyle(`${group}:has(> ${img})`, {
  padding: 0,
  margin: 0,
  display: 'flex',
});

export const link = style({
  ':hover': {
    color: vars.linkHoverColor,
    textDecoration: 'underline',
  },
});
