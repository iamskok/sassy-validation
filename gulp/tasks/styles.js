var gulp = require('gulp');
var plugins = {
 	sass: require('gulp-ruby-sass'),
};

var styles = require('../paths').styles;

var SASS_OPTIONS = {
	style: 'expanded',
    precision: 10,
    lineNumbers : true
};

// Build SASS
gulp.task('styles', function() {
  	return plugins.sass(styles.src, SASS_OPTIONS)
		.pipe(gulp.dest(styles.dest));
});