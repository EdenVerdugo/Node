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

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        let empleadoDb = empleados.find(empleado => empleado.id == id)
        if (!empleadoDb) {
            reject(`no existe un empleado con el id ${id}`)
        }
        else {
            resolve(empleadoDb)
        }
    })
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let { id, nombre } = empleado
        let salarioDb = salarios.find(salario => salario.id == id)
        if (!salarioDb) {
            reject(`No existe un salario para el empleado con el id ${id}, nombre ${nombre}`)
        }
        else {
            let salario = {
                id,
                nombre,
                salario: salarioDb.salario
            }
            resolve(salario)
        }
    })
}


getEmpleado(3)
    .then(empleado => {
        console.log(empleado)
        return getSalario(empleado)
    })
    .then(salario => {
        console.log(salario);
    })
    .catch(err => {
        console.log(err);
    })