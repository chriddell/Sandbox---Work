module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: ['./css/sass/*.scss', './index.html', './js/app.js'],
        tasks: ['sass:dev', 'autoprefixer:dev'],
        options: {
          liveReload: true
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

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            './css/style.css'
          ]
        },
        options: {
          watchTask: true,
          // Using a vhost-based url
          proxy: "sandbox.dev/drop-in"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['watch']);
};