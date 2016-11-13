import {AppBase} from '../classes/app-base.js';
import $ from 'jquery';

export class BaseElement {
	constructor() {
		this.element = null;  // jQuery element
	}

	appendToElement(el) {
		this.createElement();
		el.append(this.element);
		this.enableJS();
	}

	createElement() {
		let s = this.getElementString();
		this.element = $(s);
	}

	getElementString() { // override function in element
		throw 'Please override getElementString() in BaseElement';
	}

	enableJS() {
		componentHandler.upgradeElement(this.element[0]); // mdl's function for dynamic webapps
	}
}
