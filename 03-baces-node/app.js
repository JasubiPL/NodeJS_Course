const fs = require("fs")

console.clear();

const base = 5;
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

fs.writeFile(`tabla-${ base }.txt`, header + salida, ( err ) =>{
  if( err ) throw err;

  console.log( ` Tabla del ${ base } creada` )
})