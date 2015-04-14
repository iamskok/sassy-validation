'use strict';

var gulp 			= require('gulp'),
	sass 			= require('gulp-ruby-sass'),
	concat 			= require('gulp-concat'),
	sassdoc			= require('gulp-sassdoc'),
	deploy 		    = require('gulp-gh-pages');


gulp.task('default', function() {
	return gulp.src('_sassy-validation.scss')
    	.pipe(sass({
    		style: 'expanded',
    		precision: 10,
        	lineNumbers : true
    	}))
    	.pipe(gulp.dest('build/'))
});

/**
*
* Default sassDoc task
* Config options - http://sassdoc.com/gulp/
* API - http://sassdoc.com/annotations/
*
**/

gulp.task('sassdocs', function () {
  	return gulp.src('sass/**/*.scss')
	    .pipe(sassdoc({
	      	'dest': '/sassdocs',
	      	'verbose': true,
			'display': {
				'access': ['public', 'private'],
				'alias': true
			},
	      	'basePath': 'https://github.com/SassySuit/sassy-validation'
    }));
});

var options = {
    cacheDir: 'docs/gh-pages-cache'
}

gulp.task('deploy', function () {
    return gulp.src(['./sassdocs/**/*', , '!./node_modules/**'])
        .pipe(deploy(options));
});

gulp.task('watch', function() {
	gulp.watch('**/*.scss', ['default', 'sassdocs']);
});
