// cacluladora.js

function validarNumeros(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || isNaN(a) || isNaN(b)) {
    throw new Error("Ambos parámetros deben ser valores numéricos válidos.");
  }
}

export function suma(a, b) {
  validarNumeros(a, b);
  return a + b;
}

export function resta(a, b) {
  validarNumeros(a, b);
  return a - b;
}

export function multiplicacion(a, b) {
  validarNumeros(a, b);
  return a * b;
}

export function division(a, b) {
  validarNumeros(a, b);
  if (b === 0) {
    throw new Error("No se puede dividir entre cero.");
  }
  return a / b;
}

export default function info() {
  return "Este módulo permite realizar operaciones básicas: suma, resta, multiplicación y división.";
}
