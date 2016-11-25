
import { EventEmitter } from 'events';
import AppDispatcher from "../../shared/dispatcher/AppDispatcher.js";

import BaseStore from "../../shared/base/base.store.js";
import ComicsRepository from "../../components/comics/comics.repository.js";

var CHANGE_EVENT = "change";
var comics = {
    list: [],
    total: 0
};
var page = {
    num: 0,
    size: 20
}

class ComicsStore extends BaseStore {

    getAll() {
        return comics;
    }

    getComics() {
        return ComicsRepository.getComics({page: page})
            .then(onSuccessGetComics)
            .catch(onError);
    }
}

const intanceComicsStore = new ComicsStore()

/**
 * Private methods
 */
/**
* @param {Object} response
*/
function onSuccessGetComics(response) {
    if (response.data && response.data.data && response.data.data.results.length) {
        //seta os quadrinhos
        comics.list  = response.data.data.results;
        comics.total = response.data.data.total;
        //dispara evento de mudança
        intanceComicsStore.emitChange();
    }
}
/**
* @param {Object} response
*/
function onError(response) {
    console.log(response);
    //intanceComicsStore.emit("error");
}


AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case "COMICS_PREVIOUS_PAGE":
            if (page.num > 0) {
                page.num -= 1;
                //faz novamente a requisição para pegar os quadrinhos
                intanceComicsStore.getComics();
            }
            break;
        case "COMICS_NEXT_PAGE":
            if (page.num + 1 <= parseInt(comics.total/page.size)) {
                page.num += 1;
                //faz novamente a requisição para pegar os quadrinhos
                intanceComicsStore.getComics();
            }
            break;
    }
});

export default intanceComicsStore;