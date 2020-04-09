const axios = require('axios');
const lugar = require('../lugar/lugar');

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0be76dace651e5e3dba6035c2cab3935&units=metric`);
    return resp.data.main.temp;
}



module.exports = {
    getClima
}