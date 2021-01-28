import { Producto, calculaISV } from './06-desestructuracion-funcion';
/*
    cuando se importa y exporta se tiene el cuenta tanto el codigo que se esta importando como exportando,
    osea que ambos se ejecutan.
*/


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 150
    },
];

const [total, isv] = calculaISV(carritoCompras);

console.log('Total', total);
console.log('ISV', isv);
