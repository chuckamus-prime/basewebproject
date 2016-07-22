/// <reference path="../../node_modules/@ryancavanaugh/systemjs/systemjs.d.ts" />

/**
 * Created by zdaily on 3/28/2016.
 */
"use strict";
//setting the window.onload to our function so that basewebproject/.grunt/boot.js calls it before jasmine is ran to
//insure our specs are loaded first.
window.onload = function () {
	specs();
};

System.import('system.config.js').then(importApp, console.error.bind(console));

function importApp(){
	System.import('app/app').then(testDependencies);
}

function testDependencies() {
	System.import('dependencies');
}

 function specs(){
 	System.import('specs/FibonacciServiceTests.js').then(testBootstrap, console.error.bind(console));
}

function testBootstrap() {
	angular.element(document).ready(function() {
		angular.bootstrap(document, ['ExampleApp']);
	});
}