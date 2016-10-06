/***
 * 
 * Seções e estrutura de um documento HTML5
 * https://developer.mozilla.org/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document#Definindo_seções_em_HTML5
 * 
 * Let’s Talk about Semantics
 * http://html5doctor.com/lets-talk-about-semantics/
 * 
 * HTML5 Element flowchart - Sectioning content elements and friends
 * http://html5doctor.com/downloads/h5d-sectioning-flowchart.png
 * 
 * Routing React Apps: The Complete Guide
 * https://scotch.io/tutorials/routing-react-apps-the-complete-guide
 * 
 * React.js Best Practices for 2016
 * https://blog.risingstack.com/react-js-best-practices-for-2016/
 * 
 * React.js Best Practices and Tips by Toptal Developers
 * https://www.toptal.com/react/tips-and-practices
 * 
 * React with webpack - part 1
 * http://jslog.com/2014/10/02/react-with-webpack-part-1/
 * 
 * Building a React.js App: Up and Running with React and Webpack
 * https://egghead.io/lessons/react-building-a-react-js-app-up-and-running-with-react-and-webpack
 * 
 * React with Webpack + Meteor as a backend
 * http://julian.io/react-with-webpack-meteor-as-a-backend/
 */

import React, { Component } from "react";
import { render } from "react-dom";
//routing
import {Router, Route, IndexRoute, browserHistory} from "react-router";
//Components
import Main 		from "./shared/main/main.component.jsx";
import Home 		from "./components/home/home.component.jsx";
import Biling 		from "./components/biling/biling.component.jsx";
import Clients 		from "./components/clients/clients.component.jsx";
import Dashboard 	from "./components/dashboard/dashboard.component.jsx";
import Messenger 	from "./components/messenger/messenger.component.jsx";
import Reports 		from "./components/reports/reports.component.jsx";
import Support 		from "./components/support/support.component.jsx";
import Setup 		from "./components/setup/setup.component.jsx";

//with node server
render(
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path="/" component={Home}/>
			<Route path="/biling" component={Biling}/>
			<Route path="/clients" component={Clients}/>
			<Route path="/dashboard" component={Dashboard}/>
			<Route path="/messenger" component={Messenger}/>
			<Route path="/reports" component={Reports}/>
			<Route path="/support" component={Support}/>
			<Route path="/setup" component={Setup}/>
		</Route>
	</Router>, 
	document.getElementById('container')
);
// <Route path="/cars" component={Car} data={data}/>
// <Route path="/cars/:id" component={CarDetail} data={data}/>
// <Route path="/about" component={About}/>