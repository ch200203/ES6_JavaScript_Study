// 클로저(Closure)

// 클로저란 무엇인가?
// 자바스크립트 언어만의 고유한 개념은 X
// 정의			--> 외부에 있는 변수가 내부에 있는 함수와 함수 호출한 후에도 종료되지 않고 계속 참조하는 것
// 				--> 외부의 변수와 내부의 함수가 끊기지 않고 연결고리가 계속 이어져 있는것

// [1] : 클로저 코드1 --> 바깥쪽에 있는 함수의 변수를 내부 함수가 참조하는 것.
const external = () => {
	
	let number = 65; // 아스키코드 65 --> A
	
	let interal = () => {
		let char_ = String.fromCharCode(number);
		console.log(char_, number++); // interal 함수 내부에서는 number가 없으므로 상위로 올라가서 number를 찾음
		// console.log(number) // 66
		
	};
	interal();
	
};

external(); 	// A	65
external(); 	// A	65
external(); 	// A	65
external(); 	// A	65
console.log('---------------------------------');

// [2] : 클로저 코드2
const external2 = () => {
	let number = 65;
	let interal = () => {
		let char_ = String.fromCharCode(number);
		return `${char_} : ${number++}`; // 함수형 프로그래밍에서는 자꾸 return을 해주는게 좋다.
	};
	
	return interal();
};

console.log(external2());	// A	65