// console.log(Math.PI.toFixed(2))
// console.log(Number(Math.PI.toFixed(2)))



// const base = Number(prompt('your number'));
// const power = Number(prompt('your power'));
// console.log(base ** power);



// const max = 100;
// const min = 1;
// console.log(Math.random() * (max - min) + min)


// let msg = prompt('введите ваше имя');
// const yn = ('ваше имя:');
// console.log(yn, msg);



// let balance = 1000;
// const payment = 200;
// let result = balance - payment;
// const message = `Общая стоимость заказа` + ' ' + payment + ' ' + 'кредитов. Проверяем кол-во доступных средств на счету.';
// const succesMessage = "Операция завершена"

// console.log('На вашем счету ' + balance + ' кредитов')
// console.log(message)

// if (balance > payment) {
//     balance - payment
//     console.log('На счету осталось ' + result + ' кредитов')
//     console.log(succesMessage)
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }



// const totalSpent = 2000;
// let payment = 99;
// let discount = 0;
// let message;

// if (payment >= 100) {
//     discount = 2;
// } else (payment < 1000)

// if (payment >= 1000) {
//     discount = 5;
// } else (payment <= 5000);

// if (payment >= 5000) {
//     discount = 10;
// } else (payment < 100); {
//     discount;
// }

// console.log('Оформляем заказ на сумму ' + payment + ' ' + 'со скидкой' + ' ' + discount + '%')



// let weight = '88.3';
// let height = '1.75';
// const bmi = weight / (height * height);
// console.log(bmi.toFixed(1))



// const officialNameJs = prompt('Какое официальное название JavaScript?');
// if (officialNameJs === 'ECMAScript') {
//     alert('Верно!')
// } else {
//     alert('Не знаете? ECMAScript!')
// }



// let hours = 14;
// let minutes = 1;
// let result;

// if (minutes === 0) {
//     result = `${hours} г.`
// } else {
//     result = `${hours} г. ${minutes} хв.`
// }
// console.log(result)



// const userNumber = prompt('Введите число')
// let message;

// if (userNumber > 0) {
//     message = 'Это обычное число';
//     console.log(message)
// }
// if (userNumber == 0 || userNumber === 0) {
//     message = 'Это ноль';
//     console.log(message)
// }
// if(userNumber < 0 ) {
//     message = 'Это отрицательное число';
//     console.log(message)
// }



// console.log('Здравствуйте!');
// let registerUserName = prompt('Введите юзернейм.');
// let registerUserPassword = prompt('Введите пароль. (8 или больше символов)');
// let isLogIn = false;
// let message;
// let registerSucces = false;
// if (registerUserPassword.length >= 8) {
//     registerSucces = true;
//     isLogIn = false;
//     console.log(message = 'Вы успешно создали аккаунт!');
// } else {
//     console.log(message = 'Ваш юзернейм или пароль слишком короткий!');
//     registerSucces = false;
//     isLogIn = false;
// }

// let inputUserName;
// let inputUserPassword;

// if (registerSucces == true && isLogIn === false) {
//     inputUserName = prompt('Ваш юзернейм(вход)');
//     inputUserPassword = prompt('Ваш пароль(вход)');
// }
// if (registerSucces === true && inputUserName === registerUserName && inputUserPassword === registerUserPassword) {
//     isLogIn === true;
//     console.log(message = 'Вы успешно вошли в аккаунт!')
// }
// if (registerSucces === true  && inputUserName !== registerUserName && inputUserPassword !== registerUserPassword) {
//     console.log(message = 'Юзернейм или пароль неверен! Попробуйте еще раз.')
//     isLogIn === false;
// }
// НЕ РАБОТАЕТ--------------------------------------------------------------------------------------------------------------------------------



// const a = 120;
// const b = 180;

// if (a > 100 && b > 100) {
//     if (a > b) {
//         console.log(a)
//     } else {
//         console.log(b)
//     }
// } else {
//     console.log(b + 512)
// }



// let link = 'https://my-site.com/about';

// if (link.endsWith('t')) {
//     link = `${link}/`
// }
// console.log(link)



// let link = 'https://my-site.com/about';

// if (link.endsWith('t') && link.includes("my-site")) {
//     link = `${link}/`
// }
// console.log(link)



// const a = 120;
// const b = 180;

// (a > 100 && b > 100) ? (a > b) ? console.log(a) : console.log(b) : console.log(b + 512);



// const daysUntilDeadLine = 5;
// let message;

// if (daysUntilDeadLine === 0) {
//     message = 'Сегодня';
// } else if (daysUntilDeadLine === 1) {
//     message = 'Завтра';
// } else if (daysUntilDeadLine === 2) {
//     message = 'Послезавтра';
// } else {
//     message = 'Дата в будущем';
// }
// console.log(message)




// const daysUntilDeadLine = 5;
// let message;

// switch (daysUntilDeadLine) {
//     case 0:
//         message = 'Сегодня';
//         break;
//     case 1:
//         message = 'Завтра';
//         break;
//     case 2:
//         message = 'Послезавтра';
//         break;

//     default: message = 'Дата в будущем';
//         break;
// }
// console.log(message)



// const hours = 10;
// let message;

// if (hours < 17) {
//     message = 'Pending'
// } if (hours >= 17 && hours <= 24) {
//     message = 'Expires'
// }
// if (hours > 24) {
//     message = 'Overdue'
// } else {
//     message = 'To match'
// }
// console.log(message)



// const max = 100;
// let min = 20;

// for (min; min <= max; min = min + 5) {
//     console.log(min)
// }



// let userInput = prompt('Введите логин')
// let adminPassword;
// let message;

// do {
//     if (userInput === 'Админ') {
//     adminPassword = prompt('Введите пароль')
// } else {
//     message = 'Я вас не знаю'
// }
// if (adminPassword === 'Я админ') {
//     message = 'Здравствуйте!'
// } else {
//     message = 'Неверный пароль!'
// }
// if (userInput = "") {
//     message = 'Отменено'
// }
// console.log(message)
// } while (userInput !== 'Админ' && adminPassword !== "Я админ")



