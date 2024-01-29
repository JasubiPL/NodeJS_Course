const { crearArchivoTabla } = require ("./helpers/multiplicar");

console.clear();

const [ , , tabla = "base=1"] = process.argv;
const [ , base = 1] = tabla.split("=")










// const base = 7;

crearArchivoTabla( base )
  .then( nombreArchivo => console.log(nombreArchivo, "Creado"))
  .catch(err => console.log(err));