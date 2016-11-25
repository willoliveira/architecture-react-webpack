import React, {Component} from "react";
import SearchBar from "../../shared/tableFilter/searchBar.component.jsx";
import ContentTable from "../../shared/tableFilter/contentTable.component.jsx";

class Clients extends Component {

	constructor() {
		super();
		//dados
		var data = [
			{ lastName: "Oliveira", firstName: "Willian", email: "willian.goliveira@outlook.com", openTicket: "13", clientId: "312234", services: "3", status: "active" },
			{ lastName: "Lepiane", firstName: "Marina", email: "Marina.Lepiane@outlook.com", openTicket: "3", clientId: "123123", services: "2", status: "active" },
			{ lastName: "Evangelista", firstName: "Lucas", email: "Lucas.Evangelista@outlook.com", openTicket: "4", clientId: "43545", services: "1", status: "active" },
			{ lastName: "Lepiane", firstName: "Filipe", email: "Filipe.Correia@outlook.com", openTicket: "5", clientId: "23234", services: "3", status: "active" },
			{ lastName: "Silva", firstName: "Douglas", email: "Douglas.Silva@outlook.com", openTicket: "0", clientId: "0678657", services: "5", status: "active" },
			{ lastName: "Edamatsu", firstName: "Rodrigo", email: "Rodrigo.Edamatsu@outlook.com", openTicket: "1", clientId: "45678", services: "1", status: "active" },
			{ lastName: "Augusto", firstName: "Guilherme", email: "Guilherme.Augusto@outlook.com", openTicket: "3", clientId: "695767", services: "2", status: "active" }
		];
		//
		this.state = {
			filterText: "",
			data: data
		}
		this.setFilterText = this.setFilterText.bind(this);
	}

	setFilterText(text) {
		this.setState({
			filterText: text
		})
	}
	
	render() {
		return (
			<div id="home-content" className="col-sm-12">
				<div className="row">
					<nav className="navbar navbar-default">
						<div className="container-fluid">
							<ul className="nav navbar-nav"> 
								<li><a href="#"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></li>
								<li><a href="#"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></a></li>
								<li><a href="#"><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></a></li>
							</ul>
							<div className="navbar-form navbar-right">
								<SearchBar
									filterText={this.state.filterText}
									onUserInput={this.setFilterText}
								/>
							</div> 
						</div>
					</nav> 
				</div>
				<div className="row">
					<ContentTable
						data={this.state.data}
						filter={this.state.filterText}
					/>
				</div>
			</div>
		);
	}
}

export default Clients;