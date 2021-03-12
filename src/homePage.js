function loadHomePage() {
    let content = document.getElementById('content');
    let main = document.createElement('div');
    main.id = 'main';
    main.style.textAlign = 'center';
    main.innerHTML = 'Welcome to the Restaurant Page!<br />';
    main.innerHTML += 'Created from the Odin Project.'

    // Apend
    content.appendChild(main);
}

export default loadHomePage;