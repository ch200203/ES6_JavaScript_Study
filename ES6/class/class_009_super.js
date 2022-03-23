// 자바스크립트 클래스 - 상속과 super
// Animal클래스(부모/상위/Super)와 Mammal클래스(자식/하위/Sub)를 만들어 상속 관계를 구현하시오
// 이때, Mammal 클래스의 인스턴스 (객체) 생성은 우측처럼 하시오 --> new Mammal('느그랑이',10, 2, 1.5);
// 이때, 부모 클래스의 constructor는 자식 클래스에서 super를 통해서 동물의 유형(예 : 포유류)을 받도록 처리하시오


class Aniaml{
	constructor(group) {
		this.group = group; // ex) 포유류
	}
	getGroup(){
		return this.group;
	}
	eat(){}
	sleep(){}
	bark(){ return `짖다.`;}
}

class Mammal extends Aniaml {
	constructor(name, finger, toe, eyesight) {
		super(Mammal.name); // 부모의 생성자를 호출 --> this보다 super가 당연히 먼저 호출되어야함. --> 안그러면 참조오류
		this.name = name;
		this.finger = finger;
		this.toe = toe;
		this.eyesight = eyesight;
	}
	
	run() {
		return `${this.name}(${this.group}) 뛴다.`;
	}
	
	bark() {
		return `크게 짖다.`;
	}
	move() {
		// return console.log(`${this.name} 이동하면서 ${this.bark()}`);
		return console.log(`${this.name} 이동하면서 ${super.bark()}`); // --> 이렇게하면 부모의 bark()가 호출됨
	}
}

const mam1 = new Mammal('느그랑이',10, 2, 1.5);
console.log(mam1.getGroup()); 	// Mammal
console.log(mam1.name); 		// 느그랑이
console.log(mam1.finger); 		// 10
console.log(mam1.toe);			// 2
console.log(mam1.eyesight);		// 1.5
console.log(mam1.run());		// 느그랑이(Mammal) 뛴다.
console.clear();
console.log(mam1.bark());		// override --> (1)기각하다;무시하다(2)~보다 더 우선하다;우선시하다.
mam1.move();

// 속성 출력
console.log(Object.getOwnPropertyNames(mam1)); // ["group", "name", "finger", "toe", "eyesight"]
console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(mam1)) ); //['constructor', 'run', 'bark', 'move']

