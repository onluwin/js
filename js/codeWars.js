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
