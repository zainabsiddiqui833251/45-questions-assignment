"use strict";
/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
console.log("Equality and Inequality with Strings:");
console.log("Test i:", "dog" === "dog");
console.log("Test ii:", "apple" !== "apple");
console.log();
console.log("Lower Case Function:");
console.log("Test iii:", "YELLOW".toLowerCase() === "yellow");
console.log("Test iv:", "YeLLow".toLowerCase() !== "yellow");
console.log();
console.log("Numerical Tests:");
console.log("Test v:", 5 <= 5);
console.log("Test vi:", 6 < 5);
console.log();
console.log("Logical AND and OR Operators:");
console.log("Test vii:", true || false);
console.log("Test viii", false || false);
console.log();
console.log("Array Membership Test:");
const fruits = ["apple", "banana", "orange"];
console.log("Test ix:", fruits.includes("banana"));
console.log("Test x:", fruits.includes("grape"));
console.log();
console.log("Array Non-Membership Test:");
console.log("Test xi:", !fruits.includes("grape"));
console.log("Test xii:", !fruits.includes("banana"));
