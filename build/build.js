/**
 * Build process
 * This is responsible for build the entire library
 * @TODO Make versions with gzip (famous .min.js)
 */

// Dependencies
const fs = require('fs'),
      // zlib = require('zlib'),
      rollup = require('rollup'),
      // uglify = require('uglify'),
      babel = require('rollup-plugin-babel'),
      babelrc = require('babelrc-rollup').default;

// Contants
const version = process.env.VERSION || require('../package.json').version;

// Banner
const banner = [
  '/**',
  ' * Yebo SDK v' + version,
  ' * This library is the bridge between the Yebo E-commerce API',
  ' * and JavaScript applications',
  ' *',
  ' * @author <Yebo E-commerce>',
  ' * @contributors <Gabriel Corado, Gabriela Caldeira Diogo>',
  ' * @copyright (2016-' + new Date().getFullYear() + ') Yebo E-commerce',
  ' */'
].join("\n");

// Rollup Build!
rollup.rollup({
  // Basic definitions
  entry: 'src/index.js',
  plugins: [
    babel(babelrc())
  ]
}).then((bundle) => {
  // Create the CommonJS version
  write('dist/yebo.common.js', bundle.generate({
    format: 'cjs',
    banner: banner
  }).code);

  // Create the UMD version
  write('dist/yebo.umd.js', bundle.generate({
    format: 'umd',
    moduleName: 'yebo',
    banner: banner
  }).code);
}).catch((err) => {
  // Error!
  console.log(err);
});

// Write function
const write = function(dest, code) {
  // Returning a promise
  return new Promise((resolve, reject) => {
    // Write the file
    fs.writeFile(dest, code, (err) => {
      // Check errors
      if(err) return reject(err);

      // Log it
      console.log('Writing ' + dest + ' with size of ' + getSize(code));

      // Resolve it
      resolve();
    });
  });
}

// Get the file size
const getSize = function(code) {
  return (code.length / 1024).toFixed(2) + 'kb';
}
