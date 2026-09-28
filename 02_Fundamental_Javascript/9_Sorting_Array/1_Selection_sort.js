let arr = [78,5,6,8,45,12,32,1];

for(let i = 0; i < arr.length-1; i++){
    let min = i;
    for(let j = i+1; j < arr.length; j++){
        if(arr[min] > arr[j]) {
            min = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;

    console.log(arr);
}

console.log("Final Output : ", arr);