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

const listar = () => {
    return listadoPorHacer      
}

const crearDirectorio = (path) => {
    return new Promise((resolve, reject) => {
        fs.exists(path, (exists) => {        
            if(!exists){
                fs.mkdir(path, (err) => {
                    if (err) return reject(err)
                    
                    resolve('directorio creado correctamente')
                })
            }
            else{
                resolve('el directorio ya estaba creado')
            }
        })  
    })
}
const cargarDb = async () => {
    try{
        listadoPorHacer = require('../db/data.json')
    }
    catch(err){
        listadoPorHacer = []
    }    
}

const guardarDB = async () => {
    let data = JSON.stringify(listadoPorHacer)

    await crearDirectorio('db/')

    fs.writeFile('db/data.json', data, (err) => {
        return new Promise((resolve,reject) => {
            if(err) return reject(err)

            return resolve('se ha guardado correctamente')
        })
    })
}


const actualizar = async (descripcion, completado = true) => {
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if(index >= 0){
        listadoPorHacer[index].completado = completado

        guardarDB()

        return true
    }
    else{
        return false
    }    
}

const borrar = (descripcion) => {
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if(index >= 0){
        listadoPorHacer.splice(index, 1)

        guardarDB()

        return true
    }
    else{
        return false
    }

}

cargarDb()

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}