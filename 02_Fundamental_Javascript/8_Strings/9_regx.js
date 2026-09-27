// let reg = /india/gi;
// let str = "india is a southeast asian country. I live in india india india"

// console.log(reg.source);

// console.log(reg.exec(str));
// console.log(reg.exec(str));
// console.log(reg.exec(str));
// console.log(reg.exec(str).index);

// console.log(reg.test(str));

// let str = "india is a southeast asian country. I live in USA"
// console.log(str.search(reg));

// let str = "india is a southeast asian country. I live in india"
// let str1 = " is a southeast asian country. I live in "
// console.log(str.match(reg));
// console.log(str1.match(reg));
// console.log([...str.matchAll(reg)]);


// let str = "india is a southeast asian country. I live in india"
// console.log(str.replace(reg, "USA"));

// let reg = /d.t/;
// console.log(reg.test("dot"));
// console.log(reg.test("det"));
// console.log(reg.test("d1t"));


// let reg = /ch*ck/;
// console.log(reg.test("chck"));
// console.log(reg.test("check"));
// console.log(reg.test("chhhhhhhhck"));


// let reg = /ch+ck/;
// console.log(reg.test("chck"));
// console.log(reg.test("check"));
// console.log(reg.test("chhhhhhhhck"));


// let reg = /^the/i;
// console.log(reg.test("the taj mahal is great"));
// console.log(reg.test("taj mahal is great the"));
// console.log(reg.test("tHe taj mahal is great the"));

// let reg = /bye$/i;
// console.log(reg.test("the taj mahal is great bye"));
// console.log(reg.test("bye taj mahal is great the"));
// console.log(reg.test("bye taj mahal is great bye"));


let reg = /del?hi/i;
console.log(reg.test("dehi"));
console.log(reg.test("deThi"));
console.log(reg.test("delhi"));
console.log(reg.test("deli"));