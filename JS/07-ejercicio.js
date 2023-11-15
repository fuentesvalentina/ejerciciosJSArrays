/*Escriba un script que muestre la tabla de 
multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y
 mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
 */

 function mostrarTablaMultiplicar(numero) {
    document.write("<h2>Tabla de Multiplicar del " + numero + "</h2>");
    document.write("<table border='1'>");
    document.write("<tr><th>Multiplicación</th><th>Resultado</th></tr>");

    for (let i = 1; i <= 10; i++) {
        const multiplicacion = numero + "x" + i;
        const resultado = numero * i;
        document.write("<tr><td>" + multiplicacion + "</td><td>" + resultado + "</td></tr>");
    }

    document.write("</table>");
}

// Solicitar al usuario ingresar un número
const numeroIngresado = parseFloat(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));

// Verificar que se ingresó un valor numérico
if (isNaN(numeroIngresado)) {
    document.write("Por favor, ingrese un número válido.");
} else {
    // Llamar a la función para mostrar la tabla de multiplicar
    mostrarTablaMultiplicar(numeroIngresado);
}
