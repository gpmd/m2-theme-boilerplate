module.exports = {
  default: [],

  patternlib: {
    description: 'Pattern library',
    tasks: [
      'clean:patternlib',
      'bake:patternlib'
    ]
  },

  icons: {
    description: 'Icons',
    tasks: [
      'clean:iconsBefore',
      'svgmin:icons',
      'grunticon:icons',
      'clean:iconsAfter'
    ]
  }
};
