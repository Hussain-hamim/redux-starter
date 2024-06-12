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
