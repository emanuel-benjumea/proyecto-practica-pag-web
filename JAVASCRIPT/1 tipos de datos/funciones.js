//declaracion de la funcion

//hoisting
//mifuncion(7, 7);

function mifuncion(a , b ){
    console.log("suma: "+(a+b));
}


mifuncion(2, 5);



function mifuncion2(a,b){
    return a + b;
    console.log(arguments.length);

}



let resultado = mifuncion2(2, 5);

console.log(resultado);

//funcion tipo exprecion;


let x = function (a, b){return a + b};
console.log(resultado = x(1, 2));

console.log(x(1,54));


//funciones self invoking


(function(a,b){
    console.log("ejecutando una funcion "+(a+ b));
})(3,4);

console.log(typeof mifuncion);

var funcion3 = mifuncion.toString();
console.log(funcion3);


//FUNCIONES FLECHA

let suma = function (a, b){return a + b};
console.log(resultado = suma(1, 2));
//                       
const funciontipoflecha = (a, b)=>a+b;
resultado=funciontipoflecha(4,4);

console.log(resultado);













