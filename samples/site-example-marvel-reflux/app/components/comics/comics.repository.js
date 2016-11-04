
import BaseRepository from "../../shared/base/base.repository.js";
import Config from "../../shared/config/config.js";

class ComicsRepository extends BaseRepository {

    static getComics() {
        return super.get(Config.marvel_url_api + "v1/public/comics?ts=1&apikey=e833b1a40879c619e4fa643455659cee&hash=b3a16a0249d395a7b67e9ed3115430d4");
    }
}

export default ComicsRepository;