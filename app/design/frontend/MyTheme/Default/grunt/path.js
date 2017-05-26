/* global module */

'use strict';

var defaultPath = require('../../../../../../../dev/tools/grunt/configs/path');
var _ = require('underscore');

var myThemePath = {
  themeDir: './app/design/frontend/MyTheme/Default',
  patternlibPubDir: './app/design/frontend/MyTheme/Default/web/patternlib/mytheme',
  themeStyles: './pub/static/frontend/MyTheme/Default/en_GB/css',
  themeViewPreprocessedStyles: './var/view_preprocessed/css/frontend/MyTheme/Default',
  themeViewPreprocessedSource: './var/view_preprocessed/source/frontend/MyTheme/Default'
};

module.exports = _.extend(defaultPath, myThemePath);
