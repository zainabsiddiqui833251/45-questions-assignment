/* Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing
 code that will print a greeting to each user after they log in to a website. Loop through the array, and
  print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status
 report?

• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.   */


let user_names: string[] = ["umer521", "zainab833251", "admin", "ammar563", "ali980"];

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
