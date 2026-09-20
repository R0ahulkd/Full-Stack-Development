let arr = new Array(5);
console.log(arr.length);

let arr2 = [3,5,9,11,"Rahul",17];
arr2.push("Kumar") // Push at end
console.log(arr2);
arr2.pop(); // remove from end
console.log(arr2);

arr2.unshift("Kumar"); // insert at start
arr2.shift(); // remove from start

console.log(arr2.includes(3)); //search element in Array
console.log(arr2.indexOf(11)); // Gives index of element
console.log(Array.isArray(arr2)); // check type of (Built in function for array)

let arr3 = [10,11,12];
arr3.push(...arr2) // insert new array at end
console.log(arr3);