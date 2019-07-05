const axios = require('axios').default

/*
const resp = axios.get(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccion}`, 
                            { headers: {'X-RapidAPI-Key': '6e3db8e5d7msh42b3a58235ed3c6p13b40cjsn4b90d5c3edd9'} })
*/
const getLugarLatLong = async (direccion) => {
    const encodedDireccion = encodeURI(direccion)

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedDireccion}`,
        headers: {'X-RapidAPI-Key': '6e3db8e5d7msh42b3a58235ed3c6p13b40cjsn4b90d5c3edd9'}
    })

    const resp = await instance.get()
    
    if(resp.status == 200){
        if(resp.data.Results.length  == 0){
            throw new Error(`No hay resultados para ${direccion}`)
        }

        const data = resp.data.Results[0]
        const { name:dir, lat, lon } = data

        return {
            dir,
            lat,
            lon
        }
    }        
}

module.exports = {
    getLugarLatLong
}




