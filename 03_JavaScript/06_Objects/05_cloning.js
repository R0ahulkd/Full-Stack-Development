/*
let obj = {
    name : "Student",
    age : 22,
    salary : "1.5L"
}

// Shallow clonning
let copyObj = obj;
copyObj.name = "Rahul"; // Impacted original Object
console.log(obj); 
*/

let obj1 = {
    name : "iphone",
    price : 10000,
    brand : "Mobile",
    intro:function(){
        console.log(`${this.name} = ${this.price} = ${this.brand}`)
    },
    detail : {
        model : "14",
        store : "Bijnor"
    }
}
// Spread Operator or Destructuring
/*
let copyObj1 = {...obj1};
copyObj1.name = "Samsung";
console.log(obj1);
console.log(copyObj1);
copyObj1.intro();
obj1.intro();
copyObj1.detail.model = "15"; // It will impact original object
console.log(obj1);
console.log(copyObj1);
*/

// Stringify (Functions will be ignored)
let copyObj1 = JSON.parse(JSON.stringify(obj1));
console.log(obj1);
copyObj1.name = "Samsung";
console.log(copyObj1);