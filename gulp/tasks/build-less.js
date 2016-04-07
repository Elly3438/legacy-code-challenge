var _ = require('lodash');
var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var less = require('gulp-less');

function buildLess() {
  gulpUtil.log(gulpUtil.colors.green('Building CSS for Legacy'));

  return gulp.src('./src/less/style.less')
    .pipe(less())
    .on('error', function(err) {
      gulpUtil.log(gulpUtil.colors.red('Less Error: '), err);
      this.emit('end');
    })
    .pipe(gulp.dest('./public/css'));
}

gulp.task('build-legacy-styles', function() { return buildLess() });