// 자바스크립트 클래스 - getter,  setter

// [1] : getter
// getter --> 클래스 속성에 접근하여 값을 가져오고자 할 때 사용.
// getter는 메서드명 앞에 get키워드를 붙여서 사용.
// [주의!!] 메서드 사용시 마치 속성처럼 사용 --> 즉, getter는 호출 X --> 끝에 괄호( () )를 생략.
// 기본적으로 값을 가져오는 용도 --> 반드시 어떤 값을 return.

class Person{
	age = 100;
	constructor(id, name, email){
		this._id = id;
		this._name = name;
		this._email = email;
	}
	
	// getter
	get id(){return this._id;}
	get name(){return this._name;}
	get email(){return this._email;}
	set id(value){this._id = value;}
	set name(value){this._name = value;}
	set email(value){this._email = value;}
	info() {
		return `ID : ${this.id}, NAME : ${this.name}, EMAIL : ${this.email}`
	}
}

const p1 = new Person("roen","뢴","roen@naver.com");
// console.log(p1.name()); 		// name() <= 괄호때문에 Err
console.log(p1.age); 			// 100
console.log(p1.id);				// roen
console.log(p1.email);			// roen@naver.com
console.log(p1.name);			// 뢴

console.log(p1.info());			// 뢴
p1._name = "킹";
console.log(p1.info());			// 킹


// [2] : setter
// setter --> 클래스 속성에 값을 할당할 때 사용.
// setter는 메서드 명 앞에 set 키워드를 붙여서 사용. --> getter와 마찬가지로 메서드명을 속성처럼 사용.
// getter는 값을 취할시 --> 해당 get 메서드 호출.
// setter는 값을 할당시 --> 해당 set 메서드 호출.
console.clear();
const a1 = new Person('pungsin', '풍신', 'pungsin@naver.com');
console.log(a1.age);		// 100
a1.age = 600;
console.log(a1.age);		// 200

console.log(a1.id);			// pungsin
a1.id = 'ppppppppungsin';
console.log(a1.id);			// pungsin

console.log(a1.name);		// 풍신	
a1.name = "바람풍"
console.log(a1.name);		// 바람풍

console.log(a1.email);		
a1.email = "pungsin@test.com"
console.log(a1.email);		
