/* global module */

/**
 * Usage example (run from project root):
 * grunt --gruntfile=Gruntfile.m2base.js icons
 */

'use strict';

var defaultGruntfile = require('./Gruntfile');
var _ = require('underscore');

var m2baseGruntfile = {};

// Custom theme task configs
m2baseGruntfile.path = require('./vendor/gpmd/theme-frontend-m2base/grunt/path');
m2baseGruntfile.bake = require('./vendor/gpmd/theme-frontend-m2base/grunt/bake');
m2baseGruntfile.clean = require('./vendor/gpmd/theme-frontend-m2base/grunt/clean');
m2baseGruntfile.grunticon = require('./vendor/gpmd/theme-frontend-m2base/grunt/grunticon');
m2baseGruntfile.modernizr = require('./vendor/gpmd/theme-frontend-m2base/grunt/modernizr');
m2baseGruntfile.svgmin = require('./vendor/gpmd/theme-frontend-m2base/grunt/svgmin');

// Extend default Gruntfile with custom theme Gruntfile
module.exports = _.extend(defaultGruntfile, m2baseGruntfile);
