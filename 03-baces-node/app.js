console.clear();
console.log(
  `=====================
Tabla del ${ base }
======================`
)

const base = 3;

for(let i = 1; i <= 10 ; i++){
  console.log(`${ base } x ${i} = ${base * i}`);
}