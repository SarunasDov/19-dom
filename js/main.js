
const animals = ['zuikis', 'barsukas', 'lape', 'vilkas', 'stirna', 'vovere'];

function favoriteAnimals(selector, data) {
    //Validations

    //Logic
    const selectorDOM = document.querySelector(selector);
    const labelDOM = document.querySelector('label');
    const button = document.querySelector('button');

    let HTML = '';

    for (const item of data) {
        HTML += `<option value="${item}">${item}</option>`
    }

    labelDOM.insertAdjacentHTML('afterend', `<select>${HTML}</select>`);

    const selectDOM = document.querySelector('select');
    selectDOM.classList.add('test');
    const spanDOM = document.querySelector('.option');
    spanDOM.classList.add('test');

    button.addEventListener('click', (event) => {
        event.preventDefault();
        spanDOM.innerText = selectDOM.value;
    });

    // post Logic Validations
}

console.log(favoriteAnimals('form', animals));

