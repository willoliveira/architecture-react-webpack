
import { EventEmitter } from 'events';
import AppDispatcher from "../../shared/dispatcher/AppDispatcher.js";

import BaseStore from "../../shared/base/base.store.js";
import CharactersRepository from "../../components/characters/characters.repository.js";

var CHANGE_EVENT = "change";
var characters = {
    list: [],
    total: 0
};
var page = {
    num: 0,
    size: 20
}

class CharacterStore extends BaseStore {

    getAll() {
        return characters;
    }

    getCharacters() {
        return CharactersRepository.getCharacters({page: page})
            .then(onSuccessGetCharacters)
            .catch(onError);
    }
}

const intanceCharactersStore = new CharacterStore()

/**
 * Private methods
 */
/**
* @param {Object} response
*/
function onSuccessGetCharacters(response) {
    if (response.data && response.data.data && response.data.data.results.length) {
        //seta os quadrinhos
        characters.list  = response.data.data.results;
        characters.total = response.data.data.total;
        //dispara evento de mudança
        intanceCharactersStore.emitChange();
    }
}
/**
* @param {Object} response
*/
function onError(response) {
    console.log(response);
    //intanceCharacterStore.emit("error");
}


AppDispatcher.register(function(action) {
    switch(action.actionType) {
        case "CHARACTERS_PREVIOUS_PAGE":
            if (page.num > 0) {
                page.num -= 1;
                //faz novamente a requisição para pegar os quadrinhos
                intanceCharactersStore.getCharacters();
            }
            break;
        case "CHARACTERS_NEXT_PAGE":
            if (page.num + 1 <= parseInt(characters.total/page.size)) {
                page.num += 1;
                //faz novamente a requisição para pegar os quadrinhos
                intanceCharactersStore.getCharacters();
            }
            break;
    }
});

export default intanceCharactersStore;