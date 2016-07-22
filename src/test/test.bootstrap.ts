/// <reference path="../../node_modules/@ryancavanaugh/systemjs/systemjs.d.ts" />

/**
 * Created by zdaily on 3/28/2016.
 */
"use strict";
System.import('app/app').then(testDependencies, console.error.bind(console));

function testDependencies() {
	System.import('dependencies').then(specs, console.error.bind(console));
}

function specs(){
	System.import('src/test/specs/*.js').then(testBootstrap, console.error.bind(console));
}

function testBootstrap() {
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['ExampleApp']);
	});
}