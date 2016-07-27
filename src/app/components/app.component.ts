import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_PROGRESS_CIRCLE_DIRECTIVES} from '@angular2-material/progress-circle';
import {MD_PROGRESS_BAR_DIRECTIVES} from '@angular2-material/progress-bar';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {MD_CHECKBOX_DIRECTIVES} from '@angular2-material/checkbox';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';
import {MD_RADIO_DIRECTIVES} from '@angular2-material/radio';
import {MD_ICON_DIRECTIVES} from '@angular2-material/icon';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MdUniqueSelectionDispatcher} from '@angular2-material/core/coordination/unique-selection-dispatcher';



@Component({
	selector: 'my-app',
	templateUrl: 'app/templates/styleShowcase.html',
	providers: [MdIconRegistry, MdUniqueSelectionDispatcher],
	directives: [
		NgFor,
		MD_CARD_DIRECTIVES,
		MD_BUTTON_DIRECTIVES,
		MD_SIDENAV_DIRECTIVES,
		MD_TOOLBAR_DIRECTIVES,
		MD_LIST_DIRECTIVES,
		MD_PROGRESS_BAR_DIRECTIVES,
		MD_PROGRESS_CIRCLE_DIRECTIVES,
		MD_TABS_DIRECTIVES,
		MD_CHECKBOX_DIRECTIVES,
		MD_INPUT_DIRECTIVES,
		MD_RADIO_DIRECTIVES,
		MD_ICON_DIRECTIVES,
		MdIcon
	]
})
export class AppComponent {
	people: any[] = [
		{name: 'Suresh', position: 'Delivery Manager'},
		{name: 'Erika', position: 'Development Lead'},
		{name: 'Chuck', position: 'Solutions Architect'},
		{name: 'Greg', position: 'Sr. Programmer Analyst'},
	];

	progress: number = 0;
	constructor() {
		// Update the value for the progress-bar on an interval.
		setInterval(() => {
			this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
		}, 200);
	}
}