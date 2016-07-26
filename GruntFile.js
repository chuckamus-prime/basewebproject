module.exports = function (grunt) {
	"use strict";
	grunt.initConfig ({
		ts : {
			options : {
				compiler : './node_modules/typescript/bin/tsc',
				//note, this relies on the package.json file to specify the typescript version the project is using.
				"module" : "system",
				"target" : "ES5",
				"moduleResolution" : "node",
				"emitDecoratorMetadata" : true,
				"noImplicitAny" : false,
				"removeComments" : true,
				"sourceMap" : true
			},
			default : {
				src : ['./typings/globals/*/*.d.ts','src/**/*.ts']
			},
			test : {
				src : ['./typings/globals/*/*.d.ts','src/tests/helpers/typings/*.d.ts','src/**/*.ts']
			}
		},
		typings: {
			install: {
				//This will pull the typings from typings.json.  This allows us to avoid
				// installing typings globally.
				}
		},
		karma:{
			unit: {
				//configFile: 'karma.conf.js'

				basePath: '',

				frameworks: ['jasmine'],

				logLevel: 'debug',

				files: [

					// Polyfills.
					{src:'node_modules/es6-shim/es6-shim.js'},

					{src:'node_modules/reflect-metadata/Reflect.js'},

					// System.js for module loading
					{src:'node_modules/systemjs/dist/system-polyfills.js'},
					{src:'node_modules/systemjs/dist/system.src.js'},

					// Zone.js dependencies
					{src:'node_modules/zone.js/dist/zone.js'},
					{src:'node_modules/zone.js/dist/jasmine-patch.js'},
					{src:'node_modules/zone.js/dist/async-test.js'},
					{src:'node_modules/zone.js/dist/fake-async-test.js'},

					// RxJs.
					{ src: 'node_modules/rxjs/**/*.js', included: false, watched: false },
					{ src: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },


					{src: 'karma-test-shim.js', included: true, watched: true},
					{src: 'src/tests/helpers/matchers.js', included: true, watched: true},

					// paths loaded via module imports
					// Angular itself
					{src: 'node_modules/@angular/**/*.js', included: false, watched: true},
					{src: 'node_modules/@angular/**/*.js.map', included: false, watched: true},

					// Our built application code
					{src: 'src/**/*.js', included: false, watched: true},

					// paths loaded via Angular's component compiler
					// (these paths need to be rewritten, see proxies section)
					{src: 'src/**/*.html', included: false, watched: true},
					{src: 'src/**/*.css', included: false, watched: true},

					// paths to support debugging with source maps in dev tools
					{src: 'src/**/*.ts', included: false, watched: false},
					{src: 'src/**/*.js.map', included: false, watched: false},

					//our spec files
					{src:'src/tests/**/*.test.js'}

					],

				reporters: ['progress'],
				port: 9876,
				colors: true,
				autoWatch: true,
				browsers: ['PhantomJS'],
				singleRun: true
			}
		},
		less : {
			default : {
				files: [
					{
						expand: true,
						cwd: 'src/app/templates',
						src: ['*.less'],
						dest: 'src/app/templates',
						ext: '.css'
					},
				{'src/content/Site.css':'src/content/Site.less'}],
				options : {

				}
			}
		}
	});
	grunt.loadNpmTasks ('grunt-ts');
	grunt.loadNpmTasks('grunt-typings');
	grunt.loadNpmTasks ('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask ('default', ['ts:default', 'less:default']);
	grunt.registerTask ('compile', ['typings:install','ts:default', 'less:default']);
	grunt.registerTask ('test', ['ts:test','karma:unit']);
	//We need to add Jasmine to the test task above
	grunt.registerTask ('deploy', ['ts:default', 'less:default']);
	grunt.registerTask ('default', 'Log some stuff.', function () {
		grunt.log.write ('Logging some stuff...').ok ();
	});

};