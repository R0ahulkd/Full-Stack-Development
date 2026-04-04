let obj = {
    name : "Student",
    course : "FSD",
    accountBalance : 10000,
    get  balance() {
        console.log(this.accountBalance);
    },
    set updateBalance(value) {
        this.accountBalance = value;
    }
}

obj.balance
obj.updateBalance = 20000
obj.balance
console.log(obj.name);
console.log(obj.course);

obj.name = "Rahul";
console.log(obj.name);
console.log(obj)