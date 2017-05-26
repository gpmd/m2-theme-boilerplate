/* global module */

'use strict';

module.exports = {
  default: [],

  patternlib: {
    description: 'Pattern library',
    tasks: [
      'clean:themePatternlib',
      'bake:themePatternlib'
    ]
  },

  icons: {
    description: 'Icons',
    tasks: [
      'clean:themeIconsBefore',
      'svgmin:themeIcons',
      'grunticon:themeIcons',
      'clean:themeIconsAfter'
    ]
  },

  // Only run from Gruntfile.m2base.js
  m2baseModernizr: {
    description: 'M2base Modernizr',
    tasks: [
      'modernizr:themeModernizr'
    ]
  }
};
