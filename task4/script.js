const textHref = document.querySelector('a');

textHref.addEventListener('click', (event) =>{
    event.preventDefault();
    textHref.textContent = prompt('Введите новый текст');
})