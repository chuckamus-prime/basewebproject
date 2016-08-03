import {Component} from '@angular/core';
import {InputText} from 'primeng/primeng';
import {Password} from 'primeng/primeng';
import {Dialog} from 'primeng/primeng';
import {Button} from 'primeng/primeng';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import {Checkbox} from 'primeng/primeng';
import {RadioButton} from 'primeng/primeng';
import {Dropdown} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {Editor} from 'primeng/primeng';
import {Header} from 'primeng/primeng';

@Component({
	selector: "prime-app",
	templateUrl: "app/templates/prime.html",
	directives: [
		Button,
		ROUTER_DIRECTIVES,
		InputText,
		Password,
		Dialog,
		Checkbox,
		RadioButton,
		Dropdown,
		Editor,
		Header
	]
})

export class PrimeComponent {
	
	//region checkboxes
	selectedCities: string[] = [];

	selectedCategories: string[] = ['Technology', 'Sports'];

	checked: boolean = false;
	//endregion checkboxes


	//region radiobutton
	valueOne: string;

	valueTwo: string = 'Option 2';
	//endregion radiobutton

	//region dropdown
	cities: SelectItem[];

	selectedCity: string;

	constructor() {
		this.cities = [];
		this.cities.push({label: 'Select City', value: null});
		this.cities.push({label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}});
		this.cities.push({label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}});
		this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
		this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
		this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});
	}
	//endregion dropdown

	//region dialog
	display: boolean = false;

	showDialog() {
		this.display = true;
	}
	//endregion dialog
	
}