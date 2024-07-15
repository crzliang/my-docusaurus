// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'crzliang',
  tagline: 'To be or not be.',
  favicon: 'img/ico.png',

  // Set the production url of your site here
  url: 'https://space.crzliang.cn/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'crzliang', // Usually your GitHub org/user name.
  projectName: 'my-docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'crzliang',
        // logo: {
        //   alt: 'crzliang',
        //   src: 'img/logo.jpg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'archives',
            position: 'left',
            label: '杂七杂八',
          },
          {
            type: 'docSidebar',
            sidebarId: 'course',
            position: 'left',
            label: '课程&实验',
          },
          {
            type: 'docSidebar',
            sidebarId: 'CTF',
            position: 'left',
            label: 'CTF',
          },
          {
            type: 'docSidebar',
            sidebarId: 'hack',
            position: 'left',
            label: '靶场&靶机',
          },
          {
            type: 'docSidebar',
            sidebarId: 'DevOps',
            position: 'left',
            label: '运维&开发',
          },

          { to: '/blog', label: '博客', position: 'right' },
          {
            href: 'https://www.crzliang.cn/',
            label: '主站',
            position: 'right',
          },
          {
            href: 'https://github.com/a1phaaa',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   // style: 'dark',
      //   // links: [
      //   //   {
      //   //     title: 'Docs',
      //   //     items: [
      //   //       {
      //   //         label: 'Tutorial',
      //   //         to: '/docs/intro',
      //   //       },
      //   //     ],
      //   //   },

      //   // ],
      //   // copyright: `<p>Copyright © ${new Date().getFullYear()} </p><a target="_blank" href="https://beian.miit.gov.cn/" >桂ICP备2022011217号-2</a>`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
