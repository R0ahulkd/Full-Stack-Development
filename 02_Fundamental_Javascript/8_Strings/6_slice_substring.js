const myname = "Frontend";
const slicedname = myname.slice(0,5);
const substring = myname.substring(0,5);

console.log(slicedname);
console.log(substring);

const slicedname1 = myname.slice(-6,5); // it accepts negative index also
const substring1 = myname.substring(-6,5); // Substring not accept negative values

console.log(slicedname1);
console.log(substring1);