import React, {Component} from "react";
import CardComics from "../card-comics/card-comics.jsx";

class ItemList extends Component {

    render() {
        return (
            <div className="table-list comics-table-list">
                {
                    this.props.items.map(((item, index) => {
                        return (
                            React.cloneElement(
                                this.props["item-component"], {
                                    item: item, key:index
                                }
                            )
                        )
                    }).bind(this))                    
                }
            </div>
        )
    }
}

export default ItemList;