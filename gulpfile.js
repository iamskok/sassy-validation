console.time('Gulp Run Time');

/**
 * Tasks
 *
 * Configure the tasks to be loaded.
 * Comment out what is not needed.
 */
var tasks = [
  'clean',
  'clean-test',
  'styles',
  'sassdoc',
  'watch',
  'default',
  'deploy',
  'test',
];

/**
 * Task Loader (DO NOT EDIT)
 */
require('./gulp/utilities/loader')(tasks);