"use strict";
System.import('system.config.js').then(importApp, console.error.bind(console));
function importApp() {
    System.import('app/app').then(testDependencies);
}
function testDependencies() {
    System.import('dependencies').then(specs, console.error.bind(console));
}
function specs() {
    System.import('specs/FibonacciServiceTests').then(testBootstrap).then(window.onload, console.error.bind(console));
}
function testBootstrap() {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['ExampleApp']);
    });
}
//# sourceMappingURL=test.bootstrap.js.map