// script.js

const navLinks = document.querySelectorAll('.nav-link');
const pageDivs = document.querySelectorAll('.page');

function showPage(page) {
    pageDivs.forEach(function (div) {
        div.style.display = 'none';
    });

    const selectedPage = document.getElementById(page);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const page = this.getAttribute('href').substring(1);
        showPage(page);
    });
});

showPage('home');

