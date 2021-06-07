const klientasDOM = document.querySelector('#customer');
const sriubaDOM = document.querySelector('#sriuba');
const pgrPatiekalasDOM = document.querySelector('#patiekalas');
const desertasDOM = document.querySelector('#desertas');
const gerimaiDOM = document.querySelectorAll('.drinks');

const uzsakytiDOM = document.querySelector('button');
const uzsakymasDOM = document.querySelector('.order');

uzsakytiDOM.addEventListener('click', (event) => {
    event.preventDefault();

    function pasirinktiMaista(item) {
        if (item.checked) {
            return 'nori';
        }
        return 'nenori';
    }

    function pasirinktiGerima(item) {
        let gerimas = '';
        for (let i = 0; i < item.length; i++) {
            if (item[i].checked === true) {
                return (gerimas = item[i].value);
            }
        }
    }

    uzsakymasDOM.innerText = `Klientas ${klientasDOM.value
        }, ${pasirinktiMaista(sriubaDOM)} sriubos, ${pasirinktiMaista(
            pgrPatiekalasDOM
        )} pagrindinio patiekalo, ${pasirinktiMaista(
            desertasDOM
        )} deserto ir ${pasirinktiGerima(gerimaiDOM)} yra pasirinktas gerimas.`;
});