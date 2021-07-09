//let contador = 0 ;
/************** ciclo while********************/
 
/*
while(contador <= 3){
    console.log(contador);
    contador++;
    
}
console.log("final del ciclo while");
*/



/******************************ciclo do while**********************************/
/*
do {console.log(contador);
    contador++
    
} while (contador < 3);
console.log("fin del ciclo")
*/

/*************************ciclo for*******************************************/
/*

for (let contador = 0; contador < 3; contador++) {
   console.log(contador);
    
}console.log("fin del ciclo");


for (contador = 0; contador <= 10; contador++) {
    if(contador % 2 == 0){
    console.log(contador);
    break;
    }
 }console.log("fin del ciclo for");

*/

inicio:
for (let contador = 0; contador <= 10; contador++) {
    if (contador%2 !== 0){
      continue inicio;//ir a la sgte iteracion
    }
        console.log(contador);
    
}