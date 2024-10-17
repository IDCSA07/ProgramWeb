document.title = 'INICIAR SESION';

// CREAR EL CONTENEDOR PRINCIPAL PARA EL FORMULARIO
const container = document.createElement('div');
container.style.margin = '20px';

// Crear título
const title = document.createElement('h1');
title.textContent = 'Iniciar sesión';
container.appendChild(title);

// Crear el formulario
const form = document.createElement('form');

// Crear campo de nombre de usuario
const usernamelabel = document.createElement('label');
usernamelabel.textContent = 'Nombre de usuario: ';
const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);

// Crear campo de contraseña
const passwordLabel = document.createElement('label');
passwordLabel.textContent = 'Contraseña: ';
const passwordInput = document.createElement('input');
passwordInput.type = "password"; // Aquí está la corrección
passwordInput.required = true;
form.appendChild(passwordLabel);
form.appendChild(passwordInput);

// Crear botón de envío
const submitButton = document.createElement('button');
submitButton.textContent = 'Iniciar sesión';
form.appendChild(submitButton);

// Mensaje de respuesta
const message = document.createElement('p');
container.appendChild(form);
container.appendChild(message);

// Agregar el contenedor al cuerpo del documento
document.body.appendChild(container);

// Datos de inicio de sesión predefinidos
const validaUser = 'juanito';
const validaPassword = '2589';

// Validar el usuario y la contraseña
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validar el nombre de usuario y la contraseña
    if (usernameInput.value === validaUser && passwordInput.value === validaPassword) {
        message.textContent = '¡Bienvenido!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Nombre de usuario o contraseña incorrectos.';
        message.style.color = 'red';
    }

    //limpiar los input 
    usernameInput.value= '';
    usernameInput.value= '';
});
