import $ from 'jquery';
import {Button} from './ui/button.js';
import {NavBar} from './ui/navbar.js';


let n = new NavBar();
n.appendToElement($('body'));