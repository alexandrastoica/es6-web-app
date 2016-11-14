import { Page } from '../classes/app-page.js';

export class HomePage extends Page {

	constructor() {
		super('Home');
	}

	getElementString() {
		return `
			<p>Hello world</p>
		`;
	}
}
