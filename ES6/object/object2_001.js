// JavaScript 객체 - 프로토 타입

// [1] : 프로토타입이란 무엇인가?
// 자바스크립트를 공부하는 과정에서 흔히 들어보게되는 용어중 하나 --> 다른 언어 공부 할때는 들어보지 못함
// 자바스크립트는 프로토타입 기반의 언어이다. --> 이를 기반으로 '확장과 재사용성이 높다'
// 사전적 의미 --> Prototype : 원형 --> 이러한 사전적의미와 같은 개념으로 자바스크립트에서도 사용
// 쉽게 말해, 객체의 '프로토타입(원형)'을 가지고 '새로운 객체'를 생성해가는 프로그래밍 방식
// 즉, 생성된 객체는 자기자신의 '프로토타입'을 갖는다. --> 즉 자기자신이 만들어지게된 '원형'을 안다.



// [2] : Prototype va Class
// 지금은 자바스크립트도 Class를 문법적으로 지원하기 시작했지만 원래 자바스크립트는 프로토타입 기반의 언어 이다.
// 즉, 기존에는 Class 라는게 없었다.
// 그래서, 객체의 원형인 프로토 타입을 이용하여 객체의 '확장','재사용', '상속' 등을 구현해 나갔다.

// Prototype 객체는 new 연산자에 의해서 생성된 객체 --> 공유 프로퍼티, 메서드 등을 제공하기 위해 사용된다.

// [3] : 예
const fruit = { name : 'apple'};
console.log(fruit.name); // name

// 속성 추가
fruit.expriation = '20241231';
console.log(fruit.expriation);

// 속성이 있는지 없는지 체크 --. hasOwnProperty() 메서드 사용 return true || false 
console.log(fruit.hasOwnProperty('expriation')); 	// true
console.log(fruit.hasOwnProperty('country')); 		// false

// hasOwnProperty() 메서드는 fruit 객체가 어떻게 쓰이는지
// console 에서 보면 __proto__ : Object <- fruit 객체는 Object로부터 만들어졌다. 
console.log(fruit);

const aaa = {};
console.log(aaa); // __proto__ 혹은 ([[Prototype]]: Object)) 식으로 나와있음

// hasOwnProperty() --> fruit()객체에서 정의해버리면?
const fruit2 = {
	name : 'apple',
	expriation : '20241231',
	hasOwnProperty : () => {
		console.log('안녕');
	}
};

fruit2.hasOwnProperty(); // 안녕 <-- 객체안에 새로 정의를 했기때문에 저렇게 나옴




