// import products from './products.js'



////////////////////////////// MODULE 1 //////////////////////////////



// console.log(Math.PI.toFixed(2))
// console.log(Number(Math.PI.toFixed(2)))



// const base = Number(prompt('your number'));
// const power = Number(prompt('your power'));
// console.log(base ** power);



// const max = 3;
// const min = 1;
// const result  = Number(Math.random() * (max - min) + min)
// console.log(result.toFixed(0))



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



////////////////////////////// MODULE 2 //////////////////////////////



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



// const calcBmi = function (weight = 0, height = 0) {
//     weight = Number(weight);
//     height = Number(height);
//     let result = weight / (height * height);
//     return `Ваш bmi: ${result.toFixed(1)}`;
// }
// console.log(calcBmi(43, 1.65));



// const calcMinNumber = function (a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Один из параметров не число!';
//     }
//     let minNumber = 0;
//     if (a < b) {
//         return minNumber = a;
//     }
//     return minNumber = b;
// }
// console.log(calcMinNumber(11, 10));



// const calcArea = function (dimensions) {
//     const dimensionsArray = dimensions.split(' ')
//     let message = 'Площадь прямоугольника равна: ';
//     return message + Number(dimensionsArray[0]) * Number(dimensionsArray[1]);
// }
// console.log(calcArea('2 6'));



// const calcAverageNumber = function (...parametres) {
//     let total = 0;
//     for (const parameter of parametres) {
//         total += parameter / parametres.length;
//     }
//     return `Среднее число: ${total}`
// }
// console.log(calcAverageNumber(1,2,3,4));



// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'Ruby'];
// let message = 'Уже включает в себя этот языкю.'

// const addCourse = function (name) {
//     if (courses.includes(name)) {
//         return message;
//     }
//     courses.push(name)
//     return courses;
// }
// console.log(addCourse('C++'));

// const removeCourse = function (name) {
//     if (courses.includes(name)) {
//         courses.splice(name, 1)
//         return courses;
//     }
//     return message = 'В списке такого языка нет';
// }
// console.log(removeCourse('HTML'));

// const updateCourse = function (oldName, newName) {
//     if (courses.includes(oldName)) {
//         courses.splice(oldName, 1, newName)
//         return courses
//     }

//     return message = 'В списке такого языка нет';
// }
// console.log(updateCourse('CSS', 'C#'));



// function calculateTotal(number) {

//     let total = 0;
// for (let i = 0; i <= number; i += 1) {
//     total += i;
// }
//     return total;
// }
// console.log(calculateTotal(3))



// function filterArray(numbers, value) {

//     const newArray = []
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] > value) {
//             newArray.push(numbers[i])
//         }
//     }

//     return newArray;
// }



////////////////////////////// MODULE 3 //////////////////////////////



// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 200
// };
// let total = 0;

// for (const key in salaries) {
//     total += salaries[key]
// }
// console.log(total);



// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 200
// };
// let total = 0;
// const salariesValues = Object.values(salaries);

// for (const salary of salariesValues) {
//     total += salary;
// }

// console.log(total);



// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 200
// };
// const developersSalaries = Object.create(salaries)
// const salariesValue = Object.values(salaries)
// let total = 0;

// developersSalaries.Artem = 200;
// developersSalaries.Nikita = 500;

// for (const salariesValue in developersSalaries) {
//     if (developersSalaries.hasOwnProperty(salariesValue)) {
//         total += developersSalaries[salariesValue];
//     }
// }
// console.log(`Total: ${total}`);



// const films = [
//     {
//         title: 'Duna',
//         rating: 5
//     },
//     {
//         title: 'Venom',
//         rating: 7
//     },
//     {
//         title: 'Luca',
//         rating: 2
//     }
// ]
// const titles = []
// const getAllTitlesOfFilms = function (films) {

//     for (const film of films) {
//         titles.push(film.title)
//     }
//     return titles
// }
// console.log(getAllTitlesOfFilms(films));



// const films = [
//     {
//         title: 'Duna',
//         rating: 5
//     },
//     {
//         title: 'Venom',
//         rating: 7
//     },
//     {
//         title: 'Luca',
//         rating: 2
//     }
// ]
// const findFilmByName = function (films, filmTitle) {
//     for (const film in films) {
//         if (films[film].title === filmTitle) {
//             return films[film];
//         }
//     }
// }
// console.log(findFilmByName(films, 'Luca'));



// const films = [
//     {
//         title: 'Duna',
//         rating: 5
//     },
//     {
//         title: 'Venom',
//         rating: 7
//     },
//     {
//         title: 'Luca',
//         rating: 2
//     }
// ]

// const findFilmByName = function (films, filmTitle) {

//     for (const film in films) {
//         if (films[film].title === filmTitle) {
//             return films[film];
//         }
//     }
// }
// console.log(findFilmByName(films, 'Venom'));



// const films = [
//     {
//         title: 'Duna',
//         rating: 5,
//         adult: false
//     },
//     {
//         title: 'Venom',
//         rating: 7,
//         adult: true
//     },
//     {
//         title: 'Luca',
//         rating: 2,
//         adult: false
//     }
// ]

// const getAdultsFilms = function (films) {
//     const adultFilms = []
//     for (const film of films) {
//         if (film.adult) {
//             adultFilms.push(film)
//         }
//     }
//     return adultFilms;
// }
// console.log(getAdultsFilms(films));



// const films = [
//     {
//         title: 'Duna',
//         rating: 5,
//         adult: false
//     },
//     {
//         title: 'Venom',
//         rating: 7,
//         adult: true
//     },
//     {
//         title: 'Luca',
//         rating: 2,
//         adult: false
//     }
// ]

// const getNotAdultsFilms = function (films) {
//     const allFilms = []
//     for (const film of films) {
//         if (film) {
//             allFilms.push(film)
//         }
//     }
//     return allFilms;
// }
// console.log(getNotAdultsFilms(films));



// const feedBack = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }
// let totalFeedBack = 0;
// const feedBackValues = Object.values(feedBack);

// for (const feedBackValue of feedBackValues) {
//     totalFeedBack += feedBackValue;
// }

// console.log(`Total feedback: ${totalFeedBack}`);



// const friends = [
//     { name: 'Poly', isOnline: false, },
//     { name: 'Mango', isOnline: true, },
//     { name: 'Ajax', isOnline: false, },
//     { name: 'Kiwi', isOnline: true, },
// ]
// const findFriendByName = function (allFriends, friendNameToFind) {
//     for (const friend of allFriends) {
//         if (friend.name === friendNameToFind) {
//             return friend
//         }
//     }
// }
// console.log(findFriendByName(friends, 'Mango'));



// const friends = [
//     { name: 'Poly', isOnline: false, },
//     { name: 'Mango', isOnline: true, },
//     { name: 'Ajax', isOnline: false, },
//     { name: 'Kiwi', isOnline: true, },
// ]
// const getAllNames = function (allFriends) {
//     const allFriendsNames = [];
//     for (const friend of allFriends) {
//         allFriendsNames.push(friend.name);
//     }
//     return allFriendsNames;
// }
// console.log(getAllNames(friends));



// const friends = [
//     { name: 'Poly', isOnline: false, },
//     { name: 'Mango', isOnline: true, },
//     { name: 'Ajax', isOnline: false, },
//     { name: 'Kiwi', isOnline: true, },
// ]
// const friendsByOnlineStatus = { onlineFriends: [], offlineFriends: [] }
// const getFriendsByOnlineStatus = function (allFriends) {

//     for (const friend of allFriends) {
//         if (friend.isOnline) {
//             friendsByOnlineStatus.onlineFriends.push(friend)
//         } else {
//             friendsByOnlineStatus.offlineFriends.push(friend)
//         }
//     }

//     return friendsByOnlineStatus;
// }
// console.log(getFriendsByOnlineStatus(friends));



// const x = {
//     a: 5,
//     b: 2,
//     c: 8,
//     d:1,
// }
// console.log(Object.keys(x).length);



// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         this.items.push(product)
//     },
//     remove(productName) {

//         for (let i = 0; i < this.items.length; i += 1) {

//             const item = this.items[i]

//             if (productName === item.name) {
//                 return this.items.splice(i ,1)
//             }
//         }
//     },
//     clear() {
//         this.items.length = 0
//     },
//     countTotalPrice() {
//         let totalPrice = 0;
//     },
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// }

// cart.add({productName:'микроволновка'});
// cart.add({productName: 'чайник', price: 100});
// // cart.clear()
// cart.remove('микроволновка');
// // console.log(cart.remove('микроволновка'));
// // console.log(cart.items);
// // console.log(cart.getItems());
// // cart.clear()
// // console.log(cart.getItems());




// function countProps(object) {
//     let propCount = 0;

//     for (const key in object) {

//         if (object.hasOwnProperty(key)) {
//         propCount = Object.keys(object).length
//     }
// }

//     return propCount;
// }
// console.log(countProps({name: 'Mango', age: 50, location: {country: 'Ukraine',}}));



// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     const allSalary = Object.values(salaries)

//     for (const salary of allSalary) {
//         totalSalary += salary
//     }

//     return totalSalary;
// }
// console.log(countTotalSalary({Nikita: 500, Dima: 200, Maks: 1000,}));



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {

//     for (const product of products) {

//         if (productName === product.name) {
//         return product.price
//         }

//     }
//     return null
// }
// console.log(getProductPrice("Scanner"));



///////////////////////////////////////////////////////  19 //////////////////////////////////////////////////////

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     const array = []
//     for (const product of products) {
//         const keys = Object.keys(product)
//         // console.log(Object.keys(product));
//         // console.log(product);
//         for (const key of keys) {
//             if (propName === key) {
//             array.push(Object.values(keys))
//             return array
//         }
//         }
//         // console.log(keys);
//         console.log(Object.values(keys));

//     }
// }
// console.log(getAllPropValues('name'));



// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let totalPrice = 0;

//     for (const product of products) {
//         // console.log(product);
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }
//     }

//     return totalPrice;
// }
// console.log(calculateTotalPrice("Droid"));



// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {

//         const bookIndex = this.books.indexOf(oldName);
//         this.books.splice(bookIndex, 1)
//         this.books.splice(bookIndex, 0, newName)
//         return this.books

//     },
// };
// console.log(bookShelf.updateBook("Haze", 'S-MAN'));



// const atTheOldToad = {
//     potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//     ],
//     getPotions() {
//     return this.potions;
//     },
//     addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//     },
//     removePotion(potionName) {

//         // console.log(potionIndex);
//         // console.log(this.potions.indexOf(potionName));
//         for (let i = 0; i < this.potions.length; i += 1) {
//             const potionIndex = this.potions.indexOf(potionName);
//             if (this.potions[i].name === potionName.name) {
//                 this.potions.splice(potionIndex, 1);
//                 return
//             }


//         return `Potion ${potionName.name} is not in inventory!`;
//         }

//     } ,

//     updatePotionName(oldName, newName) {
//         const updatePotionIndex = this.potions.indexOf(oldName);
//         const newObject = { }
//         for (let i = 0; i < this.potions.length; i++) {
//             if (this.potions[i].name === oldName) {
//                 this.potions[i].name = newName
//                 return
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     }
// }

// // // console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 },));
// // console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 520 },));

// console.log(atTheOldToad.getPotions());
// // console.log(atTheOldToad.removePotion({ name: "Speed potion", price: 460 }));
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.updatePotionName("Stone skin", 'SP-MAN'));
// console.log(atTheOldToad.getPotions());



// const forecast = {
//     today: {
//     low: 28,
//     high: 32,
//     },
//     tomorrow: {
//     low: 27,
//     high: 31,
//     },
// };
// // Change code below this line

// const { today: { low: todayLow, high: todayHigh, icon: todayIcon1 = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
//         tomorrow: { low: tomorrowLow, high: tomorrowHigh, icon: tomorrowIcon1 = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" }, } = forecast;

// const highToday = todayHigh;
// const lowToday = todayLow;
// const todayIcon = todayIcon1;

// const highTomorrow = tomorrowHigh;
// const lowTomorrow = tomorrowLow;
// const tomorrowIcon = tomorrowIcon1;

// console.log(highToday, tomorrowHigh, todayIcon1); НЕ ДОПИСАНО (3 mod, задача 26 вроде)



// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {

//     let totalPrice = 0;
//     for (let product of products) {
//         if (product.name === productName) {
//     totalPrice = product.price * product.quantity;
//     }
// }
// return totalPrice

// }
// console.log(calculateTotalPrice('Radar'));



////////////////////////////// MODULE 4 //////////////////////////////



// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach((number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`);
// }); ///////////////////////// BETTER /////////////////////////

// numbers.forEach((number, index) => console.log(`Индекс ${index}, значение ${number}`));



// const numbers = [1, 6, 4, 7, 2]
// const logMessage = (number, index) => {
//     console.log(`Индекс ${index}, значение ${number}`)
// }

// numbers.forEach(logMessage);



// const numbers = [1, 6, 4, 7, 2]

// const duoubledNumbers = numbers.map((number) => number * 2)
// console.log(duoubledNumbers);



// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
// ];
// const studentsNames = students.map(student => student.name);
// console.log(studentsNames);



// const students = [
//     { name: "Манго", courses: ["математика", "физика"] },
//     { name: "Поли", courses: ["информатика", "математика"] },
//     { name: "Киви", courses: ["физика", "биология"] },
// ];

// const allCourses = students.flatMap(student => student.courses);
// // console.log(allCourses);
// const filteredCourses = allCourses.filter((course, index, array) => array.indexOf(course) === index)
// console.log(filteredCourses);



// Clear fuction

// const numbers = [1, 2, 3, 4, 5]
// const clearMultiply = (number, value) => {
//     const newNumbers = []
//     for (let i = 0; i < numbers.length; i += 1) {
//         newNumbers.push(numbers[i] * value)
//     }
//     return newNumbers
// }
// console.log(clearMultiply(numbers, 5));



// const numbers = [1, 2, 3, 4, 5, 2, 5]
// const uniqueNumbers = numbers.filter((number, index, array) => array.indexOf(number) === index)
// console.log(uniqueNumbers);



// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, makePizza, onOrderError) {
//         for (let pizza of pizzaPalace.pizzas) {
//             // console.log(pizza);
//             // console.log(pizzaName);
//             if (pizza === pizzaName) {
//                 // console.log('есть');
//                 return makePizza(pizzaName)
//             }

//         }
//         return onOrderError(`There is no pizza with a name ${pizzaName} in the assortment.`)
//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//     return `Error! ${error}`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Vienna', makePizza, onOrderError));



// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = []
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//         newArray.push(numbers[i] + value)
//       // numbers[i] = numbers[i] + value;
//     } else {
//         newArray.push(numbers[i])
//     }

//     }
//   // Change code above this line
//     return newArray
// }
// console.log(changeEven([1,2,3,4,5], 2));



// const books = [
//     {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//     },
//     {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//     },
//     {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => {
//     return book.title
// });
// console.log(titles);



// const getFriends = (users) => {
//     const allFriends = users.flatMap(user => user.friends)
//     const filteredFriends = allFriends.filter((user, index, array) => array.indexOf(user) === index)
//     return filteredFriends
// };
// console.log(getFriends([
//     {
//     friends: ["Sharron Pace"],
//     },
//     {
//     friends: ["Briana Decker", "Sharron Pace"],
//     },
//     {
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     },
//     {
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     },
//     {
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     },
//     {
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     },
//     {
//     friends: ["Goldie Gentry", "Briana Decker"],
//     }
// ]));



// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];


// const totalAveragePlaytimePerGame = players.reduce((prevValue, player) => {
//     const a = player.playtime / player.gamesPlayed
//     return prevValue + a
// }, 0);
// console.log(totalAveragePlaytimePerGame);



// const users = [
//     {
//     balance: 2811,
//     },
//     {
//     balance: 3821,
//     },
//     {
//     balance: 3793,
//     },
//     {
//     balance: 2278,
//     },
//     {
//     balance: 3951,
//     },
//     {
//     balance: 1498,
//     },
//     {
//     balance: 2764,
//     }
// ]

// const calculateTotalBalance = users => {
//     const totalBalance = users.reduce((prevBalance, user) => {
//         return prevBalance + user.balance
//     }, 0)
//     return totalBalance
// };
// console.log(calculateTotalBalance(users));


// const users = [
//     {
//     friends: ["Sharron Pace"],
//     },
//     {
//     friends: ["Briana Decker", "Sharron Pace"],
//     },
//     {
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     },
//     {
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     },
//     {
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     },
//     {
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     },
//     {
//     friends: ["Goldie Gentry", "Briana Decker"],
//     }
// ]

// const getTotalFriendCount = users => {
//     return users.reduce((prevValue, user) => prevValue + user.friends.length, 0)
// };
// console.log(getTotalFriendCount(users));



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].sort((a,b) => {
//     if(a.author > b.author) {
//       return 1
//     }
//     if(a.author < b.author) {
//       return -1
//     }
//   })
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((a,b) => {
//     if(a.author > b.author) {
//       return 1
//     }
//     if(a.author < b.author) {
//       return -1
//     }
//   })



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getSortedFriends = users => {
//     const uniqueFriends = [...users].filter((user,index,array) => {
//         return array.indexOf(user.friends === index)
//     })
//     console.table(uniqueFriends);
//     console.log(uniqueFriends);
// };

// const getSortedFriends = users => {
//     return [...users]
//         .flatMap(user => user.friends)
//         .filter((user, index, array) => array.indexOf(user) === index)
//         .sort((a, b) => {
//             if (a > b) {
//                 return 1
//             }
//             if (a < b)
//                 return -1
//         })
// };
// console.log(getSortedFriends(users));



// const getTotalBalanceByGender = (users, gender) => {
//     return [...users]
//     .reduce((prevValue, user, balance) => {
//     if(user.gender === gender) {
//         return prevValue + user.balance
//     }
//     }, 0)
// };

// const getTotalBalanceByGender = (users, gender) => {
//     let newArray = []
//     for (const user of users) {
//         if (user.gender === gender) {
//             newArray.push(user)
//         }
//     }
//     newArray = newArray.map(user => user.balance)
//     let total = 0
//     for (let i = 0; i < newArray.length; i += 1) {
//         total += newArray[i]
//     }
//     return total
// };
// console.log(getTotalBalanceByGender(users, 'female'));



// const getTotalBalanceByGender = (users, gender) => {
//     return [...users]
//     .filter((user) => user.gender === gender)
//     .map(user => user.balance)
//     .reduce((prevBalance, balance) => prevBalance + balance)
// };
// console.log(getTotalBalanceByGender(users,'male'));


// const numbers = [1, 2, 3, 4, 5]
// const newArray = []
// for (const number of numbers) {
//     if (number > 2) {
//         newArray.push(number)
//     }
// }
// console.log(newArray);



////////////////////////////// MODULE 5 //////////////////////////////



// const showName = function()  {
//     console.log('name -> ' + this.userName);
// }
// const objA = {
//     userName: 'Mango'
// }
// showName.call(objA) // Mango



// const objA = {
//     x: 5
// }
// const objB = {
//     y:10
// }
// const objC = {
//     z:15
// }
// objA.Object.create(objB)
// console.log(objA.y);



////////////////////////////// MODULE 6 //////////////////////////////



// // innerHTML
// const title = document.querySelector('.title')
// console.log(title.innerHTML); // HTML title
// title.innerHTML = 'title after innerHTML'
// console.log(title.innerHTML); // title after innerHTML



// const button = document.querySelector(".btn");
// const handleClick = (event) => {
//   console.log("event: ", event);
//   console.log("event type: ", event.type);
//   console.log("currentTarget: ", event.currentTarget);
// };

// button.addEventListener("click", handleClick);



// предотвращение действий браузера по умолчанию
// предотвращение перезагрузки сайта после отправки формы.

// const form = document.querySelector('.form')
// const input = document.querySelector('.form-input')
// const btnSubmit = document.querySelector('.form-btn')
// const callback = function (event) {
//     event.preventDefault()
// }
// form.addEventListener('submit', callback)



// document.addEventListener("keydown", event => {
//     // event.preventDefault() отменяет перезагрузку сайта при нажатии F5
//     console.log("key: ", event.key);
//     console.log("code: ", event.code);
// });



// Отслеживание комбинаций клавиш

// document.addEventListener("keydown", event => {
//     event.preventDefault();

//     if ((event.ctrlKey || event.metaKey) && event.code === "KeyS") {
//         console.log("«Ctrl + s» or «Command + s» combo");
//     }
//     if (event.shiftKey && event.code === 'AltLeft' || event.altKey && event.code === `ShiftLeft` || event.code === 'ShiftRight') {
//         console.log("«Alt + Shift» or «Shift + Alt» «Alt + ShiftRight» combo => Swap languages");
//     } // При нажатии RightShift делает 'console.log()', ошибка!
// });



// Валидация форм || получение данных из формы

// const form = document.querySelector('.form')
// const input = document.querySelector('.form-input')
// const callback = function (event) {
//     console.log(input.value);
//     event.preventDefault()
//     if (input.value.length === 3) {
//         input.classList.toggle('valid')
//     } else if (input.value.length !== 3) {
//         input.classList.add('invalid')
//     }
// }

// form.addEventListener('submit', callback)

// Не доделано - когда после валидных данных пишешь не валидные
// и потом снова валидные - инпут остаёться красным.



// const productsContainerEl = document.querySelector('.js-products')
// const makeProductCard = function ({name,description,price}) {
//     const articleEl = document.createElement('article')
//     articleEl.classList.add('product')

//     const articleTitleEl = document.createElement('h2')
//     articleTitleEl.classList.add('product__name')
//     articleTitleEl.textContent = name

//     const articleDescrEl = document.createElement('p')
//     articleDescrEl.classList.add('product__descr')
//     articleDescrEl.textContent = description

//     const articlePriceEl = document.createElement('p')
//     articlePriceEl.classList.add('product__price')
//     articlePriceEl.textContent = `Цена: ${price} грн`

//     articleEl.append(articleTitleEl, articleDescrEl, articlePriceEl)
//     return articleEl
// }
// const markup = products.map(makeProductCard)
// productsContainerEl.append(...markup)



// const refs = {
//     btn: document.querySelector('#hide'),
//     text: document.querySelector('#text'),
// }
// refs.btn.addEventListener('click', () => {
//     // refs.text.innerHTML = ''
//     // refs.text.remove()
//     // refs.text.style.display = 'none'
//     // refs.text.classList.add('hide')
//     // refs.text.textContent = ''

// })



// const refs = {
//     input: document.querySelector('#inputText'),
//     btn: document.querySelector('#inputBtn'),
// }
// const callback = () => {
//     if (refs.input.value === '') {
//     refs.input.value = 'test@gmail.com'
// }
// }
// refs.btn.addEventListener('click', callback)



// const refs = {
//     input: document.querySelector('#text1'),
//     btn: document.querySelector('#btn1'),
// }

// const callback = () => {
//     const inputValue = refs.input.value.trim()
//     if (inputValue === '') {
//     alert('Вы ничего не ввели')
// } else {
//     alert(`Вы ввели: ${inputValue}`)
// }
// }
// refs.btn.addEventListener('click', callback)



// const squareRef = document.querySelector('.square');
// const btnRef = document.querySelector('#hideBtn');
// const btnTextShow = 'вернуть квадрат';
// const btnTextHide = 'спрятать квадрат';
// const callback = () => {
//     squareRef.classList.toggle('hide');
//     const text = btnRef.textContent === btnTextShow ? btnTextHide : btnTextShow;
//     btnRef.textContent = text;
// }
// btnRef.addEventListener('click', callback);



////////////////////////////// MODULE 8 //////////////////////////////



// RANDOMIZER

// const minNumberInput = document.querySelector('.min');
// const maxNumberInput = document.querySelector('.max');
// const resultBtn = document.querySelector('.result-btn');
// const resultAPI = document.querySelector('.result-js');

// let minValue = null;
// let maxValue = null;

// let result = 0

// const onNumberInput = function (e) {
//     minValue = Number(minNumberInput.value);
//     maxValue = Number(maxNumberInput.value);
//     result = Math.floor(Math.random() * maxValue) + minValue;
// }
// const onResultBtnClick = () => {
//     resultAPI.textContent = result;
// }

// minNumberInput.addEventListener('input', onNumberInput)
// maxNumberInput.addEventListener('input', onNumberInput)
// resultBtn.addEventListener('click', onResultBtnClick)



////////////////////////////// MODULE 9 //////////////////////////////



// const condition = Math.random() > 0.3
// const promise = new Promise((resolve, reject) => {
//     if (condition) {
//         resolve('все гуд')
//     }
//     reject('reject')
// })
// promise.then(v => console.log(v)).catch(e=>console.log(e))



// const fetchUserById = (username, id) => {
//     const condition = Math.random() > 0.5
//     return new Promise((resolve, reject) => {
//         if (condition) {
//             resolve(`нашел пользователя ${username} по айди ${id}`)
//         }
//         reject(`пользователя с ником ${username} и айди ${id} не найдено`)
//     })

// }
// fetchUserById('mango', 10).then(v=> console.log(v)).catch(error=>console.log(error))



// const targetDate = new Date(2021, 1, 21, 3, 12)
// function getWeekDay (date) {
//     const days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пятница', 'сб'];
//     return days[targetData.getDay(date)]
// }
// console.log(getWeekDay(targetDate));



// const tagPRef = document.querySelector('.promise-result');
// const promiseBtn = document.querySelector('.promise-btn');

// const getRandomNumber = () => Math.floor(Math.random() * 4) + 1;

// let delay = 0;

// const createPromise = (number, delay) => {
//     delay = number * 1000
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (number < 3) {
//                 resolve(delay);
//             }
//             reject(delay);
//         }, delay);

//     })
// }

// const onCreatePromiseBtnClick = () => {
//     tagPRef.textContent = 'Promise pending . . .'
//     createPromise(getRandomNumber(), delay).then(delay => { tagPRef.textContent = `✅Resolved after ${delay} ms` }).catch(delay => { tagPRef.textContent = `❌Rejected after ${delay} ms` })
// }

// promiseBtn.addEventListener('click', onCreatePromiseBtnClick)


// const frameworks = ['React', 'Vue', 'Angular'];
// const getRandomDelay = () => Math.floor(Math.random() * 3); тогда delay = getRandomDelay() * 1000;
// const getRandomDelay = () => Math.floor(Math.random() * 2000);
// const isSucces = () => Math.floor(Math.random() * 2) + 1;

// const makePromise = (framework) => {
//     return new Promise((resolve, reject) => {
//         const delay = getRandomDelay();
//         setTimeout(() => {
//             if (isSucces() < 2) {
//                 resolve({ message: 'Promise resolve✅', framework, delay })
//             }
            
//             reject({ message: 'Promise error❌', framework, delay })
//         }, delay);
//     })
// }

// если без Promise.race()

// frameworks.map(item => {
//     makePromise(item).then(v => {
//         console.log(v.message,v.framework, v.delay);
//     }).catch(e => {
//         console.log(e.message, e.framework, e.delay);
//     })
// })


// это гуд 🔽

// const promises = frameworks.map(makePromise);
// Promise.race(promises).then(v => { console.log(v.message, v.framework, v.delay) }).catch(e => { console.log(e.message, e.framework, e.delay) })

// Promise.all(promises).then(data => {
//     data.map(v => { console.log(v.message, v.framework, v.delay) })
// }).catch(e => { console.log(e.message, e.framework, e.delay) })