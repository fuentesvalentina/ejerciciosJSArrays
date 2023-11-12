/* Definir una función que muestre información sobre 
una cadena de texto que se le pasa como argumento.
 A partir de la cadena que se le pasa, la función determina 
 si esa cadena está formada sólo por mayúsculas, sólo por minúsculas
  o por una mezcla de ambas.
 */

  const cadena = prompt('Ingrese una cadena')

  // Función para mostrar información sobre una cadena de texto
  function analizarCadena(cadena) {
      if (cadena === cadena.toUpperCase()) {
          document.write("La cadena está formada solo por mayúsculas.");
      } else if (cadena === cadena.toLowerCase()) {
          document.write("La cadena está formada solo por minúsculas.");
      } else {
          document.write("La cadena es una mezcla de mayúsculas y minúsculas.");
      }
  }
  
  // Llamar a la función 
  analizarCadena(cadena);
  