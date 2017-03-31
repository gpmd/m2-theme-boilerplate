module.exports = function (grunt, data) {
  return {
    // Alias the default magento grunt tasks so they can be run from this theme directory
    refresh: {
      command: [
        'cd <%= projectRoot %>',
        'grunt refresh'
      ].join('&&')
    },

    clean: {
      command: [
        'cd <%= projectRoot %>',
        'grunt clean'
      ].join('&&')
    },

    less: {
      command: [
        'cd <%= projectRoot %>',
        'grunt less'
      ].join('&&')
    },

    lesstheme: {
      command: [
        'cd <%= projectRoot %>',
        'grunt less:<%= theme %>'
      ].join('&&')
    },

    watch: {
      command: [
        'cd <%= projectRoot %>',
        'grunt watch'
      ].join('&&')
    }
  };
};
