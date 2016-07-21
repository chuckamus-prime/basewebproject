"use strict";
System.import('src/app/app').then(dependencies, console.error.bind(console));
function dependencies() {
    System.import('src/app/dependencies').then(bootstrap, console.error.bind(console));
}
function bootstrap() {
    angular.element(document).ready(function () {
        angular.bootstrap(document, ['ExampleApp']);
    });
}
//# sourceMappingURL=bootstrap.js.map