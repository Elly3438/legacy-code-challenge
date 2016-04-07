var gulp = require('gulp');
var gulpUtil = require('gulp-util');

require('./gulp/tasks');

gulp.task('default', [ 'build-legacy-styles', 'create-legacy-app-bundle', 'create-legacy-vendor-bundle' ], function() {
  gulpUtil.log(gulpUtil.colors.green('Legacy App Files Built'));
});

gulp.task('watch-legacy', [ 'watch-legacy-js' ], function() {
  gulp.watch([ './src/less/**/*.less' ], [ 'build-legacy-styles' ]);
});