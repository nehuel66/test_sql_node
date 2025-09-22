// app.js

import info, { suma, resta, multiplicacion, division } from "./calculadora";

// ✅ Función principal
function calcular(operacion, a, b) {
  try {
    let resultado;

    switch (operacion) {
      case "suma":
        resultado = suma(a, b);
        break;
      case "resta":
        resultado = resta(a, b);
        break;
      case "multiplicacion":
        resultado = multiplicacion(a, b);
        break;
      case "division":
        resultado = division(a, b);
        break;
      default:
        throw new Error("Operación no válida. Use: suma, resta, multiplicacion o division.");
    }

    console.log(`Resultado de la ${operacion}: ${resultado}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

console.log(info()); 

calcular("suma", 10, 5);
calcular("resta", 10, 5);
calcular("multiplicacion", 10, 5);
calcular("division", 10, 5);
calcular("division", 10, 0);   
calcular("suma", "a", 5);      
