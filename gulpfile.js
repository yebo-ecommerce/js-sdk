//
var gulp = require('gulp'),
    babel = require('gulp-babel'),
    babelify = require('babelify'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    mochaPhantomJS = require('gulp-mocha-phantomjs'),
    addsrc = require('gulp-add-src');

// Build the library
gulp.task('build', function() {
  gulp.src(['lib/yebo_sdk.js'])
      .pipe(browserify({
        transform: [ babelify ]
      }))
      .pipe(addsrc('./external/*.js'))
      .pipe(concat('yebo_sdk.js'))
      .pipe(gulp.dest('./dist'));
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
