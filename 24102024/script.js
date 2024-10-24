//arreglo 
/**Tareas */
/*
let array = ["dato",1,Boolean];
console.log ("tamaño array:" + array.length);
console.log(array[3]);
console.log("nuevo tamaño de array: " + array.length);
console.log (array[3]);
*/

/*
let numero = 5;
let resultados = [];

for (let i = 0; i <= 6; i++) {
    resultados.push(`${numero} x ${i} = ${numero * i}`); 
}

for (let j = 0; j < resultados.length; j++) {
    console.log(`El número de multiplicación es: ${j}`);
    console.log(resultados[j]);
}


*/
/*
//Eliminar elementos de un array 
let array =["dato1","dato2","dato3"];
array.push("dato4");
console.log(array[3]);

//Eliminar 
array.splice(1,1);
console.log(array);
*/
function addItem() {
    const input = document.getElementById('itemInput');
    const inputValue = input.value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (inputValue === "") {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        listItem.innerHTML = `
            ${inputValue}
            <button class="btn btn-danger btn-sm" onclick="removeItem(this)">Eliminar</button>
        `;
        document.getElementById('itemList').appendChild(listItem);
        input.value = '';
    }
}

function removeItem(button) {
    button.parentElement.remove();
}

