const menuLinks = document.querySelectorAll('.nav-link');
const contentDivs = document.querySelectorAll('.page');
const DEFAULT_PAGE = 'home';

const pages = {};

contentDivs.forEach((div) => {
    const pageId = div.id;
    pages[pageId] = div;
});

function showPage(page) {
    contentDivs.forEach((div) => {
        div.classList.remove('show');
        div.classList.add('hide');
    });

    const selectedPage = pages[page];
    if (selectedPage) {
        selectedPage.classList.remove('hide');
        selectedPage.classList.add('show');
    } else {
        showPage(DEFAULT_PAGE);
    }
}

navLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const page = this.getAttribute('href').substring(1);
        showPage(page);
    });
});

showPage(DEFAULT_PAGE);

