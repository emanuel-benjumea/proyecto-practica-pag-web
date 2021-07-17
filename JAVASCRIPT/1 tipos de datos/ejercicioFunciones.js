let resultado = sumartodo(5, 30, 10, 15, 10, 5, 15);

function sumartodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i];
    }
    return suma;
};
console.log(resultado);



//paso por valor

let x = 10;

function cambiarValor(a){
    a=20;

}
cambiarValor(x);
console.log(x);


//paso por referencia


const persona={
    nombre:"juan jose",
    apellido:"lopez"
}

function cambiarValorObjeto(p1) {
    p1.nombre="emanuel";
    p1.apellido="benjumea"
    
}

cambiarValorObjeto(persona);
console.log(persona);

