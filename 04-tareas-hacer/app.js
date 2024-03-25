import { inquirerMenu, pausa } from './helpers/inquirer.js';
import  Color  from 'colors';

// const { mostrarMenu, pausa } = require('./helpers/mensajes');


console.clear();

const main = async() =>{

  console.log("Hola Mundo");

  let opt = ""

  do{
    opt = await inquirerMenu();
    console.log(opt)

    await pausa();

  }while( opt !== '0');
  
}

main();

