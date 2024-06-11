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
