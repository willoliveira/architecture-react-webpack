
import AppDispatcher from "../../shared/dispatcher/AppDispatcher.js";

var CharactersAction = {

    prevPage: function() {
        AppDispatcher.dispatch({
            actionType: "CHARACTERS_PREVIOUS_PAGE"
        });
    },

    nextPage: function() {
        AppDispatcher.dispatch({
            actionType: "CHARACTERS_NEXT_PAGE"
        });
    }
}

export default CharactersAction;