/*
    ===== Código de TypeScript =====

    * en una funcion cuando el error no es critico TS lo compila y muestra un posible resultado con
    su respectivo error

    function sumar(a, b) {
        return a + b;
    }

    const resultado = sumar('Fred'); <- error

    console.log(resultado);

    *Se recomienda tipar los valores ya que en el ejemplo anterior podria devolver una suma o concatenacion
    de strings, en el siguiente ejemplo se da a entender que es una suma de numeros especificando el tipo
    de su retorno

    function sumar(a: number, b: number) :number {
        return (a + b);
    }

    const sumarFlecha = (a: number, b:number):number =>{
    return a + b;
    }

    * En una funcion el orden de los argumentos es importante ya que si se ignora alguno puede producir un error

    function multiplicar (numero, otroNumero, base){
        return numero * base;
    }

    const resultado = multiplicar(10, 20);

    * es buena practica especificar los tipos de dato tanto de los argumentos como el tipo de retorno

    * los argumentos de una funcion pueden ser opcionales pero siempre van a tener un orden
        1. argumentos obligatorios.
        2. argumentos opcionales.
        3. argumentos con valores por defecto.

    function multiplicar (numero:number, otroNumero?:number, base:number = 2):number{
        return numero * base;
    }
 */

function sumar(a: number, b: number) {
    return (a + b).toString();
}

const sumarFlecha = (a: number, b:number):number =>{
    return a + b;
}

function multiplicar (numero:number, otroNumero?:number, base:number = 2):number {
    return numero * base;
}

const multiplicarFlecha = (numero:number, otroNumero?:number, base:number = 2):number =>{
    return numero * base;
}

interface PersonajeLOD {
    nombre:string;
    pv:number;
    mostrarHP: () =>void;
}

function curar(personaje:PersonajeLOD, curarX:number):void {
    personaje.pv += curarX;
    console.log(personaje);
}

const nuevoPersonaje:PersonajeLOD = {
    nombre: 'Sepran',
    pv: 50,
    mostrarHP() {
        console.log('puntos de vida ' +this.pv);
    }
}

curar(nuevoPersonaje, 30);
nuevoPersonaje.mostrarHP();