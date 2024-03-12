import { style } from '@vanilla-extract/css';
import { vars } from '^/style/vars.css';

export const container = style({
  border: 'none',
  outline: 'none',
  boxShadow: `0 0 0 1px ${vars.secondaryButtonBorderColor}`,
  background: vars.secondaryButtonBackground,
  color: vars.secondaryButtonForeground,
  font: vars.defaultFont,
  padding: `4px 12px`,
  borderRadius: `4px`,
  ':hover': {
    background: vars.secondaryButtonHoverBackground,
    color: vars.secondaryButtonHoverForeground,
  },
  ':active': {
    background: vars.secondaryButtonPressBackground,
    color: vars.secondaryButtonPressForeground,
  },
});
