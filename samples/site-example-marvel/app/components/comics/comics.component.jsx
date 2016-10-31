import React, {Component} from "react";
import ComicsRepository from "../../components/comics/comics.repository.js";

import ItemListPaginate from "../../shared/item-list-paginate/item-list-paginate.jsx";
import CardComics from "../../shared/card-comics/card-comics.jsx"

class Comics extends Component {

	constructor() {
		super();
		//limpa
		this.state = {
			comics: []
		}
		//inicializa o componente
		this.init();
	}

	init() {
		//get comics
		ComicsRepository.getComics()
			.then(this.onSuccessGetComics.bind(this))
			.catch(this.onError.bind(this));
	}

	onSuccessGetComics(response) {
		console.log(response, this);
		if (response.data && response.data.data && response.data.data.total > 0) {
			this.setState({
				comics: this.state.comics.concat(response.data.data.results),
				totalItems: response.data.data.total
			});
		}
	}

	nextComics() {

	}

	prevComics() {
		
	}

	onError(error) {
		console.log(error);
	}

	render() {
		return (
			<section id="comics-list">
				<h1>Comics</h1>
				<ItemListPaginate
					data-list={this.state.comics}
					total-items={this.state.totalItems}
					item-component={<CardComics/>}
				/>
			</section>
		);
	}
}
// <div className="paginate-list">
// 					<button type="button">Previous</button>
// 					<button type="button">Next</button>
// 				</div>
// 				<div className="table-list comics-table-list">
// 					{
// 						this.state.comics.map(function(item, index) {
// 							return (
// 								<div className="card-item hq-tile" key={item.id}>
// 									<img alt="" src={item.thumbnail.path + "." + item.thumbnail.extension}/>
// 									<div className="title-image">
// 										<h3>{item.title}</h3> 
// 										<p></p>
// 									</div>
// 								</div>
// 							)
// 						})
// 					}
// 				</div>

export default Comics;