const numero = 8;

// Implementación Imperativa
function tablaImperativa() {
    let resultados = [];
    for (let i = 1; i <= 10; i++) {
        resultados.push(`${numero} x ${i} = ${numero * i}`);
    }
    return resultados;
}

// Implementación Declarativa
const tablaDeclarativa = () => {
    return Array.from({ length: 10 }, (_, i) => `${numero} x ${i + 1} = ${numero * (i + 1)}`);
};

function mostrarResultados() {
    const resultadosImperativos = tablaImperativa();
    const resultadosDeclarativos = tablaDeclarativa();

    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <h2>Tabla del 8 - Imperativa</h2>
        <ul>
            ${resultadosImperativos.map(r => `<li>${r}</li>`).join('')}
        </ul>
        <h2>Tabla del 8 - Declarativa</h2>
        <ul>
            ${resultadosDeclarativos.map(r => `<li>${r}</li>`).join('')}
        </ul>
    `;
}

window.onload = mostrarResultados;
