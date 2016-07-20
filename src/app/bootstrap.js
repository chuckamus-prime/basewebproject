"use strict";
System.import('app').then(dependencies, console.error.bind(console));
function dependencies() {
    System.import('dependencies').then(bootstrap, console.error.bind(console));
}
function bootstrap() {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['ExampleApp']);
    });
}
//# sourceMappingURL=bootstrap.js.map