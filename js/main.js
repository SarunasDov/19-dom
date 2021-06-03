let rezultatas = 0;
const gryzta = 'Te prasideda zaidynes';

const minusDOM = document.querySelector('.minus');
const plusDOM = document.querySelector('.plus');
const numberDOM = document.querySelector('.number');
const resetDOM = document.querySelector('.reset');
const antrasteDOM = document.querySelector('h1')

minusDOM.addEventListener('click', () => {
    numberDOM.innerText = --rezultatas;
    antrasteDOM.innerText = 'Zaidimas prasideda';

})

plusDOM.addEventListener('click', () => {
    numberDOM.innerText = ++rezultatas;
    antrasteDOM.innerText = 'Zaidimas prasideda';
})

resetDOM.addEventListener('click', () => {
    rezultatas = 0;
    numberDOM.innerText = rezultatas;
    antrasteDOM.innerText = gryzta;
})
