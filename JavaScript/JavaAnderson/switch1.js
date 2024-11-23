var prompt = require('prompt-sync')();

let bebida = parseFloat(prompt(`1.água
2.suco
3.refrigerante
4.café
Digite sua opção:`));

switch(bebida){
    case'1':
    console.log('Aqui está sua Água');
    break;
    case'2':
    console.log('Aqui está seu Suco');
    break;
    case'3':
    console.log('Aqui está seu Refrigerante');
    break;
    case'4':
    console.log('Aqui está seu Café');
    break;
  }

