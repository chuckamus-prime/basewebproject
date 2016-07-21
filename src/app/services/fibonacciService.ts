"use strict";
import {getModule} from "../app";

export class FibonacciService{

	public fibonacci(length):number  {
		var prev1:number = 1;
		var prev2:number = 0;
		var current:number = length;
		for (var n:number = 2; n <= length; n++) {
			current = prev1 + prev2;
			prev2 = prev1;
			prev1 = current;
		}
		return current;
	};

}
getModule().service(FibonacciService);