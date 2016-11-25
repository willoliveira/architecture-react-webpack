
import Reflux from "reflux";
import ComicsAction from "./comics.action.js";

var Store = Reflux.createStore({
    init: function() {
        this.listenToMany(actions);
    },
    onFireBall: function(){
        // whoooosh!
    },
    onMagicMissile: function(){
        // bzzzzapp!
    }
});