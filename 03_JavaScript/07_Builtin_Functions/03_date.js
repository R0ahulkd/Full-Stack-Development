let date = new Date();
console.log(date);
console.log(date);

console.log(date.getTime());
let date2 = Date.now();
console.log(date2);

let cdate = new Date("2026/04/05");
console.log(cdate);
console.log(cdate.toUTCString());

console.log(cdate.getFullYear());
console.log(cdate.getMonth());
console.log(cdate.getDate());
console.log(cdate.getDay());
console.log(cdate.getHours());
console.log(cdate.getMinutes());
console.log(cdate.getSeconds());
console.log(cdate.getMilliseconds());
console.log(cdate.getTimezoneOffset());