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
      aliasPlugin = require('rollup-plugin-alias');

// Contants
const alias = require('./alias'),
      version = process.env.VERSION || require('../package.json').version;

// Banner
const banner = [
  '/**',
  ' * Yebo SDK v' + version,
  ' * (c) 2016-' + new Date().getFullYear() + ' Yebo E-commerce'
  ' */'
].join("\n");

// Rollup Build!
rollup.rollup({
  // Basic definitions
  entry: 'src/index.js',
  plugins: [
    babel({loose: 'all'}),
    aliasPlugin(alias)
  ]
}).then((bundle) => {
  // Create the UMD version
  return write('dist/yebo.umd.js', bundle.generate({
    format: 'umd',
    banner: banner
  }).code);
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
