/**
 * Created by ghart on 7/21/2016.
 */
import {QuoteService} from 'QuoteService';
import {QuoteComponent} from 'QuoteComponent';
import {
	expect,
	it,
	describe,
	injectAsync,
	TestComponentBuilder,
	beforeEach
} from '@angular/testing';

import {provide} from '@angular/core';

describe('Testing Quote Component', () => {
	beforeEach(() => {
		provide(QuoteService, {useClass: MockQuoteService})
	});

	it('should get quote', injectAsync(
		[TestComponentBuilder], (tcb) => {
			return tcb.createAsync(QuoteComponent).then((fixture) => {

			});
		}
	));
});
