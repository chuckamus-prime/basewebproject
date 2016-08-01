module.exports = function (grunt) {
	"use strict";
	grunt.initConfig ({
		copy: {
			main: {
				nonull: true,

				files: [
					//angular needs
// 					{expand: true, src: ['./node_modules/@angular/common/bundles/*.umd.js'], dest: 'src/scripts/@angular/common/',flatten: true, filter: 'isFile'},
// 					{expand: true, src: ['./node_modules/@angular/compiler/bundles/*.umd.js'], dest: 'src/scripts/@angular/compiler/',flatten: true, filter: 'isFile'},
// 					{expand: true, src: ['./node_modules/@angular/core/bundles/*.umd.js'], dest: 'src/scripts/@angular/core/',flatten: true, filter: 'isFile'},
// 					{expand: true, src: ['./node_modules/@angular/forms/bundles/*.umd.js'], dest: 'src/scripts/@angular/forms/',flatten: true, filter: 'isFile'},
// 					{expand: true, src: ['./node_modules/@angular/http/bundles/*.umd.js'], dest: 'src/scripts/@angular/http/',flatten: true, filter: 'isFile'},
// 					{expand: true, src: ['./node_modules/@angular/platform-browser/bundles/*.umd.js'], dest: 'src/scripts/@angular/platform-browser/',flatten: true, filter: 'isFile'},
// 					{expand: true, src: ['./node_modules/@angular/platform-browser-dynamic/bundles/*.umd.js'], dest: 'src/scripts/@angular/platform-browser-dynamic/',flatten: true, filter: 'isFile'},

					//!Tests were complaining when only bundles were copied so all of @angular was copied over.
					//@angular
					{expand: true, cwd:'./node_modules', src: '@angular/**/*.js', dest: 'src/scripts/'},

					//@angular2 Material
					{expand: true, cwd:'./node_modules', src: ['@angular2-material/**','!@angular2-material/**/*.ts'], dest: 'src/scripts/'},

					//es6-shim
					{expand: true, cwd:'./node_modules', src: ['es6-shim/es6-shim.js'], dest: 'src/scripts/es6-shim/',flatten: true, filter: 'isFile'},

					//Reflect Metadata
					{expand: true, cwd:'./node_modules', src: ['reflect-metadata/Reflect.js'], dest: 'src/scripts/reflect-metadata/',flatten: true, filter: 'isFile'},

					//rxjs
					{expand: true, cwd:'./node_modules', src:'rxjs/**', dest: 'src/scripts/'},

					//zone.js
					{expand: true, cwd:'./node_modules', src:'zone.js/dist/**', dest: 'src/scripts/'},

					//systemjs
					{expand: true, cwd:'./node_modules', src:'systemjs/dist/**', dest: 'src/scripts/'}

				]
			}
		},
		ts : {
			options : {
				compiler : './node_modules/typescript/bin/tsc',
				//note, this relies on the package.json file to specify the typescript version the project is using.
				"module" : "system",
				"target" : "ES5",
				"moduleResolution" : "node",
				"emitDecoratorMetadata" : true,
				"experimentalDecorators": true,
				"noImplicitAny" : false,
				"removeComments" : true,
				"sourceMap" : true
			},
			default : {
				src : ['./typings/globals/*/*.d.ts','src/app/**/*.ts']
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
				basePath: '',

				frameworks: ['jasmine'],

				logLevel: 'info',

				files: [

					// Polyfills.
					{src:'src/scripts/es6-shim/es6-shim.js'},

					//Angular 2 depends on Reflect-Metadata
					{src:'src/scripts/reflect-metadata/Reflect.js'},

					// System.js for module loading
					{src:'src/scripts/systemjs/dist/system-polyfills.js'},
					{src:'src/scripts/systemjs/dist/system.src.js'},

					//Do not load this system.config.js.  The config for sysetmjs
					//is included in the karma-test-shim.js
					//{src:'src/system.config.js', included: false, watched: true},

					// Zone.js dependencies.  Angular2 also depends on Zone
					{src:'src/scripts/zone.js/dist/zone.js'},
					{src:'src/scripts/zone.js/dist/jasmine-patch.js'},
					{src:'src/scripts/zone.js/dist/async-test.js'},
					{src:'src/scripts/zone.js/dist/fake-async-test.js'},

					// RxJs.  Angular 2 depends on RxJs
					{ src:'src/scripts/rxjs/**/*.js', included: false, watched: false },
					{ src:'src/scripts/rxjs/**/*.js.map', included: false, watched: false },

					//The Karma test shim overrides the function which starts karma in the
					//generated test runner html.  The override prevents karma from starting
					//until all dependencies are loaded through systemjs.  Once they have all
					//been loaded, the test shim will start Karma.
					{src: 'karma-test-shim.js', included: true, watched: true},
					{src: 'src/tests/helpers/matchers.js', included: true, watched: true},

					// paths loaded via module imports.  (When included: true, the file will be loaded
					// to the browser as a script tag.  When included: false, the file will be loaded as
					// a module through systemjs.
					// Angular itself
					{src: 'src/scripts/@angular/**/*.js', included: false, watched: true},
					{src: 'src/scripts/@angular/**/*.js.map', included: false, watched: true},

					// Our built application code
					{src: 'src/app/**/*.js', included: false, watched: true},
					{src: 'src/tests/**/*.js', included: false, watched: true},

					// paths loaded via Angular's component compiler
					// (these paths need to be rewritten, see proxies section)
					{src: 'src/**/*.html', included: false, watched: true},
					{src: 'src/**/*.css', included: false, watched: true},

					// paths to support debugging with source maps in dev tools
					{src: 'src/**/*.ts', included: false, watched: false},
					{src: 'src/**/*.js.map', included: false, watched: false}
					],

				// proxied base paths
				proxies: {
					// required for component assests fetched by Angular's compiler
					"/app/": "/base/src/app/"
				},

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
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask ('default', ['ts:default', 'less:default']);
	grunt.registerTask ('compile', ['copy:main', 'less:default', 'typings:install','ts:default']);
	grunt.registerTask ('test', ['ts:test','karma:unit']);
	//We need to add Jasmine to the test task above
	grunt.registerTask ('deploy', ['ts:default', 'less:default']);
	grunt.registerTask ('default', 'Log some stuff.', function () {
		grunt.log.write ('Logging some stuff...').ok ();
	});

};