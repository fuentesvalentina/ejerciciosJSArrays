/* Escribir el código de una función a la que se pasa
 como parámetro un número entero y devuelve como resultado 
 una cadena de texto que indica si el número es par o impar.
  Mostrar por pantalla el resultado devuelto por la función.
*/

const numero = prompt('Ingrese un número')
// Función para determinar si un número es par o impar
function determinarParidad(numero) {
    if (numero % 2 === 0) {
        return "El número es par.";
    } else {
        return "El número es impar.";
    }
}

// Llamar a la función y mostrar el resultado por pantalla
const resultado = determinarParidad(numero);
document.write(resultado);

