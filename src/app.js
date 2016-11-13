import { AppBase } from './classes/app-base.js';
import $ from 'jquery';

export class App extends AppBase {
  constructor(){
    super('Title'); //pass title for appbase
  }
}

export let app = new App(); //export App instance to be able to reuse it within the app
app.show($('body')); //call function show to generate ui and append to body
