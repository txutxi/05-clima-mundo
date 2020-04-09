const lugar = require('./lugar/lugar'); //.geLugarLatLng;
const clima = require('./clima/clima');

const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demend: true
    }
}).argv;


// argv.direccion

//lugar(argv.direccion);


// lugar.geLugarLatLng(argv.direccion)
//     .then(console.log);


// clima.getClima(40.419998, -3.700000)
//     .then(console.log)
//     .catch(console.log);

// lugar.geLugarLatLng(argv.direccion)
//     .then(resp => {
//         clima.getClima(resp.lat, resp.lng)
//             .then(console.log);
//         //.catch(console.log(`No existe una dirección con esas coordenadas(${resp.lat},${resp.lng})`));
//     }).catch(console.log(`No se encontró esa direccion ${argv.direccion}`));


const getInfo = async(direccion) => {
    try {
        const cords = await lugar.geLugarLatLng(direccion);
        const temp = await clima.getClima(cords.lat, cords.lng);
        //console.log(cords);
        return `La temperatura de ${cords.direccion} es de ${temp}`.green;
    } catch (error) {
        return `El clima de ${direccion} no se pudo determinar por ${error}`.red;
    }
}


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);