let myEmail = "rahul@gmail.com"
let myName = "Rahul Kumar";
let myAge = 22;

class user {
    constructor (myName, myEmail, myAge) {
        this.Name = myName;
        this.Email = myEmail;
        this.Age = myAge;
    }

    aboutUser() {
        return (
            this.Name + " is the user's name. " + this.Email + " is the user's email."
        );
    }

    changeName(newName) {
        this.name = newName;
        console.log("Name Changed!");
    }
}

let user1 = new user(myName, myEmail, myAge);
let user2 = new user("Rahul Chauhan", "kumar@gmail.com", "23");


console.log(user2.aboutUser());
console.log(user1.aboutUser());

user1.changeName("Isha");
console.log(user1.name);