
// console.log(Math.PI.toFixed(2))
// console.log(Number(Math.PI.toFixed(2)))



// const base = Number(prompt('your number'));
// const power = Number(prompt('your power'));
// console.log(base ** power);



// const max = 100;
// const min = 1;
// console.log(Math.random() * (max - min) + min)



// let msg = prompt('Введите ваше имя');
// const userName = ('Ваше имя:');
// console.log(userName, msg);



// const userName = prompt('Введите ваше имя');
// const message = 'Ваше имя:';
// console.log(message, userName);



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



// let balance = 1000;
// const payment = 200;
// let result = balance - payment;
// const message = `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету.`;
// const succesMessage = "Операция завершена";

// console.log('На вашем счету ' + balance + ' кредитов')
// console.log(message)

// if (balance > payment) {
//     balance - payment
// console.log(`На счету осталось ${result} кредитов`);
//     console.log(succesMessage)
// } else {
//     console.log('На счету недостаточно средств для проведения операции!');
// }



// let totalSpent = 2000;
// let payment = 134;
// let discount = 0;
// let message;

// if (payment >= 100 && payment < 1000) {
//     discount = 0.02;
//     console.log('Бронзовый партнер, скидка 2%');
// } else if (payment >= 1000 && payment <= 5000) {
//     discount = 0.05;
//     console.log('Серебрянный партнер, скидка 5%');
// } else if (payment >= 5000) {
//     discount = 0.10;
//     console.log('Золотой партнер, скидка 10%');
// } else {
//     console.log('У вас еще нет партнерской скидки');
// }
// payment = payment - payment * discount;
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount}%`);
// totalSpent += payment;
// console.log(message = `Общая сумма потраченная в магазине: ${totalSpent}`);



// const totalSpent = 2000;
// let payment = 5000;
// let discount = 0;
// let message;

// (payment >= 100) ? discount = 2 : (payment < 1000);
// (payment >= 1000) ? discount = 5 : (payment <= 5000);
// (payment >= 5000) ? discount = 10 : (payment < 100);
// console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount}%`)



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



// let hours = 14;
// let minutes = 0;
// let result;
// (minutes === 0) ? result = `${hours} г.` : result = `${hours} г. ${minutes} хв.`;
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



// let userName;
// let userPassword;

// userName = prompt('Введите юзернейм.');

// function newUser() {
    
//     userPassword = prompt("Введите пароль длиннее 8-х символов");
//     if (userPassword.length < 8) {
//         console.log("Короткий пароль");
//         return newUser();
//     }
// }
// newUser();

// function inputName() {
//     let loginUserName = prompt('Ваш юзернейм(вход)');
 
//     if (userName !== loginUserName ) {
//         console.log("Не верный логин");
//         return inputName();
//     }
// }
// inputName();
// function inputPassword() {
    
//     let loginUserPassword = prompt('Ваш пароль(вход)');
//     if (userPassword !== loginUserPassword ) {
//         console.log("Не верный пароль");
//         return inputPassword();
//     }
//     console.log("Вы вошли в аккаунт");
// }
// inputPassword();



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



// const a = 120;
// const b = 180;

// (a > 100 && b > 100) ? (a > b) ? console.log(a) : console.log(b) : console.log(b + 512);



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



// const stars = 4;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 50;
//         break;
//     case 4:
//         price = 70;
//         break;
//     case 5:
//         price = 120;
//         break;

//     default: console.log('Такого кол-ва звёзд нет.');
// }
// console.log(price)



// const stars = 2;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 50;
//         break;
//     case 5:
//         price = 120;
//         break;

//     default: console.log('Такого кол-ва звёзд нет.');
// }
// console.log(price)



// let option = 1;
// let message;

// switch (option) {
//     case 1:
//         message = 'Вы можете забрать товар завтра с 12:00 в нашем офисе'
//         break;
//     case 2:
//         message = 'Курьер доставит заказ завтра с 9:00 до 18:00'
//         break;
//     case 3:
//         message = 'Посылка будет отправлена сегодня'
//         break;

//     default:
//         message = 'Вам перезвонит менеджер'
// }
// console.log(message);



// const employees = 6;
// const max = 5000;
// const min = 500;
// let salary = Math.random() * (max - min) + min;
// salary = salary.toFixed(0)
// const totalSalary = salary * employees;

// console.log(totalSalary);



// const employees = 6;
// const max = 5000;
// const min = 500;
// let salary;

// for (let i = 1; i <= employees; i += 1) {
//     salary = Math.round(Math.random() * (max - min) + min);
//     // console.log(`ЗП работника ${i} - ${salary}`);
// }
// let totalSalary = salary * employees;
// console.log(totalSalary);



// for (let i = 10; i >= 1; i -= 1) {
//     console.log(i);
// }



// const max = 13;
// const min = 6;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         console.log(`чётное: ${i}`);
//         total += i;
        
//     }
// }
// console.log(`total: ${total}`);



// const max = 13;
// const min = 5;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log(`Не чётное: ${i}`);
//         total += i;
//     } else {
//         console.log(`Чётное: ${i}`);
//     }
// }
// console.log(`total: ${total}`);



// const cart = [54, 28, 105, 78, 92, 17, 120];
// let total = 0;

// for (let i = 0; i < cart.length; i += 1) {
//     console.log(cart[i]);
//     total += cart[i]
// }
// console.log(`Total: ${total}`);



// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         total += number;
//     }
// }
// console.log(`Total: ${total}`);



// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден`;

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`
//         break;
//     }
// }
// console.log(message);



// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// let message = `Пользователь ${loginToFind} не найден`;

// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Пользователь ${loginToFind} найден`
//         break;
//     }
// }
// console.log(message);



// const findLogin = function findLogin(logins, loginToFind) {
//     let message = `Пользователь ${loginToFind} не найден`
//     for (const i of logins) {
//         if (loginToFind === i) {
//             message = `Пользователь ${loginToFind} найден`
//         }
//     }
//     return message;
// }
// console.log(findLogin(['max', 'onluwin'], 'onluwin'));



// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n', 'onluwin'];
// const findLogin = function findLogin(allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (loginToFind === login) {
//             return `Пользователь ${loginToFind} найден в базе данных`
//         }
//     }
//     return `Пользователь ${loginToFind} не найден в базе данных`;;
// }
// console.log(findLogin(logins, 'onluwin'));



// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n', 'onluwin'];

// const findLogin = function findLogin(allLogins, loginToFind) {
//     return (logins.includes(loginToFind)) ? `Пользователь ${loginToFind} найден в базе данных` : `Пользователь ${loginToFind} не найден в базе данных`;
// }
// console.log(findLogin(logins, 'onluwin'));



// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
// const loginToFind = 'poly1scute';
// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;

// console.log(message);



// const numbers = [21, 83, 43, 92, 2, 12, 24]
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);



// const findSmallestNumber = function findSmallestNumber(arrayNumbers) {
//     let smallestNumber = arrayNumbers[0]
//     for (const number of arrayNumbers) {
//         if (number < smallestNumber) {
//             smallestNumber = number;
//         }
//     }
//     return `Smallest number: ${smallestNumber}`;
// }
// console.log(findSmallestNumber([1, 5, 8, -2, -59, 192]));



// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax']
// let string = ''

// // for (let i = 0; i < friends.length; i += 1) {
// //     console.log(friends[i]);
// // }   // НЕ ЗНАЮ ЗАЧЕМ)))

// string = friends.join(', ')
// console.log(string);



// let string = 'JavaScript';
// let newString = '';
// let message = '';

// string = string.split('');
// for (const letter of string) {
//     if (letter === letter.toLowerCase()) {
//         newString += letter.toUpperCase();
//         console.log(message = `Эта буква в нижнем регистре - ${letter}`);
//     } else if (letter !== letter.toLowerCase()) {
//         letter.toLowerCase();
//         newString += letter.toLowerCase();
//         console.log(message = `Эта буква в верхнем регистре - ${letter}`);
//     }
// }
// console.log('Обычная строка:',string.join(''));
// console.log(`Инверсия: ${newString}`);



// let string = 'JavaScript';
// let inverseString = '';

// for (const letter of string) {
//     console.log(letter);
//     inverseString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log('Обычная строка:', string);
// console.log('Инверсия:', inverseString);



// for (const letter of string) {
//     console.log(letter);
//     inverseString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log('Обычная строка:', string);
// console.log('Инверсия:', inverseString);



// const changeCase = function changeCase(string) {
//     let inverseString = '';
//     for (const letter of string) {
//         inverseString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
//     }
//     return `Строка с противоположным регистром: ${inverseString}`;
// }
// console.log(changeCase('JavaScript'));
// console.log(changeCase('OnluWin'));



// let title = 'Top 10 benefits of React framework';

// title = title.toLowerCase();
// title = title.split(' ');
// title = title.join('-');

// console.log(title);



// let title = 'Top 10 benefits of React framework';

// title = title.toLowerCase();
// title = title.split(' ');
// title = title.join('-');

// console.log(title);



// const slugify = function slugyfy(string) {
//     return string.toLowerCase().split(' ').join('-');

// }
// console.log(slugify('Top 10 benefits of React framework'));



// const title = 'Top 10 benefits of React framework';
// const slug = title.toLowerCase().split(' ').join('-')

// console.log(slug);



// const numbers1 = [5, 10, 15, 20];
// const numbers2 = [10, 20, 30];
// const numbers = numbers1.concat(numbers2);
// let sum = 0;

// console.log(numbers);
// for (const number of numbers) {
//     sum += number;
// }
// console.log('Общая сумма чисел:', sum);



// let genres = ['Jazz', 'Blues'];

// genres.push("rock'n'roll");
// console.log(genres);
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// genres.shift();
// console.log(genres);
// genres.unshift('Country', 'Reggy')
// console.log(genres);



// const genres = ['Juzz', 'Blues', "Rock'n'roll", 'Country', 'Reggy'];
// let longestGenre = genres[0];

// for (const genre of genres) {
//     if (genre.length > longestGenre.length) {
//         longestGenre = genre;
//     }
// }
// console.log('Самый длинный жанр: ',longestGenre);



// let values = '8 11'
// let square = 0;

// values = values.split(' ')
// square = values[0] * values[1];
// console.log(square);



// let names = 'Jacob, William, Solomon, Artemis';
// let phones = '0996642376,0558883451,0773361296,0445326781';

// names = names.split(', ')
// phones = phones.split(',')
// console.log(names);
// console.log(phones);
// for (let i = 0; i < names.length; i += 1) {
//     console.log(`${names[i]} - ${phones[i]}`);
// }



// let string = 'Welcome to the fututre!';
// string = string.split('');
// const reverseStringToArray = string.reverse()
// const reverseString = reverseStringToArray.join('')

// console.log(reverseString);



// const employees = ['Denis', 'Denis', 'Shaw', 'Watkins', 'Watkins', 'Ray'];
// let filteredEmployees = [];

// for (let i = 0; i < employees.length; i += 1) {
//     console.log(employees[i]);
//     if (i === employees.indexOf(employees[i])) {
//         filteredEmployees = filteredEmployees.push(employees[i])
//     }
// }
// console.log(filteredEmployees);



// let filteredEmployees = ['Denis', 'Shaw', 'Watkins', 'Ray'];
// const indexOfRemoveElement = filteredEmployees.indexOf("Shaw")

// filteredEmployees.splice(indexOfRemoveElement, 1);
// console.log(filteredEmployees);



// let filteredEmployees = ['Denis', 'Shaw', 'Watkins', 'Ray'];
// const indexOfRemoveElement = filteredEmployees.indexOf("Shaw")
// const indexOfWatkins = filteredEmployees.indexOf('Watkins');

// filteredEmployees.splice(indexOfRemoveElement, 1);
// filteredEmployees.splice(indexOfWatkins - 1, 0, 'Thornton')
// console.log(filteredEmployees);



// const caltulateTotalPrice = function (items) {
//     let total = 0;
//     for (const item of items) {
//         total += item;
//     }
//     console.log(`Array: [${items}]`);
//     return `Total price: ${total}`;
// }

// console.log(caltulateTotalPrice([1, 2, 3]));
// console.log(caltulateTotalPrice([1245, 252, 183]));



// const calculateRatio = function (a) {
//     let total = a * 37;
//     let message = `${a} долларов = ${total} грн`

//     return message;
// }
// console.log(calculateRatio(10));



// const logItems = function logItems(items) {
//     for (const item of items) {
//         console.log(item);
//     }
// }
// logItems(['клавиатура', 'часы', 'наушники']);
// logItems([1, 2, 3]);
// logItems(['4', '5', '6']);



// const add = function add(...parametres) {
//     let total = 0;
//     for (const number of parametres) {
//         total += number;
//     }
//     return `Total: ${total}`
// }
// console.log(add(5,7,2,8,246))



// const filterNumbers = function (array, ...parametres) {
//     const filteredArray = [];
//     for (const number of array) {
//         if (parametres.includes(number)) {
//             filteredArray.push(number)
//         }
//     }
//     return `Filtered array: ${filteredArray}`;
// }
// console.log(filterNumbers([2,5,82,1], 8, 2, 4, 1, 82));



