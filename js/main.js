// Pirmas variantas

// const lentosdydisDOM = document.querySelector('.option');
// const submitDOM = document.querySelector('button');
// const lentosInputDOM = document.querySelector('#board');

// submitDOM.addEventListener('click', (e) => {
//     e.preventDefault();
//     lentosdydisDOM.innerText = lentosInputDOM.value + 'x' + lentosInputDOM.value;
// })

// Antras variantas

// const button = document.querySelector('button');
// const input = document.querySelector('#board');
// const board = document.querySelector('.board');
// const option = document.querySelector('.option');

// button.addEventListener('click', (e) => {
//     e.preventDefault();
//     option.innerText = `${input.value}x${input.value}`;
// })

// Trecias variantas 

// const optionDOM = document.querySelector('.option');
// const buttonDOM = document.querySelector('button');
// const inputDOM = document.querySelector('board');

// const board = document.querySelector('.board');

// buttonDOM.addEventListener('click', (e) => {
//     e.preventDefault();
//     const n = inputDOM.value;
//     optionDOM.textContent = `${n}x${n}`;
//     renderChessBoard(n, board);
// });

// function renderChessBoard(boardSize, DOM) {
//     let rowHTML = '';
//     for (let i = 1; i <= boardSize; i++) {
//         rowHTML += `<div class="row"></div>`
//     }
//     DOM.insertAdjacentHTML('beforeend', rowHTML);
// }


const button = document.querySelector('button');
const input = document.querySelector('#board');
const option = document.querySelector('.option');

const board = document.querySelector('.board');

button.addEventListener('click', (e) => {
    e.preventDefault();
    // const n = +input.value;  <----------- blogesnis variantas
    const n = parseInt(input.value);
    option.textContent = `${n}x${n}`;
    renderChessBoard(n, board);
});

function renderChessBoard(boardSize, DOM) {
    let rowHTML = '';
    const rowSize = 100 / boardSize;
    for (let i = 1; i <= boardSize; i++) {
        rowHTML += `<div class="row" style="height:${rowSize}%;"></div>`
    }
    DOM.innerHTML = rowHTML;
}
