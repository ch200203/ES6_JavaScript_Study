// ES6 set() 자료구조

// [!]
// ES6에서 새롭게 도입한 데이터 자료구조 --> map, set
// map은 key와 value를 한 쌍으로 묶는다는 점에서 객체(Object)와 비슷하고, set은 중복을 허용하지 않는다는 특징을 빼면 --> 배열과 유사.

// [1] : set
// set --> 집합 --> key, value의 쌍이 있다면 value들의 집합 또는 Collection


//[2] : 특징
// 배열(array)은 같은 값을 가질 수 있지만, set(집합)은 같은 값을 중복해서 가질 수 없음.
// 종복해서 같은 값을 추가해봤자 추가 X --> 이러한 성질을 이용하여 중복을 제거하는 용도로 사용
// 예 1)
// let arr2 = [1,2,3,4,5,5];
// console.log(arr2); 		// 1,2,3,4,5,5
// console.log(arr2[4])	// 5
// console.log(arr2[5])	// 5 --> 같은 값을 가질 수 있음

// [3] : set 사용법
// 생성 --> new 
// 추가 --> add
// 삭제 --> delete

// 생성(선언)
let arr3 = new Set(); 	// 비어있는 set(집합) 선언
// console.log(arr3); 		// object set객체를 반환

// 추가
arr3.add('A');
arr3.add('B');
arr3.add('C');
arr3.add('C');
arr3.add('C');
arr3.add('A');

console.log(arr3); // A, B, C 
// console.log(arr3[0]); // undefined  ==> 배열과는 다름.

// 사이즈
console.log("arr3 의 사이즈 = " + arr3.size); // 3 ==> array는 length But, Set ==> size 값임

// 삭제
arr3.delete('C');
console.log(arr3); // A, B

// 삭제 --> 한꺼번에 모두 삭제 --> clear();
arr3.clear();
console.log(arr3);










