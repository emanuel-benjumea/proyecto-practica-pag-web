
let persona = {
    nombre: "juan",
    apellido: "lopez",
    email:"jlopez@mail",
    edad: 20,
    idioma:"es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    
    set lang(lang){
        this.idioma=lang.toUpperCase()
    },


    get nombreCompleto2(){
        return this.nombre + " " + this.apellido;
    }
}


/**************** metodo get********************/

console.log(persona.nombreCompleto2);

/************************metodo set */


console.log(persona.lang)

persona.lang = "en";
console.log(persona.lang);
console.log(persona.idioma);
