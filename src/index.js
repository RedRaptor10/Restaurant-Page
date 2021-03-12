import initialize from './init.js';
import loadHomePage from './homePage.js';
import loadMenuPage from './menuPage.js';
import loadContactPage from './contactPage.js';

function switchTabs() {
    let content = document.getElementById('content');
    let homeTab = document.getElementById('homeTab');
    let menuTab = document.getElementById('menuTab');
    let contactTab = document.getElementById('contactTab');
    let main = document.getElementById('main');

    homeTab.addEventListener('click', () => {
        content.removeChild(content.childNodes[1]);
        homeTab.classList.add('active');
        menuTab.classList.remove('active');
        contactTab.classList.remove('active');
        loadHomePage();
    });

    menuTab.addEventListener('click', () => {
        content.removeChild(content.childNodes[1]);
        homeTab.classList.remove('active');
        menuTab.classList.add('active');
        contactTab.classList.remove('active');
        loadMenuPage();
    });

    contactTab.addEventListener('click', () => {
        content.removeChild(content.childNodes[1]);
        homeTab.classList.remove('active');
        menuTab.classList.remove('active');
        contactTab.classList.add('active');
        loadContactPage();
    });
}

initialize();
loadHomePage();
switchTabs();