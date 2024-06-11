function sayHello() {
  return "Hello World";
}
// assign a fn variable
let fn = sayHello;
fn();
sayHello();

// assign fn as param
function greet(fnMessage) {
  console.log(fnMessage);
}

greet(sayHello);

// return a function inside another fn
function sayHello2() {
  return function () {
    console.log("Hello again");
  };
}

let fn2 = sayHello2();
let message = fn2();

// higher order function: is fn that take fn as argument
// or return a fn
function greet2(fn) {
  console.log(fn());
}

function sayHello3() {
  return function () {
    console.log("Hello again");
  };
}

// map is example of HOF cuz it take fn as argument
let numbers = [1, 2, 3];
numbers.map((number) => number * 2);

// sitTimeOut is example of HOF cuz it take fn as argument
setTimeout(() => {
  console.log("hey");
}, 1000);

////// function composition:

// none functional way
let input = "      JavaScript     ";
let output = "<div>" + input.trim() + "</div>";

// functional way
const trim = (str) => str.trim();
const wrapInDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

// function composition
const result = wrapInDiv(trim(input)); // read from right to left
const result2 = wrapInDiv(toLowerCase(trim(input)));
