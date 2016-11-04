import React, {Component} from "react";

class Pagination extends Component {

    render() {
        return (
            <div className="paginate-list">
                <button type="button">Previous</button>
                <button type="button">Next</button>
            </div>
        )
    }
}

export default Pagination;