import {Component} from '@angular/core';
import {InputText} from 'primeng/primeng';
import {Password} from 'primeng/primeng';
import {Dialog} from 'primeng/primeng';
import {Button} from 'primeng/primeng';
import {SplitButton} from 'primeng/primeng';
import {SplitButtonItem} from 'primeng/primeng';
import { ROUTER_DIRECTIVES } from '@angular/router'; //needed for prime split button
import { Message } from '../models/Message'

@Component({
	selector: "prime-app",
	templateUrl: "app/templates/prime.html",
	directives: [InputText, Password, Dialog, Button, SplitButton, SplitButtonItem, ROUTER_DIRECTIVES]
})

export class PrimeComponent {
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

	
}