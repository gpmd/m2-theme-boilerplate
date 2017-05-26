/* global module */

'use strict';

var defaultSvgmin = require('../../../../../../dev/tools/grunt/configs/svgmin');
var _ = require('underscore');

var customSvgmin = {
  themeIcons: {
    files: [
      {
        expand: true,
        flatten: false,
        cwd: '<%= path.themeDir %>/web/images/icons/src',
        src: [
          '**/*.svg'
        ],
        dest: '<%= path.themeDir %>/web/images/icons/minified'
      }
    ]
  }
};

module.exports = _.extend(defaultSvgmin, customSvgmin);
