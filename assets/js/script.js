function changePage(page) {
    // Remove 'active' class from all navigation items
    const navItems = document.querySelectorAll('.navbar li');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // Add 'active' class to the selected navigation item
    const selectedNavItem = document.querySelector(`.navbar li a[href="#"][onclick="changePage('${page}')"]`);
    selectedNavItem.parentNode.classList.add('active');

    // Load the corresponding content for the selected page
    const content = document.getElementById('content');
    switch (page) {
        case 'introduction':
            content.innerHTML = `
                <h1>Welcome to My Portfolio</h1>
                <p>This is the introduction section of my portfolio website.</p>
            `;
            break;
        case 'projects':
            content.innerHTML = `
                <h1>Projects</h1>
                <p>Here are some of the projects I've worked on.</p>
            `;
            break;
        case 'contact':
            content.innerHTML = `
                <h1>Contact</h1>
                <p>Feel free to reach out to me using the following contact information.</p>
            `;
            break;
        default:
            break;
    }
}
