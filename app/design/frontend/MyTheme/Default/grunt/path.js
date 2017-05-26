/* global module */

'use strict';

var defaultPath = require('../../../../../../../dev/tools/grunt/configs/path');
var _ = require('underscore');

var myThemePath = {
  themeDir: './app/design/frontend/MyTheme/Default',
  patternlibPubDir: './app/design/frontend/MyTheme/Default/web/patternlib/mytheme'
};

module.exports = _.extend(defaultPath, myThemePath);
