"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
function append(array, element) {
    return array.concat(element);
}
var guests = ["Samina", "Sidra", "Shehla"];
guests.unshift("Sadaf");
guests.splice(3, 0, "Samra");
guests = append(guests, "Sonia");
console.log(guests);
console.log("Assalamualaikum everyone and sorry for the inconvenience but as the dining table cannot arrive in time so I am capable of inviting only 2 people.");
