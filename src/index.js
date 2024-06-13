import store from "./store";

const unsubscribe = store.subscribe(() => {
  console.log("store changed", store.getState());
});

console.log(store.getState()); // return the initial state

store.dispatch({
  type: "bugAdded",
  payload: {
    description: "bug 1",
  },
});
console.log(store.getState()); // return the state with a bug added

unsubscribe();

store.dispatch({
  type: "bugRemoved",
  payload: {
    id: 1,
  },
});
console.log(store.getState()); // return the state with a bug removed
