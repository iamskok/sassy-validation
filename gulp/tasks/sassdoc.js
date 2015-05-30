var gulp = require('gulp');
var plugins = {
	sassdoc: require('sassdoc'),
};
var sassdoc = require('../paths').sassdoc;

var SASSDOC_OPTIONS = {
	dest: sassdoc.dest,
	verbose: true,
    basePath: 'https://github.com/SassySuit/sassy-validation',
    googleAnalytics: 'UA-63553761-1',
};

gulp.task('sassdoc', ['clean'], function() {
	return gulp.src(sassdoc.src)
		.pipe(plugins.sassdoc(SASSDOC_OPTIONS));
});