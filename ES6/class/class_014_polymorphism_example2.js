// 자바스크립트 클래스 - 다형성 예2 --> function + prototype


// [1] 
// 설계클래스 (인터페이스)
// 상속을 받은 자식 클래스에서 메서드가 미구현되어있다면 여기서 에러를 던져준다 --> 그럼으로써 --> 강제하는 효과

const Animal = function(name) {
	this._name = name;
};

Animal.prototype.move = function() {
	// 코드 구현
	// console.log('동물이 이동중');
	// return '스윽...';
	throw new Error('move 메서드가 구현되지 않았습니다.');
}


// 구현 클래스
// 자식 클래스에서 move 메서드를 구현하지 않으면 부모 클래스에서 에러를 던져줌으로써  --> 구현을 강제
const DogImpl = function(name, age){
	Animal.call(this, name); // Class의 super 역할.
	this._age = age;
};

DogImpl.prototype = Object.create(Animal.prototype);
DogImpl.prototype.constructor = DogImpl;

DogImpl.prototype.move = function(args) { // 오버라이딩
	console.log(`${args}(${this._name}, ${this._age}살) 이동중...`);
	return '멍멍';
};


// 객체생성
const d1 = new DogImpl('개식이', 2);
console.log(d1.move('개'));
console.log('-----------------------------------');


const d2 = new DogImpl('똥강아지', 4);
console.log(d2.move('개'));
console.log('-----------------------------------');

// 다형성 체크
// 객체가 특정 클래스의 인스턴스인지 여부를 확인 ==> instanceof
console.log(d1 instanceof Object);		// true
console.log(d1 instanceof Animal);		// true
console.log(d1 instanceof DogImpl);		// true
