/**
 * async await
 */

let getNombre = async () => {
    nombre = setTimeout(() => {
        return "eden"
    }, 3000);

    return nombre
};

let saludo = async () => {
    let nombre = await getNombre()

    return `Hola ${nombre}`;
}

saludo()
    .then((mensaje) => {
        console.log(mensaje)
    })