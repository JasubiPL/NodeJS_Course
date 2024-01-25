//procesos que se etan llevando acabo
console.log(process)

//procesos que se etan llevando acabo mas consisos
console.log(process.env)

//accedemos a los argumentos, al usar "argv" se convierte eb array y accedemos a su informacion con el numero de posicion
console.log(process.argv);
console.log(process.argv[3]);

//[node, app.js, 6, 7]
//  0      1     2  3 

//Podemos saber cuanta memoria se esta usando
console.log(process.memoryUsage());