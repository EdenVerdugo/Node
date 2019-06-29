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

let getEmpleado = (id, callback) => {
    let empleadoDb = empleados.find(empleado => empleado.id == id)
    if (!empleadoDb) {
        callback(`no existe un empleado con el id ${id}`)
    }
    else {
        callback(null, empleadoDb)
    }
}

let getSalario = (empleado, callback) => {
    let { id, nombre } = empleado
    let salarioDb = salarios.find(salario => salario.id == id)
    if (!salarioDb) {
        callback(`No existe un salario para el empleado con el id ${id}, nombre ${nombre}`)
    }
    else {
        callback(null, {
            id,
            nombre,
            salario: salarioDb.salario
        })
    }
}

getEmpleado(1, (err, empleado) => {
    if (err) return console.log(err)

    console.log(empleado);

    getSalario(empleado, (err, salario) => {
        if (err) return console.log(err)
        console.log(`El salario de ${salario.nombre} es de ${salario.salario}`);
    })
})