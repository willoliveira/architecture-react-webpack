import React, {Component} from "react";

class Home extends Component {

	constructor() {
		super();
		//dados
		this.data = [
			{ lastName: "Oliveira", firstName: "Willian", email: "willian.goliveira@outlook.com", openTicket: "13", clientId: "312234", services: "3", status: "active" },
			{ lastName: "Lepiane", firstName: "Marina", email: "Marina.Lepiane@outlook.com", openTicket: "3", clientId: "123123", services: "2", status: "active" },
			{ lastName: "Evangelista", firstName: "Lucas", email: "Lucas.Evangelista@outlook.com", openTicket: "4", clientId: "43545", services: "1", status: "active" },
			{ lastName: "Correia", firstName: "Filipe", email: "Filipe.Correia@outlook.com", openTicket: "5", clientId: "23234", services: "3", status: "active" },
			{ lastName: "Silva", firstName: "Douglas", email: "Douglas.Silva@outlook.com", openTicket: "0", clientId: "0678657", services: "5", status: "active" },
			{ lastName: "Edamatsu", firstName: "Rodrigo", email: "Rodrigo.Edamatsu@outlook.com", openTicket: "1", clientId: "45678", services: "1", status: "active" },
			{ lastName: "Augusto", firstName: "Guilherme", email: "Guilherme.Augusto@outlook.com", openTicket: "3", clientId: "695767", services: "2", status: "active" }
		]
	} 
	
	render() {
		return (
			<div>
				<div className="row">
					<nav className="navbar navbar-default">
						<div className="container-fluid">
							<ul className="nav navbar-nav">
								<li><a href="#"><span className="glyphicon glyphicon-envelope" aria-hidden="true"></span></a></li>
								<li><a href="#"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></a></li>
								<li><a href="#"><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></a></li>
							</ul>
						</div>
					</nav> 
				</div>
				<div className="row">
					<table className="table table-striped"> 
						<thead>
							<tr>
								<th></th>
								<th></th>
								<th>Last name</th>
								<th>First name</th>
								<th>E-mail</th>
								<th>Open tickets</th>
								<th>ID of clients</th>
								<th># of services</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{
								this.data.map(function(lineData, indexLine) {
									return (
										<tr key={lineData.clientId}>
											<td></td>
											<td></td>
											{
												Object.keys(lineData).map(function(elem, indexElem) {
													return (<td key={indexElem}>{lineData[elem]}</td>)
												})
											}
										</tr>
									)
								})
							}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Home;