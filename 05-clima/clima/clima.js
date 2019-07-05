const axios = require('axios')

const getClima = async (lugar) => {
    try{
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lugar.lat}&lon=${lugar.lon}&appid=b8771e6beb3844cc3f407f83163b19eb`)
    
        if(res.status == 200)
            return res.data
        else{
            return new Error(`${res.status} - ${res.statusText}`)
        }
    }
    catch(err){
        throw err
    }  
}


module.exports = {
    getClima
}