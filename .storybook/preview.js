import '../src/index.css';

export const parameters = {
  viewMode: "docs",
  previewTabs: { 'storybook/docs/panel': { index: -1 } },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
