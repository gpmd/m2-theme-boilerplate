/* global module */

/**
 * Usage example (run from project root):
 * grunt --gruntfile=Gruntfile.mytheme.js icons
 */

'use strict';

var defaultGruntfile = require('./Gruntfile');
var _ = require('underscore');

var myThemeGruntfile = {};

// Custom theme task configs
myThemeGruntfile.path = require('./app/design/frontend/MyTheme/Default/grunt/path');
myThemeGruntfile.bake = require('./app/design/frontend/MyTheme/Default/grunt/bake');
myThemeGruntfile.clean = require('./app/design/frontend/MyTheme/Default/grunt/clean');
myThemeGruntfile.grunticon = require('./app/design/frontend/MyTheme/Default/grunt/grunticon');
myThemeGruntfile.svgmin = require('./app/design/frontend/MyTheme/Default/grunt/svgmin');

// Extend default Gruntfile with custom theme Gruntfile
module.exports = _.extend(defaultGruntfile, myThemeGruntfile);
