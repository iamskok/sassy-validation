// Path to gulp tasks folder (relative to this file).
var TASKS_PATH = '../tasks/';

// Helper to load Gulp tasks.
module.exports = function( tasks ) {

	tasks.forEach( function( task ) {
		require( TASKS_PATH + task );
	});
};
