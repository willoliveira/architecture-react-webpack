import React, {Component} from "react";

class CardComics extends Component {

    render() {
        return (
            <div className="card-item hq-tile" key={this.props.item.id}>
                <img alt="" src={this.props.item.thumbnail.path + "." + this.props.item.thumbnail.extension}/>
                <div className="title-image">
                    <h3>{this.props.item.title}</h3>
                    <p></p>
                </div>
            </div>
        )
    }
}

export default CardComics;