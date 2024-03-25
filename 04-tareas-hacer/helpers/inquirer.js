import inquirer from "inquirer"
import ReadLine  from "readline"
import  Color  from "colors"

const preguntas = [
  {
    type: "list",
    name: "opcion",
    message: "¿Qué deseas hacer?",
    choices: [
      {
        value: "1",
        name: "1.Crear tarea"
      },
      {
        value: "2",
        name: "2.Listar tareas"
      },
      {
        value: "3",
        name: "3.Listar tareas completadas"
      },
      {
        value: "4",
        name: "4.Listar tareas pendintes"
      },
      {
        value: "5",
        name: "5.Completar tarea(s)"
      },
      {
        value: "6",
        name: "6.Borrar tarea"
      },
      {
        value: "0",
        name: "0.Salir"
      },
    ]
  }
]

export const inquirerMenu = async() =>{

  console.clear()
  console.log('==========================='.yellow)
  console.log('  Seleccione una opcion 📝');
  console.log('===========================\n'.yellow);

  const { opcion } = await inquirer.prompt(preguntas)

  return opcion
}

export const pausa = async () =>{

  const question = [
    {
      type: "input",
      name: "enter",
      message: `\nPrecione ${ 'ENTER'.green } para continuar`
    }
  ]

  await inquirer.prompt(question)

  
}