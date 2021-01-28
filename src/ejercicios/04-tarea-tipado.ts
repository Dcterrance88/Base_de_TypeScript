/*
    * No es comun ver objetos anidados dentro de las interfaces ya que puede crecer en complejidad, para estos casos
    se recomienda usar otra interface creando los atributos de ese objeto y luego añadiendo el objeto a la interface
    que tenia dicho objeto, pero en vez de colocar sus propiedades, solo se le coloca la referencia
*/

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main ST',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);