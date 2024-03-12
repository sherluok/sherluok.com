import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '^/style/vars.css';

export const mdx = style({
  font: vars.defaultFont,
  fontSize: `1rem`,
  color: vars.primaryTextColor,
  lineHeight: 1.75,
});

globalStyle(`${mdx} p code`, {
  background: vars.inlineCodeBackground,
  boxShadow: `0 0 0 1px ${vars.inlineCodeBorderColor}`,
  padding: `1px 6px`,
  borderRadius: 4,
});

globalStyle(`${mdx} a`, {
  color: vars.linkColor,
});

globalStyle(`${mdx} a:hover`, {
  color: vars.linkHoverColor,
  textDecoration: 'underline',
});

globalStyle(`${mdx} :is(h1, h2, h3, h4, h5, h6)`, {
  marginTop: `2em`,
  marginBottom: `1em`,
});

globalStyle(`${mdx} p > img`, {
  height: `1em`,
  verticalAlign: `-2px`,
});

// rehype-pretty-code
// https://rehype-pretty-code.netlify.app/

const rehypePrettyCode = `${mdx} figure[data-rehype-pretty-code-figure]`;

globalStyle(`${rehypePrettyCode}`, {
  overflow: 'clip',
  marginInline: 0,
  padding: 1,
});

globalStyle(`${rehypePrettyCode} pre`, {
  margin: 0,
  borderRadius: 4,
  paddingBlock: `1rem`,
  backgroundColor: vars.blockCodeBackground,
  boxShadow: `0 0 0 1px ${vars.blockCodeBorderColor}`,
  overflow: 'auto',
});

globalStyle(`${rehypePrettyCode} code`, {
  fontSize: '.875rem',
  lineHeight: 1.75,
  counterReset: 'line',
});

// Titles
// https://rehype-pretty-code.netlify.app/#titles
globalStyle(`${rehypePrettyCode} [data-rehype-pretty-code-title]`, {
  width: 'max-content',
  color: vars.secondaryTextColor,
  padding: '.5rem 1rem',
  boxShadow: `0 0 0 1px ${vars.blockCodeBorderColor}`,
  borderRadius: '4px 4px 0 0',
  background: vars.blockCodeBackground,
  fontFamily: vars.codeFontFamily,
  fontSize: '.875em',
  fontStyle: 'italic',
});

globalStyle(`${rehypePrettyCode} [data-rehype-pretty-code-title] + pre`, {
  borderTopLeftRadius: 0,
});

// Caption
// https://rehype-pretty-code.netlify.app/#captions
globalStyle(`${rehypePrettyCode} [data-rehype-pretty-code-caption]`, {
  color: vars.placeholderTextColor,
  padding: `.5rem 1rem`,
  boxShadow: `0 0 0 1px ${vars.blockCodeBorderColor}`,
  borderRadius: `0 0 4px 4px`,
  background: vars.blockCodeBackground,
  fontFamily: vars.codeFontFamily,
  fontSize: `.875em`,
  fontStyle: `italic`,
});

globalStyle(`${rehypePrettyCode} pre:has(+ [data-rehype-pretty-code-caption])`, {
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
});

// Highlight Lines
// https://rehype-pretty-code.netlify.app/#highlight-lines

globalStyle(`${rehypePrettyCode} code > [data-highlighted-line]`, {
  background: vars.highlightedCodeLineBackground,
});

// Highlight Chars
// https://rehype-pretty-code.netlify.app/#highlight-chars

globalStyle(`${rehypePrettyCode} code > span > [data-highlighted-chars]`, {
  background: vars.highlightedCodeCharBackground,
  // color: vars.highlightedCodeLineBackground,
});

// Line Numbers
// https://rehype-pretty-code.netlify.app/#line-numbers

globalStyle(`${rehypePrettyCode} code`, {
  counterReset: 'line',
});

globalStyle(`${rehypePrettyCode} code > [data-line]::before`, {
  counterIncrement: `line`,
  content: `counter(line)`,
  width: `1rem`,

  position: 'sticky',
  left: 0,
  display: `inline-block`,
  paddingInline: `1rem`,
  textAlign: `right`,
  color: vars.placeholderTextColor,
  background: vars.blockCodeBackground,
});

globalStyle(`${rehypePrettyCode} code[data-line-numbers-max-digits="2"] > [data-line]::before`, {
  width: `2rem`,
});

globalStyle(`${rehypePrettyCode} code[data-line-numbers-max-digits="3"] > [data-line]::before`, {
  width: `3rem`,
});
