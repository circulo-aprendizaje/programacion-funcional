// daggy
!function(t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t(require("sanctuary-type-classes"),require("sanctuary-type-identifiers")):"function"==typeof define&&null!=define.amd?define(["sanctuary-type-classes","sanctuary-type-identifiers"],t):self.daggy=t(self.sanctuaryTypeClasses,self.sanctuaryTypeIdentifiers)}(function(t,e){"use strict";function n(t){var e=this[y];if(!t[e])throw new TypeError("Constructors given to cata didn't include: "+e);return t[e].apply(t,this[p])}function r(){return this[v]+"."+this[y]}function u(){return this.constructor[d]+"."+this[y]+h(this[p])}function i(){return this[d]}function o(){return this.constructor[d]+h(this[p])}function c(t){return Boolean(t)&&this[y]===t[y]&&this[v]===e(t)}function s(t){return this===t||Boolean(t)&&this[y]===t[y]&&e(this)===e(t)}function a(t){return this[d]===e(t)}function f(t,e,n,r){if(r!==t.length)throw new TypeError("Expected "+t.length+" arguments, got "+r);var u=Object.create(e);l(u,p,n);for(var i=0;i<t.length;i+=1)u[t[i]]=n[i];return u}function l(t,e,n){var r=l.desc||(l.desc={enumerable:!1,writable:!1,configurable:!1,value:null});r.value=n,Object.defineProperty(t,e,r)}function h(e){if(0===e.length)return"";for(var n="("+t.toString(e[0]),r=1;r<e.length;r+=1)n=n+", "+t.toString(e[r]);return n+")"}function g(t,e){switch(t.length){case 1:return function(n){return f(t,e,[n],arguments.length)};case 2:return function(n,r){return f(t,e,[n,r],arguments.length)};case 3:return function(n,r,u){return f(t,e,[n,r,u],arguments.length)};case 4:return function(n,r,u,i){return f(t,e,[n,r,u,i],arguments.length)};case 5:return function(n,r,u,i,o){return f(t,e,[n,r,u,i,o],arguments.length)};case 6:return function(n,r,u,i,o,c){return f(t,e,[n,r,u,i,o,c],arguments.length)};case 7:return function(n,r,u,i,o,c,s){return f(t,e,[n,r,u,i,o,c,s],arguments.length)};case 8:return function(n,r,u,i,o,c,s,a){return f(t,e,[n,r,u,i,o,c,s,a],arguments.length)};case 9:return function(n,r,u,i,o,c,s,a,l){return f(t,e,[n,r,u,i,o,c,s,a,l],arguments.length)};case 10:return function(n,r,u,i,o,c,s,a,l,h){return f(t,e,[n,r,u,i,o,c,s,a,l,h],arguments.length)};default:return Object.defineProperty(function(){return f(t,e,arguments,arguments.length)},"length",{value:t.length})}}var y="@@tag",p="@@values",d="@@type",v="@@ret_type";return{tagged:function(t,e){var n={toString:o},r=g(e,n);return r.toString=i,r.prototype=n,r.is=a,r[d]=t,n.constructor=r,r},taggedSum:function(t,e){var o={cata:n,toString:u},h=o.constructor={toString:i,prototype:o,is:a,"@@type":t};return Object.keys(e).forEach(function(n){var u=e[n],i=Object.create(o);if(l(i,y,n),0===u.length)return h[n]=f(u,i,[],0),void(h[n].is=s);h[n]=g(u,i),h[n].is=c,h[n][y]=n,h[n][v]=t,h[n].toString=r}),h}}});

// Sumas y Productos de tipos

// M x N
// (M , N)
// {nombre: String, edad: Number}

// M + N
// data List Int = Nil
//               | Cons Int (List Int)

// Tipos de datos algebraicos
// Tipos vs Constructores
// Catamorfismos vs folds

const List = daggy.taggedSum('List', {
    Cons: ['head', 'tail'],
    Nil: []
})

// foldl :: (b -> a -> b) -> b -> [a] -> b

const Tree = daggy.taggedSum('Tree', {
    Node: ['left', 'val', 'right'],
    Nil: []
})


// foldl :: (b -> a -> b) -> b -> Tree a -> b
/*
Tree.prototype.height = function() {
    return this.cata({
        Node: (left, val, right) => {
            
        },
        Nil: 
    });

}
*/

// Hindley-Milner
// Currying

// parseInt :: Integer -> String -> Integer
parseDec = parseInt 10
parseHex = parseInt 16

// Asociatividad de (->)
// Polimorfismo

// id :: a -> a
id x = x

// k :: a -> b -> a
k a b = a

// c :: (a -> b) -> (b -> c) -> (a -> c)
c f g x = g (f x)

const c = f => g => x => g(f(x));

// fail :: String -> a

// Type constraints
// Type classes, abstracciones

// Setoide, concepto de igualdad

// (instance Eq a => Eq [a] where)

// equals :: Setoid a => [a] ~> [a] -> Bool
List.prototype['fantasy-land/equals'] = function (that) {
  return this.cata({
    // Note the two different Setoid uses:
    Cons: (head, tail) =>
      head.equals(that.head) // a
        && tail.equals(that.tail), // [a]

    Nil: () => that instanceof List.Nil
  })
}

// Propiedades <-> Leyes
// reflexividad
// a = a
// conmutatividad / simetria
// a = b <=> b = a
// transitividad
// a = b, b = c => a = c

// => relacion de identidad

// Ord, concepto de orden (total)

// Leyes
// totalidad
// a <= b || b <= a (para cualquier par a, b existe una relacion de orden)
// antisimetria
// a <= b, b <= a <=> a = b
// transitividad
// a <= b, b <= c => a <= c

// Ramda y Sanctuary
