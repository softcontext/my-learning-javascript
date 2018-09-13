var arr = [1, 2, 3, 4];

// copyWithin(타겟 인덱스, 소스 시작 인덱스, 소스 끝 인덱스);
arr.copyWithin(1, 2);

console.log(arr); // [ 1, 3, 4, 4 ]

arr.copyWithin(2, 0, 2);

console.log(arr); // [ 1, 3, 1, 3 ]

arr = [1, 2, 3, 4];

arr.copyWithin(0, -2, -1);

console.log(arr); // [ 3,  2, 3, 4 ]