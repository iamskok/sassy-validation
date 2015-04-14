'use strict';

var gulp 			= require('gulp'),
	sass 			= require('gulp-ruby-sass'),
	concat 			= require('gulp-concat'),
	sassdoc			= require('gulp-sassdoc'),
	deploy 		    = require('gulp-gh-pages');


gulp.task('default', function() {
	return gulp.src('sassy-validation.scss')
    	.pipe(sass({
    		style: 'expanded',
    		precision: 10,
        	lineNumbers : true
    	}))
    	.pipe(gulp.dest('build'))
});

gulp.task('watch', function() {
	gulp.watch('**/*.scss', ['default']);
});
