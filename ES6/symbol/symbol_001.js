// ES6 심볼(Symbol) 타입

// [1] : 심볼 (Symbol) 타입이란 무엇인가?
// 타입이란 말에서 알 수 있듯이 ES6에서 새롭게 되입된 원시형 타입 중 하나 --> 객체의 속성으로 사용.
// 심볼의 사전적인 의미 => 상징 ==> 심볼형을 사용하면 유일무이한 값, 고유한 값을 가진다.
// 동시에 심볼형 값은 ==> 변경이 불가능한 불변값.

// [2] : 기존타입들 --> 원시형과 참조형 --> 이중 원시형에 새롭게 추가된 타입.
// 		1. 원시형 : Number, String, Null, undefined, Boolean, Symbol(ES6)
//		2. 참조형 : Object(object, function, array...)


// [3] : 왜 객체의 속성으로 심볼을 사용하지? --> 충돌을 피하기 위함.
// 예) 배열 객체를 만들어 "배열명.length" ==> 배열의 길이 --> 같은 이름의 length로 덮어 쓰면 덮어써지는 문제가 발생.
// 이때, 배열의 길이 값은 그대로 유지하면서 같은 이름의 length 속성을 추가하고자 할 떄 --> 심볼을 사용하면 문제해결 가능.
// 예)
let arr = [1,2,3,4,5];
console.log(arr.length) // 5 -> 배열의 길이 -> 즉, 요소 수를 알 수 있는 내장된 속성 --> length 속성 덕분에.


arr.length = 50; // arr 배열에 length 속성을 정의하고 50을 할당.
console.log(arr.length) // 50 -> 덮어써지는 문제가 발생.

// 심볼을 사용 하면
let arr2 = [1,2,3,4,5];
const length =  Symbol('length'); // new는 사용하지 않음
arr2[length] = 50; //arr2의 배열의  length 속성에 50을 할당.

console.log("arr2.length = " + arr2.length); 	// 5 arr2의 배열의 길이를 구하는 length
console.log("arr2[length] = " + arr2[length]);  // 50 arr2의 length라는 속성의 값을 50으로 할당

// 정리
// 객체에 속성을 추가하거나 덮어써질 우려가 있다면 --> 충돌을 피하기 위한 수단으로 --> 심볼(Symbol)을 사용할 수 있다.








