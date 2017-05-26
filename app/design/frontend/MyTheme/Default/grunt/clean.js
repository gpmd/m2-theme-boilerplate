/* global module */

'use strict';

var defaultClean = require('../../../../../../dev/tools/grunt/configs/clean');
var _ = require('underscore');

var customClean = {
  themeStyles: [
    '<%= path.themeStyles %>',
    '<%= path.themeViewPreprocessedStyles %>',
    '<%= path.themeViewPreprocessedSource %>'
  ],
  themePatternlib: [
    '<%= path.patternlibPubDir %>'
  ],
  themeIconsBefore: [
    '<%= path.themeDir %>/web/images/icons/dist'
  ],
  themeIconsAfter: [
    '<%= path.themeDir %>/web/images/icons/minified'
  ]
};

module.exports = _.extend(defaultClean, customClean);
