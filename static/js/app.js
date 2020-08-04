const hamburger = document.getElementById('hamburger');
const navBar = document.querySelector('.hide');

hamburger.addEventListener('click', displayMenu);

function displayMenu(e) {
    if (e.target.src.includes('id=1os-XVZj9O17KJ4BdoKrG4qAhKn6t7Kvh')) {
        e.target.src = 'https://res.cloudinary.com/dizrb3vql/image/upload/v1596126035/close_pxrklj.svg';
        // navBar.style.cssText = "display: flex;flex-direction: column;";
        navBar.style.display = 'flex';
        navBar.style.flexDirection = 'column-reverse';
    } else {
        e.target.src = 'https://drive.google.com/uc?export=view&id=1os-XVZj9O17KJ4BdoKrG4qAhKn6t7Kvh';
        navBar.style.display = 'none';
    }
}