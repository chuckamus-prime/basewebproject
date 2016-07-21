/**
 * Created by ghart on 7/19/2016.
 */
var module = require('../scripts/angular-mocks/angular-mocks.js');

describe('ExampleApp.FibonacciService', function() {

	var FibonacciService;

	beforeEach(module('ExampleApp'));
	beforeEach(inject(function($injector) {
		FibonacciService = $injector.get('FibonacciService');
	}));

	it('Should output correct Fibanacci numbers', function() {
		expect(FibonacciService.fibonacci(0)).toBe(0);
		expect(FibonacciService.fibonacci(1)).toBe(1);
		expect(FibonacciService.fibonacci(10)).toBe(55);
	});

});
