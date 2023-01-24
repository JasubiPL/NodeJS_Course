function saludar(nombre){
    return `Mi nombre es: ${nombre}`;
}

function saludarHolaMundo(){
    return 'Hola, Mundo ';
}

module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
}