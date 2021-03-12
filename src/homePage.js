function loadHomePage() {
    let content = document.getElementById('content');
    let main = document.createElement('div');
    main.id = 'main';
    main.style.textAlign = 'center';
    main.innerHTML = 'Welcome to the number 1<br />restaurant in the world!';

    // Apend
    content.appendChild(main);
}

export default loadHomePage;