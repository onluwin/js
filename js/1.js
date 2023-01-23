function persistence(num) {
    const stringNum = String(num);
    let arrOfNum = stringNum.split('');
    if (stringNum.length === 1) {
        return 0;
    }
    let calculation = 10;
    
    console.log(arrOfNum);

    for (let i = 0; i < arrOfNum.length || String(calculation).length === 1; i += 1) {
        calculation = arrOfNum[i + 1] * arrOfNum[i];
        arrOfNum = calculation.toString().split('')
        i = 0
        console.log('arrOfNum ->', arrOfNum);
    }

    return calculation
}
console.log(persistence(39));