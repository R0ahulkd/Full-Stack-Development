// let myArr = [1, 2, 3, 4, 5];
// let filteredArr = myArr.filter((item,i) =>{
//     if(i % 2 == 0) {
//         return true;
//     }
// });

// console.log(filteredArr);


let myArr = [1, 2, 3, 4, 5];
let filteredArr = myArr.filter((item,i) =>{
    if(item % 2 == 0) {
        return true;
    }
});

console.log(filteredArr);