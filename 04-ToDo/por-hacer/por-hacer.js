const fs = require('fs')

let listadoPorHacer = []

const crear = (descripcion) => {
    let porHacer = {
        descripcion,
        completado: false
    }
    
    listadoPorHacer.push(porHacer) 
    
    guardarDB()    

    return porHacer    
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer)

    fs.exists('db/', (exists) => {        
        if(!exists){
            fs.mkdir('db', (err) => {
                if (err) throw err

                fs.writeFile('db/data.json', data, (err) => {
                    return new Promise((resolve,reject) => {
                        if(err) return reject(err)
            
                        return resolve('se ha guardado correctamente')
                    })
                })
            })
        }
    })    
}

module.exports = {
    crear
}