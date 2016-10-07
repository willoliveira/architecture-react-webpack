class ContentTable extends Component {
	render () {
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
						this.props.data.map(function(lineData, indexLine) {
							return (
								<tr key={lineData.clientId}>
									<td><input type="checkbox"/></td>
									<td><img /></td>
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
		)
	}
}