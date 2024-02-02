const fs = require("fs")
const colors = require("colors")

const crearArchivoTabla = async ( base = 5, list, hasta ) =>{
  try{
    let salida = "";
    const header = `
======================
    Tabla del ${ base }
======================
  `
  
    for(let i = 1; i <= hasta ; i++){
      salida += `${ base } ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
    }
    
    if(list){
      console.log('======================')
      console.log(`Tabla del ${ base }`)
      console.log('======================')
      console.log(salida)
    }
    
    fs.writeFileSync(`tabla-${ base }.txt`, header + salida)
  
    return `tabla-${ base }.txt`
  } catch(err){
    throw err;
  }
}

module.exports = { crearArchivoTabla }