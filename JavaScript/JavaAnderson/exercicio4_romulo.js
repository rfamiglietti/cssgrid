
//Exercício 2: Calculadora de Idade
//Solicite o ano de nascimento do usuário e calcule a idade dele no ano atual. Utilize parseInt() para converter a entrada do usuário em um número inteiro. Para obter o ano atual, use new Date().getFullYear(). O new Date() cria um novo objeto de data e hora com a data e hora atuais, e getFullYear() extrai o ano da data atual.  
//Exemplo:let anoatual = new Date().getFullYear()

var prompt = require('prompt-sync')();

let tempC = parseFloat(prompt("Digite a temperatura em Celsius:"));
let tempF = (tempC * 9 / 5) + 32; // Converte para Fahrenheit

console.log(`${tempC}°C equivale a ${tempF}°F.`);
