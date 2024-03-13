/* Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the
 array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a
  separate array. Call show_magicians() with each array to show that you have one array of the original names and
   one array with the Great added to each magician’s name.*/


   let magiciansName: string[] = ["David Copperfield", "Harry Houdini", "Harry Anderson"];

function showMagicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];

    for (let magician of magicians) {
        modifiedMagicians.push("The Great " + magician);
    }

    return modifiedMagicians;
}

console.log("Original Magicians:");
showMagicians(magiciansName);

console.log("Modified Magicians:");
showMagicians(makeGreat(magiciansName));



