
/*
    la desestructuracion no es mas que extraer directamente ciertas propiedades que se desean de un objeto y
    crear variables (en este caso)

    const reproductor : Reproductor = {
        volumen: 90,
        segundo: 36,
        cancion: 'So Electric',
        detalles: {
            autor: 'LikeLife',
            anio: 2000,
        }
    }
    const {volumen, segundo, cancion, detalles} = reproductor;
    const { autor } = detalles;

    console.log('El volumen actual es de:', volumen);
    console.log('El segundo actual es de:', segundo);
    console.log('La cancion actual es de:', cancion);
    console.log('El autor es: ', autor);

    * otra forma de desestructurar un objeto anidado pero no recomendado es de la siguiente manera

    const {volumen, segundo, cancion, detalles:{autor} } = reproductor;

    * en la desesctructuracion de objetos la posicion es importante

    También se puede destructurar array's para evitar el "," por datos que no quieres, ejemplo:
    let nombres = ["David", "Erick", "Jean", "Jose"];

    Si quieres obtener cualquier valor del array, tener en cuenta que se hace mediante el índice que se encuentra el valor a destructurar (En este caso sacaré el valor de "Jean" que se encuentra en el índice 2)

    const { 2 : amigoJean } = nombres;
*/
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor : Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'So Electric',
    detalles: {
        autor: 'LikeLife',
        anio: 2000,
    }
}
// const {volumen, segundo, cancion, detalles:{autor} } = reproductor;
const {volumen, segundo, cancion, detalles} = reproductor;
const { autor } = detalles;

// console.log('El volumen actual es de:', volumen);
// console.log('El segundo actual es de:', segundo);
// console.log('La cancion actual es de:', cancion);
// console.log('El autor es: ', autor);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const {2: p3} = dbz;

// console.log('Personaje 1: ', p1);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);