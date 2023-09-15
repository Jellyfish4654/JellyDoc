import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>JellyDocs</span>,
  docsRepositoryBase: 'https://github.com/Jellyfish4654/JellyDocs/tree/main/JellyDocs',
  footer: {
    text: ' ',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – JellyDocs'
    }
  }
}

export default config
