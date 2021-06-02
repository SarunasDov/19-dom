// const h1DOM = document.querySelector('h1');
// h1DOM.classList.add('antraste');

const h1DOM = document.querySelector('h1');
h1DOM.innerText = 'Zuikio pomidoras darzas';
h1DOM.classList.add('pavadinimas')


const liDOM = document.querySelectorAll('li');
for (let i = 0; i < liDOM.length; i++) {
    liDOM[i].innerText = 'Pomidoras, bet ne raudonas';
    liDOM[i].classList.add('pomidoras')

}