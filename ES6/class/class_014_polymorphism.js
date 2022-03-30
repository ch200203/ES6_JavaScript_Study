// 자바스크립트 클래스 - 다형성 (Polymorphism)


// [1] : 개념
// 다형성 --> Polymorphism --> 다양한 형태를 가지는 성질
// 문법적 --> 어떤 기능이나 동작을 구현시 --> 설계적인 부분과 구현(동작/기능)되는 부분을 분리 --> 객체별로 다양하게 사용할 수 있게 하는 것.
// 부모(super) 클래스를 상속받은 자식(sub)클래스의 인스턴스(객체)별로 적절한 메서드를 사용하게 하는 것.
// 즉, 이렇게 되면 "설계부분"과 "구현부분"은 --> 1:N 관계가 성립.
// 즉, 부모가 잘 설계해놓은 것을 자식이 받아서 설계대로 구현한 후 각 인스턴스 (객체)별로 다양하게 사용하는 것

// 일상에서의 다형성 예 --> 돼지코 전원 케이블, USB 규격

// 다른 전통적인 언어들의 클래스와 ES6 클래스의 차이점.
// 이러한 다형성을 지원할 수 있는 문법적인 기반이 안되어 있음. --> 인터페이스, 추상클래스, 타입에 대한 개념.
// 따라서, ES6 클래스에서는 다형성을 전통적인 언어들에서와 같이 문법적인 측면에서 구현하는 것은 조금 어렵다. --> 흉내
// 설게부분 --> 인터페이스, 추상클래스 --> 보통은 강제하고 구현하게 함 --> ES6 지원 X, 강제하지도 X --> 흉내
// "흉내"라고 무시하면 안된다 --> 다형성 개념을 적용 --> 보다 편리하고 쉽게 코딩 --> 다른 언어의 OOP를 이해하는데 도움


// for .. of 반복 vs toString() 메서드
// 일반적으로 '다형성' 하면 보통 앞서 설명한 개념. --> 다형성의 한 예.


// [1] : for ..of
// 1. 다양한 자료구조에서 사용할 수 있다. --> 반복 가능한 객체 (Array, String, Map, Set..)
// 2. 반복문내에서 배열이나 문자열에서 동작하는 --> 틀정 인터페이스가 지원되는 자료구조를 사용하기 때문.
// 3. 컬렉션 객체가[Symbol.iterator] 속성을 가지고 있어야만.
// 4. 이 말은 내가 만든 사용자 정의 객체의 경우에도 --> 이러한 특정 인터페이스 규격을 맞춰준다면 --> 사용 O


// Array
const fruits = ['사과', '바나나', '배', '수박', '오렌지'];
for(let value of fruits) {
	console.log(value);
}

// String
const str = "KOREA";
for(let value of str) {
	console.log(value);	
}
// Number --> 반복 가능한 것이 아니므로 Err
// const num = 123;
// for(let value of num) {
	// console.log(num);
// }

// Map
const map1 = new Map([['서울', 1], ['경기', 2], ['인천', 3]]);
for(let city of map1){
	console.log(city);
}

for(let [key, value] of map1) { // 구조분해 할당 Destructuring assignment);
	console.log(key , value);
}

// [2] toString() 메서드
// 모든 객체에는 객체를 텍스트 형식으로 출력시키고자 할 때 자동으로 호출되는 toString() 메서드가 존재.
// 즉, 객체를 나타내는 문자열을 반환. --> Object에서 파생된 모든 객체에 상속
// 이 메서드가 사용자 정의 객체에서 재정의 되면 --> 해당 재정의 된 toString() 메서드가 적용. --> 그냥 사용하면 [object Object]
console.clear();


// Date
const dateObj = new Date(2022, 02, 22, 22, 22,22);
strObj = dateObj.toString();
console.log(strObj);
console.log(typeof(strObj));

// Array
const arrObj = [1,2,3,4,5,6,7,8,9];
console.log(arrObj.toString()); 	// join 처럼
console.log(typeof(arrObj));


// Object
const obj = new Object();
console.log(obj.toString());


// toString() 메서드 재정의 --> 목적 --> 보다 객체의 정보를 잘 보여주기 위해서.
console.clear();
function Person(name, age, hp, gender) {
	this.name = name;
	this.age = age;
	this.hp = hp;
	this.gender = gender;
}

const p1 = new Person('해루석', 20, '010-1234-56789', '남성');

console.log(p1.toString());

Person.prototype.toString = function() {
	let result = `객체정보 --> 이름 : ${this.name}, 나이 : ${this.age}, 핸드폰 : ${this.hp}, 성별 ${this.gender}`;
	return result;
}

console.log(p1.toString());


// String.prototype.toString 재정의
console.clear();

String.prototype.getLength = function() {
	return this.length;
}

String.prototype.toString = function() {
	return "나의 좌우명 -->" + this.valueOf();
}

let testObj = new String("일단 해보고 안되면 다시 또 해보자!");

// console.log(testObj.getLength())		// 20
// console.log(testObj);
// console.log(testObj.toString());		// 나의 좌우명 --> 일단 해보고 안되면 다시 또 해보자!

alert(testObj); // 나의 좌우명 --> 일단 해보고 안되면 다시 또 해보자!