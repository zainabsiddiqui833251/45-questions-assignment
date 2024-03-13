/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and
 you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name
 from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually
 have an empty list at the end of your program.*/

let guests:string[] =["Sadaf" , "Samina" , "Sidra" , "Samra" , "Shehla" , "Sonia"];

let guestremoved1 = guests.pop();
console.log(`${guestremoved1} sorry I cannot invite you as there is no space left.`);

let guestremoved2 = guests.splice(4 ,1 );
console.log(`${guestremoved2} sorry I cannot invite you as there is no space left.`);

let guestremoved3 = guests.splice(3,1);
console.log(`${guestremoved3} sorry I cannot invite you as there is no space left.`);

let guestremoved4 = guests.splice(2,1);
console.log(`${guestremoved4} sorry I cannot invite you as there is no space left.`);

console.log(guests[0] + " " +"You are still invited for the dinner.")
console.log(guests[1] + " " +"You are still invited for the dinner.")

var noGuests = guests.splice(0,2)
console.log(guests);


