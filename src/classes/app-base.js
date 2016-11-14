import { NavBar } from '../ui/navbar.js';

export class AppBase {
	constructor(title){
		this.title = title;
		document.title = title;

		this.navBar = new NavBar(this.title); //create new instance of navbar and pass title
		this.routeMap = {};
		this.defaultPage = null;
	}

	//function to add routes
	addRoute(id, pageObj, defaultPage = false){
		this.navBar.addLinks(id, ''); //add the link to the navBar
		this.routeMap[id] = pageObj; //store it in a map object

		if(defaultPage){
			this.defaultPage = id;
		}
	}

	activateRoute(route){
		//find the class for page content
		let content = this.navBar.element.find('.page-content');
		content.empty(); //empty what's inside

		this.routeMap[route].appendToElement(content); //append new content
	}

	show(element){
		//append navbar instance to the element passed
		this.navBar.appendToElement(element);

		//find navigation link and rewrite the behavour
		this.navBar.element.find('.mdl-navigation__link').click((e) => {
			e.preventDefault(); //prevents the page to refresh
			let route = e.target.innerHTML; //get the href property
			this.activateRoute(route.trim()); //pass the route to change content

			//reset page title
			this.title = route;
			document.title = route;
		});

		//if there is a default page, load it on start
		if(this.defaultPage){
			this.activateRoute(this.defaultPage);
		}
	}
}
