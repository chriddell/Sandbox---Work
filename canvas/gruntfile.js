module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['./css/sass/*.scss', 'js/app.js'],
        tasks: ['sass:dev', 'autoprefixer:dev', 'uglify'],
        options: {
          livereload: {
            host: 'http://sandbox.dev/canvas/',
          }
        },
      },
    },

    sass: {
      dev: {
        options: {
          outputStyle: 'nested',
          sourceMap: true
        },
        files: {
          './css/style.css': './css/sass/style.scss'
        }
      }
    },

    autoprefixer: {
      dev: {
        options: {
          map: true, 
          browsers: ['ie >= 8', '> 2%']
        }, 
        src: './css/style.css',
        dest: './css/style.css'
      }
    },

    uglify: {
      my_target: {
        files: {
          'js/app.min.js': ['js/app.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);
};