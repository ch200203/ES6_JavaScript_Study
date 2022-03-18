// ES6 set() 자료구조 - 생성시 추가와 Spread(펼침) 연산자 출력

// [1] : 생성시 값을 추가하는 방법
let arr = new Set().add('X').add('Y');
console.log(arr); // X, Y

// 추가
arr.add('A');
arr.add('B');
arr.add('C');

console.log(arr); // X, Y, A, B, Checkbox
console.log(arr.size) // 5

//[2] : 출력 --> Spread 연산자 사용 --> 이터러블 객체(Iterable Obejct)의 요소를 하나씩 분리하여 전개 --> 펼침 연산자
let testArr = ['k', 'o', 'r', 'e', 'a'];
// let testArr = 'korea'; // => 위에랑 결과 동일함

console.log(...testArr); // k o r e a  => 단순히 문자 하나하나 출력
console.log([...testArr]); // ['k', 'o', 'r', 'e', 'a'] => 배열의 형태로 출력

console.log([...'hello']); // ['h', 'e', 'l', 'l', 'o'] ==> 이러한 방식으로도 사용 가능
console.log(...arr); // X Y A B C
console.log(...[arr]); // {'X', 'Y', 'A', 'B', 'C'}





