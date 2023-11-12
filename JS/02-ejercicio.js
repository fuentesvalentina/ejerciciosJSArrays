/*Crear un script que solicite al usuario mediante un prompt 
el nombre de ciudades y almacenarlas en un arreglo, cuando el
 usuario selecciona cancelar se debe mostrar el arreglo generado,
 luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/
// Declarar variables 
const ciudades = [];

// Iniciar el proceso solicitando ciudades al usuario
solicitarCiudad();

// Declarar funciones
function solicitarCiudad() {
    let ciudad = prompt("Ingrese el nombre de una ciudad:");
    
    if (ciudad === null) {
        mostrarInformacion();
    } else {
        ciudades.push(ciudad);
        solicitarCiudad();
    }
}

function mostrarInformacion() {
    document.write(`El arreglo de ciudades tiene ${ciudades.length} elementos`)
    document.write(`<p>Elemento 1er posición: " ${ciudades[0]}"</p>`);
    document.write(`<p>Elemento 3er posición: " ${ciudades[2]}"</p>`);
    document.write(`<p>Elemento en la última posición: " ${ciudades[ciudades.length - 1]}"</p>`);
}

document.write(`<h2>Lista de ciudades</h2>`);
document.write(`<ul>`);
for(let indiceCiudades = 0; indiceCiudades < ciudades.length; indiceCiudades++){
    document.write(`<li>Elemento: ${ciudades[indiceCiudades]}</li>`)
}
document.write(`</ul>`);
