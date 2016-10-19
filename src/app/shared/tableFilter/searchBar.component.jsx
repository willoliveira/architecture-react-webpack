import React, {Component} from "react";

class SearchBar extends Component {
    
    constructor() {
        super();
        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    onChangeFilter(evt) {
        // console.log(this);
        // console.log(this.refs.filterText.value);
        console.log(this.refs.filterText.value);
        
        this.props.onUserInput(evt.target.value);
    }

    render() {
        return (
            <form className="input-group">
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                        <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                    </button>
                </span>
                <input type="text" className="form-control" placeholder="Search for..."
                    value={this.props.filterText}                    
                    ref="filterText"
                    onChange={this.onChangeFilter.bind(this)}
                />
            </form>
        )
    }
}

export default SearchBar