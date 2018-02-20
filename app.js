// 1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
// Recorre todos los elementos del arraeglo y hace lo que dice la callback, no regresa nada
function miForEach(arreglo, callback){
        // completa aqui
        for (var i = 0; i < arreglo.length; i++) {
            // dentro de cada elemento quiero que suceda algo
            callback(arreglo[i])
        }
	}

	miForEach([1,2,3], function(item){
        console.log(item)
    })

// 2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
// recorre cada elemento, genera un proceso y regresa un resultado. Se crea un nuevo arreglo
function miMap(arreglo, callback){
// como se debe devolver un nuevo arreglo hay que declarar un arreglo vacio para meter los nuevos
var newArray = []    
for (var i = 0; arreglo.length; i++){
    // nuevo arrglo, empuja y hace la nueva funcion para que cambie el original
        newArray.push(callback(arreglo[i]))
    }
    // map siempre retorna algo
    return newArray
	}
// set funcion callback que retornará la modificacion a item (arreglo[i])
    miMap([3,4,5,6], function(item) {
        return item * 2
    })

// 3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:
// crea un nuevo arreglo que pasa por una funcion que cumple una condicion.Se crea un  nuevo arreglo
function miFilter(arreglo, callback){
// contendra los elementos filtrados
    var newArray = []
// iterar el arreglo original
    for (var i = 0; arreglo.length; i++){
// en cada iteracion hay que validar una condicion
// la condicion puede ser llamada con una funcion que diga cual es la condicion en especifico
        if (callback(arreglo[i]) === true ){
            newArray.push(arreglo[i])
        } 
        // si en if no se cumple la condicion sale y como esta en un for sigue al siguiente elemento
    }

    return newArray 
	}

    filter([2,5,8,4], function(item) {
        return item <= 2;
        // regresar elementos que cumplan con la condicion 
    })
// 4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
// recorre el arreglo, compara y regresa un mismo valor. Retorna una sola variable

// initialize valor inicial, normalmente 0 'virtual'
function miReduce(arreglo, callback, initialize){
// primer elemento del acumulador es 0
// ir cambiando el valor del acumulador
// objetivo saber cuanto es el acumulador al final de for
var acumulador = initialize;
// for para iterar por el arreglo original
    for(var i = 0; i < arreglo.length; i++) {
        // se afecta el acumulador
        // elemento inicial con elemento anterior
        acumulador = callback(arreglo[i], acumulador)
    }
    // siempre retorna algo
    return acumulador
}

miReduce([3,6,8,5,3],function(item, acumulador) {
// siempre regresa algo para que se pase a la otra funcion
    return acumulador + item;
},0)
// el 0 es un valor, donde va a iniciar
// Bonus:
// 1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:
function miSort(arreglo, callback){

	}
