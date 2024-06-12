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
