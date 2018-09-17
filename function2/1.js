/*
  JS 함수는 2가지 역할을 수행한다.
  1. 자바의 생성자: 새 객체를 얻는다.
    새 객체의 기본 프로퍼티는 생성자 함수 내
    this.프로퍼티 = 값 방식으로 추가된다.
  2. 자바의 메소드: 파라미터를 주고, 
    메소드 내 로직이 처리한 후, 결과를 리턴 받는다.
*/

function add(a, b) {
  return a + b;
}

var result = add(2, 3);
console.log(result);

var obj = new add(2, 3);
console.log(obj);