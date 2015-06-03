var gulp = require('gulp');
var plugins = {
 	sass: require('gulp-ruby-sass'),
};

var test = require('../paths').tests;

var TEST_OPTIONS = {
	style: 'expanded',
    precision: 10,
    lineNumbers : true
};

// Test Sass
gulp.task('test', ['clean-test'], function() {
  	return plugins.sass(test.src, TEST_OPTIONS)
		.pipe(gulp.dest(test.dest));
});