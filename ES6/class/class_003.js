// 자바스크립트 클래스 - 호이스팅(Hoisting)


// [1] : 함수 레벨 스코프 vs 블록 레벨 스코프
var a = 111;		// 전역변수
console.log(a); 	// 111


function myAr() {
	var a = 333; 	// 전역변수 --> 함수 레벨 스코프, var 키워드는 중복이 허용(선언이 가능), 호이스팅 가능. 함수가아닌 변수 선언은 모두 전역.
}

console.log(a);		// 333 --> 111이 출력되게끔 하려면?

// [2] : 호이스팅이란?
// Hoisting 사전적의미 --> 끌어 올리기(scope)
// JavaScript는 기본적으로 모든 선언문(var, let, const, function, class)을 --> 호이스팅.
// 호이스팅 == 스코프 안의 어디서든 변수 선언은 최상위에서 선언한 것과 --> 동일.
// var 키워드와 let, const 키워드로 선언한 변수가 차이가 있다.

console.log('testA 값은 = ' + testA); // ??? -> undefined -> 호이스팅 되어졌다.
var testA; // 호이스팅을 한 후에 선언과 값을 동시에 할당

// console.log('testB 값은 = ' + testB); // Err
let testB; // 호이스팅을 한 후에 선언이나 값은 할당 되지 않음


console.clear();
// 자바스크립트 클래스 - 클래스호이스팅(Hoisting)

// [3] : 클래스 호이스팅을
class Person {}
console.log(Person);

const p1 = new Person();
console.log(p1);

// var vs let, const == class 호이스팅 에러 비교.
console.clear();
var str1 = 'Hello, World';

const testFun = ()=> {
	
	console.log(str1);
	// let str1 = 'Hello, Korea';
}

testFun(); // 이 함수이 실행 결과는? --> var일 경우 undefined; || let일 경우 Err


// 클래스 상속
class Parent {}
class Child extends Parent {}	// 이렇게 상속하면 문제 없음


class Child2 extends Parent2 {}	// Err -> 초기화 reference Error (참조 에러 발생)
class Parent2 {}














