// const { Map } = require("immutable");
import { Map } from "immutable";

let book = Map({ title: "Pata Khazana" });

function publish(book) {
  return book.set(("isPublish", true));
}

book = publish(book);

console.log(book.toJS());
console.log(book.get("title"));
