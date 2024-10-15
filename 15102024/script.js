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

function add(x, y){
    console.log(x+y);
}
add(5,10)