// Arrow Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// . Syntax sugar para funciones anonimas (recursion?)
// . `this` y `arguments`
// . [comida hindu]

function asd() {
    //
}

const asdx = () => {
    //
};

algo(function() { return ''; });

algo(() => '');

// Spread operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
// . Pasar un array como multiples argumentos
// . No mas Function.prototype.apply
// . Duplicado y union de arrays (y objetos)

const vals = [1,2,3,4];

const func = (a,b,c,d) => {};

func(...vals);

const vals2 = [...vals, 5, 6];

// Rest parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// . Funciones variadicas (aricidad?)
// . Reemplaza `arguments`

const varg = (...args) => args.length;

varg(1,2,3,4,5);

const f1 = a => console.log(a);

const f3 = (...args) => args.length;

const add = (a, b) => a + b;

const addC = a => b => a + b;

function f2__(a) {
    return function(b) {
        return a + b;
    }
}

// Destructuring assignment
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// . Cuando solo nos interesa(n) algun(os) miembro(s)

const dest = client => console.log(client.name, client.id, client.date);
const dest_ = ({name, id, date}) => ({name, id, date});

const mypair = [1, 2];

const enhance = ([item, tag]) => console.log(item, tag);

const mapFst = f => ([fst, snd]) => [f(fst), snd];

// Duplicado y union de objetos
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// . No-mutabilidad
// . Construir objetos de a una key a la vez

Object.assign({}, {}, {}); // <-----

Object.assign({}, obj); // <-----

// Computed property names
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Computed_property_names
// . Object literals con propiedades dinamicas

const label = 'something';

({
    [f(label)]: 1
})

// Duplicado y union de arrays
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
// . No-mutabilidad
// . Construir arrays un item a la vez

[1,2,3,4,5].reduce((acc, val) => {
    return;
}, []);

// Conditional Operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
// . Reemplazar `if`
// . Expresion vs Statement (http://2ality.com/2012/09/expressions-vs-statements.html)

// Comma Operator (Opcional)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comma_Operator
// . Secuenciar operaciones, descartando resultados intermedios

const effect = f => x => (f(x), x);

// https://lodash.com/docs/4.17.4#flow
// https://github.com/lodash/lodash/wiki/FP-Guide


const filter = arr => f => arr.filter(f);
const filterX = f => arr => arr.filter(f);

//[1,2,3,4].filter(x => x%2);
