/*
create a function count(obj) that returns the number of properties in the object
 */
const numberOfKeys = function (obj) {
  return Object.keys(obj).length;
};

const sampleObject = {
  name: "Mike",
  friend: ["John", "Paul", "Jimmy"],
  families: [
    { name: "David", age: 20 },
    { name: "Ava", age: 25 },
  ],
  location: {
    region: "England",
    country: "United Kingdom",
  },
  aboutMe: {
    status: "Single",
    pet: "Dog",
  },
};
console.log(numberOfKeys(sampleObject));
