module.exports = {
  icons: {
    files: [
      {
        expand: true,
        cwd: 'web/images/icons/minified',
        src: [
          '*.svg',
          '*.png'
        ],
        dest: 'web/images/icons/dist'
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
