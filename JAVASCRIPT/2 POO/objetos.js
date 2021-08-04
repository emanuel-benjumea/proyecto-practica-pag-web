
let persona = {
    nombre: "juan",
    apellido: "lopez",
    email:"jlopez@mail",
    edad: 20,
    /*nombreCompleto: function(){this.nombre + this.apellido},
    nombreCompleto2: function(){
        return this.nombre + " " + this.apellido;
    }*/
}

/*
console.log(persona);
console.log(persona.nombreCompleto2())



let persona2= new Object ();
persona2.nombre="carlos";
persona2.direcion="calle 2";
persona2.tel="2312313";

console.log(persona2.nombre);



console.log(persona["apellido"]);
*/

/****************fot in */ 


/*

for (nombrepropiedad in persona){
    console.log(nombrepropiedad);
    console.log(persona[nombrepropiedad])
}*/

persona.tel= "2355";

console.log(persona);

delete persona.tel;
console.log(persona);


//concatenar cada valor de cada propiedad


console.log(persona.nombre+ ' '+ persona.apellido);

for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);



let personastring = JSON.stringify(persona);

console.log(personastring);