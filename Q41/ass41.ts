/* Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which 
prints the name of each magician in the array.*/


let magiciansName: string[] = ["David Copperfield", "Harry Houdini", "Harry Anderson"];

function show_magicians(magiciansNames: string[]) {
    for (let i = 0; i < magiciansNames.length; i++) {
        console.log(magiciansNames[i]);
    }
}

show_magicians(magiciansName);
