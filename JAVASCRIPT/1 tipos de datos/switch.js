let numero = 5;

let numerotexto="valor desconocido";

switch(numero ){
    case 1:
        numerotexto ="numero 1";
        break;
    case 2:
        numerotexto ="numero 2";
        break;
    case 3:
        numerotexto="numero 3";
        break;
    case 4:
        numerotexto="numero 4";
        break;
    default:
        numerotexto="caso no encontrado";
        break;
    
}

console.log(numerotexto);


let mes = 4;
let mesaño= "mes";


switch(mes){
    case 1:
        mesaño="enero";
        break;
    case 2:
        mesaño="febrero";
        break;
    case 3:
        mesaño="marzo";
        break;
    case 4:
        mesaño="abril";
        break;
    case 5:
        mesaño="mayo";
        break;
    case 6:
        mesaño="junio";
        break;
    case 7:
        mesaño="julio";
        break;
    case 8:
        mesaño="agosto";
        break;
    case 9:
        mesaño="septiembre";
        break;
    case 10:
        mesaño="octubre";
        break;
    case 11:
        mesaño="noviembre";
        break;
    case 12:
        mesaño="diciembre";
        break;
    default:
        mesaño="por favor ingrese un numero de 1 a 12 para determinar el mes";
    
}

console.log(mesaño);



let mess = 8;
let estacion = "estacion desconocida";

switch( mess ){
    case 1: case 2: case 12:
        estacion = "invierno";
        break;
    case 3: case 4: case 5:
        estacion = "primavera";
        break;
    case 6: case 7: case 8:
        estacion = "verano";
        break;
    case 9: case 10: case 11:
        estacion = "otoño";
        break;
    default:
        estacion = "su estacion no esxite";

}

console.log(estacion);