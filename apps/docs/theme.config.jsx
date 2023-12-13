import { Github } from '@portfolio/docs-ui/server';

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const config = {
  docsRepositoryBase:
    'https://github.com/enea-scaccabarozzi/Portfolio/blob/main/apps/docs',
  editLink: {
    text: 'Explore this project on GitHub',
  },
  logo: (
    <>
      <span className="nx-font-extrabold">Enea</span>
      <span className="nx-ml-2 nx-hidden nx-font-normal nx-text-gray-600 md:nx-inline">
        Scaccabarozzi
      </span>
    </>
  ),
  toc: {
    float: true,
    backToTop: true,
  },
  navbar: {
    extraContent: (
      <>
        <Github />
      </>
    ),
  },
  search: {
    placeholder: 'Search documentation…',
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
};

export default config;
