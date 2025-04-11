import { defineConfig, loadEnv } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from "@rsbuild/plugin-sass";

const { publicVars } = loadEnv({ prefixes: ['REACT_APP_'] });

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  html: {
    template: './public/index.html',
  },
  output: {
    distPath: {
      root: 'build',
    },
    assetPrefix: '',
  },
  source: {
    include: [{ not: /[\\/]core-js[\\/]/ }],
    define: publicVars,
  },
});
