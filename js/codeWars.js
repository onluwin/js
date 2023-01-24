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



// function solution(str){
//     return str.split('').reverse().join('')
// }
// console.log(solution('word'));



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



