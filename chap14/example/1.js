function sum(start, end) {
  let result = 0;
  for (var i = start; i <= end; i++) {
    result += i;
  }
  return result;
}

console.log('START');
let oldTime = Date.now();

let value = sum(1, 2000000000);
console.log('value = ' + value);

let newTime = Date.now();
console.log('Elapsed Time = ' + (newTime - oldTime));

console.log('긴급히 처리해야 하는 로직');







