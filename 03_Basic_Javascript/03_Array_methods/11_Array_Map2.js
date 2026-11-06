let myArr = [1, 43, 92, 22, 10, 35];
let sum = 0;

const arr = myArr.map((elem, i) => {
    sum += elem;
    return "Element at " + i + " is : " + elem;
});

console.log(sum);
console.log("Arr is : ", arr);