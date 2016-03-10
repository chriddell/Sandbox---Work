module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['./css/sass/*.scss'],
        tasks: ['sass:dev', 'autoprefixer:dev'],
        options: {
          livereload: true,
        }
      }, 
      js: {
        files: ['./js/app.js'],
        tasks: ['uglify'],
        options: {
          livereload: true,
        }
      }
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
      app: {
        files: {
          './js/app.min.js': ['./js/app.js']
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