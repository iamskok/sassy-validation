// Root path to assets.
var ROOT = './stylesheets/';

// Path to build compiled assets to.
var DEST = './build/';

// Path to test assets.
var TESTS = './tests/';

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
 * Source Sass files, output to `DEST` folder
 */
paths.styles = {
	src:   ROOT + '_sassy-validation.scss',
	dest:  DEST,
	watch: ROOT + '**/*.scss',
};

/**
 * Tests
 *
 * Test Sass files
 */
paths.tests = {
	src:  TESTS + 'test.scss',
	dest: TESTS,
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

/**
 * Github Pages
 *
 * Deploy to GH Pages
 */
paths.deploy = {
	src: './sassdoc/**/*',
};

/**
 * Clean
 *
 * Remove sassdoc
 */
paths.clean = './sassdoc';

/**
 * Clean Test
 *
 * Remove test report
 */
paths.cleanTest = TESTS + 'report.css';

module.exports = paths;
