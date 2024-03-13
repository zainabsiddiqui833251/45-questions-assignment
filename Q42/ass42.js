"use strict";
/* Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great()
that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified.*/
let magiciansName = ["David Copperfield", "Harry Houdini", "Harry Anderson"];
function show_magicians(magiciansNames) {
    for (let i = 0; i < magiciansNames.length; i++) {
        console.log(magiciansNames[i]);
    }
}
show_magicians(magiciansName);
function make_great(addition, magiciansNames) {
    for (let i = 0; i < magiciansNames.length; i++) {
        console.log(addition + " " + magiciansNames[i]);
    }
}
make_great("The great", magiciansName);
