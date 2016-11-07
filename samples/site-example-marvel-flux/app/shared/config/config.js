
const marvel_url_api = "http://gateway.marvel.com/";
const marvel_ts = "1";
const marvel_apikey = "e833b1a40879c619e4fa643455659cee";
const marvel_hash = "b3a16a0249d395a7b67e9ed3115430d4";

class Config {
    
    static get marvel_url_api() {
        return marvel_url_api;
    }
    /**
     * Parametros para autenticação da api
     */
    static get marvel_ts() {
        return marvel_ts;
    }

    static get marvel_apikey() {
        return marvel_apikey;
    }

    static get marvel_hash() {
        return marvel_hash;
    }
}

export default Config;