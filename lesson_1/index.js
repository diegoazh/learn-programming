/**
 * Sunday mar 28 2021 15:42
 * 
 * Lesson 1
 * 
 */

/**
 * Variable declarations and types
 * To declare a variable we can use
 * var (old style, is not recommended in all scenarios)
 * const (constants that means that when you assign a value it can change)
 * let (common variable you can reassign it with any value)
 * 
 * We have 3 primitive types
 * string eg 'hi'
 * number eg 2021
 * boolean eg true
 * 
 * In javascript we have an instruction to know the type of a variable eg:
 * typeof
 * 
 * we also have ones that are specific of javascript
 * undefined
 * null
 * Symbol('hi')
 * {} (object or also know as a literal object)
 */

// number
var a = 1;
var b = 0.3;

// string
var letter = 'a';
var username = 'John';

// boolean
var c = true;
var d = false;

// ES6
const x = 10;
let y = false;

console.info(typeof a);
console.info(typeof b);
console.info(typeof letter);
console.info(typeof username);
console.info(typeof c);
console.info(typeof d);



/**
 * If control structure
 * 
 * its syntax is if (condition) { // body } else {}
 * when the condition is true it execute the code inside the if body
 * else when the condition is false it executes the else body
 * 
 * You also can write
 * if (condition) {} else if (another condition) {}
 * 
 * the else if block is useful when you need to add another condition
 * to the validation statement before it executes the else block
 */
if (1+2 === 2) {
  console.log('uno mas uno es dos');
} else if (1+2 === 3) {
  console.log('uno mas uno es tres');
} else {
  console.log('no es dos')
}

const isSunday = true;

/**
 * Switch control structure
 * 
 * It is like a multiple instance of if else if else but you can write it
 * as cases of switch.
 * The switch syntax is:
 * 
 * switch (variableToEvaluate) {
 *   case condition:
 *     code to executes when the condition is true
 *     break; // this instruction is to indicates the interpreter that it can go out of the switch block
 *   case anotherCondition:
 *     code to executes if another condition is true
 *     break;
 *   default: // the behaviour of default is the same as the else block in the if statement
 *     code to executes if any condition is true;
 *     break;
 * } 
 */
switch (isSunday) {
  case 'hola':
  case 'chau':
  case 'hi':
  case 'bye':
    console.log('es un saludo');
  case true:
    console.log('es domingo');
    break;

  case false:
    console.log('es otro dia');
    break;

  default:
    console.log('el valor no es booleano');
    break;
}


/**
 * Web API function
 * 
 * prompt() is a function useful to allow the user to input information into the program
 * 
 * alert() is a function useful to display some information to the user and ensure that it was notified
 * 
 * console.log(), console.info(), console.error() are functions useful to display text in the console
 * of the browser, the terminal of your OS or the Node console.
 */

prompt('please type a number');

alert('something was wrong');

console.log('hello world!');
