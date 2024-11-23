
//Exercício 3: Calculadora de Diferença
//Solicite dois números ao usuário e calcule a diferença entre o maior e o menor número. Use parseFloat() para converter as entradas em números decimais.

var prompt = require('prompt-sync')();

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let diferenca = Math.abs(numero1 - numero2); // Calcula a diferença com a resposta sempre positiva

console.log(`A diferença entre os números é: ${diferenca}`);
