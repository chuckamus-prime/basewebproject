System.register(["../app"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var app_1;
    var FibonacciService;
    return {
        setters:[
            function (app_1_1) {
                app_1 = app_1_1;
            }],
        execute: function() {
            FibonacciService = (function () {
                function FibonacciService() {
                }
                FibonacciService.prototype.fibonacci = function (length) {
                    var prev1 = 1;
                    var prev2 = 0;
                    var current = length;
                    for (var n = 2; n <= length; n++) {
                        current = prev1 + prev2;
                        prev2 = prev1;
                        prev1 = current;
                    }
                    return current;
                };
                ;
                return FibonacciService;
            }());
            exports_1("FibonacciService", FibonacciService);
            app_1.getModule().service(FibonacciService);
        }
    }
});
//# sourceMappingURL=fibonacciService.js.map