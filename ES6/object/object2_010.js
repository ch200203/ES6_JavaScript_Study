// (문제) 아래의 코드를 "프로토타입 체인"을 이용하여 상속이 구현되도록 바꿔보시오
// 이때, 상속을 계속해서 여러단계까지 구현해보시오.

//[1]
// const apt = {
	// color : "red",
	// rooms : 4,
	// toilet : 1,
	// turnon(){
		// console.log("turn on...");
	// }
// };

// const villa = {
	// color : "black",
	// rooms : 3,
	// toilet : 1,
	// turnon() {
		// console.log("turn on...);
	// }
// };

// const oneroom = {
	// color : "blue",
	// roooms : 1,
	// toilet : 1,
	// turnon() {
		// console.log("turn on...);
	// }
// };


// [2]
const housing = {
	toilet : 1,
	turnon () {
		console.log("turn on...");
	}
};

const apt = {
	color : "red",
	rooms : 4,
};
console.log(apt); 		// __proto__ ==> Object(최상위)
// apt.turnon(); 		// 불가능

apt.__proto__ = housing		// 상속구현
console.log(apt)			// __proto__ ==> housing
apt.turnon();				// turn on... (가능)
console.log(apt.toilet);	// 1 

const villa = {
	color : "black",
	rooms : 3,
};
villa.__proto__ = housing;

const oneroom = {
	color : "blue",
	roooms : 1,
};
oneroom.__proto__ = housing;

// [3] : 여러단계까지 상속을 구현
const rainbow = {
	name : "무지개 아파트",
	rooms : 5
}
rainbow.__proto__ = apt;

// rainbow --> apt, housing 멤버를 모두 사용하는 것이 가능 --> 상속 구현.
console.log('----------------------------------------------------');

console.log(rainbow.name); 		// 무지개 아파트
console.log(rainbow.rooms); 	// 5
console.log(rainbow.color); 	// red
console.log(rainbow.toilet); 	// 1
rainbow.turnon 	// turn on...


// [4] : for .. in 
// 위 코드에서 마지막에 생성한 객체 --> rainbow를 --> for.. in 반복문으로 순회 --> 결과는?
console.clear();
for(let i in rainbow) {
	console.log(i);
}

// 프로토 타입 체인이 연결되어 있는 원형(부모)의 멤버(속성, 메서드)들이 다 나온다.


// Object.keys() vs Object.values()
console.log(Object.keys(rainbow)); 		// ['name', 'rooms']
console.log(Object.values(rainbow)); 	// ['무지개 아파트', 5]


// 해당 rainbow 객체에서 만들어진 속성들의 key와 value의 값이 출력

// Object.entries() --> 배열로 리턴
console.log('----------------------------------------------------');
console.log(Object.entries(rainbow));


// [5] : if 조건문과 hasOwnProperty() 메서드를 같이 사용.
console.clear();

for(let i in rainbow) {
	// console.log(i);
	if(rainbow.hasOwnProperty(i))
		console.log(i , "--> " , rainbow[i]);
	else
		console.log(i ," --> " , "");
}

// 이를 통해서 알 수 있듯이 --> hasOwnProperty() 메서드는 해당 객체가 가지고 있는 속성에 대해서만 true를 반환


















