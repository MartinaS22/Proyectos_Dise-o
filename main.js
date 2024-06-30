var menu = document.querySelector('.hamburger');
var menuppal = document.querySelector('.menuppal');

// method
function toggleMenu(event) {
    this.classList.toggle('is-active');
    menuppal.classList.toggle('is_active');
    event.preventDefault();
}

// event
menu.addEventListener('click', toggleMenu, false);