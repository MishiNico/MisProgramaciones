

//una propiedad del arrray es .length que en español significa longitud
//console.log(nombres.length)
//console.log(nombres)
//console.log(nombres[2])

//esto es un ciclo:
//for(var i = 0; i < nombres.length; i++){
    //console.log("Hola "+ nombres[i])
//}

// Hola Pepe
// Hola Matias
// Hola Daniel
function saludar(array){
    for(var i = 0; i < array.length; i++){
        console.log("Hola "+ array[i])
    }
    return 
}
function despedida(array){
    for(var i = 0; i < array.length; i++){
        console.log("Adios "+ array[i])
    }
    return 
}

//esto es un array, o arreglo, o matriz
var grupo1 = ["Pepe", "Matias", "Daniel"]
var grupo2 = ["Pancho", "Nico", "Juanjo"]

saludar(grupo1)
despedida(grupo2)