
import AppDispatcher from "../../shared/dispatcher/AppDispatcher.js";

var ComicsAction = {

    prevPage: function() {
        AppDispatcher.dispatch({
            actionType: "COMICS_PREVIOUS_PAGE"
        });
    },

    nextPage: function() {
        AppDispatcher.dispatch({
            actionType: "COMICS_NEXT_PAGE"
        });
    }
}

export default ComicsAction;