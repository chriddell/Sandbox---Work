module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['./sass/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:dev']
      }
    },

    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
          sourceMap: true
        },
        files: {
          './style.css': './sass/style.scss'
        }
      }
    },

    autoprefixer: {
      dev: {
        options: {
          map: true, 
          browsers: ['ie >= 8', '> 2%']
        }, 
        src: './style.css',
        dest: './style.css'
      }
    }, 

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            './style.css'
          ]
        },
        options: {
          watchTask: true,
          // Using a vhost-based url
          proxy: "sandbox.dev/yourour"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['browserSync', 'watch']);
};