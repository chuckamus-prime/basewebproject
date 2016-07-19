module.exports = function (grunt) {
	"use strict";
	grunt.initConfig ({
		//project: grunt.files.readJson('package.json'),
		ts : {
			options: {
				compiler: './node_modules/typescript/bin/tsc'
				//note, this relies on the package.json file to specify the typescript version the project is using.
			},
			default : {
				src: ['src/**/*.ts'],
				"options": {
					"module": "system",
					"target": "ES5",
					"removeComments": true,
					"sourceMap": true
				}
			}
		},
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
						'target/app/**/*.js'
					]
				}
			}


		}
	});
	grunt.loadNpmTasks ('grunt-ts');
	grunt.registerTask ('default', ['ts:default', 'less:default']);
	grunt.registerTask ('compile', ['ts:default', 'less:default']);
	grunt.registerTask ('test', ['karma:unit']);
	//We need to add Jasmine to the test task above
	grunt.registerTask ('deploy', ['ts:default', 'less:default']);
	grunt.registerTask ('default', 'Log some stuff.', function () {
		grunt.log.write ('Logging some stuff...').ok ();
	});
	grunt.loadNpmTasks('grunt-contrib-less');

	grunt.loadNpmTasks('grunt-karma');
};