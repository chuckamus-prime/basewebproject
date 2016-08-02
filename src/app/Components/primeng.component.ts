import {Component} from '@angular/core';
import {InputText} from 'primeng/primeng';
import {Password} from 'primeng/primeng';
import {Dialog} from 'primeng/primeng';
import {Button} from 'primeng/primeng';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import { ROUTER_DIRECTIVES } from '@angular/router'; //needed for prime split button
import {Checkbox} from 'primeng/primeng';
import {RadioButton} from 'primeng/primeng';
import {Dropdown} from 'primeng/primeng';
import {SelectItem} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import {Editor} from 'primeng/primeng';
import {Header} from 'primeng/primeng';

@Component({
	selector: "prime-app",
	templateUrl: "app/templates/prime.html",
	directives: [
		InputText, 
		Password, 
		Dialog, 
		Button, 
		SplitButton, 
		SplitButtonItem, 
		ROUTER_DIRECTIVES, 
		Checkbox,
		RadioButton,
		Dropdown,
		Editor,
		Header
	]
})

export class PrimeComponent {
	//split button
	display: boolean = false;
	
	showDialog() {
		this.display = true;
	}

	msgs: Message[] = [];

	save() {
		this.msgs = [];
		this.msgs.push({severity:'info', summary:'Success', detail:'Data Saved'});
	}

	update() {
		this.msgs = [];
		this.msgs.push({severity:'info', summary:'Success', detail:'Data Updated'});
	}

	delete() {
		this.msgs = [];
		this.msgs.push({severity:'info', summary:'Success', detail:'Data Deleted'});
	}

	//checkboxes
	selectedCities: string[] = [];

	selectedCategories: string[] = ['Technology', 'Sports'];

	checked: boolean = false;

	//radio buttons
	valueOne: string;

	valueTwo: string = 'Option 2';

	//dropdown
	cities: SelectItem[];

	selectedCity: string = 'New York';

	cars: SelectItem[];

	selectedCar: string = 'BMW';

	constructor() {
		this.cities = [];
		this.cities.push({label:'Select City', value:null});
		this.cities.push({label:'New York',  value: 'New York'});
		this.cities.push({label:'Rome',  value: 'Rome'});
		this.cities.push({label:'London',  value: 'London'});
		this.cities.push({label:'Istanbul',  value: 'Istanbul'});
		this.cities.push({label:'Paris',  value: 'Paris'});

		
	}
	
	//editor
	editorText: string;


}