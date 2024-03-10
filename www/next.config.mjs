import { default as createMdxPlugin } from '@next/mdx';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { default as rehypePrettyCode } from 'rehype-pretty-code';
const withVanillaExtract = createVanillaExtractPlugin();

// https://github.com/rehype-pretty/rehype-pretty-code/blob/master/website/next.config.mjs
/** @type {import('rehype-pretty-code').Options} */
const rehypePrettyCodeOptions = {
  keepBackground: false,
  // https://rehype-pretty-code.netlify.app/#theme
  // https://rehype-pretty-code.netlify.app/#multiple-themes-dark-and-light-mode
  // https://shiki.style/themes#themes
  theme: {
    dark: "github-dark-dimmed",
    light: "github-light",
  },
};

const withMDX = createMdxPlugin({
  options: {
    remarkPlugins: [],
    rehypePlugins: [
      [rehypePrettyCode, rehypePrettyCodeOptions],
    ],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withVanillaExtract(withMDX(nextConfig));
