"use strict";
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should
have one parameter that collects as many items as the function call provides, and it should print a summary of
the sandwich that is being ordered. Call the function three times, using a different number of arguments each
 time. */
function sandwichItems(...items) {
    console.log("Sandwich Items:");
    for (const item of items) {
        console.log(item);
    }
    console.log();
}
sandwichItems("bread", "pattys", "tomato", "cucumber");
sandwichItems("bread", "lettuce", "mayonnaise", "chicken");
sandwichItems("bread", "boiled egg", "mayonnaise");
