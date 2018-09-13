// 스코프(글로벌과 함수 각각)마다 컴파일러가
// 자원(변수, 함수)을 호이스팅한 후 처리를 시작한다.
var x;
var x;
let y;

console.log(x);

x = 10; // 선언부 = 할당부
x = 20; // var 재 선언이 가능?!^^;

console.log(x);

// console.log(y); 
// TDZ: let, const 자원은 초기화 전에 사용이 불가하다.

y = 10;
// let y = 20; // let, const 재 선언이 불가능

console.log(y);







