console.time('Gulp Run Time');

/**
 * Tasks
 *
 * Configure the tasks to be loaded.
 * Comment out what is not needed.
 */
var tasks = [
  'clean',
  'styles',
  'sassdoc',
  'watch',
  'default',
  'deploy',
];

/**
 * Task Loader (DO NOT EDIT)
 */
require('./gulp/utilities/loader')(tasks);