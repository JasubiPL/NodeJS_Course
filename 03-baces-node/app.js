const { crearArchivoTabla } = require ("./helpers/multiplicar");

console.clear();

const base = 7;

crearArchivoTabla( base )
  .then( nombreArchivo => console.log(nombreArchivo, "Creado"))
  .catch(err => console.log(err));