//// updating object:
// 1. object.assign({}, obj, {});
const person = { name: "Hussain" };
const updated = Object.assign({}, person, { age: 22, name: "Hamim" });

// 2. spread operator
const person2 = { name: "Hussain" };
const updated2 = { ...person2, name: "hamim", age: 22 };

const person3 = {
  name: "Hussain",
  address: {
    country: "Afghanistan",
    city: "Khost",
  },
};
const updated3 = {
  ...person3,
  address: { ...person3.address, city: "Kabul" }, // deep object copy
  name: "hamim",
  age: 22,
};
// updated3.address.city = "Kabul";
