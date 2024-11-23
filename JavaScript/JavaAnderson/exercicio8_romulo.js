
//Exercício 8: Calculadora de Salário
//Solicite ao usuário o número de horas trabalhadas por semana e o valor da hora trabalhada. Calcule o salário semanal e o salário mensal, assumindo que o usuário trabalha 4 semanas por mês. Use parseFloat() para converter a entrada do valor da hora e parseInt() para o número de horas. Exiba o salário semanal e o salário mensal.

var prompt = require('prompt-sync')();

let horasPorSemana = parseInt(prompt("Digite o número de horas trabalhadas por semana:"));
let valorPorHora = parseFloat(prompt("Digite o valor da hora trabalhada (em reais):"));
let salarioSemanal = horasPorSemana * valorPorHora; // Calcula o salário semanal
let salarioMensal = salarioSemanal * 4;// Calcula o salário mensal (4 semanas por mês)

console.log(
  "Salário Semanal: R$ " + salarioSemanal.toFixed(2) + "\n" +
  "Salário Mensal: R$ " + salarioMensal.toFixed(2)
);
