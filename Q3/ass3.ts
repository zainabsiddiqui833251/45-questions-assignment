//  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
//   and titlecase.

var personName:string = "zainab";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase());
