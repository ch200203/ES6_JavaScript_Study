// 자바스크립트 클래스 - 다형성 예
// 다형성을 구현하기 위한 기본적인 OOP

// 1. 부모/자식간의 계층적 구조 --> 상속관계
// 2. 메서드 재정의 --> 오버라이딩
// 3. 재정의된 메서드 호출 --> 프로토타입 체이닝상에서 제일 먼저 찾게 되는 메서드 호출

//[1]
class Animal {
	constructor(name) {
		this.name = name;
	}
	bark() {
		return `bark.`
	}
}

class Dog extends Animal {
	constructor(name, age) {
		super(name);
		this._age = age;
	}
	bark() {
		return `${this._age}살짜리 ${this.name}가 짖다 --> 멍멍`;
	}
}

class Cat extends Animal {
	constructor(name, age) {
		super(name);
		this._age = age;
	}
	bark() {
		return `${this._age}살짜리 ${this.name}가 울다 --> 야옹야옹`;
	}
}

class Bull extends Animal {
	constructor(name, age) {
		super(name);
		this._age = age;
	}
	bark() {
		return `${this._age}살짜리 ${this.name}가 울다 --> 음메음메`;
	}
}

// [2] : 사용
const d1 = new Dog('개', 2);
console.log(d1.bark());

const c1 = new Cat('고양이', 4);
console.log(c1.bark());

const b1 = new Bull('소', 8);
console.log(b1.bark());

console.log('------------------------------------------------');

// 배열
const animals = [new Dog('개', 2), new Cat('고양이', 4), new Bull('소', 8)];
for(let value of animals){
	console.log(value.bark());
}