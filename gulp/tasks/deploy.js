var gulp   = require('gulp');
var deploy = require('gulp-gh-pages');
var sassdoc = require('../paths').sassdoc;

gulp.task('copy-html', function() {
    gulp.src(sassdoc.verification)
    .pipe(gulp.dest(sassdoc));
});

gulp.task('deploy', ['copy-html'], function() {
  return gulp.src('./sassdoc/**/*')
    .pipe(deploy());
});