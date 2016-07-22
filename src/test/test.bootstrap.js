"use strict";
System.import('app/app').then(testDependencies, console.error.bind(console));
function testDependencies() {
    System.import('dependencies').then(testBootstrap, console.error.bind(console));
}
function testBootstrap() {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['ExampleApp']);
    });
}
//# sourceMappingURL=test.bootstrap.js.map