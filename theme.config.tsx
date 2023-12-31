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
    text: React.FC,
  },
  feedback: {
    content: null,
  },
  footer: {
    component: React.FC,
  },
}

export default config
