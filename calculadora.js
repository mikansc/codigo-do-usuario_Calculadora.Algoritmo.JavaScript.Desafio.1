function soma(a, b) {
  // Implemente a adição
  return a + b;
}

function subtracao(a, b) {
  // Implemente a subtração

  return a - b;
}

function divisao(a, b) {
  // Implemente a divisão
  // Lembre-se de retornar null se b for igual a 0

  if (b === 0) return null;
  return a / b;
}

function multiplicacao(a, b) {
  // Implemente a multiplicação

  return a * b;
}

console.log("Adição: " + soma(10, 5)); // Saída esperada: 15
console.log("Subtração: " + subtracao(10, 5)); // Saída esperada: 5
console.log("Divisão: " + divisao(10, 5)); // Saída esperada: 2
console.log("Divisão por zero: " + divisao(10, 0)); // Saída esperada: null
console.log("Multiplicação: " + multiplicacao(10, 5)); // Saída esperada: 50
