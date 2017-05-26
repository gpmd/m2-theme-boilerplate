/* global module */

'use strict';

var defaultGrunticon = require('../../../../../../dev/tools/grunt/configs/grunticon');
var _ = require('underscore');

var customGrunticon = {
  themeIcons: {
    files: [
      {
        expand: true,
        cwd: '<%= path.themeDir %>/web/images/icons/minified',
        src: [
          '*.svg',
          '*.png'
        ],
        dest: '<%= path.themeDir %>/web/images/icons/dist'
      }
    ],
    options: {
      cssprefix: '.icon__',
      enhanceSVG: true,
      dynamicColorOnly: true,
      colors: {
        black: '#000',
        white: '#fff',
        grey: '#ccc'
      }
    }
  }
};

module.exports = _.extend(defaultGrunticon, customGrunticon);
