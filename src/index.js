import store from "./store";
import * as actions from "./actionTypes";

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

console.log(store.getState()); // return the initial state

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    description: "bug 1",
  },
});
console.log(store.getState()); // return the state with a bug added

unsubscribe();

store.dispatch({
  type: actions.BUG_REMOVED,
  payload: {
    id: 1,
  },
});
console.log(store.getState()); // return the state with a bug removed
