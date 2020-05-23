const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const jsFiles = [
    './dist/auth/runtime.js',
    './dist/auth/polyfills.js',
    './dist/auth/scripts.js',
    './dist/auth/main.js'
  ];
  const cssFiles = ['./dist/auth/styles.css'];

  await fs.ensureDir('elements');
  await concat(jsFiles, 'elements/card-element.js');
  await concat(cssFiles, 'elements/style.css');
})();
