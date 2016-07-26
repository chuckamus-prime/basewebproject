module.exports = function (grunt) {
	"use strict";
	grunt.initConfig ({
		ts : {
			options : {
				compiler : './node_modules/typescript/bin/tsc'
				//note, this relies on the package.json file to specify the typescript version the project is using.
			},
			default : {
				src : ['./typings/globals/*/*.d.ts','src/**/*.ts'],
				"options" : {
					"module" : "system",
					"target" : "ES5",
					"moduleResolution" : "node",
					"emitDecoratorMetadata" : true,
					"noImplicitAny" : false,
					"removeComments" : true,
					"sourceMap" : true
				}
			}
		},
		typings: {
			install: {
				"globalDependencies": {
				"es6-shim": "github:DefinitelyTyped/DefinitelyTyped/es6-shim/es6-shim.d.ts#6697d6f7dadbf5773cb40ecda35a76027e0783b2"
				},
				"globalDevDependencies":{
					"jasmine": "github:DefinitelyTyped/DefinitelyTyped/jasmine/jasmine.d.ts#26c98c8a9530c44f8c801ccc3b2057e2101187ee"
				}}
		},
		karma:{
			unit: {
				//configFile: 'karma.conf.js'

				basePath: '',

				frameworks: ['jasmine'],

				logLevel: 'debug',

				files: [{src:'src/**/*.js'}],

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
				options : {
					paths : ['src/content/**']
				},
				files : [{src : ['src/content/Site.less'], dest : 'src/content/Site.css'}]
			}
		}
	});
	grunt.loadNpmTasks ('grunt-ts');
	grunt.loadNpmTasks('grunt-typings');
	grunt.loadNpmTasks ('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask ('default', ['ts:default', 'less:default']);
	grunt.registerTask ('compile', ['typings:install','ts:default', 'less:default']);
	grunt.registerTask ('test', ['karma:unit']);
	//We need to add Jasmine to the test task above
	grunt.registerTask ('deploy', ['ts:default', 'less:default']);
	grunt.registerTask ('default', 'Log some stuff.', function () {
		grunt.log.write ('Logging some stuff...').ok ();
	});

};