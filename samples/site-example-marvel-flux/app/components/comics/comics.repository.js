
import BaseRepository from "../../shared/base/base.repository.js";
import Config from "../../shared/config/config.js";

//parametros para autenticação
const marvel_params_auth = "ts=" + Config.marvel_ts + "&apikey=" + Config.marvel_apikey + "&hash=" + Config.marvel_hash;

class ComicsRepository extends BaseRepository {

    static getComics(param) {
        var url = Config.marvel_url_api + "v1/public/comics?" + marvel_params_auth;
        return super.get(url + "&offset=" + (param.page.num * param.page.size) + "&limit=" + param.page.size);
    }
}

export default ComicsRepository;