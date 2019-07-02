const fs = require('fs')
const { multiplicar } = require('../math/multiply')

let createDir = (path) => {
    return new Promise((resolve, reject) => {
        fs.exists('tablas/', (exists)=>{
            if(!exists){
                fs.mkdir('tablas/', (err) => {
                    if(err) return reject(err)

                    return resolve(true)
                })
            }
            else{
                resolve(true)
            }                        
        })
    })
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        createDir('tablas')
         .then(exists => {
            fs.writeFile(`tablas/tabla-${base}.txt`, multiplicar(base, limite), (err)=>{
                if (err) return reject(err)
    
                resolve(`tabla-${base}.txt`)
            })
         })
         .catch(err => {
             reject(err)
         })        
    })
}

module.exports = {
    crearArchivo
}


