import { default as webpack } from 'webpack';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  webpack: (config, { isServer, dev }) => {
    config.plugins = [...config.plugins, new webpack.DefinePlugin({ RUNTIME: JSON.stringify(dev ? 'nodejs' : 'edge') })];
    return config;
  },
};

export default nextConfig;
