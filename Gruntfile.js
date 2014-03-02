module.exports = function ( grunt ) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			dist: {
				files: {
					'wp8-viewport-fix.min.js': ['wp8-viewport-fix.js']
				}
			}
		}

	});

	grunt.registerTask('default', ['uglify:dist']);

	grunt.loadNpmTasks('grunt-contrib-uglify');

};
