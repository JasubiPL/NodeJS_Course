const fs = require("fs")

const crearArchivoTabla = async ( base = 5 ) =>{
  try{
    let salida = "";
    const header = `
  ======================
      Tabla del ${ base }
  ======================
  `
  
    for(let i = 1; i <= 10 ; i++){
      salida += `${ base } x ${i} = ${base * i}\n`;
      console.log( salida )
    }
    
    fs.writeFileSync(`tabla-${ base }.txt`, header + salida)
  
    return `tabla-${ base }.txt`
  } catch(err){
    throw err;
  }
}

module.exports = { crearArchivoTabla }