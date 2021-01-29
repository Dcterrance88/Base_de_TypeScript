/*
    Los decoradores sirven para cambiar las clases en momento en el que son definidas, es decir para cuando
    ya se angular o cualquier otra tecnologia que use estos decoradores, en el momento que este compilandolo
    o traduciendo a otra cosa, entoces va a extender internamente esas funcionalidades que nosotros estamos
    queriendo implementar.

    un decorador no es mas que una funcion, sirven para expandir o añadir funcionalidades especiales
*/

function classDecorator<T extends { new(...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    };
}

@classDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);