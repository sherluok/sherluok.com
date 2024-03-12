import { style } from '@vanilla-extract/css';
import { vars } from '^/style/vars.css';

export const container = style({
  display: 'grid',
  gridTemplateRows: `48px minmax(0, 1fr)`,
  gridTemplateColumns: `minmax(0, 1fr) minmax(0, 900px)`,
  gridTemplateAreas: `
    "toolbar toolbar"
    "editor previewer"
  `,
  gap: 1,
});

export const toolbar = style({
  gridArea: 'toolbar',
  background: vars.defaultBackground,
  display: 'flex',
  alignItems: 'center',
  paddingInline: 16,
  gap: 8,
});

export const editor = style({
  gridArea: 'editor',
  background: vars.editorBackground,

  // textarea
  outline: 'none',
  border: 'none',
  margin: 0,
  borderRadius: 0,
  padding: 16,
  color: 'inherit',
});

export const previewer = style({
  gridArea: 'previewer',
  background: vars.defaultBackground,
  padding: 16,
  overflow: 'auto',
});

export const previewContent = style({
  maxWidth: 800,
  marginInline: 'auto',
});
