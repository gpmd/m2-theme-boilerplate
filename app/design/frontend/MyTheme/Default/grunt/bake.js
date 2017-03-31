module.exports = function (grunt, data) {
  return {
    patternlib: {
      options: {
        content: 'patternlib/data/data.json'
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
