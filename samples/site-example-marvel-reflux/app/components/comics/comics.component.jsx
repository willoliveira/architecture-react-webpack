import React, {Component} from "react";
import ComicsStore from "./comics.store.js";
import ComicsAction from "./comics.action.js"

import Reflux from "reflux";

import ItemListPaginate from "../../shared/item-list-paginate/item-list-paginate.jsx";
import CardComics from "../../shared/card-comics/card-comics.jsx"

class Comics extends Component {

	constructor() {
		super();
		//limpa
		this.state = {
			comics: ComicsStore.getAll()
		};
		//inicializa o componente
		this.init();
	}

	init() {
		//get comics
		ComicsStore.getComics();
	}

	componentDidMount() {
    	ComicsStore.addChangeListener(this._onChange.bind(this));
  	}

  	componentWillUnmount() {
    	ComicsStore.removeChangeListener(this._onChange);
  	}

	_onChange() {
		console.log(ComicsStore.getAll());
		this.setState({
			comics: ComicsStore.getAll()
		});
	}

	render() {
		return (
			<section id="comics-list">
				<h1>Comics</h1>
				<ItemListPaginate
					data-list={this.state.comics.list}
					total-items={this.state.comics.total}
					item-component={<CardComics/>}

					next-page={ComicsAction.nextPage}
					prev-page={ComicsAction.prevPage}
				/>
			</section>
		);
	}
}

export default Comics;