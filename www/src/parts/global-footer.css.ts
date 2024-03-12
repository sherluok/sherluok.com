import { style } from '@vanilla-extract/css';
import { DARK_SCHEME } from '^/style/scheme-presets.css';
import { vars } from '^/style/vars.css';

export const footer = style({
  vars: DARK_SCHEME,

  background: vars.defaultBackground,
  color: vars.primaryTextColor,
  gridColumn: '1 / -1',
  padding: `4rem`,
  borderTop: `1px solid ${vars.defaultBorderColor}`,
});

export const footerMain = style({
  marginInline: 'auto',
  maxWidth: `1200px`,
  paddingInline: `4rem`,
  boxSizing: 'border-box',
  display: 'grid',
  gridTemplateColumns: `auto auto minmax(0, 1fr)`,
  alignItems: 'center',
  gap: `1rem`,
});

export const footerLinks = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: `2rem`,
});

export const footerLink = style({
  transition: `color ${vars.transitionDurationTextColor}`,
  ':hover': {
    color: vars.linkHoverColor,
    textDecoration: 'underline',
  },
});

export const home = style({
  display: 'flex',
  alignItems: 'center',
  gap: `.5rem`,
  fontWeight: 800,
  transition: `background ${vars.transitionDurationBackground}`,
  background: vars.primaryTextColor,
  color: vars.defaultBackground,
  padding: `4px 12px`,
  ':hover': {
    background: vars.linkHoverColor,
  },
});
