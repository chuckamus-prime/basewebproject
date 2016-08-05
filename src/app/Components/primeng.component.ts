import {Component, OnInit} from '@angular/core';
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
import {DataTable} from 'primeng/primeng';
import {Column} from 'primeng/primeng';
import {Car} from '../models/Car'
import {CarService} from '../services/CarService'
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';
import {Message} from 'primeng/primeng';
import {Listbox} from 'primeng/primeng';
import {ProgressBar} from 'primeng/primeng';


@Component({
	selector: "prime-app",
	templateUrl: "app/templates/prime.html",
	providers: [CarService],
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
		Header,
		DataTable,
		Column,
		TabView,
		TabPanel,
		Listbox,
		ProgressBar
	]
})

export class PrimeComponent {
	//used to display messages in the toast component
	msgs: Message[];

	//value is used to increment progress bar
	value: number;

	//arrays and boolean used for checkbox components
	selectedCities: string[] = [];
	selectedCategories: string[] = ['Technology', 'Sports'];
	checked: boolean = false;

	//strings used for radio button component
	valueOne: string;
	valueTwo: string = 'Option 2';


	//array and string used for dropdown
	cities: SelectItem[];
	selectedCity: string;

	//display flag used for dialog
	display: boolean = false;
	showDialog() {
		this.display = true;
	}

	//region datatable
	cars: Car[];

	cols: any[];

	constructor(private carService: CarService) { }

	ngOnInit() {
		
		let interval = setInterval(() => {
			this.value = this.value + Math.floor(Math.random() * 10) + 1;
			if(this.value >= 100) {
				this.value = 100;
				this.msgs = [{severity: 'info', summary: 'Success', detail: 'Process Completed'}];
				clearInterval(interval);
			}
		}, 2000);
		
		
		this.carService.getCarsSmall().then(cars => this.cars = cars);

		this.cols = [
			{field: 'model', header: 'Model'},
			{field: 'make', header: 'Make'},
			{field: 'color', header: 'Color'}
			
		];

		this.cities = [];
		this.cities.push({label: 'Select City', value: null});
		this.cities.push({label: 'New York', value: {id: 1, name: 'New York', code: 'NY'}});
		this.cities.push({label: 'Rome', value: {id: 2, name: 'Rome', code: 'RM'}});
		this.cities.push({label: 'London', value: {id: 3, name: 'London', code: 'LDN'}});
		this.cities.push({label: 'Istanbul', value: {id: 4, name: 'Istanbul', code: 'IST'}});
		this.cities.push({label: 'Paris', value: {id: 5, name: 'Paris', code: 'PRS'}});


	}
	
	//region tabs
	
	onTabChange(event) {
		this.msgs = [];
		this.msgs.push({severity:'info', summary:'Tab Expanded', detail: 'Index: ' + event.index});
	}
	//endregion tabs
	

	
}