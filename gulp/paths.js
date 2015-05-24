// Root path to assets.
var ROOT = './stylesheets/';

// Path to build compiled assets to.
var DEST = './build/';

// Build
var paths = {};

/**
 * Clean
 *
 * Folders to remove before doing a full production build.
 */
paths.clean = DEST;

/**
 * Styles
 *
 * Source SASS files, output to `DEST` folder
 */
paths.styles = {
	src:   ROOT + '_sassy-validation.scss',
	dest:  DEST,
	watch: ROOT + '**/*.scss',
};

/**
 * JS Hint
 *
 * Lint Gulp files.
 */
paths.jshint = {
	gulp: [
		'./gulpfile.js',
		'./gulp/**/*.js',
	],
	config: './.jshintrc',
};

/**
 * Sassdoc
 *
 * SASS documentation system
 */
paths.sassdoc = {
	src: ROOT + '**/*.scss',
	dest: './sassdoc/',
};

module.exports = paths;
