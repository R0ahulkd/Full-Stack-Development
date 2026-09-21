let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr3 = [7,8,9];

let arr = [arr1,arr2,arr3];
console.log(arr);
console.log(arr[1][0]);

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}