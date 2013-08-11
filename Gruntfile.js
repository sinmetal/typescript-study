module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    typescript: {
      base: {
        src: ['typescript/**/*.ts'],
        dest: 'script',
        options: {
          module: 'amd', //or commonjs
            target: 'es5', //or es3
            base_path: 'typescript',
          sourcemap: true,
          fullSourceMapPath: true,
          declaration: true,
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-typescript');

  // Default task(s).
  grunt.registerTask('default', ['typescript']);

};