let myEmail = "rahul@gmail.com"
let myName = "Rahul Kumar";
let myAge = 22;

class user {
    constructor (myName, myEmail, myAge) {
        this.myName = myName;
        this.myEmail = myEmail;
        this.myAge = myAge;
    }
}

let user1 = new user(myName, myEmail, myAge);
let user2 = new user("Rahul Chauhan", "kumar@gmail.com", "23");

console.log(user1);
console.log(user2);
console.log(user2.myName, user2.myAge);