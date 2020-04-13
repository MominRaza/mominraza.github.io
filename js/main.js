var navButton = document.getElementById('nav-button');
function toggleMenu() {
    if (navButton.classList.contains('active')) {
        navButton.classList.remove('active');
    } else {
        navButton.classList.add('active');
    }
}