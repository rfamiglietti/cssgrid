
//Exercício 9: DESAFIO: Calculadora de Parcelas com Juros
//Solicite ao usuário o valor total da compra, o número de parcelas e a taxa de juros mensal. Calcule o valor de cada parcela, considerando a taxa de juros. Use parseFloat() para converter o valor total e a taxa de juros em números decimais, e parseInt() para o número de parcelas. Exiba o valor total, o número de parcelas, a taxa de juros e o valor de cada parcela.
//ATENÇÃO: VOCE DEVE PESQUISAR A FÓRMULA PRA CALCULAR PARCELAS COM JUROS

var prompt = require('prompt-sync')();

let valorTotal = parseFloat(prompt("Digite o valor total da compra (em reais):"));
let numeroParcelas = parseInt(prompt("Digite o número de parcelas:"));
let taxaJuros = parseFloat(prompt("Digite a taxa de juros mensal (em %):")) / 100;

// Calcula o valor de cada parcela usando a fórmula de financiamento
let valorParcela = (valorTotal * taxaJuros * Math.pow(1 + taxaJuros, numeroParcelas)) / 
                   (Math.pow(1 + taxaJuros, numeroParcelas) - 1);

// Calcula o valor total pago
let valorTotalPago = valorParcela * numeroParcelas;


console.log(
  "Valor Total: R$ " + valorTotal.toFixed(2) + "\n" +
  "Número de Parcelas: " + numeroParcelas + "\n" +
  "Taxa de Juros Mensal: " + (taxaJuros * 100).toFixed(2) + "%\n" +
  "Valor de Cada Parcela: R$ " + valorParcela.toFixed(2) + "\n" +
  "Valor Total Pago (com juros): R$ " + valorTotalPago.toFixed(2)
);

