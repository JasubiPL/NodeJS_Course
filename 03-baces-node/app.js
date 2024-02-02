const { crearArchivoTabla } = require ("./helpers/multiplicar");
const argv = require("./config/yargs.js")
  

console.clear();
  
  
crearArchivoTabla( argv.b, argv.l, argv.h )
.then( nombreArchivo => console.log(nombreArchivo, "Creado"))
.catch(err => console.log(err));



  
  // const [ , base = 1] = tabla.split("=")
  // const [ , , tabla = "base=1"] = process.argv;