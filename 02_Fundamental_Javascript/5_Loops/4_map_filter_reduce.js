let arr = [1,2,30,4,5,15];


// Map
const doubledArray = arr.map((element, index) => {
    return element * 2;
} )
console.log(doubledArray);


// Filter
const evenArray = arr.filter((element, index) => {
    return element % 2 == 0;
} )
console.log(evenArray);

// Reduce
const sum = arr.reduce((accumulator, current) => {
    return accumulator + current;
},10)
console.log(sum);

// Map,Filter and Reduce
let modifiedArray = arr.map((element) => {
    return element*2;
} ).filter((element) => {
    return element%10 !== 0;
}).reduce((acc,curr) => {
    return acc+curr;
})
console.log(modifiedArray);