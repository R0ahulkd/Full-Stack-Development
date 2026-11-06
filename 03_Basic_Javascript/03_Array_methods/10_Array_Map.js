let myArr = [1, 43, 92, 22, 10, 35];
let sum = 0;

function myFnc(item) {
    console.log(item);
    sum += item;
}

myArr.map(myFnc);
console.log("Sum is ", sum);