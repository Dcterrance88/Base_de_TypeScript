/*
    encadenamiento opcional
    el simbolo de '?' de un atributo en una clase o interface significa que esa propiedad es opcional

    en el caso de la funcion podemos colocar '?' para que intente evaluar los hijos y se interpretaria
    de la siguiente forma "si los hijos tienen algun valor, haz lo que sigue" en este caso no tira error
    y lo que devolvera sera un undefined pero si no queremos que devuelva undefined podemos encadenar
    con el operador logico or !! interpretandose como "si hijos es undefined regresa (en este caso y ejemplo) 0"

    function imprimeHijos(pasajero: Pasajero):void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

*/

interface Pasajero {
    nombre:string;
    hijos?:string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fabian'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Natalia', 'Gabriel']
}

function imprimeHijos(pasajero: Pasajero):void {
    const cuantosHijos = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);