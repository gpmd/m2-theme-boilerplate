/* global module */

module.exports = {
  options: {
    // Careful! Allows deleting of files outside of working directory
    force: true,
  },
  patternlib: [
    '<%= pubDir %>',
  ],
  iconsBefore: [
    'web/images/icons/dist',
  ],
  iconsAfter: [
    'web/images/icons/minified',
  ],
};
