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
		ts:{
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
		jasmine: {
			options:{

			},
			unit: {
				src: ['src/test/test.bootstrap.js'],
				force:true,
				options: {
					vendor:['src/scripts/requirejs/require.js','src/scripts/systemjs/system.src.js','src/scripts/systemjs/system-polyfills.src.js'],
					summary:true,
					keepRunner:true,
					outfile:'src/test/generatedSpecRunner.html',
					force:true,
					specs: ['src/test/specs/dummySpec.js' ]
				}
			}
		}
// 		,karma: {
// 			unit: {
// 				logLevel:"debug",
// 				frameworks: ['jasmine'],
// 				singleRun: true,
// 				browsers: ['PhantomJS'],
// 				options: {
// 					files: [
// 						'src/scripts/angular/angular.js',
// 						'node_modules/angular-mocks/angular-mocks.js',
// 						'target/app/**/*.js',
// 						'src/test/*tests.js'
// 					]
// 				}
// 			}
//		}
	});

	grunt.registerTask ('default', ['less:default']);
	grunt.registerTask ('compile', ['less:default', 'ts:default']);
	grunt.registerTask ('test', ['jasmine:unit', 'ts:default']);
	//We need to add Jasmine to the test task above
	grunt.registerTask ('deploy', ['less:default']);
	grunt.registerTask ('default', 'Log some stuff.', function () {
		grunt.log.write ('Logging some stuff...').ok ();
	});
	grunt.loadNpmTasks('grunt-ts');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
};