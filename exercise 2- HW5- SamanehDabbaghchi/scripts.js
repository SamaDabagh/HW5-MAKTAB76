/*
Create a function : (...params)=>{}
this function must add all of params(list type) to one list and return this

test([[2], [4, 6], [78, 76, 25]]) 
[2, 4, 6, 78, 76, 25]*/

function getBudget(array) {
  const sum = array.reduce(function (acc, item) {
    return acc + item.budget;
  }, 0);
  return sum;
}
console.log(
  getBudget([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 },
  ])
);
