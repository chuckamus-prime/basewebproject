/**
 * Created by ghart on 7/19/2016.
 */
angular.module('ExampleApp', [])

	.service('FibonacciService', [function() {

		// iterative approach
		this.fibonacci = function(length) {
			var prev1 = 1,
				prev2 = 0,
				current = length;
			for (var n = 2; n <= length; n++) {
				current = prev1 + prev2;
				prev2 = prev1;
				prev1 = current;
			}
			return current;
		};

	}]);
