// Función para simular el lanzamiento de dos dados y contar las sumas
function simularLanzamientos() {
    // Inicializar un array para contar las sumas
    const sumas = Array(13).fill(0);

    // Realizar 50 lanzamientos
    for (let i = 0; i < 50; i++) {
        // Obtener números aleatorios entre 1 y 6 para cada dado
        const dado1 = Math.floor(Math.random() * 6) + 1;
        const dado2 = Math.floor(Math.random() * 6) + 1;

        // Calcular la suma de los dados
        const suma = dado1 + dado2;

        // Contar la suma
        sumas[suma]++;
    }

    // Crear una tabla para mostrar los resultados
    const tabla = document.createElement("table");
    const encabezado = tabla.createTHead();
    const filaEncabezado = encabezado.insertRow();
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    th1.textContent = "Suma de Dados";
    th2.textContent = "Cantidad de Apariciones";
    filaEncabezado.appendChild(th1);
    filaEncabezado.appendChild(th2);

    // Llenar la tabla con los resultados
    for (let i = 2; i <= 12; i++) {
        const fila = tabla.insertRow();
        const td1 = fila.insertCell();
        const td2 = fila.insertCell();
        td1.textContent = i;
        td2.textContent = sumas[i];
    }

    // Añadir la tabla al cuerpo del documento
    document.body.appendChild(tabla);
}

// Llamar a la función para simular lanzamientos
simularLanzamientos();