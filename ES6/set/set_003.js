// ES6 set() 자료구조 - 반복

// [!] 
let arr = ['a' , 'b', 'c', 'd', 'e'];


// [1] 전통적인 for 반복문
for(let i = 0; i < arr.length; i++){
	console.log(arr[i]);
}

console.log('------------------------------')

// [2] : forEach() 메서드를 사용한 반복문
arr.forEach( val => console.log(val) );

// [3] : Set 자료구조의 다양한 메서드 --> keys(), values(); set 에서는 두 메서드는 거의 비슷하게 동작함
let testSet3 = new Set(["tiger", "lion", "dog", "cat"]);
testSet3.add("hippo");

console.log(testSet3[0]); // tiger --> undefined 배열이 아니기 때문에 불가

for(let i of testSet3){ // for(let i in testSet3) 는 불가. 반드시 of 사용
	console.log(i);
}

let arr2 = [...testSet3]; // => 이렇게 되면 배열로 변환이 됨
console.log(arr2[0]);  // tiger ==> 배열이기 때문에 index로 접근 가능

console.log("---------------------------------------keys()");

// keys() 메서드 --> Iterator(반복자) 객체를 반환 --> next() 메서드
const key_itr = testSet3.keys();
console.log(key_itr.next().value); // tiger > next() 메서드는 포인터를 이동시켜 값을 출력 시킴
console.log(key_itr.next().value); // lion
console.log(key_itr.next().value); // dog
console.log(key_itr.next().value); // cat

console.log("---------------------------------------values()");

// values() 메서드 --> Iterator(반복자) 객체를 반환 --> next() 메서드
const val_itr = testSet3.values();

console.log(val_itr.next().value) // tiger
console.log(val_itr.next().value) // lion
console.log(val_itr.next().value) // dog
console.log(val_itr.next().value) // cat
console.log("---------------------------------------");

// [4] : for ..of 반복문으로 출력
for(let i of testSet3){
	console.log(i);
}

// [5] : entries() 메서드
let testSet5 = new Set();
testSet5.add("홍킬동");
testSet5.add("이지혜");
testSet5.add("이현성");

const entries = testSet5.entries();

for(let i of entries){
	console.log(i); // ==> 배열로 반환 ex) ['홍킬동' , '홍킬동']
}


// 삽입 순으로 Set 요소 각각에 대해서 [value, value] 배열 형식으로 새로운 객체를 반환















