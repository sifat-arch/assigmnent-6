1. What is the difference between var, let, and const?

answer: var, let, and const are use for declare variables.there are some differences

Scoping:
var declaration are function-scoped or globally scoped.this means a var declare inside a function is only accessible within that function.if declared outside any function.it's globally accessible.var does not work with block scope.like if else or for loop.

let and const:
Both let and const are support block scope.this means they are only accessible withing the {} block code.outside curly braces {} they will not work.

Hoisting:
var:
var declarations are hoisted to the top of their scope and initialize with undefined.thats mean you can use var variable before initialization,but it will return undefine.

let and const:
let and const declarations are also hoisted to the top.but you cannot use them before initialize.They are placed in a temporal dead zone from the start of their block until their declaration.if you attempt to use them before initialization,result will be a referenceError.

Reassignment and Redeclaration:
var:
you can reassign and redeclar var like this
var x = 5;
x = 10;
var x = 15;

let and const:
let:
let variables can be reassigned but cannot be redeclared within the same scope.Redeclaring a let variable will result in a syntaxError.
const:
const does not support reassignment and redeclaration any of them.

2. What is the difference between map(), forEach(), and filter()?

both of them are array function.there are some differences

map():

- map transforms each element in an array and create a new array.it applies a function each element of the array.it does not change the main array.
- map returns a new array with updated value.

forEach():

- it also applies a function each element of an array.but is does not return anything.
- it does not change original array by default,but you can modify original array.
- It's primarily used for side effects, such as logging values, modifying elements in place, or interacting with the DOM.
  filter():
- filter creates a new array containing only the elements from the original array that satisfy a provided test condition.
- it returns only those values in an array, which are fulfill it's condition.
- it does not change the original array.

3. What are arrow functions in ES6?
   arrow function introduced in ES6.is provides a more concise syntax for writing function expressions in javascript.

arrow function look cleans an short compared to traditional function
function functionName () {
return something
}

const functionName = () =>

arrow function support implicit return.it means if the function body is single lined,there are no need fo return keyword.Return keyword only need if the function body is multiline,and inside the curly braces.
Arrow functions cannot be used as constructor functions with the new keyword.
Arrow functions do not create their own this.It uses the this from the surrounding lexical scope.So, in an arrow function, this is not dynamic like in a regular function.

4. How does destructuring assignment work in ES6?

Destructuring assignment in ES6 is a JavaScript expression that allows for the extraction of data from arrays and objects into distinct variables.It provides a more concise and readable syntax compared to traditional methods
syntax:
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;

firstColor is "red", secondColor is "green", thirdColor is "blue"

you can assign new variable nama using : colon,
const [firstColor:prothomTa, secondColor:porarTa, thirdColor:tarPorarTa] = colors;

firstColor,secondColor,thirdColor will not work.if you use them.you will get undefine.

destructuring works with both array and object.
there is an example of object destructuring
const person = { name: "Alice", age: 30 };
const { name, age } = person;

5.  Explain template literals in ES6. How are they different from string concatenation?  
    Template literals, introduced in ES6, provide a more flexible and readable way to work with strings in JavaScript compared to traditional string concatenation.
    Template literals are strings enclosed in backticks (`` ` ``) instead of single or double quotes like this ("").They offer enhanced features.

template literals allows embedding expressions means you can use variables directly within the string like this, `${variable}`.
you can insert variables,function calls or any valid JavaScript expression directly into your string without breaking out of the string or using concatenation operators.
Template literals can span multiple lines without needing special escape characters like \n for line breaks, improving readability for longer text blocks, such as HTML or complex messages.

syntax:
Traditional way:
const name = "Alice";
const greetingConcat = "Hello, " + name + "!";

     Template Literal:
    const greetingTemplate = `Hello, ${name}!`;

    see! it's more simple and easy to use then traditional way.
