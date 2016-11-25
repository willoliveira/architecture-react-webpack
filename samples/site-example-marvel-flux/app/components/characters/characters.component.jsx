import React, {Component} from "react";
import CharactersStore from "../../components/characters/characters.store.js";
import CharactersAction from "../../components/characters/characters.action.js"

import ItemListPaginate from "../../shared/item-list-paginate/item-list-paginate.jsx";
import CardCharacters from "../../shared/card-character/card-character.jsx"

class Characters extends Component {

	constructor() {
		super();
		//limpa
		this.state = {
			characters: CharactersStore.getAll()
		};
		//inicializa o componente
		this.init();
	}

	init() {
		//get comics
		CharactersStore.getCharacters();
	}

	componentDidMount() {
    	CharactersStore.addChangeListener(this._onChange.bind(this));
  	}

  	componentWillUnmount() {
    	CharactersStore.removeChangeListener(this._onChange);
  	}

	  
	_onChange() {
		console.log(CharactersStore.getAll());
		this.setState({
			comics: CharactersStore.getAll()
		});
	}

	render() {
		return (
			<section id="characters-list">
				<h1>Characters</h1>
				<ItemListPaginate
					data-list={this.state.characters.list}
					total-items={this.state.characters.total}
					item-component={<CardCharacters/>}

					next-page={CharactersAction.nextPage}
					prev-page={CharactersAction.prevPage}
				/>
			</section>
		);
	}
}

export default Characters;