try {
    let a = 0;
    let b = 5;
    if(a==0 || b==0) {
        throw new Error("Can't use zero in division")
    }
    console.log(a/b);
    console.log(JSON.parse(`{name:"Rahul",address:"Bijnor}`)); // if i write these outside try and catch then whole code not run

} catch (error) {
    console.log(error);
} finally {
    console.log("Hey i am Rahul");
}

console.log("Hello");