let empleados = [
    {
        id: 1,
        nombre: 'eden'
    },
    {
        id: 2,
        nombre: 'fernando'
    },
    {
        id: 3,
        nombre: 'melizza'
    }
]

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1200
    }
]

let getEmpleado = async (id) => {
    let empleadoDb = empleados.find(empleado => empleado.id == id)
    if (!empleadoDb) {
        throw new Error(`no existe un empleado con el id ${id}`)
    }
    else {
        return empleadoDb
    }
}

let getSalario = async (empleado) => {
    let { id, nombre } = empleado
    let salarioDb = salarios.find(salario => salario.id == id)
    if (!salarioDb) {
        throw new Error(`No existe un salario para el empleado con el id ${id}, nombre ${nombre}`)
    }
    else {
        let salario = {
            id,
            nombre,
            salario: salarioDb.salario
        }
        return salario
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id)
    //console.log(empleado);

    let salario = await getSalario(empleado)

    return `El salario del empleado ${empleado.nombre} es de $${salario.salario}`
}

getInformacion(1)
    .then(mensaje => {
        console.log(mensaje);
    })
    .catch(err => {
        console.log(err);
    })