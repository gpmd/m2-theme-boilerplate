var themePath = '/static/frontend/MyTheme/Default/en_GB/';
var iconsDataPath = 'images/icons/dist/';

// grunticon([
//   themePath + iconsDataPath + "icons.data.svg.css",
//   themePath + iconsDataPath + "icons.data.png.css",
//   themePath + iconsDataPath + "icons.fallback.css"
// ], grunticon.svgLoadedCallback);

grunticon([
  themePath + iconsDataPath + 'icons.data.svg.css',
  themePath + iconsDataPath + 'icons.data.png.css',
  themePath + iconsDataPath + 'icons.fallback.css',
], function() {
  grunticon.ready(function() {
    grunticon.embedIcons(grunticon.getIcons(grunticon.getCSS(grunticon.href)));

    // Add loaded class to html tag
    document.querySelector('html').className += ' grunticon-loaded';
  });
});
