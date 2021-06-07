//let y const : 
/*  
let para declarar una variable
const para declarar una constante
*/

let nombre;
 nombre = "juan";
console.log(nombre);

//una vez asignado un valor no se puede modificar
const apellido ="perez";
//apellido ="perez";



let nombre_completo2 ="emanuel benjumea";
console.log(nombre_completo2);


let x,y;
x= 10;
y=20;

let h= x+y;
console.log(h);



let nombre_completo1="juan hoyos";
console.log(nombre_completo1);



/**********************operadores ***********************/

let a =3, b=2;
let z = a + b;
console.log("su suma es: "+z);

z=a-b;
console.log("su resta es: +z");

z=a+b;
console.log("su multiplicacion es: "+z);

z=a/b;
console.log("su divicion es: "+z);

z=a%b;
console.log("su residuo es: "+z);

z=a**b;
console.log("su expononente es: "+z);



/**********************operadores de incremento y decremento**********************/

//pre-incrmento 
z=++a;
console.log(z);
console.log(a);


//post incremento 
z=b++;
console.log(b);
console.log(z);

//pre-decremento
z=--a;
console.log(z);
console.log(a);

//post decremento
z=b--;
console.log(b);
console.log(z);


/*********************precedencia de operadores***********************/

a=3,b=2,c=1, d=4;

z=a*b+c/d;

console.log(z);

z=c+a*b/d;
console.log(z);



/***********************operador de asignacion***************/

/*  *= /= %=  */

a+=3;

console.log(a);

a -=2;
console.log(a);

/************************operaciones de comparacion*******************************/


a=3, b=2,c="3";


z= a==b;
console.log(z);

z=a==c;//se revisa el valor sin importar el tipo
console.log(z);


z=a===c;//se revisa el valor importando el tipo
console.log(z);


z=a != 2;//son distintos
console.log(z);

z=a != c;//son distintos
console.log(z);

z=a !== c;//son distintos
console.log(z);

a=3, b=2,c="3";


z=a<b;
console.log(z);
z=a>b;
console.log(z);


/************************ operadpr and************************/

a=5;
let val_min = 0, val_max = 10;

if(a>=val_min && a <= val_max){
    console.log("dentro de rango");
}
else{
    console.log("dentro de rango");
}

/**********************||or  si uno es true es verdadero**********************/ 
let vacaciones = false, dia_descanso=true;


if(vacaciones||dia_descanso){
    console.log("el puede asistir");
}
else{
    console.log("no puede asistiir");
}

/***************************ternario*******************/

let resultado=(3>2) ? "verdadero": "falso";

console.log(resultado);

let numero=110;
resultado=(numero%2 ==0)?"numero par": "numero inpar";

console.log(resultado);

/*****************convirtiendo un string a numero********************/

let minumero="10";

//console.log(typeof minumero);
let edad = Number(minumero);

console.log(typeof edad);
/*programa para votar */
if(edad>18){
    console.log("puede votar");
}
else{
    console.log("muy joven para votar");
}

/**programa para votar con ternario */

let votacion=(edad>=18)? "puede votar": "no puede votar";
console.log(votacion);



let minumero2= "18";


if( isNaN(minumero2)){
    console.log("no es numero")
}
else{
    if(edad>18){
        console.log("puede votar");
    }
    else{
        console.log("muy joven para votar");
    }
}

