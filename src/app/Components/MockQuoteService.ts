/**
 * Created by ghart on 7/21/2016.
 */
class MockQuoteService {
	public quote: string = 'Test quote';

	getQuote() {
		return this.quote;
	}
}
