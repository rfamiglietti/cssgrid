
//iportando a biblioteca prompt
var prompt = require('prompt-sync')();

var nome = prompt('Digite seu nome:');
var horario = prompt('É manha, tarde ou noite?');

if(horario != 'tarde' &&horario != "manha" &&horario != "noite" )
    { 
    console.log (`OPCAO INVALIDA`)
}

else if(horario = 'manha' )
    { 
    console.log (`Bom Dia, ${nome}`)
}

else if (horario = 'tarde' )
    {
    console.log (`Boa Tarde, ${nome}`)
}

else if (horario = 'noite' )
    {
    console.log (`Boa noite, ${nome}`)
}

