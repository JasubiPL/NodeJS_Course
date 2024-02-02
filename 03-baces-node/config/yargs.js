const argv = require("yargs")
  .option('b',{
    alias:"base",
    type:"number",
    demandOption: true,
    describe: 'Es la tabla a multiplicar'
  })
  .option("l",{
    alias:"list",
    type:"boolean",
    default: false,
    demandOption: false,
    describe: 'Muestra la tabala en consola'
  })
  .option("h", {
    alias:"hasta",
    type:"number",
    default: 10,
    demandOption: false,
    describe:"Indica en que numero finalizara la tabla"
  })
  .check((argv, options) =>{
    if(isNaN(argv.b)){
      throw "La base tiene que ser un numero"
    }

    return true
  })
  .argv;

  module.exports = argv;