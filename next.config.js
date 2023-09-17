const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  staticImage: true,
  flexsearch: {
    codeblocks: false
  },
  defaultShowCopyCode: true
})

module.exports = withNextra({
  images: {
    unoptimized: true
  },
  basePath: '/JellyDocs',
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://jellyfishbbhs.com/JellyDocs' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
 
    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'JellyDocs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'JellyDocs: The Ultimate Guide to Navigating the Sea of Knowledge'}
        />
      </>
    )
  }
});