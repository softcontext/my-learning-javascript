
var a = 10;

// var를 생략하면 자동으로 global 객체에 추가됩니다.
// 상수와 같이 전역 자원으로써의 가치가 없다면
// 메모리 낭비가 되므로 이렇게 사용하면 좋지 않습니다.
b = 20; // global.b = 20;

// 수백줄 코드
// ...

console.log(a);
console.log(b);

console.log(global.a);
console.log(global.b);

