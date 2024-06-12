///// updating array:
const numbers = [1, 2, 3];

// adding
const added = [...numbers, 4]; // end
const added2 = [4, ...numbers]; // start
// middle
const index = numbers.indexOf(2); // index where to insert element
const added3 = [
  ...numbers.slice(0, index), // spread till index
  4, // add 4 there
  ...numbers.slice(index), // add remain array element
];
console.log(add); // [1, 2, 3]
console.log(added); // [1, 2, 3, 4]
console.log(added2); // [4, 1, 2, 3]
console.log(added3); // [1, 4, 2, 3]

// removing
const removed = numbers.filter((n) => n !== 2);
console.log(removed); // [1, 3]

// updating
const updatedd = numbers.map((n) => (n === 2 ? 20 : n));
console.log(updatedd);
