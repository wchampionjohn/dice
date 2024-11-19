const esbuild = require('esbuild');
const sassPlugin = require('esbuild-plugin-sass');

esbuild.build({
  entryPoints: ['app/javascript/dice_app/index.js'],
  bundle: true,
  sourcemap: true,
  format: 'esm',
  outdir: 'app/assets/builds',
  publicPath: '/assets',
  loader: { '.js': 'jsx' },
  plugins: [sassPlugin()],
}).catch(() => process.exit(1));
