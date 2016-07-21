module.exports = function (grunt) {
	"use strict";
	grunt.initConfig ({
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
					"moduleResolution": "node",
					"emitDecoratorMetadata": true,
					"noImplicitAny": false,
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
//				basePath: '.',
				logLevel:"debug",
				frameworks: ['jasmine'],
				singleRun: true,
				browsers: ['PhantomJS'],
				plugins: ['karma-jasmine','karma-phantomjs-launcher'],
				options: {
					files: [
						// paths loaded by Karma
						{pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true},
						{pattern: 'node_modules/reflect-metadata/Reflect.js', included: true, watched: true},
						{pattern: 'node_modules/zone.js/dist/zone.js', included: true, watched: true},
						{pattern: 'node_modules/zone.js/dist/async-test.js', included: true, watched: true},
						{pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true},
						{pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
						{pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false},
						{pattern: 'node_modules/@angular/**/*.js', included: false, watched: false},
						{pattern: 'karma-test-shim.js', included: true, watched: true},

						// Paths loaded via module imports
						{pattern: 'src/app/Components/*Spec.js', included: true, watched: true},

						// Paths to support debugging with source maps in dev tools
						{pattern: 'src/app/Components/*.ts', included: false, watched: true},
						{pattern: 'src/app/Components/*.js.map', included: false, watched: false}
					]
// 					proxies: {
// 						// required for component assests fetched by Angular's compiler
// 						'/src/app': '/base/src/app'
// 					}
// 					files: [
// 						'src/scripts/angular/angular.js',
// 						'node_modules/angular-mocks/angular-mocks.js',
// 						'target/app/**/*.js',
// 						'src/test/*tests.js'
// 					]
				}
			}


		}
	});
	grunt.loadNpmTasks ('grunt-ts');
	grunt.registerTask ('default', ['ts:default', 'less:default']);
	grunt.registerTask ('compile', ['ts:default', 'less:default']);
	//grunt.registerTask ('test', ['karma:unit']);
	//We need to add Jasmine to the test task above
	grunt.registerTask ('deploy', ['ts:default', 'less:default']);
	grunt.registerTask ('default', 'Log some stuff.', function () {
		grunt.log.write ('Logging some stuff...').ok ();
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	//grunt.loadNpmTasks('grunt-karma');
};