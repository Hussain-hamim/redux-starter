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
const person = { name: "Hussain" };
const updated = Object.assign({}, person, { age: 22, name: "Hamim" });

// 2. spread operator
const person2 = { name: "Hussain" };
const updated2 = { ...person2, name: "hamim", age: 22 };

const person3 = {
  name: "Hussain",
  address: {
    country: "Afghanistan",
    city: "Khost",
  },
};
const updated3 = {
  ...person3,
  address: { ...person3.address, city: "Kabul" }, // deep object copy
  name: "hamim",
  age: 22,
};
// updated3.address.city = "Kabul";
