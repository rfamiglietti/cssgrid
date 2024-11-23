
//Exercício 7: Calculadora de Parcelas sem juros
//Solicite ao usuário o valor total de uma compra e o número de parcelas. Calcule o valor de cada parcela, considerando que não há juros. Use parseFloat() para converter o valor total e parseInt() para o número de parcelas. Exiba o valor total, o número de parcelas e o valor de cada parcela.

var prompt = require('prompt-sync')();

let valorTotal = parseFloat(prompt("Digite o valor total da compra (em reais):"));
let numeroParcelas = parseInt(prompt("Digite o número de parcelas:"));

let valorParcela = valorTotal / numeroParcelas; // Calcula o valor de cada parcela

console.log(
  "Valor Total: R$ " + valorTotal.toFixed(2) + "\n" +
  "Número de Parcelas: " + numeroParcelas + "\n" +
  "Valor de Cada Parcela: R$ " + valorParcela.toFixed(2)
);

