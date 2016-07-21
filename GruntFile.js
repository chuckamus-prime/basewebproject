module.exports = function (grunt) {
	"use strict";
	grunt.initConfig ({
		less: {
			default: {
				options: {
					paths: ['src/content/**']
				},
				files:[{src: ['src/content/Site.less'], dest: 'src/content/Site.css'}]
			}
		},
		karma: {
			unit: {
				logLevel:"debug",
				frameworks: ['jasmine'],
				singleRun: true,
				browsers: ['PhantomJS'],
				options: {
					files: [
						'src/scripts/angular/angular.js',
						'node_modules/angular-mocks/angular-mocks.js',
						'target/app/**/*.js',
						'src/test/*tests.js'
					]
				}
			}


		}
	});
	grunt.registerTask ('default', ['less:default']);
	grunt.registerTask ('compile', ['less:default']);
	grunt.registerTask ('test', ['karma:unit']);
	//We need to add Jasmine to the test task above
	grunt.registerTask ('deploy', ['less:default']);
	grunt.registerTask ('default', 'Log some stuff.', function () {
		grunt.log.write ('Logging some stuff...').ok ();
	});
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.loadNpmTasks('grunt-karma');
};