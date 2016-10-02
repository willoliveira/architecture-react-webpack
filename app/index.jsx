//TOOD: React-router urls don't work when refreshing or writting manually
//http://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writting-manually
/**
 * Links
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
//
import React, { Component } from "react";
import { render } from "react-dom";
//routing
import {Router, Route, IndexRoute, browserHistory} from "react-router";
//components
import Main from "./shared/main/main.component.jsx";
import Home from './components/home/home.component.jsx';
import About from "./components/about/about.component.jsx";
import Car from "./components/car/list/car.component.jsx";
import CarDetail from "./components/car/detail/car-detail.component.jsx";

const data = [
    {
        id: 1,
        name: 'Honda Accord Crosstour',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 2,
        name: 'Mercedes-Benz AMG GT Coupe',
        year: '2016',
        model: 'AMG',
        make: 'Mercedes Benz',
        media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
        price: '$138,157'

    },
    {
        id: 3,
        name: 'BMW X6 SUV',
        year: '2016',
        model: 'X6',
        make: 'BMW',
        media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
        price: '$68,999'
    },
    {
        id: 4,
        name: 'Ford Edge SUV',
        year: '2016',
        model: 'Edge',
        make: 'Ford',
        media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
        price: '$36,275'
    },
    {
        id: 5,
        name: 'Dodge Viper Coupe',
        year: '2017',
        model: 'Viper',
        make: 'Dodge',
        media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
        price: '$123,890'
    }
];


//with node server
render(
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path="/" component={Home}/>
			<Route path="/cars" component={Car} data={data}/>
			<Route path="/cars/:id" component={CarDetail} data={data}/>
			<Route path="/about" component={About}/>
		</Route>
	</Router>, 
	document.getElementById('container')
);



//without node server
// render(
// 	<Router>
// 		<Route component={Main}>
// 			<Route path="/" component={Home}/>
// 			<Route path="/cars" component={Car}/>
// 			<Route path="/about" component={About}/>
// 		</Route>
//     </Router>, 
// 	document.getElementById('container')
// );