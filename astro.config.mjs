import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import dotHtmlRedirects from './src/integration/dot-html-redirects';
import { defineConfig } from 'astro/config';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import remarkEmbedder from '@remark-embedder/core';
import oembed from '@remark-embedder/transformer-oembed';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import {
  imageDirective,
  gistDirective,
  socialDirective,
} from './src/remark/directives';
import remarkOnlyStrong from './src/remark/only-strong';
import { loadEnv } from 'vite';
import svgr from 'vite-plugin-svgr';

const { PUBLIC_CLOUDINARY_CLOUD_NAME } = loadEnv(
  process.env.NODE_ENV ?? 'development',
  process.cwd(),
  '',
);

// https://astro.build/config
export default defineConfig({
  site: 'https://unitary.foundation',
  redirects: {
    '/faq': '/faqs',
    '/faq.html': '/faqs',
    '/research': '/research/publications',
    '/research.html': '/research/publications',
    '/mitiq': '/research/mitiq',
    '/mitiq.html': '/research/mitiq',
    '/talks': '/community/events',
    '/talks.html': '/community/events',
    '/meetup': '/community/events',
    '/meetup.html': '/community/events',
    '/community/unitaryCON': '/community/2025/unitaryCON',
  },
  integrations: [
    tailwind({ config: { applyBaseStyles: false } }),
    mdx(),
    react(),
    dotHtmlRedirects(),
  ],
  markdown: {
    remarkPlugins: [
      remarkOnlyStrong,
      remarkGfm,
      [
        remarkEmbedder.default,
        {
          transformers: [[oembed.default]],
        },
      ],
      remarkDirective,
      remarkMath,
      [imageDirective, { cloudName: PUBLIC_CLOUDINARY_CLOUD_NAME }],
      gistDirective,
      socialDirective,
    ],
    rehypePlugins: [rehypeKatex],
  },
  vite: {
    plugins: [
      svgr({
        exportAsDefault: true,
      }),
    ],
  },
});
