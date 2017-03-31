module.exports = function (grunt, data) {
  return {
    patternlib: {
      options: {
        content: 'patternlib/data/data.json',
        transforms: {
          toUpper: function(str) {
            return String(str).toUpperCase();
          },
          toTitleCase: function(str) {
            str = str.toLowerCase().split(' ');
            for (var i = 0; i < str.length; i++) {
              str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
            }
            return str.join(' ');
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
