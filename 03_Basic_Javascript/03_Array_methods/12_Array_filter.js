// let myArr = [1, 2, 3, 4, 5];
// let filteredArr = myArr.filter((item,i) =>{
//     if(i % 2 == 0) {
//         return true;
//     }
// });

// console.log(filteredArr);


// let myArr = [1, 2, 3, 4, 5];
// let filteredArr = myArr.filter((item,i) => (item % 2 == 0) );

// console.log(filteredArr);


let myArr = ["Rahul", "Avi", "Avinash", "Isha", "Raghav"];
let filteredArr = myArr.filter((item,i) =>{
    if(item.includes("Ra")) {
        return true;
    }
});

console.log(filteredArr);