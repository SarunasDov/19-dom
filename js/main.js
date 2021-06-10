function renderNav(selector, linkList) {
    const imgDOM = document.querySelector('Logo');
    const headerDOM = document.querySelector('header');
    let HTML = '';
    for (const menuItems of linkList) {
        HTML += `<a href="${menuItems.href}">${menuItems.title}</a>`;


    }
    headerDOM.innerHTML += `<nav>${HTML}</nav>`;
    //imgDOM.insertAdjacentHTML("afterend", `<nav>${HTML}</nav>`);
}

const menu = [
    {
        href: '#',
        title: 'Home'
    },
    {
        href: '#',
        title: 'Services'
    },
    {
        href: '#',
        title: 'About us'
    },
    {
        href: '#',
        title: 'Contact us'
    }
];

renderNav('header', menu);