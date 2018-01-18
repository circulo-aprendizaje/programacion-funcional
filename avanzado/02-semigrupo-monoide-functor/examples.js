// daggy
!function(t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("sanctuary-type-classes"),require("sanctuary-type-identifiers")):"function"==typeof define&&null!=define.amd?define(["sanctuary-type-classes","sanctuary-type-identifiers"],t):self.daggy=t(self.sanctuaryTypeClasses,self.sanctuaryTypeIdentifiers)}(function(t,e){"use strict";function n(t){var e=this[y];if(!t[e])throw new TypeError("Constructors given to cata didn't include: "+e);return t[e].apply(t,this[p])}function r(){return this[v]+"."+this[y]}function u(){return this.constructor[d]+"."+this[y]+h(this[p])}function i(){return this[d]}function o(){return this.constructor[d]+h(this[p])}function c(t){return Boolean(t)&&this[y]===t[y]&&this[v]===e(t)}function s(t){return this===t||Boolean(t)&&this[y]===t[y]&&e(this)===e(t)}function a(t){return this[d]===e(t)}function f(t,e,n,r){if(r!==t.length)throw new TypeError("Expected "+t.length+" arguments, got "+r);var u=Object.create(e);l(u,p,n);for(var i=0;i<t.length;i+=1)u[t[i]]=n[i];return u}function l(t,e,n){var r=l.desc||(l.desc={enumerable:!1,writable:!1,configurable:!1,value:null});r.value=n,Object.defineProperty(t,e,r)}function h(e){if(0===e.length)return"";for(var n="("+t.toString(e[0]),r=1;r<e.length;r+=1)n=n+", "+t.toString(e[r]);return n+")"}function g(t,e){switch(t.length){case 1:return function(n){return f(t,e,[n],arguments.length)};case 2:return function(n,r){return f(t,e,[n,r],arguments.length)};case 3:return function(n,r,u){return f(t,e,[n,r,u],arguments.length)};case 4:return function(n,r,u,i){return f(t,e,[n,r,u,i],arguments.length)};case 5:return function(n,r,u,i,o){return f(t,e,[n,r,u,i,o],arguments.length)};case 6:return function(n,r,u,i,o,c){return f(t,e,[n,r,u,i,o,c],arguments.length)};case 7:return function(n,r,u,i,o,c,s){return f(t,e,[n,r,u,i,o,c,s],arguments.length)};case 8:return function(n,r,u,i,o,c,s,a){return f(t,e,[n,r,u,i,o,c,s,a],arguments.length)};case 9:return function(n,r,u,i,o,c,s,a,l){return f(t,e,[n,r,u,i,o,c,s,a,l],arguments.length)};case 10:return function(n,r,u,i,o,c,s,a,l,h){return f(t,e,[n,r,u,i,o,c,s,a,l,h],arguments.length)};default:return Object.defineProperty(function(){return f(t,e,arguments,arguments.length)},"length",{value:t.length})}}var y="@@tag",p="@@values",d="@@type",v="@@ret_type";return{tagged:function(t,e){var n={toString:o},r=g(e,n);return r.toString=i,r.prototype=n,r.is=a,r[d]=t,n.constructor=r,r},taggedSum:function(t,e){var o={cata:n,toString:u},h=o.constructor={toString:i,prototype:o,is:a,"@@type":t};return Object.keys(e).forEach(function(n){var u=e[n],i=Object.create(o);if(l(i,y,n),0===u.length)return h[n]=f(u,i,[],0),void(h[n].is=s);h[n]=g(u,i),h[n].is=c,h[n][y]=n,h[n][v]=t,h[n].toString=r}),h}}});

// Typeclasses
// Setoide/Eq => Igualdad
// Ord => Orden total

// Operaciones genericas
// Igualdad:
//    Buscar un elemento en una coleccion. Contar ocurrencias de un elemento en una coleccion. Comparar colecciones en funcion de comparar sus elementos.
//    Definiciones alternativas de igualdad (por ejemplo, mirar solo el signo, o solo el valor absoluto de un numero. o la cantidad de caracteres en un string o elementos en una coleccion)

// Orden total:
//    Ordenar colecciones. Busqueda optimizada: Busqueda binaria. Ordenes sobre ordenes (`data Ordering`): Orden multicolumna.
//    Definiciones alternativas de orden (por ejemplo, inclusion sobre colecciones)

// Semigrupo
// concat :: Semigroup a => a ~> a -> a
// a.concat(b).concat(c) === a.concat(b.concat(c))
// Abstraccion: Cosas combinables

// Asociatividad: Transformar una operacion sobre una serie de valores, en una serie de operaciones sobre sub-series de valores, con libertad de elegir el orden:
// a <> b <> c <> d <> e <> f

// (((((a <> b) <> c) <> d) <> e) <> f)

// (a <> b <> c) <> (d <> e <> f)

// ((a <> b) <> (c <> d)) <> (e <> f)

// Ejemplos

// string

// Array
// No depende del tipo adentro del array

// Numeros?

// Booleanos?

// First  & Last

// Objetos?

// Promises?

// Streams?

// Estructuras derivadas: Tuplas. ZipList. Records. Funciones?

// Concatenaciones arbitrarias: folds?

// Monoide
// Semigrupo, y ademas...
// empty :: Monoid m => () -> m
// M(x).concat(M.empty()) === M(x)
// M.empty().concat(M(x)) === M(x)
// Abstraccion: Cosas combinables con elemento neutro

// TL;DR agregar un elemento neutro (respecto de concat) a un Semigrupo

// (contra)Ejemplos

// Concatenaciones arbitrarias: folds

// Aside: Free Objects
// Free Semigroup
// data NonEmpty a = NonEmpty a (List a)

// Free Monoid
// data FreeMonoid s = Empty | NonEmpty s

// Functor
// map :: Functor f => f a ~> (a -> b) -> f b

// Array.prototype.map

// Aside: Kinds
// `f a` :: *
// Type Constructor f :: * -> *

// Identidad
// u.map(x => x) === u

// map no puede modificar la "estructura" de u =>
//      si mapeamos algo que no modifica los valores (funcion identidad), obtenemos lo mismo tal cual

// Composicion
// u.map(f).map(g) === u.map(x => g(f(x)))

// map solo aplica la funcion. no puede hacer nada mas. por lo tanto, el resultado no cambia entre aplicar map 2 veces, con dos mitades de una transformacion
// o aplicarlo una sola vez, con la transformacion completa

// https://github.com/quchen/articles/blob/master/second_functor_law.md
// https://www.schoolofhaskell.com/user/edwardk/snippets/fmap

// Analogias:

// Functores como contenedores

// No hay garantias de poder producir valores, ni de poder acceder a ellos. Pero podemos transformar los valores uniformemente.

// No todos los contenedores son functores
// (contra)Ejemplos: Endomorfismo y Contravariante

// Functores como calculos/computos

// No hay garantias de poder ejecutar el calculo, ni de como componer calculos entre si, ni secuenciarlos. Pero podemos hacer post-processing.

// Ejemplos

// Array

// Objetos?

// Promises?
//    Future/Task/Maybe/Either

// Funciones?

// Tuplas?

// Distintos functores aportan distintas interpretaciones a los valores "contenidos"/"computados"

// Estructuras derivadas?

// newtype Pair f g a = Pair { getPair :: (f a, g a) }

// newtype Compose f g a = Compose { getCompose :: f (g a) }
// instance (Functor f, Functor g) => Functor (Compose f g) where

// Ojo! En general f y g no conmutan

// http://gelisam.blogspot.de/2014/01/functors-are-computations.html

// Grupo
// Monoide, y ademas...
// invert :: Group g => g ~> () -> g

// g.concat(g.invert()) = G.empty()
// g.invert().concat(g) = G.empty()

// Abstraccion: "desconcatenar", "deshacer", poder ir siempre de un valor a otro mediante una concatenacion.

// a <> x = c
// a' <> a <> x = a' <>c
// mempty <> x = a' <> c
// x = a' <> c

// Ejemplos?