/**
 * Created by ghart on 7/21/2016.
 */
import {QuoteService} from 'QuoteService';
import {Component} from '@angular/core';

@Component({
	selector: 'my-quote',
	template: `
        <h3>Random Quote</h3>
        <div>{{quote}}</div>
    `
})

export class QuoteComponent {
	quote: string;
​
  constructor (private quoteService: QuoteService){}
​
  getQuote() {
	  this.quote = this.quoteService.getQuote();
  }
}
