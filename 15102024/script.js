//definicion de una funcion
/*
function hello(){
    console.log('Hola Clase');
    console.log('5IV7');
}

//llamada a la funcion 
hello();
hello();
hello();
hello();
*/
/*
function hello(){
    return 'Hola Clase';
}

const result = hello()

console.log(result);
*/

//funcion que retorne otra funcion
/*
function hello(){
    return function (){
        return 'hola soy la funcion 2';
    }
}

console.log(hello()());
*/
//funcion con parametros 
/*
function add(x){

    console.log(x);

}

add(5);*/
/*
multiparametros 
function add(x, y){
    console.log(x+y);
}
add(5,undefined)*/
//control de error en multiparametros
/*
function add(x,y){
    if (y===undefined){
        y=0
    }
    console.log(x+y);
}
add(5,undefined)*/

//parametro de tipo cadena
/*
function add (name){
    console.log('hola'+ name);
}
add("Clase JS");*/
//OBJETOS
/*
const user ={
    nombre:'alvarado',
    apellidoP:'Reyes',
    apellidoM:'Quiroz',
    edad:91,
    direccion:{
        calle:'Nicolas Bravo',
        no:598,
        colonia:'Narvarte',
        delegacion:'Los Pinos'
    },
    amigos:['Raul','Maria'],
    activo:true
}*/

//consola nombre completo 
//alert para indicar si esta activo
//consola edad
//alert calle no colonia delegacion
//consola amigos 


console.log("Juan Pérez Zetina");
alert("El usuario está activo");
console.log('edad: ', 25);
alert("Calle Reforma");
console.log("Carlos", "María", "Ana", "Luis");

