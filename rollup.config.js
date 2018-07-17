import filesize from 'rollup-plugin-filesize';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';
import includePaths from 'rollup-plugin-includepaths';
import * as path from 'path';

function getConfig({ input, dest, format, uglified = true, transpiled = false, bundled = false }) {
  const conf = {
    input: input,
    output: { file: dest, format, sourcemap: true },
    plugins: [
      transpiled &&
        babel({
          presets: [['env', { modules: false }]],
          plugins: ['external-helpers']
        }),
      uglified &&
        uglify({
          warnings: true,
          keep_fnames: true,
          sourceMap: true,
          compress: { passes: 2 },
          mangle: { properties: false, keep_fnames: true }
        }),
      filesize()
    ].filter(Boolean)
  };

  return conf;
}

const config = [
  getConfig({ input: './src/index.js', dest: 'index.umd.js', format: 'umd' })
];

export default config;
