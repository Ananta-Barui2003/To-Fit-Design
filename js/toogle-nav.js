let mainMenu = document.querySelector('.menu_bar');
let open_button = document.getElementById('open_btn');
let close_button = document.getElementById('close_btn');

function openMenu() {
    mainMenu.style.right = '0';
    open_button.style.display = 'none';
    close_button.style.display = 'block';
}

function closeMenu() {
    mainMenu.style.right = '-100%';
    open_button.style.display = 'block';
    close_button.style.display = 'none';
}