import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { defineConfig } from 'vite';
import legacy from '@vitejs/plugin-legacy';

const require = createRequire(import.meta.url);

// The webcomponents polyfill must be loaded as a classic script before the app,
// so it is served (dev) and emitted (build) as-is instead of being bundled.
const WEBCOMPONENTS_PATH = '@webcomponents/webcomponentsjs/bundles/webcomponents-sd-ce.js';

function webcomponentsPolyfill() {
  const file = require.resolve(WEBCOMPONENTS_PATH);
  return {
    name: 'webcomponents-polyfill',
    configureServer(server) {
      server.middlewares.use(`/${WEBCOMPONENTS_PATH}`, (req, res) => {
        res.setHeader('Content-Type', 'text/javascript');
        res.end(readFileSync(file));
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: WEBCOMPONENTS_PATH, source: readFileSync(file) });
    }
  };
}

export default defineConfig({
  plugins: [
    webcomponentsPolyfill(),
    // Generates the ES5 `nomodule` bundle and polyfills for browsers without
    // module support (IE11, old GoogleBot), replacing babel-polyfill + rollup/babel.
    legacy({ targets: ['defaults', 'ie >= 11', 'chrome >= 41'] })
  ]
});
