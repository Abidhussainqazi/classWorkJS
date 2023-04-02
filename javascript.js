var age
age = 25
var name = "John"
var age = 25

// String
var name = "John"

// Boolean
var isMarried = true

// Null
var car = null

// Undefined
var bike

// Object
var person = { name: "John", age: 25 }
/*Arithmetic operators: +, -, *, /, %, etc.:
JavaScript supports various arithmetic operators, including addition (+), subtraction (-), multiplication (*), division (/), and modulus (%).*/

// Addition
var sum = 2 + 3;

// Subtraction
var difference = 5 - 2;

// Multiplication
var product = 2 \* 3;

// Division
var quotient = 10 / 2;

// Modulus
var remainder = 10 % 3;
/*Assignment operators: =, +=, -=, etc.:
Assignment operators are used to assign values to variables. JavaScript supports various assignment operators, including the equal (=) operator, addition assignment (+=) operator, and subtraction assignment (-=) operator.*/

// Equal operator
var x = 5

// Addition assignment operator
var y = 10
y += 5

// Subtraction assignment operator
var z = 10
z -= 3
/*Comparison operators: ==, ===,!=, !==, etc.:
Comparison operators are used to compare values in JavaScript. JavaScript supports various comparison operators, including the equal (==) operator, strict equal (===) operator, not equal (!=) operator, and strict not equal (!==) operator.*/

// Equal operator
var x = 5
if (x == 5) {
  console.log("x is equal to 5")
}

// Strict equal operator
var y = "5"
if (y === 5) {
  console.log("y is equal to 5")
} else {
  console.log("y is not equal to 5")
}

// Not equal operator
var z = 10
if (z != 5) {
  console.log("z is not equal to 5")
}

// Strict not equal operator
var a = "5"
if (a !== 5) {
  console.log("a is not equal to 5")
}
/*Logical operators: &&, ||, !:
Logical operators are used to combine multiple conditions in JavaScript. JavaScript supports various logical operators, including the AND (&&) operator, OR (||) operator, and NOT (!) operator.*/

// AND operator
var x = 5
var y = 10
if (x < 10 && y > 5) {
  console.log("Both conditions are true")
}

// OR operator
var z = 3
if (z < 5 || z > 10) {
  console.log("At least one condition is true")
}

// NOT operator
var a = true
if (!a) {
  console.log("a is not true")
}
/*Evaluating expressions and order of operations:
JavaScript follows the order of operations when evaluating expressions. Parentheses are used to specify the order of operations.*/

// Example expression
var result = (2 + 3) \* 4;
/*Conditional Statements:
If...else statements:
If...else statements are used to execute different code blocks based on a condition in JavaScript.*/

// Example if...else statement
var age = 18
if (age >= 18) {
  console.log("You are eligible to vote")
} else {
  console.log("You are not eligible to vote")
}
/*Switch statements:
Switch statements are used to execute different code blocks based on multiple conditions in JavaScript.*/

// Example switch statement
var day = "Monday"
switch (day) {
  case "Monday":
    console.log("Today is Monday")
    break
  case "Tuesday":
    console.log("Today is Tuesday")
    break
  default:
    console.log("Today is neither Monday nor Tuesday")
    break
}
/*Ternary operator:
The ternary operator is a shorthand way of writing an if...else statement in JavaScript.*/

// Example ternary operator
var age = 18
var message =
  age >= 18 ? "You are eligible to vote" : "You are not eligible to vote"
console.log(message)
/*Loops:
For loops:
For loops are used to execute code a specific number of times in JavaScript.*/

// Example for loop
for (var i = 0; i < 5; i++) {
  console.log(i)
}
/*For...in loops:
For...in loops are used to loop through the properties of an object in JavaScript.*/

// Example for...in loop
var person = { name: "John", age: 25 }
for (var prop in person) {
  console.log(prop + ": " + person[prop])
}
/*For...of loops:
For...of loops are used to loop through the elements of an array in JavaScript.*/

// Example for...of loop
var numbers = [1, 2, 3, 4, 5]
for (var number of numbers) {
  console.log(number)
}
/*While loops:
While loops are used to execute code as long as a condition is true in JavaScript.*/

// Example while loop
var i = 0
while (i < 5) {
  console.log(i)
  i++
}
/*Do...while loops:
Do...while loops are used to execute code at least once and then as long as a condition is true in JavaScript.*/

// Example do...while loop
var i = 0
do {
  console.log(i)
  i++
} while (i < 5)
/*Functions:
Defining and calling functions:
Functions are used to group code together and execute it multiple times in JavaScript.*/

// Example function
function greet(name) {
  console.log("Hello, " + name + "!")
}
greet("John")
greet("Jane")
/*Arguments and return values:
Functions can take arguments and return values in JavaScript.*/

// Example function with arguments and return value
function add(a, b) {
  return a + b
}
var result = add(2, 3)
console.log(result)
/*Function scope and closure:
Variables declared inside a function are only accessible inside that function in JavaScript. Closures allow functions to access variables from their parent functions.*/

// Example function with closure
function outer() {
  var x = 5
  function inner() {
    console.log(x)
  }
  return inner
}
var closure = outer()
closure()
/*Arrays:
Declaring and initializing arrays:
Arrays are used to store multiple values in JavaScript.*/

// Example array
var numbers = [1, 2, 3, 4, 5]
/*Accessing and modifying array elements:
Array elements can be accessed and modified using their index in JavaScript.*/

// Example accessing and modifying array elements
var numbers = [1, 2, 3, 4, 5]
console.log(numbers[0]) // Output: 1
numbers[0] = 10
console.log(numbers[0]) // Output: 10
/*Array methods: push, pop, shift, unshift, etc.:
Arrays have various built-in methods in JavaScript, including push(), pop(), shift(), and unshift().*/

// Example array methods
var numbers = [1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers) // Output: [1, 2, 3, 4, 5, 6]
numbers.pop()
console.log(numbers) // Output: [1, 2, 3, 4, 5]
numbers.shift()
console.log(numbers) // Output: [2, 3, 4, 5]
numbers.unshift(0)
console.log(numbers) // Output: [0, 2, 3, 4, 5]
/*Objects:
Declaring and initializing objects:
Objects are used to store key-value pairs in JavaScript.*/

// Example object
var person = { name: "John", age: 25 }
/*Accessing and modifying object properties:
Object properties can be accessed and modified using their key in JavaScript.*/

// Example accessing and modifying object properties
var person = { name: "John", age: 25 }
console.log(person.name) // Output: John
person.name = "Jane"
console.log(person.name) // Output: Jane
/*Understanding object-oriented programming in JavaScript:
Object-oriented programming is a programming paradigm that uses objects to represent real-world entities in code. JavaScript supports object-oriented programming through prototypes.*/

// Example object-oriented programming in JavaScript
function Person(name, age) {
  this.name = name
  this.age = age
}
Person.prototype.greet = function () {
  console.log("Hello, my name is " + this.name)
}

var person = new Person("John", 25)
person.greet()
/*DOM Manipulation & Event Handling:
Understanding the Document Object Model (DOM):
The Document Object Model (DOM) is a programming interface for web documents in JavaScript. It represents the HTML and XML documents as a tree of objects.

Selecting elements in the DOM:
Elements in the DOM can be selected using various methods in JavaScript, including getElementById(), getElementsByClassName(), and querySelector().*/

// Example selecting elements in the DOM
var elementById = document.getElementById("my-element")
var elementsByClass = document.getElementsByClassName("my-class")
var elementByQuery = document.querySelector(".my-selector")
/*Modifying element styles and content:
Elements in the DOM can be modified using their properties and methods in JavaScript, including style and innerHTML.*/

// Example modifying element styles and content
var element = document.getElementById("my-element")
element.style.backgroundColor = "red"
element.innerHTML = "Hello, world!"

/*Handling events such as clicks, hover, etc.:
Events in the DOM can be handled using event listeners in JavaScript, including click, mouseover, and keydown.*/

// Example handling events in the DOM
var element = document.getElementById("my-element")
element.addEventListener("click", function () {
  console.log("Element clicked!")
})
element.addEventListener("mouseover", function () {
  console.log("Mouse over element!")
})
element.addEventListener("keydown", function (event) {
  console.log("Key pressed: " + event.key)
})