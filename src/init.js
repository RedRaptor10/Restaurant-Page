function initialize() {
    let content = document.getElementById('content');
    let header = document.createElement('div');

    // Header
    header.id = 'header';
    header.innerHTML = 'Restaurant Page';

    // Navigation Menu
    let nav = document.createElement('nav');
    nav.id = 'nav';

    let homeTab = document.createElement('button');
    homeTab.id = 'homeTab';
    homeTab.classList.add('tab', 'active');
    homeTab.innerHTML = 'Home';

    let menuTab = document.createElement('button');
    menuTab.id = 'menuTab';
    menuTab.classList.add('tab');
    menuTab.innerHTML = 'Menu';

    let contactTab = document.createElement('button');
    contactTab.id = 'contactTab';
    contactTab.classList.add('tab');
    contactTab.innerHTML = 'Contact';

    // Apend
    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);
    header.appendChild(nav);

    content.appendChild(header);
}

export default initialize;