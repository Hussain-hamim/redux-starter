// normal fn
function add(a, b) {
  return a + b;
}

// currying fn
function add2(a) {
  return function (b) {
    return a + b;
  };
}

// we can write this in arrow fn too
const add3 = (a) => (b) => a + b;

const sum = add2(1);
sum(5);
// the above and below are the same
add2(1)(5);
