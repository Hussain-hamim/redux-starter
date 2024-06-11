import { compose, pipe } from "lodash/fp";

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

// using lodash
const transform = compose(wrapInDiv, toLowerCase, trim); // HO fn, right to left
const transform2 = pipe(trim, toLowerCase, wrapInDiv); // HO fn, left to right
transform(input); // hof
transform2(input); // hof
