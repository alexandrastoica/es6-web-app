import { NavBar } from '../ui/navbar.js';

export class AppBase {
	constructor(title){
		console.log('in app base');
		this.title = title;

		this.navBar = new NavBar(this.title); //create new instance of navbar and pass title

		//add some links
		this.navBar.addLinks('Home', '#');
		this.navBar.addLinks('Profile', '#');
	}

	show(element){
		//append navbar instance to the element passed
		this.navBar.appendToElement(element);
	}



}
