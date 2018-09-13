const x = 5;
console.log(-x);
console.log(3- -5);
console.log(3-(-5)); // 3+5
const y = 3- -x; // Bad!
console.log(y);

var a = 10;
var b = 10;

console.log(a == b); // true, 동등: 값만 비교
console.log(a === b); // true, 일치: 값 비교 + 자료형 비교

var str1 = "10";
var str2 = "10";
var str3 = new String("10");

console.log(str1 == str2);  // true
console.log(str1 === str2);  // true
console.log(str1 == str3);  // true
console.log(str1 === str3); // false

console.log(typeof str1, typeof str3); // string object

console.log(10 == "10");  // true
console.log(10 === "10"); // false
console.log(10 === Number("10"));  // true
console.log(String(10) === "10");  // true



