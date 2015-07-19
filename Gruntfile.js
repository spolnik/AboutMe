module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        recess: {
            dist: {
                options: {
                    compile: false,
                    noIDs: true
                },
                files: {
                    'src': 'css/main.css'
                }
            }
        },
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
                dest: './js/bundle.js'
            }
        },
        concat_css: {
            all: {
                src: [
                    './bower_components/bootstrap/dist/css/bootstrap.min.css',
                    './bower_components/font-awesome/css/font-awesome.min.css',
                    './bower_components/vegas/dist/vegas.min.css',
                    './css/main.css'
                ],
                dest: './css/bundle.css'
            }
        },
        uglify: {
            dist: {
                files: {
                    './js/bundle.min.js': './js/bundle.js'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    './css/bundle.min.css': './css/bundle.css'
                }
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');


    // Task definition
    grunt.registerTask('default', ['recess', 'concat', 'concat_css', 'uglify', 'cssmin']);

};
