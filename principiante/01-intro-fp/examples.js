// Que es programacion funcional
// - Funciones
// - No objetos, seguro. Pero tampoco statements (if/switch,for/while) ni variables.

let fido = new Dog('fido');

fido.eat();
fido.bark();

//

let fido = dog ('fido')
// {name: 'fido', hunger: 100}
bark (eat (fido) )
// {name: 'fido', hunger: 50}

// Por que?
// - $$$. Permite escribir codigo con menor cantidad de "errores por requerimiento".
// - Permite escribir menos codigo, y reusar mas.
// - Unidades mas pequeñas e independientes, faciles de entender, faciles de especificar, faciles de testear, naturalmente reutilizables.

// Composibilidad

// Por que no?
// - $$$. Lenguajes primitivos muy cerca del silicio. Lenguajes subsiguientes construidos encima bajo los mismos principios.
// - Otra manera de pensar.

// Funciones nada mas?
// - Funciones puras
//   - No puede modificar sus argumentos
//   - Solo puede llamar a otras funciones puras
//   - Consecuencia: Funciones que pueden paralelizarse sin inconvenientes
// - Abstraer cualquier patron de codigo. Ejemplos de if/switch, for/while.

const iff = (condicion, verdadero, falso) => valor => {
    if (condicion(valor)) {
        return verdadero(valor)
    } else {
        return falso(valor)
    }
}

const K = valor => () => valor;

const resultadoGanador = valor => valor > 100;

get('http://numero.random/')
    .then(iff(resultadoGanador, K('ganaste'), K('perdiste')))


const conds = (ramas) => valor => {
    // ramas es un array de objetos tipo {condicion, accion}
    // condicion y accion son funciones
    let i = 0, l = ramas.length
    for (;i < l; i++) {
        let {condicion, accion} = ramas[i]

        if (condicion(valor)) return accion(valor)
    }

    throw new Error('unmatched case');
}

conds ([])

// Flujo de informacion

Lista de clientes  ->  Calcular un agregado de ventas -> Filtrar -> Combinar con informacion de proveedores



listarClientes -> () -> [Clientes]

ventasPorCliente -> [Clientes] -> Cliente -> Ventas

insertarAgregadoVentas -> Cliente -> Ventes -> ClienteConVentas

filtrarClientes -> [ClienteConVentas] -> [ClienteConVentas]

proveedorDeCliente -> ClienteConVentas -> Proveedor

insertarAgregadoVentas -> ClienteConVentas -> Proveedor -> ClienteFinal


// milib.js

module.exports = {
    funcA: () => '',
    funcB: () => '',
    submodule: {
        funcA: () => '',
        funcB: () => '',
    }
}

// index.js

const milib = require('milib')
const { funcA } = milib




// Pragmatico, practico, sin (grandes) librerias
// - Empezar por lo pequeño
// - Que cosas ya usan?
// - Que problemas se encontraron, o que codigo se encuentran repitiendo multiples veces?

// Ejemplos
// - Mappear sobre objetos/maps
Array.prototype.map

{
    []: valor
}

Object.prototype.map = fn => {
    // nuevo objeto con cada valor modificado por fn
}

// - Combinar arrays (map (n+1)-ario)

let valsA = [1, 2, 3, 4]
let valsB = [5, 6, 7, 8]

let sum = (a, b) => a + b

let arraify = fn => (arrays) => ???

let sumArrays = arraify(sum)

sumArrays(valsA, valsB)


// - Elegir/remover/renombrar keys en objetos/maps

let pick = (keys) => obj => ???

let remove = (keys) => obj => ???

let rename = (keyMap) => obj => ???

let keymap = {
    name: nombre,
    lastName: apellido
}

let eng2spa = rename(keymap)

eng2spa({name: 'john', lastName: 'doe'})
// {nombre: 'john', apellido: 'doe'}

// - Componer funciones

let comp = f => g => x => f(g(x)) //  (f . g) (x) = f (g (x))

let compose => (funcs) => x => ??? // compose(a, b, c, d)(x) = a (b (c (d (x))))

// - Node-callback a Promise

fs.readFile(path, charset, callback(err, data)) 

let promisify = fn => (args) => ????

promisify(fs.readFile)('/etc/passwd', 'utf8')
    .then(data => console.log('pwnd', data))

// - Combinar promesas (then (n+1)-ario)

let resA = Promise.resolve(1)
let resB = Promise.resolve(2)

let sum = (a, b) => a + b

let makeItWorkWithPromises = fn => (promises) => ???

let sumArrays = makeItWorkWithPromises(sum)

sumArrays(resA, resB)
    .then(res => console.log(res))

// Ejercicio
// - Exponential backoff

get('http://www.google.com')
    .catch()