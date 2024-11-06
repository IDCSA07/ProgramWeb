// Crear contenedor principal
const app = document.getElementById('app');
const mainContainer = document.createElement('div');

app.appendChild(mainContainer);

// Función para crear el formulario
const createForm = () => {
    const form = document.createElement('form');

    // Campo para el nombre
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Nombre';
    nameInput.required = true;
    form.appendChild(nameInput);

    // Campo para la ocupación
    const occupationInput = document.createElement('input');
    occupationInput.type = 'text';
    occupationInput.placeholder = 'Ocupación';
    occupationInput.required = true;
    form.appendChild(occupationInput);

    // Selector de color
    const colorInput = document.createElement('input');
    colorInput.type = 'color';
    form.appendChild(colorInput);

    // Botón de guardar
    const saveButton = document.createElement('button');
    saveButton.type = 'button';
    saveButton.innerText = 'Guardar';
    saveButton.style.cursor = 'pointer';

    // Evento para crear tarjeta
    saveButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const occupation = occupationInput.value.trim();
        const color = colorInput.value;

        if (name && occupation) {
            createCard(name, occupation, color);
            form.reset(); // Limpiar el formulario
        }
    });

    form.appendChild(saveButton);
    mainContainer.appendChild(form);
};

// Función para crear una tarjeta
const createCard = (name, occupation, color) => {
    const card = document.createElement('div');
    card.style.backgroundColor = color;
    card.style.padding = '20px';
    card.style.borderRadius = '8px';
    card.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
    card.style.marginTop = '10px';

    // Añadir el nombre y ocupación
    const nameElement = document.createElement('h3');
    nameElement.innerText = name;
    nameElement.style.margin = '0';

    const occupationElement = document.createElement('p');
    occupationElement.innerText = occupation;
    occupationElement.style.margin = '5px 0';

    // Botón de eliminar
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar';
    deleteButton.style.marginTop = '10px';
    deleteButton.style.padding = '5px 10px';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '5px';
    deleteButton.style.cursor = 'pointer';
    deleteButton.style.backgroundColor = '#f44336';
    deleteButton.style.color = '#fff';

    deleteButton.addEventListener('click', () => {
        mainContainer.removeChild(card);
    });

    // Agregar elementos a la tarjeta
    card.appendChild(nameElement);
    card.appendChild(occupationElement);
    card.appendChild(deleteButton);

    // Añadir la tarjeta al contenedor principal
    mainContainer.appendChild(card);
};

// Llamada a la función para crear el formulario
createForm();
