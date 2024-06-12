// const { Map } = require("immutable");
// import { Map } from "immutable";
import { produce } from "immer";

let book = { title: "Pata Khazana" };

function publish(book) {
  return produce(book, (draftBook) => {
    draftBook.isPublished = true;
  });
}

console.log(book); // old one no new changes
console.log(publish(book)); // new object
