var _ = require('lodash');
var browserify = require('browserify');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var source = require('vinyl-source-stream');

var constants = require('../constants');
var BROWSERIFY_DEFAULT_OBJ = constants.BROWSERIFY_DEFAULT_OBJ;
var EXTERNAL_LIBS = constants.EXTERNAL_LIBS;

function createVendorBundle() {
  var bundler = browserify(BROWSERIFY_DEFAULT_OBJ);

  _.each(EXTERNAL_LIBS, function(name) {
    bundler.require('./node_modules/' + name, { expose: name });
  });

  gulpUtil.log(gulpUtil.colors.green('Bundling Vendor JS'));
  return bundler.bundle()
    .on('error', gulpUtil.log.bind(gulpUtil, 'Browserify Error'))
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('public/js'));
}

gulp.task('create-legacy-vendor-bundle', function() { return createVendorBundle(); });