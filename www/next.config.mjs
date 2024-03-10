import { default as createMdxPlugin } from '@next/mdx';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import { default as rehypePrettyCode } from 'rehype-pretty-code';
import { PrismaPlugin } from '@prisma/nextjs-monorepo-workaround-plugin';

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
  webpack: (config, { isServer }) => {
    if (isServer) {
      // https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-monorepo
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    return config;
  },
};

export default withVanillaExtract(withMDX(nextConfig));
