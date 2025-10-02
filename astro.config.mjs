import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'


export default defineConfig({
site: 'https://various-note.jp', // 後で独自ドメインに差し替え
integrations: [mdx(), sitemap()],
trailingSlash: 'never',
})