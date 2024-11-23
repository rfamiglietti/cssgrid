
//Exercício 1: Calculadora de Soma
//Solicite dois números ao usuário e calcule a soma deles. Use parseFloat() para converter a entrada do usuário de uma string para um número decimal, pois a função prompt() retorna uma string e precisamos de números para realizar operações matemáticas.

var prompt = require('prompt-sync')();

let numero1 =  prompt("Digite o primeiro número:");
let numero2 =  prompt("Digite o segundo número:"); 
let soma =  parseFloat (numero1) + parseFloat(numero2);

console.log(`A soma dos números é: ${soma}`);
