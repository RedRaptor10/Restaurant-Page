function loadMenuPage() {
    let content = document.getElementById('content');
    let main = document.createElement('div');
    main.id = 'main';
    main.style.textAlign = 'unset';

    let menu = document.createElement('ol');
    menu.id = 'menu';

    let menuList = [
        'Chicken',
        'Ham',
        'Eggs',
        'Soup',
        'Fish'
    ];

    menuList.forEach((item) => {
        let listItem = document.createElement('li');
        listItem.innerHTML = item;
        menu.appendChild(listItem);
    });

    // Apend
    main.appendChild(menu);
    content.appendChild(main);
}

export default loadMenuPage;