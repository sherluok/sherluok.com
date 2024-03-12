import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '^/style/vars.css';

export const schemeSwitcher = style({
  display: 'flex',
});

const schemeButtonBase = style({
  width: '1em',
  height: '1em',
  padding: `6px 8px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
  transition: `color ${vars.transitionDurationIconColor}`,
});

export const schemeButton = styleVariants({
  inactive: [schemeButtonBase, {
    cursor: 'pointer',
    color: vars.placeholderTextColor,
    ':hover': {
      color: vars.primaryTextColor,
      background: vars.hoverBackground,
    },
  }],
  active: [schemeButtonBase, {
    color: vars.primaryTextColor,
  }],
});

export const schemeIcon = style({
  display: 'block',
  maxWidth: `1em`,
  height: `1em`,
  fill: 'currentcolor',
});
