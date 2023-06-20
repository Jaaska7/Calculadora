const themeButton = document.getElementById('theme-button');
const linkElement = document.querySelector('link[href="styles/lighttheme.css"]');

themeButton.addEventListener('click', changeTheme);

function changeTheme() {
    if (linkElement.getAttribute('href') === 'styles/lighttheme.css') {
        linkElement.setAttribute('href', 'styles/darktheme.css');
    } else {
        linkElement.setAttribute('href', 'styles/lighttheme.css');
    }
}