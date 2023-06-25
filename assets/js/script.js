// script.js

function changePage(page) {
    // Get the content div
    var contentDiv = document.getElementById('content');

    // Clear the current content
    contentDiv.innerHTML = '';

    // Check the page parameter and update the content accordingly
    if (page === 'home'){
        contentDiv.innerHTML = '<h1>Welcome to My Portfolio</h1><p>This is the homepage.</p>';
    } else if (page === 'introduction') {
        contentDiv.innerHTML = '<h1>Introduction</h1><p>This is the introduction section of my portfolio website.</p>';
    } else if (page === 'projects') {
        contentDiv.innerHTML = '<h1>Projects</h1><p>This is the projects section of my portfolio website.</p>';
    } else if (page === 'contact') {
        contentDiv.innerHTML = '<h1>Contact</h1><p>This is the contact section of my portfolio website.</p>';
    }
}

