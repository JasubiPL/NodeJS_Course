const os = require('os');

//Accedemos a la vercion del sistema operativo
console.log(os.type());

//Accedemos al directorio principal de SO
console.log(os.homedir());

//Accedemos al tiempo que se ha estado ejecutando el SO desde que se encendio en segundos
console.log(os.uptime());

//Accedemos a la informacion del usuario en un objeto
console.log(os.userInfo());