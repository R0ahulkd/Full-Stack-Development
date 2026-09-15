let a = "123";
let b = Number(a);
console.log(a, b);

let c = "123.0abc";
let d = parseInt(c);
console.log(d);

let e = "4.36abc";
let f = parseFloat(e);
console.log(f);

let g = "4.36785414";
let h = parseFloat(g).toFixed(3);
console.log(h);

let i = "4.36785414";
let j = i.toString(); // String(i)
console.log(j);

// Implicti Conversion
let marks = "270";
let newmarks = marks + 10;
console.log(newmarks);