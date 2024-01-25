function mostrarTema(tema){
    console.log(`Estoy aprendiendo ${tema}`);
}

//setTimeout(mostrarTema, 2000, 'Node.js');

//console.log('Antes de setInmediate');
//setImmediate(mostrarTema,'Node.js');
//console.log('Despues de setInmediate');

let segundosTranscurridos = 0;
function timer(){
    segundosTranscurridos += 1;

    console.log(`An pasado ${segundosTranscurridos} seg`);
}

setInterval(mostrarTema, 2000, 'Node.js');
setInterval(timer, 1000);