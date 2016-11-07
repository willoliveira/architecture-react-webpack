import React, {Component} from "react";

class Pagination extends Component {

    render() {
        return (
            <div className="paginate-list">
                <button type="button" onClick={this.props["prev-page"]}>Previous</button>
                <button type="button" onClick={this.props["next-page"]}>Next</button>
            </div>
        )
    }
}

export default Pagination;