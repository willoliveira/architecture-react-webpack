import React, {Component} from "react";
import ContentTableRow from "../../shared/tableFilter/contentTableRow.component.jsx";

class ContentTable extends Component {
	render () {
		var rows = this.props.data.filter(function(elem) {
			return !this.props.filter || (
				this.props.filter && 
				(
					elem.firstName.toLowerCase().match(this.props.filter.toLowerCase()) ||
					elem.lastName.toLowerCase().match(this.props.filter.toLowerCase())
				)
			)
		}.bind(this));
		return (
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
						rows.map(function(lineData, indexLine) {
							return (
								<ContentTableRow
									key={lineData.clientId}
									data={lineData}
									filter={this.props.filterText}
								/>
							)
						}.bind(this))
					}
				</tbody>
			</table>
		)
	}
}

export default ContentTable;