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



function persistence(num) {
    const stringNum = String(num);
    let arrOfNum = stringNum.split('');
    if (stringNum.length === 1) {
        return 0;
    }
    let calculation = 10;
    
    // console.log(arrOfNum);
    let answer = 0

    arrOfNum.reduce((previousValue, element, index, array) => {
        
        previousValue = array[index] * array[index + 1]
        console.log(previousValue);
        return previousValue
    }, 0);

    return answer
}
console.log(persistence(999));



