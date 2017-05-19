/* global module */

module.exports = {
  icons: {
    files: [
      {
        expand: true,
        flatten: false,
        cwd: 'web/images/icons/src',
        src: [
          '**/*.svg',
        ],
        dest: 'web/images/icons/minified',
      },
    ],
  },
};
