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



// посчитать кол-во completed: true и false

// const tasks = [
//     { id: 0, text: "task 1", completed: true },
//     { id: 1, text: "task 2", completed: true },
//     { id: 2, text: " task 3", completed: false },
//     { id: 3, text: " task 4", completed: false },
//     { id: 4, text: " task 5", completed: false },
// ];

// const count = tasks.reduce((prevValue, task) => {
//     if (task.completed) {
//         prevValue.completed += 1
//     } else {
//         prevValue.active += 1
//     }
//     return prevValue;
// }, { active: 0, completed: 0 });

// console.log(count.active);
// console.log(count.completed);



// function openCase() {
//   const items = [
//     {
//       name: 'Dragon lore',
//       chance: 0.04
//     },
//     {
//       name: 'синяя пушка',
//       chance: 0.86
//     },
//     {
//       name: 'красная пушка',
//       chance: 0.1
//     }
//   ];

//     let randomNumber = Math.random();
//     console.log(randomNumber);
//     let currentChance = 0;

//   for (let i = 0; i < items.length; i += 1) {
//     currentChance += items[i].chance;

//     if (randomNumber <= currentChance) {
//       return items[i].name;
//     }
//   }
// }
// console.log(openCase());