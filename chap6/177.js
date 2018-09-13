// var b = 20;
// 
// var obj = {
//   "a": 10,
//   b,
//   speak() {
//     console.log('SPEAK!');
//   }
// };
// 
// console.log(obj);
// obj.speak();



const o = {
  name: 'Wallace',
  speak() {
    return `My name is ${this.name}!`;
  },
}

console.log(o.speak()); // "My name is Wallace!

const speak = o.speak;
console.log(speak === o.speak); // true; both variables refer to the same function
console.log(speak()); // "My name is undefined!"








