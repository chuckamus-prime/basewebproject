/**
 * Created by csailors on 7/22/2016.
 */
'use strict';
import 'scripts/angular/angular';
import 'node_modules/@ryancavanaugh/angularjs/angular-mocks";
import {FibonacciService} from 'app/services/FibonacciService';
import 'node_modules/@ryancavanaugh/jasmine/jasmine';

describe('ExampleApp.FibonacciService', function() {

	var fibonacciService:FibonacciService;

	beforeEach(angular.mock.module('ExampleApp'));
	beforeEach(angular.mock.inject(function($injector) {
		fibonacciService = $injector.get('FibonacciService');
	}));

	it('Should output correct Fibanacci numbers', function() {
		expect(fibonacciService.fibonacci(0)).toBe(0);
		expect(fibonacciService.fibonacci(1)).toBe(1);
		expect(fibonacciService.fibonacci(10)).toBe(55);
	});
});



