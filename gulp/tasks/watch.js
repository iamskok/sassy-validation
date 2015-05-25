var gulp = require('gulp');

var paths = require('../paths');

function alwaysWatch() {
  	gulp.watch(paths.styles.watch, ['styles']);
  	gulp.watch(paths.sassdoc.src, ['sassdoc']);
}

gulp.task('watch', function() {
 	alwaysWatch();
});
