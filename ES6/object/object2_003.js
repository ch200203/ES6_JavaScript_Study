// 자바스크립트 함수의 내부와 객체간의 관계(2)

function Animal(){}

// Animal ProtoType 객체 --> tiger, lion과 같은 객체들의 원형이 되는 객체.
// 따라서 , tiger, lion과 같은 객체들은 모두 이 'Animal 프로토타입 객체'에 접근이 가능하고, 동시에
// 이 "Animal 프로토 타입 객체"에 멤버(예를 들면 메서드)  한개를 추가하면 --> tiger, lion과 같은 객체들도 동시에  이 멤버를 공유해서 모두가 사용이 가능.

let tiger = new Animal();
let lion = new Animal();

// 그럼 어떻게 이 "Animal 프로토타입 객체"에 멤버를 한개 추가하지?
Animal.prototype.aniRun = function() {
	return "동물이 뛴다.";
}

console.log('------------------------------------');
console.log(tiger.aniRun()); // 동물이 뛴다.
console.log(lion.aniRun());  // 동물이 뛴다.


// 부모(원형)에 있는 aniRun() 메서드를 tiger, lion 객체내에서 만들어 버리면? -> 객체 내에서 만든 메서드가 먼저 적용됨.
// tiger 객체 내에 aniRun() 메서드를 새롭게 추가.
tiger.aniRun = function (){
	return "호랑이가 간다.";
}

// 속성 추가
tiger.aniLeg = 4;
console.log('------------------------------------');
console.log(tiger.aniLeg); // 4
console.log(lion.aniLeg);  // undefined


// 위와 같은 실습을 통해서 알 수 있는 것!
// 어떤 함수(Animal)의 "(Animal) 프로토타입 객체"는 객체의 생성을 위한 부모격의 원형이 되는 객체이다.
// 이 프로토타입(원형)으로 생성된 객체들은 모두 이 "프로토타입 객체"의 멤버들에 접근이 가능하고 사용할 수 있다. --> 생성된 객체들과 공유.
// 새롭게 생성된 객체(자식)에서 원형(부모)의 메서드를 다시 재정의 해서 사용하면, 이게 적용됨
// 멤버를 추가, 수정, 삭제 --> prototype 속성을 통해서 적용한다.
// 멤버를 읽는 것 --> 객체명 또는 함수의 prototype 속성을 통해서 접근이 가능.

console.clear();
console.log(lion.aniRun()); 			// 동물이 뛴다.
console.log(Animal.prototype.aniRun());  // 동물이 뛴다.













