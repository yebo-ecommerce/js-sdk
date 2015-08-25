//
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    mochaPhantomJS = require('gulp-mocha-phantomjs'),
    addsrc = require('gulp-add-src'),
    rollup = require('rollup'),
    file = require('gulp-file');

function bundle(format) {
  return rollup.rollup({
    entry: 'index.js',
    external: ['cacheJS']
  }).then(function(bundle) {
    return bundle.generate({
      format: format,
      moduleName: 'yebo_sdk'
    });
  });
}

function bundleTests(format) {
  return rollup.rollup({
    entry: 'tests/index.js',
    external: ['cacheJS']
  }).then(function(bundle) {
    return bundle.generate({
      format: format,
      moduleName: 'yebo_sdk'
    });
  });
}

// Build the library
gulp.task('build', function(done) {
  bundle('umd').then(function(gen) {
    file('yebo_sdk.js', gen.code, { src: true })
      .pipe(babel())
      .pipe(addsrc.prepend('./external/*.js'))
      .pipe(concat('yebo_sdk.js'))
      .pipe(gulp.dest('dist'))
      .on('error', done)
      .on('end', done);
  }).catch(done);
});

// Build tests
gulp.task('buildTests', function() {
  gulp.src(['tests/index.js'])
      .pipe(browserify({
        transform: [ babelify ]
      }))
      .pipe(addsrc('./external/*.js'))
      .pipe(concat('yebo_sdk-tests.js'))
      .pipe(gulp.dest('./tests'));
});

// Run the tests
gulp.task('test', ['buildTests'], function() {
  gulp.src(['tests/index.html'])
      .pipe(mochaPhantomJS());
});

gulp.task('watch', function() {
  gulp.watch(['lib/**/*.js'], ['build']);
  gulp.watch(['tests/**/*.js'], ['test']);
});
