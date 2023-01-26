const { throws } = require('assert');
const fs = require('fs');

fs.readFile('02_modul_fs.html', 'utf-8', (err, contenido)=>{
    if(err){
        throw err; //Detiene la ejecucion del programa si hay algun error
        console.log(err);
    }
    else{
        console.log(contenido);
    }
});