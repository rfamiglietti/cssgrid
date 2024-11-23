
//Exercício 2: Calculadora de Idade
//Solicite o ano de nascimento do usuário e calcule a idade dele no ano atual. Utilize parseInt() para converter a entrada do usuário em um número inteiro. Para obter o ano atual, use new Date().getFullYear(). O new Date() cria um novo objeto de data e hora com a data e hora atuais, e getFullYear() extrai o ano da data atual.  
//Exemplo:let anoatual = new Date().getFullYear()

var prompt = require('prompt-sync')();

let nomeProduto = prompt("Digite o nome do produto:");
let precoUnitario = parseFloat(prompt("Digite o preço unitário do produto (em reais):"));
let quantidade = parseFloat(prompt("Digite a quantidade comprada:")); 
let valorTotal = precoUnitario * quantidade; // Calcula o valor total sem imposto
let imposto = valorTotal * 0.18; // Calcula o valor do imposto (18%)
let valorTotalComImposto = valorTotal + imposto; // Calcula o valor total com imposto

console.log(
  "Produto: " + nomeProduto + "\n" +
  "Preço Unitário: R$ " + precoUnitario.toFixed(2) + "\n" +
  "Quantidade:" + quantidade + "\n" +
  "Imposto (18%): R$ " + imposto.toFixed(2) + "\n" +
  "Valor Total com Imposto: R$ " + valorTotalComImposto.toFixed(2)
  // toFixed(2): Garante que os valores tenham duas casas decimais.
);
