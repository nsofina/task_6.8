const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})


const alertF = document.querySelector('#alertF');

alertF.addEventListener('click', () => {
    alert('Служит для вывода информации в диалоговое окно');
})

const promptF = document.querySelector('#promptF');

promptF.addEventListener('click', () => {
    prompt('Служит для вывода диалогового окна','Введите что-нибудь');
    console.log('Ура, получилось!');
})