System.register(['@angular/core/testing', '@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, core_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            testing_1.describe('default test injector', function () {
                testing_1.it('should provide default id', testing_1.inject([core_1.APP_ID], function (id) {
                    testing_1.expect(id).toBe('a');
                }));
            });
        }
    }
});
//# sourceMappingURL=using-injector.test.js.map