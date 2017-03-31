module.exports = function (grunt, data) {
  return {
    patternlib: {
      options: {
        content: 'patternlib/data/data.json',
        transforms: {
          toUpper: function(str) {
            return String(str).toUpperCase();
          },
          deHyphenate: function(str) {
            return String(str).replace(/-/g, ' ');
          }
        }
      },
      files: [
        {
          expand: true,
          cwd: 'patternlib/',
          src: ['*.html'],
          dest: '<%= pubDir %>',
          ext: '.html'
        }, {
          '<%= pubDir %>/.htaccess': 'patternlib/.htaccess'
        }
      ]
    }
  };
};
