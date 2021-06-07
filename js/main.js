const submitDOM = document.querySelector('button');
const orderDOM = document.querySelector('.order');
const nameDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const pagrindinisPatiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const allGerimaiDOM = document.querySelectorAll('input[name="gerimas"]');

function arNoriu(DOM) {
    return DOM.checked ? 'nori' : 'nenori';
}

function kurisPazymetas(DOMlist) {
    for (const itemDOM of DOMlist) {
        if (itemDOM.checked) {
            return itemDOM.value;
        }
    }
}

submitDOM.addEventListener('click', (e) => {
    e.preventDefault();

    const vardas = nameDOM.value.trim();
    const pasirinktasGerimas = kurisPazymetas(allGerimaiDOM);
    const sakinioPradzia = vardas ? 'vardu ' + vardas : 'nenudores vardo';
    const sakinioPabaiga = pasirinktasGerimas ? pasirinktasGerimas + ' yra pasirinktas gerimas' : 'gerimo nepasirinko';

    orderDOM.innerText = `Uzsakovas ${sakinioPradzia} ${arNoriu(sriubaDOM)} sriubos, ${arNoriu(pagrindinisPatiekalasDOM)} pagrindinio patiekalo, ${arNoriu(desertasDOM)} deserto ir ${sakinioPabaiga}.`;
})

/*
PRADZIA:
Uzsakovas vardu X nori....
Uzsakovas nenurodes vardo nori....

PABAIGA:
ir X yra pasirinktas gerimas.
ir gerimo nepasirinko.


EXTRA:
Uzsakovas vardu X nori sriubos, pagrindinio patiekalo, deserto ir [gerimas]
Uzsakovas vardu X nori sriubos, pagrindinio patiekalo, bet nenori deserto ir [gerimas]
Uzsakovas vardu X nori sriubos, bet nenori pagrindinio patiekalo, deserto ir [gerimas]
Uzsakovas vardu X nenori sriubos, pagrindinio patiekalo, deserto ir [gerimas]


*/