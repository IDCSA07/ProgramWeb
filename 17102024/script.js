document.title = 'Clase de javascript';
console.log(document.title);

const h1 = document.createElement('h1');
h1.textContent ="Mi texto desde JS";
document.body.appendChild(h1);
//------------
const parrafo = document.createElement('p');
parrafo.textContent = "Mi texto desde JS";
document.body.appendChild(parrafo);