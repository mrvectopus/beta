import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  navigation: {
    next: false,
    prev: false,
  },
  gitTimestamp: null,
  editLink: {
    text: null,
  },
  feedback: {
    content: null,
  },
  footer: {
    component: null,
  },
}

export default config
