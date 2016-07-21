"use strict";

import 'scripts/angular/angular';

angular.module("ExampleApp", []);

export var getModule:() => ng.IModule = () => {
	return angular.module("ExampleApp");
}; 