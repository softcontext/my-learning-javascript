const arr = ["b", "c", "d"];
console.log(arr);

// arr[arr.length] = "e";
var size = arr.push("e"); // returns 4; arr is now ["b", "c", "d", "e"]
console.log(size);
console.log(arr);

var ret = arr.pop(); // returns "e"; arr is now ["b", "c", "d"]
console.log(ret);
console.log(arr);

console.log(arr[arr.length - 1]);
console.log(arr); // [ 'b', 'c', 'd' ]

var size = arr.unshift("a"); // returns 4; arr is now ["a", "b", "c", "d"]
console.log(size);
console.log(arr); // [ 'a', 'b', 'c', 'd' ]

var ret = arr.shift(); // returns "a"; arr is now ["b", "c", "d"]
console.log(ret); // a
console.log(arr); // [ 'b', 'c', 'd' ]







