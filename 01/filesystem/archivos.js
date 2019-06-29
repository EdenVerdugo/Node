const fs = require('fs')
const { multiplicar } = require('../math/multiply')


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(`tablas/tabla-${base}.txt`, multiplicar(base, limite), (err)=>{
            if (err) return reject(err)

            resolve(`tabla-${base}.txt`)
        })
    })
}

module.exports = {
    crearArchivo
}


