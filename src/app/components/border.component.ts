import {Component} from '@angular/core';

@Component({
	selector: 'my-fancy-border',
	templateUrl: 'app/templates/border-component.html',
	styleUrls: ['app/templates/border-component.css'],
	inputs: ['title: title']
})
export class BorderComponent {
	title: string;
}
