import { BaseElement } from '../ui/base-element.js';

export class Page extends BaseElement {
  constructor(title){
    super();
    //set page title
    this.titlePage = title;
  }
}
