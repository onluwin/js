// function spinWords(str) {
//     const reversedWords = []
//     str.split(' ').forEach(word => {
//         if (word.length < 5) {
//             reversedWords.push(word)
//         } else {
//             reversedWords.push(word.split('').reverse().join(''))
//         }

//     });
//     return reversedWords.join(' ')
// }
// console.log(spinWords('Hey fellow warriors'));

// ANOTHER
// function solution(str){
//     return str.split('').reverse().join('')
// }
// console.log(solution('word'));

// ANOTHER
// function persistence(num) {
//     if (String(num).length === 1 || !num) {
//         return 0
//     }
//     let answer = 0;
//     let arrOfNum = String(num).split('')
//     while (arrOfNum.length > 1) {
//         arrOfNum = String(arrOfNum.reduce((prevValue, currentValue) => prevValue * currentValue)).split('')
//         console.log(arrOfNum);
//         answer += 1;
//     }
//     return answer // 4
// }
// console.log(persistence(999));

// ANOTHER
// function makeNegative(num) {
//     if (!num) return;
//     let result;
//     const strNum = String(num)
//     if (num > 0) {
//         result = strNum.padStart(strNum.length + 1, '-')
//     }
//     return Number(result);
// }
// console.log(makeNegative(3));

// ANOTHER
// function sum(numbers) {
//   return numbers.reduce((acc, item) => {
//     console.log('acc', acc);
//     if (typeof item !== 'number') {
//       return 0;
//     }
//     acc += item;
//     return acc;
//   }, 0);
// }

// const sum = numbers =>
//   numbers.reduce(
//     (acc, item) => (typeof item === 'number' ? (acc += item) : 0),
//     0,
//   );

// console.log(sum([]), sum([1, 5.2, 4, 0, -1]));

// ANOTHER
// function getCount(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   const arrayOfStr = str.split('');
//   let answer = 0;
//   vowels.forEach(letter => {
//     for (let i = 0; i < arrayOfStr.length; i += 1) {
//       if (letter === arrayOfStr[i]) {
//         answer += 1;
//       }
//     }
//   });
//   return answer;
// }
// console.log(getCount('abracadabra')); // 5

// ANOTHER
// function isPalindrome(str) {
//   const reversedStr = str.split('').reverse().join('');
//   return str === reversedStr;
// }
// console.log(isPalindrome('шалаш')); // TRUE

// ANOTHER
// function sumTwoSmallestNumbers(numbers) {
// if (numbers.length < 4) {
//   return console.log('array.length < 4');
// }
// return numbers.filter((item, array) => {
//   let counter = 1;
//   let result = [];
//   let shouldFindFirstNum = true;
//   let smallestNum;
//   while (shouldFindFirstNum) {
//     if (item > 0) {
//       smallestNum = numbers[array.indexOf(item)];
//       shouldFindFirstNum = false;
//     }
//   }
//   console.log(smallestNum);
// });
// if (numbers.length < 4) {
//   return console.log('array.length < 4');
// }
// let result = [];
// let smallestNum = numbers[0];
// numbers.forEach(item => {
//   if (item < smallestNum) {
//     smallestNum = item;
//   }
// });
// const smallestNumIdx = numbers.indexOf(smallestNum);
// numbers.splice(smallestNumIdx, 1);
// result.push(smallestNum);
// smallestNum = numbers[0];
// numbers.forEach(item => {
//   if (item < smallestNum) {
//     smallestNum = item;
//   }
// });
// result.push(smallestNum);
// return result[0] + result[1];
// }
// console.log(sumTwoSmallestNumbers([-2, 15, 28, 4, 2, 43])); // 6

// VLAD
// function sumTwoSmallestNumbers(numbers) {
//   const a = numbers.sort((a, b) => a - b);
//   return a[0] + a[1];
// }
// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13

// ANOTHER
// function isIsogram(str, log) {
//   console.log(log);

//   const arr = str.split('');
//   const stack = [];
//   let result = false;

//   arr.forEach(element => {
//     stack.push(element.toLowerCase());
//   });
//   const set1 = new Set(stack);
//   const arrBySet = [...set1]; // превращение обьекта из Set в массив

//   console.log(arrBySet, 'arrBySet');
//   console.log(stack, 'stack');

//   if (stack.length === arrBySet.length) {
//     result = true;
//   }
//   return result;
// }
// console.log(isIsogram('abA', 'правильный ответ = false'));
// console.log(isIsogram('abc', 'правильный ответ = true'));

// ANOTHER
// function replaceWords(string) {
//   const result = [];
//   const arr = string.split(' ');
//   for (const element of arr) {
//     const slisedElement = element.slice(0, 0).replaceAll('', 'qwe');
//     result.push(slisedElement);
//   }
//   return result.join(' ');
// }
// console.log(replaceWords('hi my name is Nikita')); // 5

// ANOTHER
