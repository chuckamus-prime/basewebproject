"use strict";
window.onload = function () {
    specs();
};
System.import('system.config.js').then(importApp, console.error.bind(console));
function importApp() {
    System.import('app/app').then(testDependencies);
}
function testDependencies() {
    System.import('dependencies');
}
function specs() {
    System.import('specs/FibonacciServiceTests.js').then(testBootstrap, console.error.bind(console));
}
function testBootstrap() {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['ExampleApp']);
    });
}
//# sourceMappingURL=test.bootstrap.js.map