const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodeUlr = encodeURI(direccion);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUlr}`,
        headers: { 'x-rapidapi-key': '68bd68b1f1msh9923083452dcdc8p1231d9jsn81e4ae66a689' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const nombre = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {
        nombre,
        lat,
        lng,
    }

}
module.exports = {
    getLugarLatLng
}