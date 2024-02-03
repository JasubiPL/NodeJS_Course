require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear();

const main = async() =>{

  let action = '';
  console.log(action);

  do{
    action = await mostrarMenu();
    if (action !== '0') {
      await pausa()
    } else{
      console.log(`\n Hasta Luego ${'(^◡^)✌️'.yellow}\n`)
    };

  }while( action !== '0');
  
}

main();