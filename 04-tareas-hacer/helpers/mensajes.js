require('colors')

const mostrarMenu = async () =>{

  return new Promise( resolve =>{

    console.clear();

    console.log('==========================='.yellow)
    console.log('  Lista de tareas 📝');
    console.log('===========================\n'.yellow);
  
    console.log(`${'1.'.yellow} Crear tarea`);
    console.log(`${'2.'.yellow} Listar tareas`);
    console.log(`${'3.'.yellow} Listar tareas completadas`);
    console.log(`${'4.'.yellow} Listar tareas pendintes`);
    console.log(`${'5.'.yellow} Completar tarea(s)`);
    console.log(`${'6.'.yellow} Borrar tarea`);
    console.log(`${'0.'.yellow} Salir \n`);
  
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
  
    readline.question(`¿Qué deseas realizar?: ${'✍️(◔◡◔)'.yellow }\n `, (opt) =>{
  
      readline.close();
      resolve(opt)
    });

  })

}

const pausa = async () =>{
  return new Promise( resolve =>{
    const readline = readline.createInterface({
      input:process.stdin,
      output:process.stdout
    })

    readline.question(`\nPrecione ${ 'ENTER'.green } para continuar`, action =>{
      
      readline.close();
      resolve()
    })
  })

  
}

module.exports = {
  mostrarMenu,
  pausa
}