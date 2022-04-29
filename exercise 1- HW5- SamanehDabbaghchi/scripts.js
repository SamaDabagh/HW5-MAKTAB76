/*

1. Which Generation Are You?
Try finding your ancestors and offspring with code.
Create a function that takes a number x and a character y ("m" for male,
"f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).
● If the number is negative, return the related ancestor.
● If positive, return the related descendant.
● You are generation 0. In the case of 0 (male or female), return "me!".
Examples
generation(2, "f") ➞ "granddaughter"
generation(-3, "m") ➞ "great grandfather"
generation(1, "f") ➞ "daughter"
Notes
Check the Resources tab for helpful hints.
Generation Male Female
-3 grandfather great grandmother
-2 grandfather grandmother
-1 father mother
0 me! me!
1 son daughter
2 grandson granddaughter
3 great grandson great granddaughter */

let generation = {
  1: { m: "great grand father", f: "great grand mother" },
  2: { m: "grand father", f: "grand mother" },
  3: { m: "father", f: "mother" },
  0: { m: "me!", f: "me!" },
  "-1": { m: "son", f: "daughter" },
  "-2": { m: "grand son", f: "grand daughter" },
  "-3": { m: "great grand son", f: "great grand daughter" },
};
function finding(x, y) {
  let X = x.toString();
  return generation[X][y];
}
console.log(finding(-1, "m"));
