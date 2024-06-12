import { compose, pipe } from "lodash/fp";

////// function composition:

// none functional way
let input = "      JavaScript     ";
let output = "<div>" + input.trim() + "</div>";

// functional way
const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`; // use currying
const toLowerCase = (str) => str.toLowerCase();

// function composition
const result = wrapInDiv(trim(input)); // read from right to left
const result2 = wrapInDiv(toLowerCase(trim(input)));

// using lodash
const transform = compose(wrap, toLowerCase, trim); // HO fn, right to left
const transform2 = pipe(trim, toLowerCase, wrap("div")); // HO fn, left to right
const transform3 = pipe(trim, toLowerCase, wrap("span")); // HO fn, left to right
transform(input); // hof
transform2(input); // hof
console.log(transform2(input));

////// pure function:

// not pure fn
function myFn(number) {
  return number * Math.random();
}

// pure fn
function myFn2(number) {
  return number * 2;
}

// Benefits of pure fn:
// 1. self documenting
// 2. easily testable
// 3. concurrency
// 4. cacheable

// string are immutable
let name = "Hussain";
let newName = name.toUpperCase(); // new string

// object and array not immutable
let book = {};
book.title = "red moon";

// immutability benefits:
/**1. predictability
 * 2. faster change detection
 * 3. concurrency
 *
 */

//// updating object:
// 1. object.assign({}, obj, {});
const updated = Object.assign({}, person, { age: 22, name: "Hamim" });

// 2. spread operator
const person2 = { name: "Hussain" };
const updated2 = { ...person2, name: "hamim", age: 22 };
