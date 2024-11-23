//Faça um programa em Javascript que peça para o professor:
//- nome do aluno
//- nota 1
//- nota 2
//- nota 3
//- porcentagem de faltas
// se a media for >=7 E porcentagem de faltas for <25%, aluno aprovado
// se a media for <7 e >=5 E porcentagem de faltas for <25%, recuperação
//se a media for <5 OU faltas >=25% , aluno reprovado
// otimize a sua logica e faça um codigo elegante e limpo

var prompt = require('prompt-sync')();

// Solicita os dados 
let nomeAluno = prompt("Digite o nome do aluno:");
let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let nota3 = parseFloat(prompt("Digite a nota 3:"));
let faltas = parseFloat(prompt("Digite a porcentagem de faltas (%):"));

let media = (nota1 + nota2 + nota3) / 3;  // Calcula a média das notas

let situacao;  // Determina a situação do aluno
if (media >= 7 && faltas < 25) {
  situacao = "Aprovado";
} else if (media >= 5 && media < 7 && faltas < 25) {
  situacao = "Recuperação";
} else {
  situacao = "Reprovado";
}

console.log(
  "Aluno:"    + nomeAluno + "\n" +
  "Média:"    + media.toFixed(2) + "\n" +
  "Faltas:"   + faltas.toFixed(2) + "%\n" +
  "Situação:" + situacao
);

//switch case
switch(situacao){
  case'Aprovado':
  console.log('PARABÉNS!!!');
  break;
  case'Recuperação':
  console.log('Boa Sorte!');
  break;
  case'Reprovado':
  console.log('Que Pena!');
  break;
}