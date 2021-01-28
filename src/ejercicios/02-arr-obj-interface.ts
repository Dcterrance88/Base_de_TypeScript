/*
    ===== Código de TypeScript =====

    ******* ARREGLOS *******

    * no es bueno declarar las variables o arreglos de tipo any, cuando es de este tipo acepta cualquier
    tipo de dato

    let habilidades = [1, 'dacota', false, [], {}];

    * cuando en un arreglo se declaran variables de un solo tipo le da a entender a TS que ese arreglo es de ese tipo
    y cuando se intenta ingresar un valor de distinto tipo TS lo interpreta como un error.

    let habilidades = ['bash', 'counter', 'healing'];

    habilidades.push(1); <- error

    * cuando se crea un arrelo con elementos de dos tipos de datos TS entiende que solo se pueden almacenar elementos
    de esos dos tipos de datos

    let habilidades = ['bash', 'counter', 'healing', 100]; <- almacena string o numeros

    habilidades.push(1); <- almacena el valor sin problema

    * para especificar los tipos de datos de un arreglo se realiza de la siguiente manera;

    let habilidades: (string | number | boolean)[] = ['bash', 'counter', 'healing', 100, false];

    * para que un arreglo soporte un solo tipo de dato se realiza de la siguiente manera

    let habilidades: string[] = ['bash', 'counter', 'healing'];
    *****************************************************************************************************************

    ******* OBJETOS *******

    cuando se declara un objeto literal con atributos de x tipo al igual que los arreglos, TS infiere su tipo
    y al intentar almacenar un valor que no coincide con el tipo declarado TS lo tomará como un error

    const personaje = {
        nombre: 'Chevchenko',
        hp: 100,
        habilidades: ['Slav', 'healing with vodka', 'Hard Bass']
    }

    personaje.nombre = 500; <- error.

    * no se pueden añadir propiedades cuando se inicializa un objeto a excepcion de colocarlo como tipo any
    (NO RECOMENDADO)

    const personaje:any = {
        nombre: 'Chevchenko',
        hp: 100,
        habilidades: ['Slav', 'healing with vodka', 'Hard Bass']
    }
    personaje.puebloNatal = 'Moscú';

    *Otra manera para trabajar con objeto es por medio de interfaces que son una serie de llaves para asegurar
    que un codigo sea como uno quiere, o en este caso como un objeto lusca como se desea. en el siguiente ejemplo
    el objeto literal sera de tipo Personaje y al querer añadir una propiedad se realiza en la interface, pero en
    el ejemplo siguiente daria un error ya que el atributo puebloNatal no esta dentro del objeto literal personaje
    asi que para corregirlo este atributo podra ser de tipo opcional '?' y asi se solucionaria el error

    interface Personaje{
        nombre: string;
        hp: number;
        habilidades: string[];
        puebloNatal?: string;
    }

    const personaje: Personaje = {
        nombre: 'Chevchenko',
        hp: 100,
        habilidades: ['Slav', 'healing with vodka', 'Hard Bass']
    }

    personaje.puebloNatal = 'Moscú';
*/

let superheroes = ['Superman', 'Batman', 'Acuaman'];

let cosas:(string | number)[] = ['carro', 1234, 'pato'];

interface Auto {
    marca: string;
    color: string;
    modelo: number;
    seguro?: boolean;
}

const escarabajo: Auto = {
    marca: 'VW',
    color: 'negro',
    modelo: 61,
}

escarabajo.seguro = true;

