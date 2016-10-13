import {BaseElement} from './base-element.js';

export class NavBar extends BaseElement {

	constructor() {
		super();

	}

	getElementString() {
		return `
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header
			            mdl-layout--fixed-tabs">
			  <header class="mdl-layout__header">
			    <div class="mdl-layout__header-row">
			      <!-- Title -->
			      <span class="mdl-layout-title">Title</span>
			    </div>
			    <!-- Tabs -->
			    <div class="mdl-layout__tab-bar mdl-js-ripple-effect">
			      <a href="#fixed-tab-1" class="mdl-layout__tab is-active">Tab 1</a>
			      <a href="#fixed-tab-2" class="mdl-layout__tab">Tab 2</a>
			      <a href="#fixed-tab-3" class="mdl-layout__tab">Tab 3</a>
			    </div>
			  </header>
			  <div class="mdl-layout__drawer">
			    <span class="mdl-layout-title">Title</span>
			  </div>
			  <main class="mdl-layout__content">
			    <section class="mdl-layout__tab-panel is-active" id="fixed-tab-1">
			      <div class="page-content"><!-- Your content goes here --></div>
			    </section>
			    <section class="mdl-layout__tab-panel" id="fixed-tab-2">
			      <div class="page-content"><!-- Your content goes here --></div>
			    </section>
			    <section class="mdl-layout__tab-panel" id="fixed-tab-3">
			      <div class="page-content"><!-- Your content goes here --></div>
			    </section>
			  </main>
			</div>
		`;
	}
}