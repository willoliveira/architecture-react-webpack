import React, {Component} from "react";

class ContentTableRow extends Component {
	render () {
		return (
			<tr>			
				<td><input type="checkbox"/></td>
				<td><img /></td>
				{
					Object.keys(this.props.data).map(function(elem, indexElem) {
						return (
							<td key={indexElem}> 
								{
									this.props.data[elem]
								}
							</td>
						)
					}.bind(this))
				}
			</tr>
		)
	}
}

export default ContentTableRow;