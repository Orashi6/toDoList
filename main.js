// let form = document.querySelector('form');
// const body = document.querySelector('body')
// const h1 = document.querySelector('h1')
// let input = document.querySelector('input');
// let send = document.querySelector('.send-btn')
// let mode = document.querySelector('.mode')
// let arr = []
// form.addEventListener('submit', (e) => {
//     e.preventDefault()
// })
// send.addEventListener('click', function (stop) {

//     stop.preventDefault()
//     let inputvale = input.value
//     console.log(inputvale);
//     console.log(arr);
//     input.value = ' '

//     if (input === ' ') {
//         alert('Please write')
//     } else {
//         arr.push(inputvale)
//     }


//     arr.forEach(e => {
//         inputvale = ' '
//         let ul = document.querySelector('ul')
//         let li = document.createElement('li')
//         ul.append(li)
//         li.innerHTML = e
//         arr.pop()



//         li.addEventListener('click', function () {
//             ul.removeChild(li)
//         })

//     });


    
    





// })


// mode.addEventListener('click', () => {

//     let ul = document.querySelector('ul')
//     let li = document.createElement('li')
//     ul.append(li)

//     body.classList.toggle = 'black'
//     h1.classList.toggle = 'white'
//     li.classList.toggle = 'wht'

// })






let form = document.querySelector('form');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
let input = document.querySelector('input');
let send = document.querySelector('.send-btn');
let mode = document.querySelector('.mode');
let arr = [];



mode.addEventListener('click', () => {
    body.classList.toggle('black');
    h1.classList.toggle('white');
    body.style.color
    // Переключаем класс 'wht' для всех элементов списка
    let listItems = document.querySelectorAll('ul li');
    listItems.forEach(li => {
        li.classList.toggle('wht');
    });
});



form.addEventListener('submit', (e) => {
    e.preventDefault();
});

send.addEventListener('click', function (stop) {
    stop.preventDefault();
    let inputvale = input.value.trim(); // Убираем пробелы
    console.log(inputvale);
    console.log(arr);
    input.value = ''; // Очищаем поле ввода

    if (inputvale === '') {
        alert('Please write');
    } else {
        arr.push(inputvale);
        let ul = document.querySelector('ul');
        let li = document.createElement('li');
        li.style.cursor = 'pointer'
        li.style.borderBottom = '2px solid #6C63FF'
        li.style.width = '650px'
        ul.append(li);
        li.innerHTML = inputvale; // Используем введенное значение
        li.addEventListener('click', function () {
            ul.removeChild(li);
        });
    }
});


// mode.addEventListener('click', () => {
//     body.classList.toggle('black');
//     h1.classList.toggle('white');
//     li.classList.toggle('wht')
// });
