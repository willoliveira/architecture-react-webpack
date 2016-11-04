
import React, { Component } from "react";
import { render } from "react-dom";
//routing
import {Router, Route, IndexRoute, browserHistory} from "react-router";
//Components
import Main 		from "./shared/main/main.component.jsx";
import Home 		from "./components/home/home.component.jsx";
import Characters 	from "./components/characters/characters.component.jsx";
import Comics 		from "./components/comics/comics.component.jsx";
import Creators 	from "./components/creators/creators.component.jsx";
import Events 		from "./components/events/events.component.jsx";
import Series 		from "./components/series/series.component.jsx";
import Stories 		from "./components/stories/stories.component.jsx";
//with node server
render(
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route name="Home" path="/" component={Home}/>
			<Route name="Characters" path="/characters" component={Characters}/>
			<Route name="Comics" path="/comics" component={Comics}/>
			<Route name="Creators" path="/creators" component={Creators}/>
			<Route name="Events" path="/events" component={Events}/>
			<Route name="Series" path="/series" component={Series}/>
			<Route name="Stories" path="/stories" component={Stories}/>
		</Route>
	</Router>, 
	document.getElementById('container')
);