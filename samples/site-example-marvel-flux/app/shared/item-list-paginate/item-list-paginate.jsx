import React, {Component} from "react";
import ReactDOM from "react-dom";
import ItemList from "../item-list/item-list.jsx"
import Pagination from "../pagination/pagination.jsx"

class ItemListPaginate extends Component {
    
    render() {
        
        return (
            <div>
                <Pagination
					next-page={this.props["next-page"]}
					prev-page={this.props["prev-page"]} 
                />
                <ItemList
                    items={this.props["data-list"]}
                    item-component={this.props["item-component"]}
                />
                <Pagination
					next-page={this.props["next-page"]}
					prev-page={this.props["prev-page"]} 
                />
            </div>
        );
    }
}

export default ItemListPaginate;