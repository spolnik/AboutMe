module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            build: ["build"],
            release: ["dist"]
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'build/main.css': 'sass/main.scss'
                }
            }
        },
        recess: {
            dist: {
                options: {
                    compile: false,
                    noIDs: true
                },
                files: {
                    'src': 'build/main.css'
                }
            }
        },
        jshint: {
            all: ['Gruntfile.js', 'build/main.js']
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
                    './build/main.js'
                ],
                dest: './build/bundle.js'
            }
        },
        uglify: {
            dist: {
                files: {
                    './dist/bundle.min.js': './build/bundle.js'
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    './dist/bundle.min.css': [
                        './bower_components/bootstrap/dist/css/bootstrap.min.css',
                        './bower_components/font-awesome/css/font-awesome.min.css',
                        './bower_components/vegas/dist/vegas.min.css',
                        './build/main.css'
                    ]
                }
            }
        },
        coffee: {
            compile: {
                files: {
                    'build/main.js': 'scripts/main.coffee'
                }
            }
        },
        imagemin: {
            static: {
                options: {
                    optimizationLevel: 4
                },
                files: {
                    'dist/img/profile.jpg': 'img/profile.jpg',
                    'dist/img/1.jpg': 'img/slider/48.jpg',
                    'dist/img/2.jpg': 'img/slider/53.jpg',
                    'dist/img/3.jpg': 'img/slider/54.jpg',
                    'dist/img/4.jpg': 'img/slider/56.jpg'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default',
        ['coffee', 'jshint', 'concat', 'uglify', 'sass', 'recess', 'cssmin']
    );
};
