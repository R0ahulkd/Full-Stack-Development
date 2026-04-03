// Maps
let nums = [1,2,3,4,5,6,7,8,9];
nums.map((val,index,arr)=>{
    return arr[index] = val*5;
})
console.log(nums)

// Filter
let res = nums.filter((val,index,arr)=> val%2==0)
console.log(res)

// Reduce
let sum = nums.reduce((acc, val)=> acc+val)
console.log(sum)

// some,every,for each