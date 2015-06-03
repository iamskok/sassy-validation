var gulp = require('gulp');
var plugins = {
  clean: require('gulp-clean'),
};

var cleanTest = require('../paths').cleanTest;

// Remove `build` folder.
gulp.task('clean-test', function() {
	return gulp.src('tests/test.css', {read: false})
    	.pipe(plugins.clean());
});