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