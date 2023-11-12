/*Solicitar por pantalla al usuario ingresar
 el valor de los lados de un rectángulo, luego crear
  una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
 */

// Función para calcular el perímetro del rectángulo
function calcularPerimetro(a, b) {
    return 2 * (a + b);
}

// Solicitar al usuario ingresar los lados del rectángulo
const ladoA = parseFloat(prompt("Ingrese la longitud del lado A del rectángulo:"));
const ladoB = parseFloat(prompt("Ingrese la longitud del lado B del rectángulo:"));

// Verificar que se ingresaron valores válidos
if (isNaN(ladoA) || isNaN(ladoB)) {
    document.write("Por favor, ingrese valores numéricos válidos.");
} else {
    // Calcular el perímetro y mostrarlo por pantalla
    const perimetro = calcularPerimetro(ladoA, ladoB);
    document.write("El perímetro del rectángulo es: " + perimetro);
}