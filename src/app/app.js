System.register(['scripts/angular/angular'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
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