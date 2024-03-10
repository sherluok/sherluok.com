import { createVar } from '@vanilla-extract/css';

// export const [lightSchemeClassName, schemeVars] = createTheme({
//   defaultBackground: `hsl(220 5% 4%)`,
//   hoverBackground: `hsl(220 5% 12%)`,

//   primaryForeground: `hsl(220 5% 80%)`,
//   secondaryForeground: `hsl(220 5% 60%)`,
//   placeholderForeground: `hsl(220 5% 40%)`,

//   defaultBorderColor: `hsl(220 5% 16%)`,
// });

export const brightBackground = createVar();
export const defaultBackground = createVar();
export const hoverBackground = createVar();

export const primaryForeground = createVar();
export const secondaryForeground = createVar();
export const placeholderForeground = createVar();

export const defaultBorderColor = createVar();

// Link

export const linkColor = createVar();
export const linkHoverColor = createVar();
export const linkPressColor = createVar();

// Button

export const primaryButtonBackground = createVar();
export const primaryButtonHoverBackground = createVar();
export const primaryButtonPressBackground = createVar();
export const primaryButtonForeground = createVar();
export const primaryButtonHoverForeground = createVar();
export const primaryButtonPressForeground = createVar();
export const primaryButtonBorderColor = createVar();

export const secondaryButtonBackground = createVar();
export const secondaryButtonHoverBackground = createVar();
export const secondaryButtonPressBackground = createVar();
export const secondaryButtonForeground = createVar();
export const secondaryButtonHoverForeground = createVar();
export const secondaryButtonPressForeground = createVar();
export const secondaryButtonBorderColor = createVar();
