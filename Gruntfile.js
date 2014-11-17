module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jscs');

  grunt.initConfig({
    jshint: {
      options: {
        node: true
      },
      src: ["teams.js", "players.js", "draft.js"]
    },

    jscs: {
      options: {
        node: true
      },
      src: ["teams.js", "players.js", "draft.js"]
    }
  });

  grunt.registerTask('default', ['jshint', 'jscs']);
};
