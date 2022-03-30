// 자바스크립트 - 접근제한자(접근자)

// 자바스크립트에는 전통적인 다른 OOP에서와 같은 접근자(private, public, protected)가 없고 --> 기본적으로 모두 public 이다.
// 즉, 해당 클래스의 인스턴스(객체)를 통해 --> 외부에서 항상 '참조'가 가능.
// 그래서 생성자 메서드내에서 속성명 앞에 '_'를 임의로 붙여" 이것은 private이에요..." 라고 움묵적으로 표시. --> this._name;
// private --> 최신 브라우저 위주로 지원.

// [1] : Property
class Person {
	age = 20;
	power = 900;
	#finger = 10;		// private --> 외부에서 직접 접근 불가.
	#toe = 10;			// private
}

const p1 = new Person();
console.log(p1);		// {age : 20, power : 900}
console.log(p1.age)		// 20
console.log(p1.power)	// 900
p1.age = 10;
console.log(p1.age);	// 10
console.log('----------------------------------------------------');
console.log(p1.finger); // undefined
// console.log(p1.#finger); // private Err;
// console.log(p1.#toe); // private Err;

// [2] : Method
console.clear();
class Animal{
	#age = 4;
	bark(){
		this.#age = 8; 	// 클래스 내부에서의 접근은 가능.
		return `${this.#age}살 짜리 개가 짖고 있다. 멍멍~`;
	}
}

const ani1 = new Animal();
// console.log(ani1.#age)		// Private Err
console.log(ani1.bark());

// [3] Method
console.clear();
class Animal2 {
	#age = 4;
	bark(){
		this.#age = 8;
		return `${this.age}살 짜리 개가 짖고 있다 멍멍~`
	}
	
	#privateMethod(){
		return `Hello, Private Method`
	}
	
	getPrivateMethod(){
		return this.#privateMethod();
	}
}

const ani2 =  new Animal2();
// console.log(ani2.privateMethod()); 		// Private Err
console.log(ani2.getPrivateMethod());


// [4] : Private Static Method
console.clear();
class Animal3{
	static #privateStaticMethod(){
		return 'Hello, Private Static Method~';
	}
	static getPrivateStaticMethod() {
		this.#privateStaticMethod();
	}
	static getPrivateStaticMethod_ClassName(){
		return Animal3.#privateStaticMethod();
	}
}

// console.log(Animal3.#privateStaticMethod()); 		// Private Err
console.log(Animal3.getPrivateStaticMethod());	
console.log(Animal3.getPrivateStaticMethod_ClassName());