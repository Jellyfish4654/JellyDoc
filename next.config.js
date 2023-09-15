const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  staticImage: true,
  basePath: '/JellyDocs',
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

module.exports = withNextra({
  images: {
    unoptimized: true
  }
});