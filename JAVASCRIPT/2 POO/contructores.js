
//funcion contructor de tipo persona
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido= apellido;
    this.email =email;

    this.nombreCompleto= function(){
        return this.nombre+" "+this.apellido;
    }
}


let padre = new Persona("emanuel", "bejumea", "eb@mail");

//console.log(padre.nombreCompleto());

let madre = new Persona("nicol", "quintero","nb@mail");
//console.log(madre.nombreCompleto());

padre.nombre= "ema";

console.log(padre );





//simplicado



let miObjeto = new Object();
let miObjeto2 = {};

let micadena1= new String("hola");
let micadena2="hola";

let minumero= new Number(1);
let minumero2= 1;
//agregando mas cosas al objeto

padre.telefono="5342232";
console.log(padre.telefono);


