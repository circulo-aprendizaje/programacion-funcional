Que es programacion funcional
- Funciones
- No objetos, seguro. Pero tampoco statements (if/switch,for/while) ni variables.

Por que?
- $$$. Permite escribir codigo con menor cantidad de "errores por requerimiento".
- Permite escribir menos codigo, y reusar mas.
- Unidades mas pequeñas e independientes, faciles de entender, faciles de especificar, faciles de testear, naturalmente reutilizables.

Por que no?
- $$$. Lenguajes primitivos muy cerca del silicio. Lenguajes subsiguientes construidos encima bajo los mismos principios.
- Otra manera de pensar.

Funciones nada mas?
- Funciones puras
  - No puede modificar sus argumentos
  - Solo puede llamar a otras funciones puras
  - Consecuencia: Funciones que pueden paralelizarse sin inconvenientes
- Abstraer cualquier patron de codigo. Ejemplos de if/switch, for/while.

Flujo de informacion

Pragmatico, practico, sin (grandes) librerias
- Empezar por lo pequeño
- Que cosas ya usan?
- Que problemas se encontraron, o que codigo se encuentran repitiendo multiples veces?

Ejemplos
- Mappear sobre objetos/maps
- Combinar arrays (map (n+1)-ario)
- Elegir/remover/renombrar keys en objetos/maps
- Componer funciones
- Node-callback a Promise
- Combinar promesas (then (n+1)-ario)

Ejercicio
- Exponential backoff