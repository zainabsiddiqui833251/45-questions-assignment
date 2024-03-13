/* Animals: Think of at least three different animals that have a common characteristic. Store the names of these
 animals in a list, and then use a for loop to print out the name of each animal.
• Modify your program to print a statement about each animal, such as A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in common. You could print a sentence
 such as Any of these animals would make a great pet!*/


let animals: string[] = ["Dolphins", "Horses", "Dogs"];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

for (let i = 0; i < animals.length; i++) {
    if (animals[i] === "Horses") {
        console.log(animals[1] + " " + "are sturdy animals.")
    } else if (animals[i] === "Dolphins") {
        console.log(animals[0] + " " + "are very playful animals.")
    } else if (animals[i] === "Dogs") {
        console.log(animals[2] + " " + "are very loyal animals.")
    }
}

console.log("These animals are very loyal and make a great pet.")