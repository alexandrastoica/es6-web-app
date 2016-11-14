import { Page } from '../classes/app-page.js';

export class ProfilePage extends Page {

	constructor() {
		super('Profile');
	}

	getElementString() {
		return `
			<p>On profile page</p>
		`;
	}
}
