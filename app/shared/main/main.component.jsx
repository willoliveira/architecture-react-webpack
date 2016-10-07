import React, {Component} from "react";
import { Link } from "react-router"

class Main extends Component {
	render() {
		return (
			<section className="container-fluid">
				<section className="row">
					<div className="col-md-2">
						<h1><Link to="/" activeClassName="active">Home</Link></h1>
					</div>
					<div className="col-md-10">
						<h1>{this.props.children.props.route.name}</h1>
					</div>
				</section>
				<section className="row">
					<section className="col-md-2">
						<h3>Main</h3>
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
					<section id="content" className="col-md-10">
						{this.props.children}
					</section>
				</section>
				<footer className="row">
					<p>(c) 2010 The Example company</p>
				</footer>
			</section>			
		);
	}
}

export default Main;