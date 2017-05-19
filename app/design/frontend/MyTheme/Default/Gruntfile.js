/* global module */

module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    jitGrunt: true,
    init: true,
    data: {
      projectRoot: '../../../../../',
      theme: 'mytheme',
      pubDir: 'web/patternlib/<%= theme %>',
    },
  });
};
