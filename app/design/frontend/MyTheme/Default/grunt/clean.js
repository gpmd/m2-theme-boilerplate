module.exports = {
  options: {
    force: true // Careful! Allows deleting of files outside of working directory
  },
  patternlib: [
    '<%= pubDir %>'
  ],
  iconsBefore: [
    'web/images/icons/dist'
  ],
  iconsAfter: [
    'web/images/icons/minified'
  ]
};
