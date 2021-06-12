
function renderSelect(selector, dataList) {
    const DOM = document.querySelector(selector);

    let optionsHTML = '';
    for (const dataItem of dataList) {
        optionsHTML += `<option value="${dataItem}">${dataItem}</option>`;
    }

    const HTML = `<select>${optionsHTML}</select>`;
    DOM.insertAdjacentHTML('afterend', HTML);
}

const animals = ['zuikis', 'barsukas', 'lape', 'vilkas', 'sernas', 'stirna', 'vovere'];
renderSelect('label', animals);

const selectDOM = document.querySelector('select');
const buttonDOM = document.querySelector('button');
const optionDOM = document.querySelector('.option');

buttonDOM.addEventListener('click', (event) => {
    event.preventDefault();
    optionDOM.innerText = selectDOM.value;
})