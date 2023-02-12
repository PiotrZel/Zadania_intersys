// zad.4

// Write a program that takes an array of size N as input and gives the output as an array in the reverse order. The format of the input is as follow:

// let N=5;
// let test=[];

// for (let i = 1; i <= N; i++) {
//    test.push(i);
// }

// console.log(N)
// console.log(...test)
// test.reverse()
// console.log(...test)

/////////////////////////////////////////////////////////////////

// zad.5

// Write a program that takes a string as input and prints whether this string is a true palindrome or not.

// const TestStr= 'Abut-1-tuba'

// cleanStr= TestStr.replace(/[^A-z]/g,'');
// loStr= cleanStr.toLowerCase()
// //console.log(loStr);

// var reverseStr = loStr.split('').reverse().join('')

// //console.log(reverseStr)

// if (reverseStr===loStr){
// console.log('YES')}
// else{
//   console.log('NO')
// }

/////////////////////////////////////////////////////////////////

//Zad.6 Permutation

// Write a program that takes two 11 integer array elements (one input per line) and gives output YES, if there's a permutation of the first array that is equal to the second array or gives output NO, if there's no such permutation.

// ar1 = window.prompt('Enter lower bound of the interval: ');

// // Ask user to enter upper value of interval and take input
// ar2 = window.prompt('Enter upper bound of the interval: ');

// console.log(ar1);
// console.log(ar2);

// const arePermutations = (ar1, ar2) => {
// 	let myFunc = num => Number(num);

// 	var arr1 = Array.from(String(ar1), myFunc);
// 	var arr2 = Array.from(String(ar2), myFunc);

// 	console.log(arr1);
// 	console.log(arr2);

// 	if (arr1.length != arr2.length) {
// 		return console.log('NO');
// 	}

// 	let m = new Map();

// 	for (let i = 0; i < arr1.length; i++) {
// 		let x = arr1[i];
// 		if (!m.has(x)) m.set(x, 1);
// 		else {
// 			let k = m[x];
// 			m.set(x, k + 1);
// 		}
// 	}

// 	for (let i = 0; i < arr2.length; i++) {
// 		let x = arr2[i];

// 		if (!m.has(x) || m[x] == 0) {
// 			return console.log('NO');
// 		}

// 		let k = m[x];
// 		m.set(x, k - 1);
// 	}
// 	return console.log('YES');
// };

// arePermutations(12537073521, 73125052137);

//arePermutations(551244, 112244);
//arePermutations(ar1, ar2);
//arePermutations(1 2 3 4 5 6 7 8 9 10 11, 6 5 4 3 2 0 11 10 9 8 7);

/////////////////////////////////////////////

//Zad. 8

// Given are two integers m, n (1 <= m <= n <= 10^9, n – m <= 10^5). You have to report the number of prime numbers within the interval [m, n]. First line of the input contains an integer T, denoting the test cases you have to handle.

// let a, b, i, j, flag;
// let prime = [];

// // Ask user to enter lower value of interval and take input
// a = window.prompt('Podaj dolną granicę: ');

// // Ask user to enter upper value of interval and take input
// b = window.prompt('podaj górną granicę: ');

// // Traverse each number in the interval
// // with the help of for loop

// if (a < 1 || b > 1000000000 || b - a > 100000) {
// 	console.log('Podano błędne dane');
// } else {
// 	for (i = a; i <= b; i++) {
// 		// Skip 0 and 1 as they are
// 		// neither prime nor composite
// 		if (i == 1 || i == 0) continue;

// 		// flag variable to tell
// 		// if i is prime or not
// 		flag = 1;

// 		for (j = 2; j <= i / 2; ++j) {
// 			if (i % j == 0) {
// 				flag = 0;
// 				break;
// 			}
// 		}

// 		// flag = 1 means i is prime
// 		// and flag = 0 means i is not prime
// 		if (flag == 1) {
// 			prime.push(i);
// 		}
// 	}

// 	console.log(`TLiczby pierwsze w przedziale to: ${prime}`);
// }

///////////////////////////////////////////////////////////

//Zad.9

// Write a function in JS optionalPow that will receive two numeric arguments. The function is required to create some confirmation logic, where if the user agrees with the question (presses OK), then the function is required to compute the result of raising the first argument to the power determined by the second argument. If the user does not agree with the question (presses Cancel), then it should compute the power of the second argument raised to the first one.

// let a, b;
// const btn1 = document.querySelector('.A');
// const btn2 = document.querySelector('.B');

// function optionalPow(a, b) {
// 	let result = 1;
// 	for (i = 1; i <= b; i++) {
// 		result = result * a;
// 	}
// 	console.log(result);
// }
// function optionalPow2(a, b) {
// 	let result = 1;
// 	for (i = 1; i <= a; i++) {
// 		result = result * b;
// 	}
// 	console.log(result);
// }

// btn1.addEventListener('click', () => {
// 	optionalPow(7, 4);
// });
// btn2.addEventListener('click', () => {
// 	optionalPow2(7, 4);
// });

//////////////////////////////////////////////////////////////

// //zad.10

// Write a function in JS fixage that receives an array of integers.

// var item;
// var list = [2, 3, 4, 5, 1];
// var result = [];
// var i = 0;

// for (let i = 0; i < list.length; i++) {
// 	if (list[i] >= 18 && list[i] <= 60) {
// 		result.push(list[i]);
// 	}
// }
// result = result.join(',');

// if (result.length == 0) {
// 	console.log('NA');
// } else {
// 	console.log(result);
// }

///////////////////////////////////////////////////////////////////////////////

// //Zad.11

// Write a program that takes an integer N (N between 2 and 20 inclusive), and an array of N integers as input. Your program should output the most occurring digit that appears in the numbers of this array.

// var a = [129, 33, 71, 101, 24, 44];

// (output = []), (aNumber = a.toString());
// for (var u = 0, len = aNumber.length; u < len; u += 1) {
// 	output.push(+aNumber.charAt(u));
// }
// output = output.toString();
// console.log(output);
// a = output.replace(/[^0-9]/g, '');
// console.log(a);

// a = Array.from(String(a));

// const s = {};

// a.map(x => {
// 	s[x] = s[x] + 1 || 1;
// });
// let k = Object.keys(s);
// let v = Object.values(s);

// console.log(s);
// let max = Math.max(...v);
// let i = v.findIndex(x => {
// 	return x == max;
// });

// console.log(k[i]);

/////////////////////////////////////////////////////////////////////////////////

// Zad.12

// Write a program that takes an integer N and an array of N positive integers as input. Your program should output the position (0-based) of the array in which the value in that position has the maximum digit sum possible.

// let x = [129, 33, 71, 101, 124, 44];

// let i = x.indexOf(Math.max(...x));

// console.log(x.length);
// console.log(x.join(' '));

// console.log(i);
