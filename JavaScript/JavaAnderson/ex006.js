
//iportando a biblioteca prompt
var prompt = require('prompt-sync')();

var nome = prompt('Digite seu nome:');
var horario = prompt('É manha, tarde ou noite?');

if(horario == 'manha' ||horario == "tarde" ||horario == "noite" );
{
    if(horario = 'manha' ) {console.log (`Bom Dia, ${nome}`)}
    if(horario = 'tarde' ) {console.log (`Boa Tarde, ${nome}`)}
    if(horario = 'noite' ) {console.log (`Boa noite, ${nome}`)}
}
