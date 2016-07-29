import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
	selector: 'keyspring-app',
	templateUrl: 'app/templates/keyspring.html',
	styleUrls: ['content/keyspring.component.css'],
	directives: [
		MD_SIDENAV_DIRECTIVES,
		MD_LIST_DIRECTIVES,
		MD_CARD_DIRECTIVES,
		MdToolbar,
		MdButton,
		MdInput,
		MdCheckbox,
		MdIcon
	],
	providers: [MdIconRegistry],

})
export class KeyspringAppComponent {
	formShowing: boolean = false;
	menuList: Object[] = [
		{
			name: "My Account",
			description: "Edit my account information",
			icon: "assignment ind"
		}
	];
	applications: Object[] = [
		{name: "BS 3.0", description:"Benefit Services application"},
		{name: "Document Management", description:"Alfresco Document Management"},
		{name: "NPF", description:"National Provider File"},
		{name: "External Portal", description: "Portals for Subscribers, Brokers, Employers, and "},
		{name: "Web Security", description: "Web Security application for external portal"},
		{name: "Renewals", description: "Group renewal application"}
	];
}