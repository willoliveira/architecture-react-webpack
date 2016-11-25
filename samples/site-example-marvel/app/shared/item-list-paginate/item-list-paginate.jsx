import React, {Component} from "react";
import ReactDOM from "react-dom";
import ItemList from "../item-list/item-list.jsx"
import Pagination from "../pagination/pagination.jsx"

class ItemListPaginate extends Component {
    
    constructor() {
        super();
        
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        
        return (
            <div>
                <Pagination />
                <ItemList
                    items={this.props["data-list"]}
                    item-component={this.props["item-component"]}
                />
            </div>
        );
    }
}

export default ItemListPaginate;