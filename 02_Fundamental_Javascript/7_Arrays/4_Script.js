let arr = [1,2,3,4,5];
let doubled_Arr = [];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}
console.log(arr);

for(let num in arr){ // accessing each element of array using for of loop
    console.log(num);
}

arr.forEach((num, index) => { // For Each loop
    doubled_Arr.push(num*2);
})