import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: "./src",
  puppeteerLaunchOptions: { args: ['--no-sandbox', '--disable-setuid-sandbox'] },
  projectName: "scully-master",
  outDir: './dist/static',
  routes: {
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./blog"
      }
    },
  }
};