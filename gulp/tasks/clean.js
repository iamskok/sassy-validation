var gulp = require('gulp');
var plugins = {
  clean: require('gulp-clean'),
};

var clean = require('../paths').clean;

// Remove `build` folder.
gulp.task('clean', function() {
	return gulp.src(clean, {read: false})
    	.pipe(plugins.clean());
});