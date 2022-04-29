/*
3.Lowercase and Uppercase Map
Write a function that creates an object with each
(key, value) pair being the (lower case, upper case) versions of a letter, respectively.
Examples
mapping(["p", "s"]) ➞ { "p": "P", "s": "S" }
mapping(["a", "b", "c"]) ➞ { "a": "A", "b": "B", "c": "C" }
mapping(["a", "v", "y", "z"]) ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
Notes
All of the letters in the input list will always be lowercase. */

function CreatObject(array) {
  let object = {};
  array.forEach(function (item) {
    object[item] = item.toUpperCase();
  });
  object = JSON.stringify(object);
  return object;
}
console.log(CreatObject(["p", "a"]));
