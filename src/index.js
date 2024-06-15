import store from "./customStore";
import * as actions from "./actions";

store.subscribe(() => {
  console.log("Store change");
});

store.dispatch(actions.bugAdded("bug 1"));

console.log("hello");
