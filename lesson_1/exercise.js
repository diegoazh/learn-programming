/**
 * Exercise 1
 *
 * scope
 *   - variable declarations
 *   - use of if else or switch statement
 *   - use of validations
 *   - print messages on the console
 *   - cast of values
 *   - use of typeof
 *
 * Write a program that receives three numbers
 * and display in console the following messages
 *   - the number is odd or even
 *   - what of these three inputs is the biggest value
 *   - what of these three inputs is the lowest value
 *   - what is the sum of these three values
 *   - what is the average of these three values
 *
 * You can write you program above
 */

// receives three numbers
// const num1 = parseInt(prompt('insert a number')) // always string
// const num2 = parseInt(prompt('insert another number'))
// const num3 = parseInt(prompt('insert another number again'))
const userNumbers = []
let iteration = 1

while (iteration <= 3) {
  const number = parseInt(prompt(`insert the number ${iteration}`))
  userNumbers.push(number)

  iteration += 1
}

// check odd or even

// DRY = don't repeat yourself
// if (num1 % 2 === 0) {
//   console.info('the number is even');
// } else {
//   console.info('the number is odd');
// }

// if (num2 % 2 === 0) {
//   console.info('the number is even');
// } else {
//   console.info('the number is odd');
// }

// if (num3 % 2 === 0) {
//   console.info('the number is even');
// } else {
//   console.info('the number is odd');
// }

// arrow function => the same as anonymous function() {}

userNumbers.forEach((element) => {
  if (element % 2 === 0) {
    console.info(`the number ${element} is even`)
  } else {
    console.info(`the number ${element} is odd`)
  }
})

function checkBiggestOrLowestNumberInAnArray(arrayOfNumbers, biggest = true) {
  const theNumber = arrayOfNumbers.reduce((acc, num) => {
    if (!acc /* undefined, null, 0, false */) {
      return num
    }

    if (biggest && acc < num) {
      return num
    } else if (!biggest && acc > num) {
      return num
    }

    return acc
  }, 0)

  console.info(`the ${biggest ? 'biggest' : 'lowest'} number is: ${theNumber}`)
}

// checking the biggest number
// const biggestNumber = userNumbers.reduce((acc, num) => {
//   if (!acc /* undefined, null, 0, false */) {
//     return num;
//   }

//   if (acc < num) {
//     return num;
//   }

//   return acc;
// }, 0);

// console.info(`the biggest number is: ${biggestNumber}`);
checkBiggestOrLowestNumberInAnArray(userNumbers)

// checking the biggest number
// const lowestNumber = userNumbers.reduce((acc, num) => {
//   if (!acc /* undefined, null, 0, false */) {
//     return num;
//   }

//   if (acc > num) {
//     return num;
//   }

//   return acc;
// }, 0);

// console.info(`the lowest number is: ${lowestNumber}`);
checkBiggestOrLowestNumberInAnArray(userNumbers, false)

// sum and average of three numbers
// let sum = 0;
// for (let index = 0; index < userNumbers.length; index++) {
//   sum += userNumbers[index];
// }
// console.log(`the sum of three number is: ${sum}`);

const sum = userNumbers.reduce((acc, num) => acc + num, 0)
console.log(`the sum of three number is: ${sum}`)
console.log(`the average of the nums is: ${sum / userNumbers.length}`)

/**
 * Exercise 2
 *
 * scope
 *   - variable declarations
 *   - use of if else or switch statement
 *   - use of validations
 *   - print messages on the console
 *
 * Write a program that as the user its gender, after validate it
 * if the gender is male you should ask to him three more question
 * related to its gender, if the gender is a female you should ask
 * five questions about topics related or interesting for a woman.
 * In both cases you should ask the age of the participant and print
 * in the console a list with every question asked and answered for the user.
 *
 * You can write you program above
 */

//Ejercicio 2
let first
let second
let third
let fourth
let fifth
let age
let gender

do {
  gender = prompt('Ingrese su genero (m=masculino o f=femenino)')

  if (gender === 'm') {
    first = parseInt(prompt('Ingrese su estatura en cm'))
    second = parseFloat(prompt('Ingrese su peso en kg'))
    third = prompt('Deporte preferido')
    age = parseInt(prompt('Edad'))

    if (Number.isInteger(first)) {
      console.log(`La estatura ingresada fue : ${first}`)
    } else {
      console.error(`Usted no ingreso un numero valido para la altura`)
    }

    if (!Number.isNaN(second)) {
      console.log(`El peso ingresado fue: ${second}`)
    } else {
      console.error(`Usted no ingreso un numero valido para el peso`)
    }

    if (third.length >= 4) {
      console.log(`El deporte ingresado es: ${third}`)
    } else {
      console.error(`No existe ningun deporte con menos de 4 letras`)
    }

    if (Number.isInteger) {
      console.log(`La edad ingresada es: ${age}`)
    } else {
      console.error(`usted no ingreso un numero valido para la edad`)
    }
  } else if (gender === 'f') {
    first = parseInt(prompt('Ingrese su estatura en cm'))
    second = parseFloat(prompt('Ingrese su peso en kg'))
    third = prompt('Deporte preferido')
    fourth = prompt('Color preferido')
    fifth = prompt('Comida preferida')
    age = parseInt(prompt('Edad'))

    if (Number.isInteger(first)) {
      console.log(`La estatura ingresada fue : ${first}`)
    } else {
      console.error(`Usted no ingreso un numero valido para la altura`)
    }

    if (!Number.isNaN(second)) {
      console.log(`El peso ingresado fue: ${second}`)
    } else {
      console.error(`Usted no ingreso un numero valido para el peso`)
    }

    if (third.length >= 4) {
      console.log(`El deporte ingresado es: ${third}`)
    } else {
      console.error(`No existe ningun deporte con menos de 4 letras`)
    }

    if (fourth.length >= 3 && Number.isNaN(fourth)) {
      console.log(`El color preferido fue: ${fourth}`)
    } else {
      console.error(`usted ingreso un color con menos de tres caracteres o ingreso un numero`)
    }

    if (fifth.length >= 3 && Number.isNaN(fifth)) {
      console.log(`La comida ingresada fue: ${fifth}`)
    } else {
      console.error(`usted ingreso una comida con menos de tres caracteres o ingreso un numero`)
    }

    if (Number.isInteger) {
      console.log(`La edad ingresada es: ${age}`)
    } else {
      console.error(`usted no ingreso un numero valido para la edad`)
    }
  } else {
    console.error('el valor ingresado no fue m o f, por favor reintente...')
  }
} while (gender !== 'm' && gender !== 'f')

/**
 * Exercise 3 Bonus!!!
 *
 * Scope
 *   - investigates above our next class
 *   - repetitive structures
 *   - while, do while, for
 *
 * Write a program that simulate the game "EL AHORCADO"
 *   - In the program can participate two players
 *   - you ask one of the two participants for a word
 *   - you must store all letter that the participants inputs in the game
 *   - if the letter match with any letter of the word you print that letter
 *   - when any letter much with any letter of the word you print the name of
 *     every part of the body that you usually write in the paper whe someone fails
 *
 * You can write you program above
 */

// Santi's answer
// var a = ['']
// var b
// var i
// var c = 0
// var d
// var e
// var f
// b = prompt('Ingrese la cantidad de letras')
// for (i = 0; i < b; i++) {
//   a[i] = prompt('Ingrese cada una de las letras que componen las palabras')
// }
// do {
//   e = prompt('Ingrese una letra')
//   for (f = 0; f < b; f++) {
//     if (e === a[f]) {
//       c = c + 1
//       console.log('Letra acertada: ' + e)
//     }
//   }
// } while (c < b)
// console.log('Has ganado, la palabra es: ' + a)
