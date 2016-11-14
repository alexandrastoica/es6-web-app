import { AppBase } from './classes/app-base.js';
import { HomePage } from './pages/home-page.js';
import { ProfilePage } from './pages/profile-page.js';
import { ListsPage } from './pages/lists-page.js';
import $ from 'jquery';

export class App extends AppBase {
  constructor(){
    super('Title'); //pass title for appbase

    //add routing
    this.addRoute('Home', new HomePage(), true); //true for default page
    this.addRoute('Profile', new ProfilePage());
    this.addRoute('Lists', new ListsPage());
  }
}

export let app = new App(); //export App instance to be able to reuse it within the app
app.show($('body')); //call function show to generate ui and append to body
