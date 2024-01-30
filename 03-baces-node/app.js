const { crearArchivoTabla } = require ("./helpers/multiplicar");
const argv = require("yargs")
  .option('b',{
    alias:"base",
    type:"number",
    demandOption: true
  })
  .option("l",{
    alias:"list",
    type:"boolean",
    default: false,
    demandOption: false
  })
  .check((argv, options) =>{
    if(isNaN(argv.b)){
      throw "La base tiene que ser un numero"
    }

    return true
  })
  .argv;

  
  
  console.clear();
  
  console.log(argv)
  
  
  crearArchivoTabla( argv.b, argv.l )
  .then( nombreArchivo => console.log(nombreArchivo, "Creado"))
  .catch(err => console.log(err));



  
  // const [ , base = 1] = tabla.split("=")
  // const [ , , tabla = "base=1"] = process.argv;