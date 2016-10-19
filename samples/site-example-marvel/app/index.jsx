
import React, { Component } from "react";
import { render } from "react-dom";
//routing
import {Router, Route, IndexRoute, browserHistory} from "react-router";
//Components
import Characters 		from "./shared/Characters/Characters.component.jsx";
import Comics 		from "./components/Comics/Comics.component.jsx";
import Creators 		from "./components/Creators/Creators.component.jsx";
import Events 		from "./components/Events/Events.component.jsx";
import Series 	from "./components/Series/Series.component.jsx";
import Messenger 	from "./components/messenger/messenger.component.jsx";
import Reports 		from "./components/reports/reports.component.jsx";
import Support 		from "./components/support/support.component.jsx";
import Setup 		from "./components/setup/setup.component.jsx";

//with node server
render(
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route name="Characters" path="/Characters" component={Characters}/>
			<Route name="Comics" path="/Comics" component={Comics}/>
			<Route name="Creators" path="/Creators" component={Creators}/>
			<Route name="Events" path="/Events" component={Events}/>
			<Route name="Series" path="/Series" component={Series}/>
			<Route name="Stories" path="/reports" component={Reports}/>
		</Route>
	</Router>, 
	document.getElementById('container')
);
// <Route path="/cars" component={Car} data={data}/>
// <Route path="/cars/:id" component={CarDetail} data={data}/>
// <Route path="/about" component={About}/>