System.register([], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            describe('ExampleApp.FibonacciService', function () {
                var fibonacciService;
                beforeEach(angular.mock.module('ExampleApp'));
                beforeEach(angular.mock.inject(function ($injector) {
                    fibonacciService = $injector.get('FibonacciService');
                }));
                it('Should output correct Fibanacci numbers', function () {
                    expect(fibonacciService.fibonacci(0)).toBe(0);
                    expect(fibonacciService.fibonacci(1)).toBe(1);
                    expect(fibonacciService.fibonacci(10)).toBe(553);
                });
            });
        }
    }
});
//# sourceMappingURL=FibonacciServiceTests.js.map