import {AppBase} from '../classes/app-base.js';
import $ from 'jquery';

export class BaseElement extends AppBase {
	
	constructor() {
		super();
		this.element = null;
	}
	
	appendToElement(el) {
		this.createElement();
		el.append(this.element);
	}

	createElement() {
		let s = this.getElementString();
		this.element = $(s);
	}

	getElementString() {
		throw 'Please override getElementString() in BaseElement';
	}

}