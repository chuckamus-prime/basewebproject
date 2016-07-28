import { Component } from '@angular/core';
import {  TD_STEPS_DIRECTIVES, IStepChangeEvent, StepState } from '@covalent/core'

@Component({
	selector: 'covalent-app',
	templateUrl: 'app/templates/covalent.html',
	directives: [
		TD_STEPS_DIRECTIVES
	],
})

export class CovalentAppComponent {
	active: boolean = false;
	disabled: boolean = false;
	state: StepState = StepState.Required; // or state: string = "required";
	activeEvent(): void {
		//do something
	};
	deactiveEvent(): void {
		//do something
	};
}