const axios = require('axios');


const geLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);
    //console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'x-rapidapi-key': 'a7f98c6f2emshd5bc53e490d6db1p19d72djsn278b2e3c545f' }
    });

    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No ha resultados para ${dir}`);
    }


    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;




    // .then(resp => {
    //     console.log(resp.data.Results[0]);
    // }).catch(
    //     err => {
    //         console.log('ERROR!!!!!!'.red, err);
    //     }
    // );

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    geLugarLatLng
}