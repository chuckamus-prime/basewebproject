System.register(['scripts/angular/angular'], function(exports_1) {
    "use strict";
    var getModule;
    return {
        setters:[
            function (_1) {}],
        execute: function() {
            angular.module("ExampleApp", []);
            exports_1("getModule", getModule = function () {
                return angular.module("ExampleApp");
            });
        }
    }
});
//# sourceMappingURL=app.js.map