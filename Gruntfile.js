module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    './bower_components/jquery/dist/jquery.js',
                    './bower_components/bootstrap/dist/js/bootstrap.js',
                    './bower_components/jquery.scrollTo/jquery.scrollTo.js',
                    './bower_components/jQuery-One-Page-Nav/jquery.nav.js',
                    './bower_components/jquery-sticky/jquery.sticky.js',
                    './bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.js',
                    './bower_components/vegas/dist/vegas.js',
                    './bower_components/waypoints/waypoints.js',
                    './js/main.js'
                ],
                dest: './dist/js/bundle.js'
            }
        },
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            dist: {
                files: {
                    './dist/js/bundle.min.js': './dist/js/bundle.js'
                }
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // Task definition
    grunt.registerTask('default', ['concat', 'uglify']);

};
