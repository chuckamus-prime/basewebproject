module.exports = function (grunt) {
	"use strict";
	grunt.initConfig ({
		ts : {
			options : {
				compiler : './node_modules/typescript/bin/tsc'
				//note, this relies on the package.json file to specify the typescript version the project is using.
			},
			default : {
				src : ['src/**/*.ts'],
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
	grunt.loadNpmTasks ('grunt-contrib-less');
	//grunt.loadNpmTasks('grunt-karma');

	grunt.registerTask ('default', ['ts:default', 'less:default']);
	grunt.registerTask ('compile', ['ts:default', 'less:default']);
	//grunt.registerTask ('test', ['karma:unit']);
	//We need to add Jasmine to the test task above
	grunt.registerTask ('deploy', ['ts:default', 'less:default']);
	grunt.registerTask ('default', 'Log some stuff.', function () {
		grunt.log.write ('Logging some stuff...').ok ();
	});

};