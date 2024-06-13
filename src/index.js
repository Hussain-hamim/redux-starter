import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

console.log(store.getState()); // return the initial state

store.dispatch(bugAdded("bug... 1"));
console.log(store.getState()); // return the state with a bug added

store.dispatch(bugResolved(1));

unsubscribe();

store.dispatch(bugRemoved(1));
console.log(store.getState()); // return the state with a bug removed
