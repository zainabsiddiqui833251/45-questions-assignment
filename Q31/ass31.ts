/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/

let user_names: string[] = [];

if (user_names.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let username of user_names) {
        if (username == "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, how are you doing today?`);
        }
    }
}


//i was a little confused here so did the first part in question 30 nad no users part in this question hopefully it is correct.