import React, {Component} from "react";
import { Link } from "react-router"

class Main extends Component {
	render() {
		return (
			<section className="container-fluid">				
				<section id="header-site" className="row">
					<div id="header-logo" className="col-sm-2">
						<h1><Link to="/" activeClassName="active">Home</Link></h1>
					</div>
					<div id="" className="col-sm-10">
						<h1>{this.props.children.props.route.name}</h1>
					</div>
				</section>
				<section id="body-site" className="row">
					<section id="nav-menu" className="col-sm-2">
						<h3 className="title-menu" >Main</h3>
						<nav>
							<div className="list-group">
								<Link to="/dashboard" className="list-group-item" activeClassName="active">
									<span className="badge"></span>
									Dashboard
								</Link>
								<Link to="/messenger" className="list-group-item" activeClassName="active">
									<span className="badge">2</span>
									Messenger
								</Link>
								<Link to="/clients" className="list-group-item" activeClassName="active">
									<span className="badge"></span>
									Clients
								</Link>
								<Link to="/biling" className="list-group-item" activeClassName="active">
									<span className="badge"></span>
									Bilings / Orders
								</Link>
								<Link to="/support" className="list-group-item" activeClassName="active">
									<span className="badge"></span>
									Support
								</Link>
								<Link to="/reports" className="list-group-item" activeClassName="active">
									<span className="badge">3</span>
									Reports
								</Link>
								<Link to="/setup" className="list-group-item" activeClassName="active">
									<span className="badge"></span>
									Setup
								</Link>
							</div>
						</nav>
					</section>
					<section id="content" className="col-sm-10">
						{this.props.children}
					</section>
				</section>
			</section>			
		);
	}
}

export default Main;