/*
    ===== Código de TypeScript =====

    Documentacion oficial : https://www.typescriptlang.org/docs/handbook/basic-types.html

    cuando se declara una variable y no se hace referencia al tipo de dato TS infiere en su tipo
    para declarar el tipo de dato se coloca ':' despues de nombre de la variable y luego se añade
    el tipo de dato.

    let nombre: string = 'Terrance';

    cuando se declara una constante sin colocar el tipo, esta no hace referencia a que tipo de dato es,
    ya que una constante nunca va a cambiar de valor interno, asi que en el siguiente ejemplo el valor
    de la constante es igual a "Terrance" pero no un String.

    const nombreConst = "Terrance";

    cuando se define el tipo de dato en una variable y se quiere asignar un valor de otro tipo generará
    un error, caso distinto a JS ya que se puede admitir este tipo de cambios.

    en TS cuando se quiere que una variable almacene varios tipos de datos, despues de asignar el primer
    tipo se sigue de un pipe '|' y luego se añade el tipo de dato. en el siguiente ejemplo se interpreta
    como "la variable hp es de tipo number O de tipo string".

    let hp: number | string = 95;

*/

let nombre: string = 'Terrance';
let hp: number | string = 95;
let estaVivo: boolean = false;
hp = 'Full';
console.log(nombre, hp);

let pokemon: String = 'Pikachu';
let vida: number | string = 'Full';
let poder: number = 40;
let objeto: boolean = false;
console.log(nombre, vida, poder, objeto);
