function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4,5,6,7,8,9]);
let soyExplicito = queTipoSoy<number>(100);

/*
    el generico, le podemos decir a la hora de implementar en este caso la funcion que puedo recibir
    algo de tipo <T> que es un estandar para especificar que es un generico, puede ser del cualquier tipo
    y a la vez podemos decirle al argumento que es de tipo T

    asi que cuando analizamos el tipo de nuestras variables ya no seran de tipo ANY si no del tipo que
    le asigne a la funcion asi que si se le pasa un string sera de tipo string, etc,

    hay casos donde uno puede definir el tipo de retorno de una funcion generica, en este caso se llama
    y se especifica despues de llamarla colocandole el tipo de dato entre <tipo de dato> y dentro de ella
    se coloca el tipo de dato.
*/