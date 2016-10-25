import React, {Component} from "react";
import ComicsRepository from "../../components/comics/comics.repository.js";

class Comics extends Component {

	constructor() {
		super();
		//inicializa o componente
		this.init();
	}

	init() {
		//get comics
		ComicsRepository.getComics()
			.then(this.onSuccessGetComics)
			.catch(this.onError);
	}

	onSuccessGetComics(response) {
		console.log(response)
	}

	onError(error) {
		console.log(error);
	}

	render() {
		return (
			<h1>Comics Page</h1>
		);
	}
}

export default Comics;