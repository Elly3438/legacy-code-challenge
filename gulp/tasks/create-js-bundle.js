var _ = require('lodash');
var babelify = require('babelify');
var browserify = require('browserify');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var watchLegacy;

var constants = require('../constants');
var BROWSERIFY_DEFAULT_OBJ = constants.BROWSERIFY_DEFAULT_OBJ;
var EXTERNAL_LIBS = constants.EXTERNAL_LIBS;

function bundleJS(bundler) {
  gulpUtil.log(gulpUtil.colors.green('Bundling Legacy JS'));

  return bundler.bundle()
    .on('error', gulpUtil.log.bind(gulpUtil, 'Browserify Error'))
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/js'));
}

function createAppBundle(watch) {
  var bundler;

  bundler = browserify(BROWSERIFY_DEFAULT_OBJ);
  bundler.transform(babelify);
  bundler.add('src/index.js');

  _.each(EXTERNAL_LIBS, function(name) {
    bundler.external(name);
  });

  if (watch) {
    console.log('watching the JS');
    bundler = watchify(bundler);
    bundler.on('update', function() {
      bundleJS(bundler);
    });
  }

  bundleJS(bundler);
}

watchLegacy = _.partial(createAppBundle, true);

gulp.task('create-legacy-app-bundle', function() { return createAppBundle(); });
gulp.task('watch-legacy-js', function() { return createAppBundle(true); });