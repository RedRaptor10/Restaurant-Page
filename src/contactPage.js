function loadContactPage() {
    let content = document.getElementById('content');
    let main = document.createElement('div');
    main.id = 'main';
    main.style.textAlign = 'center';
    main.innerHTML = 'Owner: The Restaurant Owner<br />';
    main.innerHTML += 'Email: owner@restaurantpage.com';

    // Apend
    content.appendChild(main);
}

export default loadContactPage;