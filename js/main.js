// const h1DOM = document.querySelector('h1')
const lentaDOM = document.querySelector('.lenta');
const namuRezDOM = lentaDOM.querySelector('[data-komanda="namu"]');
const sveciuRezDOM = lentaDOM.querySelector('[data-komanda="sveciu"]');

const aiksteleDOM = document.querySelector('.aikstele');
const namuKomandaDOM = aiksteleDOM.querySelector('[data-komanda="namu"]');
const taskaiNamuDOM = namuKomandaDOM.querySelectorAll('button');

const sveciuKomandaDOM = aiksteleDOM.querySelector('[data-komanda="sveciu"]');
const taskaiSveciuDOM = sveciuKomandaDOM.querySelectorAll('button');


let namuKomandosTaskai = 0;

for (let i = 0; i < taskaiNamuDOM.length; i++) {
    const mygtukas = taskaiNamuDOM[i];
    mygtukas.addEventListener('click', () => {
        namuKomandosTaskai += i + 1;
        namuRezDOM.innerText = namuKomandosTaskai;
    })
}

let sveciuKomandosTaskai = 0;

for (let i = 0; i < taskaiSveciuDOM.length; i++) {
    const mygtukas = taskaiSveciuDOM[i];
    mygtukas.addEventListener('click', () => {
        sveciuKomandosTaskai += i + 1;
        sveciuRezDOM.innerText = sveciuKomandosTaskai;
    })
}


// const namuFormDOM = document.querySelectorAll('[data-points="1"]');