
//Exercício 6: Calculadora de Desconto
//Solicite ao usuário o nome do produto, o preço original e a porcentagem de desconto. Calcule o valor do desconto e o preço final após o desconto. Use parseFloat() para converter o preço e a porcentagem em números decimais. Exiba o nome do produto, o preço original, o valor do desconto e o preço final.

var prompt = require('prompt-sync')();

let nomeProduto = prompt("Digite o nome do produto:");
let precoOriginal = parseFloat(prompt("Digite o preço original do produto (em reais):"));
let porcentagemDesconto = parseFloat(prompt("Digite a porcentagem de desconto:"));
let valorDesconto = (precoOriginal * porcentagemDesconto) / 100; // Calcula o valor do desconto
let precoFinal = precoOriginal - valorDesconto;// Calcula o preço final após o desconto

console.log(

  "Produto: " + nomeProduto + "\n" +
  "Preço Original: R$ " + precoOriginal.toFixed(2) + "\n" +
  "Desconto (" + porcentagemDesconto + "%): R$ " + valorDesconto.toFixed(2) + "\n" +
  "Preço Final: R$ " + precoFinal.toFixed(2)
  // toFixed(2): Garante que os valores tenham duas casas decimais.
);
