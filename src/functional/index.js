import store from "../store";

console.log(store.getState()); // return the initial state

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "bug 1",
  },
});
console.log(store.getState()); // return the state with a bug added

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});
console.log(store.getState()); // return the state with a bug removed
