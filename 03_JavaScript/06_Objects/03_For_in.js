let student = {
    name: "Rahul Kumar",
    course: "MCA",
    status: "Pass",
    fees: 200000
}

for(let key in student){
    console.log(key + " : " + student[key]);
}

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));