let user = "Hariom";
// accessing character
console.log(user.charAt(0));

let subname = user.slice(0,4);
console.log(subname);

let subname1 = user.slice(-3,-1); // Slice support negative indexing
console.log(subname1);

let str = user.toLowerCase();
console.log(str);

let str1 = user.toUpperCase();
console.log(str1);

let str2 = user.trim();
console.log(str2);

let str3 = user.substring(0,4); // Negative indexing not possible
console.log(str3);

let str4 = user.substr(0,4);
console.log(str4);

console.log(user.endsWith("omi")); // It tells that particular string is containing a substring at the end or not
console.log(user.includes("Ha"));
console.log(user.indexOf("o"));