
import renderContent from './render';
import background from '../assets/background.jpg';
import { render } from 'sass';

function header() {

    const body = document.querySelector('body');
    body.setAttribute('style', `background: url(${'./background.jpg'}); background-size: cover; background-attachment: fixed;`);

    const content = document.getElementById('content');
    const header = document.createElement('header');
    header.classList.add('header');

    const restaurantName = document.createElement('h1');
    restaurantName.textContent = 'XYZ Restaurant';

    header.appendChild(restaurantName);
    content.appendChild(header);

    header.appendChild(navBar());

    const buttons = document.querySelectorAll('.navs button');
    buttons.forEach((button) => button.addEventListener('click', buttonHandler));
}

function navBar() {
    const nav = document.createElement('nav');
    nav.classList.add('navs');
    nav.appendChild(home());
    nav.appendChild(menu());
    nav.appendChild(contact());

    return nav;
}

function home() {
    const homePage = document.createElement('button');
    homePage.classList.add('home');
    homePage.textContent = 'Home';

    return homePage;
}

function menu() {
    const menuPage = document.createElement('button');
    menuPage.classList.add('menu');
    menuPage.textContent = 'Menu';

    return menuPage;
}

function contact() {
    const contactPage = document.createElement('button');
    contactPage.classList.add('contact');
    contactPage.textContent = 'Contacts';

    return contactPage;
}

function buttonHandler() {
    renderContent.check(this);
    renderContent.content(this);
}

renderContent.defa();


export default header;