let input = document.querySelector('input');

let divContent = document.querySelector('div');

input.addEventListener('keydown', () => {
    divContent.textContent = input.value;
})

let button = document.querySelector('button');

let form = document.querySelector('form');

button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(input.value);
    form.reset();
    divContent.textContent = '';
})