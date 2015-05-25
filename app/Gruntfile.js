/* jshint node: true */
module.exports = function(grunt) {
    var appConfig = {
        appPath : "app"
    }

    grunt.initConfig({
        config = appConfig,

        wiredep: {
            task: {

            // Point to the files that should be updated when you run `grunt wiredep`
            src: [appConfig.appPath + "index.html"],

    options: {
      // See wiredep's configuration documentation for the options
      // you may pass:

      // https://github.com/taptapship/wiredep#configuration
    }
  }
}
    });

    grunt.loadNpmTasks("grunt-wiredep");

    grunt.registerTask("default", []);

};
