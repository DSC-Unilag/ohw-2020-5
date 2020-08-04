const hamburger = document.getElementById('hamburger');
const hamburgerSection = document.getElementById('hamburger-section');

hamburger.addEventListener('click', displayMenu);

function displayMenu(e) {
    if (e.target.src.includes('https://res.cloudinary.com/dizrb3vql/image/upload/v1596145703/Group_twsno9.png')) {
        e.target.src = 'https://res.cloudinary.com/dizrb3vql/image/upload/v1596126035/close_pxrklj.svg';
        hamburgerSection.style.display = 'flex';
    } else {
        e.target.src = 'https://res.cloudinary.com/dizrb3vql/image/upload/v1596145703/Group_twsno9.png';
        hamburgerSection.style.display = 'none';
    }
}