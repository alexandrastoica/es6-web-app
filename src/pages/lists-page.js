import { Page } from '../classes/app-page.js';

export class ListsPage extends Page {
	constructor() {
		super('Lists');
	}

	getElementString() {
		return `
			<p>On lists page</p>
		`;
	}
}
