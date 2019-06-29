let multiplicar = (base, limite) => {
    let archivo = ''
    for (let i = 1; i <= limite; i++) {
        archivo += `${base} * ${i} = ${base * i} \r\n`
    }
    return archivo
}

module.exports = {
    multiplicar
}

