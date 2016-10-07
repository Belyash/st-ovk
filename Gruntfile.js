module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        pug: {
            pretty: {
                files: [{
                    cwd: "src/tmpl",
                    dest: "dist",
                    expand: true,
                    ext: ".html",
                    src: ["**/*.jade", '!**/inc/**', '!**/layout/**']
                }],
                options: {
                    data: function(dest, src) {
                        var pathToJSON = "src/data/" + dest.match(/\w+(?:\.)/) + "json",
                            data;

                        console.log('Read JSON:', pathToJSON);
                        data = grunt.file.readJSON(pathToJSON);

                        return data;
                    },
                    client: false,
                    pretty: true
                }
            }
        },
        compass: {
            dist: {
                options: {
                    importPath: ['node_modules/bootstrap-sass/assets/stylesheets/'],
                    sassDir: ['src/scss'],
                    cssDir: 'dist/css'
                }
            }
        },
        concat: {
            options: {
                stripBanners: true
            },
            dist: {
                src: [
                    'node_modules/jquery/dist/jquery.min.js',
                    'node_modules/jcarousel/dist/jquery.jcarousel.min.js',
                    'src/js/*.js'
                ],
                dest: 'dist/js/build.js'
            }
        },
        connect: {
            all: {
                options: {
                    base: 'dist',
                    port: 8080,
                    // hostname: "0.0.0.0",
                    // Prevents Grunt to close just after the task (starting the server) completes
                    // This will be removed later as `watch` will take care of that
                    keepalive: true
                }
            }
        },
        // grunt-open will open your browser at the project's URL
        open: {
            all: {
                // Gets the port from the connect configuration
                path: 'http://localhost:<%= connect.all.options.port%>'
            }
        },
        // uglify: {
        //   options: {
        //     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //   },
        //   build: {
        //     src: 'src/<%= pkg.name %>.js',
        //     dest: 'build/<%= pkg.name %>.min.js'
        //   }
        // },
        watch: {
            pug: {
                files: ['src/tmpl/**/*.jade', 'src/data/*.json'],
                tasks: ['pug']
            },
            compass: {
                files: ['src/scss/**/*.scss'],
                tasks: ['compass']
            },
            concat: {
                files: ['src/js/*.js'],
                tasks: ['concat']
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-pug');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // Default task(s).
    grunt.registerTask('default', ['pug', 'compass', 'connect', 'watch']);

};