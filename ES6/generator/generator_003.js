// Promise와 Generator 함수를 이용한 비동기처리(1)
// 비동기 처리에는 다양한 방법들이 있다.

// [1] : 콜백함수
// setTimeout(함수명,단위,인자값);
// 무수한 콜백 지옥
// 1
// setTimeout(
	// (x)=>{
		// let result = x;
		// console.log(result); // 10
		
		// 2
		// setTimeout(
			// (x) => { 
				// result *= x;
				// console.log(result); // 200
				
				// 3
				// setTimeout(
					// (x)=>{
						// result *= x;
						// console.log(result) // 6000
						
						// 4
						// setTimeout(
							// (x)=>{
								// result *= x; 
								// console.log(result); 
							// },
							// 1000,
							// 40
						// );
					// },
					// 1000,
					// 30
				// );
			// },
			// 1000,
			// 20
		// );
	// },
	// 1000,
	// 10
// );




// [2] : Promise로 변환
// 1. new Promise() 호출하면 --> 대기(Pending) 상태.
// 2. 이때, 콜백 함수를 선언할 수 있고 --> 인자는 resolve, reject.
// 3. 콜백 함수내에서 처리할거 처리 한 후 --> resolve() 메서드를 호출 --> 이해(Fulfilled) 상태.
// 4. 즉, 성공하이면 --> 리턴 값을 --> then()이 받아서 계속 처리 수행
new Promise( (resolve, reject)=> {
	// 처리
	setTimeout(
		(x) => {
			let result = x;
			console.log(result);
			resolve(result);
		},
		1000,
		10
	);
})
.then((result) => {
	return new Promise((resolve, reject) => {
		setTimeout(
			(x)=> {
				result *= x
				console.log(result);
				resolve(result);
			},
			1000,
			20
		);
	});
})
.then((result) => {
	return new Promise( (resolve, reject) => {
		setTimeout(
			(x) => {
				result *= x;
				console.log(result);
				resolve(result);
			},
			1000,
			30
		);
	});
})
.then((result) => {
	return new Promise( (resolve, reject) => {
			setTimeout(
				(x)=> {
					result *= x;
					console.log(result);
					resolve(result);
				},
				1000,
				40
			);
	});
})




