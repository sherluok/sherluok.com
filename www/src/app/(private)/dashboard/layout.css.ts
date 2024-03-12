import { style } from "@vanilla-extract/css";
import { vars } from '^/style/vars.css';

export const container = style({
  width: '100dvw',
  height: '100dvh',

  display: 'grid',
  gridTemplateRows: `40px minmax(0, 1fr)`,
  gridTemplateColumns: `auto minmax(0, 1fr)`,
  gridTemplateAreas: `
   "title-bar title-bar"
   "side-bar main-area"
  `,
  background: vars.defaultBorderColor,
  gap: 1,
});

export const titleBar = style({
  gridArea: 'title-bar',
  background: vars.defaultBackground,
});

export const sideBar = style({
  gridArea: 'side-bar',
  background: vars.defaultBackground,
  display: 'flex',
  flexDirection: 'column',
  padding: `1rem`,
  gap: `1rem`,
});

export const mainArea = style({
  gridArea: 'main-area',
  background: vars.defaultBackground,
});
