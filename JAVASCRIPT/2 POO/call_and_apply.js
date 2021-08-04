let persona1={
    nombre: "emanuel",
    apellido:"benjumea",
    nombreCompleto:function(titulo, tel){
        return titulo+ " " +this.nombre +" "+this.apellido+" "+ tel;
    }
}

let persona2={
    nombre:"juan",
    apellido:"lopez"
}

console.log(persona1.nombreCompleto());


console.log(persona1.nombreCompleto.call(persona2, "ing.sistemas", "231231231"))



//apply




let persona3={
    nombre: "daniela",
    apellido:"lopez",
    nombreCompleto:function(tituilo, tell){
        return tituilo+" "+ this.nombre +" "+this.apellido+ ""+ tell;
    }
}


let persona4={
    nombre:"manuela",
    apellido:"garcia"
}




console.log(persona3.nombreCompleto("hola"," 123123"));

let arreglo=["ing", "1234"];
console.log(persona3.nombreCompleto.apply(persona4, arreglo));
