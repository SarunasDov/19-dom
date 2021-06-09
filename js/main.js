
// function generuotiSocials(selector, array) {
//     const iconsDOM = document.querySelector(selector);
//     if (!Array.isArray(array) ||
//         array.length === 0) {
//         console.error('ERROR: nerastas elementas');
//         return false;
//     }

//     let HTML = '';
//     for (let element of array) {
//         HTML += `<i class="fa fa-${element}"></i>`;
//     }
//     iconsDOM.innerHTML = HTML;
// }


// const icons = ['facebook', 'twitter', 'linkedin'];
// const icons1 = [];
// generuotiSocials('.socials', icons1);






function generuotiSocials(selector, icons) {

    if (selector === '' ||
        typeof selector !== 'string') {
        console.error('ERROR: nerastas elementas');
        return false;
    }

    if (!Array.isArray(icons) ||
        icons.length === 0) {
        console.error('ERROR: negali buti tuscias');
        return false;
    }

    const iconsDOM = document.querySelector(selector);
    if (!iconsDOM) {
        console.error('ERROR: nepavyko rasti elemento');
        return false;
    }

    let HTML = '';
    for (let i = 0; i < icons.length; i++) {
        if (typeof icons[i] === 'string' &&
            icons[i] !== '') {
            HTML += `<i class="fa fa-${icons[i]}"></i>`;
        }
    }

    iconsDOM.innerHTML = HTML;

}
const icons = ['facebook', 5, [], 'twitter', 'linkedin'];
generuotiSocials('.socials', icons);