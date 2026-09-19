function sayHello(name) {
    console.log("Hello Good morning!" + name);
}

sayHello("Rahul");
sayHello("Anil");

function sum(num1,num2) {
    console.log(num1 + num2);
}
sum(10,15);

function guessnumber(n){
    if(n === 1) {
        return ("You are right");
    } else {
        return ("You are wrong");
    }
}

let number = guessnumber(2);
console.log(number);