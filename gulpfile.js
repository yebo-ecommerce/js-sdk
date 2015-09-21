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

// Bundle UMD
function bundle(format) {
  return rollup.rollup({
    entry: 'index.js',
    external: [
      'rsvp',
      'cacheJS',
      'lodash/lang/isEmpty',
      'lodash/lang/isArray',
      'lodash/object/assign'
    ]
  }).then(function(bundle) {
    return bundle.generate({
      format: format,
      // sourceMap: true,
      moduleName: 'YeboSDK'
    });
  });
}

// gulp.task('build', function(done){
//   return bundle('umd').then(function(gen) {
//     return file('yebo_sdk.js', gen.code, {src: true})
//       // .pipe(sourcemaps.init({loadMaps: true}))
//       // .pipe(inlineEnv())
//       .pipe(babel())
//       // .pipe(sourcemaps.write('./'))
//       .pipe(gulp.dest('dist'));
//   });
// })

// Build the library
gulp.task('build', function(done) {
  gulp.src(['lib/**/*.js', 'yebo_sdk.js'])
  // gulp.src('lib/yebo_sdk/request.js')
  // gulp.src('index.js')
    // .pipe(browserify({
    //   transform: [
    //     babelify.configure({
    //       modules: 'umd'
    //     })
    //   ]
    // }))
    .pipe(babel({
      modules: 'umd'
    }))
    .pipe(addsrc.prepend('./external/*.js'))
    .pipe(concat('yebo_sdk.js'))
    .pipe(gulp.dest('dist'))
    .on('error', done)
    .on('end', done);
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
